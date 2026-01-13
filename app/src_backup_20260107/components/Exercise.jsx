import { useState } from 'react';

export function Exercise({ section, onComplete, onNext }) {
  const [userAnswer, setUserAnswer] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    let correct = false;

    switch (section.exerciseType) {
      case 'qcm':
        correct = selectedOption === section.correct;
        break;

      case 'fillBlank':
        correct = userAnswer.toLowerCase().trim() === section.answer.toLowerCase().trim();
        break;

      case 'translation':
        const normalizedAnswer = userAnswer.toLowerCase().trim();
        const normalizedCorrect = section.answer.toLowerCase().trim();
        const alternatives = section.alternatives?.map(a => a.toLowerCase().trim()) || [];
        correct = normalizedAnswer === normalizedCorrect ||
                  alternatives.includes(normalizedAnswer);
        break;

      default:
        correct = false;
    }

    setIsCorrect(correct);
    setShowResult(true);
    onComplete(correct);
  };

  const handleNextClick = () => {
    setUserAnswer('');
    setSelectedOption(null);
    setShowResult(false);
    setIsCorrect(false);
    onNext();
  };

  const renderExercise = () => {
    switch (section.exerciseType) {
      case 'qcm':
        return (
          <div className="qcm-exercise">
            <h3 className="exercise-question">{section.question}</h3>
            <div className="options-grid">
              {section.options.map((option, index) => (
                <button
                  key={index}
                  className={`option-btn ${selectedOption === index ? 'selected' : ''}
                    ${showResult && index === section.correct ? 'correct' : ''}
                    ${showResult && selectedOption === index && !isCorrect ? 'incorrect' : ''}`}
                  onClick={() => !showResult && setSelectedOption(index)}
                  disabled={showResult}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );

      case 'fillBlank':
        return (
          <div className="fill-blank-exercise">
            <h3 className="exercise-question">Complete la phrase:</h3>
            <p className="fill-blank-sentence">
              {section.question.split('___').map((part, index, array) => (
                <span key={index}>
                  {part}
                  {index < array.length - 1 && (
                    <input
                      type="text"
                      className={`blank-input ${showResult ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      placeholder="..."
                      disabled={showResult}
                      autoFocus
                    />
                  )}
                </span>
              ))}
            </p>
            {section.hint && !showResult && (
              <p className="hint">Indice: {section.hint}</p>
            )}
          </div>
        );

      case 'translation':
        return (
          <div className="translation-exercise">
            <h3 className="exercise-question">
              {section.direction === 'fi-fr' ? 'Traduis en francais:' : 'Traduis en finnois:'}
            </h3>
            <p className="source-text">{section.question}</p>
            <textarea
              className={`translation-input ${showResult ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Ta traduction..."
              disabled={showResult}
              rows={3}
            />
          </div>
        );

      default:
        return <p>Type d'exercice non reconnu.</p>;
    }
  };

  return (
    <div className="exercise-container">
      <div className="exercise-type-badge">
        {section.exerciseType === 'qcm' && 'QCM'}
        {section.exerciseType === 'fillBlank' && 'Texte a trous'}
        {section.exerciseType === 'translation' && 'Traduction'}
      </div>

      {renderExercise()}

      {/* Resultat */}
      {showResult && (
        <div className={`result-box ${isCorrect ? 'correct' : 'incorrect'}`}>
          <div className="result-header">
            {isCorrect ? (
              <>
                <span className="result-icon">✓</span>
                <span>Correct! Hyvä!</span>
              </>
            ) : (
              <>
                <span className="result-icon">✗</span>
                <span>Pas tout a fait...</span>
              </>
            )}
          </div>

          {!isCorrect && (
            <div className="correct-answer">
              <strong>Reponse correcte:</strong> {section.answer || section.options?.[section.correct]}
            </div>
          )}

          {section.explanation && (
            <p className="explanation">{section.explanation}</p>
          )}
        </div>
      )}

      {/* Boutons */}
      <div className="exercise-actions">
        {!showResult ? (
          <button
            className="submit-btn"
            onClick={handleSubmit}
            disabled={section.exerciseType === 'qcm' ? selectedOption === null : !userAnswer.trim()}
          >
            Verifier
          </button>
        ) : (
          <button className="next-btn" onClick={handleNextClick}>
            Continuer →
          </button>
        )}
      </div>
    </div>
  );
}
