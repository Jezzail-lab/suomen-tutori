import { lessons, levels, getLessonsByLevel } from '../data/lessons';

export function Home({ onSelectLesson, progress, getSuccessRate }) {
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
          <span className="stat-label">Mots appris</span>
        </div>
      </div>

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
