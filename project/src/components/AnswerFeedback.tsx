import React from 'react';
import { motion } from 'framer-motion';
import { useSoundEffects } from '../hooks/useSoundEffects';

interface AnswerFeedbackProps {
  isCorrect: boolean;
  explanation: string;
  onNext: () => void;
}

const AnswerFeedback: React.FC<AnswerFeedbackProps> = ({ 
  isCorrect, 
  explanation, 
  onNext 
}) => {
  const { playCorrectSound, playIncorrectSound } = useSoundEffects();
  
  React.useEffect(() => {
    if (isCorrect) {
      playCorrectSound();
    } else {
      playIncorrectSound();
    }
  }, [isCorrect, playCorrectSound, playIncorrectSound]);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className={`mt-6 p-6 rounded-lg ${
        isCorrect ? 'neon-border-green' : 'neon-border-red'
      }`}
    >
      <div className="flex items-center mb-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
          isCorrect 
            ? 'bg-neon-green/20 text-neon-green' 
            : 'bg-neon-red/20 text-neon-red'
        }`}>
          {isCorrect ? '✓' : '✗'}
        </div>
        <h3 className={`text-xl font-orbitron ${
          isCorrect ? 'neon-text-green' : 'neon-text-red'
        }`}>
          {isCorrect ? 'Correct!' : 'Incorrect'}
        </h3>
      </div>
      
      <p className="text-white/80 mb-6 font-calsans">
        {explanation}
      </p>
      
      <motion.button
        onClick={onNext}
        className="futuristic-button px-6 py-2 w-full md:w-auto"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Next Question
      </motion.button>
    </motion.div>
  );
};

export default AnswerFeedback;