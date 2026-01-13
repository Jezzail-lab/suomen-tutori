import { useState, useMemo } from 'react';

// Donnees de gradation consonantique
const GRADATION_PATTERNS = {
  'pp→p': { strong: 'pp', weak: 'p', examples: ['kauppa→kaupan', 'pappi→papin'] },
  'tt→t': { strong: 'tt', weak: 't', examples: ['matto→maton', 'katto→katon'] },
  'kk→k': { strong: 'kk', weak: 'k', examples: ['kukka→kukan', 'takki→takin'] },
  'p→v': { strong: 'p', weak: 'v', examples: ['tapa→tavan', 'apu→avun'] },
  't→d': { strong: 't', weak: 'd', examples: ['katu→kadun', 'pöytä→pöydän'] },
  'k→∅': { strong: 'k', weak: '∅', examples: ['jalka→jalan', 'luku→luvun'] },
  'mp→mm': { strong: 'mp', weak: 'mm', examples: ['kampa→kamman', 'ampu→ammun'] },
  'nt→nn': { strong: 'nt', weak: 'nn', examples: ['ranta→rannan', 'kynttilä→kynntilän'] },
  'nk→ng': { strong: 'nk', weak: 'ng', examples: ['kenkä→kengän', 'kaupunki→kaupungin'] },
  'lt→ll': { strong: 'lt', weak: 'll', examples: ['ilta→illan', 'kulta→kullan'] },
  'rt→rr': { strong: 'rt', weak: 'rr', examples: ['parta→parran', 'virta→virran'] },
};

export function Exercise({ section, onComplete, onNext }) {
  const [userAnswer, setUserAnswer] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  // Pour les exercices cloze avec plusieurs trous
  const [clozeAnswers, setClozeAnswers] = useState({});
  // Pour les exercices de construction de phrases
  const [selectedWords, setSelectedWords] = useState([]);
  const [availableWords, setAvailableWords] = useState([]);

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

      case 'cloze':
        if (section.blanks) {
          // Plusieurs trous
          correct = section.blanks.every((blank, index) => {
            const userInput = (clozeAnswers[index] || '').toLowerCase().trim();
            const correctAnswer = blank.answer.toLowerCase().trim();
            const alts = blank.alternatives?.map(a => a.toLowerCase().trim()) || [];
            return userInput === correctAnswer || alts.includes(userInput);
          });
        } else {
          // Un seul trou
          const userInput = userAnswer.toLowerCase().trim();
          const correctAnswer = section.answer.toLowerCase().trim();
          const alts = section.alternatives?.map(a => a.toLowerCase().trim()) || [];
          correct = userInput === correctAnswer || alts.includes(userInput);
        }
        break;

      case 'wordOrder':
        const userSentence = selectedWords.join(' ').toLowerCase().trim();
        const correctSentence = section.answer.toLowerCase().trim();
        const altSentences = section.alternatives?.map(a => a.toLowerCase().trim()) || [];
        correct = userSentence === correctSentence || altSentences.includes(userSentence);
        break;

      case 'dialogue':
        correct = selectedOption === section.correct;
        break;

      case 'gradation':
        // Exercice de gradation consonantique
        const userGradation = userAnswer.toLowerCase().trim();
        const correctGradation = section.answer.toLowerCase().trim();
        const gradationAlts = section.alternatives?.map(a => a.toLowerCase().trim()) || [];
        correct = userGradation === correctGradation || gradationAlts.includes(userGradation);
        break;

      case 'objectCase':
        // Exercice sur le choix de l'objet (partitif vs accusatif)
        correct = selectedOption === section.correct;
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
    setClozeAnswers({});
    setSelectedWords([]);
    setAvailableWords([]);
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

      case 'cloze':
        return (
          <div className="cloze-exercise">
            <h3 className="exercise-question">{section.instruction || 'Complete la phrase avec la forme correcte:'}</h3>
            {section.context && (
              <p className="cloze-context">{section.context}</p>
            )}
            <div className="cloze-sentence">
              {section.blanks ? (
                // Plusieurs trous - on parse la phrase
                renderClozeWithMultipleBlanks()
              ) : (
                // Un seul trou
                <>
                  {section.sentence.split('___').map((part, index, array) => (
                    <span key={index}>
                      {part}
                      {index < array.length - 1 && (
                        <span className="cloze-blank-wrapper">
                          <input
                            type="text"
                            className={`cloze-input ${showResult ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                            placeholder={section.baseWord || '...'}
                            disabled={showResult}
                            autoFocus
                          />
                          {section.baseWord && (
                            <span className="cloze-hint">({section.baseWord})</span>
                          )}
                        </span>
                      )}
                    </span>
                  ))}
                </>
              )}
            </div>
            {section.translation && (
              <p className="cloze-translation">« {section.translation} »</p>
            )}
          </div>
        );

      case 'wordOrder':
        return (
          <div className="word-order-exercise">
            <h3 className="exercise-question">{section.instruction || 'Remets les mots dans le bon ordre :'}</h3>
            {section.translation && (
              <p className="word-order-hint">« {section.translation} »</p>
            )}

            {/* Zone de reponse */}
            <div className={`word-order-answer ${showResult ? (isCorrect ? 'correct' : 'incorrect') : ''}`}>
              {selectedWords.length > 0 ? (
                selectedWords.map((word, index) => (
                  <button
                    key={index}
                    className="word-chip selected"
                    onClick={() => !showResult && handleRemoveWord(index)}
                    disabled={showResult}
                  >
                    {word}
                  </button>
                ))
              ) : (
                <span className="placeholder-text">Clique sur les mots ci-dessous...</span>
              )}
            </div>

            {/* Mots disponibles */}
            <div className="word-order-choices">
              {getShuffledWords().map((word, index) => {
                const isUsed = selectedWords.includes(word) &&
                  selectedWords.filter(w => w === word).length >
                  getShuffledWords().slice(0, index).filter(w => w === word).length -
                  selectedWords.filter(w => w === word).length + 1;
                const usedCount = selectedWords.filter(w => w === word).length;
                const availableCount = getShuffledWords().filter(w => w === word).length;
                const isDisabled = usedCount >= availableCount;

                return (
                  <button
                    key={index}
                    className={`word-chip ${isDisabled ? 'used' : ''}`}
                    onClick={() => !showResult && !isDisabled && handleAddWord(word)}
                    disabled={showResult || isDisabled}
                  >
                    {word}
                  </button>
                );
              })}
            </div>

            {/* Bouton effacer */}
            {selectedWords.length > 0 && !showResult && (
              <button className="clear-btn" onClick={() => setSelectedWords([])}>
                Effacer tout
              </button>
            )}
          </div>
        );

      case 'dialogue':
        return (
          <div className="dialogue-exercise">
            <h3 className="exercise-question">{section.instruction || 'Que reponds-tu ?'}</h3>

            {/* Contexte du dialogue */}
            {section.context && (
              <p className="dialogue-context">{section.context}</p>
            )}

            {/* Historique de la conversation */}
            <div className="dialogue-history">
              {section.conversation.map((line, index) => (
                <div key={index} className={`dialogue-line ${line.speaker}`}>
                  <span className="speaker-label">
                    {line.speaker === 'other' ? section.otherName || 'A' : 'Toi'}
                  </span>
                  <div className="dialogue-bubble">
                    <p className="dialogue-text">{line.text}</p>
                    {line.translation && (
                      <p className="dialogue-translation">{line.translation}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Zone de reponse de l'utilisateur */}
              <div className="dialogue-line user your-turn">
                <span className="speaker-label">Toi</span>
                <div className="dialogue-bubble empty">
                  {selectedOption !== null ? (
                    <>
                      <p className="dialogue-text">{section.options[selectedOption]}</p>
                      {section.optionTranslations && (
                        <p className="dialogue-translation">{section.optionTranslations[selectedOption]}</p>
                      )}
                    </>
                  ) : (
                    <p className="dialogue-placeholder">Choisis ta reponse...</p>
                  )}
                </div>
              </div>
            </div>

            {/* Options de reponse */}
            <div className="dialogue-options">
              {section.options.map((option, index) => (
                <button
                  key={index}
                  className={`dialogue-option ${selectedOption === index ? 'selected' : ''}
                    ${showResult && index === section.correct ? 'correct' : ''}
                    ${showResult && selectedOption === index && !isCorrect ? 'incorrect' : ''}`}
                  onClick={() => !showResult && setSelectedOption(index)}
                  disabled={showResult}
                >
                  <span className="option-text">{option}</span>
                  {section.optionTranslations && (
                    <span className="option-translation">{section.optionTranslations[index]}</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        );

      case 'gradation':
        return (
          <div className="gradation-exercise">
            <h3 className="exercise-question">
              {section.instruction || 'Applique la gradation consonantique :'}
            </h3>

            {/* Afficher le pattern si specifie */}
            {section.pattern && (
              <div className="gradation-pattern-hint">
                <span className="pattern-label">Type :</span>
                <span className="pattern-value">{section.pattern}</span>
              </div>
            )}

            {/* Mot a transformer */}
            <div className="gradation-transform">
              <div className="gradation-source">
                <span className="gradation-label">
                  {section.direction === 'weak-to-strong' ? 'Forme faible :' : 'Forme forte :'}
                </span>
                <span className="gradation-word">{section.word}</span>
              </div>

              <span className="gradation-arrow">→</span>

              <div className="gradation-target">
                <span className="gradation-label">
                  {section.direction === 'weak-to-strong' ? 'Forme forte :' : 'Forme faible :'}
                </span>
                <input
                  type="text"
                  className={`gradation-input ${showResult ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="..."
                  disabled={showResult}
                  autoFocus
                />
              </div>
            </div>

            {/* Contexte si present */}
            {section.context && (
              <p className="gradation-context">Contexte : {section.context}</p>
            )}

            {/* Aide memoire */}
            {!showResult && section.showHelp && (
              <div className="gradation-help">
                <details>
                  <summary>Aide-memoire gradation</summary>
                  <table className="gradation-table">
                    <thead>
                      <tr>
                        <th>Forte</th>
                        <th>→</th>
                        <th>Faible</th>
                        <th>Exemple</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(GRADATION_PATTERNS).slice(0, 6).map(([key, val]) => (
                        <tr key={key}>
                          <td>{val.strong}</td>
                          <td>→</td>
                          <td>{val.weak}</td>
                          <td>{val.examples[0]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </details>
              </div>
            )}
          </div>
        );

      case 'objectCase':
        return (
          <div className="object-case-exercise">
            <h3 className="exercise-question">
              {section.instruction || 'Choisis la forme correcte de l\'objet :'}
            </h3>

            {/* Phrase avec trou */}
            <p className="object-sentence">
              {section.sentence.split('___').map((part, index, array) => (
                <span key={index}>
                  {part}
                  {index < array.length - 1 && (
                    <span className="object-blank">______</span>
                  )}
                </span>
              ))}
            </p>

            {/* Traduction */}
            {section.translation && (
              <p className="object-translation">« {section.translation} »</p>
            )}

            {/* Options */}
            <div className="object-options">
              {section.options.map((option, index) => (
                <button
                  key={index}
                  className={`object-option ${selectedOption === index ? 'selected' : ''}
                    ${showResult && index === section.correct ? 'correct' : ''}
                    ${showResult && selectedOption === index && !isCorrect ? 'incorrect' : ''}`}
                  onClick={() => !showResult && setSelectedOption(index)}
                  disabled={showResult}
                >
                  <span className="option-word">{option.word}</span>
                  <span className="option-case">({option.case})</span>
                </button>
              ))}
            </div>

            {/* Explication des cas */}
            {showResult && section.caseExplanation && (
              <div className="case-explanation">
                <strong>Regle :</strong> {section.caseExplanation}
              </div>
            )}
          </div>
        );

      default:
        return <p>Type d'exercice non reconnu.</p>;
    }
  };

  // Fonction pour rendre les exercices cloze avec plusieurs trous
  const renderClozeWithMultipleBlanks = () => {
    // Le format de la phrase utilise {0}, {1}, etc. pour marquer les trous
    const parts = section.sentence.split(/\{(\d+)\}/);

    return parts.map((part, index) => {
      // Les indices pairs sont du texte, les impairs sont des numeros de trou
      if (index % 2 === 0) {
        return <span key={index}>{part}</span>;
      } else {
        const blankIndex = parseInt(part, 10);
        const blank = section.blanks[blankIndex];
        if (!blank) return null;

        const inputValue = clozeAnswers[blankIndex] || '';
        const isBlankCorrect = showResult &&
          (inputValue.toLowerCase().trim() === blank.answer.toLowerCase().trim() ||
           blank.alternatives?.map(a => a.toLowerCase().trim()).includes(inputValue.toLowerCase().trim()));
        const isBlankIncorrect = showResult && !isBlankCorrect;

        return (
          <span key={index} className="cloze-blank-wrapper">
            <input
              type="text"
              className={`cloze-input ${isBlankCorrect ? 'correct' : ''} ${isBlankIncorrect ? 'incorrect' : ''}`}
              value={inputValue}
              onChange={(e) => setClozeAnswers(prev => ({ ...prev, [blankIndex]: e.target.value }))}
              placeholder={blank.baseWord || '...'}
              disabled={showResult}
              autoFocus={blankIndex === 0}
            />
            {blank.baseWord && (
              <span className="cloze-hint">({blank.baseWord})</span>
            )}
          </span>
        );
      }
    });
  };

  // === FONCTIONS POUR WORD ORDER ===

  // Melanger les mots (avec seed pour garder le meme ordre)
  const getShuffledWords = () => {
    if (!section.words) return [];
    // Utiliser un shuffle deterministe base sur les mots
    const words = [...section.words];
    // Simple shuffle
    for (let i = words.length - 1; i > 0; i--) {
      const j = Math.floor((i * 7 + 3) % (i + 1));
      [words[i], words[j]] = [words[j], words[i]];
    }
    return words;
  };

  const handleAddWord = (word) => {
    setSelectedWords(prev => [...prev, word]);
  };

  const handleRemoveWord = (index) => {
    setSelectedWords(prev => prev.filter((_, i) => i !== index));
  };

  // Verification si le bouton submit doit etre desactive
  const isSubmitDisabled = () => {
    switch (section.exerciseType) {
      case 'qcm':
      case 'dialogue':
      case 'objectCase':
        return selectedOption === null;
      case 'cloze':
        if (section.blanks) {
          return !section.blanks.every((_, index) => clozeAnswers[index]?.trim());
        }
        return !userAnswer.trim();
      case 'wordOrder':
        return selectedWords.length === 0;
      case 'gradation':
      case 'fillBlank':
      case 'translation':
      default:
        return !userAnswer.trim();
    }
  };

  return (
    <div className="exercise-container">
      <div className="exercise-type-badge">
        {section.exerciseType === 'qcm' && 'QCM'}
        {section.exerciseType === 'fillBlank' && 'Texte a trous'}
        {section.exerciseType === 'translation' && 'Traduction'}
        {section.exerciseType === 'cloze' && 'Cloze'}
        {section.exerciseType === 'wordOrder' && 'Construction'}
        {section.exerciseType === 'dialogue' && 'Dialogue'}
        {section.exerciseType === 'gradation' && 'Gradation KPT'}
        {section.exerciseType === 'objectCase' && 'Objet'}
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
              <strong>Reponse correcte:</strong>{' '}
              {section.exerciseType === 'cloze' && section.blanks
                ? section.blanks.map((b, i) => b.answer).join(', ')
                : section.answer || section.options?.[section.correct]}
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
            disabled={isSubmitDisabled()}
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
