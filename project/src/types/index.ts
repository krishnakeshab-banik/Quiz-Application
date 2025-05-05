export interface Question {
  id: number;
  text: string;
  image?: string; // Optional image URL for image-based questions
  options: Option[];
  explanation: string;
  category: QuizCategory;
}

export interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

export type QuizCategory = 
  | 'quantum' 
  | 'webdev' 
  | 'ai' 
  | 'marine' 
  | 'medical' 
  | 'images';

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  condition: (stats: QuizStats) => boolean;
}

export interface QuizStats {
  score: number;
  streak: number;
  totalAnswered: number;
  correctAnswers: number;
  incorrectAnswers: number;
  averageTime: number;
  fastAnswers: number; // Answers under 5 seconds
  // Additional stats as needed
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  score: number;
  badges: string[];
}

export type ScreenType = 'start' | 'select' | 'quiz' | 'results';

export interface AnswerFeedback {
  isShowing: boolean;
  isCorrect: boolean;
  explanation: string;
}