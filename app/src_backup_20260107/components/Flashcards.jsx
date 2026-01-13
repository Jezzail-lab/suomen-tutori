import { useState, useMemo } from 'react';
import { getAllVocabulary, levels } from '../data/lessons';

export function Flashcards({ onBack, masterWord, masteredWords }) {
  const allVocabulary = useMemo(() => getAllVocabulary(), []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showPuhekieli, setShowPuhekieli] = useState(true);
  const [filterLevel, setFilterLevel] = useState('all');

  const filteredVocabulary = useMemo(() => {
    if (filterLevel === 'all') return allVocabulary;
    return allVocabulary.filter(word => word.level === filterLevel);
  }, [allVocabulary, filterLevel]);

  const currentWord = filteredVocabulary[currentIndex];

  const handleNext = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) =>
      prev < filteredVocabulary.length - 1 ? prev + 1 : 0
    );
  };

  const handlePrevious = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : filteredVocabulary.length - 1
    );
  };

  const handleMaster = () => {
    if (currentWord) {
      masterWord(currentWord.fi);
      handleNext();
    }
  };

  const handleShuffle = () => {
    const randomIndex = Math.floor(Math.random() * filteredVocabulary.length);
    setCurrentIndex(randomIndex);
    setShowAnswer(false);
  };

  if (filteredVocabulary.length === 0) {
    return (
      <div className="flashcards">
        <header className="flashcards-header">
          <button className="back-btn" onClick={onBack}>← Retour</button>
          <h1>Flashcards</h1>
        </header>
        <div className="empty-state">
          <p>Aucun vocabulaire disponible pour ce niveau.</p>
        </div>
      </div>
    );
  }

  const isMastered = currentWord && masteredWords.includes(currentWord.fi);

  return (
    <div className="flashcards">
      <header className="flashcards-header">
        <button className="back-btn" onClick={onBack}>← Retour</button>
        <h1>Flashcards - Sanakortit</h1>
      </header>

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
            }}
          >
            <option value="all">Tous les niveaux</option>
            {levels.map(level => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>

        <label className="toggle-label">
          <input
            type="checkbox"
            checked={showPuhekieli}
            onChange={(e) => setShowPuhekieli(e.target.checked)}
          />
          Afficher puhekieli
        </label>

        <button className="shuffle-btn" onClick={handleShuffle}>
          Melanger
        </button>
      </div>

      {/* Stats */}
      <div className="flashcards-stats">
        <span>{currentIndex + 1} / {filteredVocabulary.length}</span>
        <span className="mastered-count">
          {masteredWords.length} mots maitrises
        </span>
      </div>

      {/* Carte */}
      <div
        className={`flashcard ${showAnswer ? 'flipped' : ''} ${isMastered ? 'mastered' : ''}`}
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <div className="flashcard-inner">
          <div className="flashcard-front">
            <span className="word-level">{currentWord.level}</span>
            <span className="main-word">{currentWord.fi}</span>
            {showPuhekieli && currentWord.fi !== currentWord.puhekieli && (
              <span className="puhekieli-word">
                Puhekieli: {currentWord.puhekieli}
              </span>
            )}
            <span className="flip-hint">Clique pour voir la traduction</span>
          </div>
          <div className="flashcard-back">
            <span className="translation">{currentWord.fr}</span>
            <span className="flip-hint">Clique pour retourner</span>
          </div>
        </div>
        {isMastered && <span className="mastered-badge">Maitrise ✓</span>}
      </div>

      {/* Navigation */}
      <div className="flashcards-nav">
        <button className="nav-btn" onClick={handlePrevious}>
          ← Precedent
        </button>

        <button
          className={`master-btn ${isMastered ? 'already-mastered' : ''}`}
          onClick={handleMaster}
          disabled={isMastered}
        >
          {isMastered ? 'Deja maitrise' : 'Je connais ce mot ✓'}
        </button>

        <button className="nav-btn" onClick={handleNext}>
          Suivant →
        </button>
      </div>
    </div>
  );
}
