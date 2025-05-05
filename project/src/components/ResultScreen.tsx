import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Zap, Brain, Clock, RotateCcw, Plus } from 'lucide-react';
import { useQuizStore } from '../store/quizStore';
import { calculateEarnedBadges } from '../utils/badgeUtils';
import { useSoundEffects } from '../hooks/useSoundEffects';

const ResultScreen: React.FC = () => {
  const { stats, questions, restartSameQuiz, startNewQuiz, quizCategory } = useQuizStore();
  const { playButtonSound } = useSoundEffects();
  
  const earnedBadges = calculateEarnedBadges(stats);
  const scorePercentage = Math.round((stats.correctAnswers / questions.length) * 100);
  
  const getCategoryName = (category: string | null) => {
    switch(category) {
      case 'quantum': return 'Quantum Computing';
      case 'webdev': return 'Web Development';
      case 'ai': return 'Artificial Intelligence';
      case 'marine': return 'Marine Engineering';
      case 'medical': return 'Medical Science';
      case 'images': return 'Image Recognition';
      default: return 'Quiz';
    }
  };
  
  const handleRestartQuiz = () => {
    playButtonSound();
    restartSameQuiz();
  };
  
  const handleNewQuiz = () => {
    playButtonSound();
    startNewQuiz();
  };
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full"
    >
      <div className="glass-card p-8 rounded-xl mb-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-2 neon-text">
            Quiz Complete!
          </h2>
          <p className="text-white/60 text-lg">
            {getCategoryName(quizCategory)} Results
          </p>
        </div>
        
        {/* Score summary */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5, type: 'spring' }}
            className="w-36 h-36 rounded-full bg-deep-blue flex items-center justify-center mb-6 md:mb-0 md:mr-8 border-4 border-neon-blue relative"
            style={{ boxShadow: '0 0 15px var(--neon-blue)' }}
          >
            <span className="text-4xl font-orbitron font-bold">{scorePercentage}%</span>
            
            {/* Circular progress indicator */}
            <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="transparent"
                stroke="rgba(0, 243, 255, 0.2)"
                strokeWidth="8"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="46"
                fill="transparent"
                stroke="rgba(0, 243, 255, 1)"
                strokeWidth="8"
                strokeDasharray="289.02652413026095"
                initial={{ strokeDashoffset: 289.02652413026095 }}
                animate={{ 
                  strokeDashoffset: 289.02652413026095 * (1 - scorePercentage / 100) 
                }}
                transition={{ delay: 0.8, duration: 1 }}
                style={{
                  transformOrigin: '50% 50%',
                  transform: 'rotate(-90deg)',
                }}
              />
            </svg>
          </motion.div>
          
          <div>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-2 gap-4"
            >
              <motion.div variants={item} className="flex items-center">
                <Trophy className="w-5 h-5 text-yellow-400 mr-2" />
                <div>
                  <p className="text-white/60 text-sm">Score</p>
                  <p className="font-orbitron text-lg">{stats.score} pts</p>
                </div>
              </motion.div>
              
              <motion.div variants={item} className="flex items-center">
                <Brain className="w-5 h-5 text-purple-400 mr-2" />
                <div>
                  <p className="text-white/60 text-sm">Correct</p>
                  <p className="font-orbitron text-lg">{stats.correctAnswers}/{questions.length}</p>
                </div>
              </motion.div>
              
              <motion.div variants={item} className="flex items-center">
                <Zap className="w-5 h-5 text-neon-blue mr-2" />
                <div>
                  <p className="text-white/60 text-sm">Best Streak</p>
                  <p className="font-orbitron text-lg">{stats.streak}x</p>
                </div>
              </motion.div>
              
              <motion.div variants={item} className="flex items-center">
                <Clock className="w-5 h-5 text-neon-green mr-2" />
                <div>
                  <p className="text-white/60 text-sm">Avg. Time</p>
                  <p className="font-orbitron text-lg">{stats.averageTime.toFixed(1)}s</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Badges */}
        {earnedBadges.length > 0 && (
          <div className="mb-10">
            <h3 className="text-xl font-orbitron mb-4 text-center">Badges Earned</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {earnedBadges.map((badge, index) => (
                <motion.div
                  key={badge.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + (index * 0.2) }}
                  className="glass-card p-4 rounded-lg flex flex-col items-center text-center w-24"
                >
                  <div className="w-12 h-12 rounded-full bg-deep-blue flex items-center justify-center mb-2 border border-neon-blue/50">
                    <Award className="w-6 h-6 text-yellow-400" />
                  </div>
                  <p className="text-sm font-orbitron text-neon-blue">{badge.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="futuristic-button"
            onClick={handleRestartQuiz}
          >
            <RotateCcw className="w-4 h-4 mr-2 inline-block" />
            Restart Quiz
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="futuristic-button"
            onClick={handleNewQuiz}
          >
            <Plus className="w-4 h-4 mr-2 inline-block" />
            New Quiz
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ResultScreen;