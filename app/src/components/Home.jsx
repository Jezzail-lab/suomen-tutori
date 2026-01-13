import { useMemo } from 'react';
import { lessons, levels, getLessonsByLevel, getAllVocabulary } from '../data/lessons';
import { MASTERY_LEVELS, MASTERY_LABELS } from '../hooks/useProgress';

export function Home({
  onSelectLesson,
  progress,
  getSuccessRate,
  getWordLevel,
  getMasteryStats,
  getWordsToReview,
  getSRSStats
}) {
  // Calculer les stats de maitrise
  const allVocabulary = useMemo(() => getAllVocabulary(), []);
  const masteryStats = useMemo(() => {
    if (getMasteryStats) {
      return getMasteryStats(allVocabulary);
    }
    return null;
  }, [getMasteryStats, allVocabulary]);

  const srsStats = useMemo(() => {
    if (getSRSStats) {
      return getSRSStats();
    }
    return null;
  }, [getSRSStats]);

  const wordsToReview = useMemo(() => {
    if (getWordsToReview) {
      return getWordsToReview(allVocabulary);
    }
    return [];
  }, [getWordsToReview, allVocabulary]);
  return (
    <div className="home">
      <header className="home-header">
        <h1>Tervetuloa!</h1>
        <p className="subtitle">Bienvenue dans ton tuteur de finnois</p>
      </header>

      {/* Stats rapides */}
      <div className="stats-bar">
        <div className="stat">
          <span className="stat-value">{progress.completedLessons.length}</span>
          <span className="stat-label">Lecons terminees</span>
        </div>
        <div className="stat">
          <span className="stat-value">{getSuccessRate()}%</span>
          <span className="stat-label">Reussite</span>
        </div>
        <div className="stat">
          <span className="stat-value">{progress.stats.streak}</span>
          <span className="stat-label">Serie en cours</span>
        </div>
        <div className="stat">
          <span className="stat-value">{progress.vocabularyMastered.length}</span>
          <span className="stat-label">Mots maitrises</span>
        </div>
      </div>

      {/* Dashboard de progression vocabulaire */}
      {masteryStats && (
        <div className="vocabulary-dashboard">
          <h2 className="dashboard-title">Progression du vocabulaire</h2>

          {/* Alerte si des mots a revoir */}
          {wordsToReview.length > 0 && (
            <div className="review-alert">
              <span className="review-alert-icon">📚</span>
              <span className="review-alert-text">
                <strong>{wordsToReview.length} mot{wordsToReview.length > 1 ? 's' : ''}</strong> a revoir aujourd'hui!
              </span>
            </div>
          )}

          {/* Barre de progression globale */}
          <div className="mastery-overview">
            <div className="mastery-progress-visual">
              {[0, 1, 2, 3, 4].map(level => {
                const count = masteryStats[level] || 0;
                const percent = masteryStats.total > 0
                  ? (count / masteryStats.total) * 100
                  : 0;
                const info = MASTERY_LABELS[level];

                return percent > 0 ? (
                  <div
                    key={level}
                    className="progress-segment"
                    style={{
                      width: `${percent}%`,
                      backgroundColor: info.color
                    }}
                    title={`${info.name}: ${count} mots (${Math.round(percent)}%)`}
                  />
                ) : null;
              })}
            </div>
            <div className="mastery-percent">
              {masteryStats.progressPercent}% maitrise
            </div>
          </div>

          {/* Statistiques par niveau */}
          <div className="mastery-levels-grid">
            {Object.entries(MASTERY_LABELS).map(([level, info]) => {
              const count = masteryStats[parseInt(level)] || 0;
              return (
                <div key={level} className={`mastery-level-card level-${level}`}>
                  <span className="level-icon" style={{ color: info.color }}>{info.icon}</span>
                  <div className="level-info">
                    <span className="level-name">{info.name}</span>
                    <span className="level-name-fi">{info.nameFi}</span>
                  </div>
                  <span className="level-count">{count}</span>
                </div>
              );
            })}
          </div>

          {/* Resume */}
          <div className="mastery-summary">
            <span className="summary-total">
              {masteryStats.reviewed} / {masteryStats.total} mots etudies
            </span>
          </div>
        </div>
      )}

      {/* Continuer */}
      {progress.currentLesson && (
        <div className="continue-section">
          <h2>Continuer</h2>
          <button
            className="continue-btn"
            onClick={() => onSelectLesson(progress.currentLesson)}
          >
            Reprendre la lecon en cours
          </button>
        </div>
      )}

      {/* Liste des niveaux et lecons */}
      <div className="levels-container">
        {levels.map(level => {
          const levelLessons = getLessonsByLevel(level);
          if (levelLessons.length === 0) return null;

          const completedCount = levelLessons.filter(
            l => progress.completedLessons.includes(l.id)
          ).length;

          return (
            <div key={level} className="level-section">
              <div className="level-header">
                <h2>Niveau {level}</h2>
                <span className="level-progress">
                  {completedCount}/{levelLessons.length} terminees
                </span>
              </div>

              <div className="lessons-grid">
                {levelLessons.map((lesson, index) => {
                  const isCompleted = progress.completedLessons.includes(lesson.id);
                  const isLocked = index > 0 &&
                    !progress.completedLessons.includes(levelLessons[index - 1].id);

                  return (
                    <button
                      key={lesson.id}
                      className={`lesson-card ${isCompleted ? 'completed' : ''} ${isLocked ? 'locked' : ''}`}
                      onClick={() => !isLocked && onSelectLesson(lesson.id)}
                      disabled={isLocked}
                    >
                      <div className="lesson-number">{index + 1}</div>
                      <div className="lesson-info">
                        <h3>{lesson.title}</h3>
                        <p>{lesson.description}</p>
                        <span className="lesson-module">{lesson.module}</span>
                      </div>
                      {isCompleted && <span className="check-mark">✓</span>}
                      {isLocked && <span className="lock-icon">🔒</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Message si pas de lecons */}
      {lessons.length === 0 && (
        <div className="empty-state">
          <p>Aucune lecon disponible pour le moment.</p>
        </div>
      )}
    </div>
  );
}
