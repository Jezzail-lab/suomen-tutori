import { useMemo, useEffect } from 'react';
import { getLessonById } from '../data/lessons';
import { getVerbConjugation, isVerb } from '../data/verbConjugations';
import { useSounds } from '../hooks/useSounds';
import { useFeedback } from './FeedbackEffects';

// Messages de félicitations en finnois
const COMPLETION_MESSAGES = [
  { fi: 'Hienoa työtä!', fr: 'Excellent travail !' },
  { fi: 'Olet oppinut paljon!', fr: 'Tu as beaucoup appris !' },
  { fi: 'Hyvin tehty!', fr: 'Bien joué !' },
  { fi: 'Loistavaa edistystä!', fr: 'Excellente progression !' },
  { fi: 'Mahtavaa!', fr: 'Super !' },
];

const getRandomCompletionMessage = () => {
  return COMPLETION_MESSAGES[Math.floor(Math.random() * COMPLETION_MESSAGES.length)];
};

export function LessonSummary({ lessonId, onClose, onBack }) {
  const lesson = useMemo(() => getLessonById(lessonId), [lessonId]);
  const { playLessonComplete } = useSounds();
  const { showLessonComplete } = useFeedback();

  // Jouer le son et effet de celebration au chargement
  useEffect(() => {
    playLessonComplete();
    // Petit delai pour l'effet visuel
    const timer = setTimeout(() => {
      showLessonComplete();
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  if (!lesson) {
    return (
      <div className="lesson-summary">
        <p>Lecon introuvable.</p>
        <button onClick={onBack}>Retour</button>
      </div>
    );
  }

  // Extraire les points cles des sections theoriques
  const keyPoints = useMemo(() => {
    const points = [];
    lesson.sections
      .filter(s => s.type === 'theory')
      .forEach(section => {
        points.push({
          title: section.title,
          // Extraire les premiers 150 caracteres du contenu
          preview: section.content
            .replace(/[#*|>-]/g, '')
            .replace(/\n+/g, ' ')
            .slice(0, 150)
            .trim() + '...'
        });
      });
    return points;
  }, [lesson]);

  // Separer les verbes des autres mots
  const vocabularyWithVerbs = useMemo(() => {
    if (!lesson.vocabulary) return { words: [], verbs: [] };

    const words = [];
    const verbs = [];

    lesson.vocabulary.forEach(word => {
      const conjugation = getVerbConjugation(word.fi);
      if (conjugation) {
        verbs.push({ ...word, conjugation });
      } else {
        words.push(word);
      }
    });

    return { words, verbs };
  }, [lesson]);

  // Compter les exercices
  const exerciseCount = lesson.sections.filter(s => s.type === 'exercise').length;

  // Message de félicitations aléatoire (mémorisé pour éviter les changements)
  const completionMessage = useMemo(() => getRandomCompletionMessage(), []);

  return (
    <div className="lesson-summary">
      <header className="summary-header">
        <h1 className="summary-title">Leçon terminée !</h1>
        <p className="summary-subtitle">{lesson.level} - {lesson.module}</p>
      </header>

      {/* Message de félicitations en finnois */}
      <div className="summary-message excellent">
        <span className="summary-message-fi">{completionMessage.fi}</span>
        <span className="summary-message-fr">{completionMessage.fr}</span>
      </div>

      <h2 className="lesson-title-summary">{lesson.title}</h2>

      {/* Statistiques */}
      <div className="summary-stats">
        <div className="summary-stat">
          <span className="summary-stat-value">{keyPoints.length}</span>
          <span className="summary-stat-label">Sections</span>
        </div>
        <div className="summary-stat">
          <span className="summary-stat-value">{exerciseCount}</span>
          <span className="summary-stat-label">Exercices</span>
        </div>
        <div className="summary-stat">
          <span className="summary-stat-value">{lesson.vocabulary?.length || 0}</span>
          <span className="summary-stat-label">Mots appris</span>
        </div>
      </div>

      {/* Points cles */}
      <section className="summary-section">
        <h2>Points cles de la lecon</h2>
        <div className="key-points-list">
          {keyPoints.map((point, index) => (
            <div key={index} className="key-point-card">
              <span className="key-point-number">{index + 1}</span>
              <div className="key-point-content">
                <h3>{point.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vocabulaire */}
      {lesson.vocabulary && lesson.vocabulary.length > 0 && (
        <section className="summary-section">
          <h2>Vocabulaire a retenir</h2>

          {/* Mots normaux */}
          {vocabularyWithVerbs.words.length > 0 && (
            <div className="vocabulary-grid">
              {vocabularyWithVerbs.words.slice(0, 12).map((word, index) => (
                <div key={index} className="vocab-card">
                  <span className="vocab-fi">{word.fi}</span>
                  <span className="vocab-fr">{word.fr}</span>
                </div>
              ))}
            </div>
          )}

          {/* Verbes avec conjugaisons */}
          {vocabularyWithVerbs.verbs.length > 0 && (
            <>
              <h3 className="verbs-subtitle">Verbes</h3>
              <div className="verbs-summary-grid">
                {vocabularyWithVerbs.verbs.map((verb, index) => (
                  <div key={index} className="verb-summary-card">
                    <div className="verb-header">
                      <span className="verb-fi">{verb.fi}</span>
                      <span className="verb-fr">{verb.fr}</span>
                      <span className="verb-type-tag">Type {verb.conjugation.type}</span>
                    </div>
                    <div className="verb-mini-conj">
                      <span><strong>mina:</strong> {verb.conjugation.present.minä}</span>
                      <span><strong>han:</strong> {verb.conjugation.present.hän}</span>
                      <span><strong>he:</strong> {verb.conjugation.present.he}</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {lesson.vocabulary.length > 12 && (
            <p className="vocab-more">
              Et {lesson.vocabulary.length - 12} autres mots...
            </p>
          )}
        </section>
      )}

      {/* Conseil */}
      <div className="summary-tip">
        <span className="tip-icon">💡</span>
        <p>
          <strong>Conseil:</strong> Revois ce vocabulaire dans les Flashcards pour consolider ton apprentissage!
        </p>
      </div>

      {/* Actions */}
      <div className="summary-actions">
        <button className="summary-btn secondary" onClick={onClose}>
          Revoir la lecon
        </button>
        <button className="summary-btn primary" onClick={onBack}>
          Continuer
        </button>
      </div>
    </div>
  );
}
