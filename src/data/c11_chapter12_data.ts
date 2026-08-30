import { Question } from '../types';
import { C11_CH12_ADVANCED_PART1 } from './c11_ch12_advanced_part1';
import { C11_CH12_ADVANCED_PART2 } from './c11_ch12_advanced_part2';
import { C11_CH12_ADVANCED_PART3 } from './c11_ch12_advanced_part3';
import { C11_CH12_ADVANCED_PART4 } from './c11_ch12_advanced_part4';

export const C11_CH12_ADVANCED_QUESTIONS: Question[] = [
  ...C11_CH12_ADVANCED_PART1,
  ...C11_CH12_ADVANCED_PART2,
  ...C11_CH12_ADVANCED_PART3,
  ...C11_CH12_ADVANCED_PART4,
];

export const C11_CH12_NORMAL_QUESTIONS: Question[] = [
  // =========================================================================
  // CLASS 11 — CHAPTER 12: TRIGONOMETRIC GRAPHS, INVERSE FUNCTIONS & EQUATIONS (50 MCQs)
  // =========================================================================

  // PART A — PERIODICITY & TRIGONOMETRIC FUNCTION GRAPHS (Q1 - Q14)
  {
    id: 'c11-ch12-q1',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'A function $f(x)$ is said to be periodic with fundamental period $P > 0$ if for all $x$ in the domain:',
    options: {
      A: '$f(x + P) = f(x)$',
      B: '$f(x + P) = -f(x)$',
      C: '$f(x + P) = 0$',
      D: '$f(x) + f(P) = 1$'
    },
    correct_answer: 'A',
    explanation: 'A periodic function repeats its outputs at regular intervals of length $P$, defined by the relation $f(x + P) = f(x)$ where $P$ is the smallest positive real number.',
    difficulty: 'Easy',
    formula: 'f(x + P) = f(x)',
  },
  {
    id: 'c11-ch12-q2',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'The fundamental period of the sine function $f(x) = \\sin x$ is:',
    options: {
      A: '$2\\pi$',
      B: '$\\pi$',
      C: '$\\frac{\\pi}{2}$',
      D: '$4\\pi$'
    },
    correct_answer: 'A',
    explanation: '$\\sin(x + 2\\pi) = \\sin x$, so the fundamental period is $2\\pi$ radians ($360^\\circ$).',
    difficulty: 'Easy',
    formula: 'T(\\sin x) = 2\\pi',
  },
  {
    id: 'c11-ch12-q3',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'The fundamental period of $f(x) = \\cos x$ is:',
    options: {
      A: '$2\\pi$',
      B: '$\\pi$',
      C: '$\\frac{\\pi}{2}$',
      D: '$4\\pi$'
    },
    correct_answer: 'A',
    explanation: '$\\cos(x + 2\\pi) = \\cos x$, making the fundamental period $2\\pi$.',
    difficulty: 'Easy',
    formula: 'T(\\cos x) = 2\\pi',
  },
  {
    id: 'c11-ch12-q4',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'The fundamental period of the tangent function $f(x) = \\tan x$ is:',
    options: {
      A: '$\\pi$',
      B: '$2\\pi$',
      C: '$\\frac{\\pi}{2}$',
      D: '$3\\pi$'
    },
    correct_answer: 'A',
    explanation: '$\\tan(x + \\pi) = \\tan x$, so the fundamental period of $\\tan x$ (and $\\cot x$) is $\\pi$ radians ($180^\\circ$).',
    difficulty: 'Easy',
    formula: 'T(\\tan x) = \\pi',
  },
  {
    id: 'c11-ch12-q5',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'What is the period of $f(x) = \\sin(3x)$?',
    options: {
      A: '$\\frac{2\\pi}{3}$',
      B: '$6\\pi$',
      C: '$\\frac{\\pi}{3}$',
      D: '$2\\pi$'
    },
    correct_answer: 'A',
    explanation: 'For $f(x) = \\sin(kx)$, the period is $T = \\frac{2\\pi}{|k|} = \\frac{2\\pi}{3}$.',
    difficulty: 'Easy',
    formula: 'T = \\frac{2\\pi}{k} = \\frac{2\\pi}{3}',
  },
  {
    id: 'c11-ch12-q6',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'What is the period of $f(x) = \\tan\\left(\\frac{x}{2}\\right)$?',
    options: {
      A: '$2\\pi$',
      B: '$\\pi$',
      C: '$\\frac{\\pi}{2}$',
      D: '$4\\pi$'
    },
    correct_answer: 'A',
    explanation: 'Period of $\\tan(kx)$ is $\\frac{\\pi}{k}$. Here $k = 1/2$, so $T = \\frac{\\pi}{1/2} = 2\\pi$.',
    difficulty: 'Easy',
    formula: 'T = \\frac{\\pi}{1/2} = 2\\pi',
  },
  {
    id: 'c11-ch12-q7',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'What is the maximum amplitude and range of $y = 3\\sin(2x)$?',
    options: {
      A: 'Amplitude $= 3$, Range $= [-3, 3]$',
      B: 'Amplitude $= 2$, Range $= [-2, 2]$',
      C: 'Amplitude $= 6$, Range $= [-6, 6]$',
      D: 'Amplitude $= 1$, Range $= [-1, 1]$'
    },
    correct_answer: 'A',
    explanation: 'For $y = A\\sin(kx)$, amplitude is $|A| = 3$, and output oscillates between $-3$ and $+3$.',
    difficulty: 'Easy',
    formula: '\\text{Amp} = 3, \\; y \\in [-3, 3]',
  },
  {
    id: 'c11-ch12-q8',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'The graph of $y = \\tan x$ has vertical asymptotes at $x = $',
    options: {
      A: '$x = (2n + 1)\\frac{\\pi}{2}$ for $n \\in \\mathbb{Z}$',
      B: '$x = n\\pi$ for $n \\in \\mathbb{Z}$',
      C: '$x = 2n\\pi$',
      D: '$x = n\\frac{\\pi}{4}$'
    },
    correct_answer: 'A',
    explanation: '$\\tan x = \\frac{\\sin x}{\\cos x}$ is undefined where $\\cos x = 0$, which occurs at all odd multiples of $\\frac{\\pi}{2}$: $x = (2n+1)\\frac{\\pi}{2}$.',
    difficulty: 'Easy',
    formula: 'x = (2n+1)\\frac{\\pi}{2}',
  },
  {
    id: 'c11-ch12-q9',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'The domain of the secant function $f(x) = \\sec x$ is:',
    options: {
      A: '$\\mathbb{R} \\setminus \\left\\{(2n+1)\\frac{\\pi}{2} : n \\in \\mathbb{Z}\\right\\}$',
      B: '$\\mathbb{R} \\setminus \\{n\\pi : n \\in \\mathbb{Z}\\}$',
      C: '$\\mathbb{R}$',
      D: '$[-1, 1]$'
    },
    correct_answer: 'A',
    explanation: '$\\sec x = 1/\\cos x$ is defined everywhere except where $\\cos x = 0$, i.e., $x \\ne (2n+1)\\pi/2$.',
    difficulty: 'Medium',
    formula: '\\text{Dom}(\\sec x) = \\mathbb{R} \\setminus \\{(2n+1)\\pi/2\\}',
  },
  {
    id: 'c11-ch12-q10',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'The range of the cosecant function $f(x) = \\csc x$ is:',
    options: {
      A: '$(-\\infty, -1] \\cup [1, \\infty)$',
      B: '$[-1, 1]$',
      C: '$(0, \\infty)$',
      D: '$\\mathbb{R}$'
    },
    correct_answer: 'A',
    explanation: 'Since $-1 \\le \\sin x \\le 1$ and $\\sin x \\ne 0$, $\\csc x = 1/\\sin x \\le -1$ or $\\csc x \\ge 1$.',
    difficulty: 'Easy',
    formula: '|\\csc x| \\ge 1',
  },
  {
    id: 'c11-ch12-q11',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'What is the period of $f(x) = |\\sin x|$?',
    options: {
      A: '$\\pi$',
      B: '$2\\pi$',
      C: '$\\frac{\\pi}{2}$',
      D: '$4\\pi$'
    },
    correct_answer: 'A',
    explanation: 'Taking absolute value flips the negative lobes upward, halving the period from $2\\pi$ to $\\pi$.',
    difficulty: 'Medium',
    formula: 'T(|\\sin x|) = \\pi',
  },
  {
    id: 'c11-ch12-q12',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'What is the period of $f(x) = \\sin^2 x$?',
    options: {
      A: '$\\pi$',
      B: '$2\\pi$',
      C: '$\\frac{\\pi}{2}$',
      D: '$4\\pi$'
    },
    correct_answer: 'A',
    explanation: '$\\sin^2 x = \\frac{1 - \\cos 2x}{2}$. The period is the period of $\\cos 2x$, which is $\\frac{2\\pi}{2} = \\pi$.',
    difficulty: 'Medium',
    formula: 'T(\\sin^2 x) = \\pi',
  },
  {
    id: 'c11-ch12-q13',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'The graph of $y = \\cos x$ is symmetric with respect to:',
    options: {
      A: 'The $y$-axis (since $\\cos(-x) = \\cos x$)',
      B: 'The origin $(0,0)$',
      C: 'The $x$-axis',
      D: 'The line $y = x$'
    },
    correct_answer: 'A',
    explanation: 'Since $\\cos x$ is an even function, its graph exhibits mirror symmetry about the vertical $y$-axis.',
    difficulty: 'Easy',
    formula: '\\cos(-x) = \\cos x',
  },
  {
    id: 'c11-ch12-q14',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'The graph of $y = \\sin x$ is symmetric with respect to:',
    options: {
      A: 'The origin $(0,0)$ (since $\\sin(-x) = -\\sin x$)',
      B: 'The $y$-axis',
      C: 'The line $y = 1$',
      D: 'The line $x = \\pi$'
    },
    correct_answer: 'A',
    explanation: 'Since $\\sin x$ is an odd function, its graph has rotational point-symmetry of $180^\\circ$ about the origin.',
    difficulty: 'Easy',
    formula: '\\sin(-x) = -\\sin x',
  },

  // PART B — INVERSE TRIGONOMETRIC FUNCTIONS & PRINCIPAL BRANCHES (Q15 - Q28)
  {
    id: 'c11-ch12-q15',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'To make the sine function invertible, its domain is restricted to the principal value branch:',
    options: {
      A: '$\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$',
      B: '$[0, \\pi]$',
      C: '$[0, 2\\pi]$',
      D: '$(-\\pi, \\pi)$'
    },
    correct_answer: 'A',
    explanation: 'The standard principal branch for $\\sin^{-1} x$ restricts the domain of $\\sin x$ to $[-\\pi/2, \\pi/2]$ where it is strictly monotonic (bijective).',
    difficulty: 'Easy',
    formula: '\\text{Range}(\\arcsin x) = [-\\pi/2, \\pi/2]',
  },
  {
    id: 'c11-ch12-q16',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'The range of the principal inverse cosine function $y = \\cos^{-1} x$ (or $\\arccos x$) is:',
    options: {
      A: '$[0, \\pi]$',
      B: '$\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$',
      C: '$(0, \\pi)$',
      D: '$[-1, 1]$'
    },
    correct_answer: 'A',
    explanation: '$\\cos x$ is strictly decreasing and bijective on $[0, \\pi]$, so the range of $\\cos^{-1} x$ is $[0, \\pi]$.',
    difficulty: 'Easy',
    formula: '\\text{Range}(\\arccos x) = [0, \\pi]',
  },
  {
    id: 'c11-ch12-q17',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'The range of the principal inverse tangent function $y = \\tan^{-1} x$ is:',
    options: {
      A: '$\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$',
      B: '$\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$',
      C: '$[0, \\pi]$',
      D: '$(0, \\pi)$'
    },
    correct_answer: 'A',
    explanation: 'The principal range of $\\tan^{-1} x$ is the open interval $(-\\pi/2, \\pi/2)$ because vertical asymptotes occur at $\\pm \\pi/2$.',
    difficulty: 'Easy',
    formula: '\\text{Range}(\\arctan x) = (-\\pi/2, \\pi/2)',
  },
  {
    id: 'c11-ch12-q18',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'What is the principal value of $\\sin^{-1}\\left(\\frac{1}{2}\\right)$?',
    options: {
      A: '$\\frac{\\pi}{6} = 30^\\circ$',
      B: '$\\frac{\\pi}{3} = 60^\\circ$',
      C: '$\\frac{5\\pi}{6}$',
      D: '$\\frac{\\pi}{4}$'
    },
    correct_answer: 'A',
    explanation: 'In the principal branch $[-\\pi/2, \\pi/2]$, $\\sin(\\pi/6) = 1/2$, so $\\sin^{-1}(1/2) = \\pi/6$.',
    difficulty: 'Easy',
    formula: '\\sin^{-1}(1/2) = \\frac{\\pi}{6}',
  },
  {
    id: 'c11-ch12-q19',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'What is the principal value of $\\cos^{-1}\\left(-\\frac{1}{2}\\right)$?',
    options: {
      A: '$\\frac{2\\pi}{3} = 120^\\circ$',
      B: '$-\\frac{\\pi}{3}$',
      C: '$\\frac{\\pi}{3}$',
      D: '$\\frac{4\\pi}{3}$'
    },
    correct_answer: 'A',
    explanation: 'In $[0, \\pi]$: $\\cos^{-1}(-x) = \\pi - \\cos^{-1}(x) = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$.',
    difficulty: 'Medium',
    formula: '\\cos^{-1}(-1/2) = \\frac{2\\pi}{3}',
  },
  {
    id: 'c11-ch12-q20',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'What is the value of $\\tan^{-1}(-1)$?',
    options: {
      A: '$-\\frac{\\pi}{4} = -45^\\circ$',
      B: '$\\frac{3\\pi}{4}$',
      C: '$\\frac{\\pi}{4}$',
      D: '$\\frac{7\\pi}{4}$'
    },
    correct_answer: 'A',
    explanation: 'In $(-\\pi/2, \\pi/2)$: $\\tan^{-1}(-1) = -\\tan^{-1}(1) = -\\frac{\\pi}{4}$.',
    difficulty: 'Easy',
    formula: '\\tan^{-1}(-1) = -\\frac{\\pi}{4}',
  },
  {
    id: 'c11-ch12-q21',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'For any $x \\in [-1, 1]$, the identity $\\sin^{-1} x + \\cos^{-1} x$ is equal to:',
    options: {
      A: '$\\frac{\\pi}{2}$',
      B: '$\\pi$',
      C: '$0$',
      D: '$1$'
    },
    correct_answer: 'A',
    explanation: 'Standard co-function identity: $\\sin^{-1} x + \\cos^{-1} x = \\frac{\\pi}{2}$ for all $x \\in [-1, 1]$.',
    difficulty: 'Easy',
    formula: '\\sin^{-1} x + \\cos^{-1} x = \\frac{\\pi}{2}',
  },
  {
    id: 'c11-ch12-q22',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'For all $x \\in \\mathbb{R}$, $\\tan^{-1} x + \\cot^{-1} x$ is equal to:',
    options: {
      A: '$\\frac{\\pi}{2}$',
      B: '$\\pi$',
      C: '$0$',
      D: '$2\\pi$'
    },
    correct_answer: 'A',
    explanation: '$\\tan^{-1} x + \\cot^{-1} x = \\frac{\\pi}{2}$ for all real $x$.',
    difficulty: 'Easy',
    formula: '\\tan^{-1} x + \\cot^{-1} x = \\frac{\\pi}{2}',
  },
  {
    id: 'c11-ch12-q23',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'For $|x| \\ge 1$, $\\sec^{-1} x + \\csc^{-1} x$ equals:',
    options: {
      A: '$\\frac{\\pi}{2}$',
      B: '$\\pi$',
      C: '$0$',
      D: '$1$'
    },
    correct_answer: 'A',
    explanation: '$\\sec^{-1} x + \\csc^{-1} x = \\frac{\\pi}{2}$ for all $|x| \\ge 1$.',
    difficulty: 'Easy',
    formula: '\\sec^{-1} x + \\csc^{-1} x = \\frac{\\pi}{2}',
  },
  {
    id: 'c11-ch12-q24',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'The addition formula $\\tan^{-1} x + \\tan^{-1} y$ for $xy < 1$ is:',
    options: {
      A: '$\\tan^{-1}\\left(\\frac{x + y}{1 - xy}\\right)$',
      B: '$\\tan^{-1}\\left(\\frac{x - y}{1 + xy}\\right)$',
      C: '$\\tan^{-1}\\left(\\frac{x + y}{1 + xy}\\right)$',
      D: '$\\tan^{-1}(x+y)$'
    },
    correct_answer: 'A',
    explanation: '$\\tan^{-1} x + \\tan^{-1} y = \\tan^{-1}\\left(\\frac{x + y}{1 - xy}\\right)$ provided $xy < 1$.',
    difficulty: 'Easy',
    formula: '\\tan^{-1} x + \\tan^{-1} y = \\tan^{-1}\\left(\\frac{x+y}{1-xy}\\right)',
  },
  {
    id: 'c11-ch12-q25',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'Compute $\\tan^{-1}\\left(\\frac{1}{2}\\right) + \\tan^{-1}\\left(\\frac{1}{3}\\right)$:',
    options: {
      A: '$\\frac{\\pi}{4} = 45^\\circ$',
      B: '$\\frac{\\pi}{2}$',
      C: '$\\frac{\\pi}{6}$',
      D: '$\\frac{\\pi}{3}$'
    },
    correct_answer: 'A',
    explanation: '$\\tan^{-1}\\left(\\frac{1/2 + 1/3}{1 - 1/6}\\right) = \\tan^{-1}\\left(\\frac{5/6}{5/6}\\right) = \\tan^{-1}(1) = \\frac{\\pi}{4}$.',
    difficulty: 'Easy',
    formula: '\\tan^{-1}(1/2) + \\tan^{-1}(1/3) = \\frac{\\pi}{4}',
  },
  {
    id: 'c11-ch12-q26',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'What is the value of $\\sin\\left(\\cos^{-1}\\left(\\frac{4}{5}\\right)\\right)$?',
    options: {
      A: '$\\frac{3}{5}$',
      B: '$\\frac{4}{5}$',
      C: '$\\frac{1}{5}$',
      D: '$\\frac{\\sqrt{3}}{2}$'
    },
    correct_answer: 'A',
    explanation: 'Let $\\theta = \\cos^{-1}(4/5) \\implies \\cos\\theta = 4/5$. Since $\\theta \\in [0, \\pi/2]$, $\\sin\\theta = \\sqrt{1 - (4/5)^2} = \\sqrt{9/25} = 3/5$.',
    difficulty: 'Easy',
    formula: '\\sin(\\cos^{-1}(4/5)) = \\frac{3}{5}',
  },
  {
    id: 'c11-ch12-q27',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'What is the value of $\\tan\\left(\\sin^{-1} x\\right)$ for $|x| < 1$?',
    options: {
      A: '$\\frac{x}{\\sqrt{1 - x^2}}$',
      B: '$\\frac{\\sqrt{1 - x^2}}{x}$',
      C: '$\\sqrt{1 - x^2}$',
      D: '$\\frac{1}{\\sqrt{1 - x^2}}$'
    },
    correct_answer: 'A',
    explanation: '$\\sin\\theta = x \\implies \\text{opposite} = x, \\text{hypotenuse} = 1, \\text{adjacent} = \\sqrt{1-x^2}$. Thus $\\tan\\theta = \\frac{x}{\\sqrt{1-x^2}}$.',
    difficulty: 'Medium',
    formula: '\\tan(\\sin^{-1} x) = \\frac{x}{\\sqrt{1-x^2}}',
  },
  {
    id: 'c11-ch12-q28',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'What is $2\\tan^{-1} x$ expressed in terms of $\\sin^{-1}$ for $|x| \\le 1$?',
    options: {
      A: '$\\sin^{-1}\\left(\\frac{2x}{1 + x^2}\\right)$',
      B: '$\\sin^{-1}\\left(\\frac{2x}{1 - x^2}\\right)$',
      C: '$\\cos^{-1}\\left(\\frac{1 - x^2}{1 + x^2}\\right)$',
      D: '$\\tan^{-1}\\left(\\frac{2x}{1 + x^2}\\right)$'
    },
    correct_answer: 'A',
    explanation: 'Setting $x = \\tan\\theta \\implies \\frac{2x}{1+x^2} = \\frac{2\\tan\\theta}{1+\\tan^2\\theta} = \\sin 2\\theta$. Thus $2\\tan^{-1} x = \\sin^{-1}\\left(\\frac{2x}{1+x^2}\\right)$.',
    difficulty: 'Medium',
    formula: '2\\tan^{-1} x = \\sin^{-1}\\left(\\frac{2x}{1+x^2}\\right)',
  },

  // PART C — GENERAL SOLUTIONS OF TRIGONOMETRIC EQUATIONS (Q29 - Q38)
  {
    id: 'c11-ch12-q29',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'The general solution of the equation $\\sin\\theta = 0$ is:',
    options: {
      A: '$\\theta = n\\pi, \\quad n \\in \\mathbb{Z}$',
      B: '$\\theta = (2n + 1)\\frac{\\pi}{2}, \\quad n \\in \\mathbb{Z}$',
      C: '$\\theta = 2n\\pi$',
      D: '$\\theta = \\frac{n\\pi}{2}$'
    },
    correct_answer: 'A',
    explanation: 'Sine vanishes at all integer multiples of $\\pi$: $\\theta = n\\pi$ for $n \\in \\mathbb{Z}$.',
    difficulty: 'Easy',
    formula: '\\sin\\theta = 0 \\implies \\theta = n\\pi',
  },
  {
    id: 'c11-ch12-q30',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'The general solution of the equation $\\cos\\theta = 0$ is:',
    options: {
      A: '$\\theta = (2n + 1)\\frac{\\pi}{2}, \\quad n \\in \\mathbb{Z}$',
      B: '$\\theta = n\\pi$',
      C: '$\\theta = 2n\\pi$',
      D: '$\\theta = n\\pi + \\frac{\\pi}{4}$'
    },
    correct_answer: 'A',
    explanation: 'Cosine vanishes at all odd multiples of $\\pi/2$: $\\theta = (2n+1)\\frac{\\pi}{2}$ for $n \\in \\mathbb{Z}$.',
    difficulty: 'Easy',
    formula: '\\cos\\theta = 0 \\implies \\theta = (2n+1)\\frac{\\pi}{2}',
  },
  {
    id: 'c11-ch12-q31',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'The general solution of $\\tan\\theta = 0$ is:',
    options: {
      A: '$\\theta = n\\pi, \\quad n \\in \\mathbb{Z}$',
      B: '$\\theta = (2n + 1)\\frac{\\pi}{2}$',
      C: '$\\theta = 2n\\pi$',
      D: '$\\theta = \\frac{n\\pi}{4}$'
    },
    correct_answer: 'A',
    explanation: '$\\tan\\theta = 0 \\iff \\sin\\theta = 0 \\implies \\theta = n\\pi$ for $n \\in \\mathbb{Z}$.',
    difficulty: 'Easy',
    formula: '\\tan\\theta = 0 \\implies \\theta = n\\pi',
  },
  {
    id: 'c11-ch12-q32',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'The general solution of $\\sin\\theta = \\sin\\alpha$ is given by:',
    options: {
      A: '$\\theta = n\\pi + (-1)^n \\alpha, \\quad n \\in \\mathbb{Z}$',
      B: '$\\theta = 2n\\pi \\pm \\alpha$',
      C: '$\\theta = n\\pi + \\alpha$',
      D: '$\\theta = n\\pi - \\alpha$'
    },
    correct_answer: 'A',
    explanation: 'For $\\sin\\theta = \\sin\\alpha$, the general solution combining both even ($2k\\pi + \\alpha$) and odd ($(2k+1)\\pi - \\alpha$) forms is $\\theta = n\\pi + (-1)^n\\alpha$.',
    difficulty: 'Medium',
    formula: '\\theta = n\\pi + (-1)^n \\alpha',
  },
  {
    id: 'c11-ch12-q33',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'The general solution of $\\cos\\theta = \\cos\\alpha$ is:',
    options: {
      A: '$\\theta = 2n\\pi \\pm \\alpha, \\quad n \\in \\mathbb{Z}$',
      B: '$\\theta = n\\pi + (-1)^n \\alpha$',
      C: '$\\theta = n\\pi + \\alpha$',
      D: '$\\theta = 2n\\pi + \\alpha$'
    },
    correct_answer: 'A',
    explanation: 'Cosine is even (symmetric about $x$-axis), so $\\theta = 2n\\pi \\pm \\alpha$ for $n \\in \\mathbb{Z}$.',
    difficulty: 'Easy',
    formula: '\\theta = 2n\\pi \\pm \\alpha',
  },
  {
    id: 'c11-ch12-q34',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'The general solution of $\\tan\\theta = \\tan\\alpha$ is:',
    options: {
      A: '$\\theta = n\\pi + \\alpha, \\quad n \\in \\mathbb{Z}$',
      B: '$\\theta = 2n\\pi + \\alpha$',
      C: '$\\theta = 2n\\pi \\pm \\alpha$',
      D: '$\\theta = n\\pi + (-1)^n \\alpha$'
    },
    correct_answer: 'A',
    explanation: 'Since tangent has period $\\pi$, $\\tan\\theta = \\tan\\alpha \\implies \\theta = n\\pi + \\alpha$ for $n \\in \\mathbb{Z}$.',
    difficulty: 'Easy',
    formula: '\\theta = n\\pi + \\alpha',
  },
  {
    id: 'c11-ch12-q35',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'Find the general solution of the equation $\\sin\\theta = \\frac{1}{2}$:',
    options: {
      A: '$\\theta = n\\pi + (-1)^n \\frac{\\pi}{6}$',
      B: '$\\theta = 2n\\pi \\pm \\frac{\\pi}{6}$',
      C: '$\\theta = n\\pi + \\frac{\\pi}{6}$',
      D: '$\\theta = 2n\\pi + \\frac{\\pi}{3}$'
    },
    correct_answer: 'A',
    explanation: '$\\sin\\theta = \\sin(\\pi/6) \\implies \\theta = n\\pi + (-1)^n\\frac{\\pi}{6}$ for $n \\in \\mathbb{Z}$.',
    difficulty: 'Easy',
    formula: '\\theta = n\\pi + (-1)^n \\frac{\\pi}{6}',
  },
  {
    id: 'c11-ch12-q36',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'Find the general solution of $\\cos\\theta = \\frac{1}{\\sqrt{2}}$:',
    options: {
      A: '$\\theta = 2n\\pi \\pm \\frac{\\pi}{4}$',
      B: '$\\theta = n\\pi \\pm \\frac{\\pi}{4}$',
      C: '$\\theta = n\\pi + (-1)^n \\frac{\\pi}{4}$',
      D: '$\\theta = 2n\\pi + \\frac{\\pi}{4}$'
    },
    correct_answer: 'A',
    explanation: '$\\cos\\theta = \\cos(\\pi/4) \\implies \\theta = 2n\\pi \\pm \\frac{\\pi}{4}$ for $n \\in \\mathbb{Z}$.',
    difficulty: 'Easy',
    formula: '\\theta = 2n\\pi \\pm \\frac{\\pi}{4}',
  },
  {
    id: 'c11-ch12-q37',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'Find the general solution of $\\tan\\theta = \\sqrt{3}$:',
    options: {
      A: '$\\theta = n\\pi + \\frac{\\pi}{3}$',
      B: '$\\theta = 2n\\pi \\pm \\frac{\\pi}{3}$',
      C: '$\\theta = n\\pi + \\frac{\\pi}{6}$',
      D: '$\\theta = 2n\\pi + \\frac{\\pi}{3}$'
    },
    correct_answer: 'A',
    explanation: '$\\tan\\theta = \\tan(\\pi/3) \\implies \\theta = n\\pi + \\frac{\\pi}{3}$ for $n \\in \\mathbb{Z}$.',
    difficulty: 'Easy',
    formula: '\\theta = n\\pi + \\frac{\\pi}{3}',
  },
  {
    id: 'c11-ch12-q38',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'How many solutions does the equation $\\sin x = 0$ have in the interval $[0, 2\\pi]$?',
    options: {
      A: '$3$ solutions ($x = 0, \\pi, 2\\pi$)',
      B: '$2$ solutions',
      C: '$1$ solution',
      D: '$4$ solutions'
    },
    correct_answer: 'A',
    explanation: 'In the closed interval $[0, 2\\pi]$, $\\sin x = 0$ at $x = 0$, $x = \\pi$, and $x = 2\\pi$. Total 3 solutions.',
    difficulty: 'Easy',
    formula: 'x \\in \\{0, \\pi, 2\\pi\\}',
  },

  // PART D — ADVANCED TRIGONOMETRIC EQUATIONS & INVERSE EVALUATIONS (Q39 - Q50)
  {
    id: 'c11-ch12-q39',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'Solve $2\\cos^2\\theta - 1 = 0$ for its principal solutions in $[0, 2\\pi)$:',
    options: {
      A: '$\\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}$',
      B: '$\\frac{\\pi}{4}, \\frac{3\\pi}{4}$',
      C: '$\\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}, \\frac{5\\pi}{3}$',
      D: '$\\frac{\\pi}{6}, \\frac{5\\pi}{6}$'
    },
    correct_answer: 'A',
    explanation: '$\\cos 2\\theta = 0 \\implies 2\\theta = \\frac{\\pi}{2}, \\frac{3\\pi}{2}, \\frac{5\\pi}{2}, \\frac{7\\pi}{2} \\implies \\theta = \\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}$.',
    difficulty: 'Medium',
    formula: '\\theta = \\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}',
  },
  {
    id: 'c11-ch12-q40',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'Solve the equation $\\sin 2x = \\cos x$ for $x \\in [0, 2\\pi)$:',
    options: {
      A: '$\\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}, \\frac{3\\pi}{2}$',
      B: '$\\frac{\\pi}{6}, \\frac{5\\pi}{6}$',
      C: '$\\frac{\\pi}{3}, \\frac{2\\pi}{3}$',
      D: '$\\frac{\\pi}{4}, \\frac{3\\pi}{4}$'
    },
    correct_answer: 'A',
    explanation: '$2\\sin x\\cos x - \\cos x = 0 \\implies \\cos x(2\\sin x - 1) = 0$. Either $\\cos x = 0 \\implies x = \\pi/2, 3\\pi/2$; or $\\sin x = 1/2 \\implies x = \\pi/6, 5\\pi/6$.',
    difficulty: 'Medium',
    formula: 'x \\in \\{\\pi/6, \\pi/2, 5\\pi/6, 3\\pi/2\\}',
  },
  {
    id: 'c11-ch12-q41',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'The number of real solutions to $\\sin x = x$ is:',
    options: {
      A: 'Exactly 1 solution ($x = 0$)',
      B: '3 solutions',
      C: 'Infinitely many',
      D: '0 solutions'
    },
    correct_answer: 'A',
    explanation: 'Since $|\\sin x| < |x|$ for all $x \\ne 0$, the only intersection between $y = \\sin x$ and $y = x$ is at the origin $x = 0$.',
    difficulty: 'Medium',
    formula: '\\sin x = x \\iff x = 0',
  },
  {
    id: 'c11-ch12-q42',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'Solve $\\sqrt{3}\\sin\\theta + \\cos\\theta = 1$ for its general solution:',
    options: {
      A: '$\\theta = 2n\\pi \\text{ or } \\theta = 2n\\pi + \\frac{2\\pi}{3}$',
      B: '$\\theta = n\\pi$',
      C: '$\\theta = 2n\\pi \\pm \\frac{\\pi}{6}$',
      D: '$\\theta = n\\pi + \\frac{\\pi}{3}$'
    },
    correct_answer: 'A',
    explanation: 'Divide by 2: $\\frac{\\sqrt{3}}{2}\\sin\\theta + \\frac{1}{2}\\cos\\theta = \\frac{1}{2} \\implies \\cos(\\theta - \\pi/3) = \\cos(\\pi/3)$. Thus $\\theta - \\pi/3 = 2n\\pi \\pm \\pi/3 \\implies \\theta = 2n\\pi + 2\\pi/3$ or $\\theta = 2n\\pi$.',
    difficulty: 'Hard',
    formula: '\\theta = 2n\\pi, \\; 2n\\pi + \\frac{2\\pi}{3}',
  },
  {
    id: 'c11-ch12-q43',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'What is the exact value of $\\sin\\left(2\\tan^{-1}\\left(\\frac{1}{3}\\right)\\right)$?',
    options: {
      A: '$\\frac{3}{5}$',
      B: '$\\frac{4}{5}$',
      C: '$\\frac{2}{3}$',
      D: '$\\frac{1}{2}$'
    },
    correct_answer: 'A',
    explanation: 'Using $\\sin(2\\theta) = \\frac{2\\tan\\theta}{1 + \\tan^2\\theta}$ with $\\tan\\theta = 1/3$: $\\frac{2(1/3)}{1 + 1/9} = \\frac{2/3}{10/9} = \\frac{2}{3} \\times \\frac{9}{10} = \\frac{3}{5}$.',
    difficulty: 'Medium',
    formula: '\\sin(2\\arctan(1/3)) = \\frac{3}{5}',
  },
  {
    id: 'c11-ch12-q44',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'What is the value of $\\cos\\left(2\\tan^{-1}\\left(\\frac{1}{3}\\right)\\right)$?',
    options: {
      A: '$\\frac{4}{5}$',
      B: '$\\frac{3}{5}$',
      C: '$\\frac{1}{5}$',
      D: '$\\frac{8}{9}$'
    },
    correct_answer: 'A',
    explanation: '$\\cos(2\\theta) = \\frac{1 - \\tan^2\\theta}{1 + \\tan^2\\theta} = \\frac{1 - 1/9}{1 + 1/9} = \\frac{8/9}{10/9} = \\frac{8}{10} = \\frac{4}{5}$.',
    difficulty: 'Medium',
    formula: '\\cos(2\\arctan(1/3)) = \\frac{4}{5}',
  },
  {
    id: 'c11-ch12-q45',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'Simplify $\\sin^{-1}\\left(\\sin\\left(\\frac{2\\pi}{3}\\right)\\right)$:',
    options: {
      A: '$\\frac{\\pi}{3}$',
      B: '$\\frac{2\\pi}{3}$',
      C: '$-\\frac{\\pi}{3}$',
      D: '$\\frac{\\pi}{6}$'
    },
    correct_answer: 'A',
    explanation: 'Since $\\frac{2\\pi}{3} \\notin [-\\pi/2, \\pi/2]$, $\\sin(2\\pi/3) = \\sin(\\pi - \\pi/3) = \\sin(\\pi/3)$. Thus $\\sin^{-1}(\\sin(\\pi/3)) = \\frac{\\pi}{3}$.',
    difficulty: 'Medium',
    formula: '\\sin^{-1}(\\sin(2\\pi/3)) = \\frac{\\pi}{3}',
  },
  {
    id: 'c11-ch12-q46',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'Simplify $\\cos^{-1}\\left(\\cos\\left(\\frac{7\\pi}{6}\\right)\\right)$:',
    options: {
      A: '$\\frac{5\\pi}{6}$',
      B: '$\\frac{7\\pi}{6}$',
      C: '$\\frac{\\pi}{6}$',
      D: '$-\\frac{\\pi}{6}$'
    },
    correct_answer: 'A',
    explanation: 'Since $\\frac{7\\pi}{6} > \\pi$, $\\cos(7\\pi/6) = \\cos(2\\pi - 7\\pi/6) = \\cos(5\\pi/6)$. Since $\\frac{5\\pi}{6} \\in [0, \\pi]$, the output is $\\frac{5\\pi}{6}$.',
    difficulty: 'Hard',
    formula: '\\cos^{-1}(\\cos(7\\pi/6)) = \\frac{5\\pi}{6}',
  },
  {
    id: 'c11-ch12-q47',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'What is the value of $\\sin\\left(\\sin^{-1}\\left(\\frac{3}{5}\\right) + \\cos^{-1}\\left(\\frac{3}{5}\\right)\\right)$?',
    options: {
      A: '$1$',
      B: '$0$',
      C: '$\\frac{3}{5}$',
      D: '$\\frac{4}{5}$'
    },
    correct_answer: 'A',
    explanation: 'Since $\\sin^{-1} x + \\cos^{-1} x = \\frac{\\pi}{2}$, $\\sin(\\pi/2) = 1$.',
    difficulty: 'Easy',
    formula: '\\sin(\\pi/2) = 1',
  },
  {
    id: 'c11-ch12-q48',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'The solution of $\\tan^2\\theta = 3$ is:',
    options: {
      A: '$\\theta = n\\pi \\pm \\frac{\\pi}{3}, \\quad n \\in \\mathbb{Z}$',
      B: '$\\theta = n\\pi + \\frac{\\pi}{3}$',
      C: '$\\theta = 2n\\pi \\pm \\frac{\\pi}{3}$',
      D: '$\\theta = n\\pi \\pm \\frac{\\pi}{6}$'
    },
    correct_answer: 'A',
    explanation: '$\\tan^2\\theta = \\tan^2(\\pi/3) \\implies \\theta = n\\pi \\pm \\frac{\\pi}{3}$ for $n \\in \\mathbb{Z}$.',
    difficulty: 'Easy',
    formula: '\\tan^2\\theta = \\tan^2\\alpha \\implies \\theta = n\\pi \\pm \\alpha',
  },
  {
    id: 'c11-ch12-q49',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'The solution of $\\sin^2\\theta = \\frac{1}{4}$ is:',
    options: {
      A: '$\\theta = n\\pi \\pm \\frac{\\pi}{6}, \\quad n \\in \\mathbb{Z}$',
      B: '$\\theta = n\\pi + (-1)^n \\frac{\\pi}{6}$',
      C: '$\\theta = 2n\\pi \\pm \\frac{\\pi}{6}$',
      D: '$\\theta = n\\pi \\pm \\frac{\\pi}{3}$'
    },
    correct_answer: 'A',
    explanation: '$\\sin^2\\theta = \\sin^2(\\pi/6) \\implies \\theta = n\\pi \\pm \\frac{\\pi}{6}$.',
    difficulty: 'Easy',
    formula: '\\sin^2\\theta = \\sin^2\\alpha \\implies \\theta = n\\pi \\pm \\alpha',
  },
  {
    id: 'c11-ch12-q50',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch12',
    question: 'The solution of $\\cos^2\\theta = \\frac{1}{2}$ is:',
    options: {
      A: '$\\theta = n\\pi \\pm \\frac{\\pi}{4}, \\quad n \\in \\mathbb{Z}$',
      B: '$\\theta = 2n\\pi \\pm \\frac{\\pi}{4}$',
      C: '$\\theta = n\\pi + \\frac{\\pi}{4}$',
      D: '$\\theta = n\\pi \\pm \\frac{\\pi}{2}$'
    },
    correct_answer: 'A',
    explanation: '$\\cos^2\\theta = \\cos^2(\\pi/4) \\implies \\theta = n\\pi \\pm \\frac{\\pi}{4}$ for $n \\in \\mathbb{Z}$.',
    difficulty: 'Easy',
    formula: '\\cos^2\\theta = \\cos^2\\alpha \\implies \\theta = n\\pi \\pm \\alpha',
  },
];

export const C11_CH12_QUESTIONS: Question[] = [
  ...C11_CH12_NORMAL_QUESTIONS,
  ...C11_CH12_ADVANCED_QUESTIONS,
];

