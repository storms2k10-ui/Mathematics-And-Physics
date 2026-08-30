import { Question } from '../types';
import { C11_CH10_ADVANCED_PART1 } from './c11_ch10_advanced_part1';
import { C11_CH10_ADVANCED_PART2 } from './c11_ch10_advanced_part2';
import { C11_CH10_ADVANCED_PART3 } from './c11_ch10_advanced_part3';
import { C11_CH10_ADVANCED_PART4 } from './c11_ch10_advanced_part4';

export const C11_CH10_ADVANCED_QUESTIONS: Question[] = [
  ...C11_CH10_ADVANCED_PART1,
  ...C11_CH10_ADVANCED_PART2,
  ...C11_CH10_ADVANCED_PART3,
  ...C11_CH10_ADVANCED_PART4,
];

export const C11_CH10_NORMAL_QUESTIONS: Question[] = [
  // =========================================================================
  // CLASS 11 — CHAPTER 10: TRIGONOMETRIC IDENTITIES (50 MCQs)
  // =========================================================================

  // PART A — FUNDAMENTAL IDENTITIES & SUM/DIFFERENCE LAWS (Q1 - Q14)
  {
    id: 'c11-ch10-q1',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'The Fundamental Law of Trigonometry states that $\\cos(\\alpha - \\beta)$ is identically equal to:',
    options: {
      A: '$\\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$',
      B: '$\\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$',
      C: '$\\sin\\alpha\\cos\\beta - \\cos\\alpha\\sin\\beta$',
      D: '$\\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$'
    },
    correct_answer: 'A',
    explanation: 'The fundamental subtraction law for cosine is $\\cos(\\alpha - \\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$.',
    difficulty: 'Easy',
    formula: '\\cos(\\alpha - \\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta',
  },
  {
    id: 'c11-ch10-q2',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'The expansion of $\\cos(\\alpha + \\beta)$ is:',
    options: {
      A: '$\\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$',
      B: '$\\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$',
      C: '$\\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$',
      D: '$\\sin\\alpha\\sin\\beta - \\cos\\alpha\\cos\\beta$'
    },
    correct_answer: 'A',
    explanation: '$\\cos(\\alpha + \\beta) = \\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$.',
    difficulty: 'Easy',
    formula: '\\cos(\\alpha + \\beta) = \\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta',
  },
  {
    id: 'c11-ch10-q3',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'The expansion of $\\sin(\\alpha + \\beta)$ is:',
    options: {
      A: '$\\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$',
      B: '$\\sin\\alpha\\cos\\beta - \\cos\\alpha\\sin\\beta$',
      C: '$\\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$',
      D: '$\\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$'
    },
    correct_answer: 'A',
    explanation: '$\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$.',
    difficulty: 'Easy',
    formula: '\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta',
  },
  {
    id: 'c11-ch10-q4',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'The expansion of $\\sin(\\alpha - \\beta)$ is:',
    options: {
      A: '$\\sin\\alpha\\cos\\beta - \\cos\\alpha\\sin\\beta$',
      B: '$\\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$',
      C: '$\\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$',
      D: '$\\cos\\alpha\\sin\\beta - \\sin\\alpha\\cos\\beta$'
    },
    correct_answer: 'A',
    explanation: '$\\sin(\\alpha - \\beta) = \\sin\\alpha\\cos\\beta - \\cos\\alpha\\sin\\beta$.',
    difficulty: 'Easy',
    formula: '\\sin(\\alpha - \\beta) = \\sin\\alpha\\cos\\beta - \\cos\\alpha\\sin\\beta',
  },
  {
    id: 'c11-ch10-q5',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'The expansion of $\\tan(\\alpha + \\beta)$ is:',
    options: {
      A: '$\\frac{\\tan\\alpha + \\tan\\beta}{1 - \\tan\\alpha\\tan\\beta}$',
      B: '$\\frac{\\tan\\alpha - \\tan\\beta}{1 + \\tan\\alpha\\tan\\beta}$',
      C: '$\\frac{\\tan\\alpha + \\tan\\beta}{1 + \\tan\\alpha\\tan\\beta}$',
      D: '$\\frac{1 - \\tan\\alpha\\tan\\beta}{\\tan\\alpha + \\tan\\beta}$'
    },
    correct_answer: 'A',
    explanation: '$\\tan(\\alpha + \\beta) = \\frac{\\tan\\alpha + \\tan\\beta}{1 - \\tan\\alpha\\tan\\beta}$.',
    difficulty: 'Easy',
    formula: '\\tan(\\alpha + \\beta) = \\frac{\\tan\\alpha + \\tan\\beta}{1 - \\tan\\alpha\\tan\\beta}',
  },
  {
    id: 'c11-ch10-q6',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'Find the exact value of $\\sin 15^\\circ$ (or $\\sin\\frac{\\pi}{12}$):',
    options: {
      A: '$\\frac{\\sqrt{6} - \\sqrt{2}}{4}$',
      B: '$\\frac{\\sqrt{6} + \\sqrt{2}}{4}$',
      C: '$\\frac{\\sqrt{3} - 1}{2}$',
      D: '$\\frac{\\sqrt{2} - 1}{2}$'
    },
    correct_answer: 'A',
    explanation: '$\\sin(45^\\circ - 30^\\circ) = \\sin 45^\\circ\\cos 30^\\circ - \\cos 45^\\circ\\sin 30^\\circ = \\frac{1}{\\sqrt{2}}\\frac{\\sqrt{3}}{2} - \\frac{1}{\\sqrt{2}}\\frac{1}{2} = \\frac{\\sqrt{6} - \\sqrt{2}}{4}$.',
    difficulty: 'Medium',
    formula: '\\sin 15^\\circ = \\frac{\\sqrt{6} - \\sqrt{2}}{4}',
  },
  {
    id: 'c11-ch10-q7',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'Find the exact value of $\\cos 15^\\circ$ (or $\\cos 75^\\circ = \\sin 15^\\circ$):',
    options: {
      A: '$\\frac{\\sqrt{6} + \\sqrt{2}}{4}$',
      B: '$\\frac{\\sqrt{6} - \\sqrt{2}}{4}$',
      C: '$\\frac{\\sqrt{3} + 1}{2\\sqrt{2}}$',
      D: '$\\frac{\\sqrt{3} - 1}{4}$'
    },
    correct_answer: 'A',
    explanation: '$\\cos(45^\\circ - 30^\\circ) = \\cos 45^\\circ\\cos 30^\\circ + \\sin 45^\\circ\\sin 30^\\circ = \\frac{\\sqrt{3}}{2\\sqrt{2}} + \\frac{1}{2\\sqrt{2}} = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$.',
    difficulty: 'Medium',
    formula: '\\cos 15^\\circ = \\frac{\\sqrt{6} + \\sqrt{2}}{4}',
  },
  {
    id: 'c11-ch10-q8',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'Find the exact value of $\\tan 15^\\circ$ (or $\\tan\\frac{\\pi}{12}$):',
    options: {
      A: '$2 - \\sqrt{3}$',
      B: '$2 + \\sqrt{3}$',
      C: '$\\sqrt{3} - 1$',
      D: '$\\sqrt{3} - \\sqrt{2}$'
    },
    correct_answer: 'A',
    explanation: '$\\tan(45^\\circ - 30^\\circ) = \\frac{1 - 1/\\sqrt{3}}{1 + 1/\\sqrt{3}} = \\frac{\\sqrt{3}-1}{\\sqrt{3}+1} = \\frac{(\\sqrt{3}-1)^2}{3-1} = \\frac{4-2\\sqrt{3}}{2} = 2 - \\sqrt{3}$.',
    difficulty: 'Medium',
    formula: '\\tan 15^\\circ = 2 - \\sqrt{3}',
  },
  {
    id: 'c11-ch10-q9',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'Find the value of $\\tan 75^\\circ$:',
    options: {
      A: '$2 + \\sqrt{3}$',
      B: '$2 - \\sqrt{3}$',
      C: '$\\sqrt{3} + 1$',
      D: '$1 + \\sqrt{3}$'
    },
    correct_answer: 'A',
    explanation: '$\\tan(45^\\circ + 30^\\circ) = \\frac{1 + 1/\\sqrt{3}}{1 - 1/\\sqrt{3}} = \\frac{\\sqrt{3}+1}{\\sqrt{3}-1} = 2 + \\sqrt{3}$.',
    difficulty: 'Easy',
    formula: '\\tan 75^\\circ = 2 + \\sqrt{3}',
  },
  {
    id: 'c11-ch10-q10',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'What is the value of $\\sin(\\pi - \\theta)$?',
    options: {
      A: '$\\sin\\theta$',
      B: '$-\\sin\\theta$',
      C: '$\\cos\\theta$',
      D: '$-\\cos\\theta$'
    },
    correct_answer: 'A',
    explanation: 'In the 2nd quadrant, sine is positive: $\\sin(\\pi - \\theta) = \\sin\\pi\\cos\\theta - \\cos\\pi\\sin\\theta = 0 - (-1)\\sin\\theta = \\sin\\theta$.',
    difficulty: 'Easy',
    formula: '\\sin(\\pi - \\theta) = \\sin\\theta',
  },
  {
    id: 'c11-ch10-q11',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'What is the value of $\\cos(\\pi - \\theta)$?',
    options: {
      A: '$-\\cos\\theta$',
      B: '$\\cos\\theta$',
      C: '$-\\sin\\theta$',
      D: '$\\sin\\theta$'
    },
    correct_answer: 'A',
    explanation: '$\\cos(\\pi - \\theta) = \\cos\\pi\\cos\\theta + \\sin\\pi\\sin\\theta = (-1)\\cos\\theta + 0 = -\\cos\\theta$.',
    difficulty: 'Easy',
    formula: '\\cos(\\pi - \\theta) = -\\cos\\theta',
  },
  {
    id: 'c11-ch10-q12',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'What is the value of $\\sin\\left(\\frac{\\pi}{2} - \\theta\\right)$?',
    options: {
      A: '$\\cos\\theta$',
      B: '$-\\cos\\theta$',
      C: '$\\sin\\theta$',
      D: '$-\\sin\\theta$'
    },
    correct_answer: 'A',
    explanation: 'Co-function identity: $\\sin(\\pi/2 - \\theta) = \\cos\\theta$.',
    difficulty: 'Easy',
    formula: '\\sin(\\pi/2 - \\theta) = \\cos\\theta',
  },
  {
    id: 'c11-ch10-q13',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'What is the value of $\\cos\\left(\\frac{\\pi}{2} - \\theta\\right)$?',
    options: {
      A: '$\\sin\\theta$',
      B: '$-\\sin\\theta$',
      C: '$\\cos\\theta$',
      D: '$-\\cos\\theta$'
    },
    correct_answer: 'A',
    explanation: 'Co-function identity: $\\cos(\\pi/2 - \\theta) = \\sin\\theta$.',
    difficulty: 'Easy',
    formula: '\\cos(\\pi/2 - \\theta) = \\sin\\theta',
  },
  {
    id: 'c11-ch10-q14',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'What is the value of $\\tan(\\pi - \\theta)$?',
    options: {
      A: '$-\\tan\\theta$',
      B: '$\\tan\\theta$',
      C: '$\\cot\\theta$',
      D: '$-\\cot\\theta$'
    },
    correct_answer: 'A',
    explanation: 'In the 2nd quadrant, tangent is negative: $\\tan(\\pi - \\theta) = -\\tan\\theta$.',
    difficulty: 'Easy',
    formula: '\\tan(\\pi - \\theta) = -\\tan\\theta',
  },

  // PART B — DOUBLE, HALF & TRIPLE ANGLE FORMULAS (Q15 - Q28)
  {
    id: 'c11-ch10-q15',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'The double angle identity for $\\sin 2\\theta$ is:',
    options: {
      A: '$2\\sin\\theta\\cos\\theta$',
      B: '$\\cos^2\\theta - \\sin^2\\theta$',
      C: '$2\\cos^2\\theta - 1$',
      D: '$\\frac{2\\tan\\theta}{1 + \\tan^2\\theta}$'
    },
    correct_answer: 'A',
    explanation: '$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = \\frac{2\\tan\\theta}{1 + \\tan^2\\theta}$.',
    difficulty: 'Easy',
    formula: '\\sin 2\\theta = 2\\sin\\theta\\cos\\theta',
  },
  {
    id: 'c11-ch10-q16',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'Which of the following is equivalent to $\\cos 2\\theta$?',
    options: {
      A: '$\\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta$',
      B: '$2\\sin\\theta\\cos\\theta$',
      C: '$\\cos^2\\theta + \\sin^2\\theta$',
      D: '$1 + 2\\cos^2\\theta$'
    },
    correct_answer: 'A',
    explanation: '$\\cos 2\\theta$ has three standard forms: $\\cos^2\\theta - \\sin^2\\theta$, $2\\cos^2\\theta - 1$, and $1 - 2\\sin^2\\theta$.',
    difficulty: 'Easy',
    formula: '\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta',
  },
  {
    id: 'c11-ch10-q17',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'The double angle identity for $\\tan 2\\theta$ is:',
    options: {
      A: '$\\frac{2\\tan\\theta}{1 - \\tan^2\\theta}$',
      B: '$\\frac{2\\tan\\theta}{1 + \\tan^2\\theta}$',
      C: '$\\frac{1 - \\tan^2\\theta}{1 + \\tan^2\\theta}$',
      D: '$\\frac{\\tan\\theta}{1 - \\tan^2\\theta}$'
    },
    correct_answer: 'A',
    explanation: '$\\tan 2\\theta = \\frac{2\\tan\\theta}{1 - \\tan^2\\theta}$.',
    difficulty: 'Easy',
    formula: '\\tan 2\\theta = \\frac{2\\tan\\theta}{1 - \\tan^2\\theta}',
  },
  {
    id: 'c11-ch10-q18',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'The half-angle identity for $\\sin\\frac{\\theta}{2}$ is:',
    options: {
      A: '$\\pm\\sqrt{\\frac{1 - \\cos\\theta}{2}}$',
      B: '$\\pm\\sqrt{\\frac{1 + \\cos\\theta}{2}}$',
      C: '$\\pm\\sqrt{\\frac{1 - \\sin\\theta}{2}}$',
      D: '$\\frac{1 - \\cos\\theta}{2}$'
    },
    correct_answer: 'A',
    explanation: 'From $\\cos\\theta = 1 - 2\\sin^2(\\theta/2) \\implies \\sin(\\theta/2) = \\pm\\sqrt{\\frac{1 - \\cos\\theta}{2}}$.',
    difficulty: 'Medium',
    formula: '\\sin(\\theta/2) = \\pm\\sqrt{\\frac{1 - \\cos\\theta}{2}}',
  },
  {
    id: 'c11-ch10-q19',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'The half-angle identity for $\\cos\\frac{\\theta}{2}$ is:',
    options: {
      A: '$\\pm\\sqrt{\\frac{1 + \\cos\\theta}{2}}$',
      B: '$\\pm\\sqrt{\\frac{1 - \\cos\\theta}{2}}$',
      C: '$\\frac{1 + \\cos\\theta}{2}$',
      D: '$\\pm\\sqrt{\\frac{1 + \\sin\\theta}{2}}$'
    },
    correct_answer: 'A',
    explanation: 'From $\\cos\\theta = 2\\cos^2(\\theta/2) - 1 \\implies \\cos(\\theta/2) = \\pm\\sqrt{\\frac{1 + \\cos\\theta}{2}}$.',
    difficulty: 'Medium',
    formula: '\\cos(\\theta/2) = \\pm\\sqrt{\\frac{1 + \\cos\\theta}{2}}',
  },
  {
    id: 'c11-ch10-q20',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'The triple angle identity for $\\sin 3\\theta$ is:',
    options: {
      A: '$3\\sin\\theta - 4\\sin^3\\theta$',
      B: '$4\\cos^3\\theta - 3\\cos\\theta$',
      C: '$3\\sin\\theta + 4\\sin^3\\theta$',
      D: '$4\\sin^3\\theta - 3\\sin\\theta$'
    },
    correct_answer: 'A',
    explanation: '$\\sin 3\\theta = 3\\sin\\theta - 4\\sin^3\\theta$.',
    difficulty: 'Medium',
    formula: '\\sin 3\\theta = 3\\sin\\theta - 4\\sin^3\\theta',
  },
  {
    id: 'c11-ch10-q21',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'The triple angle identity for $\\cos 3\\theta$ is:',
    options: {
      A: '$4\\cos^3\\theta - 3\\cos\\theta$',
      B: '$3\\cos\\theta - 4\\cos^3\\theta$',
      C: '$4\\cos^3\\theta + 3\\cos\\theta$',
      D: '$3\\sin\\theta - 4\\sin^3\\theta$'
    },
    correct_answer: 'A',
    explanation: '$\\cos 3\\theta = 4\\cos^3\\theta - 3\\cos\\theta$.',
    difficulty: 'Medium',
    formula: '\\cos 3\\theta = 4\\cos^3\\theta - 3\\cos\\theta',
  },
  {
    id: 'c11-ch10-q22',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'The triple angle identity for $\\tan 3\\theta$ is:',
    options: {
      A: '$\\frac{3\\tan\\theta - \\tan^3\\theta}{1 - 3\\tan^2\\theta}$',
      B: '$\\frac{3\\tan\\theta + \\tan^3\\theta}{1 - 3\\tan^2\\theta}$',
      C: '$\\frac{3\\tan\\theta - \\tan^3\\theta}{1 + 3\\tan^2\\theta}$',
      D: '$\\frac{\\tan^3\\theta - 3\\tan\\theta}{1 - 3\\tan^2\\theta}$'
    },
    correct_answer: 'A',
    explanation: '$\\tan 3\\theta = \\frac{3\\tan\\theta - \\tan^3\\theta}{1 - 3\\tan^2\\theta}$.',
    difficulty: 'Medium',
    formula: '\\tan 3\\theta = \\frac{3\\tan\\theta - \\tan^3\\theta}{1 - 3\\tan^2\\theta}',
  },
  {
    id: 'c11-ch10-q23',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'What is the exact value of $\\sin\\left(22\\frac{1}{2}^\\circ\\right)$ (or $\\sin 22.5^\\circ$)?',
    options: {
      A: '$\\frac{\\sqrt{2 - \\sqrt{2}}}{2}$',
      B: '$\\frac{\\sqrt{2 + \\sqrt{2}}}{2}$',
      C: '$\\frac{\\sqrt{2} - 1}{2}$',
      D: '$\\frac{1}{2\\sqrt{2}}$'
    },
    correct_answer: 'A',
    explanation: '$\\sin(45^\\circ/2) = \\sqrt{\\frac{1 - \\cos 45^\\circ}{2}} = \\sqrt{\\frac{1 - 1/\\sqrt{2}}{2}} = \\sqrt{\\frac{\\sqrt{2}-1}{2\\sqrt{2}}} = \\frac{\\sqrt{2 - \\sqrt{2}}}{2}$.',
    difficulty: 'Hard',
    formula: '\\sin 22.5^\\circ = \\frac{\\sqrt{2 - \\sqrt{2}}}{2}',
  },
  {
    id: 'c11-ch10-q24',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'What is the exact value of $\\cos\\left(22.5^\\circ\\right)$?',
    options: {
      A: '$\\frac{\\sqrt{2 + \\sqrt{2}}}{2}$',
      B: '$\\frac{\\sqrt{2 - \\sqrt{2}}}{2}$',
      C: '$\\frac{\\sqrt{2} + 1}{2}$',
      D: '$\\frac{\\sqrt{3} + 1}{2\\sqrt{2}}$'
    },
    correct_answer: 'A',
    explanation: '$\\cos(45^\\circ/2) = \\sqrt{\\frac{1 + \\cos 45^\\circ}{2}} = \\frac{\\sqrt{2 + \\sqrt{2}}}{2}$.',
    difficulty: 'Hard',
    formula: '\\cos 22.5^\\circ = \\frac{\\sqrt{2 + \\sqrt{2}}}{2}',
  },
  {
    id: 'c11-ch10-q25',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'Express $2\\sin\\alpha\\cos\\beta$ as a sum/difference of trigonometric functions:',
    options: {
      A: '$\\sin(\\alpha + \\beta) + \\sin(\\alpha - \\beta)$',
      B: '$\\sin(\\alpha + \\beta) - \\sin(\\alpha - \\beta)$',
      C: '$\\cos(\\alpha + \\beta) + \\cos(\\alpha - \\beta)$',
      D: '$\\cos(\\alpha - \\beta) - \\cos(\\alpha + \\beta)$'
    },
    correct_answer: 'A',
    explanation: '$2\\sin\\alpha\\cos\\beta = \\sin(\\alpha + \\beta) + \\sin(\\alpha - \\beta)$.',
    difficulty: 'Easy',
    formula: '2\\sin\\alpha\\cos\\beta = \\sin(\\alpha + \\beta) + \\sin(\\alpha - \\beta)',
  },
  {
    id: 'c11-ch10-q26',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'Express $2\\cos\\alpha\\cos\\beta$ as a sum/difference:',
    options: {
      A: '$\\cos(\\alpha + \\beta) + \\cos(\\alpha - \\beta)$',
      B: '$\\cos(\\alpha + \\beta) - \\cos(\\alpha - \\beta)$',
      C: '$\\sin(\\alpha + \\beta) + \\sin(\\alpha - \\beta)$',
      D: '$\\cos(\\alpha - \\beta) - \\cos(\\alpha + \\beta)$'
    },
    correct_answer: 'A',
    explanation: '$2\\cos\\alpha\\cos\\beta = \\cos(\\alpha + \\beta) + \\cos(\\alpha - \\beta)$.',
    difficulty: 'Easy',
    formula: '2\\cos\\alpha\\cos\\beta = \\cos(\\alpha + \\beta) + \\cos(\\alpha - \\beta)',
  },
  {
    id: 'c11-ch10-q27',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'Express $2\\sin\\alpha\\sin\\beta$ as a difference of cosines:',
    options: {
      A: '$\\cos(\\alpha - \\beta) - \\cos(\\alpha + \\beta)$',
      B: '$\\cos(\\alpha + \\beta) - \\cos(\\alpha - \\beta)$',
      C: '$\\sin(\\alpha + \\beta) - \\sin(\\alpha - \\beta)$',
      D: '$\\cos(\\alpha - \\beta) + \\cos(\\alpha + \\beta)$'
    },
    correct_answer: 'A',
    explanation: '$2\\sin\\alpha\\sin\\beta = \\cos(\\alpha - \\beta) - \\cos(\\alpha + \\beta)$.',
    difficulty: 'Easy',
    formula: '2\\sin\\alpha\\sin\\beta = \\cos(\\alpha - \\beta) - \\cos(\\alpha + \\beta)',
  },
  {
    id: 'c11-ch10-q28',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'Express $\\sin C + \\sin D$ as a product of trigonometric functions:',
    options: {
      A: '$2\\sin\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right)$',
      B: '$2\\cos\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)$',
      C: '$2\\cos\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right)$',
      D: '$-2\\sin\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)$'
    },
    correct_answer: 'A',
    explanation: 'Sum-to-product formula: $\\sin C + \\sin D = 2\\sin\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right)$.',
    difficulty: 'Medium',
    formula: '\\sin C + \\sin D = 2\\sin\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right)',
  },

  // PART C — SUM-TO-PRODUCT & STANDARD IDENTITIES (Q29 - Q38)
  {
    id: 'c11-ch10-q29',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'Express $\\sin C - \\sin D$ as a product:',
    options: {
      A: '$2\\cos\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)$',
      B: '$2\\sin\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right)$',
      C: '$2\\cos\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right)$',
      D: '$-2\\sin\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)$'
    },
    correct_answer: 'A',
    explanation: '$\\sin C - \\sin D = 2\\cos\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)$.',
    difficulty: 'Medium',
    formula: '\\sin C - \\sin D = 2\\cos\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)',
  },
  {
    id: 'c11-ch10-q30',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'Express $\\cos C + \\cos D$ as a product:',
    options: {
      A: '$2\\cos\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right)$',
      B: '$-2\\sin\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)$',
      C: '$2\\sin\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right)$',
      D: '$2\\cos\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)$'
    },
    correct_answer: 'A',
    explanation: '$\\cos C + \\cos D = 2\\cos\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right)$.',
    difficulty: 'Medium',
    formula: '\\cos C + \\cos D = 2\\cos\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right)',
  },
  {
    id: 'c11-ch10-q31',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'Express $\\cos C - \\cos D$ as a product:',
    options: {
      A: '$-2\\sin\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)$',
      B: '$2\\sin\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)$',
      C: '$2\\cos\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right)$',
      D: '$2\\cos\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)$'
    },
    correct_answer: 'A',
    explanation: '$\\cos C - \\cos D = -2\\sin\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right) = 2\\sin\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{D-C}{2}\\right)$.',
    difficulty: 'Medium',
    formula: '\\cos C - \\cos D = -2\\sin\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)',
  },
  {
    id: 'c11-ch10-q32',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'Simplify $\\frac{\\sin 2\\theta}{1 + \\cos 2\\theta}$:',
    options: {
      A: '$\\tan\\theta$',
      B: '$\\cot\\theta$',
      C: '$\\sin\\theta$',
      D: '$\\cos\\theta$'
    },
    correct_answer: 'A',
    explanation: '$\\frac{2\\sin\\theta\\cos\\theta}{1 + (2\\cos^2\\theta - 1)} = \\frac{2\\sin\\theta\\cos\\theta}{2\\cos^2\\theta} = \\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta$.',
    difficulty: 'Easy',
    formula: '\\frac{\\sin 2\\theta}{1+\\cos 2\\theta} = \\tan\\theta',
  },
  {
    id: 'c11-ch10-q33',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'Simplify $\\frac{1 - \\cos 2\\theta}{\\sin 2\\theta}$:',
    options: {
      A: '$\\tan\\theta$',
      B: '$\\cot\\theta$',
      C: '$\\sec\\theta$',
      D: '$\\csc\\theta$'
    },
    correct_answer: 'A',
    explanation: '$\\frac{2\\sin^2\\theta}{2\\sin\\theta\\cos\\theta} = \\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta$.',
    difficulty: 'Easy',
    formula: '\\frac{1-\\cos 2\\theta}{\\sin 2\\theta} = \\tan\\theta',
  },
  {
    id: 'c11-ch10-q34',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'Simplify $\\frac{1 - \\cos 2\\theta}{1 + \\cos 2\\theta}$:',
    options: {
      A: '$\\tan^2\\theta$',
      B: '$\\cot^2\\theta$',
      C: '$\\sin^2\\theta$',
      D: '$\\cos^2\\theta$'
    },
    correct_answer: 'A',
    explanation: '$\\frac{2\\sin^2\\theta}{2\\cos^2\\theta} = \\tan^2\\theta$.',
    difficulty: 'Easy',
    formula: '\\frac{1-\\cos 2\\theta}{1+\\cos 2\\theta} = \\tan^2\\theta',
  },
  {
    id: 'c11-ch10-q35',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'What is the numerical value of $\\cos 20^\\circ \\cos 40^\\circ \\cos 80^\\circ$?',
    options: {
      A: '$\\frac{1}{8}$',
      B: '$\\frac{1}{16}$',
      C: '$\\frac{1}{4}$',
      D: '$\\frac{3}{8}$'
    },
    correct_answer: 'A',
    explanation: 'Identity: $\\cos\\theta\\cos(60^\\circ-\\theta)\\cos(60^\\circ+\\theta) = \\frac{1}{4}\\cos 3\\theta$. For $\\theta = 20^\\circ$: $\\frac{1}{4}\\cos 60^\\circ = \\frac{1}{4}\\left(\\frac{1}{2}\\right) = \\frac{1}{8}$.',
    difficulty: 'Hard',
    formula: '\\cos 20^\\circ \\cos 40^\\circ \\cos 80^\\circ = \\frac{1}{8}',
  },
  {
    id: 'c11-ch10-q36',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'What is the numerical value of $\\sin 20^\\circ \\sin 40^\\circ \\sin 80^\\circ$?',
    options: {
      A: '$\\frac{\\sqrt{3}}{8}$',
      B: '$\\frac{1}{8}$',
      C: '$\\frac{\\sqrt{3}}{4}$',
      D: '$\\frac{3}{8}$'
    },
    correct_answer: 'A',
    explanation: 'Identity: $\\sin\\theta\\sin(60^\\circ-\\theta)\\sin(60^\\circ+\\theta) = \\frac{1}{4}\\sin 3\\theta$. For $\\theta = 20^\\circ$: $\\frac{1}{4}\\sin 60^\\circ = \\frac{1}{4}\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{\\sqrt{3}}{8}$.',
    difficulty: 'Hard',
    formula: '\\sin 20^\\circ \\sin 40^\\circ \\sin 80^\\circ = \\frac{\\sqrt{3}}{8}',
  },
  {
    id: 'c11-ch10-q37',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'What is the numerical value of $\\tan 20^\\circ \\tan 40^\\circ \\tan 80^\\circ$?',
    options: {
      A: '$\\sqrt{3}$',
      B: '$\\frac{1}{\\sqrt{3}}$',
      C: '$1$',
      D: '$3$'
    },
    correct_answer: 'A',
    explanation: '$\\tan 20^\\circ \\tan 40^\\circ \\tan 80^\\circ = \\tan 3(20^\\circ) = \\tan 60^\\circ = \\sqrt{3}$.',
    difficulty: 'Medium',
    formula: '\\tan\\theta\\tan(60^\\circ-\\theta)\\tan(60^\\circ+\\theta) = \\tan 3\\theta',
  },
  {
    id: 'c11-ch10-q38',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'In any $\\triangle ABC$, if $\\alpha + \\beta + \\gamma = \\pi$, then $\\tan\\alpha + \\tan\\beta + \\tan\\gamma$ equals:',
    options: {
      A: '$\\tan\\alpha\\tan\\beta\\tan\\gamma$',
      B: '$1$',
      C: '$0$',
      D: '$\\cot\\alpha\\cot\\beta\\cot\\gamma$'
    },
    correct_answer: 'A',
    explanation: 'When $\\alpha+\\beta+\\gamma=\\pi$, $\\tan(\\alpha+\\beta) = \\tan(\\pi-\\gamma) = -\\tan\\gamma \\implies \\frac{\\tan\\alpha+\\tan\\beta}{1-\\tan\\alpha\\tan\\beta} = -\\tan\\gamma \\implies \\tan\\alpha+\\tan\\beta+\\tan\\gamma = \\tan\\alpha\\tan\\beta\\tan\\gamma$.',
    difficulty: 'Hard',
    formula: '\\sum \\tan\\alpha = \\prod \\tan\\alpha',
  },

  // PART D — ADVANCED IDENTITIES & CONDITIONAL TRIGONOMETRY (Q39 - Q50)
  {
    id: 'c11-ch10-q39',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'In any $\\triangle ABC$ where $\\alpha + \\beta + \\gamma = \\pi$, the sum $\\sin 2\\alpha + \\sin 2\\beta + \\sin 2\\gamma$ equals:',
    options: {
      A: '$4\\sin\\alpha\\sin\\beta\\sin\\gamma$',
      B: '$4\\cos\\alpha\\cos\\beta\\cos\\gamma$',
      C: '$2\\sin\\alpha\\sin\\beta\\sin\\gamma$',
      D: '$1 + 4\\sin\\alpha\\sin\\beta\\sin\\gamma$'
    },
    correct_answer: 'A',
    explanation: 'By standard conditional trigonometric identity, $\\sum \\sin 2\\alpha = 4\\sin\\alpha\\sin\\beta\\sin\\gamma$.',
    difficulty: 'Hard',
    formula: '\\sin 2\\alpha + \\sin 2\\beta + \\sin 2\\gamma = 4\\sin\\alpha\\sin\\beta\\sin\\gamma',
  },
  {
    id: 'c11-ch10-q40',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'In any $\\triangle ABC$, $\\cos 2\\alpha + \\cos 2\\beta + \\cos 2\\gamma$ equals:',
    options: {
      A: '$-1 - 4\\cos\\alpha\\cos\\beta\\cos\\gamma$',
      B: '$1 - 4\\cos\\alpha\\cos\\beta\\cos\\gamma$',
      C: '$-4\\sin\\alpha\\sin\\beta\\sin\\gamma$',
      D: '$4\\cos\\alpha\\cos\\beta\\cos\\gamma$'
    },
    correct_answer: 'A',
    explanation: '$\\sum \\cos 2\\alpha = -1 - 4\\cos\\alpha\\cos\\beta\\cos\\gamma$.',
    difficulty: 'Hard',
    formula: '\\sum \\cos 2\\alpha = -1 - 4\\cos\\alpha\\cos\\beta\\cos\\gamma',
  },
  {
    id: 'c11-ch10-q41',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'In any $\\triangle ABC$, $\\sin\\alpha + \\sin\\beta + \\sin\\gamma$ equals:',
    options: {
      A: '$4\\cos\\left(\\frac{\\alpha}{2}\\right)\\cos\\left(\\frac{\\beta}{2}\\right)\\cos\\left(\\frac{\\gamma}{2}\\right)$',
      B: '$4\\sin\\left(\\frac{\\alpha}{2}\\right)\\sin\\left(\\frac{\\beta}{2}\\right)\\sin\\left(\\frac{\\gamma}{2}\\right)$',
      C: '$1 + 4\\sin\\left(\\frac{\\alpha}{2}\\right)\\sin\\left(\\frac{\\beta}{2}\\right)\\sin\\left(\\frac{\\gamma}{2}\\right)$',
      D: '$2\\cos\\left(\\frac{\\alpha}{2}\\right)\\cos\\left(\\frac{\\beta}{2}\\right)\\cos\\left(\\frac{\\gamma}{2}\\right)$'
    },
    correct_answer: 'A',
    explanation: '$\\sin\\alpha + \\sin\\beta + \\sin\\gamma = 4\\cos(\\alpha/2)\\cos(\\beta/2)\\cos(\\gamma/2)$.',
    difficulty: 'Hard',
    formula: '\\sum \\sin\\alpha = 4\\cos(\\alpha/2)\\cos(\\beta/2)\\cos(\\gamma/2)',
  },
  {
    id: 'c11-ch10-q42',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'In any $\\triangle ABC$, $\\cos\\alpha + \\cos\\beta + \\cos\\gamma$ equals:',
    options: {
      A: '$1 + 4\\sin\\left(\\frac{\\alpha}{2}\\right)\\sin\\left(\\frac{\\beta}{2}\\right)\\sin\\left(\\frac{\\gamma}{2}\\right)$',
      B: '$1 - 4\\sin\\left(\\frac{\\alpha}{2}\\right)\\sin\\left(\\frac{\\beta}{2}\\right)\\sin\\left(\\frac{\\gamma}{2}\\right)$',
      C: '$4\\cos\\left(\\frac{\\alpha}{2}\\right)\\cos\\left(\\frac{\\beta}{2}\\right)\\cos\\left(\\frac{\\gamma}{2}\\right)$',
      D: '$1 + 4\\cos\\left(\\frac{\\alpha}{2}\\right)\\cos\\left(\\frac{\\beta}{2}\\right)\\cos\\left(\\frac{\\gamma}{2}\\right)$'
    },
    correct_answer: 'A',
    explanation: '$\\cos\\alpha + \\cos\\beta + \\cos\\gamma = 1 + 4\\sin(\\alpha/2)\\sin(\\beta/2)\\sin(\\gamma/2)$.',
    difficulty: 'Hard',
    formula: '\\sum \\cos\\alpha = 1 + 4\\sin(\\alpha/2)\\sin(\\beta/2)\\sin(\\gamma/2)',
  },
  {
    id: 'c11-ch10-q43',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'Simplify $\\frac{\\sin 3\\theta}{\\sin\\theta} - \\frac{\\cos 3\\theta}{\\cos\\theta}$:',
    options: {
      A: '$2$',
      B: '$1$',
      C: '$0$',
      D: '$-2$'
    },
    correct_answer: 'A',
    explanation: '$\\frac{\\sin 3\\theta\\cos\\theta - \\cos 3\\theta\\sin\\theta}{\\sin\\theta\\cos\\theta} = \\frac{\\sin(3\\theta - \\theta)}{\\sin\\theta\\cos\\theta} = \\frac{\\sin 2\\theta}{\\frac{1}{2}\\sin 2\\theta} = 2$.',
    difficulty: 'Medium',
    formula: '\\frac{\\sin 2\\theta}{\\frac{1}{2}\\sin 2\\theta} = 2',
  },
  {
    id: 'c11-ch10-q44',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'Find the maximum value of $f(\\theta) = 3\\sin\\theta + 4\\cos\\theta$:',
    options: {
      A: '$5$',
      B: '$7$',
      C: '$1$',
      D: '$25$'
    },
    correct_answer: 'A',
    explanation: 'The maximum of $a\\sin\\theta + b\\cos\\theta$ is $\\sqrt{a^2 + b^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = 5$.',
    difficulty: 'Easy',
    formula: '\\max(a\\sin\\theta + b\\cos\\theta) = \\sqrt{a^2 + b^2} = 5',
  },
  {
    id: 'c11-ch10-q45',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'Find the minimum value of $f(\\theta) = 5\\cos\\theta - 12\\sin\\theta$:',
    options: {
      A: '$-13$',
      B: '$-17$',
      C: '$13$',
      D: '$-7$'
    },
    correct_answer: 'A',
    explanation: 'The minimum is $-\\sqrt{5^2 + (-12)^2} = -\\sqrt{25 + 144} = -\\sqrt{169} = -13$.',
    difficulty: 'Easy',
    formula: '\\min(a\\cos\\theta + b\\sin\\theta) = -\\sqrt{a^2+b^2} = -13',
  },
  {
    id: 'c11-ch10-q46',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'If $\\tan\\theta = \\frac{1}{2}$ and $\\tan\\phi = \\frac{1}{3}$, find $\\tan(\\theta + \\phi)$:',
    options: {
      A: '$1$ (so $\\theta + \\phi = 45^\\circ$ or $\\pi/4$)',
      B: '$\\frac{5}{6}$',
      C: '$\\frac{1}{6}$',
      D: '$0$'
    },
    correct_answer: 'A',
    explanation: '$\\tan(\\theta + \\phi) = \\frac{1/2 + 1/3}{1 - (1/2)(1/3)} = \\frac{5/6}{1 - 1/6} = \\frac{5/6}{5/6} = 1$.',
    difficulty: 'Easy',
    formula: '\\tan(\\theta + \\phi) = 1 \\implies \\theta + \\phi = 45^\\circ',
  },
  {
    id: 'c11-ch10-q47',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'If $\\sin\\alpha = \\frac{3}{5}$ and $\\cos\\beta = \\frac{12}{13}$ (both $\\alpha, \\beta$ in Quadrant I), find $\\sin(\\alpha + \\beta)$:',
    options: {
      A: '$\\frac{56}{65}$',
      B: '$\\frac{33}{65}$',
      C: '$\\frac{16}{65}$',
      D: '$\\frac{63}{65}$'
    },
    correct_answer: 'A',
    explanation: '$\\cos\\alpha = 4/5$, $\\sin\\beta = 5/13$. $\\sin(\\alpha + \\beta) = (3/5)(12/13) + (4/5)(5/13) = \\frac{36 + 20}{65} = \\frac{56}{65}$.',
    difficulty: 'Medium',
    formula: '\\sin(\\alpha + \\beta) = \\frac{56}{65}',
  },
  {
    id: 'c11-ch10-q48',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'If $\\sin\\alpha = \\frac{3}{5}$ and $\\cos\\beta = \\frac{12}{13}$ (Quadrant I), find $\\cos(\\alpha - \\beta)$:',
    options: {
      A: '$\\frac{63}{65}$',
      B: '$\\frac{33}{65}$',
      C: '$\\frac{56}{65}$',
      D: '$\\frac{48}{65}$'
    },
    correct_answer: 'A',
    explanation: '$\\cos(\\alpha - \\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta = (4/5)(12/13) + (3/5)(5/13) = \\frac{48 + 15}{65} = \\frac{63}{65}$.',
    difficulty: 'Medium',
    formula: '\\cos(\\alpha - \\beta) = \\frac{63}{65}',
  },
  {
    id: 'c11-ch10-q49',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'The value of $\\cos 105^\\circ$ is equal to:',
    options: {
      A: '$\\frac{\\sqrt{2} - \\sqrt{6}}{4}$',
      B: '$\\frac{\\sqrt{6} - \\sqrt{2}}{4}$',
      C: '$\\frac{\\sqrt{6} + \\sqrt{2}}{4}$',
      D: '$\\frac{1 - \\sqrt{3}}{2\\sqrt{2}}$'
    },
    correct_answer: 'A',
    explanation: '$\\cos(60^\\circ + 45^\\circ) = \\cos 60^\\circ\\cos 45^\\circ - \\sin 60^\\circ\\sin 45^\\circ = \\frac{1}{2}\\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{3}}{2}\\frac{\\sqrt{2}}{2} = \\frac{\\sqrt{2} - \\sqrt{6}}{4}$.',
    difficulty: 'Medium',
    formula: '\\cos 105^\\circ = \\frac{\\sqrt{2} - \\sqrt{6}}{4}',
  },
  {
    id: 'c11-ch10-q50',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch10',
    question: 'The value of $\\sin 105^\\circ$ is equal to:',
    options: {
      A: '$\\frac{\\sqrt{6} + \\sqrt{2}}{4}$',
      B: '$\\frac{\\sqrt{6} - \\sqrt{2}}{4}$',
      C: '$\\frac{\\sqrt{2} - \\sqrt{6}}{4}$',
      D: '$\\frac{1 + \\sqrt{3}}{2}$'
    },
    correct_answer: 'A',
    explanation: '$\\sin 105^\\circ = \\sin(180^\\circ - 75^\\circ) = \\sin 75^\\circ = \\cos 15^\\circ = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$.',
    difficulty: 'Easy',
    formula: '\\sin 105^\\circ = \\frac{\\sqrt{6} + \\sqrt{2}}{4}',
  },
];

export const C11_CH10_QUESTIONS: Question[] = [
  ...C11_CH10_NORMAL_QUESTIONS,
  ...C11_CH10_ADVANCED_QUESTIONS,
];

