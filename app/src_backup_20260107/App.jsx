import { useState } from 'react';
import './index.css';
import { useProgress } from './hooks/useProgress';
import { Home } from './components/Home';
import { Lesson } from './components/Lesson';
import { Flashcards } from './components/Flashcards';

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home', 'lesson', 'flashcards'
  const [selectedLessonId, setSelectedLessonId] = useState(null);

  const {
    progress,
    completeLesson,
    setCurrentLesson,
    recordExercise,
    masterWord,
    isLessonCompleted,
    getSuccessRate,
    resetProgress
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

  // Terminer une lecon
  const handleCompleteLesson = (lessonId) => {
    completeLesson(lessonId);
    setCurrentView('home');
    setSelectedLessonId(null);
  };

  // Navigation vers les flashcards
  const handleGoToFlashcards = () => {
    setCurrentView('flashcards');
  };

  return (
    <div className="app">
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
        </div>
      </nav>

      {/* Contenu principal */}
      <main className="main-content">
        {currentView === 'home' && (
          <Home
            onSelectLesson={handleSelectLesson}
            progress={progress}
            getSuccessRate={getSuccessRate}
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

        {currentView === 'flashcards' && (
          <Flashcards
            onBack={handleBackToHome}
            masterWord={masterWord}
            masteredWords={progress.vocabularyMastered}
          />
        )}
      </main>
    </div>
  );
}

export default App;
