import { ClassInfo } from '../types';
import { ELEMENTARY_CHAPTERS } from './chaptersData';

const getMathChaptersForClass = (lvl: number) => 
  ELEMENTARY_CHAPTERS.filter((c) => c.class === lvl && (!c.track || c.track === 'Elementary Mathematics'));

export const CLASS_INFO_DATA: ClassInfo[] = [
  {
    level: 9,
    title: 'Class 9 Mathematics',
    subtitle: 'Foundation of Algebra, Geometry & Coordinate Systems',
    description: 'Master core concepts in Real & Complex Numbers, Logarithms, Algebraic Factorization, Euclidean & Congruent Geometry, and Coordinate Analysis.',
    totalChapters: getMathChaptersForClass(9).length,
    totalQuestions: getMathChaptersForClass(9).reduce((acc, c) => acc + (c.questionCount || 50), 0),
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800',
    accentColor: 'blue',
    focusAreas: ['Real & Complex Numbers', 'Logarithms', 'Algebraic Formulae & Factorization', 'Linear Equations & Graphs', 'Quadratic Equations', 'Triangles & Congruence', 'Coordinate Geometry'],
  },
  {
    level: 10,
    title: 'Class 10 Mathematics',
    subtitle: 'Secondary Board Examination & Advanced Concepts',
    description: 'Comprehensive study of Sets & Functions, Variations, Matrices, Theory of Quadratic Equations, Partial Fractions, Statistics, Circle Theorems, and Trigonometry.',
    totalChapters: getMathChaptersForClass(10).length,
    totalQuestions: getMathChaptersForClass(10).reduce((acc, c) => acc + (c.questionCount || 50), 0),
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800',
    accentColor: 'emerald',
    focusAreas: [
      '1. Sets and Functions',
      '2. Variations',
      '3. Matrices and Determinants',
      '4. Theory of Quadratic Equations',
      '5. Mixed Chapters MCQS',
      '6. Basic Statistics',
      '7. Introduction to Trigonometry',
      '8. Ratio and Proportion',
      '9. Chords of a Circle',
      '10. Tangents of a Circle',
      '11. Chords and Arcs',
      '12. Angles in a Segment of a Circle',
      '13. Practical Geometry – Circles',
      "14. Pythagoras' Theorem",
      '15. Partial Fractions'
    ],
  },
  {
    level: 11,
    title: 'Class 11 Mathematics',
    subtitle: 'Higher Secondary & Pre-Engineering Bridge',
    description: 'Deep dive into Complex Numbers ($z = a + ib$), Matrices & Determinants, Vectors, Sequences & Series, Trigonometric Functions, and Analytical Geometry.',
    totalChapters: getMathChaptersForClass(11).length,
    totalQuestions: getMathChaptersForClass(11).reduce((acc, c) => acc + (c.questionCount || 50), 0),
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800',
    accentColor: 'indigo',
    focusAreas: [
      '1. Complex Numbers ($z = a + ib$)',
      '2. Matrices and Determinants',
      '3. Vectors',
      '4. Sequences and Series',
      '5. Miscellaneous Series',
      '6. Permutation and Combination and Probability',
      '7. Mathematical Induction and Binomial Theorem',
      '8. Functions and Graphs',
      '9. Linear Programming',
      '10. Trigonometric Identities of Sum & Difference',
      '11. Application of Trigonometry',
      '12. Graphs of Trig & Inverse Functions'
    ],
  },
  {
    level: 12,
    title: 'Class 12 Mathematics',
    subtitle: 'Calculus, Analytic Geometry, Conics & Numerical Methods',
    description: 'Master advanced Calculus, Differentiation, Higher Order Derivatives, Vector Functions, Integration, Straight Lines, Circles, Conics, Differential Equations, Partial Differentiation, and Numerical Methods.',
    totalChapters: getMathChaptersForClass(12).length,
    totalQuestions: getMathChaptersForClass(12).reduce((acc, c) => acc + (c.questionCount || 50), 0),
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800',
    accentColor: 'purple',
    focusAreas: [
      '1. Functions and Limits',
      '2. Differentiation',
      '3. Higher Order Derivatives and Applications',
      '4. Differentiation of Vector Functions',
      '5. Integration',
      '6. Plane Analytic Geometry: Straight Line',
      '7. Circle',
      '8. Parabola, Ellipse and Hyperbola',
      '9. Differential Equations',
      '10. Partial Differentiation',
      '11. Introduction to Numerical Methods'
    ],
  },
];

