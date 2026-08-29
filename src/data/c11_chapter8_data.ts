import { Question } from '../types';
import { C11_CH8_ADVANCED_PART1 } from './c11_ch8_advanced_part1';
import { C11_CH8_ADVANCED_PART2 } from './c11_ch8_advanced_part2';
import { C11_CH8_ADVANCED_PART3 } from './c11_ch8_advanced_part3';
import { C11_CH8_ADVANCED_PART4 } from './c11_ch8_advanced_part4';

export const C11_CH8_ADVANCED_QUESTIONS: Question[] = [
  ...C11_CH8_ADVANCED_PART1,
  ...C11_CH8_ADVANCED_PART2,
  ...C11_CH8_ADVANCED_PART3,
  ...C11_CH8_ADVANCED_PART4,
];

export const C11_CH8_NORMAL_QUESTIONS: Question[] = [
  // =========================================================================
  // CLASS 11 — CHAPTER 8: FUNCTIONS AND GRAPHS (50 MCQs)
  // =========================================================================

  // PART A — FUNCTION DEFINITIONS, DOMAIN & RANGE (Q1 - Q14)
  {
    id: 'c11-ch8-q1',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'A binary relation $f: A \\to B$ is a function if every element $x \\in A$ is associated with:',
    options: {
      A: 'Exactly one unique element $y \\in B$',
      B: 'At least two elements in $B$',
      C: 'No element in $B$',
      D: 'Any subset of $B$'
    },
    correct_answer: 'A',
    explanation: 'By standard mathematical definition, a relation $f \\subseteq A \\times B$ is a function if $\\text{Dom}(f) = A$ and each $x \\in A$ maps to exactly one $y \\in B$.',
    difficulty: 'Easy',
    formula: '\\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y',
  },
  {
    id: 'c11-ch8-q2',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'What is the natural domain of the real-valued function $f(x) = \\frac{1}{x - 3}$?',
    options: {
      A: '$\\mathbb{R} \\setminus \\{3\\}$',
      B: '$\\mathbb{R}$',
      C: '$(3, \\infty)$',
      D: '$[3, \\infty)$'
    },
    correct_answer: 'A',
    explanation: 'The denominator cannot be zero: $x - 3 \\ne 0 \\implies x \\ne 3$. Domain is all real numbers except 3, denoted $\\mathbb{R} \\setminus \\{3\\}$.',
    difficulty: 'Easy',
    formula: '\\text{Dom}(f) = \\mathbb{R} \\setminus \\{3\\}',
  },
  {
    id: 'c11-ch8-q3',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'What is the domain of the real function $f(x) = \\sqrt{x - 5}$?',
    options: {
      A: '$[5, \\infty)$',
      B: '$(5, \\infty)$',
      C: '$(-\\infty, 5]$',
      D: '$\\mathbb{R} \\setminus \\{5\\}$'
    },
    correct_answer: 'A',
    explanation: 'For a real-valued square root function, the radicand must be non-negative: $x - 5 \\ge 0 \\implies x \\ge 5$, or in interval notation $[5, \\infty)$.',
    difficulty: 'Easy',
    formula: 'x - 5 \\ge 0 \\implies x \\in [5, \\infty)',
  },
  {
    id: 'c11-ch8-q4',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'What is the domain of $f(x) = \\sqrt{16 - x^2}$ in $\\mathbb{R}$?',
    options: {
      A: '$[-4, 4]$',
      B: '$(-4, 4)$',
      C: '$(-\\infty, -4] \\cup [4, \\infty)$',
      D: '$[0, 4]$'
    },
    correct_answer: 'A',
    explanation: '$16 - x^2 \\ge 0 \\implies x^2 \\le 16 \\implies -4 \\le x \\le 4$, so domain is $[-4, 4]$.',
    difficulty: 'Medium',
    formula: '16 - x^2 \\ge 0 \\iff x \\in [-4, 4]',
  },
  {
    id: 'c11-ch8-q5',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'What is the range of $f(x) = \\sqrt{16 - x^2}$?',
    options: {
      A: '$[0, 4]$',
      B: '$[-4, 4]$',
      C: '$[0, 16]$',
      D: '$(0, 4)$'
    },
    correct_answer: 'A',
    explanation: 'For $x \\in [-4, 4]$, $x^2 \\in [0, 16] \\implies 16 - x^2 \\in [0, 16] \\implies \\sqrt{16 - x^2} \\in [0, 4]$.',
    difficulty: 'Medium',
    formula: '\\text{Range}(f) = [0, 4]',
  },
  {
    id: 'c11-ch8-q6',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'What is the range of the absolute value function $f(x) = |x|$ for $x \\in \\mathbb{R}$?',
    options: {
      A: '$[0, \\infty)$',
      B: '$(-\\infty, \\infty)$',
      C: '$(0, \\infty)$',
      D: '$[1, \\infty)$'
    },
    correct_answer: 'A',
    explanation: 'The absolute value of any real number is always non-negative: $|x| \\ge 0$, so range is $[0, \\infty)$.',
    difficulty: 'Easy',
    formula: '\\text{Range}(|x|) = [0, \\infty)',
  },
  {
    id: 'c11-ch8-q7',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'A function $f: A \\to B$ is called ONE-TO-ONE (Injective) if:',
    options: {
      A: '$f(x_1) = f(x_2) \\implies x_1 = x_2$',
      B: '$\\text{Range}(f) = B$',
      C: '$f(x) = f(-x)$ for all $x$',
      D: '$f(x) = x$'
    },
    correct_answer: 'A',
    explanation: 'Injective (1-1) means distinct domain elements map to distinct codomain elements: $x_1 \\ne x_2 \\implies f(x_1) \\ne f(x_2)$, or equivalently $f(x_1) = f(x_2) \\implies x_1 = x_2$.',
    difficulty: 'Easy',
    formula: 'f(x_1) = f(x_2) \\implies x_1 = x_2',
  },
  {
    id: 'c11-ch8-q8',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'A function $f: A \\to B$ is called ONTO (Surjective) if:',
    options: {
      A: '$\\text{Range}(f) = B$ (Codomain)',
      B: '$\\text{Range}(f) \\subset B$',
      C: '$f$ is one-to-one',
      D: '$A = B$'
    },
    correct_answer: 'A',
    explanation: 'A function is onto (surjective) if every element in the codomain $B$ has at least one pre-image in $A$, i.e., Range$(f) = B$.',
    difficulty: 'Easy',
    formula: '\\text{Range}(f) = \\text{Codomain}(B)',
  },
  {
    id: 'c11-ch8-q9',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'A function $f: A \\to B$ that is BOTH injective (one-to-one) and surjective (onto) is called:',
    options: {
      A: 'Bijective (One-to-One Correspondence)',
      B: 'Constant function',
      C: 'Identity function',
      D: 'Periodic function'
    },
    correct_answer: 'A',
    explanation: 'A function is bijective (1-1 correspondence) if and only if it is both one-to-one and onto, which is the necessary and sufficient condition for invertibility.',
    difficulty: 'Easy',
    formula: 'f \\text{ is bijective} \\iff (\\text{Injective} \\land \\text{Surjective})',
  },
  {
    id: 'c11-ch8-q10',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'The function $f: \\mathbb{R} \\to \\mathbb{R}$ defined by $f(x) = x^2$ is:',
    options: {
      A: 'Neither one-to-one nor onto',
      B: 'One-to-one and onto',
      C: 'One-to-one but not onto',
      D: 'Onto but not one-to-one'
    },
    correct_answer: 'A',
    explanation: '$f(-2) = f(2) = 4$ (not 1-1). Also negative real numbers have no pre-images in $\\mathbb{R}$ (not onto). Thus it is neither.',
    difficulty: 'Medium',
    formula: 'f(-x) = f(x) \\implies \\text{not injective}',
  },
  {
    id: 'c11-ch8-q11',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'The function $f: \\mathbb{R} \\to \\mathbb{R}$ defined by $f(x) = 2x + 5$ is:',
    options: {
      A: 'Bijective (both one-to-one and onto)',
      B: 'Only one-to-one',
      C: 'Only onto',
      D: 'Neither one-to-one nor onto'
    },
    correct_answer: 'A',
    explanation: '$2x_1+5 = 2x_2+5 \\implies x_1 = x_2$ (1-1). Also for any $y \\in \\mathbb{R}$, $x = \\frac{y-5}{2} \\in \\mathbb{R}$ (onto). Thus $f$ is bijective.',
    difficulty: 'Easy',
    formula: 'f(x) = 2x+5 \\implies f^{-1}(y) = \\frac{y-5}{2}',
  },
  {
    id: 'c11-ch8-q12',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'A real function $f(x)$ is said to be EVEN if for all $x$ in its domain:',
    options: {
      A: '$f(-x) = f(x)$',
      B: '$f(-x) = -f(x)$',
      C: '$f(x) = 0$',
      D: '$f(x) = x$'
    },
    correct_answer: 'A',
    explanation: 'An even function satisfies symmetry about the $y$-axis: $f(-x) = f(x)$ for all $x$.',
    difficulty: 'Easy',
    formula: 'f(-x) = f(x)',
  },
  {
    id: 'c11-ch8-q13',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'A real function $f(x)$ is said to be ODD if for all $x$ in its domain:',
    options: {
      A: '$f(-x) = -f(x)$',
      B: '$f(-x) = f(x)$',
      C: '$f(x) = 1$',
      D: '$f(x) = f(1/x)$'
    },
    correct_answer: 'A',
    explanation: 'An odd function satisfies rotational symmetry about the origin $(0,0)$: $f(-x) = -f(x)$.',
    difficulty: 'Easy',
    formula: 'f(-x) = -f(x)',
  },
  {
    id: 'c11-ch8-q14',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'Which of the following functions is an EVEN function?',
    options: {
      A: '$f(x) = \\cos x$',
      B: '$f(x) = \\sin x$',
      C: '$f(x) = x^3$',
      D: '$f(x) = \\tan x$'
    },
    correct_answer: 'A',
    explanation: '$\\cos(-x) = \\cos x$, making cosine an even function. $\\sin x, x^3, \\tan x$ are all odd.',
    difficulty: 'Easy',
    formula: '\\cos(-x) = \\cos x',
  },

  // PART B — ODD/EVEN, COMPOSITION & INVERSE FUNCTIONS (Q15 - Q28)
  {
    id: 'c11-ch8-q15',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'Which of the following is an ODD function?',
    options: {
      A: '$f(x) = \\sin x + x^3$',
      B: '$f(x) = \\cos x + x^2$',
      C: '$f(x) = |x|$',
      D: '$f(x) = x^4 + 1$'
    },
    correct_answer: 'A',
    explanation: '$f(-x) = \\sin(-x) + (-x)^3 = -\\sin x - x^3 = -(\\sin x + x^3) = -f(x)$, so $f(x)$ is odd.',
    difficulty: 'Easy',
    formula: 'f(-x) = -f(x)',
  },
  {
    id: 'c11-ch8-q16',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'The function $f(x) = x^3 + x^2 + 1$ is:',
    options: {
      A: 'Neither even nor odd',
      B: 'Even only',
      C: 'Odd only',
      D: 'Both even and odd'
    },
    correct_answer: 'A',
    explanation: '$f(-x) = -x^3 + x^2 + 1 \\ne f(x)$ and $\\ne -f(x)$. Thus it is neither even nor odd.',
    difficulty: 'Easy',
    formula: 'f(-x) \\ne \\pm f(x)',
  },
  {
    id: 'c11-ch8-q17',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'The only function which is simultaneously BOTH even and odd everywhere is:',
    options: {
      A: '$f(x) = 0$ (the zero function)',
      B: '$f(x) = 1$',
      C: '$f(x) = x$',
      D: '$f(x) = e^x$'
    },
    correct_answer: 'A',
    explanation: 'If $f(-x) = f(x)$ and $f(-x) = -f(x)$, then $f(x) = -f(x) \\implies 2f(x) = 0 \\implies f(x) = 0$.',
    difficulty: 'Medium',
    formula: 'f(x) = -f(x) \\implies f(x) = 0',
  },
  {
    id: 'c11-ch8-q18',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'If $f(x) = 2x + 3$ and $g(x) = x^2 - 1$, find the composite function $(f \\circ g)(x)$:',
    options: {
      A: '$2x^2 + 1$',
      B: '$4x^2 + 12x + 8$',
      C: '$2x^2 - 1$',
      D: '$2x^2 + 3$'
    },
    correct_answer: 'A',
    explanation: '$(f \\circ g)(x) = f(g(x)) = f(x^2 - 1) = 2(x^2 - 1) + 3 = 2x^2 - 2 + 3 = 2x^2 + 1$.',
    difficulty: 'Easy',
    formula: '(f \\circ g)(x) = f(g(x)) = 2x^2 + 1',
  },
  {
    id: 'c11-ch8-q19',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'If $f(x) = 2x + 3$ and $g(x) = x^2 - 1$, find $(g \\circ f)(x)$:',
    options: {
      A: '$4x^2 + 12x + 8$',
      B: '$2x^2 + 1$',
      C: '$4x^2 + 9$',
      D: '$4x^2 + 8$'
    },
    correct_answer: 'A',
    explanation: '$(g \\circ f)(x) = g(f(x)) = g(2x + 3) = (2x + 3)^2 - 1 = 4x^2 + 12x + 9 - 1 = 4x^2 + 12x + 8$.',
    difficulty: 'Medium',
    formula: '(g \\circ f)(x) = 4x^2 + 12x + 8',
  },
  {
    id: 'c11-ch8-q20',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'In general, is function composition commutative? That is, does $(f \\circ g)(x) = (g \\circ f)(x)$ always hold?',
    options: {
      A: 'No, function composition is generally non-commutative ($f \\circ g \\ne g \\circ f$)',
      B: 'Yes, it is always commutative',
      C: 'Only for trigonometric functions',
      D: 'Only when $f(x) = g(x) = 0$'
    },
    correct_answer: 'A',
    explanation: 'Function composition is associative $(f \\circ (g \\circ h) = (f \\circ g) \\circ h)$, but in general $f \\circ g \\ne g \\circ f$.',
    difficulty: 'Easy',
    formula: 'f \\circ g \\ne g \\circ f',
  },
  {
    id: 'c11-ch8-q21',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'If $f(x) = 3x - 7$, what is the formula for the inverse function $f^{-1}(x)$?',
    options: {
      A: '$\\frac{x + 7}{3}$',
      B: '$\\frac{x - 7}{3}$',
      C: '$3x + 7$',
      D: '$\\frac{1}{3x - 7}$'
    },
    correct_answer: 'A',
    explanation: 'Let $y = 3x - 7 \\implies 3x = y + 7 \\implies x = \\frac{y + 7}{3}$. Thus $f^{-1}(x) = \\frac{x + 7}{3}$.',
    difficulty: 'Easy',
    formula: 'f^{-1}(x) = \\frac{x+7}{3}',
  },
  {
    id: 'c11-ch8-q22',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'If $f(x) = \\frac{x+1}{x-2}$ for $x \\ne 2$, find $f^{-1}(x)$:',
    options: {
      A: '$\\frac{2x + 1}{x - 1}$',
      B: '$\\frac{2x - 1}{x + 1}$',
      C: '$\\frac{x - 2}{x + 1}$',
      D: '$\\frac{x + 2}{x - 1}$'
    },
    correct_answer: 'A',
    explanation: '$y = \\frac{x+1}{x-2} \\implies y(x-2) = x+1 \\implies yx - 2y = x + 1 \\implies x(y-1) = 2y + 1 \\implies x = \\frac{2y+1}{y-1}$. Hence $f^{-1}(x) = \\frac{2x+1}{x-1}$.',
    difficulty: 'Hard',
    formula: 'f^{-1}(x) = \\frac{2x+1}{x-1}',
  },
  {
    id: 'c11-ch8-q23',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'The graph of $y = f^{-1}(x)$ is the reflection of the graph of $y = f(x)$ across the line:',
    options: {
      A: '$y = x$',
      B: '$y = -x$',
      C: '$x$-axis ($y = 0$)',
      D: '$y$-axis ($x = 0$)'
    },
    correct_answer: 'A',
    explanation: 'Since finding the inverse interchanges $x$ and $y$, the geometric plot of $f^{-1}(x)$ is the mirror reflection across the line $y = x$.',
    difficulty: 'Easy',
    formula: '(a,b) \\in f \\iff (b,a) \\in f^{-1}',
  },
  {
    id: 'c11-ch8-q24',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'For any invertible function $f(x)$, the composition $(f \\circ f^{-1})(x)$ equals:',
    options: {
      A: '$x$ (the identity function $I(x)$)',
      B: '$1$',
      C: '$0$',
      D: '$f(x)$'
    },
    correct_answer: 'A',
    explanation: 'By definition of inverse functions, $(f \\circ f^{-1})(x) = f(f^{-1}(x)) = x$ for all $x$ in the domain of $f^{-1}$.',
    difficulty: 'Easy',
    formula: '(f \\circ f^{-1})(x) = x',
  },
  {
    id: 'c11-ch8-q25',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'The identity function on set $X$ is defined as $I_X(x) = x$. Its graph is a line passing through the origin at an angle of:',
    options: {
      A: '$45^\\circ$ with the positive $x$-axis',
      B: '$90^\\circ$',
      C: '$0^\\circ$',
      D: '$135^\\circ$'
    },
    correct_answer: 'A',
    explanation: '$y = x$ has slope $m = 1 = \\tan \\theta \\implies \\theta = 45^\\circ$.',
    difficulty: 'Easy',
    formula: 'y = x \\implies \\theta = 45^\\circ',
  },
  {
    id: 'c11-ch8-q26',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'The constant function $f(x) = c$ has a domain of $\\mathbb{R}$ and a range of:',
    options: {
      A: '$\\{c\\}$ (a single-element singleton set)',
      B: '$\\mathbb{R}$',
      C: '$[0, \\infty)$',
      D: '$\\{0\\}$'
    },
    correct_answer: 'A',
    explanation: 'Every input maps to the exact same value $c$, so the range consists solely of $\\{c\\}$.',
    difficulty: 'Easy',
    formula: '\\text{Range}(f) = \\{c\\}',
  },
  {
    id: 'c11-ch8-q27',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'What is the period of the sine function $f(x) = \\sin x$?',
    options: {
      A: '$2\\pi$',
      B: '$\\pi$',
      C: '$\\frac{\\pi}{2}$',
      D: '$4\\pi$'
    },
    correct_answer: 'A',
    explanation: '$\\sin(x + 2\\pi) = \\sin x$, and $2\\pi$ is the smallest positive value for which this holds.',
    difficulty: 'Easy',
    formula: 'T = 2\\pi',
  },
  {
    id: 'c11-ch8-q28',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'What is the period of $f(x) = \\tan x$?',
    options: {
      A: '$\\pi$',
      B: '$2\\pi$',
      C: '$\\frac{\\pi}{2}$',
      D: '$4\\pi$'
    },
    correct_answer: 'A',
    explanation: 'The tangent function repeats every $\\pi$ radians: $\\tan(x + \\pi) = \\tan x$, so its fundamental period is $\\pi$.',
    difficulty: 'Easy',
    formula: 'T(\\tan x) = \\pi',
  },

  // PART C — GRAPHS, TRANSFORMATIONS & SPECIAL FUNCTIONS (Q29 - Q38)
  {
    id: 'c11-ch8-q29',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'The graph of $y = f(x - 2)$ is obtained by shifting the graph of $y = f(x)$:',
    options: {
      A: '2 units to the RIGHT',
      B: '2 units to the LEFT',
      C: '2 units UP',
      D: '2 units DOWN'
    },
    correct_answer: 'A',
    explanation: 'Replacing $x$ by $x - c$ ($c > 0$) causes a horizontal translation of $c$ units to the right.',
    difficulty: 'Easy',
    formula: 'y = f(x - c) \\implies \\text{Right Shift by } c',
  },
  {
    id: 'c11-ch8-q30',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'The graph of $y = f(x) + 4$ is obtained by shifting the graph of $y = f(x)$:',
    options: {
      A: '4 units vertically UP',
      B: '4 units vertically DOWN',
      C: '4 units RIGHT',
      D: '4 units LEFT'
    },
    correct_answer: 'A',
    explanation: 'Adding a positive constant to the function output shifts the graph vertically upward by that amount.',
    difficulty: 'Easy',
    formula: 'y = f(x) + k \\implies \\text{Upward Shift}',
  },
  {
    id: 'c11-ch8-q31',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'The graph of $y = -f(x)$ represents the reflection of $y = f(x)$ across the:',
    options: {
      A: '$x$-axis',
      B: '$y$-axis',
      C: 'Line $y = x$',
      D: 'Origin $(0,0)$'
    },
    correct_answer: 'A',
    explanation: 'Multiplying the overall function by $-1$ flips the sign of every $y$-coordinate, reflecting it across the $x$-axis.',
    difficulty: 'Easy',
    formula: 'y = -f(x) \\implies \\text{Reflection in } x\\text{-axis}',
  },
  {
    id: 'c11-ch8-q32',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'The graph of $y = f(-x)$ represents the reflection of $y = f(x)$ across the:',
    options: {
      A: '$y$-axis',
      B: '$x$-axis',
      C: 'Line $y = x$',
      D: 'Origin $(0,0)$'
    },
    correct_answer: 'A',
    explanation: 'Replacing $x$ with $-x$ negates the $x$-coordinates, reflecting the graph across the $y$-axis.',
    difficulty: 'Easy',
    formula: 'y = f(-x) \\implies \\text{Reflection in } y\\text{-axis}',
  },
  {
    id: 'c11-ch8-q33',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'The vertical line test states that a curve in the Cartesian plane is the graph of a function if and only if:',
    options: {
      A: 'Every vertical line intersects the curve at most ONCE',
      B: 'Every horizontal line intersects at most once',
      C: 'It passes through the origin',
      D: 'The curve is continuous'
    },
    correct_answer: 'A',
    explanation: 'The Vertical Line Test confirms single-valuedness: no input $x$ can have more than one output $y$.',
    difficulty: 'Easy',
    formula: '\\text{Vertical line intersects at most at 1 point}',
  },
  {
    id: 'c11-ch8-q34',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'The Horizontal Line Test on the graph of a function $f(x)$ is used to determine whether $f$ is:',
    options: {
      A: 'One-to-One (Invertible)',
      B: 'Continuous',
      C: 'Even',
      D: 'Differentiable'
    },
    correct_answer: 'A',
    explanation: 'If every horizontal line crosses the graph at most once, each $y$ has at most one pre-image $x$, proving $f$ is one-to-one (injective).',
    difficulty: 'Easy',
    formula: '\\text{Horizontal line test} \\implies \\text{Injective (1-1)}',
  },
  {
    id: 'c11-ch8-q35',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'The domain of the function $f(x) = \\log_a(x)$ (where $a > 0, a \\ne 1$) is:',
    options: {
      A: '$(0, \\infty)$',
      B: '$[0, \\infty)$',
      C: '$\\mathbb{R}$',
      D: '$(-\\infty, 0)$'
    },
    correct_answer: 'A',
    explanation: 'Logarithms are only defined for strictly positive real arguments: $x > 0$, or $(0, \\infty)$.',
    difficulty: 'Easy',
    formula: '\\text{Dom}(\\log x) = (0, \\infty)',
  },
  {
    id: 'c11-ch8-q36',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'The range of the exponential function $f(x) = a^x$ (where $a > 1$) for $x \\in \\mathbb{R}$ is:',
    options: {
      A: '$(0, \\infty)$',
      B: '$[0, \\infty)$',
      C: '$\\mathbb{R}$',
      D: '$[1, \\infty)$'
    },
    correct_answer: 'A',
    explanation: 'For any real $x$, $a^x > 0$, so the range is all strictly positive reals $(0, \\infty)$.',
    difficulty: 'Easy',
    formula: '\\text{Range}(a^x) = (0, \\infty)',
  },
  {
    id: 'c11-ch8-q37',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'The signum function $\\text{sgn}(x)$ defined as $\\frac{|x|}{x}$ for $x \\ne 0$ and $0$ for $x = 0$ has range:',
    options: {
      A: '$\\{-1, 0, 1\\}$',
      B: '$[-1, 1]$',
      C: '$\\{0, 1\\}$',
      D: '$\\mathbb{R}$'
    },
    correct_answer: 'A',
    explanation: '$\\text{sgn}(x) = 1$ for $x > 0$, $0$ for $x = 0$, and $-1$ for $x < 0$. The range is $\\{-1, 0, 1\\}$.',
    difficulty: 'Medium',
    formula: '\\text{Range}(\\text{sgn}) = \\{-1, 0, 1\\}',
  },
  {
    id: 'c11-ch8-q38',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'The greatest integer function $f(x) = [x]$ (or $\\lfloor x \\rfloor$) assigns to each real number $x$ the largest integer $\\le x$. Its range is:',
    options: {
      A: '$\\mathbb{Z}$ (the set of all integers)',
      B: '$\\mathbb{R}$ (all real numbers)',
      C: '$\\mathbb{N}$ (natural numbers)',
      D: '$[0, \\infty)$'
    },
    correct_answer: 'A',
    explanation: 'By definition, the output is always an integer, so the range is $\\mathbb{Z}$.',
    difficulty: 'Easy',
    formula: '\\text{Range}(\\lfloor x \\rfloor) = \\mathbb{Z}',
  },

  // PART D — ADVANCED DOMAIN, RANGE & ALGEBRA OF FUNCTIONS (Q39 - Q50)
  {
    id: 'c11-ch8-q39',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'What is the domain of $f(x) = \\frac{1}{\\sqrt{9 - x^2}}$ in $\\mathbb{R}$?',
    options: {
      A: '$(-3, 3)$',
      B: '$[-3, 3]$',
      C: '$(-\\infty, -3) \\cup (3, \\infty)$',
      D: '$\\mathbb{R} \\setminus \\{-3, 3\\}$'
    },
    correct_answer: 'A',
    explanation: 'The radicand must be strictly positive since it is in the denominator: $9 - x^2 > 0 \\implies x^2 < 9 \\implies -3 < x < 3$, or open interval $(-3, 3)$.',
    difficulty: 'Medium',
    formula: '9 - x^2 > 0 \\implies x \\in (-3, 3)',
  },
  {
    id: 'c11-ch8-q40',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'What is the domain of $f(x) = \\sqrt{x^2 - 5x + 6}$?',
    options: {
      A: '$(-\\infty, 2] \\cup [3, \\infty)$',
      B: '$[2, 3]$',
      C: '$(2, 3)$',
      D: '$(-\\infty, 2) \\cup (3, \\infty)$'
    },
    correct_answer: 'A',
    explanation: '$x^2 - 5x + 6 \\ge 0 \\implies (x - 2)(x - 3) \\ge 0$. The product is $\\ge 0$ when $x \\le 2$ or $x \\ge 3$.',
    difficulty: 'Hard',
    formula: '(x-2)(x-3) \\ge 0 \\implies x \\in (-\\infty, 2] \\cup [3, \\infty)',
  },
  {
    id: 'c11-ch8-q41',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'If $f(x) = x^2$ and $g(x) = \\sqrt{x}$, then $(f \\circ g)(x)$ for $x \\ge 0$ is:',
    options: {
      A: '$x$',
      B: '$x^2$',
      C: '$\\sqrt{x}$',
      D: '$|x|$'
    },
    correct_answer: 'A',
    explanation: '$(f \\circ g)(x) = f(\\sqrt{x}) = (\\sqrt{x})^2 = x$ for all $x \\ge 0$.',
    difficulty: 'Easy',
    formula: '(f \\circ g)(x) = x',
  },
  {
    id: 'c11-ch8-q42',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'If $f(x) = \\frac{1}{x}$, then the composite $(f \\circ f)(x)$ for $x \\ne 0$ is:',
    options: {
      A: '$x$',
      B: '$\\frac{1}{x^2}$',
      C: '$1$',
      D: '$x^2$'
    },
    correct_answer: 'A',
    explanation: '$(f \\circ f)(x) = f(1/x) = \\frac{1}{1/x} = x$. Thus $f$ is its own inverse (an involution).',
    difficulty: 'Easy',
    formula: '(f \\circ f)(x) = x',
  },
  {
    id: 'c11-ch8-q43',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'If $f(x) = e^x$, what is $f^{-1}(x)$?',
    options: {
      A: '$\\ln x$ (for $x > 0$)',
      B: '$e^{-x}$',
      C: '$\\frac{1}{e^x}$',
      D: '$x$'
    },
    correct_answer: 'A',
    explanation: 'The natural logarithm $\\ln x$ is the exact inverse function of the exponential function $e^x$.',
    difficulty: 'Easy',
    formula: 'f^{-1}(x) = \\ln x',
  },
  {
    id: 'c11-ch8-q44',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'The graph of a quadratic polynomial function $f(x) = ax^2 + bx + c$ ($a \\ne 0$) is a curve called a:',
    options: {
      A: 'Parabola',
      B: 'Hyperbola',
      C: 'Ellipse',
      D: 'Circle'
    },
    correct_answer: 'A',
    explanation: 'The graph of every quadratic equation in one variable is a parabola opening upward ($a > 0$) or downward ($a < 0$).',
    difficulty: 'Easy',
    formula: 'y = ax^2 + bx + c \\implies \\text{Parabola}',
  },
  {
    id: 'c11-ch8-q45',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'The vertex of the parabola $y = ax^2 + bx + c$ has $x$-coordinate:',
    options: {
      A: '$x = -\\frac{b}{2a}$',
      B: '$x = \\frac{b}{2a}$',
      C: '$x = -\\frac{b}{a}$',
      D: '$x = -\\frac{c}{a}$'
    },
    correct_answer: 'A',
    explanation: 'By completing the square or setting derivative $2ax + b = 0$, the vertex occurs at $x = -\\frac{b}{2a}$.',
    difficulty: 'Medium',
    formula: 'x_v = -\\frac{b}{2a}',
  },
  {
    id: 'c11-ch8-q46',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'If $f(x) = \\frac{x - 1}{x + 1}$, then $f(1/x)$ is equal to:',
    options: {
      A: '$-f(x)$',
      B: '$f(x)$',
      C: '$\\frac{1}{f(x)}$',
      D: '$f(-x)$'
    },
    correct_answer: 'A',
    explanation: '$f(1/x) = \\frac{1/x - 1}{1/x + 1} = \\frac{1 - x}{1 + x} = -\\frac{x - 1}{x + 1} = -f(x)$.',
    difficulty: 'Hard',
    formula: 'f(1/x) = -f(x)',
  },
  {
    id: 'c11-ch8-q47',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'The function $f(x) = \\sqrt{x^2}$ is mathematically equivalent to:',
    options: {
      A: '$|x|$',
      B: '$x$',
      C: '$\\pm x$',
      D: '$-x$'
    },
    correct_answer: 'A',
    explanation: 'By definition of principal square root, $\\sqrt{x^2} = |x|$ for all $x \\in \\mathbb{R}$.',
    difficulty: 'Easy',
    formula: '\\sqrt{x^2} = |x|',
  },
  {
    id: 'c11-ch8-q48',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'If $f(x) = \\ln\\left(\\frac{1-x}{1+x}\\right)$, then $f(x)$ is:',
    options: {
      A: 'An odd function',
      B: 'An even function',
      C: 'Neither even nor odd',
      D: 'A constant function'
    },
    correct_answer: 'A',
    explanation: '$f(-x) = \\ln\\left(\\frac{1+x}{1-x}\\right) = \\ln\\left(\\frac{1-x}{1+x}\\right)^{-1} = -\\ln\\left(\\frac{1-x}{1+x}\\right) = -f(x)$. Therefore $f(x)$ is odd.',
    difficulty: 'Hard',
    formula: 'f(-x) = -f(x)',
  },
  {
    id: 'c11-ch8-q49',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'What is the domain of $f(x) = \\sqrt{x} + \\sqrt{4 - x}$?',
    options: {
      A: '$[0, 4]$',
      B: '$[0, \\infty)$',
      C: '$(-\\infty, 4]$',
      D: '$(0, 4)$'
    },
    correct_answer: 'A',
    explanation: '$x \\ge 0$ and $4 - x \\ge 0 \\implies x \\le 4$. The intersection is $[0, 4]$.',
    difficulty: 'Medium',
    formula: '\\text{Dom}(f) = [0, \\infty) \\cap (-\\infty, 4] = [0, 4]',
  },
  {
    id: 'c11-ch8-q50',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch8',
    question: 'The range of the rational function $f(x) = \\frac{x^2}{1 + x^2}$ for $x \\in \\mathbb{R}$ is:',
    options: {
      A: '$[0, 1)$',
      B: '$[0, 1]$',
      C: '$(0, 1)$',
      D: '$[0, \\infty)$'
    },
    correct_answer: 'A',
    explanation: 'Since $x^2 \\ge 0$, $f(x) \\ge 0$ with minimum $f(0) = 0$. Since $x^2 < 1 + x^2$, $f(x) < 1$ for all $x \\in \\mathbb{R}$. As $x \\to \\infty$, $f(x) \\to 1$. Hence range is $[0, 1)$.',
    difficulty: 'Hard',
    formula: '\\text{Range}(f) = [0, 1)',
  },
];

export const C11_CH8_QUESTIONS: Question[] = [
  ...C11_CH8_NORMAL_QUESTIONS,
  ...C11_CH8_ADVANCED_QUESTIONS,
];

