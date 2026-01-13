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
            <div
              className="theory-content"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(currentSection.content) }}
            />
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

// Fonction pour convertir le Markdown en HTML
function renderMarkdown(content) {
  const lines = content.split('\n');
  let html = '';
  let inTable = false;
  let inList = false;
  let tableRows = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Separateur horizontal
    if (line.trim() === '---') {
      if (inList) { html += '</ul>'; inList = false; }
      html += '<hr class="section-divider" />';
      continue;
    }

    // Titres
    if (line.startsWith('### ')) {
      if (inList) { html += '</ul>'; inList = false; }
      const titleText = formatInlineMarkdown(line.slice(4));
      html += `<h3 class="md-heading">${titleText}</h3>`;
      continue;
    }

    // Blockquote (astuce)
    if (line.startsWith('> ')) {
      if (inList) { html += '</ul>'; inList = false; }
      const quoteText = formatInlineMarkdown(line.slice(2));
      const isAstuce = quoteText.includes('Astuce') || quoteText.includes('💡');
      const isWarning = quoteText.includes('⚠️') || quoteText.includes('Attention') || quoteText.includes('Important');
      const className = isWarning ? 'tip-box warning' : (isAstuce ? 'tip-box' : 'tip-box info');
      html += `<div class="${className}">${quoteText}</div>`;
      continue;
    }

    // Tableau
    if (line.trim().startsWith('|')) {
      if (inList) { html += '</ul>'; inList = false; }
      if (!inTable) {
        inTable = true;
        tableRows = [];
      }
      if (!line.includes('---')) {
        tableRows.push(line);
      }
      // Verifier si la prochaine ligne n'est pas un tableau
      if (i + 1 >= lines.length || !lines[i + 1].trim().startsWith('|')) {
        html += renderTable(tableRows);
        inTable = false;
        tableRows = [];
      }
      continue;
    }

    // Liste a puces
    if (line.trim().startsWith('- ')) {
      if (!inList) {
        html += '<ul class="md-list">';
        inList = true;
      }
      const listText = formatInlineMarkdown(line.trim().slice(2));
      html += `<li>${listText}</li>`;
      continue;
    }

    // Ligne vide
    if (line.trim() === '') {
      if (inList) { html += '</ul>'; inList = false; }
      continue;
    }

    // Paragraphe normal
    if (inList) { html += '</ul>'; inList = false; }
    const paragraphText = formatInlineMarkdown(line);
    html += `<p>${paragraphText}</p>`;
  }

  if (inList) html += '</ul>';

  return html;
}

// Formater le texte inline (gras, italique, code)
function formatInlineMarkdown(text) {
  return text
    // Gras
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Italique
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    // Code inline
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Fleche
    .replace(/→/g, '<span class="arrow">→</span>');
}

// Rendu des tableaux
function renderTable(rows) {
  if (rows.length < 1) return '';

  let html = '<div class="table-wrapper"><table class="md-table">';

  rows.forEach((row, index) => {
    const cells = row.split('|').filter(cell => cell.trim() !== '');
    const tag = index === 0 ? 'th' : 'td';

    if (index === 0) html += '<thead>';
    if (index === 1) html += '</thead><tbody>';

    html += '<tr>';
    cells.forEach(cell => {
      const cellContent = formatInlineMarkdown(cell.trim());
      html += `<${tag}>${cellContent}</${tag}>`;
    });
    html += '</tr>';
  });

  html += '</tbody></table></div>';
  return html;
}
