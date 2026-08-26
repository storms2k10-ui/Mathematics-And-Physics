import { Question } from '../types';

export type OptionKey = 'A' | 'B' | 'C' | 'D';

export interface AnswerEvaluationResult {
  isCorrect: boolean;
  selectedOption: OptionKey;
  correctAnswer: OptionKey;
  explanation?: string;
  formula?: string;
}

/**
 * Standardized answer evaluation system for MCQ questions.
 * Validates selected option against the question's correct answer.
 */
export function evaluateAnswer(
  selected: OptionKey | string | null | undefined,
  questionOrCorrectAnswer: Question | OptionKey | string
): AnswerEvaluationResult {
  const normSelected = (selected || '').toString().trim().toUpperCase() as OptionKey;
  
  let normCorrect: OptionKey = 'A';
  let explanation: string | undefined;
  let formula: string | undefined;

  if (typeof questionOrCorrectAnswer === 'object' && questionOrCorrectAnswer !== null) {
    normCorrect = (questionOrCorrectAnswer.correct_answer || 'A').toString().trim().toUpperCase() as OptionKey;
    explanation = questionOrCorrectAnswer.explanation;
    formula = questionOrCorrectAnswer.formula;
  } else {
    normCorrect = (questionOrCorrectAnswer || 'A').toString().trim().toUpperCase() as OptionKey;
  }

  const isCorrect = normSelected === normCorrect && ['A', 'B', 'C', 'D'].includes(normSelected);

  return {
    isCorrect,
    selectedOption: normSelected,
    correctAnswer: normCorrect,
    explanation,
    formula,
  };
}
