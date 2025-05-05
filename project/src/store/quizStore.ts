import { create } from 'zustand';
import { Question, QuizCategory, QuizStats, ScreenType } from '../types';
import { getAllQuestions, shuffleArray } from '../utils/quizUtils';

interface QuizState {
  currentScreen: ScreenType;
  quizCategory: QuizCategory | null;
  questions: Question[];
  currentQuestionIndex: number;
  answers: (string | null)[];
  stats: QuizStats;
  timePerQuestion: number[];
  showFeedback: boolean;
  feedbackMessage: string;
  isCorrect: boolean | null;
  timerRunning: boolean;
  
  // Actions
  setScreen: (screen: ScreenType) => void;
  selectQuizCategory: (category: QuizCategory) => void;
  setQuestions: (questions: Question[]) => void;
  nextQuestion: () => void;
  selectAnswer: (optionId: string, timeSpent: number) => void;
  resetQuiz: () => void;
  restartSameQuiz: () => void;
  startNewQuiz: () => void;
  setTimerRunning: (isRunning: boolean) => void;
  closeFeedback: () => void;
  getCurrentQuestion: () => Question | null;
}

const initialStats: QuizStats = {
  score: 0,
  streak: 0,
  totalAnswered: 0,
  correctAnswers: 0,
  incorrectAnswers: 0,
  averageTime: 0,
  fastAnswers: 0,
};

export const useQuizStore = create<QuizState>((set, get) => ({
  currentScreen: 'start',
  quizCategory: null,
  questions: [],
  currentQuestionIndex: 0,
  answers: [],
  stats: { ...initialStats },
  timePerQuestion: [],
  showFeedback: false,
  feedbackMessage: '',
  isCorrect: null,
  timerRunning: true,
  
  setScreen: (screen) => set({ currentScreen: screen }),
  
  selectQuizCategory: (category) => {
    const allQuestions = getAllQuestions().filter(q => q.category === category);
    const shuffledQuestions = shuffleArray(allQuestions).slice(0, 10);
    
    set({
      quizCategory: category,
      questions: shuffledQuestions,
      currentQuestionIndex: 0,
      answers: Array(shuffledQuestions.length).fill(null),
      stats: { ...initialStats },
      timePerQuestion: [],
      currentScreen: 'quiz',
    });
  },
  
  setQuestions: (questions) => set({ questions }),
  
  getCurrentQuestion: () => {
    const { questions, currentQuestionIndex } = get();
    return questions[currentQuestionIndex] || null;
  },
  
  nextQuestion: () => {
    const { currentQuestionIndex, questions } = get();
    
    if (currentQuestionIndex < questions.length - 1) {
      set({ 
        currentQuestionIndex: currentQuestionIndex + 1,
        showFeedback: false,
        isCorrect: null,
        timerRunning: true,
      });
    } else {
      // End of quiz
      set({ 
        currentScreen: 'results',
        showFeedback: false 
      });
    }
  },
  
  selectAnswer: (optionId, timeSpent) => {
    const { 
      questions, 
      currentQuestionIndex, 
      answers, 
      stats, 
      timePerQuestion 
    } = get();
    
    const currentQuestion = questions[currentQuestionIndex];
    const selectedOption = currentQuestion.options.find(opt => opt.id === optionId);
    
    if (!selectedOption) return;
    
    const isCorrect = selectedOption.isCorrect;
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = optionId;
    
    // Update stats
    const newTimePerQuestion = [...timePerQuestion];
    newTimePerQuestion[currentQuestionIndex] = timeSpent;
    
    const totalTime = [...newTimePerQuestion].filter(t => t !== undefined).reduce((a, b) => a + b, 0);
    const answeredCount = newTimePerQuestion.filter(t => t !== undefined).length;
    
    const newStats = {
      ...stats,
      totalAnswered: stats.totalAnswered + 1,
      score: isCorrect ? stats.score + 10 : stats.score,
      streak: isCorrect ? stats.streak + 1 : 0,
      correctAnswers: isCorrect ? stats.correctAnswers + 1 : stats.correctAnswers,
      incorrectAnswers: !isCorrect ? stats.incorrectAnswers + 1 : stats.incorrectAnswers,
      averageTime: answeredCount > 0 ? totalTime / answeredCount : 0,
      fastAnswers: timeSpent < 5 ? stats.fastAnswers + 1 : stats.fastAnswers,
    };
    
    set({
      answers: newAnswers,
      stats: newStats,
      timePerQuestion: newTimePerQuestion,
      showFeedback: true,
      feedbackMessage: currentQuestion.explanation,
      isCorrect,
      timerRunning: false,
    });
  },
  
  resetQuiz: () => set({
    currentQuestionIndex: 0,
    answers: Array(get().questions.length).fill(null),
    stats: { ...initialStats },
    timePerQuestion: [],
    showFeedback: false,
    isCorrect: null,
    timerRunning: true,
  }),
  
  restartSameQuiz: () => {
    const currentCategory = get().quizCategory;
    if (currentCategory) {
      // Shuffle questions but keep the same category
      const allQuestions = getAllQuestions().filter(q => q.category === currentCategory);
      const shuffledQuestions = shuffleArray(allQuestions).slice(0, 10);
      
      set({
        questions: shuffledQuestions,
        currentQuestionIndex: 0,
        answers: Array(shuffledQuestions.length).fill(null),
        stats: { ...initialStats },
        timePerQuestion: [],
        showFeedback: false,
        isCorrect: null,
        timerRunning: true,
        currentScreen: 'quiz',
      });
    }
  },
  
  startNewQuiz: () => set({
    currentScreen: 'select',
    showFeedback: false,
  }),
  
  setTimerRunning: (isRunning) => set({ timerRunning: isRunning }),
  
  closeFeedback: () => set({ showFeedback: false }),
}));