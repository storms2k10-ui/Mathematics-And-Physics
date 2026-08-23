import { MathFormulaItem } from '../types';

export const ALL_FORMULAS: MathFormulaItem[] = [
  // Class 9 & 10 Algebra
  {
    id: 'form-quadratic',
    class: 10,
    topic: 'Quadratic Equations',
    category: 'Algebra & Polynomials',
    name: 'Quadratic Formula & Discriminant',
    formula: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}, \\qquad \\Delta = b^2 - 4ac',
    variablesExplanation: '$a, b, c$ are coefficients with $a \\neq 0$. Roots are real & distinct if $\\Delta > 0$, equal if $\\Delta = 0$, complex if $\\Delta < 0$.',
    notes: 'Sum of roots $S = -\\frac{b}{a}$, Product of roots $P = \\frac{c}{a}$.'
  },
  {
    id: 'form-algebra-cubics',
    class: 9,
    topic: 'Algebraic Identities',
    category: 'Algebra & Polynomials',
    name: 'Special Algebraic Expansions & Factorizations',
    formula: '(a \\pm b)^3 = a^3 \\pm 3a^2b + 3ab^2 \\pm b^3, \\qquad a^3 \\pm b^3 = (a \\pm b)(a^2 \\mp ab + b^2)',
    variablesExplanation: 'Expansions for sum and difference of cubes and perfect cubic binomials.',
    notes: '$a^3 + b^3 + c^3 - 3abc = (a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca)$.'
  },
  // Class 10 & 11 Coordinate Geometry
  {
    id: 'form-distance-section',
    class: 10,
    topic: 'Coordinate Geometry',
    category: 'Coordinate Geometry',
    name: 'Distance, Midpoint & Section Formulas',
    formula: 'd = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}, \\qquad P(x, y) = \\left( \\frac{m_1 x_2 + m_2 x_1}{m_1 + m_2}, \\; \\frac{m_1 y_2 + m_2 y_1}{m_1 + m_2} \\right)',
    variablesExplanation: 'Distance between points $P_1(x_1, y_1)$ and $P_2(x_2, y_2)$ and point dividing segment in ratio $m_1 : m_2$.',
    notes: 'Midpoint is the special case $m_1 = m_2 = 1$: $M = \\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)$.'
  },
  {
    id: 'form-straight-lines',
    class: 12,
    topic: 'Analytic Geometry (Straight Lines)',
    category: 'Coordinate Geometry',
    name: 'Straight Line Equations & Perpendicular Distance',
    formula: 'y - y_1 = m(x - x_1), \\quad y = mx + c, \\quad \\frac{x}{a} + \\frac{y}{b} = 1, \\quad d = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}}',
    variablesExplanation: 'Point-slope, slope-intercept, intercept forms of lines, and perpendicular distance from point $(x_0, y_0)$ to line $Ax + By + C = 0$.',
    notes: 'Angle between two lines: $\\tan\\theta = \\left|\\frac{m_2 - m_1}{1 + m_1 m_2}\\right|$.'
  },
  // Class 10 & 11 Trigonometry
  {
    id: 'form-pythagorean-trig',
    class: 10,
    topic: 'Fundamental Trigonometric Identities',
    category: 'Trigonometry',
    name: 'Pythagorean Trigonometric Identities',
    formula: '\\sin^2\\theta + \\cos^2\\theta = 1, \\qquad 1 + \\tan^2\\theta = \\sec^2\\theta, \\qquad 1 + \\cot^2\\theta = \\csc^2\\theta',
    variablesExplanation: 'Hold for all real angles $\\theta$ where the functions are defined.',
    notes: '$\\sec^2\\theta - \\tan^2\\theta = 1 \\implies (\\sec\\theta - \\tan\\theta)(\\sec\\theta + \\tan\\theta) = 1$.'
  },
  {
    id: 'form-trig-compound-angles',
    class: 11,
    topic: 'Compound Angle Trigonometry',
    category: 'Trigonometry',
    name: 'Sum and Difference Trigonometric Formulas',
    formula: '\\sin(\\alpha \\pm \\beta) = \\sin\\alpha\\cos\\beta \\pm \\cos\\alpha\\sin\\beta, \\qquad \\cos(\\alpha \\pm \\beta) = \\cos\\alpha\\cos\\beta \\mp \\sin\\alpha\\sin\\beta',
    variablesExplanation: 'Addition and subtraction formulas for sine, cosine, and tangent.',
    notes: '$\\tan(\\alpha \\pm \\beta) = \\frac{\\tan\\alpha \\pm \\tan\\beta}{1 \\mp \\tan\\alpha\\tan\\beta}$.'
  },
  {
    id: 'form-trig-double-half',
    class: 11,
    topic: 'Multiple & Submultiple Angles',
    category: 'Trigonometry',
    name: 'Double Angle & Half Angle Formulas',
    formula: '\\sin 2\\theta = 2\\sin\\theta\\cos\\theta, \\qquad \\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta',
    variablesExplanation: 'Expresses trig functions of double angles in terms of single angles.',
    notes: '$\\tan 2\\theta = \\frac{2\\tan\\theta}{1 - \\tan^2\\theta}, \\quad \\sin^2\\theta = \\frac{1 - \\cos 2\\theta}{2}, \\quad \\cos^2\\theta = \\frac{1 + \\cos 2\\theta}{2}$.'
  },
  // Class 11 Sequences & Progressions
  {
    id: 'form-ap-gp',
    class: 11,
    topic: 'Sequences & Progressions',
    category: 'Sequences & Series',
    name: 'Arithmetic & Geometric Progression Formulas',
    formula: 'a_n = a_1 + (n-1)d, \\quad S_n = \\frac{n}{2}[2a_1 + (n-1)d], \\qquad g_n = a_1 r^{n-1}, \\quad S_\\infty = \\frac{a_1}{1 - r} \\; (|r| < 1)',
    variablesExplanation: '$a_1$ = initial term, $d$ = common difference, $r$ = common ratio, $n$ = number of terms.',
    notes: 'Arithmetic Mean $A = \\frac{a+b}{2}$, Geometric Mean $G = \\sqrt{ab}$, Harmonic Mean $H = \\frac{2ab}{a+b}$. Note $A \\ge G \\ge H$.'
  },
  // Class 12 Calculus - Differentiation Table
  {
    id: 'form-standard-derivatives',
    class: 12,
    topic: 'Standard Derivatives Table',
    category: 'Calculus & Derivatives',
    name: 'Core Differentiation Formulas',
    formula: '\\frac{d}{dx} x^n = n x^{n-1}, \\quad \\frac{d}{dx} e^{kx} = k e^{kx}, \\quad \\frac{d}{dx} \\ln x = \\frac{1}{x}, \\quad \\frac{d}{dx} a^x = a^x \\ln a',
    variablesExplanation: 'Standard derivatives for power, exponential, and logarithmic functions.',
    notes: '$\\frac{d}{dx}\\sin x = \\cos x, \\quad \\frac{d}{dx}\\cos x = -\\sin x, \\quad \\frac{d}{dx}\\tan x = \\sec^2 x, \\quad \\frac{d}{dx}\\sec x = \\sec x \\tan x$.'
  },
  {
    id: 'form-inverse-trig-derivatives',
    class: 12,
    topic: 'Inverse Trigonometric Derivatives',
    category: 'Calculus & Derivatives',
    name: 'Derivatives of Inverse Trigonometric Functions',
    formula: '\\frac{d}{dx}\\arcsin x = \\frac{1}{\\sqrt{1-x^2}}, \\quad \\frac{d}{dx}\\arctan x = \\frac{1}{1+x^2}, \\quad \\frac{d}{dx}\\text{arcsec}\\,x = \\frac{1}{|x|\\sqrt{x^2-1}}',
    variablesExplanation: 'Derivatives with domains $|x| < 1$ for arcsin and all real $x$ for arctan.',
    notes: '$\\frac{d}{dx}\\arccos x = -\\frac{1}{\\sqrt{1-x^2}}, \\quad \\frac{d}{dx}\\text{arccot}\\,x = -\\frac{1}{1+x^2}$.'
  },
  // Class 12 Calculus - Integration Table
  {
    id: 'form-standard-integrals',
    class: 12,
    topic: 'Standard Integrals Table',
    category: 'Calculus & Integration',
    name: 'Core Antiderivative Formulas',
    formula: '\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C \\; (n \\neq -1), \\qquad \\int \\frac{1}{x}\\,dx = \\ln|x| + C, \\qquad \\int e^{kx}\\,dx = \\frac{1}{k}e^{kx} + C',
    variablesExplanation: '$C$ is the arbitrary constant of integration.',
    notes: '$\\int \\sin x\\,dx = -\\cos x + C, \\quad \\int \\cos x\\,dx = \\sin x + C, \\quad \\int \\sec^2 x\\,dx = \\tan x + C$.'
  },
  {
    id: 'form-special-integrals',
    class: 12,
    topic: 'Special Integrals & By Parts',
    category: 'Calculus & Integration',
    name: 'Integration by Parts & Rational Algebraic Integrals',
    formula: '\\int u \\, dv = u v - \\int v \\, du, \\qquad \\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C',
    variablesExplanation: 'Integration by parts derived from product rule; algebraic inverse trig forms.',
    notes: '$\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\left(\\frac{x}{a}\\right) + C, \\quad \\int \\frac{dx}{x^2 - a^2} = \\frac{1}{2a}\\ln\\left|\\frac{x-a}{x+a}\\right| + C$.'
  },
  // Class 12 Conics
  {
    id: 'form-conic-sections',
    class: 12,
    topic: 'Conic Sections',
    category: 'Coordinate Geometry',
    name: 'Standard Equations of Conic Sections',
    formula: 'y^2 = 4ax \\; (\\text{Parabola}), \\quad \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 \\; (\\text{Ellipse}), \\quad \\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1 \\; (\\text{Hyperbola})',
    variablesExplanation: 'Eccentricity $e = 1$ for parabola, $e < 1$ for ellipse ($b^2 = a^2(1-e^2)$), $e > 1$ for hyperbola ($b^2 = a^2(e^2-1)$).',
    notes: 'Circle: $(x - h)^2 + (y - k)^2 = r^2$ with center $(h, k)$ and radius $r$.'
  }
];
