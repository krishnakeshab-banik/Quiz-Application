import React from 'react';
import { Trophy, Zap } from 'lucide-react';

interface ScoreTrackerProps {
  score: number;
  streak: number;
}

const ScoreTracker: React.FC<ScoreTrackerProps> = ({ score, streak }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <Trophy className="w-5 h-5 text-yellow-400" />
        <span className="font-orbitron text-lg">{score}</span>
      </div>
      
      <div className="flex items-center space-x-2">
        <Zap className={`w-5 h-5 ${streak > 0 ? 'text-neon-blue' : 'text-gray-500'}`} />
        <span className={`font-orbitron text-lg ${streak > 0 ? 'text-neon-blue' : 'text-gray-500'}`}>
          {streak}x
        </span>
      </div>
    </div>
  );
};

export default ScoreTracker;