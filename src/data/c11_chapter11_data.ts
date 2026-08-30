import { Question } from '../types';
import { C11_CH11_ADVANCED_PART1 } from './c11_ch11_advanced_part1';
import { C11_CH11_ADVANCED_PART2 } from './c11_ch11_advanced_part2';
import { C11_CH11_ADVANCED_PART3 } from './c11_ch11_advanced_part3';
import { C11_CH11_ADVANCED_PART4 } from './c11_ch11_advanced_part4';

export const C11_CH11_ADVANCED_QUESTIONS: Question[] = [
  ...C11_CH11_ADVANCED_PART1,
  ...C11_CH11_ADVANCED_PART2,
  ...C11_CH11_ADVANCED_PART3,
  ...C11_CH11_ADVANCED_PART4,
].map((q) => ({
  ...q,
  difficulty_tier: 'Advanced' as const,
}));

export const C11_CH11_NORMAL_QUESTIONS: Question[] = [
  // =========================================================================
  // CLASS 11 — CHAPTER 11: APPLICATION OF TRIGONOMETRY (50 MCQs)
  // =========================================================================

  // PART A — LAW OF SINES, COSINES & TANGENTS (Q1 - Q14)
  {
    id: 'c11-ch11-q1',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'The Law of Sines for any triangle $\\triangle ABC$ with circumradius $R$ states that:',
    options: {
      A: '$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$',
      B: '$\\frac{a}{\\cos A} = \\frac{b}{\\cos B} = \\frac{c}{\\cos C} = 2R$',
      C: '$\\frac{\\sin A}{a} = \\frac{\\sin B}{b} = \\frac{\\sin C}{c} = R$',
      D: '$a\\sin A = b\\sin B = c\\sin C$'
    },
    correct_answer: 'A',
    explanation: 'The Law of Sines relates triangle side lengths to the sines of their opposite angles and the circumdiameter $2R$: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$.',
    difficulty: 'Easy',
    formula: '\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R',
  },
  {
    id: 'c11-ch11-q2',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'The Law of Cosines for side $a$ in $\\triangle ABC$ is:',
    options: {
      A: '$a^2 = b^2 + c^2 - 2bc\\cos A$',
      B: '$a^2 = b^2 + c^2 + 2bc\\cos A$',
      C: '$a^2 = b^2 - c^2 - 2bc\\cos A$',
      D: '$a = b\\cos C + c\\cos B$'
    },
    correct_answer: 'A',
    explanation: 'The Law of Cosines expresses side $a$ as $a^2 = b^2 + c^2 - 2bc\\cos A$.',
    difficulty: 'Easy',
    formula: 'a^2 = b^2 + c^2 - 2bc\\cos A',
  },
  {
    id: 'c11-ch11-q3',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'From the Law of Cosines, $\\cos A$ can be written as:',
    options: {
      A: '$\\frac{b^2 + c^2 - a^2}{2bc}$',
      B: '$\\frac{a^2 + b^2 - c^2}{2ab}$',
      C: '$\\frac{a^2 + c^2 - b^2}{2ac}$',
      D: '$\\frac{b^2 + c^2 + a^2}{2bc}$'
    },
    correct_answer: 'A',
    explanation: 'Rearranging $a^2 = b^2 + c^2 - 2bc\\cos A$ gives $\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$.',
    difficulty: 'Easy',
    formula: '\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}',
  },
  {
    id: 'c11-ch11-q4',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'The Projection Law for side $a$ in any triangle $\\triangle ABC$ is:',
    options: {
      A: '$a = b\\cos C + c\\cos B$',
      B: '$a = b\\sin C + c\\sin B$',
      C: '$a = b\\cos B + c\\cos C$',
      D: '$a = b\\cos A + c\\cos A$'
    },
    correct_answer: 'A',
    explanation: 'The projection of side $b$ and side $c$ onto the base line gives $a = b\\cos C + c\\cos B$.',
    difficulty: 'Easy',
    formula: 'a = b\\cos C + c\\cos B',
  },
  {
    id: 'c11-ch11-q5',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'The Law of Tangents (Napier’s Analogies) states that $\\tan\\left(\\frac{A-B}{2}\\right)$ is equal to:',
    options: {
      A: '$\\frac{a-b}{a+b} \\cot\\left(\\frac{C}{2}\\right)$',
      B: '$\\frac{a+b}{a-b} \\tan\\left(\\frac{C}{2}\\right)$',
      C: '$\\frac{a-b}{a+b} \\tan\\left(\\frac{C}{2}\\right)$',
      D: '$\\frac{a-b}{a+b} \\sin\\left(\\frac{C}{2}\\right)$'
    },
    correct_answer: 'A',
    explanation: 'The Law of Tangents is $\\frac{a-b}{a+b} = \\frac{\\tan(\\frac{A-B}{2})}{\\tan(\\frac{A+B}{2})}$. Since $\\tan(\\frac{A+B}{2}) = \\cot(\\frac{C}{2})$, $\\tan\\left(\\frac{A-B}{2}\\right) = \\frac{a-b}{a+b}\\cot\\left(\\frac{C}{2}\\right)$.',
    difficulty: 'Medium',
    formula: '\\tan\\left(\\frac{A-B}{2}\\right) = \\frac{a-b}{a+b} \\cot\\left(\\frac{C}{2}\\right)',
  },
  {
    id: 'c11-ch11-q6',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'In $\\triangle ABC$, the semi-perimeter $s$ is defined as:',
    options: {
      A: '$\\frac{a + b + c}{2}$',
      B: '$a + b + c$',
      C: '$\\frac{a + b + c}{3}$',
      D: '$\\sqrt{abc}$'
    },
    correct_answer: 'A',
    explanation: 'The semi-perimeter is half of the total triangle perimeter: $s = \\frac{a + b + c}{2}$.',
    difficulty: 'Easy',
    formula: 's = \\frac{a + b + c}{2}',
  },
  {
    id: 'c11-ch11-q7',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'The half-angle formula for $\\sin\\left(\\frac{A}{2}\\right)$ in terms of sides of $\\triangle ABC$ is:',
    options: {
      A: '$\\sqrt{\\frac{(s-b)(s-c)}{bc}}$',
      B: '$\\sqrt{\\frac{s(s-a)}{bc}}$',
      C: '$\\sqrt{\\frac{(s-a)(s-b)}{ab}}$',
      D: '$\\sqrt{\\frac{(s-b)(s-c)}{s(s-a)}}$'
    },
    correct_answer: 'A',
    explanation: '$\\sin\\left(\\frac{A}{2}\\right) = \\sqrt{\\frac{(s-b)(s-c)}{bc}}$.',
    difficulty: 'Medium',
    formula: '\\sin(A/2) = \\sqrt{\\frac{(s-b)(s-c)}{bc}}',
  },
  {
    id: 'c11-ch11-q8',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'The half-angle formula for $\\cos\\left(\\frac{A}{2}\\right)$ in terms of sides is:',
    options: {
      A: '$\\sqrt{\\frac{s(s-a)}{bc}}$',
      B: '$\\sqrt{\\frac{(s-b)(s-c)}{bc}}$',
      C: '$\\sqrt{\\frac{s(s-b)}{ac}}$',
      D: '$\\sqrt{\\frac{(s-a)(s-c)}{s(s-b)}}$'
    },
    correct_answer: 'A',
    explanation: '$\\cos\\left(\\frac{A}{2}\\right) = \\sqrt{\\frac{s(s-a)}{bc}}$.',
    difficulty: 'Medium',
    formula: '\\cos(A/2) = \\sqrt{\\frac{s(s-a)}{bc}}',
  },
  {
    id: 'c11-ch11-q9',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'The half-angle formula for $\\tan\\left(\\frac{A}{2}\\right)$ in terms of sides is:',
    options: {
      A: '$\\sqrt{\\frac{(s-b)(s-c)}{s(s-a)}}$',
      B: '$\\sqrt{\\frac{s(s-a)}{(s-b)(s-c)}}$',
      C: '$\\sqrt{\\frac{(s-a)(s-c)}{s(s-b)}}$',
      D: '$\\frac{\\Delta}{s}$'
    },
    correct_answer: 'A',
    explanation: '$\\tan\\left(\\frac{A}{2}\\right) = \\frac{\\sin(A/2)}{\\cos(A/2)} = \\sqrt{\\frac{(s-b)(s-c)}{s(s-a)}} = \\frac{\\Delta}{s(s-a)}$.',
    difficulty: 'Medium',
    formula: '\\tan(A/2) = \\sqrt{\\frac{(s-b)(s-c)}{s(s-a)}}',
  },
  {
    id: 'c11-ch11-q10',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'Hero’s (Heron’s) formula for the area $\\Delta$ of any triangle $\\triangle ABC$ with sides $a, b, c$ is:',
    options: {
      A: '$\\sqrt{s(s-a)(s-b)(s-c)}$',
      B: '$\\sqrt{(s-a)(s-b)(s-c)}$',
      C: '$s(s-a)(s-b)(s-c)$',
      D: '$\\frac{1}{2}s(s-a)$'
    },
    correct_answer: 'A',
    explanation: 'Hero of Alexandria’s classical formula: $\\Delta = \\sqrt{s(s-a)(s-b)(s-c)}$.',
    difficulty: 'Easy',
    formula: '\\Delta = \\sqrt{s(s-a)(s-b)(s-c)}',
  },
  {
    id: 'c11-ch11-q11',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'The area $\\Delta$ of $\\triangle ABC$ given two sides $b, c$ and included angle $A$ is:',
    options: {
      A: '$\\frac{1}{2}bc\\sin A$',
      B: '$\\frac{1}{2}bc\\cos A$',
      C: '$bc\\sin A$',
      D: '$\\frac{1}{2}ab\\sin A$'
    },
    correct_answer: 'A',
    explanation: '$\\Delta = \\frac{1}{2}bc\\sin A = \\frac{1}{2}ac\\sin B = \\frac{1}{2}ab\\sin C$.',
    difficulty: 'Easy',
    formula: '\\Delta = \\frac{1}{2}bc\\sin A',
  },
  {
    id: 'c11-ch11-q12',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'The area $\\Delta$ of $\\triangle ABC$ expressed in terms of one side $a$ and three angles is:',
    options: {
      A: '$\\frac{a^2 \\sin B \\sin C}{2\\sin A}$',
      B: '$\\frac{a^2 \\cos B \\cos C}{2\\cos A}$',
      C: '$\\frac{a \\sin B \\sin C}{\\sin A}$',
      D: '$\\frac{a^2 \\sin A}{2\\sin B\\sin C}$'
    },
    correct_answer: 'A',
    explanation: '$\\Delta = \\frac{1}{2}ab\\sin C = \\frac{1}{2}a\\left(\\frac{a\\sin B}{\\sin A}\\right)\\sin C = \\frac{a^2 \\sin B \\sin C}{2\\sin A}$.',
    difficulty: 'Medium',
    formula: '\\Delta = \\frac{a^2 \\sin B \\sin C}{2\\sin A}',
  },
  {
    id: 'c11-ch11-q13',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'The radius of the CIRCUMSCRIBED circle (Circumradius $R$) passing through all vertices of $\\triangle ABC$ is:',
    options: {
      A: '$R = \\frac{abc}{4\\Delta}$',
      B: '$R = \\frac{\\Delta}{s}$',
      C: '$R = \\frac{4\\Delta}{abc}$',
      D: '$R = \\frac{abc}{\\Delta}$'
    },
    correct_answer: 'A',
    explanation: 'Since $a = 2R\\sin A$ and $\\Delta = \\frac{1}{2}bc\\sin A \\implies \\sin A = \\frac{2\\Delta}{bc}$, substituting gives $R = \\frac{a}{2(2\\Delta/bc)} = \\frac{abc}{4\\Delta}$.',
    difficulty: 'Medium',
    formula: 'R = \\frac{abc}{4\\Delta}',
  },
  {
    id: 'c11-ch11-q14',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'The radius of the INSCRIBED circle (Inradius $r$) tangent to all three sides of $\\triangle ABC$ is:',
    options: {
      A: '$r = \\frac{\\Delta}{s}$',
      B: '$r = \\frac{s}{\\Delta}$',
      C: '$r = \\frac{abc}{4\\Delta}$',
      D: '$r = \\sqrt{\\frac{\\Delta}{s}}$'
    },
    correct_answer: 'A',
    explanation: 'Total area $\\Delta = \\frac{1}{2}ra + \\frac{1}{2}rb + \\frac{1}{2}rc = r\\left(\\frac{a+b+c}{2}\\right) = rs \\implies r = \\frac{\\Delta}{s}$.',
    difficulty: 'Easy',
    formula: 'r = \\frac{\\Delta}{s}',
  },

  // PART B — ESCRIBED CIRCLES (EXCIRCLES) & RELATIONS (Q15 - Q28)
  {
    id: 'c11-ch11-q15',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'The radius of the ESCRIBED circle opposite to vertex $A$ ($r_1$) is:',
    options: {
      A: '$r_1 = \\frac{\\Delta}{s - a}$',
      B: '$r_1 = \\frac{\\Delta}{s - b}$',
      C: '$r_1 = \\frac{\\Delta}{s - c}$',
      D: '$r_1 = \\frac{\\Delta}{s}$'
    },
    correct_answer: 'A',
    explanation: 'The ex-radii are given by $r_1 = \\frac{\\Delta}{s-a}$, $r_2 = \\frac{\\Delta}{s-b}$, and $r_3 = \\frac{\\Delta}{s-c}$.',
    difficulty: 'Easy',
    formula: 'r_1 = \\frac{\\Delta}{s-a}',
  },
  {
    id: 'c11-ch11-q16',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'The inradius $r$ expressed in terms of half-angles of $\\triangle ABC$ is:',
    options: {
      A: '$4R\\sin\\left(\\frac{A}{2}\\right)\\sin\\left(\\frac{B}{2}\\right)\\sin\\left(\\frac{C}{2}\\right)$',
      B: '$4R\\cos\\left(\\frac{A}{2}\\right)\\cos\\left(\\frac{B}{2}\\right)\\cos\\left(\\frac{C}{2}\\right)$',
      C: '$R\\sin A\\sin B\\sin C$',
      D: '$2R\\sin\\left(\\frac{A}{2}\\right)$'
    },
    correct_answer: 'A',
    explanation: '$r = 4R\\sin(A/2)\\sin(B/2)\\sin(C/2) = (s-a)\\tan(A/2)$.',
    difficulty: 'Hard',
    formula: 'r = 4R\\sin(A/2)\\sin(B/2)\\sin(C/2)',
  },
  {
    id: 'c11-ch11-q17',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'The ex-radius $r_1$ expressed in terms of circumradius $R$ and half-angles is:',
    options: {
      A: '$4R\\sin\\left(\\frac{A}{2}\\right)\\cos\\left(\\frac{B}{2}\\right)\\cos\\left(\\frac{C}{2}\\right)$',
      B: '$4R\\cos\\left(\\frac{A}{2}\\right)\\sin\\left(\\frac{B}{2}\\right)\\sin\\left(\\frac{C}{2}\\right)$',
      C: '$4R\\sin\\left(\\frac{A}{2}\\right)\\sin\\left(\\frac{B}{2}\\right)\\sin\\left(\\frac{C}{2}\\right)$',
      D: '$R\\tan\\left(\\frac{A}{2}\\right)$'
    },
    correct_answer: 'A',
    explanation: '$r_1 = 4R\\sin(A/2)\\cos(B/2)\\cos(C/2) = s\\tan(A/2)$.',
    difficulty: 'Hard',
    formula: 'r_1 = 4R\\sin(A/2)\\cos(B/2)\\cos(C/2)',
  },
  {
    id: 'c11-ch11-q18',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'What is the value of $\\frac{1}{r_1} + \\frac{1}{r_2} + \\frac{1}{r_3}$ in any triangle $\\triangle ABC$?',
    options: {
      A: '$\\frac{1}{r}$',
      B: '$\\frac{1}{R}$',
      C: '$\\frac{2}{r}$',
      D: '$\\frac{1}{2r}$'
    },
    correct_answer: 'A',
    explanation: '$\\frac{1}{r_1} + \\frac{1}{r_2} + \\frac{1}{r_3} = \\frac{s-a}{\\Delta} + \\frac{s-b}{\\Delta} + \\frac{s-c}{\\Delta} = \\frac{3s - (a+b+c)}{\\Delta} = \\frac{3s - 2s}{\\Delta} = \\frac{s}{\\Delta} = \\frac{1}{r}$.',
    difficulty: 'Medium',
    formula: '\\frac{1}{r_1} + \\frac{1}{r_2} + \\frac{1}{r_3} = \\frac{1}{r}',
  },
  {
    id: 'c11-ch11-q19',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'What is the product $r \\cdot r_1 \\cdot r_2 \\cdot r_3$ equal to?',
    options: {
      A: '$\\Delta^2$',
      B: '$\\Delta$',
      C: '$R^2$',
      D: '$s^2$'
    },
    correct_answer: 'A',
    explanation: '$r r_1 r_2 r_3 = \\frac{\\Delta}{s} \\cdot \\frac{\\Delta}{s-a} \\cdot \\frac{\\Delta}{s-b} \\cdot \\frac{\\Delta}{s-c} = \\frac{\\Delta^4}{s(s-a)(s-b)(s-c)} = \\frac{\\Delta^4}{\\Delta^2} = \\Delta^2$.',
    difficulty: 'Medium',
    formula: 'r r_1 r_2 r_3 = \\Delta^2',
  },
  {
    id: 'c11-ch11-q20',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'The sum of the three ex-radii $r_1 + r_2 + r_3 - r$ is identically equal to:',
    options: {
      A: '$4R$',
      B: '$2R$',
      C: '$R$',
      D: '$8R$'
    },
    correct_answer: 'A',
    explanation: '$r_1 + r_2 + r_3 - r = 4R$ is a fundamental relation connecting the inradius, circumradius, and ex-radii.',
    difficulty: 'Hard',
    formula: 'r_1 + r_2 + r_3 - r = 4R',
  },
  {
    id: 'c11-ch11-q21',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'In an equilateral triangle with side $a$, the ratio of $R : r : r_1$ is:',
    options: {
      A: '$2 : 1 : 3$',
      B: '$1 : 2 : 3$',
      C: '$3 : 2 : 1$',
      D: '$2 : 1 : 2$'
    },
    correct_answer: 'A',
    explanation: 'For equilateral triangle ($A=60^\\circ$): $R = \\frac{a}{\\sqrt{3}}$, $r = \\frac{a}{2\\sqrt{3}}$, $r_1 = \\frac{\\sqrt{3}a}{2}$. Ratio $R : r : r_1 = \\frac{1}{\\sqrt{3}} : \\frac{1}{2\\sqrt{3}} : \\frac{\\sqrt{3}}{2} = 2 : 1 : 3$.',
    difficulty: 'Hard',
    formula: 'R : r : r_1 = 2 : 1 : 3',
  },
  {
    id: 'c11-ch11-q22',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'In a right-angled triangle with hypotenuse $c$, the circumradius $R$ is equal to:',
    options: {
      A: '$\\frac{c}{2}$ (Half the hypotenuse)',
      B: '$c$',
      C: '$\\frac{a+b}{2}$',
      D: '$\\frac{ab}{c}$'
    },
    correct_answer: 'A',
    explanation: 'In a right-angled triangle, the hypotenuse is the diameter of the circumcircle (Thales’s theorem), so $R = c/2$.',
    difficulty: 'Easy',
    formula: 'R = \\frac{c}{2}',
  },
  {
    id: 'c11-ch11-q23',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'In a triangle with sides $a = 13, b = 14, c = 15$, find the semi-perimeter $s$:',
    options: {
      A: '$21$',
      B: '$42$',
      C: '$20$',
      D: '$28$'
    },
    correct_answer: 'A',
    explanation: '$s = \\frac{13 + 14 + 15}{2} = \\frac{42}{2} = 21$.',
    difficulty: 'Easy',
    formula: 's = \\frac{13+14+15}{2} = 21',
  },
  {
    id: 'c11-ch11-q24',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'Find the area $\\Delta$ of the triangle with sides $a = 13, b = 14, c = 15$:',
    options: {
      A: '$84$',
      B: '$90$',
      C: '$78$',
      D: '$88$'
    },
    correct_answer: 'A',
    explanation: '$s = 21$. $\\Delta = \\sqrt{21(21-13)(21-14)(21-15)} = \\sqrt{21 \\times 8 \\times 7 \\times 6} = \\sqrt{7056} = 84$.',
    difficulty: 'Medium',
    formula: '\\Delta = \\sqrt{21 \\times 8 \\times 7 \\times 6} = 84',
  },
  {
    id: 'c11-ch11-q25',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'For the triangle with $a = 13, b = 14, c = 15$ (where $\\Delta = 84, s = 21$), find the inradius $r$:',
    options: {
      A: '$4$',
      B: '$5$',
      C: '$6$',
      D: '$3.5$'
    },
    correct_answer: 'A',
    explanation: '$r = \\frac{\\Delta}{s} = \\frac{84}{21} = 4$.',
    difficulty: 'Easy',
    formula: 'r = \\frac{84}{21} = 4',
  },
  {
    id: 'c11-ch11-q26',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'For $a = 13, b = 14, c = 15$ ($\\\\Delta = 84$), find the circumradius $R$:',
    options: {
      A: '$\\frac{65}{8} = 8.125$',
      B: '$8$',
      C: '$\\frac{65}{4}$',
      D: '$9$'
    },
    correct_answer: 'A',
    explanation: '$R = \\frac{abc}{4\\Delta} = \\frac{13 \\times 14 \\times 15}{4 \\times 84} = \\frac{2730}{336} = \\frac{65}{8} = 8.125$.',
    difficulty: 'Medium',
    formula: 'R = \\frac{13 \\times 14 \\times 15}{4 \\times 84} = \\frac{65}{8}',
  },
  {
    id: 'c11-ch11-q27',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'For $a = 13, b = 14, c = 15$, find the ex-radius $r_1$ opposite to side $a$:',
    options: {
      A: '$10.5 = \\frac{21}{2}$',
      B: '$12$',
      C: '$14$',
      D: '$8.4$'
    },
    correct_answer: 'A',
    explanation: '$r_1 = \\frac{\\Delta}{s-a} = \\frac{84}{21-13} = \\frac{84}{8} = \\frac{21}{2} = 10.5$.',
    difficulty: 'Easy',
    formula: 'r_1 = \\frac{84}{8} = 10.5',
  },
  {
    id: 'c11-ch11-q28',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'For $a = 13, b = 14, c = 15$, find $r_2$ opposite to side $b$:',
    options: {
      A: '$12$',
      B: '$10.5$',
      C: '$14$',
      D: '$15$'
    },
    correct_answer: 'A',
    explanation: '$r_2 = \\frac{\\Delta}{s-b} = \\frac{84}{21-14} = \\frac{84}{7} = 12$.',
    difficulty: 'Easy',
    formula: 'r_2 = \\frac{84}{7} = 12',
  },

  // PART C — PRACTICAL HEIGHTS, DISTANCES & BEARINGS (Q29 - Q38)
  {
    id: 'c11-ch11-q29',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'The angle formed by the line of sight with the horizontal when looking UPWARD at an object is called the:',
    options: {
      A: 'Angle of Elevation',
      B: 'Angle of Depression',
      C: 'Bearing angle',
      D: 'Subtended angle'
    },
    correct_answer: 'A',
    explanation: 'The angle of elevation is measured upward from the horizontal eye-level to the elevated target object.',
    difficulty: 'Easy',
    formula: '\\text{Elevation: eye looking upward}',
  },
  {
    id: 'c11-ch11-q30',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'The angle formed by the line of sight with the horizontal when looking DOWNWARD at an object is called the:',
    options: {
      A: 'Angle of Depression',
      B: 'Angle of Elevation',
      C: 'Inclination angle',
      D: 'Azimuth'
    },
    correct_answer: 'A',
    explanation: 'The angle of depression is measured downward from the horizontal line of sight.',
    difficulty: 'Easy',
    formula: '\\text{Depression: eye looking downward}',
  },
  {
    id: 'c11-ch11-q31',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'A vertical pole of height $h$ casts a shadow of length $h\\sqrt{3}$ on horizontal ground. What is the angle of elevation of the sun?',
    options: {
      A: '$30^\\circ$',
      B: '$60^\\circ$',
      C: '$45^\\circ$',
      D: '$15^\\circ$'
    },
    correct_answer: 'A',
    explanation: '$\\tan\\theta = \\frac{\\text{Height}}{\\text{Shadow}} = \\frac{h}{h\\sqrt{3}} = \\frac{1}{\\sqrt{3}} \\implies \\theta = 30^\\circ$.',
    difficulty: 'Easy',
    formula: '\\tan\\theta = \\frac{1}{\\sqrt{3}} \\implies \\theta = 30^\\circ',
  },
  {
    id: 'c11-ch11-q32',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'A vertical tree of height $h$ casts a shadow equal to its own height ($h$). The sun’s angle of elevation is:',
    options: {
      A: '$45^\\circ$',
      B: '$30^\\circ$',
      C: '$60^\\circ$',
      D: '$90^\\circ$'
    },
    correct_answer: 'A',
    explanation: '$\\tan\\theta = \\frac{h}{h} = 1 \\implies \\theta = 45^\\circ$.',
    difficulty: 'Easy',
    formula: '\\tan\\theta = 1 \\implies \\theta = 45^\\circ',
  },
  {
    id: 'c11-ch11-q33',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'From the top of a cliff 100 m high, the angle of depression of a boat on the sea is $30^\\circ$. How far is the boat from the base of the cliff?',
    options: {
      A: '$100\\sqrt{3} \\text{ m} \\approx 173.2 \\text{ m}$',
      B: '$\\frac{100}{\\sqrt{3}} \\text{ m}$',
      C: '$200 \\text{ m}$',
      D: '$100 \\text{ m}$'
    },
    correct_answer: 'A',
    explanation: '$\\tan 30^\\circ = \\frac{100}{d} \\implies \\frac{1}{\\sqrt{3}} = \\frac{100}{d} \\implies d = 100\\sqrt{3} \\approx 173.2 \\text{ m}$.',
    difficulty: 'Medium',
    formula: 'd = \\frac{100}{\\tan 30^\\circ} = 100\\sqrt{3}',
  },
  {
    id: 'c11-ch11-q34',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'A 20-meter long ladder leans against a vertical wall making an angle of $60^\\circ$ with the ground. How high up the wall does the ladder reach?',
    options: {
      A: '$10\\sqrt{3} \\text{ m} \\approx 17.32 \\text{ m}$',
      B: '$10 \\text{ m}$',
      C: '$20\\sqrt{3} \\text{ m}$',
      D: '$15 \\text{ m}$'
    },
    correct_answer: 'A',
    explanation: '$\\sin 60^\\circ = \\frac{h}{20} \\implies h = 20 \\sin 60^\\circ = 20 \\left(\\frac{\\sqrt{3}}{2}\\right) = 10\\sqrt{3} \\text{ m}$.',
    difficulty: 'Easy',
    formula: 'h = 20\\sin 60^\\circ = 10\\sqrt{3}',
  },
  {
    id: 'c11-ch11-q35',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'In navigation, a bearing of $120^\\circ$ corresponds to the compass direction:',
    options: {
      A: '$\\text{S } 60^\\circ \\text{ E}$',
      B: '$\\text{N } 60^\\circ \\text{ E}$',
      C: '$\\text{S } 30^\\circ \\text{ E}$',
      D: '$\\text{E } 30^\\circ \\text{ S}$'
    },
    correct_answer: 'A',
    explanation: 'Starting from North ($0^\\circ$), clockwise $120^\\circ$ is $60^\\circ$ east of South ($180^\\circ - 120^\\circ = 60^\\circ$), so $\\text{S } 60^\\circ \\text{ E}$.',
    difficulty: 'Medium',
    formula: '120^\\circ = \\text{S } 60^\\circ \\text{ E}',
  },
  {
    id: 'c11-ch11-q36',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'In navigation, a bearing of $315^\\circ$ is equivalent to:',
    options: {
      A: '$\\text{N } 45^\\circ \\text{ W}$ (North-West)',
      B: '$\\text{S } 45^\\circ \\text{ W}$',
      C: '$\\text{N } 45^\\circ \\text{ E}$',
      D: '$\\text{W } 45^\\circ \\text{ S}$'
    },
    correct_answer: 'A',
    explanation: '$360^\\circ - 315^\\circ = 45^\\circ$ west of North, written as $\\text{N } 45^\\circ \\text{ W}$.',
    difficulty: 'Easy',
    formula: '315^\\circ = \\text{N } 45^\\circ \\text{ W}',
  },
  {
    id: 'c11-ch11-q37',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'In $\\triangle ABC$, if $a = 2, b = 2, C = 60^\\circ$, then $\\triangle ABC$ is:',
    options: {
      A: 'Equilateral (with side length 2)',
      B: 'Right-angled isosceles',
      C: 'Scalene',
      D: 'Obtuse isosceles'
    },
    correct_answer: 'A',
    explanation: '$c^2 = 2^2 + 2^2 - 2(2)(2)\\cos 60^\\circ = 4 + 4 - 8(1/2) = 4 \\implies c = 2$. All sides equal 2, hence equilateral.',
    difficulty: 'Easy',
    formula: 'c = 2 \\implies \\text{Equilateral}',
  },
  {
    id: 'c11-ch11-q38',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'In $\\triangle ABC$, if $a = 3, b = 4, c = 5$, what is the angle $C$?',
    options: {
      A: '$90^\\circ$ (Right angle)',
      B: '$60^\\circ$',
      C: '$45^\\circ$',
      D: '$120^\\circ$'
    },
    correct_answer: 'A',
    explanation: 'Since $3^2 + 4^2 = 9 + 16 = 25 = 5^2$, by converse of Pythagorean theorem $C = 90^\\circ$.',
    difficulty: 'Easy',
    formula: 'a^2 + b^2 = c^2 \\implies C = 90^\\circ',
  },

  // PART D — ADVANCED TRIANGLE GEOMETRY & IDENTITY PROOFS (Q39 - Q50)
  {
    id: 'c11-ch11-q39',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'In any $\\triangle ABC$, $a(\\sin B - \\sin C) + b(\\sin C - \\sin A) + c(\\sin A - \\sin B)$ is equal to:',
    options: {
      A: '$0$',
      B: '$1$',
      C: '$2R$',
      D: '$\\Delta$'
    },
    correct_answer: 'A',
    explanation: 'Using $\\sin A = \\frac{a}{2R}, \\dots$: $\\sum a\\left(\\frac{b-c}{2R}\\right) = \\frac{ab - ac + bc - ba + ca - cb}{2R} = 0$.',
    difficulty: 'Medium',
    formula: '\\sum a(\\sin B - \\sin C) = 0',
  },
  {
    id: 'c11-ch11-q40',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'In $\\triangle ABC$, the expression $(b+c)\\cos A + (c+a)\\cos B + (a+b)\\cos C$ simplifies to:',
    options: {
      A: '$a + b + c = 2s$',
      B: '$s$',
      C: '$0$',
      D: '$4R$'
    },
    correct_answer: 'A',
    explanation: 'Regrouping using Projection laws: $(b\\cos C + c\\cos B) + (c\\cos A + a\\cos C) + (a\\cos B + b\\cos A) = a + b + c = 2s$.',
    difficulty: 'Medium',
    formula: '\\sum (b+c)\\cos A = a+b+c = 2s',
  },
  {
    id: 'c11-ch11-q41',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'The distance between the circumcentre $O$ and the incentre $I$ of a triangle is given by Euler’s triangle formula:',
    options: {
      A: '$d = \\sqrt{R^2 - 2Rr}$',
      B: '$d = \\sqrt{R^2 - r^2}$',
      C: '$d = R - 2r$',
      D: '$d = \\sqrt{2Rr}$'
    },
    correct_answer: 'A',
    explanation: 'Euler’s theorem in geometry states $OI^2 = R(R - 2r) = R^2 - 2Rr$. This also implies $R \\ge 2r$ for all triangles.',
    difficulty: 'Hard',
    formula: 'd = \\sqrt{R^2 - 2Rr}',
  },
  {
    id: 'c11-ch42-q42',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'In any $\\triangle ABC$, $abc = 4R\\Delta$. If $R = 5$ and $\\Delta = 6$, find the product of the side lengths $abc$:',
    options: {
      A: '$120$',
      B: '$60$',
      C: '$30$',
      D: '$240$'
    },
    correct_answer: 'A',
    explanation: '$abc = 4R\\Delta = 4 \\times 5 \\times 6 = 120$.',
    difficulty: 'Easy',
    formula: 'abc = 4R\\Delta = 120',
  },
  {
    id: 'c11-ch11-q43',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'If the sides of a triangle are in the ratio $1 : \\sqrt{3} : 2$, its angles are in the ratio:',
    options: {
      A: '$1 : 2 : 3$ (angles $30^\\circ, 60^\\circ, 90^\\circ$)',
      B: '$1 : 1 : 2$',
      C: '$1 : 1 : 1$',
      D: '$2 : 3 : 4$'
    },
    correct_answer: 'A',
    explanation: '$\\sin A : \\sin B : \\sin C = 1 : \\sqrt{3} : 2$. With $C=90^\\circ$, $\\sin 30^\\circ = 1/2$, $\\sin 60^\\circ = \\sqrt{3}/2$, $\\sin 90^\\circ = 1$. The angles are $30^\\circ, 60^\\circ, 90^\\circ$, ratio $1 : 2 : 3$.',
    difficulty: 'Medium',
    formula: 'A:B:C = 1:2:3',
  },
  {
    id: 'c11-ch11-q44',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'In $\\triangle ABC$, if $\\cos A = \\frac{\\sin B}{2\\sin C}$, the triangle is:',
    options: {
      A: 'Isosceles',
      B: 'Equilateral',
      C: 'Right-angled',
      D: 'Scalene'
    },
    correct_answer: 'A',
    explanation: '$\\cos A = \\frac{b/(2R)}{2c/(2R)} = \\frac{b}{2c} \\implies 2c\\cos A = b$. By projection/cosine law $2c\\left(\\frac{b^2+c^2-a^2}{2bc}\\right) = b \\implies b^2+c^2-a^2 = b^2 \\implies c^2 = a^2 \\implies c = a$. So it is isosceles.',
    difficulty: 'Hard',
    formula: 'c = a \\implies \\text{Isosceles}',
  },
  {
    id: 'c11-ch11-q45',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'The area of an equilateral triangle with side $a$ is:',
    options: {
      A: '$\\frac{\\sqrt{3}}{4} a^2$',
      B: '$\\frac{\\sqrt{3}}{2} a^2$',
      C: '$\\frac{1}{2} a^2$',
      D: '$\\frac{3}{4} a^2$'
    },
    correct_answer: 'A',
    explanation: '$\\Delta = \\frac{1}{2} a \\cdot a \\sin 60^\\circ = \\frac{1}{2} a^2 \\frac{\\sqrt{3}}{2} = \\frac{\\sqrt{3}}{4} a^2$.',
    difficulty: 'Easy',
    formula: '\\Delta = \\frac{\\sqrt{3}}{4} a^2',
  },
  {
    id: 'c11-ch11-q46',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'For an equilateral triangle of side $a = 6$, find the circumradius $R$:',
    options: {
      A: '$2\\sqrt{3}$',
      B: '$\\sqrt{3}$',
      C: '$3\\sqrt{3}$',
      D: '$6$'
    },
    correct_answer: 'A',
    explanation: '$R = \\frac{a}{\\sqrt{3}} = \\frac{6}{\\sqrt{3}} = 2\\sqrt{3}$.',
    difficulty: 'Easy',
    formula: 'R = \\frac{6}{\\sqrt{3}} = 2\\sqrt{3}',
  },
  {
    id: 'c11-ch11-q47',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'For an equilateral triangle of side $a = 6$, find the inradius $r$:',
    options: {
      A: '$\\sqrt{3}$',
      B: '$2\\sqrt{3}$',
      C: '$3$',
      D: '$\\frac{\\sqrt{3}}{2}$'
    },
    correct_answer: 'A',
    explanation: '$r = \\frac{a}{2\\sqrt{3}} = \\frac{6}{2\\sqrt{3}} = \\sqrt{3}$.',
    difficulty: 'Easy',
    formula: 'r = \\frac{6}{2\\sqrt{3}} = \\sqrt{3}',
  },
  {
    id: 'c11-ch11-q48',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'In $\\triangle ABC$, the value of $\\frac{a-b}{c}$ is identically equal to:',
    options: {
      A: '$\\frac{\\sin\\left(\\frac{A-B}{2}\\right)}{\\cos\\left(\\frac{C}{2}\\right)}$',
      B: '$\\frac{\\cos\\left(\\frac{A-B}{2}\\right)}{\\sin\\left(\\frac{C}{2}\\right)}$',
      C: '$\\tan\\left(\\frac{A-B}{2}\\right)$',
      D: '$\\frac{\\sin A - \\sin B}{\\cos C}$'
    },
    correct_answer: 'A',
    explanation: 'Using Mollweide’s formula: $\\frac{a-b}{c} = \\frac{\\sin(A/2 - B/2)}{\\cos(C/2)}$.',
    difficulty: 'Hard',
    formula: '\\frac{a-b}{c} = \\frac{\\sin(\\frac{A-B}{2})}{\\cos(\\frac{C}{2})}',
  },
  {
    id: 'c11-ch11-q49',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'In $\\triangle ABC$, Mollweide’s sum formula for $\\frac{a+b}{c}$ is:',
    options: {
      A: '$\\frac{\\cos\\left(\\frac{A-B}{2}\\right)}{\\sin\\left(\\frac{C}{2}\\right)}$',
      B: '$\\frac{\\sin\\left(\\frac{A+B}{2}\\right)}{\\cos\\left(\\frac{C}{2}\\right)}$',
      C: '$\\frac{\\cos\\left(\\frac{A+B}{2}\\right)}{\\sin\\left(\\frac{C}{2}\\right)}$',
      D: '$1$'
    },
    correct_answer: 'A',
    explanation: 'Mollweide’s formula for side sum: $\\frac{a+b}{c} = \\frac{\\cos(\\frac{A-B}{2})}{\\sin(\\frac{C}{2})}$.',
    difficulty: 'Hard',
    formula: '\\frac{a+b}{c} = \\frac{\\cos(\\frac{A-B}{2})}{\\sin(\\frac{C}{2})}',
  },
  {
    id: 'c11-ch11-q50',
    class: 11,
    subject: 'Mathematics',
    chapter_id: 'c11-ch11',
    question: 'If in $\\triangle ABC$, $a = 4, b = 5, c = 6$, then $\\cos C$ is equal to:',
    options: {
      A: '$\\frac{1}{8} = 0.125$',
      B: '$\\frac{9}{16}$',
      C: '$\\frac{3}{4}$',
      D: '$\\frac{5}{8}$'
    },
    correct_answer: 'A',
    explanation: '$\\cos C = \\frac{a^2 + b^2 - c^2}{2ab} = \\frac{16 + 25 - 36}{2(4)(5)} = \\frac{41 - 36}{40} = \\frac{5}{40} = \\frac{1}{8}$.',
    difficulty: 'Easy',
    formula: '\\cos C = \\frac{4^2 + 5^2 - 6^2}{2(4)(5)} = \\frac{1}{8}',
  },
];

export const C11_CH11_QUESTIONS: Question[] = [
  ...C11_CH11_NORMAL_QUESTIONS.map((q) => ({
    ...q,
    difficulty_tier: 'Normal' as const,
  })),
  ...C11_CH11_ADVANCED_QUESTIONS,
];

