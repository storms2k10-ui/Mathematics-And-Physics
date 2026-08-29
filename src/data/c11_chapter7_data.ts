import { Question } from '../types';
import { C11_CH7_ADVANCED_PART1 } from './c11_ch7_advanced_part1';
import { C11_CH7_ADVANCED_PART2 } from './c11_ch7_advanced_part2';
import { C11_CH7_ADVANCED_PART3 } from './c11_ch7_advanced_part3';
import { C11_CH7_ADVANCED_PART4 } from './c11_ch7_advanced_part4';

export const C11_CH7_ADVANCED_QUESTIONS: Question[] = [
  ...C11_CH7_ADVANCED_PART1,
  ...C11_CH7_ADVANCED_PART2,
  ...C11_CH7_ADVANCED_PART3,
  ...C11_CH7_ADVANCED_PART4,
];

export const C11_CH7_NORMAL_QUESTIONS: Question[] = [
  // =========================================================================
  // CLASS 11 — CHAPTER 7: MATHEMATICAL INDUCTION & BINOMIAL THEOREM (50 MCQs)
  // =========================================================================

  // PART A — MATHEMATICAL INDUCTION BASICS & PROPOSITIONS (Q1 - Q12)
  {
    id: 'c11-ch7-q1',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'The Principle of Mathematical Induction is used to establish the validity of mathematical propositions for all:',
    options: {
      A: 'Positive integers (natural numbers $n \\in \\mathbb{N}$)',
      B: 'All real numbers $x \\in \\mathbb{R}$',
      C: 'All complex numbers $z \\in \\mathbb{C}$',
      D: 'Only negative integers'
    },
    correct_answer: 'A',
    explanation: 'Mathematical Induction is a deductive proof technique specifically designed for statements indexed by natural numbers ($n = 1, 2, 3, \\dots$).',
    difficulty: 'Easy',
    formula: 'P(n) \\text{ for all } n \\in \\mathbb{N}',
  },
  {
    id: 'c11-ch7-q2',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'In Mathematical Induction, the first step which verifies the truth of the proposition $P(1)$ for the initial base case is known as:',
    options: {
      A: 'Basis Step (Initial Step)',
      B: 'Inductive Step',
      C: 'Contradiction Step',
      D: 'Recursive Hypothesis'
    },
    correct_answer: 'A',
    explanation: 'The Basis Step verifies that $P(n_0)$ (typically $n_0 = 1$) is true, anchoring the induction.',
    difficulty: 'Easy',
    formula: 'P(1) \\text{ is true}',
  },
  {
    id: 'c11-ch7-q3',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'What is the standard closed-form sum $1 + 3 + 5 + \\dots + (2n-1)$ of the first $n$ odd natural numbers?',
    options: {
      A: '$n^2$',
      B: '$\\frac{n(n+1)}{2}$',
      C: '$n(n+1)$',
      D: '$2n^2 - 1$'
    },
    correct_answer: 'A',
    explanation: 'By induction or arithmetic sum: $S_n = \\frac{n}{2}[1 + (2n-1)] = \\frac{n(2n)}{2} = n^2$.',
    difficulty: 'Easy',
    formula: '\\sum_{k=1}^n (2k-1) = n^2',
  },
  {
    id: 'c11-ch7-q4',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'The expression $n^3 - n$ is divisible by which integer for all natural numbers $n \\in \\mathbb{N}$?',
    options: {
      A: '$6$',
      B: '$8$',
      C: '$12$',
      D: '$4$'
    },
    correct_answer: 'A',
    explanation: '$n^3 - n = n(n^2 - 1) = (n-1)n(n+1)$. The product of any three consecutive integers is always divisible by $3! = 6$.',
    difficulty: 'Easy',
    formula: 'n(n-1)(n+1) = 6k',
  },
  {
    id: 'c11-ch7-q5',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'For all $n \\in \\mathbb{N}$, $4^n - 1$ is always divisible by:',
    options: {
      A: '$3$',
      B: '$5$',
      C: '$7$',
      D: '$2$'
    },
    correct_answer: 'A',
    explanation: '$4^n - 1 = (3+1)^n - 1 = (1 + 3m) - 1 = 3m$, so it is always divisible by 3.',
    difficulty: 'Easy',
    formula: '4^n - 1 = 3k',
  },
  {
    id: 'c11-ch7-q6',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'For all $n \\ge 4$, which inequality holds true between $2^n$ and $n!$?',
    options: {
      A: '$n! > 2^n$',
      B: '$2^n > n!$',
      C: '$2^n = n!$',
      D: '$n! < 2^{n-1}$'
    },
    correct_answer: 'A',
    explanation: 'For $n=4$: $4! = 24 > 2^4 = 16$. By induction, multiplying by $(k+1) > 2$ ensures $n! > 2^n$ for all $n \\ge 4$.',
    difficulty: 'Medium',
    formula: 'n! > 2^n \\quad \\forall n \\ge 4',
  },
  {
    id: 'c11-ch7-q7',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'In the Binomial Expansion of $(a + b)^n$ where $n$ is a positive integer, the total number of terms in the expansion is:',
    options: {
      A: '$n + 1$',
      B: '$n$',
      C: '$n - 1$',
      D: '$2n$'
    },
    correct_answer: 'A',
    explanation: 'The expansion starts with $r = 0$ and ends at $r = n$, giving a total of $n + 1$ terms.',
    difficulty: 'Easy',
    formula: '\\text{Number of terms} = n + 1',
  },
  {
    id: 'c11-ch7-q8',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'In the expansion $(a + b)^n$, what is the sum of exponents (powers) of $a$ and $b$ in every term?',
    options: {
      A: '$n$',
      B: '$n + 1$',
      C: '$2n$',
      D: '$0$'
    },
    correct_answer: 'A',
    explanation: 'In the general term $T_{r+1} = {^nC_r} a^{n-r} b^r$, the sum of exponents is $(n-r) + r = n$.',
    difficulty: 'Easy',
    formula: '(n-r) + r = n',
  },
  {
    id: 'c11-ch7-q9',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'What is the general $(r+1)^{\\text{th}}$ term $T_{r+1}$ in the binomial expansion of $(a + b)^n$?',
    options: {
      A: '$^nC_r a^{n-r} b^r$',
      B: '$^nC_r a^r b^{n-r}$',
      C: '$^nC_{r+1} a^{n-r} b^{r+1}$',
      D: '$^nC_{r-1} a^{n-r} b^r$'
    },
    correct_answer: 'A',
    explanation: 'The standard general term formula is $T_{r+1} = {^nC_r} a^{n-r} b^r$.',
    difficulty: 'Easy',
    formula: 'T_{r+1} = {^nC_r} a^{n-r} b^r',
  },
  {
    id: 'c11-ch7-q10',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'Find the $4^{\\text{th}}$ term in the expansion of $(x - 2y)^6$:',
    options: {
      A: '$-160 x^3 y^3$',
      B: '$160 x^3 y^3$',
      C: '$-20 x^3 y^3$',
      D: '$-80 x^3 y^3$'
    },
    correct_answer: 'A',
    explanation: 'For $4^{\\text{th}}$ term, $r = 3$: $T_4 = {^6C_3} x^{6-3} (-2y)^3 = 20 \\times x^3 \\times (-8y^3) = -160 x^3 y^3$.',
    difficulty: 'Medium',
    formula: 'T_4 = {^6C_3} x^3 (-2y)^3 = -160 x^3 y^3',
  },
  {
    id: 'c11-ch7-q11',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'If $n$ is an EVEN positive integer, how many middle terms exist in the expansion of $(a + b)^n$?',
    options: {
      A: 'Exactly 1 middle term at position $\\left(\\frac{n}{2} + 1\\right)$',
      B: '2 middle terms',
      C: '$n$ middle terms',
      D: 'None'
    },
    correct_answer: 'A',
    explanation: 'When $n$ is even, total terms $n+1$ is odd, so there is exactly 1 middle term: $T_{\\frac{n}{2} + 1}$.',
    difficulty: 'Easy',
    formula: 'T_{\\frac{n}{2} + 1}',
  },
  {
    id: 'c11-ch7-q12',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'If $n$ is an ODD positive integer, the expansion $(a + b)^n$ contains:',
    options: {
      A: '2 middle terms at $\\frac{n+1}{2}$ and $\\frac{n+3}{2}$',
      B: '1 middle term at $\\frac{n+1}{2}$',
      C: '3 middle terms',
      D: '0 middle terms'
    },
    correct_answer: 'A',
    explanation: 'When $n$ is odd, the number of terms $n+1$ is even, yielding two central middle terms: $T_{\\frac{n+1}{2}}$ and $T_{\\frac{n+3}{2}}$.',
    difficulty: 'Easy',
    formula: 'T_{\\frac{n+1}{2}} \\text{ and } T_{\\frac{n+3}{2}}',
  },

  // PART B — BINOMIAL COEFFICIENTS & MIDDLE TERMS (Q13 - Q25)
  {
    id: 'c11-ch7-q13',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'Find the middle term in the expansion of $\\left(x + \\frac{1}{x}\\right)^{10}$:',
    options: {
      A: '$252$',
      B: '$210$',
      C: '$120$',
      D: '$252 x$'
    },
    correct_answer: 'A',
    explanation: 'Here $n=10$ (even). Middle term is $T_{10/2 + 1} = T_6 = {^{10}C_5} x^{10-5} \\left(\\frac{1}{x}\\right)^5 = {^{10}C_5} = 252$.',
    difficulty: 'Medium',
    formula: 'T_6 = {^{10}C_5} = 252',
  },
  {
    id: 'c11-ch7-q14',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'Find the term independent of $x$ (constant term) in the expansion of $\\left(2x + \\frac{1}{x}\\right)^6$:',
    options: {
      A: '$160$',
      B: '$20$',
      C: '$64$',
      D: '$320$'
    },
    correct_answer: 'A',
    explanation: '$T_{r+1} = {^6C_r} (2x)^{6-r} (x^{-1})^r = {^6C_r} 2^{6-r} x^{6-2r}$. For independent of $x$, $6-2r = 0 \\implies r = 3$. $T_4 = {^6C_3} 2^{3} = 20 \\times 8 = 160$.',
    difficulty: 'Medium',
    formula: 'T_4 = {^6C_3} 2^3 = 160',
  },
  {
    id: 'c11-ch7-q15',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'What is the term independent of $x$ in $\\left(x^2 - \\frac{1}{x}\\right)^9$?',
    options: {
      A: '$84$',
      B: '$-84$',
      C: '$126$',
      D: '$-126$'
    },
    correct_answer: 'A',
    explanation: '$T_{r+1} = {^9C_r} (x^2)^{9-r} (-x^{-1})^r = {^9C_r} (-1)^r x^{18-3r}$. Set $18-3r=0 \\implies r=6$. $T_7 = {^9C_6} (-1)^6 = {^9C_3} = \\frac{9 \\times 8 \\times 7}{6} = 84$.',
    difficulty: 'Hard',
    formula: 'r = 6 \\implies T_7 = {^9C_6} = 84',
  },
  {
    id: 'c11-ch7-q16',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'Find the coefficient of $x^7$ in the expansion of $\\left(x + \\frac{1}{x^2}\\right)^{10}$:',
    options: {
      A: '$10$',
      B: '$45$',
      C: '$120$',
      D: '$210$'
    },
    correct_answer: 'A',
    explanation: '$T_{r+1} = {^{10}C_r} x^{10-r} (x^{-2})^r = {^{10}C_r} x^{10-3r}$. Set $10-3r = 7 \\implies 3r = 3 \\implies r = 1$. Coefficient is $^{10}C_1 = 10$.',
    difficulty: 'Medium',
    formula: '10 - 3r = 7 \\implies r = 1 \\implies {^{10}C_1} = 10',
  },
  {
    id: 'c11-ch7-q17',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'What is the sum of all binomial coefficients in the expansion of $(1 + x)^n$?',
    options: {
      A: '$2^n$',
      B: '$2^{n-1}$',
      C: '$n!$',
      D: '$2^{n+1}$'
    },
    correct_answer: 'A',
    explanation: 'Substitute $x = 1$ into $(1+x)^n = C_0 + C_1 x + C_2 x^2 + \\dots + C_n x^n \\implies (1+1)^n = 2^n$.',
    difficulty: 'Easy',
    formula: 'C_0 + C_1 + C_2 + \\dots + C_n = 2^n',
  },
  {
    id: 'c11-ch7-q18',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'What is the value of $C_0 - C_1 + C_2 - C_3 + \\dots + (-1)^n C_n$?',
    options: {
      A: '$0$',
      B: '$1$',
      C: '$2^n$',
      D: '$(-1)^n$'
    },
    correct_answer: 'A',
    explanation: 'Substitute $x = -1$ into $(1+x)^n \\implies (1-1)^n = 0^n = 0$.',
    difficulty: 'Easy',
    formula: '\\sum_{r=0}^n (-1)^r {^nC_r} = 0',
  },
  {
    id: 'c11-ch7-q19',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'Compute the value of $C_1 + 2C_2 + 3C_3 + \\dots + nC_n$:',
    options: {
      A: '$n \\cdot 2^{n-1}$',
      B: '$n \\cdot 2^n$',
      C: '$2^{n-1}$',
      D: '$\\frac{n(n+1)}{2}$'
    },
    correct_answer: 'A',
    explanation: 'Differentiating $(1+x)^n = \\sum C_r x^r$ with respect to $x$ gives $n(1+x)^{n-1} = \\sum r C_r x^{r-1}$. Setting $x = 1$ gives $\\sum r C_r = n 2^{n-1}$.',
    difficulty: 'Hard',
    formula: '\\sum_{r=1}^n r {^nC_r} = n 2^{n-1}',
  },
  {
    id: 'c11-ch7-q20',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'The greatest binomial coefficient in $(1 + x)^8$ is:',
    options: {
      A: '$^8C_4 = 70$',
      B: '$^8C_3 = 56$',
      C: '$^8C_5 = 56$',
      D: '$^8C_8 = 1$'
    },
    correct_answer: 'A',
    explanation: 'For even $n$, the maximum binomial coefficient is at the center $r = n/2 = 4$: $^8C_4 = \\frac{8 \\times 7 \\times 6 \\times 5}{24} = 70$.',
    difficulty: 'Easy',
    formula: '^8C_4 = 70',
  },
  {
    id: 'c11-ch7-q21',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'If the coefficients of $x^2$ and $x^3$ in $(1 + ax)^6$ are equal, what is the value of non-zero $a$?',
    options: {
      A: '$\\frac{3}{4}$',
      B: '$\\frac{4}{3}$',
      C: '$1$',
      D: '$\\frac{1}{2}$'
    },
    correct_answer: 'A',
    explanation: 'Coefficient of $x^2$ is $^6C_2 a^2 = 15 a^2$. Coefficient of $x^3$ is $^6C_3 a^3 = 20 a^3$. $15 a^2 = 20 a^3 \\implies 20a = 15 \\implies a = \\frac{15}{20} = \\frac{3}{4}$.',
    difficulty: 'Hard',
    formula: '15a^2 = 20a^3 \\implies a = \\frac{3}{4}',
  },
  {
    id: 'c11-ch7-q22',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'In the binomial expansion of $(1 + x)^{2n}$, the middle term is:',
    options: {
      A: '$^{2n}C_n x^n$',
      B: '$^{2n}C_{n-1} x^{n-1}$',
      C: '$^{2n}C_{n+1} x^{n+1}$',
      D: '$^nC_{n/2} x^n$'
    },
    correct_answer: 'A',
    explanation: 'Since $2n$ is even, the single middle term is $T_{2n/2 + 1} = T_{n+1} = {^{2n}C_n} x^n$.',
    difficulty: 'Medium',
    formula: 'T_{n+1} = {^{2n}C_n} x^n',
  },
  {
    id: 'c11-ch7-q23',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'What is the sum of odd binomial coefficients $C_1 + C_3 + C_5 + \\dots$ for $(1 + x)^n$?',
    options: {
      A: '$2^{n-1}$',
      B: '$2^n$',
      C: '$2^{n+1}$',
      D: '$n$'
    },
    correct_answer: 'A',
    explanation: 'The sum of odd coefficients is exactly half of the total sum $2^n$, so it equals $2^{n-1}$.',
    difficulty: 'Easy',
    formula: 'C_1 + C_3 + C_5 + \\dots = 2^{n-1}',
  },
  {
    id: 'c11-ch7-q24',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'Evaluate $(101)^3$ using the binomial theorem $(100 + 1)^3$:',
    options: {
      A: '$1030301$',
      B: '$1030300$',
      C: '$1020101$',
      D: '$1030001$'
    },
    correct_answer: 'A',
    explanation: '$(100+1)^3 = 100^3 + 3(100)^2(1) + 3(100)(1)^2 + 1^3 = 1000000 + 30000 + 300 + 1 = 1030301$.',
    difficulty: 'Easy',
    formula: '(100+1)^3 = 1030301',
  },
  {
    id: 'c11-ch7-q25',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'The number of terms in the expansion of $(a + b + c)^n$ is:',
    options: {
      A: '$\\frac{(n+1)(n+2)}{2}$',
      B: '$n+1$',
      C: '$3n$',
      D: '$(n+1)^2$'
    },
    correct_answer: 'A',
    explanation: 'For a trinomial $(a+b+c)^n$, the number of non-negative integer solutions to $i+j+k=n$ is $^{n+3-1}C_{3-1} = {^{n+2}C_2} = \\frac{(n+1)(n+2)}{2}$.',
    difficulty: 'Hard',
    formula: '\\text{Terms} = \\frac{(n+1)(n+2)}{2}',
  },

  // PART C — BINOMIAL THEOREM FOR ANY RATIONAL INDEX (Q26 - Q38)
  {
    id: 'c11-ch7-q26',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'The binomial expansion of $(1 + x)^n$ where $n$ is negative or fractional is valid ONLY when:',
    options: {
      A: '$|x| < 1$',
      B: '$|x| > 1$',
      C: '$x = 1$',
      D: '$x \\in \\mathbb{R}$'
    },
    correct_answer: 'A',
    explanation: 'For an infinite binomial series (where $n \\notin \\mathbb{N}$), convergence requires the condition $|x| < 1$, i.e., $-1 < x < 1$.',
    difficulty: 'Medium',
    formula: '|x| < 1',
  },
  {
    id: 'c11-ch7-q27',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'The number of terms in the expansion of $(1 + x)^{-1}$ for $|x| < 1$ is:',
    options: {
      A: 'Infinite',
      B: '$1$',
      C: '$2$',
      D: 'Zero'
    },
    correct_answer: 'A',
    explanation: 'When the exponent is negative or fractional, the expansion is an infinite series consisting of infinitely many terms.',
    difficulty: 'Easy',
    formula: '(1+x)^{-1} = 1 - x + x^2 - x^3 + \\dots \\; (\\infty \\text{ terms})',
  },
  {
    id: 'c11-ch7-q28',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'The expansion of $(1 - x)^{-1}$ for $|x| < 1$ is given by:',
    options: {
      A: '$1 + x + x^2 + x^3 + \\dots$',
      B: '$1 - x + x^2 - x^3 + \\dots$',
      C: '$1 + 2x + 3x^2 + \\dots$',
      D: '$1 - 2x + 3x^2 - \\dots$'
    },
    correct_answer: 'A',
    explanation: '$(1-x)^{-1} = 1 + (-1)(-x) + \\frac{(-1)(-2)}{2!} (-x)^2 + \\dots = 1 + x + x^2 + x^3 + \\dots$.',
    difficulty: 'Easy',
    formula: '(1-x)^{-1} = \\sum_{k=0}^\\infty x^k',
  },
  {
    id: 'c11-ch7-q29',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'The expansion of $(1 - x)^{-2}$ for $|x| < 1$ is:',
    options: {
      A: '$1 + 2x + 3x^2 + 4x^3 + \\dots$',
      B: '$1 - 2x + 3x^2 - 4x^3 + \\dots$',
      C: '$1 + x + x^2 + x^3 + \\dots$',
      D: '$1 - x + x^2 - x^3 + \\dots$'
    },
    correct_answer: 'A',
    explanation: '$(1-x)^{-2} = 1 + 2x + \\frac{(-2)(-3)}{2} x^2 + \\dots = 1 + 2x + 3x^2 + 4x^3 + \\dots$.',
    difficulty: 'Medium',
    formula: '(1-x)^{-2} = \\sum_{k=1}^\\infty k x^{k-1}',
  },
  {
    id: 'c11-ch7-q30',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'What is the expansion of $(1 + x)^{-2}$ for $|x| < 1$?',
    options: {
      A: '$1 - 2x + 3x^2 - 4x^3 + \\dots$',
      B: '$1 + 2x + 3x^2 + 4x^3 + \\dots$',
      C: '$1 - x + x^2 - x^3 + \\dots$',
      D: '$1 + x - x^2 + x^3 - \\dots$'
    },
    correct_answer: 'A',
    explanation: '$(1+x)^{-2} = 1 + (-2)x + \\frac{(-2)(-3)}{2} x^2 + \\frac{(-2)(-3)(-4)}{6} x^3 + \\dots = 1 - 2x + 3x^2 - 4x^3 + \\dots$.',
    difficulty: 'Medium',
    formula: '(1+x)^{-2} = 1 - 2x + 3x^2 - 4x^3 + \\dots',
  },
  {
    id: 'c11-ch7-q31',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'The first three terms in the expansion of $\\sqrt{1 + x} = (1 + x)^{1/2}$ are:',
    options: {
      A: '$1 + \\frac{1}{2}x - \\frac{1}{8}x^2$',
      B: '$1 + \\frac{1}{2}x + \\frac{1}{8}x^2$',
      C: '$1 - \\frac{1}{2}x + \\frac{1}{8}x^2$',
      D: '$1 + x + x^2$'
    },
    correct_answer: 'A',
    explanation: '$(1+x)^{1/2} = 1 + \\frac{1}{2}x + \\frac{(1/2)(1/2 - 1)}{2!} x^2 = 1 + \\frac{1}{2}x - \\frac{1}{8}x^2$.',
    difficulty: 'Medium',
    formula: '(1+x)^{1/2} = 1 + \\frac{x}{2} - \\frac{x^2}{8} + \\dots',
  },
  {
    id: 'c11-ch7-q32',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'The general $(r+1)^{\\text{th}}$ term in the expansion of $(1 + x)^n$ for any rational $n$ is:',
    options: {
      A: '$\\frac{n(n-1)(n-2)\\dots(n-r+1)}{r!} x^r$',
      B: '$\\frac{n!}{r!} x^r$',
      C: '$\\frac{n(n-1)\\dots(n-r)}{r!} x^r$',
      D: '$^nC_r x^{n-r}$'
    },
    correct_answer: 'A',
    explanation: 'For any index $n \\in \\mathbb{Q}$, $T_{r+1} = \\frac{n(n-1)(n-2)\\dots(n-r+1)}{r!} x^r$.',
    difficulty: 'Medium',
    formula: 'T_{r+1} = \\frac{n(n-1)\\dots(n-r+1)}{r!} x^r',
  },
  {
    id: 'c11-ch7-q33',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'To expand $(2 + x)^{-3}$ using the standard binomial theorem, we rewrite it as:',
    options: {
      A: '$2^{-3} \\left(1 + \\frac{x}{2}\\right)^{-3}$ valid for $|x| < 2$',
      B: '$2^{-3} (1 + x)^{-3}$ valid for $|x| < 1$',
      C: '$(1 + 2x)^{-3}$ valid for $|x| < \\frac{1}{2}$',
      D: '$8 (1 + x)^{-3}$'
    },
    correct_answer: 'A',
    explanation: 'Factoring out 2 gives $(2+x)^{-3} = 2^{-3}\\left(1 + \\frac{x}{2}\\right)^{-3} = \\frac{1}{8}\\left(1 + \\frac{x}{2}\\right)^{-3}$, which converges for $\\left|\\frac{x}{2}\\right| < 1 \\iff |x| < 2$.',
    difficulty: 'Hard',
    formula: '(a+x)^n = a^n \\left(1 + \\frac{x}{a}\\right)^n',
  },
  {
    id: 'c11-ch7-q34',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'Approximate $\\sqrt{99}$ to two decimal places using the binomial theorem:',
    options: {
      A: '$9.95$',
      B: '$9.90$',
      C: '$9.85$',
      D: '$9.99$'
    },
    correct_answer: 'A',
    explanation: '$\\sqrt{99} = (100 - 1)^{1/2} = 10(1 - 0.01)^{1/2} \\approx 10\\left(1 - \\frac{0.01}{2}\\right) = 10(1 - 0.005) = 10(0.995) = 9.95$.',
    difficulty: 'Medium',
    formula: '\\sqrt{99} \\approx 10(1 - 0.005) = 9.95',
  },
  {
    id: 'c11-ch7-q35',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'The sum of the series $1 + \\frac{1}{4} + \\frac{1 \\cdot 3}{4 \\cdot 8} + \\frac{1 \\cdot 3 \\cdot 5}{4 \\cdot 8 \\cdot 12} + \\dots$ is equal to:',
    options: {
      A: '$\\sqrt{2}$',
      B: '$\\frac{1}{\\sqrt{2}}$',
      C: '$2$',
      D: '$\\sqrt{3}$'
    },
    correct_answer: 'A',
    explanation: 'This matches the expansion of $(1 - x)^{-1/2}$ with $x = 1/2$: $(1 - 1/2)^{-1/2} = (1/2)^{-1/2} = \\sqrt{2}$.',
    difficulty: 'Hard',
    formula: '(1 - 1/2)^{-1/2} = \\sqrt{2}',
  },

  // PART D — ADVANCED BINOMIAL IDENTITIES & APPLICATIONS (Q36 - Q50)
  {
    id: 'c11-ch7-q36',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'If $x$ is so small that its square and higher powers can be neglected, then $\\frac{(1 - 3x)^{1/3}}{(1 + 2x)^2}$ is approximately:',
    options: {
      A: '$1 - 5x$',
      B: '$1 - x$',
      C: '$1 + 5x$',
      D: '$1 - 3x$'
    },
    correct_answer: 'A',
    explanation: '$(1 - 3x)^{1/3} \\approx 1 - x$ and $(1 + 2x)^{-2} \\approx 1 - 4x$. Product $\\approx (1-x)(1-4x) \\approx 1 - 5x$.',
    difficulty: 'Hard',
    formula: '(1-x)(1-4x) \\approx 1 - 5x',
  },
  {
    id: 'c11-ch7-q37',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'If $y = \\frac{1}{3} + \\frac{1 \\cdot 3}{3 \\cdot 6} + \\frac{1 \\cdot 3 \\cdot 5}{3 \\cdot 6 \\cdot 9} + \\dots$, then $y^2 + 2y$ equals:',
    options: {
      A: '$2$',
      B: '$1$',
      C: '$3$',
      D: '$0$'
    },
    correct_answer: 'A',
    explanation: '$1 + y = (1 - 2/3)^{-1/2} = (1/3)^{-1/2} = \\sqrt{3}$. Squaring both sides: $(1+y)^2 = 3 \\implies y^2 + 2y + 1 = 3 \\implies y^2 + 2y = 2$.',
    difficulty: 'Hard',
    formula: '(1+y)^2 = 3 \\implies y^2 + 2y = 2',
  },
  {
    id: 'c11-ch7-q38',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'The coefficient of $x^n$ in the expansion of $\\frac{1}{1 - 2x}$ for $|x| < \\frac{1}{2}$ is:',
    options: {
      A: '$2^n$',
      B: '$(-2)^n$',
      C: '$2^{n-1}$',
      D: '$1$'
    },
    correct_answer: 'A',
    explanation: '$\\frac{1}{1-2x} = (1-2x)^{-1} = 1 + (2x) + (2x)^2 + \\dots + (2x)^n + \\dots$. The coefficient of $x^n$ is $2^n$.',
    difficulty: 'Medium',
    formula: '(1-2x)^{-1} = \\sum_{n=0}^\\infty 2^n x^n',
  },
  {
    id: 'c11-ch7-q39',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'What is the coefficient of $x^r$ in $(1 - x)^{-n}$ for positive integer $n$?',
    options: {
      A: '$^{n+r-1}C_r$',
      B: '$^nC_r$',
      C: '$(-1)^r {^{n+r-1}C_r}$',
      D: '$^{n+r}C_r$'
    },
    correct_answer: 'A',
    explanation: 'By the negative binomial expansion, $(1-x)^{-n} = \\sum_{r=0}^\\infty {^{n+r-1}C_r} x^r$.',
    difficulty: 'Hard',
    formula: '[x^r](1-x)^{-n} = {^{n+r-1}C_r}',
  },
  {
    id: 'c11-ch7-q40',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'What is the sum $C_0 + \\frac{C_1}{2} + \\frac{C_2}{3} + \\dots + \\frac{C_n}{n+1}$?',
    options: {
      A: '$\\frac{2^{n+1} - 1}{n+1}$',
      B: '$\\frac{2^n - 1}{n+1}$',
      C: '$\\frac{2^{n+1}}{n+1}$',
      D: '$\\frac{2^n}{n}$'
    },
    correct_answer: 'A',
    explanation: 'Integrating $(1+x)^n$ from $0$ to $1$: $\\int_0^1 (1+x)^n dx = \\left[\\frac{(1+x)^{n+1}}{n+1}\\right]_0^1 = \\frac{2^{n+1} - 1}{n+1}$.',
    difficulty: 'Hard',
    formula: '\\sum_{r=0}^n \\frac{^nC_r}{r+1} = \\frac{2^{n+1}-1}{n+1}',
  },
  {
    id: 'c11-ch7-q41',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'The value of $(C_0)^2 + (C_1)^2 + (C_2)^2 + \\dots + (C_n)^2$ is equal to:',
    options: {
      A: '$^{2n}C_n$',
      B: '$2^{2n}$',
      C: '$2^n$',
      D: '$^{2n}C_{n-1}$'
    },
    correct_answer: 'A',
    explanation: 'Equating coefficients of $x^n$ in $(1+x)^n(x+1)^n = (1+x)^{2n}$ yields $\\sum_{r=0}^n (C_r)^2 = {^{2n}C_n} = \\frac{(2n)!}{(n!)^2}$.',
    difficulty: 'Hard',
    formula: '\\sum_{r=0}^n (C_r)^2 = {^{2n}C_n}',
  },
  {
    id: 'c11-ch7-q42',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'In the expansion of $\\left(x - \\frac{1}{x}\\right)^{2n}$, the middle term is:',
    options: {
      A: '$(-1)^n {^{2n}C_n}$',
      B: '$^{2n}C_n$',
      C: '$(-1)^{n+1} {^{2n}C_n}$',
      D: '$0$'
    },
    correct_answer: 'A',
    explanation: 'Middle term $T_{n+1} = {^{2n}C_n} x^{2n-n} (-x^{-1})^n = {^{2n}C_n} x^n (-1)^n x^{-n} = (-1)^n {^{2n}C_n}$.',
    difficulty: 'Medium',
    formula: 'T_{n+1} = (-1)^n {^{2n}C_n}',
  },
  {
    id: 'c11-ch7-q43',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'If $n$ is a positive integer, then $(1 + x)^n > 1 + nx$ for all $x > 0$. This famous result is called:',
    options: {
      A: 'Bernoulli’s Inequality',
      B: 'Cauchy-Schwarz Inequality',
      C: 'Triangle Inequality',
      D: 'Euler’s Inequality'
    },
    correct_answer: 'A',
    explanation: 'Bernoulli’s Inequality states $(1+x)^n \\ge 1+nx$ for all integer $n \\ge 1$ and real $x > -1$.',
    difficulty: 'Easy',
    formula: '(1+x)^n \\ge 1+nx',
  },
  {
    id: 'c11-ch7-q44',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'Find the $5^{\\text{th}}$ term from the END in the expansion of $\\left(x - \\frac{1}{x}\\right)^{10}$:',
    options: {
      A: '$^{10}C_6 x^{-2}$',
      B: '$-{^{10}C_6} x^2$',
      C: '$^{10}C_4 x^2$',
      D: '$-{^{10}C_4} x^{-2}$'
    },
    correct_answer: 'A',
    explanation: 'The $k^{\\text{th}}$ term from the end of an $(n+1)$-term expansion is the $(n - k + 2)^{\\text{th}}$ term from the beginning. Here $10 - 5 + 2 = 7^{\\text{th}}$ term ($r = 6$): $T_7 = {^{10}C_6} x^4 (-1/x)^6 = {^{10}C_6} x^{-2} = 210 x^{-2}$.',
    difficulty: 'Hard',
    formula: '\\text{Term from end} = T_{n-k+2}',
  },
  {
    id: 'c11-ch7-q45',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'For what range of $x$ does the binomial series $(3 - 2x)^{-1/2}$ converge?',
    options: {
      A: '$|x| < \\frac{3}{2}$',
      B: '$|x| < \\frac{2}{3}$',
      C: '$|x| < 3$',
      D: '$|x| < 1$'
    },
    correct_answer: 'A',
    explanation: '$(3 - 2x)^{-1/2} = 3^{-1/2} \\left(1 - \\frac{2x}{3}\\right)^{-1/2}$. Series converges when $\\left|\\frac{2x}{3}\\right| < 1 \\implies |x| < \\frac{3}{2}$.',
    difficulty: 'Medium',
    formula: '\\left|\\frac{2x}{3}\\right| < 1 \\implies |x| < \\frac{3}{2}',
  },
  {
    id: 'c11-ch7-q46',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'What is the value of $\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n$?',
    options: {
      A: '$e \\approx 2.71828$',
      B: '$1$',
      C: '$\\infty$',
      D: '$0$'
    },
    correct_answer: 'A',
    explanation: 'Euler’s number $e$ is defined as the limiting value of the binomial expression $\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n = e$.',
    difficulty: 'Easy',
    formula: 'e = \\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n',
  },
  {
    id: 'c11-ch7-q47',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'The cube root of $1.003$ evaluated using binomial expansion up to first order approximation is:',
    options: {
      A: '$1.001$',
      B: '$1.003$',
      C: '$1.0003$',
      D: '$1.009$'
    },
    correct_answer: 'A',
    explanation: '$(1 + 0.003)^{1/3} \\approx 1 + \\frac{1}{3}(0.003) = 1 + 0.001 = 1.001$.',
    difficulty: 'Easy',
    formula: '(1+x)^{1/3} \\approx 1 + \\frac{x}{3} = 1.001',
  },
  {
    id: 'c11-ch7-q48',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'The coefficient of $x^4$ in the expansion of $(1 + 2x + 3x^2 + \\dots)^2$ is:',
    options: {
      A: '$35$',
      B: '$20$',
      C: '$15$',
      D: '$25$'
    },
    correct_answer: 'A',
    explanation: '$1 + 2x + 3x^2 + \\dots = (1-x)^{-2}$. Hence $(1 + 2x + 3x^2 + \\dots)^2 = [(1-x)^{-2}]^2 = (1-x)^{-4}$. Coefficient of $x^4$ in $(1-x)^{-4}$ is $^{4+4-1}C_4 = {^7C_4} = \\frac{7 \\times 6 \\times 5}{6} = 35$.',
    difficulty: 'Hard',
    formula: '[x^4](1-x)^{-4} = {^7C_4} = 35',
  },
  {
    id: 'c11-ch7-q49',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'If $C_r$ denotes $^nC_r$, then $\\frac{C_1}{C_0} + 2\\frac{C_2}{C_1} + 3\\frac{C_3}{C_2} + \\dots + n\\frac{C_n}{C_{n-1}}$ equals:',
    options: {
      A: '$\\frac{n(n+1)}{2}$',
      B: '$n^2$',
      C: '$n(n+1)$',
      D: '$\\frac{n(n-1)}{2}$'
    },
    correct_answer: 'A',
    explanation: 'Since $r \\frac{C_r}{C_{r-1}} = r \\frac{n-r+1}{r} = n - r + 1$. Summing from $r=1$ to $n$: $\\sum_{r=1}^n (n - r + 1) = n + (n-1) + \\dots + 1 = \\frac{n(n+1)}{2}$.',
    difficulty: 'Hard',
    formula: '\\sum_{r=1}^n r \\frac{C_r}{C_{r-1}} = \\frac{n(n+1)}{2}',
  },
  {
    id: 'c11-ch7-q50',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch7',
    question: 'The value of $2^{2n} - 1$ is always divisible by $3$ for all positive integers $n$. For $n = 1$, the value is:',
    options: {
      A: '$3$',
      B: '$1$',
      C: '$0$',
      D: '$6$'
    },
    correct_answer: 'A',
    explanation: 'For $n = 1$: $2^{2(1)} - 1 = 2^2 - 1 = 4 - 1 = 3$, which is divisible by 3.',
    difficulty: 'Easy',
    formula: '2^2 - 1 = 3',
  },
];

export const C11_CH7_QUESTIONS: Question[] = [
  ...C11_CH7_NORMAL_QUESTIONS,
  ...C11_CH7_ADVANCED_QUESTIONS,
];

