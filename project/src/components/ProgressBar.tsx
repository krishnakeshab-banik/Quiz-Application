import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentQuestion, totalQuestions }) => {
  const progress = (currentQuestion / totalQuestions) * 100;
  
  return (
    <div className="w-full md:w-64">
      <div className="flex justify-between mb-1 text-sm font-orbitron">
        <span>Question {currentQuestion}/{totalQuestions}</span>
        <span>{Math.round(progress)}%</span>
      </div>
      
      <div className="h-3 w-full bg-deep-blue rounded-full overflow-hidden border border-white/10">
        <motion.div
          className="h-full bg-gradient-to-r from-neon-blue to-neon-green"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
          style={{
            boxShadow: '0 0 10px var(--neon-blue), 0 0 5px var(--neon-green) inset',
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;