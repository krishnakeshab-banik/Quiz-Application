import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';
import { useQuizStore } from '../store/quizStore';
import { useSoundEffects } from '../hooks/useSoundEffects';

const StartScreen: React.FC = () => {
  const { setScreen } = useQuizStore();
  const { playButtonSound } = useSoundEffects();
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleStart = () => {
    playButtonSound();
    setIsAnimating(true);
    
    // After animation completes, navigate to quiz selection
    setTimeout(() => {
      setScreen('select');
    }, 1500);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center min-h-[80vh] relative"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-[10%] w-40 h-40 rounded-full bg-neon-blue/10 blur-3xl"></div>
        <div className="absolute bottom-10 right-[10%] w-40 h-40 rounded-full bg-neon-red/10 blur-3xl"></div>
      </div>
      
      {/* Logo */}
      <motion.div 
        className="mb-12 text-center"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      >
        <BrainCircuit className="w-24 h-24 mx-auto mb-4 text-neon-blue" />
        <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-2 text-white">
          <span className="text-neon-blue animate-glow">QUIZ</span> GAME
        </h1>
        <p className="text-white/60 font-calsans text-xl mt-4">
          Test your knowledge across multiple domains
        </p>
      </motion.div>
      
      {/* Start button */}
      <motion.button
        className={`futuristic-button text-xl mt-8 px-12 py-4 ${isAnimating ? 'option-glow' : ''}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleStart}
        disabled={isAnimating}
      >
        START
      </motion.button>
      
      {/* Animated white light effect */}
      {isAnimating && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0.8, 0], scale: [0.8, 2.5] }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/50 to-white/0 rounded-full z-0"
        />
      )}
      
      {/* Footer credits */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-white/30 text-sm font-calsans">
        Futuristic quiz experience | 2025
      </div>
    </motion.div>
  );
};

export default StartScreen;