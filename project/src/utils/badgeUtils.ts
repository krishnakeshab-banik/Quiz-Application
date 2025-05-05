import { Badge, QuizStats } from '../types';

/**
 * Define the available badges and their conditions
 */
export const badges: Badge[] = [
  {
    id: 'perfect-score',
    name: 'Perfect Score',
    description: 'Answer all questions correctly',
    icon: 'trophy',
    condition: (stats: QuizStats) => stats.correctAnswers === stats.totalAnswered && stats.totalAnswered >= 10,
  },
  {
    id: 'fast-thinker',
    name: 'Fast Thinker',
    description: 'Answer 5+ questions in under 5 seconds each',
    icon: 'zap',
    condition: (stats: QuizStats) => stats.fastAnswers >= 5,
  },
  {
    id: 'streaker',
    name: 'Streaker',
    description: 'Get a streak of 5+ correct answers',
    icon: 'flame',
    condition: (stats: QuizStats) => stats.streak >= 5,
  },
  {
    id: 'master',
    name: 'Quiz Master',
    description: 'Score 80% or higher on a complete quiz',
    icon: 'award',
    condition: (stats: QuizStats) => {
      return stats.totalAnswered >= 10 && 
        (stats.correctAnswers / stats.totalAnswered) >= 0.8;
    },
  },
  {
    id: 'explorer',
    name: 'Explorer',
    description: 'Complete a full quiz',
    icon: 'compass',
    condition: (stats: QuizStats) => stats.totalAnswered >= 10,
  },
];

/**
 * Calculate which badges the user has earned based on their stats
 */
export const calculateEarnedBadges = (stats: QuizStats): Badge[] => {
  return badges.filter(badge => badge.condition(stats));
};