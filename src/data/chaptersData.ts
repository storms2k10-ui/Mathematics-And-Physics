import { Chapter } from '../types';

export const ELEMENTARY_CHAPTERS: Chapter[] = [
  // ==========================================
  // 📘 CLASS 9 — MATHEMATICS (16 CHAPTERS)
  // ==========================================
  {
    id: 'c9-ch1',
    class: 9,
    name: 'Real and Complex Numbers',
    description: 'Properties of real numbers, radicals and radicands, laws of exponents, complex numbers definition and basic operations ($z = a + ib$).',
    category: 'Number Systems & Logarithms',
    questionCount: 50,
    difficulty: 'Mixed',
    keyTopics: ['Real Numbers & Subsets', 'Properties of Equality & Inequalities', 'Radicals & Exponents', 'Complex Numbers ($i^2 = -1$)', 'Conjugates & Modulus'],
    color: 'indigo',
    icon: 'Binary',
    artTheme: 'logarithm',
    formulaHighlight: 'z = a + ib, \\quad |z| = \\sqrt{a^2 + b^2}, \\quad i^2 = -1',
  },
  {
    id: 'c9-ch2',
    class: 9,
    name: 'Logarithms',
    description: 'Scientific notation, concept of logarithm, characteristic and mantissa, fundamental laws of logarithms and application to calculations.',
    category: 'Number Systems & Logarithms',
    questionCount: 50,
    keyTopics: ['Scientific Notation', 'Common & Natural Logarithms', 'Laws of Logarithms', 'Change of Base', 'Logarithmic Equations'],
    color: 'emerald',
    icon: 'Percent',
    artTheme: 'logarithm',
    formulaHighlight: '\\log_a(mn) = \\log_a m + \\log_a n, \\quad \\log_a(m^n) = n\\log_a m',
  },
  {
    id: 'c9-ch3',
    class: 9,
    name: 'Algebraic Expressions and Algebraic Formulae',
    description: 'Rational expressions, evaluation of algebraic expressions, key identities (a±b)², (a±b)³, a³±b³, surds and rationalization of denominators.',
    category: 'Algebra & Polynomials',
    questionCount: 50,
    keyTopics: ['Rational Expressions', 'Algebraic Formulae & Identities', 'Surds & Monomial Surds', 'Rationalizing Denominators'],
    color: 'cyan',
    icon: 'Variable',
    artTheme: 'algebra',
    formulaHighlight: '(a+b+c)^2 = a^2+b^2+c^2 + 2(ab+bc+ca)',
  },
  {
    id: 'c9-ch4',
    class: 9,
    name: 'Factorization',
    description: 'Techniques of factorization: grouping, completing square, identities a²-b², a³±b³, Remainder Theorem, and Factor Theorem for polynomials.',
    category: 'Algebra & Polynomials',
    questionCount: 50,
    keyTopics: ['Factoring Quadratic Trinomials', 'Difference of Two Squares', 'Sum & Difference of Cubes', 'Remainder & Factor Theorem'],
    color: 'violet',
    icon: 'Split',
    artTheme: 'algebra',
    formulaHighlight: 'a^3 + b^3 = (a+b)(a^2 - ab + b^2)',
  },
  {
    id: 'c9-ch5',
    class: 9,
    name: 'Algebraic Manipulation',
    description: 'Highest Common Factor (H.C.F.) and Least Common Multiple (L.C.M.) of algebraic expressions by factorization and division, square root of expressions.',
    category: 'Algebra & Polynomials',
    questionCount: 50,
    keyTopics: ['H.C.F. by Factorization & Division', 'L.C.M. of Polynomials', 'Relation: HCF × LCM = P(x) × Q(x)', 'Square Root by Division Method'],
    color: 'amber',
    icon: 'Divide',
    artTheme: 'algebra',
    formulaHighlight: '\\text{HCF}(P,Q) \\times \\text{LCM}(P,Q) = P(x) \\times Q(x)',
  },
  {
    id: 'c9-ch6',
    class: 9,
    name: 'Linear Equations and Inequalities',
    description: 'Linear equations in one variable, absolute value equations, solving linear inequalities and graphical solutions on real number lines.',
    category: 'Algebra & Polynomials',
    questionCount: 50,
    keyTopics: ['Linear Equations in 1 Variable', 'Radical Equations & Extraneous Roots', 'Equations with Absolute Values |x|', 'Linear Inequalities & Interval Notation'],
    color: 'teal',
    icon: 'Sliders',
    artTheme: 'algebra',
    formulaHighlight: '|x| = a \\implies x = a \\text{ or } x = -a \\quad (a \\ge 0)',
  },
  {
    id: 'c9-ch7',
    class: 9,
    name: 'Linear Graphs and Their Applications',
    description: 'Cartesian coordinate plane, plotting points, graph of linear equation y = mx + c, conversion graphs and graphical solution of simultaneous equations.',
    category: 'Coordinate & Analytic Geometry',
    questionCount: 50,
    keyTopics: ['Cartesian Plane & Quadrants', 'Drawing Linear Graphs', 'Slope-Intercept Form (y = mx + c)', 'Simultaneous Equations Graphically'],
    color: 'rose',
    icon: 'LineChart',
    artTheme: 'coordinate',
    formulaHighlight: 'y = mx + c \\quad (m = \\text{slope}, c = y\\text{-intercept})',
  },
  {
    id: 'c9-ch8',
    class: 9,
    name: 'Introduction to Geometry',
    description: 'Axioms, postulates, undefined terms (point, line, plane), collinear and non-collinear points, angles and their classifications.',
    category: 'Geometry & Triangles',
    questionCount: 50,
    keyTopics: ['Euclidean Axioms & Postulates', 'Points, Rays, Line Segments', 'Types of Angles (Acute, Right, Obtuse)', 'Adjacent, Complementary, Supplementary Angles'],
    color: 'indigo',
    icon: 'Compass',
    artTheme: 'triangle',
    formulaHighlight: '\\angle A + \\angle B = 90^\\circ \\text{ (Complementary)}, \\quad 180^\\circ \\text{ (Supplementary)}',
  },
  {
    id: 'c9-ch9',
    class: 9,
    name: 'Congruent Triangles',
    description: 'Postulates of congruence of triangles (SAS, SSS, ASA, RHS) and proof of fundamental theorems of congruent geometric figures.',
    category: 'Geometry & Triangles',
    questionCount: 50,
    keyTopics: ['Congruence Postulate (S.A.S.)', 'S.S.S. and A.S.A. Theorems', 'R.H.S. Theorem for Right Triangles', 'Corresponding Parts of Congruent Triangles (CPCTC)'],
    color: 'emerald',
    icon: 'Triangle',
    artTheme: 'triangle',
    formulaHighlight: '\\Delta ABC \\cong \\Delta DEF \\iff \\text{Sides and angles match}',
  },
  {
    id: 'c9-ch10',
    class: 9,
    name: 'Parallelograms and Triangles',
    description: 'Properties and theorems on parallelograms, midpoint theorem of triangles, concurrent medians and line segments connecting midpoints.',
    category: 'Geometry & Triangles',
    questionCount: 50,
    keyTopics: ['Opposite Sides & Angles of Parallelogram', 'Diagonals Bisecting Each Other', 'Midpoint Theorem of Triangles', 'Medians Concurrency'],
    color: 'cyan',
    icon: 'Square',
    artTheme: 'triangle',
    formulaHighlight: '\\text{In } \\Delta ABC, \\text{ midpoint segment } DE = \\frac{1}{2}BC \\text{ and } DE \\parallel BC',
  },
  {
    id: 'c9-ch11',
    class: 9,
    name: 'Line Bisectors and Angle Bisectors',
    description: 'Right bisector of a line segment, bisector of an angle, concurrency of right bisectors, angle bisectors and altitudes in a triangle.',
    category: 'Geometry & Triangles',
    questionCount: 50,
    keyTopics: ['Perpendicular Bisector of Segment', 'Angle Bisector Theorems', 'Circumcenter of Triangle', 'Incenter of Triangle'],
    color: 'violet',
    icon: 'Maximize2',
    artTheme: 'triangle',
    formulaHighlight: '\\text{Any point on right bisector is equidistant from endpoints}',
  },
  {
    id: 'c9-ch12',
    class: 9,
    name: 'Sides and Angles of a Triangle',
    description: 'Inequalities in a triangle: side opposite to greater angle, triangle inequality theorem (sum of any two sides is greater than third).',
    category: 'Geometry & Triangles',
    questionCount: 50,
    keyTopics: ['Greater Angle Opposite Greater Side', 'Triangle Inequality: a + b > c', 'Perpendicular is Shortest Distance'],
    color: 'amber',
    icon: 'TriangleAlert',
    artTheme: 'triangle',
    formulaHighlight: 'a + b > c, \\quad b + c > a, \\quad c + a > b',
  },
  {
    id: 'c9-ch13',
    class: 9,
    name: 'Practical Geometry — Triangles',
    description: 'Construction of triangles under given conditions, construction of medians, altitudes, angle bisectors, and circumscribed/inscribed circles.',
    category: 'Geometry & Triangles',
    questionCount: 50,
    keyTopics: ['Constructing Triangles with Ruler & Compass', 'Drawing Altitudes & Orthocenter', 'Drawing Medians & Centroid', 'Incircle & Circumcircle Construction'],
    color: 'teal',
    icon: 'PenTool',
    artTheme: 'triangle',
    formulaHighlight: '\\text{Centroid divides median in ratio } 2 : 1',
  },
  {
    id: 'c9-ch14',
    class: 9,
    name: 'Theorems Related with Area',
    description: 'Parallelograms and triangles on the same base and between same parallels, equal area theorems, and area calculation properties.',
    category: 'Geometry & Triangles',
    questionCount: 50,
    keyTopics: ['Parallelograms on Same Base and Between Parallels', 'Triangles on Same Base with Equal Altitudes', 'Area of Triangle = 1/2 × Base × Height'],
    color: 'rose',
    icon: 'Layers',
    artTheme: 'triangle',
    formulaHighlight: '\\text{Area}(\\Delta) = \\frac{1}{2} \\times \\text{base} \\times \\text{height}',
  },
  {
    id: 'c9-ch15',
    class: 9,
    name: 'Projection of a Side of a Triangle',
    description: 'Concept of orthogonal projection, Pythagoras Theorem and its generalized acute-angled and obtuse-angled triangle extensions.',
    category: 'Geometry & Triangles',
    questionCount: 50,
    keyTopics: ['Orthogonal Projection of Point & Line', 'Pythagoras Theorem: c² = a² + b²', 'Acute Angle Projection Theorem', 'Obtuse Angle Extension Theorem'],
    color: 'indigo',
    icon: 'MoveDiagonal',
    artTheme: 'triangle',
    formulaHighlight: 'c^2 = a^2 + b^2 - 2a \\cdot p \\quad (\\text{Acute Triangle})',
  },
  {
    id: 'c9-ch16',
    class: 9,
    name: 'Introduction to Coordinate Geometry',
    description: 'Distance formula between two points, collinear points, midpoint formula, and verification of geometric shapes in Cartesian plane.',
    category: 'Coordinate & Analytic Geometry',
    questionCount: 50,
    keyTopics: ['Distance Formula in 2D Plane', 'Collinear & Non-Collinear Points', 'Midpoint Formula: ((x₁+x₂)/2, (y₁+y₂)/2)', 'Classifying Triangles & Quadrilaterals'],
    color: 'emerald',
    icon: 'Grid',
    artTheme: 'coordinate',
    formulaHighlight: 'd = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}, \\quad M = \\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)',
  },
  {
    id: 'c9-ch17',
    class: 9,
    name: 'Quadratic Equations',
    description: 'Standard form ax² + bx + c = 0, solution methods by factorization, completing the square, quadratic formula, nature of roots, and discriminant.',
    category: 'Algebra & Polynomials',
    questionCount: 50,
    keyTopics: ['Standard Quadratic Form ax² + bx + c = 0', 'Solving by Factorization & Pure Equations', 'Completing the Square Method', 'Quadratic Formula x = (-b ± √(b² - 4ac)) / 2a', 'Discriminant Δ = b² - 4ac & Nature of Roots', 'Sum and Product of Roots: S = -b/a, P = c/a'],
    color: 'violet',
    icon: 'Split',
    artTheme: 'algebra',
    formulaHighlight: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}, \\quad \\Delta = b^2 - 4ac',
  },

  // ==========================================
  // 📕 CLASS 11 — MATHEMATICS (12 CHAPTERS)
  // ==========================================
  {
    id: 'c11-ch1',
    class: 11,
    name: 'Complex Numbers',
    description: 'Comprehensive study of complex numbers $z = a + ib$, algebraic operations, conjugate $\\bar{z} = a - ib$, modulus $|z| = \\sqrt{a^2 + b^2} = \\sqrt{z\\bar{z}}$, multiplicative inverse $z^{-1} = \\frac{\\bar{z}}{|z|^2}$, polar and exponential form $z = r(\\cos\\theta + i\\sin\\theta) = re^{i\\theta}$, Euler\'s relation $e^{i\\pi} + 1 = 0$, De Moivre\'s Theorem $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$, cube roots of unity $(1, \\omega, \\omega^2 \\text{ with } 1 + \\omega + \\omega^2 = 0, \\omega^3 = 1)$, and geometric Argand plane mappings.',
    category: 'Number Systems & Logarithms',
    questionCount: 50,
    difficulty: 'Mixed',
    keyTopics: [
      'Algebraic Form: $z = a + ib \\quad (a, b \\in \\mathbb{R}, \\; i = \\sqrt{-1}, \\; i^2 = -1)$',
      'Modulus & Conjugate: $|z| = \\sqrt{a^2 + b^2}, \\quad \\bar{z} = a - ib, \\quad z\\bar{z} = |z|^2$',
      'Multiplicative Inverse: $z^{-1} = \\frac{\\bar{z}}{|z|^2} = \\frac{a - ib}{a^2 + b^2} \\quad (z \\ne 0)$',
      'Polar & Exponential: $z = r(\\cos\\theta + i\\sin\\theta) = r e^{i\\theta} \\quad (r = |z|, \\; \\theta = \\arg(z))$',
      'De Moivre\'s Theorem: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$',
      'Cube Roots of Unity: $1 + \\omega + \\omega^2 = 0, \\quad \\omega^3 = 1, \\quad \\omega = \\frac{-1 + i\\sqrt{3}}{2}$',
      'Argand Diagram & Triangle Inequalities: $|z_1 + z_2| \\le |z_1| + |z_2|$'
    ],
    color: 'indigo',
    icon: 'Binary',
    artTheme: 'logarithm',
    formulaHighlight: 'z = a + ib, \\quad |z| = \\sqrt{a^2 + b^2}, \\quad z^{-1} = \\frac{\\bar{z}}{|z|^2}, \\quad e^{i\\theta} = \\cos\\theta + i\\sin\\theta',
  },
  {
    id: 'c11-ch2',
    class: 11,
    name: 'Matrices and Determinants',
    description: 'Matrix algebra, determinant properties, adjoint and inverse (A⁻¹ = adj(A)/|A|), rank of matrix, and solving systems of linear equations.',
    category: 'Matrices & Determinants',
    questionCount: 50,
    difficulty: 'Mixed',
    keyTopics: ['Matrix Multiplication & Transpose', 'Determinant Properties & Cofactors', 'Inverse A⁻¹ = \\frac{1}{|A|}\\text{adj}(A)', 'Echelon & Reduced Echelon Form'],
    color: 'emerald',
    icon: 'Grid',
    artTheme: 'matrix',
    formulaHighlight: 'A^{-1} = \\frac{1}{|A|} \\text{adj}(A), \\quad |AB| = |A| \\cdot |B|',
  },
  {
    id: 'c11-ch3',
    class: 11,
    name: 'Vectors',
    description: 'Vectors in 2D and 3D, scalar (dot) product a·b = |a||b|cos θ, vector (cross) product a×b, scalar triple product and vector applications in mechanics.',
    category: 'Vectors',
    questionCount: 50,
    difficulty: 'Mixed',
    keyTopics: ['Unit Vectors & Direction Cosines', 'Scalar (Dot) Product: \\vec{a} \\cdot \\vec{b}', 'Vector (Cross) Product: \\vec{a} \\times \\vec{b}', 'Scalar Triple Product \\vec{a} \\cdot (\\vec{b} \\times \\vec{c})', 'Work Done & Moment of Force'],
    color: 'cyan',
    icon: 'Navigation',
    artTheme: 'vector',
    formulaHighlight: '\\vec{a} \\cdot \\vec{b} = |a||b|\\cos\\theta, \\quad |\\vec{a} \\times \\vec{b}| = |a||b|\\sin\\theta',
  },
  {
    id: 'c11-ch4',
    class: 11,
    name: 'Sequence and Series',
    description: 'Arithmetic Progression (A.P.), Geometric Progression (G.P.), Harmonic Progression (H.P.), Arithmetic, Geometric and Harmonic Means (A ≥ G ≥ H).',
    category: 'Sequences & Induction',
    questionCount: 50,
    difficulty: 'Mixed',
    keyTopics: ['A.P. General Term a_n = a + (n-1)d', 'Sum of A.P.: S_n = \\frac{n}{2}[2a+(n-1)d]', 'G.P. Sum: S_n = \\frac{a(1-r^n)}{1-r}', 'Infinite G.P. Sum: S_\\infty = \\frac{a}{1-r}', 'Relation: A \\ge G \\ge H and G^2 = AH'],
    color: 'violet',
    icon: 'TrendingUp',
    artTheme: 'series',
    formulaHighlight: 'S_\\infty = \\frac{a}{1-r} \\; (|r| < 1), \\quad G^2 = A \\times H',
  },
  {
    id: 'c11-ch5',
    class: 11,
    name: 'Miscellaneous Series',
    description: 'Sigma notation ($\\Sigma$), summation of the first $n$ natural numbers $\\sum_{r=1}^n r = \\frac{n(n+1)}{2}$, sum of squares $\\sum_{r=1}^n r^2 = \\frac{n(n+1)(2n+1)}{6}$, sum of cubes $\\sum_{r=1}^n r^3 = \\left[\\frac{n(n+1)}{2}\\right]^2$, method of differences with telescoping partial fractions $\\frac{1}{r(r+1)} = \\frac{1}{r} - \\frac{1}{r+1}$, and infinite arithmetico-geometric series (A.G.S.) $S_\\infty = \\frac{a}{1-r} + \\frac{dr}{(1-r)^2}$ for $|r| < 1$.',
    category: 'Sequences & Induction',
    questionCount: 50,
    difficulty: 'Mixed',
    keyTopics: [
      'Sum of First $n$ Natural Numbers: $\\sum_{r=1}^n r = \\frac{n(n+1)}{2}$',
      'Sum of First $n$ Squares: $\\sum_{r=1}^n r^2 = \\frac{n(n+1)(2n+1)}{6}$',
      'Sum of First $n$ Cubes: $\\sum_{r=1}^n r^3 = \\left[\\frac{n(n+1)}{2}\\right]^2 = (\\sum r)^2$',
      'Method of Differences & Telescoping Series: $\\sum_{r=1}^n [f(r+1)-f(r)] = f(n+1)-f(1)$',
      'Partial Fraction Telescoping: $\\sum_{r=1}^n \\frac{1}{r(r+1)} = 1 - \\frac{1}{n+1}$',
      'Arithmetico-Geometric Series (A.G.S.): $S_\\infty = \\frac{a}{1-r} + \\frac{dr}{(1-r)^2} \\quad (|r|<1)$'
    ],
    color: 'amber',
    icon: 'Sigma',
    artTheme: 'series',
    formulaHighlight: '\\sum_{r=1}^n r = \\frac{n(n+1)}{2}, \\quad \\sum_{r=1}^n r^2 = \\frac{n(n+1)(2n+1)}{6}, \\quad S_\\infty = \\frac{a}{1-r} + \\frac{dr}{(1-r)^2}',
  },
  {
    id: 'c11-ch6',
    class: 11,
    name: 'Permutation and Combination and Probability',
    description: 'Fundamental principle of counting, Permutations ⁿPᵣ, Combinations ⁿCᵣ, sample space, classical probability, addition and multiplication theorems.',
    category: 'Probability & Combinatorics',
    questionCount: 50,
    difficulty: 'Mixed',
    keyTopics: ['Permutations: ^nP_r = \\frac{n!}{(n-r)!}', 'Combinations: ^nC_r = \\frac{n!}{r!(n-r)!}', 'Probability P(E) = n(E)/n(S)', 'Conditional Probability & Independent Events'],
    color: 'teal',
    icon: 'Dices',
    artTheme: 'probability',
    formulaHighlight: '^nC_r = \\frac{n!}{r!(n-r)!}, \\quad P(A \\cup B) = P(A) + P(B) - P(A \\cap B)',
  },
  {
    id: 'c11-ch7',
    class: 11,
    name: 'Mathematical Induction and Binomial Theorem',
    description: 'Principle of mathematical induction, Binomial Theorem for positive integer index (a+b)ⁿ, general term T_{r+1}, and binomial theorem for any rational index.',
    category: 'Sequences & Induction',
    questionCount: 50,
    difficulty: 'Mixed',
    keyTopics: ['Principle of Mathematical Induction', 'Binomial Expansion (a+b)ⁿ = \\sum ^nC_r a^{n-r} b^r', 'General Term: T_{r+1} = ^nC_r a^{n-r} b^r', 'Middle Terms & Binomial Approximations'],
    color: 'rose',
    icon: 'Layers',
    artTheme: 'series',
    formulaHighlight: '(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r, \\quad T_{r+1} = {^nC_r} a^{n-r} b^r',
  },
  {
    id: 'c11-ch8',
    class: 11,
    name: 'Functions and Graphs',
    description: 'Domain and range of real-valued functions, odd/even functions, inverse functions f⁻¹(x), composition (f ∘ g)(x), and graphs of basic functions.',
    category: 'Algebra & Polynomials',
    questionCount: 50,
    difficulty: 'Mixed',
    keyTopics: ['Domain & Range Analysis', 'Composition of Functions (f ∘ g)(x)', 'Inverse Functions & Invertibility Criteria', 'Even (f(-x)=f(x)) & Odd (f(-x)=-f(x)) Functions'],
    color: 'indigo',
    icon: 'FunctionSquare',
    artTheme: 'algebra',
    formulaHighlight: '(f \\circ g)(x) = f(g(x)), \\quad f(f^{-1}(x)) = x',
  },
  {
    id: 'c11-ch9',
    class: 11,
    name: 'Linear Programming',
    description: 'Linear inequalities in two variables, feasible region, corner point theorem, and optimizing linear objective functions z = ax + by.',
    category: 'Numerical Methods & Optimization',
    questionCount: 50,
    difficulty: 'Mixed',
    keyTopics: ['Linear Constraints & Boundary Lines', 'Feasible Region & Bounded vs Unbounded', 'Corner Point Method', 'Maximizing & Minimizing Objective Function Z'],
    color: 'emerald',
    icon: 'Target',
    artTheme: 'algebra',
    formulaHighlight: 'Z_{\\max} \\text{ occurs at one of the vertices (corner points) of feasible region}',
  },
  {
    id: 'c11-ch10',
    class: 11,
    name: 'Trigonometric Identities of Sum and Difference of Angles',
    description: 'Fundamental law cos(α - β), sum and difference formulas for sin, cos, tan, double angle, half angle, triple angle, and sum-to-product formulas.',
    category: 'Trigonometry',
    questionCount: 50,
    difficulty: 'Mixed',
    keyTopics: ['\\sin(\\alpha \\pm \\beta), \\cos(\\alpha \\pm \\beta)', 'Double Angle: \\sin 2\\theta = 2\\sin\\theta\\cos\\theta', 'Half Angle Formulas: \\sin(\\theta/2) = \\pm\\sqrt{\\frac{1-\\cos\\theta}{2}}', 'Product into Sum and Sum into Product'],
    color: 'cyan',
    icon: 'Percent',
    artTheme: 'trigonometry',
    formulaHighlight: '\\sin(\\alpha+\\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta',
  },
  {
    id: 'c11-ch11',
    class: 11,
    name: 'Application of Trigonometry',
    description: 'Law of Sines, Law of Cosines, Law of Tangents, Half-Angle Formulas, Hero’s Formula, and radii of circumscribed, inscribed, and escribed circles (R, r, r₁, r₂, r₃).',
    category: 'Trigonometry',
    questionCount: 50,
    difficulty: 'Mixed',
    keyTopics: ['Law of Sines: \\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R', 'Law of Cosines: a^2 = b^2 + c^2 - 2bc\\cos A', 'Hero’s Formula: \\Delta = \\sqrt{s(s-a)(s-b)(s-c)}', 'Incircle Radius r = \\Delta/s, \\text{ Circumradius } R = \\frac{abc}{4\\Delta}'],
    color: 'violet',
    icon: 'Sparkles',
    artTheme: 'trigonometry',
    formulaHighlight: '\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R, \\quad r = \\frac{\\Delta}{s}',
  },
  {
    id: 'c11-ch12',
    class: 11,
    name: 'Graphs of Trigonometric and Inverse Trigonometric Functions and Solutions of Trigonometric Equations',
    description: 'Periods of trigonometric functions, graphs of sin x, cos x, tan x, inverse trigonometric functions (arcsin, arccos, arctan), and general solutions of trig equations.',
    category: 'Trigonometry',
    questionCount: 50,
    difficulty: 'Mixed',
    keyTopics: ['Periods: Period of sin, cos, sec, csc is 2π; tan, cot is π', 'Graphs & Principal Value Branches', 'Inverse Trigonometric Functions Properties', 'General Solutions with nπ and 2nπ'],
    color: 'amber',
    icon: 'Activity',
    artTheme: 'trigonometry',
    formulaHighlight: '\\sin\\theta = 0 \\implies \\theta = n\\pi, \\quad \\sin\\theta = \\sin\\alpha \\implies \\theta = n\\pi + (-1)^n\\alpha',
  },

  // ==========================================
  // 📗 CLASS 10 — MATHEMATICS (15 CHAPTERS)
  // ==========================================
  {
    id: 'c10-ch1',
    class: 10,
    name: 'Sets and Functions',
    description: 'Operations on sets, De Morgan\'s laws, Cartesian products, binary relations, domain and range, and classification of functions (injective, surjective, bijective).',
    category: 'Algebra & Polynomials',
    questionCount: 50,
    keyTopics: ['De Morgan\'s Laws', 'Cartesian Product $A \\times B$', 'Binary Relations & Domain/Range', 'Types of Functions: One-to-One, Onto, Bijective'],
    color: 'indigo',
    icon: 'Binary',
    artTheme: 'algebra',
    formulaHighlight: '(A \\cup B)\' = A\' \\cap B\', \\quad (A \\cap B)\' = A\' \\cup B\'',
  },
  {
    id: 'c10-ch2',
    class: 10,
    name: 'Variations',
    description: 'Direct variation, inverse variation, joint variation, theorems on proportions (componendo, dividendo, alternando, invertendo), and k-method.',
    category: 'Algebra & Polynomials',
    questionCount: 50,
    keyTopics: ['Direct Variation $y \\propto x$', 'Inverse Variation $y \\propto \\frac{1}{x}$', 'Componendo-Dividendo Theorem', 'The k-Method for Proportions'],
    color: 'emerald',
    icon: 'Sliders',
    artTheme: 'algebra',
    formulaHighlight: 'y = kx, \\quad \\frac{a+b}{a-b} = \\frac{c+d}{c-d}',
  },
  {
    id: 'c10-ch3',
    class: 10,
    name: 'Matrices and Determinants',
    description: 'Matrix types, matrix addition, multiplication, determinant of 2×2 matrix, multiplicative inverse ($A^{-1} = \\frac{\\text{adj}(A)}{|A|}$), and Cramer\'s rule.',
    category: 'Matrices & Determinants',
    questionCount: 50,
    keyTopics: ['Order & Types of Matrices', 'Determinant $|A| = ad - bc$', 'Multiplicative Inverse $A^{-1}$', 'Cramer\'s Rule & Matrix Inversion Method'],
    color: 'cyan',
    icon: 'Grid',
    artTheme: 'matrix',
    formulaHighlight: 'A^{-1} = \\frac{1}{ad-bc}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}',
  },
  {
    id: 'c10-ch4',
    class: 10,
    name: 'Theory of Quadratic Equations',
    description: 'Nature of roots using discriminant $\\Delta = b^2 - 4ac$, cube roots of unity ($1, \\omega, \\omega^2$), properties of roots, symmetric functions, and synthetic division.',
    category: 'Algebra & Polynomials',
    questionCount: 50,
    keyTopics: ['Discriminant $\\Delta = b^2 - 4ac$', 'Cube Roots of Unity: $1+\\omega+\\omega^2=0$', 'Sum & Product of Roots', 'Synthetic Division & Formation of Equation'],
    color: 'violet',
    icon: 'Split',
    artTheme: 'algebra',
    formulaHighlight: '1 + \\omega + \\omega^2 = 0, \\quad \\omega^3 = 1, \\quad x^2 - Sx + P = 0',
  },
  {
    id: 'c10-ch5',
    class: 10,
    name: 'Mixed Chapters MCQS',
    description: 'Comprehensive mixed chapter review covering simultaneous linear equations, algebraic techniques, and coordinate applications.',
    category: 'Algebra & Polynomials',
    questionCount: 50,
    keyTopics: ['Linear Systems in Two Variables', 'Elimination & Substitution Methods', 'Graphical Solutions & Consistency', 'Simultaneous Equation Applications'],
    color: 'amber',
    icon: 'Split',
    artTheme: 'algebra',
    formulaHighlight: 'a_1 x + b_1 y = c_1, \\quad a_2 x + b_2 y = c_2',
  },
  {
    id: 'c10-ch6',
    class: 10,
    name: 'Basic Statistics',
    description: 'Frequency distributions, cumulative frequency, measures of central tendency (Arithmetic Mean, Median, Mode), and measures of dispersion (Range, Variance, Standard Deviation).',
    category: 'Probability & Combinatorics',
    questionCount: 50,
    keyTopics: ['Arithmetic Mean $\\bar{x} = \\frac{\\sum fx}{\\sum f}$', 'Median & Mode for Grouped Data', 'Variance $\\sigma^2$ & Standard Deviation $S$', 'Histograms & Frequency Polygons'],
    color: 'teal',
    icon: 'Percent',
    artTheme: 'series',
    formulaHighlight: '\\bar{x} = \\frac{\\sum fx}{N}, \\quad S = \\sqrt{\\frac{\\sum (x-\\bar{x})^2}{n}}',
  },
  {
    id: 'c10-ch7',
    class: 10,
    name: 'Introduction to Trigonometry',
    description: 'Sexagesimal and radian measures, arc length $s = r\\theta$, trigonometric ratios of standard angles ($30^\\circ, 45^\\circ, 60^\\circ$), fundamental identities ($\\sin^2\\theta + \\cos^2\\theta = 1$), and angles of elevation & depression.',
    category: 'Trigonometry',
    questionCount: 50,
    keyTopics: ['Radians & Degrees: $\\pi \\text{ rad} = 180^\\circ$', 'Arc Length $s = r\\theta$ & Sector Area $A = \\frac{1}{2}r^2\\theta$', 'Fundamental Identities: $\\sin^2\\theta+\\cos^2\\theta=1$', '$1+\\tan^2\\theta=\\sec^2\\theta, \\; 1+\\cot^2\\theta=\\csc^2\\theta$', 'Heights & Distances (Elevation & Depression)'],
    color: 'rose',
    icon: 'Activity',
    artTheme: 'trigonometry',
    formulaHighlight: '\\sin^2\\theta + \\cos^2\\theta = 1, \\quad s = r\\theta, \\quad 1 + \\tan^2\\theta = \\sec^2\\theta',
  },
  {
    id: 'c10-ch8',
    class: 10,
    name: 'Ratio and Proportion',
    description: 'Theorems on proportional segments in triangles, angle bisector theorem, similarity of triangles, and geometric applications.',
    category: 'Geometry & Triangles',
    questionCount: 50,
    keyTopics: ['Basic Proportionality Theorem (Thales Theorem)', 'Internal Angle Bisector Theorem', 'Similar Triangles Criteria (AAA, SAS, SSS)', 'Areas of Similar Triangles'],
    color: 'indigo',
    icon: 'Sliders',
    artTheme: 'triangle',
    formulaHighlight: '\\frac{AD}{DB} = \\frac{AE}{EC} \\quad (DE \\parallel BC)',
  },
  {
    id: 'c10-ch9',
    class: 10,
    name: 'Chords of a Circle',
    description: 'Theorems on chords of a circle: perpendicular from center bisects chord, congruent chords equidistant from center, and distance properties.',
    category: 'Geometry & Triangles',
    questionCount: 50,
    keyTopics: ['Perpendicular Bisector of Chord Passes Through Center', 'Equal Chords Subtend Equal Central Distances', 'Congruent Chords in Congruent Circles'],
    color: 'emerald',
    icon: 'Compass',
    artTheme: 'triangle',
    formulaHighlight: '\\text{Perpendicular from center to chord bisects the chord}',
  },
  {
    id: 'c10-ch10',
    class: 10,
    name: 'Tangents of a Circle',
    description: 'Tangent line definition, tangent perpendicular to radius at point of contact, lengths of two tangents from external point are equal.',
    category: 'Geometry & Triangles',
    questionCount: 50,
    keyTopics: ['Radius-Tangent Perpendicularity ($r \\perp t$)', 'Two Tangents from External Point ($PA = PB$)', 'Direct & Transverse Common Tangents'],
    color: 'cyan',
    icon: 'Layers',
    artTheme: 'triangle',
    formulaHighlight: 'PA = PB \\quad (\\text{Tangents from external point } P)',
  },
  {
    id: 'c10-ch11',
    class: 10,
    name: 'Chords and Arcs',
    description: 'Major and minor arcs, central angles subtended by congruent arcs, relationship between chords and corresponding arcs in a circle.',
    category: 'Geometry & Triangles',
    questionCount: 50,
    keyTopics: ['Congruent Arcs & Equal Chords', 'Central Angles & Arc Measure', 'Sectors and Segments of Circles'],
    color: 'violet',
    icon: 'Sparkles',
    artTheme: 'triangle',
    formulaHighlight: '\\text{Arc Length } s = r\\theta, \\quad \\text{Sector Area } A = \\frac{1}{2}r^2\\theta',
  },
  {
    id: 'c10-ch12',
    class: 10,
    name: 'Angles in a Segment of a Circle',
    description: 'Inscribed angle theorem: central angle is twice the inscribed angle, angles in the same segment are equal, angle in a semicircle is a right angle.',
    category: 'Geometry & Triangles',
    questionCount: 50,
    keyTopics: ['Central Angle is Double Inscribed Angle: $\\angle BOC = 2\\angle BAC$', 'Angles in the Same Segment are Equal', 'Angle in a Semicircle is $90^\\circ$', 'Cyclic Quadrilateral Opposite Angles Supplementary'],
    color: 'amber',
    icon: 'Triangle',
    artTheme: 'triangle',
    formulaHighlight: '\\angle \\text{Center} = 2 \\times \\angle \\text{Circumference}, \\quad \\angle \\text{Semicircle} = 90^\\circ',
  },
  {
    id: 'c10-ch13',
    class: 10,
    name: 'Practical Geometry – Circles',
    description: 'Constructions of circles: circumscribed circle, inscribed circle, escribed circle, tangents to a circle from external point, direct and transverse common tangents.',
    category: 'Geometry & Triangles',
    questionCount: 50,
    keyTopics: ['Circumcircle Construction', 'Incircle Construction', 'Escribed Circles of Triangles', 'Direct & Transverse Common Tangents to Two Circles'],
    color: 'teal',
    icon: 'PenTool',
    artTheme: 'triangle',
    formulaHighlight: '\\text{Circumcenter = intersection of perpendicular bisectors}',
  },
  {
    id: 'c10-ch14',
    class: 10,
    name: "Pythagoras' Theorem",
    description: 'Statement and proof of Pythagoras theorem ($c^2 = a^2 + b^2$), converse of Pythagoras theorem, coordinate distance formulas, and geometric applications.',
    category: 'Geometry & Triangles',
    questionCount: 50,
    keyTopics: ['Pythagorean Identity $c^2 = a^2 + b^2$', 'Distance Formula $d = \\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$', 'Midpoint & Centroid Coordinates', 'Right-Angled Triangle Applications'],
    color: 'rose',
    icon: 'MoveDiagonal',
    artTheme: 'triangle',
    formulaHighlight: '(\\text{Hypotenuse})^2 = (\\text{Base})^2 + (\\text{Perpendicular})^2',
  },
  {
    id: 'c10-ch15',
    class: 10,
    name: 'Partial Fractions',
    description: 'Proper and improper rational fractions, decomposition into partial fractions with non-repeated linear, repeated linear, and irreducible quadratic factors.',
    category: 'Algebra & Polynomials',
    questionCount: 50,
    keyTopics: ['Proper vs Improper Fractions', 'Linear Non-Repeated Factors', 'Repeated Linear Factors', 'Irreducible Quadratic Factors'],
    color: 'amber',
    icon: 'Divide',
    artTheme: 'algebra',
    formulaHighlight: '\\frac{P(x)}{Q(x)} = \\frac{A}{ax+b} + \\frac{B}{cx+d}',
  },

  // ==========================================
  // 📙 CLASS 12 — MATHEMATICS (11 CHAPTERS)
  // ==========================================
  {
    id: 'c12-ch1',
    class: 12,
    name: 'Functions and Limits',
    description: 'Concepts of single-valued functions $y=f(x)$, domain $D_f$, range $R_f$, composite functions $(g \\circ f)(x) = g(f(x))$, one-sided limits $\\lim_{x \\to a^-} f(x)$ and $\\lim_{x \\to a^+} f(x)$, existence criterion $(\\text{LHL} = \\text{RHL} = L)$, Sandwich / Squeeze Theorem, and continuity $\\lim_{x \\to a} f(x) = f(a)$.',
    category: 'Calculus & Derivatives',
    questionCount: 50,
    difficulty: 'Mixed',
    keyTopics: [
      'Function $y=f(x)$, Domain $D_f = \\{x : f(x) \\in \\mathbb{R}\\}$ & Range $R_f$',
      'Composite Functions: $(g \\circ f)(x) = g(f(x))$ and $(f \\circ g)(x) = f(g(x))$',
      'Left-Hand Limit $\\lim_{x \\to a^-} f(x)$ & Right-Hand Limit $\\lim_{x \\to a^+} f(x)$',
      'Existence of Limit: $\\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = L \\iff \\lim_{x \\to a} f(x) = L$',
      'Sandwich (Squeeze) Theorem: $g(x) < f(x) < h(x) \\implies \\lim_{x \\to a} f(x) = L$',
      'Continuity Condition: $\\lim_{x \\to a} f(x) = f(a)$ vs Discontinuous Functions'
    ],
    color: 'indigo',
    icon: 'FunctionSquare',
    artTheme: 'calculus',
    formulaHighlight: '\\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = L, \\quad \\lim_{x \\to a} f(x) = f(a)',
  },
  {
    id: 'c12-ch2',
    class: 12,
    name: 'Differentiation',
    description: 'Derivative by first principles (ab-initio) $\\frac{dy}{dx} = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$, differentiation rules, and the Chain Rule $\\frac{dy}{dx} = \\frac{dy}{du}\\frac{du}{dx}$ for composite functions.',
    category: 'Calculus & Derivatives',
    questionCount: 50,
    difficulty: 'Mixed',
    keyTopics: [
      'Derivative by First Principles: $f\'(x) = \\frac{dy}{dx} = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$',
      'Process of Differentiation: $y = f(x) \\implies \\frac{dy}{dx} = f\'(x)$',
      'Power Rule $\\frac{d}{dx}(x^n) = nx^{n-1}$, Product & Quotient Rules',
      'Chain Rule for Composite Functions: $\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$'
    ],
    color: 'emerald',
    icon: 'TrendingUp',
    artTheme: 'calculus',
    formulaHighlight: '\\frac{dy}{dx} = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}, \\quad \\frac{dy}{dx} = \\frac{dy}{du}\\frac{du}{dx}',
  },
  {
    id: 'c12-ch3',
    class: 12,
    name: 'Higher Order Derivatives and Applications',
    description: 'Higher order derivatives $y\' = \\frac{dy}{dx}, y\'\' = \\frac{d^2y}{dx^2}, y\'\'\' = \\frac{d^3y}{dx^3}$, second derivative $\\frac{d^2y}{dx^2} = \\frac{d}{dx}(\\frac{dy}{dx})$, tangent line equation $y - y_1 = f\'(x_1)(x - x_1)$, secant line slope $m = \\frac{y_2 - y_1}{x_2 - x_1}$, and Maclaurin power series $f(x) = \\sum_{n=0}^\\infty \\frac{f^{(n)}(0)}{n!}x^n$.',
    category: 'Calculus & Derivatives',
    questionCount: 50,
    difficulty: 'Mixed',
    keyTopics: [
      'Higher Order Derivatives: $y\' = \\frac{dy}{dx}, \\; y\'\' = \\frac{d^2y}{dx^2}, \\; y\'\'\' = \\frac{d^3y}{dx^3}$',
      'Second Derivative: $\\frac{d^2y}{dx^2} = \\frac{d}{dx}\\left(\\frac{dy}{dx}\\right)$',
      'Tangent Line to a Curve: $y - y_1 = f\'(x_1)(x - x_1)$',
      'Secant Line Slope: $m = \\frac{y_2 - y_1}{x_2 - x_1}$',
      'Maclaurin Series: $f(x) = f(0) + xf\'(0) + \\frac{x^2}{2!}f\'\'(0) + \\dots = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(0)}{n!}x^n$'
    ],
    color: 'cyan',
    icon: 'Layers',
    artTheme: 'calculus',
    formulaHighlight: '\\frac{d^2y}{dx^2} = \\frac{d}{dx}\\left(\\frac{dy}{dx}\\right), \\quad f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(0)}{n!} x^n',
  },
  {
    id: 'c12-ch4',
    class: 12,
    name: 'Differentiation of Vector Functions',
    description: 'Vector-valued functions $\\mathbf{r}(t) = x(t)\\mathbf{i} + y(t)\\mathbf{j} + z(t)\\mathbf{k}$, component-wise differentiation $\\mathbf{r}\'(t) = x\'(t)\\mathbf{i} + y\'(t)\\mathbf{j} + z\'(t)\\mathbf{k}$, tangent velocity vectors, and applications to 3D space curves.',
    category: 'Vectors',
    questionCount: 50,
    difficulty: 'Mixed',
    keyTopics: [
      'Vector Function: $\\mathbf{r}(t) = x(t)\\mathbf{i} + y(t)\\mathbf{j} + z(t)\\mathbf{k}$',
      'Derivative: $\\mathbf{r}\'(t) = x\'(t)\\mathbf{i} + y\'(t)\\mathbf{j} + z\'(t)\\mathbf{k}$',
      'Velocity $\\mathbf{v}(t) = \\mathbf{r}\'(t)$ & Tangent Vector $\\mathbf{T}(t)$',
      'Component-wise Differentiation of Scalar Fields'
    ],
    color: 'violet',
    icon: 'Navigation',
    artTheme: 'vector',
    formulaHighlight: '\\mathbf{r}(t) = x(t)\\mathbf{i} + y(t)\\mathbf{j} + z(t)\\mathbf{k}, \\quad \\mathbf{r}\'(t) = x\'(t)\\mathbf{i} + y\'(t)\\mathbf{j} + z\'(t)\\mathbf{k}',
  },
  {
    id: 'c12-ch5',
    class: 12,
    name: 'Integration',
    description: 'Integration as the inverse operation of differentiation ($F\'(x) = f(x) \\implies \\int f(x)\\,dx = F(x) + C$), indefinite integrals, constant of integration $C$, definite integrals $\\int_a^b f(x)\\,dx$, and area under a curve $A = \\int_a^b f(x)\\,dx$.',
    category: 'Integration & Differential Equations',
    questionCount: 50,
    difficulty: 'Mixed',
    keyTopics: [
      'Integration as Inverse of Differentiation: $F\'(x) = f(x) \\implies \\int f(x)\\,dx = F(x) + C$',
      'Indefinite Integral $\\int f(x)\\,dx = F(x) + C$',
      'Constant of Integration $C$ (where $\\frac{d}{dx}(C) = 0$)',
      'Definite Integral: $\\int_a^b f(x)\\,dx = [F(x)]_a^b = F(b) - F(a)$',
      'Area Under a Curve: $A = \\int_a^b f(x)\\,dx \\quad (f(x) \\ge 0)$'
    ],
    color: 'amber',
    icon: 'Activity',
    artTheme: 'integral',
    formulaHighlight: '\\int f(x)\\,dx = F(x) + C, \\quad A = \\int_a^b f(x)\\,dx',
  },
  {
    id: 'c12-ch6',
    class: 12,
    name: 'Plane Analytic Geometry: Straight Line',
    description: 'General straight line equation $ax + by + c = 0$, slope/gradient $m = \\frac{y_2 - y_1}{x_2 - x_1}$, condition for parallel lines $m_1 = m_2$, and condition for perpendicular lines $m_1 m_2 = -1$.',
    category: 'Coordinate & Analytic Geometry',
    questionCount: 50,
    difficulty: 'Mixed',
    keyTopics: [
      'General Equation of Straight Line: $ax + by + c = 0$',
      'Slope of a Straight Line: $m = \\frac{y_2 - y_1}{x_2 - x_1} = \\tan\\theta$',
      'Condition for Parallel Lines: $m_1 = m_2$',
      'Condition for Perpendicular Lines: $m_1 m_2 = -1 \\iff m_2 = -\\frac{1}{m_1}$',
      'Point-Slope Form $y - y_1 = m(x - x_1)$ & Slope-Intercept Form $y = mx + c$'
    ],
    color: 'rose',
    icon: 'Grid',
    artTheme: 'coordinate',
    formulaHighlight: 'ax + by + c = 0, \\quad m = \\frac{y_2 - y_1}{x_2 - x_1}, \\quad m_1 m_2 = -1',
  },
  {
    id: 'c12-ch7',
    class: 12,
    name: 'Circle',
    description: 'Geometric locus definition of circle $(x - h)^2 + (y - k)^2 = r^2$, center $(h, k)$, radius $r$, diameter $d = 2r$, tangent line (perpendicular to radius $\\text{Tangent} \\perp \\text{Radius}$), and secant lines intersecting at two points.',
    category: 'Circles & Tangents',
    questionCount: 50,
    difficulty: 'Mixed',
    keyTopics: [
      'Standard Circle Equation: $(x - h)^2 + (y - k)^2 = r^2$',
      'Circle with Center at Origin: $x^2 + y^2 = r^2$',
      'Centre $(h, k)$ and Radius $r$',
      'Diameter of Circle: $d = 2r$',
      'Tangent to a Circle: $\\text{Tangent} \\perp \\text{Radius}$ at point of contact',
      'Secant of a Circle: Straight line intersecting at 2 distinct points'
    ],
    color: 'teal',
    icon: 'Compass',
    artTheme: 'circle',
    formulaHighlight: '(x - h)^2 + (y - k)^2 = r^2, \\quad d = 2r, \\quad \\text{Tangent} \\perp \\text{Radius}',
  },
  {
    id: 'c12-ch8',
    class: 12,
    name: 'Parabola, Ellipse and Hyperbola',
    description: 'Conic sections: Parabola $y^2 = 4ax$ (focus $(a, 0)$, directrix $x = -a$, vertex $(0, 0)$ or $(h, k)$, axis $y = 0$), Ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ ($c^2 = a^2 - b^2$, foci $(\\pm c, 0)$), Hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ ($c^2 = a^2 + b^2$), tangent $y - y_1 = f\'(x_1)(x - x_1)$, and normal $y - y_1 = -\\frac{1}{m}(x - x_1)$.',
    category: 'Coordinate & Analytic Geometry',
    questionCount: 50,
    difficulty: 'Mixed',
    keyTopics: [
      'Parabola $y^2 = 4ax$: Focus $(a, 0)$, Directrix $x = -a$, Axis $y = 0$, Vertex $(0, 0)$',
      'Translated Parabola: $(y - k)^2 = 4a(x - h)$ with Vertex $(h, k)$',
      'Ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$: Foci $(\\pm c, 0)$ with $c^2 = a^2 - b^2$',
      'Hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$: Foci $(\\pm c, 0)$ with $c^2 = a^2 + b^2$',
      'Tangent to a Conic: $y - y_1 = f\'(x_1)(x - x_1)$',
      'Normal to a Conic: $y - y_1 = -\\frac{1}{m}(x - x_1)$'
    ],
    color: 'indigo',
    icon: 'Maximize2',
    artTheme: 'conic',
    formulaHighlight: 'y^2 = 4ax, \\quad \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1, \\quad \\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1',
  },
  {
    id: 'c12-ch9',
    class: 12,
    name: 'Differential Equations',
    description: 'Equations involving unknown functions and derivatives (e.g. $\\frac{dy}{dx} = 2x$), order (order of highest derivative), degree (power of highest derivative), general solutions with arbitrary constants ($y = x^2 + C$), and particular solutions satisfying initial conditions ($y = x^2 + 3$).',
    category: 'Integration & Differential Equations',
    questionCount: 50,
    difficulty: 'Mixed',
    keyTopics: [
      'Differential Equation Definition: Involving unknown function and its derivatives',
      'Order: Order of the highest derivative (e.g. $\\frac{d^2y}{dx^2} + 3\\frac{dy}{dx} + 2y = 0 \\implies \\text{Order } 2$)',
      'Degree: Power of highest-order derivative in polynomial form',
      'General Solution: Contains arbitrary constants (e.g. $\\frac{dy}{dx}=2x \\implies y = x^2 + C$)',
      'Particular Solution: Specific constants evaluated from initial values ($y(0)=3 \\implies y = x^2 + 3$)'
    ],
    color: 'emerald',
    icon: 'Sliders',
    artTheme: 'differential',
    formulaHighlight: '\\frac{dy}{dx} = 2x \\implies y = x^2 + C, \\quad y(0)=3 \\implies y = x^2 + 3',
  },
  {
    id: 'c12-ch10',
    class: 12,
    name: 'Partial Differentiation',
    description: 'Multivariable functions $z = f(x, y)$, partial derivative with respect to $x$ ($\\frac{\\partial z}{\\partial x}$) treating $y$ as constant, partial derivative with respect to $y$ ($\\frac{\\partial z}{\\partial y}$) treating $x$ as constant, first partials $f_x, f_y$, higher partials $\\frac{\\partial^2 z}{\\partial x^2}$, and mixed partials $\\frac{\\partial^2 z}{\\partial y \\partial x}$.',
    category: 'Calculus & Derivatives',
    questionCount: 50,
    difficulty: 'Mixed',
    keyTopics: [
      'Partial Derivative: $\\frac{\\partial z}{\\partial x}$ holding $y$ constant, $\\frac{\\partial z}{\\partial y}$ holding $x$ constant',
      'First Partial Derivatives: $f_x = \\frac{\\partial f}{\\partial x}$ and $f_y = \\frac{\\partial f}{\\partial y}$',
      'Second Partial Derivative: $\\frac{\\partial^2 z}{\\partial x^2} = \\frac{\\partial}{\\partial x}\\left(\\frac{\\partial z}{\\partial x}\\right)$',
      'Mixed Partial Derivative: $\\frac{\\partial^2 z}{\\partial y \\partial x} = \\frac{\\partial}{\\partial y}\\left(\\frac{\\partial z}{\\partial x}\\right)$'
    ],
    color: 'cyan',
    icon: 'Divide',
    artTheme: 'calculus',
    formulaHighlight: 'f_x = \\frac{\\partial f}{\\partial x}, \\quad f_y = \\frac{\\partial f}{\\partial y}, \\quad \\frac{\\partial^2 z}{\\partial y \\partial x} = \\frac{\\partial}{\\partial y}\\left(\\frac{\\partial z}{\\partial x}\\right)',
  },
  {
    id: 'c12-ch11',
    class: 12,
    name: 'Introduction to Numerical Methods',
    description: 'Systematic numerical algorithms for approximate mathematical solutions, numerical approximation and error calculation ($E = x - \\tilde{x}$), and numerical root solutions ($f(x) = 0 \\implies x \\approx r$).',
    category: 'Numerical Methods & Optimization',
    questionCount: 50,
    difficulty: 'Mixed',
    keyTopics: [
      'Numerical Method: Systematic procedure for approximate numerical solutions',
      'Numerical Approximation & Error Analysis: $E = x - \\tilde{x}$',
      'Numerical Solution: Root approximation $f(x) = 0 \\implies x \\approx r$',
      'Iterative Convergence & Tolerance Criteria'
    ],
    color: 'amber',
    icon: 'Target',
    artTheme: 'algebra',
    formulaHighlight: 'E = x - \\tilde{x}, \\quad f(x) = 0 \\implies x \\approx r',
  },
];

// ============================================================================
// 🚀 ADVANCED MATHEMATICS — CLASS 11 CURRICULUM (12 CHAPTERS WITH DYNAMIC OVERVIEW)
// ============================================================================
export const ADVANCED_MATH_11_CHAPTERS: Chapter[] = [
  {
    id: 'adv11-ch1',
    class: 11,
    track: 'Advanced Mathematics',
    name: 'Complex Numbers',
    description: 'Deep exploration of algebraic and geometric properties of complex numbers $z = a + ib$, Euler\'s formula $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$, De Moivre\'s Theorem, $n$-th roots of unity, and conformal mappings on the Argand plane.',
    category: 'Number Systems & Logarithms',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Algebraic Properties & Field Axioms of $\\mathbb{C}$',
      'Modulus-Argument Form $z = r e^{i\\theta}$ & Polar Coordinates',
      'De Moivre\'s Theorem: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$',
      'Roots of Unity ($1, \\omega, \\omega^2$) & Geometric Polygons',
      'Triangle Inequalities: $||z_1| - |z_2|| \\le |z_1 + z_2| \\le |z_1| + |z_2|$'
    ],
    color: 'indigo',
    icon: 'Binary',
    artTheme: 'logarithm',
    formulaHighlight: 'e^{i\\pi} + 1 = 0, \\quad z = r(\\cos\\theta + i\\sin\\theta) = re^{i\\theta}, \\quad |z| = \\sqrt{a^2 + b^2}',
    overview: {
      summary: 'Complex numbers extend the 1D real number line into a 2D field $\\mathbb{C}$, enabling solutions to polynomial equations without real roots ($x^2 + 1 = 0$). Multiplication geometrically represents scaling and rotation in the Argand plane.',
      historicalContext: 'Pioneered by Gerolamo Cardano and Rafael Bombelli in the 16th century for solving cubics, and rigorously formalized by Leonhard Euler and Carl Friedrich Gauss in the 18th and 19th centuries.',
      learningOutcomes: [
        'Master conversions between Cartesian ($a+ib$), Polar ($r\\text{cis}\\theta$), and Exponential ($re^{i\\theta}$) forms',
        'Apply De Moivre\'s Theorem to compute high powers and fractional roots of complex numbers',
        'Analyze properties of cube roots of unity ($1 + \\omega + \\omega^2 = 0, \\omega^3 = 1$)',
        'Solve advanced polynomial equations and evaluate locus problems in the complex plane'
      ],
      coreFormulas: [
        { label: 'Euler\'s Formula', formula: 'e^{i\\theta} = \\cos\\theta + i\\sin\\theta', explanation: 'Relates complex exponentiation directly to trigonometric circular rotation.' },
        { label: 'Modulus & Conjugate', formula: '|z|^2 = z\\bar{z} = a^2 + b^2', explanation: 'The square of distance from origin equals product with its complex conjugate.' },
        { label: 'De Moivre\'s Identity', formula: '(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)', explanation: 'Enables rapid computation of powers and roots of complex numbers.' },
        { label: 'Cube Roots of Unity', formula: '1 + \\omega + \\omega^2 = 0, \\quad \\omega^3 = 1', explanation: 'Equilateral triangle vertices inscribed in unit circle centered at the origin.' }
      ],
      realWorldApplications: [
        'Quantum Mechanics: Wave functions $\\psi(x, t) = A e^{i(kx - \\omega t)}$ and Schrödinger equation',
        'Electrical AC Circuits: Impedance $Z = R + jX$, phasor analysis, and resonance calculations',
        'Signal Processing & FFT: Discrete Fourier Transforms and audio/image filter design',
        'Fractal Geometry: Mandelbrot and Julia set iterations $z_{n+1} = z_n^2 + c$'
      ],
      keyTheorems: [
        { title: 'Fundamental Theorem of Algebra', statement: 'Every non-zero single-variable polynomial with complex coefficients of degree $n$ has exactly $n$ complex roots.', importance: 'Guarantees complete algebraic closure of $\\mathbb{C}$.' }
      ]
    }
  },
  {
    id: 'adv11-ch2',
    class: 11,
    track: 'Advanced Mathematics',
    name: 'Matrices & Determinants',
    description: 'Advanced linear transformations, matrix algebra, Laplace determinant expansion, invertible matrices, rank, echelon forms, and Cramer\'s rule for high-dimensional systems.',
    category: 'Matrices & Determinants',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Matrix Inversion: $A^{-1} = \\frac{1}{\\det(A)} \\text{adj}(A)$',
      'Row-Echelon & Reduced Row-Echelon Canonical Forms',
      'Properties of Determinants: Multiplicativity $\\det(AB) = \\det(A)\\det(B)$',
      'Cramer\'s Rule & Gaussian Elimination for System of Equations',
      'Symmetric, Skew-Symmetric, Hermitian & Orthogonal Matrices'
    ],
    color: 'emerald',
    icon: 'Grid',
    artTheme: 'matrix',
    formulaHighlight: 'A^{-1} = \\frac{1}{|A|} \\text{adj}(A), \\quad \\det(AB) = \\det(A)\\det(B), \\quad AX = B \\implies X = A^{-1}B',
    overview: {
      summary: 'Matrices provide a rigorous computational framework for linear mappings between vector spaces. Determinants measure the volume scaling factor of these transformations and diagnose invertibility.',
      historicalContext: 'Developed by Arthur Cayley, James Joseph Sylvester, and Gabriel Cramer in the 19th century to systematically solve multi-variable simultaneous linear equations.',
      learningOutcomes: [
        'Compute determinants using cofactor expansion and elementary row/column operations',
        'Calculate classical adjoints and inverses for $2\\times 2$, $3\\times 3$, and $n\\times n$ matrices',
        'Determine matrix rank and classify systems as consistent (unique/infinite) or inconsistent',
        'Apply Gaussian elimination and Cramer\'s rule to solve 3-variable engineering linear systems'
      ],
      coreFormulas: [
        { label: 'Inverse Matrix Formula', formula: 'A^{-1} = \\frac{1}{|A|} \\text{adj}(A)', explanation: 'Valid if and only if matrix is non-singular ($|A| \\ne 0$).' },
        { label: 'Determinant Multiplicativity', formula: '|AB| = |A| \\cdot |B|', explanation: 'Determinant of matrix product equals product of determinants.' },
        { label: 'Transpose Product Rule', formula: '(AB)^T = B^T A^T, \\quad (AB)^{-1} = B^{-1} A^{-1}', explanation: 'Order of operands reverses under transposition and inversion.' },
        { label: 'Cramer\'s Rule for $x_i$', formula: 'x_i = \\frac{\\Delta_i}{\\Delta}', explanation: 'Expresses solutions as ratio of modified determinant to coefficient determinant.' }
      ],
      realWorldApplications: [
        'Computer Graphics & 3D Rendering: Homogeneous coordinate affine transformations (scaling, rotation, translation)',
        'Machine Learning & Neural Networks: Weight matrices, forward propagation $Y = \\sigma(WX + b)$, and PCA',
        'Robotics & Kinematics: Coordinate transformation frames and Jacobian velocity matrices',
        'Economics: Leontief input-output models for supply chain equilibrium'
      ],
      keyTheorems: [
        { title: 'Invertible Matrix Theorem', statement: 'A square matrix $A$ is invertible if and only if $\\det(A) \\ne 0$, its columns are linearly independent, and its rank equals $n$.', importance: 'Unifies fundamental properties of non-singular linear transformations.' }
      ]
    }
  },
  {
    id: 'adv11-ch3',
    class: 11,
    track: 'Advanced Mathematics',
    name: 'Vectors',
    description: 'Vector analysis in 2D and 3D Euclidean spaces, scalar dot products, vector cross products, scalar triple product, vector triple product, and applications in mechanics and spatial geometry.',
    category: 'Vectors',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Position Vectors, Direction Ratios & Direction Cosines ($\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$)',
      'Dot Product: $\\vec{a} \\cdot \\vec{b} = |a||b|\\cos\\theta$ & Orthogonality Test',
      'Cross Product: $\\vec{a} \\times \\vec{b} = |a||b|\\sin\\theta \\,\\hat{n}$ & Area of Parallelogram',
      'Scalar Triple Product: $[\\vec{a} \\; \\vec{b} \\; \\vec{c}] = \\vec{a} \\cdot (\\vec{b} \\times \\vec{c})$ & Parallelepiped Volume',
      'Vector Triple Product Expansion: $\\vec{a} \\times (\\vec{b} \\times \\vec{c}) = (\\vec{a} \\cdot \\vec{c})\\vec{b} - (\\vec{a} \\cdot \\vec{b})\\vec{c}$'
    ],
    color: 'cyan',
    icon: 'Navigation',
    artTheme: 'vector',
    formulaHighlight: '\\vec{a} \\cdot \\vec{b} = |a||b|\\cos\\theta, \\quad |\\vec{a} \\times \\vec{b}| = |a||b|\\sin\\theta, \\quad [\\vec{a}\\,\\vec{b}\\,\\vec{c}] = \\vec{a} \\cdot (\\vec{b} \\times \\vec{c})',
    overview: {
      summary: 'Vectors represent quantities possessing both magnitude and spatial direction. They form the foundational mathematical language of classical mechanics, electromagnetism, and 3D geometry.',
      historicalContext: 'Formulated by Josiah Willard Gibbs and Oliver Heaviside in the late 19th century by adapting William Rowan Hamilton\'s quaternions into modern vector calculus.',
      learningOutcomes: [
        'Calculate projection of one vector along another and determine vector orthogonality and collinearity',
        'Compute vector cross product to calculate areas of triangles and parallelograms in $\\mathbb{R}^3$',
        'Evaluate scalar triple products to determine coplanarity of vectors and volume of parallelepipeds',
        'Model mechanical work done ($W = \\vec{F} \\cdot \\vec{d}$) and rotational torque ($\\vec{\\tau} = \\vec{r} \\times \\vec{F}$)'
      ],
      coreFormulas: [
        { label: 'Scalar Dot Product', formula: '\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3 = |\\vec{a}||\\vec{b}|\\cos\\theta', explanation: 'Yields a scalar; zero when non-zero vectors are perpendicular.' },
        { label: 'Vector Cross Product', formula: '\\vec{a} \\times \\vec{b} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\end{vmatrix}', explanation: 'Yields a vector perpendicular to both $\\vec{a}$ and $\\vec{b}$.' },
        { label: 'Volume of Parallelepiped', formula: 'V = |[\\vec{a} \\; \\vec{b} \\; \\vec{c}]| = |\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})|', explanation: 'Scalar triple product represents the signed 3D volume spanned by three vectors.' },
        { label: 'BAC-CAB Expansion', formula: '\\vec{a} \\times (\\vec{b} \\times \\vec{c}) = (\\vec{a} \\cdot \\vec{c})\\vec{b} - (\\vec{a} \\cdot \\vec{b})\\vec{c}', explanation: 'Simplifies iterated vector cross products into linear combinations.' }
      ],
      realWorldApplications: [
        'Classical Mechanics: Force equilibrium, angular momentum $\\vec{L} = \\vec{r} \\times \\vec{p}$, and Coriolis force',
        'Aerospace Navigation: 3D trajectory tracking, velocity vectors, and wind shear compensation',
        'Computer Graphics & Game Physics: Surface normal computation, collision detection, and ray tracing',
        'Electromagnetism: Lorentz force $\\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B})$ and Poynting energy flux'
      ],
      keyTheorems: [
        { title: 'Coplanarity Theorem', statement: 'Three vectors $\\vec{a}, \\vec{b}, \\vec{c}$ are coplanar if and only if their scalar triple product $[\\vec{a} \\; \\vec{b} \\; \\vec{c}] = 0$.', importance: 'Crucial geometric criterion for 3D alignment and spatial dependence.' }
      ]
    }
  },
  {
    id: 'adv11-ch4',
    class: 11,
    track: 'Advanced Mathematics',
    name: 'Sequences & Series',
    description: 'Comprehensive study of Arithmetic (AP), Geometric (GP), and Harmonic (HP) progressions, arithmetic-geometric means inequalities ($A \\ge G \\ge H$), infinite series convergence, and recursive sequences.',
    category: 'Sequences & Induction',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Arithmetic Progression (AP): $a_n = a + (n-1)d, \\quad S_n = \\frac{n}{2}[2a + (n-1)d]$',
      'Geometric Progression (GP): $a_n = a r^{n-1}, \\quad S_n = \\frac{a(1-r^n)}{1-r}$',
      'Infinite Geometric Series Convergence: $S_\\infty = \\frac{a}{1-r} \\; (|r| < 1)$',
      'Harmonic Progression (HP) & Harmonic Mean $H = \\frac{2ab}{a+b}$',
      'Inequality of Means: $A \\ge G \\ge H$ with equality iff all terms are equal, and $G^2 = AH$'
    ],
    color: 'violet',
    icon: 'TrendingUp',
    artTheme: 'series',
    formulaHighlight: 'S_n = \\frac{n}{2}[2a+(n-1)d], \\quad S_\\infty = \\frac{a}{1-r} \\; (|r| < 1), \\quad A \\ge G \\ge H, \\quad G^2 = AH',
    overview: {
      summary: 'Sequences are ordered mathematical lists following explicit rules, and series are their cumulative sums. Mastering convergence and means establishes the analytical bridge to calculus and discrete mathematics.',
      historicalContext: 'Studied from ancient times by Archimedes (quadrature of parabola) and Zeno (paradoxes of motion), through Carl Friedrich Gauss\'s famous childhood summation of $1$ to $100$.',
      learningOutcomes: [
        'Derive general term and partial sum formulas for AP, GP, and HP progressions',
        'Evaluate convergence of infinite geometric series and solve repeating decimal conversions',
        'Insert multiple Arithmetic, Geometric, and Harmonic Means between given boundary values',
        'Prove the classical AM-GM-HM inequality and apply it to algebraic optimization problems'
      ],
      coreFormulas: [
        { label: 'AP Sum Formula', formula: 'S_n = \\frac{n}{2}(a + l) = \\frac{n}{2}[2a + (n-1)d]', explanation: 'Sum of the first $n$ terms in an arithmetic progression.' },
        { label: 'GP Infinite Sum', formula: 'S_\\infty = \\frac{a}{1-r} \\quad (|r| < 1)', explanation: 'Limit of partial sums for an infinite decaying geometric sequence.' },
        { label: 'Means Relation', formula: 'G^2 = A \\cdot H \\quad \\text{and} \\quad A \\ge G \\ge H', explanation: 'Fundamental relation linking Arithmetic, Geometric, and Harmonic means of two positive numbers.' },
        { label: 'General HP Term', formula: 'a_n = \\frac{1}{a + (n-1)d}', explanation: 'Reciprocal of the corresponding arithmetic progression term.' }
      ],
      realWorldApplications: [
        'Financial Mathematics: Compound interest accumulation, annuity present values, and mortgage amortization',
        'Computer Science: Algorithm time complexity analysis (divide-and-conquer master theorem)',
        'Acoustics & Music: Musical scale frequency harmonics in harmonic progression',
        'Fractal Architecture: Self-similar scaling dimensions and geometric fractal perimeter analysis'
      ],
      keyTheorems: [
        { title: 'AM-GM Inequality', statement: 'For any set of non-negative real numbers $x_1, x_2, \\dots, x_n$, their arithmetic mean is greater than or equal to their geometric mean.', importance: 'One of the most widely applied inequalities in mathematical optimization.' }
      ]
    }
  },
  {
    id: 'adv11-ch5',
    class: 11,
    track: 'Advanced Mathematics',
    name: 'Miscellaneous Series',
    description: 'Summation of special finite and infinite series using sigma notation ($\\Sigma$), sum of powers of first $n$ natural numbers ($\\sum n, \\sum n^2, \\sum n^3$), method of differences, telescoping series, and Arithmetico-Geometric Series (AGS).',
    category: 'Sequences & Induction',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Standard Power Sums: $\\sum r = \\frac{n(n+1)}{2}, \\; \\sum r^2 = \\frac{n(n+1)(2n+1)}{6}, \\; \\sum r^3 = [\\frac{n(n+1)}{2}]^2$',
      'Method of Differences: Finding $n$-th term $T_n$ by successive differences',
      'Telescoping Series with Partial Fractions: $\\sum \\frac{1}{r(r+1)} = 1 - \\frac{1}{n+1}$',
      'Arithmetico-Geometric Series (AGS): $S = a + (a+d)r + (a+2d)r^2 + \\dots$',
      'Infinite AGS Closed-Form Sum: $S_\\infty = \\frac{a}{1-r} + \\frac{dr}{(1-r)^2} \\quad (|r| < 1)$'
    ],
    color: 'amber',
    icon: 'Sigma',
    artTheme: 'series',
    formulaHighlight: '\\sum_{r=1}^n r^2 = \\frac{n(n+1)(2n+1)}{6}, \\quad \\sum_{r=1}^n r^3 = \\left[\\frac{n(n+1)}{2}\\right]^2, \\quad S_\\infty = \\frac{a}{1-r} + \\frac{dr}{(1-r)^2}',
    overview: {
      summary: 'Miscellaneous series encompass non-standard sequences whose terms are combinations of polynomials, differences, or mixed algebraic and geometric components requiring specialized summation transformations.',
      historicalContext: 'Faulhaber\'s formulas (1631) and Jakob Bernoulli\'s Ars Conjectandi (1713) systematically categorized formulas for sums of powers of natural numbers using Bernoulli numbers.',
      learningOutcomes: [
        'Evaluate closed-form sums of polynomial series using standard power summation identities',
        'Apply the method of differences to deduce general term $T_n$ when successive differences form an AP or GP',
        'Sum rational algebraic series using partial fraction decomposition and telescoping cancellation',
        'Derive and calculate infinite sums of arithmetico-geometric series ($|r| < 1$)'
      ],
      coreFormulas: [
        { label: 'Sum of First $n$ Natural Numbers', formula: '\\sum_{r=1}^n r = \\frac{n(n+1)}{2}', explanation: 'Triangular number formula for arithmetic summation.' },
        { label: 'Sum of First $n$ Squares', formula: '\\sum_{r=1}^n r^2 = \\frac{n(n+1)(2n+1)}{6}', explanation: 'Pyramidal number formula for quadratic summations.' },
        { label: 'Sum of First $n$ Cubes', formula: '\\sum_{r=1}^n r^3 = \\left[\\frac{n(n+1)}{2}\\right]^2 = \\left(\\sum r\\right)^2', explanation: 'Nicomachus\' theorem: sum of first $n$ cubes is square of sum of first $n$ integers.' },
        { label: 'Infinite AGS Sum', formula: 'S_\\infty = \\frac{a}{1-r} + \\frac{dr}{(1-r)^2} \\quad (|r| < 1)', explanation: 'Closed-form limit for series combining arithmetic multipliers and geometric decay.' }
      ],
      realWorldApplications: [
        'Numerical Integration: Riemann sum partitions in calculus foundation',
        'Structural Engineering: Calculation of moments of inertia for discrete girder cross-sections',
        'Cryptographic Hash Functions: Discrete lattice sum iterations and entropy accumulation',
        'Probability Theory: Expected value calculations for geometric and negative binomial random variables'
      ],
      keyTheorems: [
        { title: 'Telescoping Series Property', statement: 'If $a_k = b_k - b_{k+1}$, then the partial sum $\\sum_{k=1}^n a_k = b_1 - b_{n+1}$.', importance: 'Allows instant evaluation of complex rational series without explicit summation steps.' }
      ]
    }
  },
  {
    id: 'adv11-ch6',
    class: 11,
    track: 'Advanced Mathematics',
    name: 'Permutation, Combination & Probability',
    description: 'Combinatorial counting principles, permutations with restrictions and repetitions, combinations $^nC_r$, axiomatic probability theory, conditional probability, and Bayes\' Theorem.',
    category: 'Probability & Combinatorics',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Fundamental Counting Principle (Multiplication & Addition Rules)',
      'Permutations: $^nP_r = \\frac{n!}{(n-r)!}$ & Circular Permutations $(n-1)!$',
      'Combinations: $^nC_r = \\frac{n!}{r!(n-r)!}$ & Symmetry $^nC_r = ^nC_{n-r}$',
      'Classical & Axiomatic Probability: $P(A) = \\frac{n(A)}{n(S)}$ with $0 \\le P(A) \\le 1$',
      'Conditional Probability $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$ & Independent Events'
    ],
    color: 'teal',
    icon: 'Dices',
    artTheme: 'probability',
    formulaHighlight: '^nP_r = \\frac{n!}{(n-r)!}, \\quad ^nC_r = \\frac{n!}{r!(n-r)!}, \\quad P(A \\cup B) = P(A) + P(B) - P(A \\cap B)',
    overview: {
      summary: 'Combinatorics explores systematic methods to count configurations without exhaustive listing. Probability theory quantifies uncertainty, providing the mathematical bedrock for statistics and decision theory.',
      historicalContext: 'Born from 17th-century correspondence between Blaise Pascal and Pierre de Fermat analyzing games of chance, later formalized axiomatically by Andrey Kolmogorov in 1933.',
      learningOutcomes: [
        'Distinguish when order matters (permutations) vs when order is irrelevant (combinations)',
        'Calculate arrangements with identical items, circular tables, and conditional restrictions',
        'Compute probabilities of compound events using addition and multiplication rules',
        'Evaluate conditional probability and verify independence of random events'
      ],
      coreFormulas: [
        { label: 'Permutation Formula', formula: '^nP_r = \\frac{n!}{(n-r)!}', explanation: 'Number of ordered arrangements of $r$ objects selected from $n$ distinct objects.' },
        { label: 'Combination Formula', formula: '^nC_r = \\binom{n}{r} = \\frac{n!}{r!(n-r)!}', explanation: 'Number of unordered selections of $r$ objects chosen from $n$ distinct objects.' },
        { label: 'Addition Rule of Probability', formula: 'P(A \\cup B) = P(A) + P(B) - P(A \\cap B)', explanation: 'Accounts for overlap between two non-mutually exclusive events.' },
        { label: 'Multiplication Rule for Independent Events', formula: 'P(A \\cap B) = P(A) \\cdot P(B)', explanation: 'Probability of joint occurrence when neither event influences the other.' }
      ],
      realWorldApplications: [
        'Cybersecurity & Cryptography: Key space complexity analysis, password permutations, and RSA keys',
        'Genetics & Bioinformatics: Punnett squares, DNA sequence arrangement analysis, and allele frequencies',
        'Data Science & Machine Learning: Naive Bayes classifiers, stochastic gradient descent, and A/B testing',
        'Risk Management & Actuarial Science: Insurance claim probability and investment portfolio risk modeling'
      ],
      keyTheorems: [
        { title: 'Pascal\'s Identity', statement: '$^nC_r + ^nC_{r-1} = ^{n+1}C_r$', importance: 'Constructs Pascal\'s Triangle and serves as the recursive backbone of binomial coefficients.' }
      ]
    }
  },
  {
    id: 'adv11-ch7',
    class: 11,
    track: 'Advanced Mathematics',
    name: 'Mathematical Induction & Binomial Theorem',
    description: 'Principle of Mathematical Induction (PMI) for proving universal algebraic assertions, Binomial Theorem for positive integer index $(a+b)^n$, general and middle terms, and Binomial Series for rational exponents.',
    category: 'Sequences & Induction',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Principle of Mathematical Induction: Base Step $P(1)$, Induction Hypothesis $P(k) \\implies P(k+1)$',
      'Binomial Theorem Expansion: $(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r$',
      'General Term in Binomial Expansion: $T_{r+1} = {^nC_r} a^{n-r} b^r$',
      'Middle Term Determination for Even and Odd $n$',
      'Binomial Series for Any Rational Index: $(1+x)^n = 1 + nx + \\frac{n(n-1)}{2!}x^2 + \\dots \\; (|x| < 1)$'
    ],
    color: 'rose',
    icon: 'Layers',
    artTheme: 'series',
    formulaHighlight: '(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r, \\quad T_{r+1} = {^nC_r} a^{n-r} b^r, \\quad (1+x)^n = 1 + nx + \\frac{n(n-1)}{2!}x^2 + \\dots',
    overview: {
      summary: 'Mathematical induction establishes deductive truth across infinite discrete domains with a finite chain. The Binomial Theorem provides an exact polynomial expansion for powers of binomial expressions.',
      historicalContext: 'Induction was introduced implicitly by Levi ben Gershon and explicitly by Blaise Pascal in 1654. Isaac Newton generalized the Binomial Theorem to fractional and negative exponents in 1665.',
      learningOutcomes: [
        'Construct rigorous induction proofs for algebraic identities, divisibility statements, and inequalities',
        'Expand positive integer binomials $(a+b)^n$ and identify specific terms without full expansion',
        'Find independent terms ($x^0$) and middle terms in algebraic expansions',
        'Apply the infinite binomial series expansion for $|x| < 1$ to compute approximations'
      ],
      coreFormulas: [
        { label: 'Binomial Theorem for Positive Integer $n$', formula: '(a+b)^n = \\sum_{r=0}^n \\binom{n}{r} a^{n-r} b^r', explanation: 'Expands powers of a sum into a finite series of $(n+1)$ terms.' },
        { label: 'General Term $(r+1)$-th', formula: 'T_{r+1} = \\binom{n}{r} a^{n-r} b^r', explanation: 'Directly yields any specific term in the expansion without multiplying all terms.' },
        { label: 'Sum of Binomial Coefficients', formula: '\\sum_{r=0}^n \\binom{n}{r} = 2^n, \\quad \\sum_{r=0}^n (-1)^r \\binom{n}{r} = 0', explanation: 'Derived by evaluating expansion at $a=1, b=1$ and $a=1, b=-1$.' },
        { label: 'Binomial Theorem for Any Rational Index', formula: '(1+x)^n = 1 + nx + \\frac{n(n-1)}{2!}x^2 + \\frac{n(n-1)(n-2)}{3!}x^3 + \\dots \\quad (|x| < 1)', explanation: 'Infinite series expansion valid for fractional or negative exponents when $|x| < 1$.' }
      ],
      realWorldApplications: [
        'Physics & Engineering: Small-angle and relativistic binomial approximations $(1 - v^2/c^2)^{-1/2} \\approx 1 + \\frac{v^2}{2c^2}$',
        'Computer Science: Formal verification of recursive loop invariants and sorting algorithm correctness',
        'Probability: Binomial distribution formula $P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}$',
        'Financial Modeling: Binomial options pricing model for derivatives and hedging'
      ],
      keyTheorems: [
        { title: 'Well-Ordering Principle', statement: 'Every non-empty set of positive integers contains a least element.', importance: 'The fundamental mathematical axiom that proves the logical validity of mathematical induction.' }
      ]
    }
  },
  {
    id: 'adv11-ch8',
    class: 11,
    track: 'Advanced Mathematics',
    name: 'Functions & Graphs',
    description: 'Rigorous analysis of real functions, domain and range, injective, surjective, and bijective mappings, composite functions $(f \\circ g)(x)$, inverse functions $f^{-1}(x)$, symmetry, and curve sketching.',
    category: 'Algebra & Polynomials',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Domain, Co-domain & Range Analysis for Rational, Radical & Piecewise Functions',
      'Function Classifications: One-to-One (Injective), Onto (Surjective) & Bijective',
      'Composite Functions: $(f \\circ g)(x) = f(g(x))$ & Domain Constraints',
      'Inverse Functions: $y = f(x) \\iff x = f^{-1}(y)$ & Reflection across $y = x$',
      'Even Functions $f(-x) = f(x)$ (y-axis symmetry) & Odd Functions $f(-x) = -f(x)$ (origin symmetry)'
    ],
    color: 'indigo',
    icon: 'FunctionSquare',
    artTheme: 'algebra',
    formulaHighlight: '(f \\circ g)(x) = f(g(x)), \\quad f(f^{-1}(x)) = x, \\quad f(-x) = f(x) \\; (\\text{Even}), \\quad f(-x) = -f(x) \\; (\\text{Odd})',
    overview: {
      summary: 'A function is a deterministic rule assigning each input exactly one output. Functions and their graphs represent relationships between physical, financial, and geometric quantities.',
      historicalContext: 'Evolved from Gottfried Wilhelm Leibniz\'s 1673 description of curve properties to Leonhard Euler\'s $f(x)$ notation (1734) and Peter Gustav Lejeune Dirichlet\'s modern set-theoretic definition (1837).',
      learningOutcomes: [
        'Determine natural domains and ranges of radical, rational, and composite functions',
        'Demonstrate whether a given function is one-to-one, onto, and possesses an inverse',
        'Compute composite expressions $(f \\circ g)(x)$ and find domain restrictions',
        'Sketch function graphs using translations, reflections, horizontal/vertical scaling, and asymptote analysis'
      ],
      coreFormulas: [
        { label: 'Composite Function', formula: '(f \\circ g)(x) = f(g(x))', explanation: 'Applies inner function $g$ first, followed by outer function $f$.' },
        { label: 'Inverse Function Identity', formula: '(f \\circ f^{-1})(x) = (f^{-1} \\circ f)(x) = x', explanation: 'Composition of a function with its inverse yields the identity mapping.' },
        { label: 'Horizontal Line Test', formula: 'f(x_1) = f(x_2) \\implies x_1 = x_2', explanation: 'Geometric and algebraic test for injectivity (one-to-one property).' },
        { label: 'Graph Transformation Rules', formula: 'y = a f(b(x - h)) + k', explanation: 'Translates by $(h, k)$, stretches vertically by $a$, and compresses horizontally by $b$.' }
      ],
      realWorldApplications: [
        'Signal Processing: Transfer functions $H(s) = Y(s)/X(s)$ in audio filtering and telecommunications',
        'Machine Learning: Activation functions (ReLU, Sigmoid, Softmax) that inject non-linearity into neural networks',
        'Economics: Supply-demand equilibrium functions and marginal utility curves',
        'Computer Graphics: Bezier curves and parametric spline functions for vector rendering'
      ],
      keyTheorems: [
        { title: 'Inverse Function Invertibility Theorem', statement: 'A function $f: A \\to B$ possesses a unique inverse $f^{-1}: B \\to A$ if and only if $f$ is bijective (both injective and surjective).', importance: 'Guarantees exact reversibility of algebraic mappings.' }
      ]
    }
  },
  {
    id: 'adv11-ch9',
    class: 11,
    track: 'Advanced Mathematics',
    name: 'Linear Programming (LP)',
    description: 'Optimization of linear objective functions $Z = ax + by$ subject to linear inequality constraints in two variables, feasible region geometry, corner point theorem, and convex polygonal sets.',
    category: 'Numerical Methods & Optimization',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Linear Inequalities in Two Variables & Half-Planes ($ax + by \\le c$)',
      'Feasible Region & Convex Polygonal Solution Sets',
      'Bounded vs Unbounded Feasible Regions',
      'Corner Point Theorem (Vertex Method for Optimal Solutions)',
      'Formulating Real-World Business & Industrial Optimization Models'
    ],
    color: 'emerald',
    icon: 'Target',
    artTheme: 'algebra',
    formulaHighlight: 'Z = ax + by, \\quad ax + by \\le c, \\quad x \\ge 0, \\; y \\ge 0, \\quad Z_{\\text{opt}} \\in \\text{Vertices of Feasible Region}',
    overview: {
      summary: 'Linear Programming is a mathematical method for determining the best possible outcome (such as maximum profit or lowest cost) in a given mathematical model with linear constraints.',
      historicalContext: 'Formulated by Soviet mathematician Leonid Kantorovich in 1939 for industrial planning and revolutionized by George Dantzig in 1947 with the invention of the Simplex Algorithm.',
      learningOutcomes: [
        'Graph linear inequalities on the Cartesian plane and identify test point orientations',
        'Construct and shade the intersection feasible region satisfying non-negativity and resource constraints',
        'Calculate coordinates of all boundary vertex corner points using simultaneous equations',
        'Evaluate the objective function $Z = ax + by$ at all corner points to identify optimal maxima/minima'
      ],
      coreFormulas: [
        { label: 'Linear Objective Function', formula: 'Z = ax + by + c', explanation: 'The quantity to be maximized (e.g. revenue) or minimized (e.g. cost).' },
        { label: 'Standard Constraint Format', formula: 'a_i x + b_i y \\le c_i \\quad \\text{with} \\quad x \\ge 0, \\, y \\ge 0', explanation: 'System of boundary inequalities defining the permissible domain of solutions.' },
        { label: 'Corner Point Principle', formula: 'Z_{\\max} = \\max_{(x,y) \\in \\mathcal{V}} \\{ ax + by \\}', explanation: 'Optimal value occurs at one or more vertices $\\mathcal{V}$ of the closed convex polygon.' }
      ],
      realWorldApplications: [
        'Supply Chain & Logistics: Optimal freight transportation routing and warehouse distribution scheduling',
        'Manufacturing & Production: Resource allocation maximizing daily profit under raw material limits',
        'Finance & Portfolio Management: Asset allocation optimizing return while staying within risk tolerances',
        'Diet & Agriculture: Feed-mix formulations meeting daily nutritional thresholds at minimum cost'
      ],
      keyTheorems: [
        { title: 'Fundamental Theorem of Linear Programming', statement: 'If a linear programming problem has an optimal solution on a bounded feasible region, that solution occurs at at least one of the corner points (vertices) of the region.', importance: 'Reduces an infinite continuous search space into a finite check of polygon vertices.' }
      ]
    }
  },
  {
    id: 'adv11-ch10',
    class: 11,
    track: 'Advanced Mathematics',
    name: 'Trigonometric Identities of Sum & Difference of Angles',
    description: 'Fundamental law of trigonometry $\\cos(\\alpha - \\beta)$, sum and difference formulas for circular functions, double-angle, half-angle, triple-angle identities, and product-to-sum transformations.',
    category: 'Trigonometry',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Fundamental Law: $\\cos(\\alpha - \\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$',
      'Addition & Subtraction Identities for $\\sin(\\alpha \\pm \\beta)$ and $\\tan(\\alpha \\pm \\beta)$',
      'Double-Angle Identities: $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta, \\; \\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta$',
      'Half-Angle Formulas: $\\sin\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1-\\cos\\theta}{2}}, \\; \\cos\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1+\\cos\\theta}{2}}$',
      'Product to Sum & Sum to Product Conversion Formulas'
    ],
    color: 'cyan',
    icon: 'Percent',
    artTheme: 'trigonometry',
    formulaHighlight: '\\sin(\\alpha \\pm \\beta) = \\sin\\alpha\\cos\\beta \\pm \\cos\\alpha\\sin\\beta, \\quad \\cos 2\\theta = 1 - 2\\sin^2\\theta = 2\\cos^2\\theta - 1',
    overview: {
      summary: 'Trigonometric angle addition and subtraction identities provide exact algebraic relationships between functions evaluated at combinations of angles, serving as core tools for harmonic analysis.',
      historicalContext: 'Rooted in Claudius Ptolemy\'s table of chords in the Almagest (2nd century CE), formalized by Islamic mathematicians like Al-Battani and Abu al-Wafa, and streamlined by Euler.',
      learningOutcomes: [
        'Prove the fundamental law of cosine difference from geometric circle coordinate distances',
        'Derive double-angle, triple-angle, and half-angle formulas from basic sum identities',
        'Convert trigonometric products into linear sums (and vice versa) for algebraic simplification',
        'Verify complex trigonometric identities and compute exact values for angles like $15^\\circ, 75^\\circ, 105^\\circ$'
      ],
      coreFormulas: [
        { label: 'Sine Sum & Difference', formula: '\\sin(\\alpha \\pm \\beta) = \\sin\\alpha\\cos\\beta \\pm \\cos\\alpha\\sin\\beta', explanation: 'Decomposes the sine of a composite angle into product components.' },
        { label: 'Cosine Sum & Difference', formula: '\\cos(\\alpha \\pm \\beta) = \\cos\\alpha\\cos\\beta \\mp \\sin\\alpha\\sin\\beta', explanation: 'Note the sign reversal between addition and subtraction.' },
        { label: 'Tangent Sum Formula', formula: '\\tan(\\alpha + \\beta) = \\frac{\\tan\\alpha + \\tan\\beta}{1 - \\tan\\alpha\\tan\\beta}', explanation: 'Rational expression for tangent angle combination.' },
        { label: 'Product to Sum Formula', formula: '2\\sin A \\cos B = \\sin(A+B) + \\sin(A-B)', explanation: 'Key identity utilized in calculus integration of trigonometric products.' }
      ],
      realWorldApplications: [
        'Electrical Engineering: Modulation in AM/FM radio broadcasting using sinusoidal carrier multiplication',
        'Acoustics & Wave Interference: Beat frequencies and constructive/destructive wave superposition',
        'Robotics & Motion Kinematics: Inverse kinematic joint angle transformations in multi-axis robotic arms',
        'Quantum Physics: Harmonic oscillator wave equations and spatial phase interference'
      ],
      keyTheorems: [
        { title: 'Fundamental Law of Trigonometry', statement: 'For any two real angles $\\alpha$ and $\\beta$, the distance between unit circle points proves that $\\cos(\\alpha - \\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$.', importance: 'The single master axiom from which all other trigonometric identities can be derived.' }
      ]
    }
  },
  {
    id: 'adv11-ch11',
    class: 11,
    track: 'Advanced Mathematics',
    name: 'Application of Trigonometry',
    description: 'Solutions of oblique and right-angled triangles, Law of Sines, Law of Cosines, Law of Tangents, Half-Angle Formulas, Hero\'s Formula for area, and radii of circumscribed ($R$), inscribed ($r$), and escribed ($r_1, r_2, r_3$) circles.',
    category: 'Trigonometry',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Law of Sines: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$',
      'Law of Cosines: $a^2 = b^2 + c^2 - 2bc\\cos A$',
      'Hero\'s Area Formula: $\\Delta = \\sqrt{s(s-a)(s-b)(s-c)}$ where $s = \\frac{a+b+c}{2}$',
      'Incircle Radius $r = \\frac{\\Delta}{s}$ & Circumradius $R = \\frac{abc}{4\\Delta}$',
      'Escribed Radii (Ex-circles): $r_1 = \\frac{\\Delta}{s-a}, \\; r_2 = \\frac{\\Delta}{s-b}, \\; r_3 = \\frac{\\Delta}{s-c}$'
    ],
    color: 'violet',
    icon: 'Sparkles',
    artTheme: 'trigonometry',
    formulaHighlight: '\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R, \\quad a^2 = b^2 + c^2 - 2bc\\cos A, \\quad r = \\frac{\\Delta}{s}, \\quad R = \\frac{abc}{4\\Delta}',
    overview: {
      summary: 'Trigonometric application methods allow full geometric resolution of any triangle given minimal angle and side constraints, establishing connections between planar geometry and coordinate surveying.',
      historicalContext: 'Developed by Hipparchus, Ptolemy, Nasir al-Din al-Tusi, and Regiomontanus (1464) to solve practical problems in celestial navigation, cartography, and land surveying.',
      learningOutcomes: [
        'Solve oblique triangles using Law of Sines (AAS, ASA) and Law of Cosines (SAS, SSS)',
        'Compute triangle area using sine formula ($\\frac{1}{2}ab\\sin C$) and Hero\'s semi-perimeter formula',
        'Calculate the circumradius $R$, inradius $r$, and exradii $r_1, r_2, r_3$ of any triangle',
        'Prove classical geometric relations including $r_1 r_2 r_3 = r s^2$ and $rr_1r_2r_3 = \\Delta^2$'
      ],
      coreFormulas: [
        { label: 'Law of Sines', formula: '\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R', explanation: 'Ratios of sides to sines of opposite angles equal diameter of circumscribed circle.' },
        { label: 'Law of Cosines', formula: 'a^2 = b^2 + c^2 - 2bc\\cos A', explanation: 'Generalization of Pythagorean Theorem to any oblique triangle.' },
        { label: 'Incircle Radius', formula: 'r = \\frac{\\Delta}{s}', explanation: 'Inradius equals triangle area divided by its semi-perimeter $s$.' },
        { label: 'Circumscribed Radius', formula: 'R = \\frac{abc}{4\\Delta}', explanation: 'Radius of circle passing through all three triangle vertices.' }
      ],
      realWorldApplications: [
        'GPS Navigation & Triangulation: Positioning from satellite signals using intersecting spherical distance laws',
        'Geodetic Surveying: Measuring inaccessible mountain elevations and geographic borders',
        'Architecture & Structural Design: Truss roof angle stress distribution and dome construction',
        'Astronomy: Parallax distance measurements to nearby stars and planetary orbit calculations'
      ],
      keyTheorems: [
        { title: 'Law of Cosines Generalization', statement: 'In any planar triangle with sides $a, b, c$ and opposite angle $A$, $a^2 = b^2 + c^2 - 2bc\\cos A$, which reduces to $a^2 = b^2 + c^2$ when $A = 90^\\circ$.', importance: 'Bridges metric distance in non-Euclidean angles to Cartesian coordinates.' }
      ]
    }
  },
  {
    id: 'adv11-ch12',
    class: 11,
    track: 'Advanced Mathematics',
    name: 'Graphs of Trigonometric & Inverse Trigonometric Functions & Solution of Trigonometric Equations',
    description: 'Periodic properties and graphical analysis of circular functions, principal branches and properties of inverse trigonometric functions ($\\arcsin, \\arccos, \\arctan$), and general analytical solutions of trigonometric equations with $n\\pi$ parameters.',
    category: 'Trigonometry',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Periods of Trigonometric Functions: Period of $\\sin, \\cos, \\sec, \\csc$ is $2\\pi$; Period of $\\tan, \\cot$ is $\\pi$',
      'Graphs of $y = \\sin x, \\cos x, \\tan x$ with Asymptotes & Periodicity',
      'Inverse Trigonometric Functions & Principal Value Branches ($[-\\frac{\\pi}{2}, \\frac{\\pi}{2}], [0, \\pi]$)',
      'Inverse Identities: $\\arcsin x + \\arccos x = \\frac{\\pi}{2}, \\; \\arctan x + \\arctan y = \\arctan\\frac{x+y}{1-xy}$',
      'General Solutions: $\\sin\\theta = 0 \\implies \\theta = n\\pi, \\; \\cos\\theta = 0 \\implies \\theta = (2n+1)\\frac{\\pi}{2}, \\; \\tan\\theta = \\tan\\alpha \\implies \\theta = n\\pi + \\alpha$'
    ],
    color: 'amber',
    icon: 'Activity',
    artTheme: 'trigonometry',
    formulaHighlight: '\\sin\\theta = \\sin\\alpha \\implies \\theta = n\\pi + (-1)^n\\alpha, \\quad \\cos\\theta = \\cos\\alpha \\implies \\theta = 2n\\pi \\pm \\alpha, \\quad \\arcsin x + \\arccos x = \\frac{\\pi}{2}',
    overview: {
      summary: 'Trigonometric functions model recurring periodic cycles. Restricting their domains yields well-defined inverse functions, enabling complete analytical solutions to periodic equations across infinite cyclic intervals.',
      historicalContext: 'Studied in detail by Leonhard Euler and Joseph Fourier, who proved that any periodic wave can be decomposed into an infinite sum of simple sine and cosine components.',
      learningOutcomes: [
        'Determine periods, amplitudes, phase shifts, and vertical asymptotes of trigonometric curves',
        'Identify principal value domains and sketch graphs of inverse circular functions',
        'Apply inverse trigonometric identities to solve algebraic equations containing arcsin and arctan',
        'Find general solutions for trigonometric equations using periodicity parameters $n \\in \\mathbb{Z}$'
      ],
      coreFormulas: [
        { label: 'General Solution for Sine', formula: '\\sin\\theta = \\sin\\alpha \\implies \\theta = n\\pi + (-1)^n\\alpha \\quad (n \\in \\mathbb{Z})', explanation: 'Captures all solutions across all quadrants in a single closed formula.' },
        { label: 'General Solution for Cosine', formula: '\\cos\\theta = \\cos\\alpha \\implies \\theta = 2n\\pi \\pm \\alpha \\quad (n \\in \\mathbb{Z})', explanation: 'Even symmetry yields positive and negative angular offsets every $2\\pi$.' },
        { label: 'General Solution for Tangent', formula: '\\tan\\theta = \\tan\\alpha \\implies \\theta = n\\pi + \\alpha \\quad (n \\in \\mathbb{Z})', explanation: 'Repeats periodically every $\\pi$ radians.' },
        { label: 'Inverse Angle Complementarity', formula: '\\arcsin x + \\arccos x = \\frac{\\pi}{2} \\quad (|x| \\le 1)', explanation: 'Complementary relationship derived from right-angled triangle acute angles.' }
      ],
      realWorldApplications: [
        'Electrical Grid & Power Systems: Alternating current voltage oscillations $V(t) = V_0 \\sin(\\omega t + \\phi)$',
        'Tidal & Oceanography Modeling: Predicting tidal high/low cycles using superposition of sinusoidal components',
        'Seismology & Earthquake Dynamics: Seismic wave propagation analysis and resonance frequency detection',
        'Quantum Physics: Quantum harmonic oscillator probability densities and phase angle rotations'
      ],
      keyTheorems: [
        { title: 'Periodicity Theorem', statement: 'If a function satisfies $f(x + T) = f(x)$ for all $x$, then $T$ is its period. The primitive period of $\\sin(kx)$ and $\\cos(kx)$ is $\\frac{2\\pi}{|k|}$, and of $\\tan(kx)$ is $\\frac{\\pi}{|k|}$.', importance: 'Determines fundamental frequency in harmonic and wave mechanics.' }
      ]
    }
  }
];

// Append Advanced Chapters to Master List
export const ALL_CHAPTERS: Chapter[] = [
  ...ELEMENTARY_CHAPTERS,
  ...ADVANCED_MATH_11_CHAPTERS
];

