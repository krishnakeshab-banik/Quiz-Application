import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimerProps {
  duration: number;
  onTimeUpdate: (timeSpent: number) => void;
  isRunning: boolean;
}

const Timer: React.FC<TimerProps> = ({ duration, onTimeUpdate, isRunning }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [timeSpent, setTimeSpent] = useState(0);
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          const newTime = prev - 1;
          return newTime >= 0 ? newTime : 0;
        });
        setTimeSpent(prev => prev + 1);
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);
  
  useEffect(() => {
    onTimeUpdate(timeSpent);
  }, [timeSpent, onTimeUpdate]);
  
  // Calculate the progress percentage
  const progress = (timeLeft / duration) * 100;
  const circumference = 2 * Math.PI * 22; // Circle radius is 22
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  
  // Determine the color based on time left
  const getColor = () => {
    if (timeLeft > duration * 0.6) return 'var(--neon-green)';
    if (timeLeft > duration * 0.3) return 'var(--neon-blue)';
    return 'var(--neon-red)';
  };
  
  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 50 50">
        {/* Background circle */}
        <circle
          cx="25"
          cy="25"
          r="22"
          fill="transparent"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="3"
        />
        
        {/* Progress circle */}
        <motion.circle
          cx="25"
          cy="25"
          r="22"
          fill="transparent"
          stroke={getColor()}
          strokeWidth="3"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 0.5 }}
          style={{
            transformOrigin: '50% 50%',
            transform: 'rotate(-90deg)',
            filter: `drop-shadow(0 0 2px ${getColor()})`,
          }}
        />
      </svg>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-orbitron text-lg font-bold">{timeLeft}</span>
      </div>
    </div>
  );
};

export default Timer;