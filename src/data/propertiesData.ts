import { MathProperty } from '../types';

export const ALL_PROPERTIES: MathProperty[] = [
  {
    id: 'prop-sets',
    class: 10,
    title: 'Algebra of Sets & Binary Operation Properties',
    category: 'Set Theory & Logic',
    description: 'Fundamental algebraic laws governing set union, intersection, difference, and complement operations.',
    formula: 'A \\cup B = B \\cup A, \\qquad A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)',
    rules: [
      { label: 'Commutative Laws', formula: 'A \\cup B = B \\cup A, \\quad A \\cap B = B \\cap A', note: 'Order of sets does not change the result' },
      { label: 'Associative Laws', formula: '(A \\cup B) \\cup C = A \\cup (B \\cup C), \\quad (A \\cap B) \\cap C = A \\cap (B \\cap C)', note: 'Grouping does not change the result' },
      { label: 'Distributive Laws', formula: 'A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C), \\quad A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)', note: 'Intersection distributes over union and vice versa' },
      { label: 'Identity Laws', formula: 'A \\cup \\emptyset = A, \\quad A \\cap U = A', note: 'Empty set is identity for union; Universal set for intersection' },
      { label: 'Idempotent Laws', formula: 'A \\cup A = A, \\quad A \\cap A = A', note: 'Combining a set with itself yields the set itself' },
      { label: 'Complement Laws', formula: 'A \\cup A\' = U, \\quad A \\cap A\' = \\emptyset, \\quad (A\')\' = A', note: 'Set and its complement partition the universal set' },
      { label: 'De Morgan’s Laws', formula: '(A \\cup B)\' = A\' \\cap B\', \\quad (A \\cap B)\' = A\' \\cup B\'', note: 'Complement turns union into intersection and vice versa' }
    ],
    example: 'For $A = \\{1, 2\\}, B = \\{2, 3\\}, C = \\{3, 4\\}$: $A \\cap (B \\cup C) = \\{1, 2\\} \\cap \\{2, 3, 4\\} = \\{2\\} = (A \\cap B) \\cup (A \\cap C)$.'
  },
  {
    id: 'prop-matrices',
    class: 11,
    title: 'Matrix Operations & Transpose Properties',
    category: 'Matrices & Linear Algebra',
    description: 'Core algebraic properties of matrix addition, scalar multiplication, matrix multiplication, and transposition.',
    formula: '(AB)^T = B^T A^T, \\qquad (AB)^{-1} = B^{-1} A^{-1}',
    rules: [
      { label: 'Non-Commutativity of Multiplication', formula: 'AB \\neq BA \\quad (\\text{in general})', note: 'Matrix multiplication order is strictly rigid' },
      { label: 'Associativity of Multiplication', formula: 'A(BC) = (AB)C', note: 'Valid whenever dimension conformability holds' },
      { label: 'Distributive Law', formula: 'A(B + C) = AB + AC, \\quad (A + B)C = AC + BC', note: 'Left and right distribution must be maintained' },
      { label: 'Reversal Law for Transpose', formula: '(AB)^T = B^T A^T', note: 'Transpose of product equals product of transposes in reverse order' },
      { label: 'Transpose of Sum & Scalar', formula: '(A + B)^T = A^T + B^T, \\quad (kA)^T = k A^T', note: 'Linearity of transposition operation' },
      { label: 'Symmetric & Skew-Symmetric', formula: 'A^T = A \\iff \\text{Symmetric}, \\quad A^T = -A \\iff \\text{Skew-Symmetric}', note: 'Any square matrix $M = \\frac{1}{2}(M+M^T) + \\frac{1}{2}(M-M^T)$' },
      { label: 'Reversal Law for Inverse', formula: '(AB)^{-1} = B^{-1} A^{-1} \\quad (\\text{if } |A| \\neq 0, |B| \\neq 0)', note: 'Inverse of product equals product of inverses in reverse' }
    ],
    example: 'If $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$, $A^T = \\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$ and $(A^T)^T = A$.'
  },
  {
    id: 'prop-determinants',
    class: 11,
    title: 'Properties of Determinants',
    category: 'Matrices & Linear Algebra',
    description: 'Fundamental evaluation properties that simplify computation and characterization of square matrix determinants.',
    formula: '|AB| = |A||B|, \\qquad |A^T| = |A|, \\qquad |kA| = k^n |A|',
    rules: [
      { label: 'Invariance under Transpose', formula: '|A^T| = |A|', note: 'Rows and columns are completely symmetric in determinant properties' },
      { label: 'Row Interchanges', formula: '|A_{R_i \\leftrightarrow R_j}| = -|A|', note: 'Interchanging any two rows (or columns) reverses the sign' },
      { label: 'Identical Rows / Zero Row', formula: 'R_i = R_j \\implies |A| = 0, \\quad R_i = \\mathbf{0} \\implies |A| = 0', note: 'If any two rows are identical or proportional, determinant is zero' },
      { label: 'Scalar Factoring from a Row', formula: '|A_{k R_i}| = k |A|, \\qquad |kA|_{n \\times n} = k^n |A|', note: 'A scalar factor factors out from every single row' },
      { label: 'Elementary Row Additions (Shear)', formula: '|A_{R_i + k R_j}| = |A|', note: 'Adding a multiple of one row to another leaves determinant strictly unchanged' },
      { label: 'Multiplicative Property', formula: '|AB| = |A| \\cdot |B|', note: 'Determinant of matrix product equals product of individual determinants' },
      { label: 'Triangular Matrix Determinant', formula: '|T| = a_{11} a_{22} \\dots a_{nn}', note: 'Determinant of triangular/diagonal matrix is product of diagonal entries' }
    ],
    example: 'For $2 \\times 2$ matrix $A$ with $|A| = 5$, $|3A| = 3^2 \\times 5 = 45$.'
  },
  {
    id: 'prop-vectors',
    class: 11,
    title: 'Properties of Vector Dot & Cross Products',
    category: 'Vectors & 3D Geometry',
    description: 'Algebraic and geometric properties of scalar (dot) and vector (cross) products in Euclidean 3-space.',
    formula: '\\mathbf{u} \\cdot \\mathbf{v} = |\\mathbf{u}||\\mathbf{v}|\\cos\\theta, \\qquad \\mathbf{u} \\times \\mathbf{v} = |\\mathbf{u}||\\mathbf{v}|\\sin\\theta \\,\\mathbf{\\hat{n}}',
    rules: [
      { label: 'Dot Product Commutativity', formula: '\\mathbf{u} \\cdot \\mathbf{v} = \\mathbf{v} \\cdot \\mathbf{u}', note: 'Dot product is symmetric and produces a scalar' },
      { label: 'Perpendicularity Condition', formula: '\\mathbf{u} \\cdot \\mathbf{v} = 0 \\iff \\mathbf{u} \\perp \\mathbf{v} \\quad (\\text{for non-zero vectors})', note: 'Orthogonal vectors have zero dot product' },
      { label: 'Magnitude from Dot Product', formula: '\\mathbf{u} \\cdot \\mathbf{u} = |\\mathbf{u}|^2', note: 'Self dot product gives squared Euclidean norm' },
      { label: 'Cross Product Anti-Commutativity', formula: '\\mathbf{u} \\times \\mathbf{v} = -(\\mathbf{v} \\times \\mathbf{u})', note: 'Reversing vectors flips normal direction by right-hand rule' },
      { label: 'Parallel / Collinear Condition', formula: '\\mathbf{u} \\times \\mathbf{v} = \\mathbf{0} \\iff \\mathbf{u} \\parallel \\mathbf{v}', note: 'Parallel vectors have zero cross product' },
      { label: 'Geometric Area Interpretation', formula: '\\text{Area}(\\text{Parallelogram}) = |\\mathbf{u} \\times \\mathbf{v}|, \\quad \\text{Area}(\\triangle) = \\frac{1}{2}|\\mathbf{u} \\times \\mathbf{v}|', note: 'Magnitude equals area spanned by vectors' },
      { label: 'Scalar Triple Product (Volume)', formula: '[\\mathbf{u}, \\mathbf{v}, \\mathbf{w}] = \\mathbf{u} \\cdot (\\mathbf{v} \\times \\mathbf{w}) = \\text{Volume of Parallelepiped}', note: 'Zero if and only if vectors are coplanar' }
    ],
    example: '$\\mathbf{i} \\cdot \\mathbf{i} = 1, \\; \\mathbf{i} \\cdot \\mathbf{j} = 0, \\; \\mathbf{i} \\times \\mathbf{j} = \\mathbf{k}, \\; \\mathbf{j} \\times \\mathbf{i} = -\\mathbf{k}$.'
  },
  {
    id: 'prop-logarithms',
    class: 9,
    title: 'Laws and Properties of Logarithms',
    category: 'Algebra & Number Systems',
    description: 'Fundamental exponent-inversion properties enabling conversion of multiplication to addition and powers to multiplication.',
    formula: '\\log_b(xy) = \\log_b x + \\log_b y, \\qquad \\log_b(x^k) = k \\log_b x',
    rules: [
      { label: 'Product Law', formula: '\\log_b(M \\cdot N) = \\log_b M + \\log_b N', note: 'Turns multiplication into addition' },
      { label: 'Quotient Law', formula: '\\log_b\\left(\\frac{M}{N}\\right) = \\log_b M - \\log_b N', note: 'Turns division into subtraction' },
      { label: 'Power Law', formula: '\\log_b(M^k) = k \\log_b M', note: 'Pulls exponent out as linear multiplier' },
      { label: 'Change of Base Theorem', formula: '\\log_b a = \\frac{\\log_c a}{\\log_c b} = \\frac{\\ln a}{\\ln b}', note: 'Converts logarithm to any convenient base' },
      { label: 'Identity & Base Values', formula: '\\log_b 1 = 0, \\quad \\log_b b = 1, \\quad b^{\\log_b x} = x', note: 'Logarithm of 1 is always 0; base of itself is 1' },
      { label: 'Reciprocal Base Rule', formula: '\\log_{b^k} a = \\frac{1}{k} \\log_b a', note: 'Exponents in base divide out' }
    ],
    example: '$\\log_{10}(1000) = \\log_{10}(10^3) = 3 \\log_{10}(10) = 3(1) = 3$.'
  },
  {
    id: 'prop-calculus-derivatives',
    class: 12,
    title: 'Differentiation Rules & Algebraic Properties',
    category: 'Calculus & Derivatives',
    description: 'Operational linearity and algebraic rules governing differentiation of combinations of functions.',
    formula: '\\frac{d}{dx}[f(g(x))] = f\'(g(x)) \\cdot g\'(x), \\qquad \\frac{d}{dx}[uv] = u\'v + uv\'',
    rules: [
      { label: 'Linearity Rule', formula: '\\frac{d}{dx}[c_1 f(x) + c_2 g(x)] = c_1 f\'(x) + c_2 g\'(x)', note: 'Derivative of linear combination equals linear combination of derivatives' },
      { label: 'Product Rule (Leibniz Rule)', formula: '\\frac{d}{dx}[u(x) \\cdot v(x)] = u\'(x)v(x) + u(x)v\'(x)', note: 'Derivative of product is first derivative times second plus first times second derivative' },
      { label: 'Quotient Rule', formula: '\\frac{d}{dx}\\left[\\frac{u(x)}{v(x)}\\right] = \\frac{u\'(x)v(x) - u(x)v\'(x)}{[v(x)]^2}', note: 'Low d-high minus high d-low over square of low' },
      { label: 'Chain Rule (Composite Functions)', formula: '\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx} \\iff \\frac{d}{dx}[f(g(x))] = f\'(g(x)) g\'(x)', note: 'Differentiate outer function evaluated at inner, times inner derivative' },
      { label: 'Inverse Function Derivative', formula: '\\frac{d}{dx}[f^{-1}(x)] = \\frac{1}{f\'(f^{-1}(x))}', note: 'Reciprocal of derivative of original function' },
      { label: 'Power Rule', formula: '\\frac{d}{dx}[x^n] = n x^{n-1} \\quad (\\forall n \\in \\mathbb{R})', note: 'Brings power down and decrements power by 1' }
    ],
    example: '$\\frac{d}{dx}[x^2 \\sin x] = (2x)(\\sin x) + (x^2)(\\cos x) = x(2\\sin x + x\\cos x)$.'
  },
  {
    id: 'prop-calculus-integrals',
    class: 12,
    title: 'Properties of Definite Integrals',
    category: 'Calculus & Integration',
    description: 'Fundamental algebraic, interval-splitting, and symmetry properties of Riemann definite integrals.',
    formula: '\\int_a^b f(x)\\,dx = -\\int_b^a f(x)\\,dx, \\qquad \\int_a^b f(x)\\,dx = \\int_a^c f(x)\\,dx + \\int_c^b f(x)\\,dx',
    rules: [
      { label: 'Reversal of Limits', formula: '\\int_a^b f(x)\\,dx = -\\int_b^a f(x)\\,dx', note: 'Swapping integration bounds flips the sign' },
      { label: 'Zero Length Interval', formula: '\\int_a^a f(x)\\,dx = 0', note: 'Integral from a point to itself has zero area' },
      { label: 'Interval Additivity', formula: '\\int_a^b f(x)\\,dx = \\int_a^c f(x)\\,dx + \\int_c^b f(x)\\,dx', note: 'Splitting integral across piecewise intervals' },
      { label: 'Linearity of Integration', formula: '\\int_a^b [\\alpha f(x) + \\beta g(x)]\\,dx = \\alpha \\int_a^b f(x)\\,dx + \\beta \\int_a^b g(x)\\,dx', note: 'Constants pull out and sums integrate termwise' },
      { label: 'Even Function Symmetry', formula: 'f(-x) = f(x) \\implies \\int_{-a}^a f(x)\\,dx = 2 \\int_0^a f(x)\\,dx', note: 'Symmetric domain for even functions doubles half-area' },
      { label: 'Odd Function Symmetry', formula: 'f(-x) = -f(x) \\implies \\int_{-a}^a f(x)\\,dx = 0', note: 'Positive and negative areas cancel completely' },
      { label: 'King’s Property (Substitution)', formula: '\\int_a^b f(x)\\,dx = \\int_a^b f(a + b - x)\\,dx', note: 'Invaluable shortcut for definite trigonometric integrals' }
    ],
    example: '$\\int_{-\\pi}^{\\pi} \\sin^5(x)\\,dx = 0$ instantly because $\\sin^5(x)$ is an odd function.'
  }
];
