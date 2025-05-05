import { Question, QuizCategory } from '../types';
import { quantumQuestions } from '../data/quantumQuestions';
import { webdevQuestions } from '../data/webdevQuestions';
import { aiQuestions } from '../data/aiQuestions';
import { marineQuestions } from '../data/marineQuestions';
import { medicalQuestions } from '../data/medicalQuestions';
import { imageQuestions } from '../data/imageQuestions';

/**
 * Get all available questions from all categories
 */
export const getAllQuestions = (): Question[] => {
  return [
    ...quantumQuestions,
    ...webdevQuestions,
    ...aiQuestions,
    ...marineQuestions,
    ...medicalQuestions,
    ...imageQuestions,
  ];
};

/**
 * Get questions for a specific category
 */
export const getQuestionsByCategory = (category: QuizCategory): Question[] => {
  switch (category) {
    case 'quantum':
      return quantumQuestions;
    case 'webdev':
      return webdevQuestions;
    case 'ai':
      return aiQuestions;
    case 'marine':
      return marineQuestions;
    case 'medical':
      return medicalQuestions;
    case 'images':
      return imageQuestions;
    default:
      return [];
  }
};

/**
 * Shuffle an array using Fisher-Yates algorithm
 */
export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Get a subset of questions for a quiz
 */
export const getQuizQuestions = (
  category: QuizCategory,
  count: number = 10
): Question[] => {
  const allQuestions = getQuestionsByCategory(category);
  return shuffleArray(allQuestions).slice(0, count);
};