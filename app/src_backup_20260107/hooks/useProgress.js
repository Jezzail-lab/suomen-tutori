import { useState, useEffect } from 'react';

const STORAGE_KEY = 'tuteur-finnois-progress';

const defaultProgress = {
  completedLessons: [],
  currentLesson: null,
  vocabularyMastered: [],
  exerciseHistory: [],
  stats: {
    totalExercises: 0,
    correctAnswers: 0,
    streak: 0,
    lastActivity: null
  }
};

export function useProgress() {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
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

  // Marquer un mot comme maitrise
  const masterWord = (word) => {
    setProgress(prev => ({
      ...prev,
      vocabularyMastered: prev.vocabularyMastered.includes(word)
        ? prev.vocabularyMastered
        : [...prev.vocabularyMastered, word]
    }));
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
    resetProgress
  };
}
