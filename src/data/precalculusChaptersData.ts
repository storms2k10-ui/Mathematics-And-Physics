import { Chapter } from '../types';

// Ron Larson chapters (empty for now, chapters will be added later)
export const RON_LARSON_PRECALCULUS_CHAPTERS: Chapter[] = [];

// James Stewart chapters (empty for now, chapters will be added later)
export const JAMES_STEWART_PRECALCULUS_CHAPTERS: Chapter[] = [];

export const PRE_CALCULAS_CHAPTERS: Chapter[] = [
  ...RON_LARSON_PRECALCULUS_CHAPTERS,
  ...JAMES_STEWART_PRECALCULUS_CHAPTERS,
];
