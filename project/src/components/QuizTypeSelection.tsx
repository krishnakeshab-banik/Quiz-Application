import React from 'react';
import { motion } from 'framer-motion';
import { useQuizStore } from '../store/quizStore';
import { useSoundEffects } from '../hooks/useSoundEffects';
import { 
  Atom, 
  Code, 
  BrainCircuit, 
  Anchor, 
  Stethoscope, 
  Image 
} from 'lucide-react';

const QuizTypeSelection: React.FC = () => {
  const { selectQuizCategory } = useQuizStore();
  const { playButtonSound } = useSoundEffects();
  
  const quizTypes = [
    { 
      id: 'quantum', 
      name: 'Quantum Computing', 
      icon: <Atom className="w-8 h-8 text-neon-blue" />,
      description: 'Explore the fascinating world of qubits and superposition'
    },
    { 
      id: 'webdev', 
      name: 'Web Development', 
      icon: <Code className="w-8 h-8 text-neon-blue" />,
      description: 'Test your knowledge of modern web technologies'
    },
    { 
      id: 'ai', 
      name: 'Artificial Intelligence', 
      icon: <BrainCircuit className="w-8 h-8 text-neon-blue" />,
      description: 'Challenge yourself with AI concepts and applications'
    },
    { 
      id: 'marine', 
      name: 'Marine Engineering', 
      icon: <Anchor className="w-8 h-8 text-neon-blue" />,
      description: 'Dive into the world of marine technology and shipbuilding'
    },
    { 
      id: 'medical', 
      name: 'Medical Science', 
      icon: <Stethoscope className="w-8 h-8 text-neon-blue" />,
      description: 'Test your medical knowledge and healthcare expertise'
    },
    { 
      id: 'images', 
      name: 'Image Recognition', 
      icon: <Image className="w-8 h-8 text-neon-blue" />,
      description: 'Identify objects, people, and places from images'
    },
  ];
  
  const handleSelectQuiz = (id: string) => {
    playButtonSound();
    selectQuizCategory(id as any);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-4xl mx-auto"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-orbitron font-bold mb-4 neon-text">SELECT QUIZ TYPE</h2>
        <p className="text-white/60 text-lg">Choose a category to begin your challenge</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizTypes.map((type, index) => (
          <motion.div
            key={type.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="glass-card p-6 flex flex-col items-center text-center cursor-pointer"
            onClick={() => handleSelectQuiz(type.id)}
            whileHover={{ y: -5, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-16 h-16 flex items-center justify-center mb-4 rounded-full bg-deep-blue border border-neon-blue/30">
              {type.icon}
            </div>
            <h3 className="text-xl font-orbitron font-bold mb-2 text-white">{type.name}</h3>
            <p className="text-white/60 text-sm">{type.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default QuizTypeSelection;