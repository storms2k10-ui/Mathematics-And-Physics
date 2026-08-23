import { MathTheorem } from '../types';

export const ALL_THEOREMS: MathTheorem[] = [
  {
    id: 'thm-pythagorean',
    class: 9,
    title: 'Pythagorean Theorem',
    category: 'Geometry & Trigonometry',
    statement: 'In any right-angled triangle, the square of the length of the hypotenuse is equal to the sum of the squares of the lengths of the other two sides.',
    condition: 'Triangle $\\triangle ABC$ with $\\angle C = 90^\\circ$',
    formula: 'c^2 = a^2 + b^2 \\iff \\text{Hypotenuse}^2 = \\text{Base}^2 + \\text{Perpendicular}^2',
    proofOutline: [
      'Construct perpendicular from right vertex $C$ to hypotenuse $AB$ at point $D$',
      'By angle-angle similarity: $\\triangle ACD \\sim \\triangle ABC \\implies \\frac{b}{c} = \\frac{AD}{b} \\implies b^2 = c \\cdot AD$',
      'Similarly: $\\triangle BCD \\sim \\triangle ABC \\implies \\frac{a}{c} = \\frac{DB}{a} \\implies a^2 = c \\cdot DB$',
      'Summing both equalities: $a^2 + b^2 = c(AD + DB) = c(c) = c^2$'
    ],
    importance: 'Forms the foundation of Euclidean distance, Cartesian coordinate geometry, and trigonometry ($ \\sin^2\\theta + \\cos^2\\theta = 1 $).',
    example: 'For sides $3$ and $4$, hypotenuse $c = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = 5$.'
  },
  {
    id: 'thm-thales-bpt',
    class: 9,
    title: 'Basic Proportionality Theorem (Thales’ Theorem)',
    category: 'Geometry & Triangles',
    statement: 'If a line is drawn parallel to one side of a triangle intersecting the other two sides at distinct points, then it divides the two sides in the same ratio.',
    condition: 'In $\\triangle ABC$, line $DE \\parallel BC$ with $D \\in AB$ and $E \\in AC$',
    formula: '\\frac{AD}{DB} = \\frac{AE}{EC} \\quad \\text{and} \\quad \\frac{AD}{AB} = \\frac{AE}{AC}',
    proofOutline: [
      'Join $BE$ and $CD$, and draw altitudes $EN \\perp AB$ and $DM \\perp AC$',
      'Area of $\\triangle ADE = \\frac{1}{2} \\times AD \\times EN$ and Area of $\\triangle BDE = \\frac{1}{2} \\times DB \\times EN$',
      'Ratio of areas: $\\frac{\\text{Area}(\\triangle ADE)}{\\text{Area}(\\triangle BDE)} = \\frac{AD}{DB}$',
      'Since $\\triangle BDE$ and $\\triangle CDE$ share base $DE$ between parallel lines $DE \\parallel BC$, their areas are equal',
      'Hence $\\frac{AD}{DB} = \\frac{AE}{EC}$'
    ],
    importance: 'Core foundation for similar triangles, dilation transformations, and geometric scaling.',
    example: 'If $AD = 2$, $DB = 4$, and $AE = 3$, then $EC = \\frac{DB \\cdot AE}{AD} = \\frac{4 \\times 3}{2} = 6$.'
  },
  {
    id: 'thm-remainder-factor',
    class: 9,
    title: 'Remainder & Factor Theorems',
    category: 'Algebra & Polynomials',
    statement: 'When a polynomial $P(x)$ is divided by a linear factor $(x - c)$, the remainder is $R = P(c)$. Furthermore, $(x - c)$ is a factor of $P(x)$ if and only if $P(c) = 0$.',
    condition: '$P(x)$ is a polynomial of degree $n \\ge 1$ and $c \\in \\mathbb{R}$',
    formula: 'P(x) = (x - c) Q(x) + P(c), \\qquad (x - c) \\mid P(x) \\iff P(c) = 0',
    proofOutline: [
      'By the division algorithm: $P(x) = (x - c)Q(x) + R$ where degree of $R < 1$ (constant $R$)',
      'Substitute $x = c$: $P(c) = (c - c)Q(c) + R = 0 + R = R$',
      'Therefore the remainder is always identically $P(c)$',
      'If $P(c) = 0$, then $P(x) = (x - c)Q(x)$, which proves $(x - c)$ is a factor'
    ],
    importance: 'Enables rapid polynomial factorization, synthetic division, and finding algebraic roots.',
    example: 'For $P(x) = x^3 - 3x^2 + 4$, since $P(2) = 8 - 12 + 4 = 0$, $(x - 2)$ is a factor.'
  },
  {
    id: 'thm-demorgan',
    class: 10,
    title: 'De Morgan’s Laws',
    category: 'Set Theory & Logic',
    statement: 'The complement of the union of two sets is equal to the intersection of their complements, and the complement of the intersection is equal to the union of their complements.',
    condition: 'Sets $A, B \\subseteq U$',
    formula: '(A \\cup B)\' = A\' \\cap B\', \\qquad (A \\cap B)\' = A\' \\cup B\'',
    proofOutline: [
      'Let $x \\in (A \\cup B)\' \\iff x \\notin (A \\cup B)$',
      '$\\iff x \\notin A \\land x \\notin B$',
      '$\\iff x \\in A\' \\land x \\in B\' \\iff x \\in A\' \\cap B\'$',
      'Dual statement follows identically by interchanging $\\cup$ and $\\cap$'
    ],
    importance: 'Pivotal theorem in digital logic gate simplification (NAND/NOR equivalence) and Boolean algebra.',
    example: 'If $U = \\{1,2,3,4,5\\}, A = \\{1,2\\}, B = \\{2,3\\}$, then $(A \\cup B)\' = \\{4,5\\} = A\' \\cap B\'$.',
    diagramType: 'sets_venn_subsets'
  },
  {
    id: 'thm-demoivre',
    class: 11,
    title: 'De Moivre’s Theorem',
    category: 'Complex Numbers',
    statement: 'For any real number $\\theta$ and integer $n$, raising a polar complex number to the $n$-th power multiplies its argument by $n$.',
    condition: '$\\theta \\in \\mathbb{R}, \\; n \\in \\mathbb{Z}$ (and for all rational $n$ as one of the values)',
    formula: '(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta) \\iff (e^{i\\theta})^n = e^{in\\theta}',
    proofOutline: [
      'Base step: for $n = 1$, $(\\cos\\theta + i\\sin\\theta)^1 = \\cos\\theta + i\\sin\\theta$ (true)',
      'Inductive step: multiply $(\\cos k\\theta + i\\sin k\\theta)(\\cos\\theta + i\\sin\\theta)$',
      'Apply trig addition formulas: $\\cos(k+1)\\theta + i\\sin(k+1)\\theta$',
      'Extend to negative integers using $z^{-n} = \\frac{1}{z^n} = \\bar{z}^n$'
    ],
    importance: 'Allows fast calculation of powers and finding all $n$-th roots of complex numbers / unity.',
    example: '$(1 + i)^8 = (\\sqrt{2} e^{i\\pi/4})^8 = (\\sqrt{2})^8 e^{i(2\\pi)} = 16(1) = 16$.',
    diagramType: 'argand_plane'
  },
  {
    id: 'thm-binomial',
    class: 11,
    title: 'Binomial Theorem for Positive Integer Index',
    category: 'Algebra & Combinatorics',
    statement: 'Any power of a binomial sum $(a + b)^n$ can be expanded into a finite polynomial series of $(n + 1)$ terms with combination coefficients $\\binom{n}{r}$.',
    condition: '$n \\in \\mathbb{N}, \\; a, b \\in \\mathbb{R}$ or $\\mathbb{C}$',
    formula: '(a + b)^n = \\sum_{r=0}^n \\binom{n}{r} a^{n-r} b^r = \\binom{n}{0}a^n + \\binom{n}{1}a^{n-1}b + \\dots + \\binom{n}{n}b^n',
    proofOutline: [
      'Proved rigorously using Mathematical Induction on $n$',
      'Utilizes Pascal’s identity: $\\binom{n}{r} + \\binom{n}{r-1} = \\binom{n+1}{r}$',
      'General term: $T_{r+1} = \\binom{n}{r} a^{n-r} b^r$'
    ],
    importance: 'Fundamental tool in combinatorics, probability distributions, calculus expansions, and series approximations.',
    example: '$(x + 2)^3 = x^3 + 3(x^2)(2) + 3(x)(4) + 8 = x^3 + 6x^2 + 12x + 8$.',
    diagramType: 'pascal_triangle'
  },
  {
    id: 'thm-law-sines-cosines',
    class: 11,
    title: 'Law of Sines and Law of Cosines',
    category: 'Trigonometry',
    statement: 'In any arbitrary oblique triangle $\\triangle ABC$, side lengths are proportional to sines of opposite angles, and the square of any side relates to the other two sides through the cosine of the included angle.',
    condition: 'Any triangle with sides $a, b, c$ and opposite angles $\\alpha, \\beta, \\gamma$',
    formula: '\\frac{a}{\\sin\\alpha} = \\frac{b}{\\sin\\beta} = \\frac{c}{\\sin\\gamma} = 2R, \\qquad c^2 = a^2 + b^2 - 2ab\\cos\\gamma',
    proofOutline: [
      'For Law of Sines: express altitude $h = b\\sin\\alpha = a\\sin\\beta \\implies \\frac{a}{\\sin\\alpha} = \\frac{b}{\\sin\\beta}$',
      'For Law of Cosines: apply Pythagorean theorem in split right triangles with base segments $b - a\\cos\\gamma$ and height $a\\sin\\gamma$'
    ],
    importance: 'Solves non-right oblique triangles (SSS, SAS, AAS, SSA) and computes circumradius $R$.',
    example: 'If $a = 5, b = 7, \\gamma = 60^\\circ$: $c^2 = 25 + 49 - 2(5)(7)(0.5) = 74 - 35 = 39 \\implies c = \\sqrt{39}$.'
  },
  {
    id: 'thm-sandwich-squeeze',
    class: 12,
    title: 'Sandwich (Squeeze) Theorem',
    category: 'Calculus & Limits',
    statement: 'If $g(x) \\le f(x) \\le h(x)$ in an open interval around $c$ (except possibly at $c$) and $\\lim_{x \\to c} g(x) = \\lim_{x \\to c} h(x) = L$, then the middle limit exists and $\\lim_{x \\to c} f(x) = L$.',
    condition: '$g(x) \\le f(x) \\le h(x)$ near $c$ and $\\lim_{x \\to c} g(x) = \\lim_{x \\to c} h(x) = L$',
    formula: 'g(x) \\le f(x) \\le h(x) \\;\\land\\; \\lim_{x\\to c}g(x) = \\lim_{x\\to c}h(x) = L \\implies \\lim_{x \\to c} f(x) = L',
    proofOutline: [
      'Given $\\epsilon > 0$, choose $\\delta_1, \\delta_2$ such that $L - \\epsilon < g(x) < L + \\epsilon$ and $L - \\epsilon < h(x) < L + \\epsilon$',
      'For $\\delta = \\min(\\delta_1, \\delta_2)$: $L - \\epsilon < g(x) \\le f(x) \\le h(x) < L + \\epsilon$',
      'Therefore $|f(x) - L| < \\epsilon$, proving $\\lim_{x\\to c} f(x) = L$'
    ],
    importance: 'Proves the foundational trigonometric limit $\\lim_{\\theta \\to 0} \\frac{\\sin\\theta}{\\theta} = 1$.',
    example: 'Since $-|x| \\le x\\sin(1/x) \\le |x|$ and $\\lim_{x\\to 0} \\pm|x| = 0$, $\\lim_{x\\to 0} x\\sin(1/x) = 0$.',
    diagramType: 'sandwich_squeeze_theorem'
  },
  {
    id: 'thm-rolles',
    class: 12,
    title: 'Rolle’s Theorem',
    category: 'Calculus & Derivatives',
    statement: 'If a function $f$ is continuous on $[a, b]$, differentiable on $(a, b)$, and $f(a) = f(b)$, then there exists at least one point $c \\in (a, b)$ where the tangent is horizontal: $f\'(c) = 0$.',
    condition: '1. Continuous on $[a, b]$ \\newline 2. Differentiable on $(a, b)$ \\newline 3. $f(a) = f(b)$',
    formula: '\\exists c \\in (a, b) \\quad \\text{such that} \\quad f\'(c) = 0',
    proofOutline: [
      'By Extreme Value Theorem, $f$ attains absolute maximum $M$ and minimum $m$ on $[a, b]$',
      'Case 1: If $M = m$, $f$ is constant, so $f\'(x) = 0$ everywhere',
      'Case 2: If $M \\neq m$, at least one extremum occurs at an interior point $c \\in (a, b)$',
      'By Fermat’s Theorem on local extrema, $f\'(c) = 0$'
    ],
    importance: 'Guarantees stationary points and serves as the primary stepping stone to Lagrange’s Mean Value Theorem.',
    example: 'For $f(x) = x^2 - 4x + 3$ on $[1, 3]$: $f(1) = 0 = f(3)$. Derivative $f\'(x) = 2x - 4 = 0 \\implies c = 2 \\in (1, 3)$.'
  },
  {
    id: 'thm-mean-value-lagrange',
    class: 12,
    title: 'Lagrange’s Mean Value Theorem (MVT)',
    category: 'Calculus & Derivatives',
    statement: 'If a function $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then there exists at least one point $c \\in (a, b)$ where the instantaneous slope equals the average secant slope.',
    condition: 'Continuous on $[a, b]$ and differentiable on $(a, b)$',
    formula: 'f\'(c) = \\frac{f(b) - f(a)}{b - a} \\iff f(b) = f(a) + (b - a)f\'(c)',
    proofOutline: [
      'Construct the secant auxiliary function $g(x) = f(x) - f(a) - \\frac{f(b)-f(a)}{b-a}(x-a)$',
      'Notice $g(a) = 0$ and $g(b) = 0$',
      'Apply Rolle’s theorem to $g(x)$ on $[a, b]$: $\\exists c \\in (a, b)$ such that $g\'(c) = 0$',
      '$g\'(c) = f\'(c) - \\frac{f(b)-f(a)}{b-a} = 0 \\implies f\'(c) = \\frac{f(b)-f(a)}{b-a}$'
    ],
    importance: 'Proves that zero derivative implies constant function, strictly positive derivative implies strictly increasing function, and establishes error bounds for Taylor series.',
    example: 'For $f(x) = x^3$ on $[0, 2]$: average slope is $\\frac{8-0}{2-0} = 4$. $f\'(c) = 3c^2 = 4 \\implies c = \\frac{2}{\\sqrt{3}} \\in (0, 2)$.'
  },
  {
    id: 'thm-fundamental-calculus',
    class: 12,
    title: 'Fundamental Theorem of Calculus (FTC)',
    category: 'Calculus & Integration',
    statement: 'Connects differentiation and integration: Part 1 states differentiation reverses integration, and Part 2 shows definite integrals can be computed using antiderivatives.',
    condition: '$f(x)$ is continuous on $[a, b]$ and $F\'(x) = f(x)$',
    formula: '\\frac{d}{dx}\\left[\\int_a^x f(t)\\,dt\\right] = f(x), \\qquad \\int_a^b f(x)\\,dx = F(b) - F(a)',
    proofOutline: [
      'Let $A(x) = \\int_a^x f(t)\\,dt$. Difference quotient: $\\frac{A(x+h)-A(x)}{h} = \\frac{1}{h}\\int_x^{x+h} f(t)\\,dt$',
      'By Mean Value Theorem for Integrals: $\\frac{1}{h}\\int_x^{x+h} f(t)\\,dt = f(c)$ for $c \\in [x, x+h]$',
      'Taking $h \\to 0$, $c \\to x \\implies A\'(x) = f(x)$',
      'Part 2 follows: since $F(x) = A(x) + C$, $\\int_a^b f(x)\\,dx = A(b) - A(a) = F(b) - F(a)$'
    ],
    importance: 'The crowning achievement of calculus, eliminating the need to calculate Riemann sums directly.',
    example: '$\\int_0^3 x^2 \\, dx = \\left[ \\frac{x^3}{3} \\right]_0^3 = \\frac{27}{3} - 0 = 9$.',
    diagramType: 'integral_area_curve'
  },
  {
    id: 'thm-eulers-formula',
    class: 12,
    title: 'Euler’s Formula & Euler’s Identity',
    category: 'Complex Analysis',
    statement: 'Establishes the profound relationship between complex exponential functions and trigonometric circular functions. When $\\theta = \\pi$, it yields the celebrated Euler Identity connecting the five fundamental constants: $e, i, \\pi, 1, 0$.',
    condition: '$\\theta \\in \\mathbb{R}$ or $\\mathbb{C}$',
    formula: 'e^{i\\theta} = \\cos\\theta + i\\sin\\theta, \\qquad e^{i\\pi} + 1 = 0',
    proofOutline: [
      'Expand $e^z$ as Taylor series: $e^{i\\theta} = \\sum_{n=0}^\\infty \\frac{(i\\theta)^n}{n!} = 1 + i\\theta - \\frac{\\theta^2}{2!} - i\\frac{\\theta^3}{3!} + \\frac{\\theta^4}{4!} + \\dots$',
      'Group real terms: $\\left(1 - \\frac{\\theta^2}{2!} + \\frac{\\theta^4}{4!} - \\dots\\right) = \\cos\\theta$',
      'Group imaginary terms: $i\\left(\\theta - \\frac{\\theta^3}{3!} + \\frac{\\theta^5}{5!} - \\dots\\right) = i\\sin\\theta$',
      'Substitute $\\theta = \\pi$: $e^{i\\pi} = \\cos\\pi + i\\sin\\pi = -1 + 0 \\implies e^{i\\pi} + 1 = 0$'
    ],
    importance: 'Dubbed "the most beautiful equation in mathematics" by Richard Feynman, connecting geometry, calculus, and algebra.',
    example: 'Complex rotation: multiplying by $e^{i\\pi/2} = i$ rotates a vector in the complex plane by $+90^\\circ$.'
  }
];
