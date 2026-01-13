import { useState } from 'react';
import './index.css';
import { useProgress } from './hooks/useProgress';
import { Home } from './components/Home';
import { Lesson } from './components/Lesson';
import { LessonSummary } from './components/LessonSummary';
import { Flashcards } from './components/Flashcards';
import { GrammarTables } from './components/GrammarTables';
import { StoryReader } from './components/StoryReader';
import { SceneryBackground } from './components/SceneryBackground';
import { FeedbackProvider } from './components/FeedbackEffects';
import { useSounds } from './hooks/useSounds';

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home', 'lesson', 'lessonSummary', 'flashcards', 'grammar', 'stories'
  const [selectedLessonId, setSelectedLessonId] = useState(null);
  const [completedLessonId, setCompletedLessonId] = useState(null);

  // Controle des sons
  const { isSoundEnabled, setSoundEnabled } = useSounds();
  const [soundOn, setSoundOn] = useState(isSoundEnabled());

  const toggleSound = () => {
    const newValue = !soundOn;
    setSoundOn(newValue);
    setSoundEnabled(newValue);
  };

  const {
    progress,
    completeLesson,
    setCurrentLesson,
    recordExercise,
    masterWord,
    isLessonCompleted,
    getSuccessRate,
    resetProgress,
    // Systeme de maitrise
    getWordLevel,
    reviewWordFlip,
    reviewWordWrite,
    getMasteryStats,
    getWordsToReview,
    getSRSStats
  } = useProgress();

  // Navigation vers une lecon
  const handleSelectLesson = (lessonId) => {
    setSelectedLessonId(lessonId);
    setCurrentLesson(lessonId);
    setCurrentView('lesson');
  };

  // Retour a l'accueil
  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedLessonId(null);
  };

  // Terminer une lecon - afficher le resume
  const handleCompleteLesson = (lessonId) => {
    completeLesson(lessonId);
    setCompletedLessonId(lessonId);
    setCurrentView('lessonSummary');
  };

  // Fermer le resume et revenir a la lecon
  const handleCloseSummary = () => {
    setCurrentView('lesson');
  };

  // Fermer le resume et retourner a l'accueil
  const handleBackFromSummary = () => {
    setCurrentView('home');
    setSelectedLessonId(null);
    setCompletedLessonId(null);
  };

  // Navigation vers les flashcards
  const handleGoToFlashcards = () => {
    setCurrentView('flashcards');
  };

  // Navigation vers les tableaux de grammaire
  const handleGoToGrammar = () => {
    setCurrentView('grammar');
  };

  // Navigation vers les histoires
  const handleGoToStories = () => {
    setCurrentView('stories');
  };

  return (
    <FeedbackProvider>
    <div className="app">
      {/* Paysage finlandais decoratif */}
      <SceneryBackground />

      {/* Barre de navigation */}
      <nav className="app-nav">
        <h1>Suomen Tutori</h1>
        <div className="nav-links">
          <button
            className={currentView === 'home' ? 'active' : ''}
            onClick={handleBackToHome}
          >
            Lecons
          </button>
          <button
            className={currentView === 'flashcards' ? 'active' : ''}
            onClick={handleGoToFlashcards}
          >
            Flashcards
          </button>
          <button
            className={currentView === 'grammar' ? 'active' : ''}
            onClick={handleGoToGrammar}
          >
            Grammaire
          </button>
          <button
            className={currentView === 'stories' ? 'active' : ''}
            onClick={handleGoToStories}
          >
            Histoires
          </button>
          <button
            className="sound-toggle"
            onClick={toggleSound}
            title={soundOn ? 'Desactiver les sons' : 'Activer les sons'}
          >
            {soundOn ? '🔊' : '🔇'}
          </button>
        </div>
      </nav>

      {/* Contenu principal */}
      <main className="main-content">
        {currentView === 'home' && (
          <Home
            onSelectLesson={handleSelectLesson}
            progress={progress}
            getSuccessRate={getSuccessRate}
            getWordLevel={getWordLevel}
            getMasteryStats={getMasteryStats}
            getWordsToReview={getWordsToReview}
            getSRSStats={getSRSStats}
          />
        )}

        {currentView === 'lesson' && selectedLessonId && (
          <Lesson
            lessonId={selectedLessonId}
            onBack={handleBackToHome}
            onComplete={handleCompleteLesson}
            recordExercise={recordExercise}
          />
        )}

        {currentView === 'lessonSummary' && completedLessonId && (
          <LessonSummary
            lessonId={completedLessonId}
            onClose={handleCloseSummary}
            onBack={handleBackFromSummary}
          />
        )}

        {currentView === 'flashcards' && (
          <Flashcards
            onBack={handleBackToHome}
            masterWord={masterWord}
            masteredWords={progress.vocabularyMastered || []}
            getWordLevel={getWordLevel}
            reviewWordFlip={reviewWordFlip}
            reviewWordWrite={reviewWordWrite}
            getMasteryStats={getMasteryStats}
          />
        )}

        {currentView === 'grammar' && (
          <GrammarTables onBack={handleBackToHome} />
        )}

        {currentView === 'stories' && (
          <StoryReader onBack={handleBackToHome} />
        )}
      </main>
    </div>
    </FeedbackProvider>
  );
}

export default App;
