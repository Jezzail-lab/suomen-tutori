import { useState, useMemo, useCallback } from 'react';
import { getAllStories, storyThemes, getStoryById } from '../data/stories';

export function StoryReader({ onBack }) {
  // Etats principaux
  const [selectedStory, setSelectedStory] = useState(null);
  const [filterTheme, setFilterTheme] = useState('all');
  const [showPuhekieli, setShowPuhekieli] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [hoveredWord, setHoveredWord] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  // Questions
  const [showQuestions, setShowQuestions] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [questionsCompleted, setQuestionsCompleted] = useState(false);

  // Donnees
  const allStories = useMemo(() => getAllStories(), []);

  const filteredStories = useMemo(() => {
    if (filterTheme === 'all') return allStories;
    return allStories.filter(story => story.theme === filterTheme);
  }, [allStories, filterTheme]);

  // Gestion du survol des mots
  const handleWordHover = useCallback((word, translation, event) => {
    const rect = event.target.getBoundingClientRect();
    setHoveredWord({ word, translation });
    setTooltipPosition({
      x: rect.left + rect.width / 2,
      y: rect.top - 10
    });
  }, []);

  const handleWordLeave = useCallback(() => {
    setHoveredWord(null);
  }, []);

  // Rendu du texte avec mots cliquables
  const renderInteractiveText = useCallback((text, vocabulary) => {
    // Creer un regex pour trouver les mots du vocabulaire
    const vocabWords = Object.keys(vocabulary);
    if (vocabWords.length === 0) return text;

    // Diviser le texte en paragraphes
    const paragraphs = text.split('\n\n');

    return paragraphs.map((paragraph, pIndex) => {
      // Diviser en mots tout en gardant la ponctuation
      const words = paragraph.split(/(\s+)/);

      return (
        <p key={pIndex} className="story-paragraph">
          {words.map((word, wIndex) => {
            // Nettoyer le mot pour la recherche (enlever ponctuation)
            const cleanWord = word.toLowerCase().replace(/[.,!?:;"'()]/g, '');
            const translation = vocabulary[cleanWord];

            if (translation) {
              return (
                <span
                  key={wIndex}
                  className="vocabulary-word"
                  onMouseEnter={(e) => handleWordHover(word, translation, e)}
                  onMouseLeave={handleWordLeave}
                  onClick={(e) => handleWordHover(word, translation, e)}
                >
                  {word}
                </span>
              );
            }
            return <span key={wIndex}>{word}</span>;
          })}
        </p>
      );
    });
  }, [handleWordHover, handleWordLeave]);

  // Gestion des questions
  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const currentQuestion = selectedStory.questions[currentQuestionIndex];
    let isCorrect = false;

    if (currentQuestion.type === 'trueFalse') {
      isCorrect = (selectedAnswer === 0) === currentQuestion.answer;
    } else if (currentQuestion.type === 'qcm') {
      isCorrect = selectedAnswer === currentQuestion.answer;
    }

    if (isCorrect) {
      setScore(score + 1);
    }

    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < selectedStory.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuestionsCompleted(true);
    }
  };

  const resetQuestions = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuestionsCompleted(false);
    setShowQuestions(false);
  };

  const handleSelectStory = (storyId) => {
    setSelectedStory(getStoryById(storyId));
    setShowPuhekieli(false);
    setShowTranslation(false);
    resetQuestions();
  };

  const handleBackToList = () => {
    setSelectedStory(null);
    resetQuestions();
  };

  // Rendu de la question courante
  const renderQuestion = () => {
    if (!selectedStory || !showQuestions) return null;

    const question = selectedStory.questions[currentQuestionIndex];

    if (questionsCompleted) {
      return (
        <div className="questions-completed">
          <h3>Quiz termine !</h3>
          <div className="score-display">
            <span className="score-value">{score}</span>
            <span className="score-total">/ {selectedStory.questions.length}</span>
          </div>
          <p className="score-message">
            {score === selectedStory.questions.length
              ? 'Parfait ! Tu as tout compris !'
              : score >= selectedStory.questions.length / 2
                ? 'Bien joue ! Continue comme ca !'
                : 'Continue a pratiquer, tu progresseras !'}
          </p>
          <div className="question-actions">
            <button className="retry-btn" onClick={resetQuestions}>
              Recommencer
            </button>
            <button className="back-btn" onClick={() => setShowQuestions(false)}>
              Retour a l'histoire
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="question-container">
        <div className="question-progress">
          Question {currentQuestionIndex + 1} / {selectedStory.questions.length}
        </div>

        <div className="question-content">
          <p className="question-text-fi">{question.question}</p>
          <p className="question-text-fr">{question.questionFr}</p>
        </div>

        <div className="question-options">
          {question.type === 'trueFalse' ? (
            <>
              <button
                className={`option-btn ${selectedAnswer === 0 ? 'selected' : ''} ${showResult ? (question.answer ? 'correct' : 'incorrect') : ''}`}
                onClick={() => handleAnswerSelect(0)}
                disabled={showResult}
              >
                Totta (Vrai)
              </button>
              <button
                className={`option-btn ${selectedAnswer === 1 ? 'selected' : ''} ${showResult ? (!question.answer ? 'correct' : 'incorrect') : ''}`}
                onClick={() => handleAnswerSelect(1)}
                disabled={showResult}
              >
                Väärin (Faux)
              </button>
            </>
          ) : (
            question.options.map((option, index) => (
              <button
                key={index}
                className={`option-btn ${selectedAnswer === index ? 'selected' : ''} ${showResult ? (index === question.answer ? 'correct' : selectedAnswer === index ? 'incorrect' : '') : ''}`}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
              >
                {option}
              </button>
            ))
          )}
        </div>

        {showResult && (
          <div className={`result-feedback ${(question.type === 'trueFalse' ? (selectedAnswer === 0) === question.answer : selectedAnswer === question.answer) ? 'correct' : 'incorrect'}`}>
            {(question.type === 'trueFalse' ? (selectedAnswer === 0) === question.answer : selectedAnswer === question.answer)
              ? 'Oikein! (Correct !)'
              : `Väärin. (Incorrect.) ${question.explanation || ''}`}
          </div>
        )}

        <div className="question-actions">
          {!showResult ? (
            <button
              className="submit-btn"
              onClick={handleSubmitAnswer}
              disabled={selectedAnswer === null}
            >
              Verifier
            </button>
          ) : (
            <button className="next-btn" onClick={handleNextQuestion}>
              {currentQuestionIndex < selectedStory.questions.length - 1 ? 'Question suivante' : 'Voir le resultat'}
            </button>
          )}
        </div>
      </div>
    );
  };

  // Vue liste des histoires
  if (!selectedStory) {
    return (
      <div className="story-reader">
        <header className="story-reader-header">
          <button className="back-btn" onClick={onBack}>← Retour</button>
          <h1>Mini-histoires - Tarinat</h1>
        </header>

        {/* Filtres */}
        <div className="story-filters">
          <div className="filter-group">
            <label>Theme:</label>
            <select
              value={filterTheme}
              onChange={(e) => setFilterTheme(e.target.value)}
            >
              <option value="all">Tous les themes</option>
              {storyThemes.map(theme => (
                <option key={theme.id} value={theme.id}>
                  {theme.icon} {theme.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Liste des histoires */}
        <div className="stories-grid">
          {filteredStories.map(story => {
            const theme = storyThemes.find(t => t.id === story.theme);
            return (
              <div
                key={story.id}
                className="story-card"
                onClick={() => handleSelectStory(story.id)}
              >
                <div className="story-card-header">
                  <span className="story-theme-icon">{theme?.icon}</span>
                  <span className="story-level">{story.level}</span>
                </div>
                <h3 className="story-title">{story.title}</h3>
                <p className="story-title-fr">{story.titleFr}</p>
                <div className="story-meta">
                  <span>{story.questions.length} questions</span>
                  <span>{Object.keys(story.vocabulary).length} mots</span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredStories.length === 0 && (
          <div className="empty-state">
            <p>Aucune histoire disponible pour ce theme.</p>
          </div>
        )}
      </div>
    );
  }

  // Vue lecture d'une histoire
  const theme = storyThemes.find(t => t.id === selectedStory.theme);

  return (
    <div className="story-reader">
      <header className="story-reader-header">
        <button className="back-btn" onClick={handleBackToList}>← Histoires</button>
        <h1>{selectedStory.title}</h1>
      </header>

      {/* Info de l'histoire */}
      <div className="story-info">
        <span className="story-theme">{theme?.icon} {theme?.name}</span>
        <span className="story-level-badge">{selectedStory.level}</span>
      </div>

      {/* Controles */}
      <div className="story-controls">
        <label className="toggle-label">
          <input
            type="checkbox"
            checked={showPuhekieli}
            onChange={(e) => setShowPuhekieli(e.target.checked)}
          />
          Puhekieli (parle)
        </label>
        <label className="toggle-label">
          <input
            type="checkbox"
            checked={showTranslation}
            onChange={(e) => setShowTranslation(e.target.checked)}
          />
          Traduction
        </label>
        <button
          className={`quiz-btn ${showQuestions ? 'active' : ''}`}
          onClick={() => setShowQuestions(!showQuestions)}
        >
          {showQuestions ? 'Lire l\'histoire' : 'Quiz de comprehension'}
        </button>
      </div>

      {/* Tooltip pour le vocabulaire */}
      {hoveredWord && (
        <div
          className="vocabulary-tooltip"
          style={{
            left: tooltipPosition.x,
            top: tooltipPosition.y
          }}
        >
          <span className="tooltip-word">{hoveredWord.word}</span>
          <span className="tooltip-translation">{hoveredWord.translation}</span>
        </div>
      )}

      {/* Contenu principal */}
      {showQuestions ? (
        renderQuestion()
      ) : (
        <div className="story-content">
          {/* Version kirjakieli ou puhekieli */}
          <div className="story-text">
            <h3 className="text-version-label">
              {showPuhekieli ? 'Puhekieli (parle)' : 'Kirjakieli (ecrit)'}
            </h3>
            {renderInteractiveText(
              showPuhekieli ? selectedStory.textPuhekieli : selectedStory.text,
              selectedStory.vocabulary
            )}
          </div>

          {/* Traduction */}
          {showTranslation && (
            <div className="story-translation">
              <h3 className="text-version-label">Traduction francaise</h3>
              {selectedStory.translation.split('\n\n').map((para, index) => (
                <p key={index} className="story-paragraph">{para}</p>
              ))}
            </div>
          )}

          {/* Aide vocabulaire */}
          <div className="vocabulary-hint">
            <p>Survole les mots <span className="vocabulary-word">surligne</span> pour voir leur traduction.</p>
          </div>

          {/* Bouton quiz */}
          <div className="start-quiz-section">
            <button
              className="start-quiz-btn"
              onClick={() => setShowQuestions(true)}
            >
              Tester ma comprehension ({selectedStory.questions.length} questions)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
