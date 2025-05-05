import React, { useState, useEffect } from 'react';
import StartScreen from './components/StartScreen';
import QuizTypeSelection from './components/QuizTypeSelection'; 
import Quiz from './components/Quiz';
import ResultScreen from './components/ResultScreen';
import BackgroundEffects from './components/BackgroundEffects';
import { useQuizStore } from './store/quizStore';

function App() {
  const { currentScreen, setScreen } = useQuizStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const renderScreen = () => {
    if (!mounted) return null;
    
    switch (currentScreen) {
      case 'start':
        return <StartScreen />;
      case 'select':
        return <QuizTypeSelection />;
      case 'quiz':
        return <Quiz />;
      case 'results':
        return <ResultScreen />;
      default:
        return <StartScreen />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <BackgroundEffects />
      
      <div className="quiz-container z-10">
        {renderScreen()}
      </div>
    </div>
  );
}

export default App;