import { Chapter, Question } from '../types';
import { ALL_QUESTIONS } from './questionsData';

/**
 * Question Bank Accessor
 * Retrieves any questions defined for the given chapter.
 */
export function buildChapterQuestions(chapter: Chapter): Question[] {
  return ALL_QUESTIONS.filter((q) => q.chapter_id === chapter.id);
}
