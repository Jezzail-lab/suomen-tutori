import { useState } from 'react';
import { getLessonById } from '../data/lessons';
import { Exercise } from './Exercise';

export function Lesson({ lessonId, onBack, onComplete, recordExercise }) {
  const lesson = getLessonById(lessonId);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [showVocabulary, setShowVocabulary] = useState(false);

  if (!lesson) {
    return (
      <div className="lesson-error">
        <p>Lecon introuvable.</p>
        <button onClick={onBack}>Retour</button>
      </div>
    );
  }

  const currentSection = lesson.sections[currentSectionIndex];
  const isLastSection = currentSectionIndex === lesson.sections.length - 1;
  const progress = ((currentSectionIndex + 1) / lesson.sections.length) * 100;

  const handleNext = () => {
    if (isLastSection) {
      onComplete(lessonId);
    } else {
      setCurrentSectionIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(prev => prev - 1);
    }
  };

  const handleExerciseComplete = (isCorrect) => {
    recordExercise(lessonId, currentSectionIndex, isCorrect);
  };

  return (
    <div className="lesson">
      {/* Header */}
      <header className="lesson-header">
        <button className="back-btn" onClick={onBack}>
          ← Retour
        </button>
        <div className="lesson-title-area">
          <span className="lesson-level">{lesson.level} - {lesson.module}</span>
          <h1>{lesson.title}</h1>
        </div>
        <button
          className="vocab-toggle"
          onClick={() => setShowVocabulary(!showVocabulary)}
        >
          {showVocabulary ? 'Masquer' : 'Vocabulaire'}
        </button>
      </header>

      {/* Barre de progression */}
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        <span className="progress-text">
          {currentSectionIndex + 1} / {lesson.sections.length}
        </span>
      </div>

      {/* Panneau vocabulaire */}
      {showVocabulary && (
        <div className="vocabulary-panel">
          <h3>Vocabulaire de la lecon</h3>
          <table className="vocab-table">
            <thead>
              <tr>
                <th>Finnois</th>
                <th>Puhekieli</th>
                <th>Francais</th>
              </tr>
            </thead>
            <tbody>
              {lesson.vocabulary.map((word, idx) => (
                <tr key={idx}>
                  <td className="fi-word">{word.fi}</td>
                  <td className="puhekieli">{word.puhekieli}</td>
                  <td>{word.fr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Contenu principal */}
      <main className="lesson-content">
        {currentSection.type === 'theory' ? (
          <div className="theory-section">
            <h2>{currentSection.title}</h2>
            <div className="theory-content">
              {currentSection.content.split('\n').map((paragraph, idx) => {
                // Gerer les tableaux Markdown simples
                if (paragraph.startsWith('|')) {
                  return null; // On laisse le CSS gerer
                }
                // Gerer le gras
                const formattedText = paragraph
                  .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
                return (
                  <p
                    key={idx}
                    dangerouslySetInnerHTML={{ __html: formattedText }}
                  />
                );
              })}
              {/* Rendu des tableaux */}
              {currentSection.content.includes('|') && (
                <div
                  className="markdown-table"
                  dangerouslySetInnerHTML={{
                    __html: renderMarkdownTable(currentSection.content)
                  }}
                />
              )}
            </div>
          </div>
        ) : (
          <Exercise
            section={currentSection}
            onComplete={handleExerciseComplete}
            onNext={handleNext}
          />
        )}
      </main>

      {/* Navigation */}
      <footer className="lesson-footer">
        <button
          className="nav-btn prev"
          onClick={handlePrevious}
          disabled={currentSectionIndex === 0}
        >
          ← Precedent
        </button>

        {currentSection.type === 'theory' && (
          <button className="nav-btn next primary" onClick={handleNext}>
            {isLastSection ? 'Terminer la lecon' : 'Suivant →'}
          </button>
        )}
      </footer>
    </div>
  );
}

// Fonction pour convertir les tableaux Markdown en HTML
function renderMarkdownTable(content) {
  const lines = content.split('\n');
  const tableLines = lines.filter(line => line.trim().startsWith('|'));

  if (tableLines.length < 2) return '';

  let html = '<table>';

  tableLines.forEach((line, index) => {
    // Ignorer la ligne de separation (|---|---|)
    if (line.includes('---')) return;

    const cells = line.split('|').filter(cell => cell.trim() !== '');
    const tag = index === 0 ? 'th' : 'td';
    const rowTag = index === 0 ? 'thead' : 'tbody';

    if (index === 0) html += '<thead>';
    if (index === 1) html += '<tbody>';

    html += '<tr>';
    cells.forEach(cell => {
      html += `<${tag}>${cell.trim()}</${tag}>`;
    });
    html += '</tr>';

    if (index === 0) html += '</thead>';
  });

  html += '</tbody></table>';
  return html;
}
