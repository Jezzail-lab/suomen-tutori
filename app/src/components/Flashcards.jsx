import { useState, useMemo, useRef, useEffect } from 'react';
import { getAllVocabulary, levels } from '../data/lessons';
import { getAllExpressions, expressionCategories, getAllCollocations } from '../data/expressions';
import { MASTERY_LEVELS, MASTERY_LABELS } from '../hooks/useProgress';
import { getVerbConjugation, isVerb } from '../data/verbConjugations';
import { useSounds } from '../hooks/useSounds';
import { useFeedback } from './FeedbackEffects';

export function Flashcards({
  onBack,
  masterWord,
  masteredWords,
  getWordLevel,
  reviewWordFlip,
  reviewWordWrite,
  getMasteryStats
}) {
  // Mode de contenu: 'vocabulary', 'expressions', 'collocations'
  const [contentMode, setContentMode] = useState('vocabulary');
  // Mode d'etude: 'flip' ou 'write'
  const [studyMode, setStudyMode] = useState('flip');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showPuhekieli, setShowPuhekieli] = useState(true);
  const [filterLevel, setFilterLevel] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterMastery, setFilterMastery] = useState('all');

  // Mode ecriture
  const [userInput, setUserInput] = useState('');
  const [writeResult, setWriteResult] = useState(null); // 'correct', 'incorrect', null
  const inputRef = useRef(null);

  // Sons et effets visuels
  const { playCorrect, playIncorrect, playFlip, playMasteryUp } = useSounds();
  const { showCorrect, showMasteryUp } = useFeedback();

  // Donnees selon le mode
  const allVocabulary = useMemo(() => getAllVocabulary(), []);
  const allExpressions = useMemo(() => getAllExpressions(), []);
  const allCollocations = useMemo(() => getAllCollocations(), []);

  // Stats de maitrise
  const masteryStats = useMemo(() => {
    if (getMasteryStats) {
      return getMasteryStats(allVocabulary);
    }
    return null;
  }, [getMasteryStats, allVocabulary]);

  // Filtrage du vocabulaire
  const filteredVocabulary = useMemo(() => {
    let result = allVocabulary;

    // Filtre par niveau CEFR
    if (filterLevel !== 'all') {
      result = result.filter(word => word.level === filterLevel);
    }

    // Filtre par niveau de maitrise
    if (filterMastery !== 'all' && getWordLevel) {
      const masteryLevel = parseInt(filterMastery);
      result = result.filter(word => {
        const level = getWordLevel(word.fi);
        return level === masteryLevel;
      });
    }

    return result;
  }, [allVocabulary, filterLevel, filterMastery, getWordLevel]);

  // Filtrage des expressions
  const filteredExpressions = useMemo(() => {
    let result = allExpressions;
    if (filterLevel !== 'all') {
      result = result.filter(exp => exp.level === filterLevel);
    }
    if (filterCategory !== 'all') {
      result = result.filter(exp => exp.category === filterCategory);
    }
    return result;
  }, [allExpressions, filterLevel, filterCategory]);

  // Filtrage des collocations
  const filteredCollocations = useMemo(() => {
    if (filterLevel === 'all') return allCollocations;
    return allCollocations.filter(col => col.level === filterLevel);
  }, [allCollocations, filterLevel]);

  // Donnees courantes selon le mode
  const currentData = useMemo(() => {
    switch (contentMode) {
      case 'expressions':
        return filteredExpressions;
      case 'collocations':
        return filteredCollocations;
      default:
        return filteredVocabulary;
    }
  }, [contentMode, filteredVocabulary, filteredExpressions, filteredCollocations]);

  const currentItem = currentData[currentIndex];

  // Focus sur l'input en mode ecriture
  useEffect(() => {
    if (studyMode === 'write' && inputRef.current && !writeResult) {
      inputRef.current.focus();
    }
  }, [studyMode, currentIndex, writeResult]);

  // Normaliser une chaine pour comparaison
  const normalizeString = (str) => {
    return str
      .toLowerCase()
      .trim()
      .replace(/[.,!?;:'"()]/g, '');
  };

  // Navigation
  const handleNext = () => {
    setShowAnswer(false);
    setUserInput('');
    setWriteResult(null);
    setCurrentIndex((prev) =>
      prev < currentData.length - 1 ? prev + 1 : 0
    );
  };

  const handlePrevious = () => {
    setShowAnswer(false);
    setUserInput('');
    setWriteResult(null);
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : currentData.length - 1
    );
  };

  // Marquer comme maitrise (mode flip)
  const handleFlipCorrect = (event) => {
    if (currentItem && contentMode === 'vocabulary' && reviewWordFlip) {
      const previousLevel = getWordLevel ? getWordLevel(currentItem.fi) : 0;
      reviewWordFlip(currentItem.fi, true);
      const newLevel = getWordLevel ? getWordLevel(currentItem.fi) : 0;

      // Son et effet pour bonne reponse
      playCorrect();
      const rect = event?.currentTarget?.getBoundingClientRect();
      const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
      const y = rect ? rect.top : window.innerHeight / 2;
      showCorrect(x, y);

      // Effet special si niveau de maitrise augmente
      if (newLevel > previousLevel) {
        setTimeout(() => {
          playMasteryUp();
          showMasteryUp(window.innerWidth / 2, window.innerHeight / 2);
        }, 300);
      }

      handleNext();
    }
  };

  const handleFlipIncorrect = () => {
    if (currentItem && contentMode === 'vocabulary' && reviewWordFlip) {
      playIncorrect();
      reviewWordFlip(currentItem.fi, false);
      handleNext();
    }
  };

  // Verifier la reponse en mode ecriture
  const handleCheckAnswer = () => {
    if (!currentItem || !userInput.trim()) return;

    const normalizedInput = normalizeString(userInput);
    const normalizedAnswer = normalizeString(currentItem.fi);
    // Accepter aussi la variante puhekieli
    const normalizedPuhekieli = currentItem.puhekieli
      ? normalizeString(currentItem.puhekieli)
      : null;

    const isCorrect = normalizedInput === normalizedAnswer ||
      (normalizedPuhekieli && normalizedInput === normalizedPuhekieli);

    setWriteResult(isCorrect ? 'correct' : 'incorrect');

    // Son et effet
    if (isCorrect) {
      const previousLevel = getWordLevel ? getWordLevel(currentItem.fi) : 0;
      playCorrect();
      showCorrect(window.innerWidth / 2, window.innerHeight / 3);

      if (reviewWordWrite) {
        reviewWordWrite(currentItem.fi, true);
        const newLevel = getWordLevel ? getWordLevel(currentItem.fi) : 0;
        if (newLevel > previousLevel) {
          setTimeout(() => {
            playMasteryUp();
            showMasteryUp(window.innerWidth / 2, window.innerHeight / 2);
          }, 400);
        }
      }
    } else {
      playIncorrect();
      if (reviewWordWrite) {
        reviewWordWrite(currentItem.fi, false);
      }
    }
  };

  const handleShuffle = () => {
    const randomIndex = Math.floor(Math.random() * currentData.length);
    setCurrentIndex(randomIndex);
    setShowAnswer(false);
    setUserInput('');
    setWriteResult(null);
  };

  const handleContentModeChange = (newMode) => {
    setContentMode(newMode);
    setCurrentIndex(0);
    setShowAnswer(false);
    setFilterCategory('all');
    setUserInput('');
    setWriteResult(null);
  };

  const handleStudyModeChange = (newMode) => {
    setStudyMode(newMode);
    setShowAnswer(false);
    setUserInput('');
    setWriteResult(null);
  };

  // Obtenir le niveau de maitrise d'un mot
  const getItemMasteryLevel = (item) => {
    if (!getWordLevel || contentMode !== 'vocabulary') return null;
    return getWordLevel(item.fi);
  };

  // Rendu de l'indicateur de maitrise
  const renderMasteryIndicator = (item) => {
    const level = getItemMasteryLevel(item);
    if (level === null) return null;

    const labelInfo = MASTERY_LABELS[level];
    return (
      <div className="mastery-indicator" style={{ '--mastery-color': labelInfo.color }}>
        <span className="mastery-icon">{labelInfo.icon}</span>
        <span className="mastery-label">{labelInfo.name}</span>
      </div>
    );
  };

  // Rendu de la barre de progression de maitrise
  const renderMasteryProgress = (item) => {
    const level = getItemMasteryLevel(item);
    if (level === null) return null;

    return (
      <div className="mastery-progress-bar">
        {[0, 1, 2, 3, 4].map(lvl => (
          <div
            key={lvl}
            className={`mastery-dot ${lvl <= level ? 'filled' : ''}`}
            style={{ backgroundColor: lvl <= level ? MASTERY_LABELS[lvl].color : undefined }}
          />
        ))}
      </div>
    );
  };

  // Obtenir les conjugaisons d'un verbe
  const getItemConjugation = (item) => {
    if (!item || contentMode !== 'vocabulary') return null;
    return getVerbConjugation(item.fi);
  };

  // Rendu des conjugaisons compactes
  const renderConjugationCompact = (conjugation) => {
    if (!conjugation) return null;

    return (
      <div className="verb-conjugation-compact">
        <div className="conjugation-header">
          <span className="verb-type-badge">Verbe type {conjugation.type}</span>
        </div>
        <div className="conjugation-grid">
          <div className="conjugation-col">
            <span className="conj-form"><strong>minä:</strong> {conjugation.present.minä}</span>
            <span className="conj-form"><strong>sinä:</strong> {conjugation.present.sinä}</span>
            <span className="conj-form"><strong>hän:</strong> {conjugation.present.hän}</span>
          </div>
          <div className="conjugation-col">
            <span className="conj-form"><strong>me:</strong> {conjugation.present.me}</span>
            <span className="conj-form"><strong>te:</strong> {conjugation.present.te}</span>
            <span className="conj-form"><strong>he:</strong> {conjugation.present.he}</span>
          </div>
        </div>
        <div className="conjugation-extras">
          <span className="conj-extra"><strong>Passif:</strong> {conjugation.passive}</span>
          <span className="conj-extra"><strong>Negatif:</strong> {conjugation.negative}</span>
        </div>
      </div>
    );
  };

  // Rendu de la carte en mode FLIP
  const renderFlipCard = () => {
    if (!currentItem) return null;

    if (contentMode === 'vocabulary') {
      const conjugation = getItemConjugation(currentItem);
      const hasConjugation = !!conjugation;

      return (
        <div
          className={`flashcard ${showAnswer ? 'flipped' : ''} ${hasConjugation ? 'has-verb' : ''}`}
          onClick={() => {
            playFlip();
            setShowAnswer(!showAnswer);
          }}
        >
          <div className="flashcard-inner">
            <div className="flashcard-front">
              {renderMasteryProgress(currentItem)}
              <span className="word-level">{currentItem.level}</span>
              <span className="main-word">{currentItem.fi}</span>
              {hasConjugation && <span className="verb-indicator">verbe</span>}
              {showPuhekieli && currentItem.fi !== currentItem.puhekieli && (
                <span className="puhekieli-word">
                  Puhekieli: {currentItem.puhekieli}
                </span>
              )}
              <span className="flip-hint">Clique pour voir la traduction</span>
            </div>
            <div className={`flashcard-back ${hasConjugation ? 'with-conjugation' : ''}`}>
              {renderMasteryIndicator(currentItem)}
              <span className="translation">{currentItem.fr}</span>
              {hasConjugation && renderConjugationCompact(conjugation)}
              <span className="flip-hint">Clique pour retourner</span>
            </div>
          </div>
        </div>
      );
    }

    if (contentMode === 'expressions') {
      const categoryInfo = expressionCategories.find(c => c.id === currentItem.category);
      return (
        <div
          className={`flashcard expression-card ${showAnswer ? 'flipped' : ''}`}
          onClick={() => {
            playFlip();
            setShowAnswer(!showAnswer);
          }}
        >
          <div className="flashcard-inner">
            <div className="flashcard-front">
              <span className="word-level">
                {categoryInfo?.icon} {categoryInfo?.name}
              </span>
              <span className="main-word">{currentItem.fi}</span>
              {showPuhekieli && currentItem.fi !== currentItem.puhekieli && (
                <span className="puhekieli-word">
                  Puhekieli: {currentItem.puhekieli}
                </span>
              )}
              <span className="flip-hint">Clique pour voir la traduction</span>
            </div>
            <div className="flashcard-back">
              <span className="translation">{currentItem.fr}</span>
              {currentItem.example && (
                <div className="expression-example">
                  <span className="example-fi">{currentItem.example}</span>
                  <span className="example-fr">{currentItem.exampleFr}</span>
                </div>
              )}
              <span className="flip-hint">Clique pour retourner</span>
            </div>
          </div>
        </div>
      );
    }

    if (contentMode === 'collocations') {
      return (
        <div
          className={`flashcard collocation-card ${showAnswer ? 'flipped' : ''}`}
          onClick={() => {
            playFlip();
            setShowAnswer(!showAnswer);
          }}
        >
          <div className="flashcard-inner">
            <div className="flashcard-front">
              <span className="word-level">Verbe + Cas</span>
              <span className="main-word">{currentItem.verb}</span>
              <span className="collocation-case">+ {currentItem.case} ({currentItem.caseSuffix})</span>
              <span className="flip-hint">Clique pour voir l'exemple</span>
            </div>
            <div className="flashcard-back">
              <span className="translation">{currentItem.verbFr}</span>
              <div className="collocation-example">
                <span className="example-fi">{currentItem.example}</span>
                <span className="example-fr">{currentItem.exampleFr}</span>
              </div>
              {currentItem.note && (
                <span className="collocation-note">{currentItem.note}</span>
              )}
              <span className="flip-hint">Clique pour retourner</span>
            </div>
          </div>
        </div>
      );
    }
  };

  // Rendu de la carte en mode ECRITURE
  const renderWriteCard = () => {
    if (!currentItem || contentMode !== 'vocabulary') return null;

    return (
      <div className={`flashcard write-mode ${writeResult ? `result-${writeResult}` : ''}`}>
        <div className="write-card-content">
          {renderMasteryProgress(currentItem)}
          <span className="word-level">{currentItem.level}</span>

          {/* Question : traduction francaise */}
          <div className="write-prompt">
            <span className="write-prompt-label">Traduis en finnois :</span>
            <span className="write-prompt-word">{currentItem.fr}</span>
          </div>

          {/* Input */}
          <div className="write-input-container">
            <input
              ref={inputRef}
              type="text"
              className={`write-input ${writeResult || ''}`}
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  if (writeResult) {
                    handleNext();
                  } else {
                    handleCheckAnswer();
                  }
                }
              }}
              placeholder="Ecris le mot en finnois..."
              disabled={writeResult !== null}
              autoComplete="off"
              autoCapitalize="off"
              spellCheck="false"
            />
          </div>

          {/* Resultat */}
          {writeResult && (
            <div className={`write-result ${writeResult}`}>
              {writeResult === 'correct' ? (
                <>
                  <span className="result-icon">✓</span>
                  <span className="result-text">Oikein! (Correct!)</span>
                </>
              ) : (
                <>
                  <span className="result-icon">✗</span>
                  <span className="result-text">
                    Reponse correcte: <strong>{currentItem.fi}</strong>
                  </span>
                </>
              )}
            </div>
          )}

          {/* Indice puhekieli */}
          {showPuhekieli && !writeResult && currentItem.fi !== currentItem.puhekieli && (
            <span className="write-hint">
              Puhekieli accepte: {currentItem.puhekieli}
            </span>
          )}
        </div>
      </div>
    );
  };

  // Etat vide
  if (currentData.length === 0) {
    return (
      <div className="flashcards">
        <header className="flashcards-header">
          <button className="back-btn" onClick={onBack}>← Retour</button>
          <h1>Flashcards</h1>
        </header>
        <div className="empty-state">
          <p>Aucun contenu disponible pour cette selection.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flashcards">
      <header className="flashcards-header">
        <button className="back-btn" onClick={onBack}>← Retour</button>
        <h1>Flashcards - Sanakortit</h1>
      </header>

      {/* Selecteur de mode de contenu */}
      <div className="flashcards-mode-selector">
        <button
          className={`mode-btn ${contentMode === 'vocabulary' ? 'active' : ''}`}
          onClick={() => handleContentModeChange('vocabulary')}
        >
          Vocabulaire
        </button>
        <button
          className={`mode-btn ${contentMode === 'expressions' ? 'active' : ''}`}
          onClick={() => handleContentModeChange('expressions')}
        >
          Expressions
        </button>
        <button
          className={`mode-btn ${contentMode === 'collocations' ? 'active' : ''}`}
          onClick={() => handleContentModeChange('collocations')}
        >
          Collocations
        </button>
      </div>

      {/* Mode d'etude (vocabulaire seulement) */}
      {contentMode === 'vocabulary' && (
        <div className="study-mode-selector">
          <button
            className={`study-mode-btn ${studyMode === 'flip' ? 'active' : ''}`}
            onClick={() => handleStudyModeChange('flip')}
          >
            Mode Flip
          </button>
          <button
            className={`study-mode-btn ${studyMode === 'write' ? 'active' : ''}`}
            onClick={() => handleStudyModeChange('write')}
          >
            Mode Ecriture
          </button>
        </div>
      )}

      {/* Stats de maitrise */}
      {contentMode === 'vocabulary' && masteryStats && (
        <div className="mastery-stats-bar">
          {Object.entries(MASTERY_LABELS).map(([level, info]) => (
            <div key={level} className="mastery-stat-item" title={info.name}>
              <span className="stat-icon" style={{ color: info.color }}>{info.icon}</span>
              <span className="stat-count">{masteryStats[level] || 0}</span>
            </div>
          ))}
          <div className="mastery-stat-total">
            <span className="stat-percent">{masteryStats.progressPercent}%</span>
          </div>
        </div>
      )}

      {/* Filtres et options */}
      <div className="flashcards-controls">
        <div className="filter-group">
          <label>Niveau:</label>
          <select
            value={filterLevel}
            onChange={(e) => {
              setFilterLevel(e.target.value);
              setCurrentIndex(0);
              setShowAnswer(false);
              setUserInput('');
              setWriteResult(null);
            }}
          >
            <option value="all">Tous les niveaux</option>
            {levels.map(level => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>

        {/* Filtre par maitrise (vocabulaire seulement) */}
        {contentMode === 'vocabulary' && (
          <div className="filter-group">
            <label>Maitrise:</label>
            <select
              value={filterMastery}
              onChange={(e) => {
                setFilterMastery(e.target.value);
                setCurrentIndex(0);
                setShowAnswer(false);
                setUserInput('');
                setWriteResult(null);
              }}
            >
              <option value="all">Tous</option>
              {Object.entries(MASTERY_LABELS).map(([level, info]) => (
                <option key={level} value={level}>{info.icon} {info.name}</option>
              ))}
            </select>
          </div>
        )}

        {/* Filtre par categorie (expressions seulement) */}
        {contentMode === 'expressions' && (
          <div className="filter-group">
            <label>Categorie:</label>
            <select
              value={filterCategory}
              onChange={(e) => {
                setFilterCategory(e.target.value);
                setCurrentIndex(0);
                setShowAnswer(false);
              }}
            >
              <option value="all">Toutes</option>
              {expressionCategories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.icon} {cat.name}</option>
              ))}
            </select>
          </div>
        )}

        {(contentMode === 'vocabulary' || contentMode === 'expressions') && studyMode === 'flip' && (
          <label className="toggle-label">
            <input
              type="checkbox"
              checked={showPuhekieli}
              onChange={(e) => setShowPuhekieli(e.target.checked)}
            />
            Afficher puhekieli
          </label>
        )}

        <button className="shuffle-btn" onClick={handleShuffle}>
          Melanger
        </button>
      </div>

      {/* Stats */}
      <div className="flashcards-stats">
        <span>{currentIndex + 1} / {currentData.length}</span>
      </div>

      {/* Carte */}
      {studyMode === 'flip' ? renderFlipCard() : renderWriteCard()}

      {/* Navigation */}
      <div className="flashcards-nav">
        <button className="nav-btn" onClick={handlePrevious}>
          ← Precedent
        </button>

        {/* Boutons mode flip */}
        {studyMode === 'flip' && contentMode === 'vocabulary' && showAnswer && (
          <div className="flip-response-btns">
            <button className="response-btn incorrect" onClick={handleFlipIncorrect}>
              A revoir
            </button>
            <button className="response-btn correct" onClick={handleFlipCorrect}>
              Je connais
            </button>
          </div>
        )}

        {/* Bouton mode ecriture */}
        {studyMode === 'write' && contentMode === 'vocabulary' && (
          writeResult ? (
            <button className="nav-btn primary" onClick={handleNext}>
              Suivant →
            </button>
          ) : (
            <button
              className="check-btn"
              onClick={handleCheckAnswer}
              disabled={!userInput.trim()}
            >
              Verifier
            </button>
          )
        )}

        {/* Navigation standard */}
        {(studyMode === 'flip' || contentMode !== 'vocabulary') && (
          <button className="nav-btn" onClick={handleNext}>
            Suivant →
          </button>
        )}
      </div>
    </div>
  );
}
