import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects: React.FC = () => {
  return (
    <>
      {/* Background grid */}
      <div className="absolute inset-0 background-grid opacity-30 z-0" />
      
      {/* Animated gradient circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <motion.div 
          className="absolute top-[-10%] left-[10%] w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-neon-blue/10 to-transparent blur-3xl"
          animate={{ 
            x: [0, 20, 0],
            y: [0, 30, 0], 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 20,
            ease: "easeInOut" 
          }}
        />
        
        <motion.div 
          className="absolute bottom-[-20%] right-[-10%] w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-neon-red/10 to-transparent blur-3xl"
          animate={{ 
            x: [0, -40, 0],
            y: [0, -30, 0], 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 25,
            ease: "easeInOut" 
          }}
        />
        
        <motion.div 
          className="absolute top-[30%] right-[30%] w-[15rem] h-[15rem] rounded-full bg-gradient-to-br from-purple-500/5 to-transparent blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 15,
            ease: "easeInOut" 
          }}
        />
      </div>
      
      {/* Glowing particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
              boxShadow: `0 0 ${Math.random() *
                10 + 5}px rgba(255, 255, 255, 0.8)`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 3 + 2,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      {/* Circuit lines */}
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" className="opacity-10">
          <pattern
            id="circuit-pattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 50 L40 50 M60 50 L100 50 M50 0 L50 40 M50 60 L50 100"
              stroke="rgba(0, 243, 255, 0.5)"
              strokeWidth="0.5"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="3"
              fill="rgba(0, 243, 255, 0.2)"
              stroke="rgba(0, 243, 255, 0.5)"
              strokeWidth="0.5"
            />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>
    </>
  );
};

export default BackgroundEffects;