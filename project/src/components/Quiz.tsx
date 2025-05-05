import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuizStore } from '../store/quizStore';
import ProgressBar from './ProgressBar';
import Timer from './Timer';
import ScoreTracker from './ScoreTracker';
import AnswerFeedback from './AnswerFeedback';
import Question from './Question';

const Quiz: React.FC = () => {
  const { 
    questions, 
    currentQuestionIndex, 
    nextQuestion, 
    selectAnswer,
    timerRunning,
    showFeedback,
    isCorrect,
    feedbackMessage,
    stats
  } = useQuizStore();
  
  const [timeSpent, setTimeSpent] = useState(0);
  const [timerKey, setTimerKey] = useState(0);
  
  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  
  // Reset timer when moving to next question
  useEffect(() => {
    setTimerKey(prev => prev + 1);
    setTimeSpent(0);
  }, [currentQuestionIndex]);
  
  const handleTimeUpdate = (time: number) => {
    setTimeSpent(time);
  };
  
  const handleSelectAnswer = (optionId: string) => {
    selectAnswer(optionId, timeSpent);
  };
  
  const handleNextQuestion = () => {
    nextQuestion();
  };
  
  if (!currentQuestion) return <div>Loading...</div>;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full"
    >
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="mb-4 md:mb-0">
          <ProgressBar 
            currentQuestion={currentQuestionIndex + 1} 
            totalQuestions={totalQuestions} 
          />
        </div>
        <div className="flex items-center space-x-6">
          <ScoreTracker score={stats.score} streak={stats.streak} />
          <Timer 
            key={timerKey} 
            duration={30} 
            onTimeUpdate={handleTimeUpdate} 
            isRunning={timerRunning} 
          />
        </div>
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
        >
          <Question 
            question={currentQuestion} 
            onSelectAnswer={handleSelectAnswer}
            disabled={showFeedback}
          />
        </motion.div>
      </AnimatePresence>
      
      <AnimatePresence>
        {showFeedback && (
          <AnswerFeedback 
            isCorrect={isCorrect || false} 
            explanation={feedbackMessage}
            onNext={handleNextQuestion}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Quiz;