import React from 'react';
import { motion } from 'framer-motion';
import { Question as QuestionType } from '../types';
import { useSoundEffects } from '../hooks/useSoundEffects';

interface QuestionProps {
  question: QuestionType;
  onSelectAnswer: (optionId: string) => void;
  disabled: boolean;
}

const Question: React.FC<QuestionProps> = ({ question, onSelectAnswer, disabled }) => {
  const { playOptionSound } = useSoundEffects();
  
  const handleSelectOption = (optionId: string) => {
    if (disabled) return;
    
    playOptionSound();
    onSelectAnswer(optionId);
  };
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <div className="glass-card p-8 rounded-xl">
      <h3 className="text-2xl font-orbitron mb-6 text-white">{question.text}</h3>
      
      {question.image && (
        <div className="mb-6 rounded-lg overflow-hidden">
          <img 
            src={question.image} 
            alt="Question visual" 
            className="w-full h-64 object-cover"
          />
        </div>
      )}
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 gap-4"
      >
        {question.options.map((option) => (
          <motion.div
            key={option.id}
            variants={item}
            className={`
              glass-card p-4 rounded-lg cursor-pointer transition-all duration-300
              hover:bg-white/20 hover:shadow-neon-blue
              ${disabled ? 'cursor-not-allowed opacity-80' : ''}
            `}
            onClick={() => handleSelectOption(option.id)}
            whileHover={{ scale: disabled ? 1 : 1.02 }}
            whileTap={{ scale: disabled ? 1 : 0.98 }}
          >
            <p className="text-lg font-calsans">{option.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Question;