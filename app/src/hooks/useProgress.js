import { useState, useEffect } from 'react';

const STORAGE_KEY = 'tuteur-finnois-progress';

// Niveaux de maitrise
// 0: Nouveau (jamais vu)
// 1: Reconnu (vu en mode flip)
// 2: Ecrit (tape correctement 1x)
// 3: Consolide (ecrit correctement sur 2 jours differents)
// 4: Maitrise (3 bonnes reponses consecutives, espacement 7+ jours)

export const MASTERY_LEVELS = {
  NEW: 0,
  RECOGNIZED: 1,
  WRITTEN: 2,
  CONSOLIDATED: 3,
  MASTERED: 4
};

export const MASTERY_LABELS = {
  0: { name: 'Nouveau', nameFi: 'Uusi', icon: '○', color: '#E5DDD0' },
  1: { name: 'Reconnu', nameFi: 'Tunnistettu', icon: '◐', color: '#F0D58C' },
  2: { name: 'Ecrit', nameFi: 'Kirjoitettu', icon: '◕', color: '#7BABC4' },
  3: { name: 'Consolide', nameFi: 'Vahvistettu', icon: '●', color: '#5B8FA8' },
  4: { name: 'Maitrise', nameFi: 'Hallittu', icon: '★', color: '#8FB58F' }
};

// Intervalles SRS en jours selon le niveau
const SRS_INTERVALS = {
  0: 0,    // Nouveau - revoir immediatement
  1: 1,    // Reconnu - 1 jour
  2: 2,    // Ecrit - 2 jours
  3: 4,    // Consolide - 4 jours
  4: 7     // Maitrise - 7 jours minimum
};

const defaultProgress = {
  completedLessons: [],
  currentLesson: null,
  vocabularyMastered: [],
  // Donnees detaillees pour chaque mot
  vocabularyData: {},
  exerciseHistory: [],
  stats: {
    totalExercises: 0,
    correctAnswers: 0,
    streak: 0,
    lastActivity: null,
    wordsReviewedToday: 0,
    lastReviewDate: null
  }
};

// Structure des donnees pour un mot
const createWordData = () => ({
  level: MASTERY_LEVELS.NEW,
  // Historique des revisions
  correctDates: [],        // Dates des bonnes reponses (pour niveau 3)
  writtenCorrectDates: [], // Dates ou ecrit correctement (pour niveau 3)
  consecutiveCorrect: 0,   // Bonnes reponses consecutives (pour niveau 4)
  lastReviewDate: null,
  nextReviewDate: null,
  // Stats
  totalAttempts: 0,
  correctAttempts: 0,
  // Mode de derniere revision
  lastReviewMode: null     // 'flip' ou 'write'
});

export function useProgress() {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Migration: convertir vocabularySRS ancien vers vocabularyData
        if (parsed.vocabularySRS && !parsed.vocabularyData) {
          const vocabularyData = {};
          Object.entries(parsed.vocabularySRS).forEach(([word, srs]) => {
            vocabularyData[word] = {
              ...createWordData(),
              level: Math.min(srs.level, 4), // Cap au niveau 4
              lastReviewDate: srs.lastReview,
              nextReviewDate: srs.nextReview,
              totalAttempts: srs.reviewCount || 0,
              correctAttempts: srs.correctCount || 0
            };
          });
          return { ...parsed, vocabularyData, vocabularySRS: undefined };
        }
        return parsed;
      } catch {
        return defaultProgress;
      }
    }
    return defaultProgress;
  });

  // Sauvegarder automatiquement
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  // Marquer une lecon comme completee
  const completeLesson = (lessonId) => {
    setProgress(prev => ({
      ...prev,
      completedLessons: prev.completedLessons.includes(lessonId)
        ? prev.completedLessons
        : [...prev.completedLessons, lessonId],
      stats: {
        ...prev.stats,
        lastActivity: new Date().toISOString()
      }
    }));
  };

  // Definir la lecon en cours
  const setCurrentLesson = (lessonId) => {
    setProgress(prev => ({
      ...prev,
      currentLesson: lessonId
    }));
  };

  // Enregistrer un resultat d'exercice
  const recordExercise = (lessonId, exerciseIndex, isCorrect) => {
    setProgress(prev => {
      const newStreak = isCorrect ? prev.stats.streak + 1 : 0;
      return {
        ...prev,
        exerciseHistory: [
          ...prev.exerciseHistory,
          {
            lessonId,
            exerciseIndex,
            isCorrect,
            timestamp: new Date().toISOString()
          }
        ],
        stats: {
          ...prev.stats,
          totalExercises: prev.stats.totalExercises + 1,
          correctAnswers: prev.stats.correctAnswers + (isCorrect ? 1 : 0),
          streak: newStreak,
          lastActivity: new Date().toISOString()
        }
      };
    });
  };

  // Marquer un mot comme maitrise (ancien systeme, garde pour compatibilite)
  const masterWord = (word) => {
    setProgress(prev => ({
      ...prev,
      vocabularyMastered: prev.vocabularyMastered.includes(word)
        ? prev.vocabularyMastered
        : [...prev.vocabularyMastered, word]
    }));
  };

  // === NOUVEAU SYSTEME DE MAITRISE ===

  // Calculer la date de prochaine revision
  const calculateNextReview = (level) => {
    const days = SRS_INTERVALS[level] || 0;
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + days);
    return nextDate.toISOString().split('T')[0];
  };

  // Obtenir les donnees d'un mot
  const getWordData = (word) => {
    return progress.vocabularyData?.[word] || createWordData();
  };

  // Obtenir le niveau de maitrise d'un mot
  const getWordLevel = (word) => {
    return progress.vocabularyData?.[word]?.level || MASTERY_LEVELS.NEW;
  };

  // Reviser un mot en mode FLIP (reconnaissance)
  const reviewWordFlip = (word, isCorrect) => {
    setProgress(prev => {
      const currentData = prev.vocabularyData?.[word] || createWordData();
      const today = new Date().toISOString().split('T')[0];

      let newLevel = currentData.level;
      let newConsecutive = currentData.consecutiveCorrect;
      let newCorrectDates = [...currentData.correctDates];

      if (isCorrect) {
        // En mode flip, on peut atteindre max niveau 1 (Reconnu)
        if (newLevel === MASTERY_LEVELS.NEW) {
          newLevel = MASTERY_LEVELS.RECOGNIZED;
        }
        newConsecutive++;
        if (!newCorrectDates.includes(today)) {
          newCorrectDates.push(today);
        }
      } else {
        // Erreur : on descend d'un niveau (min 0)
        newLevel = Math.max(MASTERY_LEVELS.NEW, newLevel - 1);
        newConsecutive = 0;
      }

      const isNewDay = prev.stats.lastReviewDate !== today;

      return {
        ...prev,
        vocabularyData: {
          ...prev.vocabularyData,
          [word]: {
            ...currentData,
            level: newLevel,
            correctDates: newCorrectDates,
            consecutiveCorrect: newConsecutive,
            lastReviewDate: today,
            nextReviewDate: calculateNextReview(newLevel),
            totalAttempts: currentData.totalAttempts + 1,
            correctAttempts: currentData.correctAttempts + (isCorrect ? 1 : 0),
            lastReviewMode: 'flip'
          }
        },
        stats: {
          ...prev.stats,
          lastActivity: new Date().toISOString(),
          wordsReviewedToday: isNewDay ? 1 : prev.stats.wordsReviewedToday + 1,
          lastReviewDate: today
        }
      };
    });
  };

  // Reviser un mot en mode ECRITURE
  const reviewWordWrite = (word, isCorrect) => {
    setProgress(prev => {
      const currentData = prev.vocabularyData?.[word] || createWordData();
      const today = new Date().toISOString().split('T')[0];

      let newLevel = currentData.level;
      let newConsecutive = currentData.consecutiveCorrect;
      let newCorrectDates = [...currentData.correctDates];
      let newWrittenDates = [...currentData.writtenCorrectDates];

      if (isCorrect) {
        // En mode ecriture, progression possible jusqu'au niveau 4
        if (!newWrittenDates.includes(today)) {
          newWrittenDates.push(today);
        }
        if (!newCorrectDates.includes(today)) {
          newCorrectDates.push(today);
        }
        newConsecutive++;

        // Determiner le nouveau niveau
        if (newLevel < MASTERY_LEVELS.WRITTEN) {
          // Premiere ecriture correcte -> niveau 2
          newLevel = MASTERY_LEVELS.WRITTEN;
        } else if (newLevel === MASTERY_LEVELS.WRITTEN) {
          // Verifier si ecrit sur 2 jours differents -> niveau 3
          const uniqueWriteDays = [...new Set(newWrittenDates)];
          if (uniqueWriteDays.length >= 2) {
            newLevel = MASTERY_LEVELS.CONSOLIDATED;
          }
        } else if (newLevel === MASTERY_LEVELS.CONSOLIDATED) {
          // Verifier conditions pour niveau 4:
          // - 3 bonnes reponses consecutives
          // - Dernier review il y a 7+ jours
          const lastReview = currentData.lastReviewDate;
          let daysSinceLastReview = 0;
          if (lastReview) {
            const last = new Date(lastReview);
            const now = new Date(today);
            daysSinceLastReview = Math.floor((now - last) / (1000 * 60 * 60 * 24));
          }

          if (newConsecutive >= 3 && daysSinceLastReview >= 7) {
            newLevel = MASTERY_LEVELS.MASTERED;
          }
        }
      } else {
        // Erreur : descendre d'un niveau, reset consecutive
        newLevel = Math.max(MASTERY_LEVELS.NEW, newLevel - 1);
        newConsecutive = 0;
      }

      const isNewDay = prev.stats.lastReviewDate !== today;

      // Mettre a jour vocabularyMastered si niveau 4
      const newMastered = newLevel === MASTERY_LEVELS.MASTERED &&
        !prev.vocabularyMastered.includes(word)
          ? [...prev.vocabularyMastered, word]
          : prev.vocabularyMastered;

      return {
        ...prev,
        vocabularyData: {
          ...prev.vocabularyData,
          [word]: {
            ...currentData,
            level: newLevel,
            correctDates: newCorrectDates,
            writtenCorrectDates: newWrittenDates,
            consecutiveCorrect: newConsecutive,
            lastReviewDate: today,
            nextReviewDate: calculateNextReview(newLevel),
            totalAttempts: currentData.totalAttempts + 1,
            correctAttempts: currentData.correctAttempts + (isCorrect ? 1 : 0),
            lastReviewMode: 'write'
          }
        },
        vocabularyMastered: newMastered,
        stats: {
          ...prev.stats,
          lastActivity: new Date().toISOString(),
          wordsReviewedToday: isNewDay ? 1 : prev.stats.wordsReviewedToday + 1,
          lastReviewDate: today
        }
      };
    });
  };

  // Fonction legacy pour compatibilite
  const reviewWord = (word, difficulty) => {
    const isCorrect = difficulty !== 'again';
    reviewWordFlip(word, isCorrect);
  };

  // Obtenir les mots a reviser aujourd'hui
  const getWordsToReview = (allVocabulary) => {
    const today = new Date().toISOString().split('T')[0];
    return allVocabulary.filter(word => {
      const data = progress.vocabularyData?.[word.fi];
      if (!data) return false;
      return data.nextReviewDate <= today;
    });
  };

  // Obtenir les nouveaux mots (jamais revus)
  const getNewWords = (allVocabulary) => {
    return allVocabulary.filter(word => !progress.vocabularyData?.[word.fi]);
  };

  // Obtenir les statistiques de maitrise
  const getMasteryStats = (allVocabulary = []) => {
    const vocabData = progress.vocabularyData || {};
    const stats = {
      [MASTERY_LEVELS.NEW]: 0,
      [MASTERY_LEVELS.RECOGNIZED]: 0,
      [MASTERY_LEVELS.WRITTEN]: 0,
      [MASTERY_LEVELS.CONSOLIDATED]: 0,
      [MASTERY_LEVELS.MASTERED]: 0,
      total: allVocabulary.length,
      reviewed: 0
    };

    // Compter les mots par niveau
    allVocabulary.forEach(word => {
      const data = vocabData[word.fi];
      if (data) {
        stats[data.level]++;
        stats.reviewed++;
      } else {
        stats[MASTERY_LEVELS.NEW]++;
      }
    });

    // Calculer le pourcentage de progression
    const progressPercent = stats.total > 0
      ? Math.round(((stats[MASTERY_LEVELS.WRITTEN] + stats[MASTERY_LEVELS.CONSOLIDATED] + stats[MASTERY_LEVELS.MASTERED]) / stats.total) * 100)
      : 0;

    return {
      ...stats,
      progressPercent
    };
  };

  // Obtenir les mots par niveau
  const getWordsByLevel = (allVocabulary, level) => {
    return allVocabulary.filter(word => {
      const data = progress.vocabularyData?.[word.fi];
      if (!data && level === MASTERY_LEVELS.NEW) return true;
      return data?.level === level;
    });
  };

  // Legacy: getSRSStats pour compatibilite
  const getSRSStats = () => {
    const vocabData = Object.values(progress.vocabularyData || {});
    const today = new Date().toISOString().split('T')[0];

    return {
      totalLearned: vocabData.length,
      dueToday: vocabData.filter(w => w.nextReviewDate <= today).length,
      mastered: vocabData.filter(w => w.level >= MASTERY_LEVELS.MASTERED).length,
      learning: vocabData.filter(w => w.level > 0 && w.level < MASTERY_LEVELS.MASTERED).length,
      new: vocabData.filter(w => w.level === 0).length
    };
  };

  // Legacy: getWordSRS pour compatibilite
  const getWordSRS = (word) => {
    const data = progress.vocabularyData?.[word];
    if (!data) {
      return {
        level: 0,
        nextReview: new Date().toISOString().split('T')[0],
        lastReview: null,
        reviewCount: 0,
        correctCount: 0
      };
    }
    return {
      level: data.level,
      nextReview: data.nextReviewDate,
      lastReview: data.lastReviewDate,
      reviewCount: data.totalAttempts,
      correctCount: data.correctAttempts
    };
  };

  // Verifier si une lecon est completee
  const isLessonCompleted = (lessonId) => {
    return progress.completedLessons.includes(lessonId);
  };

  // Obtenir le pourcentage de reussite
  const getSuccessRate = () => {
    if (progress.stats.totalExercises === 0) return 0;
    return Math.round((progress.stats.correctAnswers / progress.stats.totalExercises) * 100);
  };

  // Reinitialiser la progression
  const resetProgress = () => {
    if (window.confirm('Es-tu sur de vouloir reinitialiser ta progression? Cette action est irreversible.')) {
      setProgress(defaultProgress);
    }
  };

  return {
    progress,
    completeLesson,
    setCurrentLesson,
    recordExercise,
    masterWord,
    isLessonCompleted,
    getSuccessRate,
    resetProgress,
    // Nouveau systeme de maitrise
    getWordData,
    getWordLevel,
    reviewWordFlip,
    reviewWordWrite,
    getMasteryStats,
    getWordsByLevel,
    // Legacy SRS (compatibilite)
    reviewWord,
    getWordSRS,
    getWordsToReview,
    getNewWords,
    getSRSStats
  };
}
