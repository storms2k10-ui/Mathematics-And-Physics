import { MathDefinition } from '../types';

export const C12_DEFINITIONS_ALL: MathDefinition[] = [
  // =========================================================================
  // CHAPTER 1 — FUNCTIONS AND LIMITS (Definitions 1 - 11)
  // =========================================================================
  {
    id: 'def-c12-ch1-1',
    class: 12,
    chapterId: 'c12-ch1',
    chapterName: 'Functions and Limits',
    term: 'Function',
    category: 'Functions & Limits',
    definition: 'A function is a relation in which each permissible value of the independent variable ($x$) is associated with exactly one value of the dependent variable ($y$). It is written as $y = f(x)$.',
    formula: 'y = f(x)',
    keyPoints: [
      '$x$: Independent variable (input)',
      '$y$: Dependent variable (output)',
      '$f$: Rule or operation that transforms $x$ into $y$',
      'Each input in the domain maps to exactly one output'
    ],
    example: 'If $y = 3x^2 + 5$, then for $x = 2$, $y = 3(2)^2 + 5 = 17$.',
    diagramType: 'function_mapping'
  },
  {
    id: 'def-c12-ch1-2',
    class: 12,
    chapterId: 'c12-ch1',
    chapterName: 'Functions and Limits',
    term: 'Domain of a Function',
    category: 'Functions & Limits',
    definition: 'The domain of a function is the set of all permissible values of the independent variable ($x$) for which the function $f(x)$ is defined and real.',
    formula: 'D_f = \\{x \\in \\mathbb{R} : f(x) \\in \\mathbb{R}\\}',
    keyPoints: [
      'Values causing division by zero ($Q(x) = 0$) are excluded',
      'Negative values under even radicals (square roots) are excluded',
      'The domain represents all valid inputs of $f$'
    ],
    example: 'For $f(x) = \\frac{1}{x-3}$, the denominator $x - 3 \\neq 0 \\implies x \\neq 3$. Domain $D_f = \\mathbb{R} \\setminus \\{3\\}$.'
  },
  {
    id: 'def-c12-ch1-3',
    class: 12,
    chapterId: 'c12-ch1',
    chapterName: 'Functions and Limits',
    term: 'Range of a Function',
    category: 'Functions & Limits',
    definition: 'The range of a function is the set of all values taken by the dependent variable ($y$) as $x$ varies over the domain of the function.',
    formula: 'R_f = \\{f(x) : x \\in D_f\\}',
    keyPoints: [
      'The range is the set of actual outputs obtained',
      'For $y = f(x)$, $R_f$ is a subset of the codomain $\\mathbb{R}$',
      'Bounded by the minimum and maximum values achieved by the function'
    ],
    example: 'For $f(x) = x^2$, since the square of any real number is non-negative, Range $R_f = [0, \\infty)$.'
  },
  {
    id: 'def-c12-ch1-4',
    class: 12,
    chapterId: 'c12-ch1',
    chapterName: 'Functions and Limits',
    term: 'Composite Function',
    category: 'Functions & Limits',
    definition: 'If $f$ and $g$ are two functions, the function obtained by applying $f$ first and then $g$ is called their composite function, denoted by $g \\circ f$.',
    formula: '(g \\circ f)(x) = g(f(x)), \\qquad (f \\circ g)(x) = f(g(x))',
    keyPoints: [
      'Composition is generally non-commutative: $(g \\circ f)(x) \\neq (f \\circ g)(x)$',
      'The range of inner function $f$ must lie within the domain of outer function $g$',
      'Associative property holds: $f \\circ (g \\circ h) = (f \\circ g) \\circ h$'
    ],
    example: 'If $f(x) = 2x+1$ and $g(x) = x^2$, then $(g \\circ f)(x) = g(2x+1) = (2x+1)^2 = 4x^2 + 4x + 1$.'
  },
  {
    id: 'def-c12-ch1-5',
    class: 12,
    chapterId: 'c12-ch1',
    chapterName: 'Functions and Limits',
    term: 'Limit of a Function',
    category: 'Functions & Limits',
    definition: 'The limit of $f(x)$ as $x$ approaches $a$ is the value $L$ which $f(x)$ approaches as $x$ gets arbitrarily close to $a$ (from either side, $x \\neq a$). It is written as $\\lim_{x \\to a} f(x) = L$.',
    formula: '\\lim_{x \\to a} f(x) = L',
    keyPoints: [
      'Describes the behavior of $f(x)$ arbitrarily close to $x = a$',
      'Does not require $f(x)$ to be defined at $x = a$',
      'Fundamental foundation of differential and integral calculus'
    ],
    example: '$\\lim_{x \\to 2} (3x + 1) = 3(2) + 1 = 7$. Also $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$.'
  },
  {
    id: 'def-c12-ch1-6',
    class: 12,
    chapterId: 'c12-ch1',
    chapterName: 'Functions and Limits',
    term: 'Left-Hand Limit (LHL)',
    category: 'Functions & Limits',
    definition: 'The value that $f(x)$ approaches as $x$ approaches $a$ through values strictly less than $a$ ($x < a$) is called the left-hand limit of $f(x)$ at $x = a$.',
    formula: '\\lim_{x \\to a^-} f(x) = \\lim_{h \\to 0^+} f(a - h)',
    keyPoints: [
      'Notated with a superscript minus sign: $x \\to a^-$',
      'Calculated by substituting $x = a - h$ where $h > 0$ as $h \\to 0$',
      'Crucial for testing piecewise and absolute value functions'
    ],
    example: 'For $f(x) = \\frac{|x|}{x}$, as $x \\to 0^-$ ($x < 0$), $|x| = -x \\implies \\lim_{x \\to 0^-} \\frac{-x}{x} = -1$.'
  },
  {
    id: 'def-c12-ch1-7',
    class: 12,
    chapterId: 'c12-ch1',
    chapterName: 'Functions and Limits',
    term: 'Right-Hand Limit (RHL)',
    category: 'Functions & Limits',
    definition: 'The value that $f(x)$ approaches as $x$ approaches $a$ through values strictly greater than $a$ ($x > a$) is called the right-hand limit of $f(x)$ at $x = a$.',
    formula: '\\lim_{x \\to a^+} f(x) = \\lim_{h \\to 0^+} f(a + h)',
    keyPoints: [
      'Notated with a superscript plus sign: $x \\to a^+$',
      'Calculated by substituting $x = a + h$ where $h > 0$ as $h \\to 0$',
      'Must match the left-hand limit for the overall limit to exist'
    ],
    example: 'For $f(x) = \\frac{|x|}{x}$, as $x \\to 0^+$ ($x > 0$), $|x| = x \\implies \\lim_{x \\to 0^+} \\frac{x}{x} = 1$.'
  },
  {
    id: 'def-c12-ch1-8',
    class: 12,
    chapterId: 'c12-ch1',
    chapterName: 'Functions and Limits',
    term: 'Existence of a Limit',
    category: 'Functions & Limits',
    definition: 'The limit of a function $f(x)$ as $x \\to a$ exists if and only if both the left-hand limit and the right-hand limit exist and are equal to the same finite number $L$.',
    formula: '\\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = L \\iff \\lim_{x \\to a} f(x) = L',
    keyPoints: [
      'Condition: $\\text{LHL} = \\text{RHL} = L$',
      'If $\\text{LHL} \\neq \\text{RHL}$, the limit $\\lim_{x \\to a} f(x)$ does not exist (DNE)',
      'If either one-sided limit approaches $\\pm\\infty$, the two-sided limit does not exist as a real number'
    ],
    example: 'For $f(x) = \\frac{|x|}{x}$ at $x = 0$, $\\text{LHL} = -1 \\neq \\text{RHL} = 1$, so $\\lim_{x \\to 0} f(x)$ does not exist.'
  },
  {
    id: 'def-c12-ch1-9',
    class: 12,
    chapterId: 'c12-ch1',
    chapterName: 'Functions and Limits',
    term: 'Sandwich Theorem (Squeeze Theorem)',
    category: 'Functions & Limits',
    definition: 'If $g(x) \\le f(x) \\le h(x)$ for all $x$ in an open interval containing $a$ (except possibly at $a$), and if $\\lim_{x \\to a} g(x) = \\lim_{x \\to a} h(x) = L$, then $\\lim_{x \\to a} f(x) = L$.',
    formula: 'g(x) \\le f(x) \\le h(x) \\; \\text{and} \\; \\lim_{x \\to a} g(x) = \\lim_{x \\to a} h(x) = L \\implies \\lim_{x \\to a} f(x) = L',
    keyPoints: [
      'Traps or "squeezes" $f(x)$ between two bounding functions $g(x)$ and $h(x)$',
      'Used fundamentally to prove $\\lim_{\\theta \\to 0} \\frac{\\sin\\theta}{\\theta} = 1$ from $\\cos\\theta < \\frac{\\sin\\theta}{\\theta} < 1$',
      'Applicable when evaluating oscillating or difficult trigonometric limits'
    ],
    example: 'Since $-x^2 \\le x^2 \\sin(1/x) \\le x^2$ and $\\lim_{x\\to 0}(-x^2) = \\lim_{x\\to 0}x^2 = 0$, by Sandwich Theorem $\\lim_{x\\to 0} x^2 \\sin(1/x) = 0$.',
    diagramType: 'sandwich_squeeze_theorem'
  },
  {
    id: 'def-c12-ch1-10',
    class: 12,
    chapterId: 'c12-ch1',
    chapterName: 'Functions and Limits',
    term: 'Continuous Function',
    category: 'Functions & Limits',
    definition: 'A function $f(x)$ is continuous at $x = a$ if: (1) $f(a)$ is defined, (2) $\\lim_{x \\to a} f(x)$ exists, and (3) $\\lim_{x \\to a} f(x) = f(a)$. Geometrically, the graph has no breaks or gaps at $a$.',
    formula: '\\lim_{x \\to a} f(x) = f(a)',
    keyPoints: [
      'Three conditions: $f(a)$ exists, $\\lim_{x \\to a} f(x)$ exists, and they are equal',
      'A continuous curve can be drawn without lifting the pen from the paper',
      'All polynomial functions are continuous everywhere on $\\mathbb{R}$'
    ],
    example: '$f(x) = x^2 - 4$ is continuous at $x = 3$ because $f(3) = 5$ and $\\lim_{x \\to 3}(x^2 - 4) = 5 = f(3)$.'
  },
  {
    id: 'def-c12-ch1-11',
    class: 12,
    chapterId: 'c12-ch1',
    chapterName: 'Functions and Limits',
    term: 'Discontinuous Function',
    category: 'Functions & Limits',
    definition: 'A function $f(x)$ is discontinuous at $x = a$ if it fails to satisfy one or more of the three conditions for continuity at $x = a$.',
    formula: '\\lim_{x \\to a} f(x) \\neq f(a) \\quad \\text{or} \\quad f(a) \\text{ is undefined}',
    keyPoints: [
      'Removable Discontinuity: $\\lim_{x \\to a} f(x)$ exists but $\\neq f(a)$ (a single missing point / hole)',
      'Jump Discontinuity: $\\text{LHL} \\neq \\text{RHL}$ (step in the graph)',
      'Infinite Discontinuity: $f(x) \\to \\pm\\infty$ as $x \\to a$ (vertical asymptote)'
    ],
    example: '$f(x) = \\frac{1}{x-2}$ is discontinuous at $x = 2$ because $f(2)$ is undefined and $\\lim_{x \\to 2} f(x) = \\pm\\infty$.'
  },

  // =========================================================================
  // CHAPTER 2 — DIFFERENTIATION (Definitions 12 - 14)
  // =========================================================================
  {
    id: 'def-c12-ch2-1',
    class: 12,
    chapterId: 'c12-ch2',
    chapterName: 'Differentiation',
    term: 'Derivative',
    category: 'Differentiation',
    definition: 'The derivative of $y = f(x)$ with respect to $x$ is the instantaneous rate of change of $y$ with respect to $x$, defined as the limit of the difference quotient as the increment approaches zero.',
    formula: '\\frac{dy}{dx} = f\'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}',
    keyPoints: [
      'Geometrically represents the slope of the tangent line to the curve $y = f(x)$ at $(x, f(x))$',
      'Also denoted by $y_1, y\', Df(x)$, or $\\frac{d}{dx}f(x)$',
      'Known as the "First Principles" or "ab-initio" definition'
    ],
    example: 'For $f(x) = x^2$, $f\'(x) = \\lim_{h \\to 0}\\frac{(x+h)^2 - x^2}{h} = \\lim_{h \\to 0}(2x + h) = 2x$.',
    diagramType: 'tangent_secant_derivative'
  },
  {
    id: 'def-c12-ch2-2',
    class: 12,
    chapterId: 'c12-ch2',
    chapterName: 'Differentiation',
    term: 'Differentiation',
    category: 'Differentiation',
    definition: 'Differentiation is the mathematical operation and process of finding the derivative of a function.',
    formula: 'y = f(x) \\implies \\frac{dy}{dx} = f\'(x)',
    keyPoints: [
      'Power Rule: $\\frac{d}{dx}(x^n) = nx^{n-1}$',
      'Constant Multiple: $\\frac{d}{dx}[cf(x)] = c f\'(x)$',
      'Sum Rule: $\\frac{d}{dx}[u + v] = \\frac{du}{dx} + \\frac{dv}{dx}$',
      'Product Rule: $\\frac{d}{dx}[uv] = u\\frac{dv}{dx} + v\\frac{du}{dx}$',
      'Quotient Rule: $\\frac{d}{dx}\\left[\\frac{u}{v}\\right] = \\frac{v\\frac{du}{dx} - u\\frac{dv}{dx}}{v^2}$'
    ],
    example: 'Differentiating $y = 5x^3 - 4x + 7$ yields $\\frac{dy}{dx} = 15x^2 - 4$.'
  },
  {
    id: 'def-c12-ch2-3',
    class: 12,
    chapterId: 'c12-ch2',
    chapterName: 'Differentiation',
    term: 'Chain Rule',
    category: 'Differentiation',
    definition: 'The chain rule is a formula used to compute the derivative of a composite function $y = f(u)$ where $u = g(x)$.',
    formula: '\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}',
    keyPoints: [
      'Differentiates the outer function with respect to the inner, multiplied by derivative of the inner',
      'For three nested functions $y = f(u), u = g(v), v = h(x)$: $\\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dv}\\cdot\\frac{dv}{dx}$',
      'Generalized power rule: $\\frac{d}{dx}[g(x)]^n = n[g(x)]^{n-1} g\'(x)$'
    ],
    example: 'If $y = (3x^2 + 1)^4$, let $u = 3x^2 + 1 \\implies \\frac{dy}{dx} = 4u^3 \\cdot (6x) = 24x(3x^2+1)^3$.'
  },

  // =========================================================================
  // CHAPTER 3 — HIGHER ORDER DERIVATIVES AND APPLICATIONS (Definitions 15 - 19)
  // =========================================================================
  {
    id: 'def-c12-ch3-1',
    class: 12,
    chapterId: 'c12-ch3',
    chapterName: 'Higher Order Derivatives and Applications',
    term: 'Higher Order Derivative',
    category: 'Higher Order Derivatives',
    definition: 'When a derivative is differentiated one or more times with respect to the independent variable, the resulting derivative is called a higher order derivative.',
    formula: 'y\' = \\frac{dy}{dx}, \\quad y\'\' = \\frac{d^2y}{dx^2}, \\quad y\'\'\' = \\frac{d^3y}{dx^3}, \\quad y^{(n)} = \\frac{d^ny}{dx^n}',
    keyPoints: [
      'First derivative: Rate of change (velocity)',
      'Second derivative: Rate of change of slope (acceleration / concavity)',
      '$n$-th derivative notation: $y^{(n)} = f^{(n)}(x) = \\frac{d^n y}{dx^n} = D^n y$'
    ],
    example: 'If $y = x^4$, then $y\' = 4x^3, \\; y\'\' = 12x^2, \\; y\'\'\' = 24x, \\; y^{(4)} = 24, \\; y^{(5)} = 0$.'
  },
  {
    id: 'def-c12-ch3-2',
    class: 12,
    chapterId: 'c12-ch3',
    chapterName: 'Higher Order Derivatives and Applications',
    term: 'Second Derivative',
    category: 'Higher Order Derivatives',
    definition: 'The second derivative is the derivative of the first derivative of a function. It measures the concavity and inflection points of the graph.',
    formula: '\\frac{d^2y}{dx^2} = \\frac{d}{dx}\\left(\\frac{dy}{dx}\\right) = f\'\'(x)',
    keyPoints: [
      'Concavity Test: If $f\'\'(x) > 0$, curve is concave upward (local minimum)',
      'If $f\'\'(x) < 0$, curve is concave downward (local maximum)',
      'Point of Inflection: Where $f\'\'(x) = 0$ or undefined, and concavity changes sign',
      'For parametric equations: $\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}(dy/dx)}{dx/dt}$'
    ],
    example: 'If $y = \\sin x$, $\\frac{dy}{dx} = \\cos x \\implies \\frac{d^2y}{dx^2} = -\\sin x = -y$.'
  },
  {
    id: 'def-c12-ch3-3',
    class: 12,
    chapterId: 'c12-ch3',
    chapterName: 'Higher Order Derivatives and Applications',
    term: 'Tangent Line to a Curve',
    category: 'Applications of Derivatives',
    definition: 'A tangent line to a curve $y = f(x)$ at a given point $P(x_1, y_1)$ is a straight line that touches the curve at that point and has the same slope as the curve at that point ($m = f\'(x_1)$).',
    formula: 'y - y_1 = f\'(x_1)(x - x_1)',
    keyPoints: [
      'Slope of tangent: $m = \\left.\\frac{dy}{dx}\\right|_{(x_1, y_1)}$',
      'Points of horizontal tangents occur where $f\'(x) = 0$',
      'Points of vertical tangents occur where $f\'(x) \\to \\pm\\infty$'
    ],
    example: 'For $y = x^2$ at $(1, 1)$, $f\'(x) = 2x \\implies m = 2(1) = 2$. Tangent equation: $y - 1 = 2(x - 1) \\implies y = 2x - 1$.',
  },
  {
    id: 'def-c12-ch3-4',
    class: 12,
    chapterId: 'c12-ch3',
    chapterName: 'Higher Order Derivatives and Applications',
    term: 'Secant Line',
    category: 'Applications of Derivatives',
    definition: 'A secant line is a straight line passing through two distinct points $(x_1, y_1)$ and $(x_2, y_2)$ on a curve.',
    formula: 'm = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{f(x_2) - f(x_1)}{x_2 - x_1}',
    keyPoints: [
      'The slope of a secant line gives the average rate of change over the interval $[x_1, x_2]$',
      'As point $(x_2, y_2)$ approaches $(x_1, y_1)$, the secant line approaches the tangent line',
      'Used directly in proving the Mean Value Theorem and defining derivatives'
    ],
    example: 'For $y = x^2$ between $(1, 1)$ and $(3, 9)$, secant slope $m = \\frac{9 - 1}{3 - 1} = \\frac{8}{2} = 4$.',
  },
  {
    id: 'def-c12-ch3-5',
    class: 12,
    chapterId: 'c12-ch3',
    chapterName: 'Higher Order Derivatives and Applications',
    term: 'Maclaurin Series',
    category: 'Higher Order Derivatives',
    definition: 'A Maclaurin series is a representation of an infinitely differentiable function $f(x)$ as a power series expanded about $x = 0$.',
    formula: 'f(x) = f(0) + x f\'(0) + \\frac{x^2}{2!} f\'\'(0) + \\frac{x^3}{3!} f\'\'\'(0) + \\dots = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(0)}{n!} x^n',
    keyPoints: [
      'Special case of Taylor Series where $a = 0$',
      'Standard series: $e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\dots$',
      '$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots$',
      '$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\dots$'
    ],
    example: 'For $f(x) = e^x$, $f^{(n)}(0) = 1$ for all $n$, so $e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\dots$',
    diagramType: 'maclaurin_series_approx'
  },

  // =========================================================================
  // CHAPTER 4 — DIFFERENTIATION OF VECTOR FUNCTIONS (Definitions 20 - 21)
  // =========================================================================
  {
    id: 'def-c12-ch4-1',
    class: 12,
    chapterId: 'c12-ch4',
    chapterName: 'Differentiation of Vector Functions',
    term: 'Vector Function',
    category: 'Vectors & 3D Space',
    definition: 'A vector function (or vector-valued function) is a function whose domain is a set of real numbers $t$ and whose range is a set of vectors in 3D space.',
    formula: '\\mathbf{r}(t) = x(t)\\mathbf{i} + y(t)\\mathbf{j} + z(t)\\mathbf{k}',
    keyPoints: [
      '$t$: Scalar parameter (often representing time)',
      '$x(t), y(t), z(t)$: Scalar component functions',
      'Traces a continuous trajectory or curve $C$ in space as $t$ varies'
    ],
    example: '$\\mathbf{r}(t) = \\cos(t)\\mathbf{i} + \\sin(t)\\mathbf{j} + t\\mathbf{k}$ describes a circular helix spiraling upward around the $z$-axis.',
  },
  {
    id: 'def-c12-ch4-2',
    class: 12,
    chapterId: 'c12-ch4',
    chapterName: 'Differentiation of Vector Functions',
    term: 'Derivative of a Vector Function',
    category: 'Vectors & 3D Space',
    definition: 'The derivative of a vector function $\\mathbf{r}(t)$ is obtained by differentiating each of its scalar components with respect to $t$. It points tangent to the trajectory in the direction of motion.',
    formula: '\\mathbf{r}\'(t) = \\frac{d\\mathbf{r}}{dt} = x\'(t)\\mathbf{i} + y\'(t)\\mathbf{j} + z\'(t)\\mathbf{k}',
    keyPoints: [
      'Velocity vector: $\\mathbf{v}(t) = \\mathbf{r}\'(t)$',
      'Speed: $|\\mathbf{v}(t)| = \\sqrt{[x\'(t)]^2 + [y\'(t)]^2 + [z\'(t)]^2}$',
      'Acceleration vector: $\\mathbf{a}(t) = \\mathbf{r}\'\'(t)$',
      'Unit tangent vector: $\\mathbf{T}(t) = \\frac{\\mathbf{r}\'(t)}{|\\mathbf{r}\'(t)|}$'
    ],
    example: 'For $\\mathbf{r}(t) = t^2\\mathbf{i} + \\sin(t)\\mathbf{j} + e^t\\mathbf{k}$, $\\mathbf{r}\'(t) = 2t\\mathbf{i} + \\cos(t)\\mathbf{j} + e^t\\mathbf{k}$.',
    diagramType: 'vector_functions_differentiation'
  },

  // =========================================================================
  // CHAPTER 5 — INTEGRATION (Definitions 22 - 26)
  // =========================================================================
  {
    id: 'def-c12-ch5-1',
    class: 12,
    chapterId: 'c12-ch5',
    chapterName: 'Integration',
    term: 'Integration',
    category: 'Integration',
    definition: 'Integration is the inverse mathematical operation of differentiation. If $F\'(x) = f(x)$, then the integral of $f(x)$ with respect to $x$ is $F(x) + C$. It is also called finding the antiderivative.',
    formula: 'F\'(x) = f(x) \\implies \\int f(x)\\,dx = F(x) + C',
    keyPoints: [
      '$\\int$: Integral sign',
      '$f(x)$: Integrand',
      '$dx$: Differential indicating variable of integration',
      '$C$: Arbitrary constant of integration'
    ],
    example: 'Since $\\frac{d}{dx}(\\frac{x^3}{3}) = x^2$, $\\int x^2\\,dx = \\frac{x^3}{3} + C$.',
  },
  {
    id: 'def-c12-ch5-2',
    class: 12,
    chapterId: 'c12-ch5',
    chapterName: 'Integration',
    term: 'Indefinite Integral',
    category: 'Integration',
    definition: 'An integral without limits of integration that represents the entire family of antiderivatives of a given function is called an indefinite integral.',
    formula: '\\int f(x)\\,dx = F(x) + C',
    keyPoints: [
      'Yields a family of curves differing only by a vertical shift $C$',
      'Standard formula: $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)$',
      '$\\int \\frac{1}{x}\\,dx = \\ln|x| + C$'
    ],
    example: '$\\int (3x^2 + 4x - 5)\\,dx = x^3 + 2x^2 - 5x + C$.'
  },
  {
    id: 'def-c12-ch5-3',
    class: 12,
    chapterId: 'c12-ch5',
    chapterName: 'Integration',
    term: 'Constant of Integration',
    category: 'Integration',
    definition: 'The constant $C$ added to the result of an indefinite integral is called the constant of integration. It accounts for any constant term whose derivative vanishes.',
    formula: '\\frac{d}{dx}(C) = 0 \\implies \\int f(x)\\,dx = F(x) + C',
    keyPoints: [
      'Because $\\frac{d}{dx}[F(x) + C] = F\'(x) + 0 = f(x)$ for any constant $C$',
      'Geometrically represents a family of parallel curves',
      'Evaluated to a specific numeric value when initial boundary conditions $y(x_0) = y_0$ are given'
    ],
    example: 'If $\\frac{dy}{dx} = 2x$ and $y(1) = 4$, then $y = x^2 + C \\implies 4 = 1^2 + C \\implies C = 3$, giving $y = x^2 + 3$.'
  },
  {
    id: 'def-c12-ch5-4',
    class: 12,
    chapterId: 'c12-ch5',
    chapterName: 'Integration',
    term: 'Definite Integral',
    category: 'Integration',
    definition: 'An integral evaluated between specific lower ($a$) and upper ($b$) limits of integration is called a definite integral, giving a unique scalar number by the Fundamental Theorem of Calculus.',
    formula: '\\int_a^b f(x)\\,dx = [F(x)]_a^b = F(b) - F(a)',
    keyPoints: [
      '$a$: Lower limit, $b$: Upper limit',
      'The constant of integration $C$ cancels out: $(F(b) + C) - (F(a) + C) = F(b) - F(a)$',
      'Properties: $\\int_a^b f(x)\\,dx = -\\int_b^a f(x)\\,dx$ and $\\int_a^a f(x)\\,dx = 0$'
    ],
    example: '$\\int_1^3 2x\\,dx = [x^2]_1^3 = 3^2 - 1^2 = 9 - 1 = 8$.',
  },
  {
    id: 'def-c12-ch5-5',
    class: 12,
    chapterId: 'c12-ch5',
    chapterName: 'Integration',
    term: 'Area Under a Curve',
    category: 'Applications of Integrals',
    definition: 'For a continuous non-negative function $y = f(x) \\ge 0$, the geometric area bounded by the curve, the $x$-axis, and the vertical lines $x = a$ and $x = b$ is given by the definite integral.',
    formula: 'A = \\int_a^b f(x)\\,dx \\quad (f(x) \\ge 0)',
    keyPoints: [
      'If $f(x) \\le 0$ (below the $x$-axis), the geometric area is $A = -\\int_a^b f(x)\\,dx = |\\int_a^b f(x)\\,dx|$',
      'Area between two curves $y_1 = f(x)$ and $y_2 = g(x)$: $A = \\int_a^b [f(x) - g(x)]\\,dx$',
      'Calculated by summing infinitesimally thin vertical rectangular strips of width $dx$'
    ],
    example: 'The area under $y = x^2$ from $x = 0$ to $x = 3$ is $A = \\int_0^3 x^2\\,dx = [\\frac{x^3}{3}]_0^3 = \\frac{27}{3} = 9$ sq units.',
    diagramType: 'integral_area_curve'
  },

  // =========================================================================
  // CHAPTER 6 — PLANE ANALYTIC GEOMETRY: STRAIGHT LINE (Definitions 27 - 30)
  // =========================================================================
  {
    id: 'def-c12-ch6-1',
    class: 12,
    chapterId: 'c12-ch6',
    chapterName: 'Plane Analytic Geometry: Straight Line',
    term: 'Straight Line',
    category: 'Coordinate Geometry',
    definition: 'A straight line is a geometric curve with constant direction, represented by a first-degree linear equation in $x$ and $y$.',
    formula: 'ax + by + c = 0 \\quad (a, b \\text{ not both zero})',
    keyPoints: [
      'Slope-Intercept Form: $y = mx + c$',
      'Point-Slope Form: $y - y_1 = m(x - x_1)$',
      'Two-Point Form: $\\frac{y - y_1}{y_2 - y_1} = \\frac{x - x_1}{x_2 - x_1}$',
      'Intercept Form: $\\frac{x}{a} + \\frac{y}{b} = 1$'
    ],
    example: '$3x - 4y + 12 = 0 \\implies y = \\frac{3}{4}x + 3$ (Slope $m = \\frac{3}{4}$, $y$-intercept $= 3$).',
  },
  {
    id: 'def-c12-ch6-2',
    class: 12,
    chapterId: 'c12-ch6',
    chapterName: 'Plane Analytic Geometry: Straight Line',
    term: 'Slope (Gradient) of a Line',
    category: 'Coordinate Geometry',
    definition: 'The slope or gradient of a non-vertical line is the tangent of its angle of inclination $\\theta$ with the positive $x$-axis, or the ratio of vertical change (rise) to horizontal change (run).',
    formula: 'm = \\tan\\theta = \\frac{y_2 - y_1}{x_2 - x_1} \\quad (x_1 \\neq x_2)',
    keyPoints: [
      'Horizontal line (parallel to $x$-axis): $\\theta = 0^\\circ \\implies m = 0$',
      'Vertical line (parallel to $y$-axis): $\\theta = 90^\\circ \\implies m = \\infty$ (undefined)',
      'Lines ascending from left to right have $m > 0$; descending lines have $m < 0$'
    ],
    example: 'The slope of the line passing through $(2, 3)$ and $(6, 11)$ is $m = \\frac{11 - 3}{6 - 2} = \\frac{8}{4} = 2$.',
    diagramType: 'straight_line_slopes'
  },
  {
    id: 'def-c12-ch6-3',
    class: 12,
    chapterId: 'c12-ch6',
    chapterName: 'Plane Analytic Geometry: Straight Line',
    term: 'Parallel Lines',
    category: 'Coordinate Geometry',
    definition: 'Two non-vertical straight lines $l_1$ and $l_2$ are parallel if and only if they have equal slopes and never intersect in the plane.',
    formula: 'm_1 = m_2 \\iff l_1 \\parallel l_2',
    keyPoints: [
      'For general equations $a_1x + b_1y + c_1 = 0$ and $a_2x + b_2y + c_2 = 0$, lines are parallel if $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$',
      'Angle between parallel lines is $\\theta = 0^\\circ$',
      'Distance between parallel lines $ax+by+c_1=0$ and $ax+by+c_2=0$ is $d = \\frac{|c_1 - c_2|}{\\sqrt{a^2+b^2}}$'
    ],
    example: 'Lines $y = 3x + 4$ and $y = 3x - 7$ both have slope $m = 3$ and are therefore parallel.',
  },
  {
    id: 'def-c12-ch6-4',
    class: 12,
    chapterId: 'c12-ch6',
    chapterName: 'Plane Analytic Geometry: Straight Line',
    term: 'Perpendicular Lines',
    category: 'Coordinate Geometry',
    definition: 'Two non-vertical straight lines $l_1$ and $l_2$ are perpendicular (orthogonal) if and only if the product of their slopes is $-1$.',
    formula: 'm_1 m_2 = -1 \\iff m_2 = -\\frac{1}{m_1} \\iff l_1 \\perp l_2',
    keyPoints: [
      'Slopes are negative reciprocals of each other',
      'For lines $a_1x + b_1y + c_1 = 0$ and $a_2x + b_2y + c_2 = 0$: $l_1 \\perp l_2 \\iff a_1a_2 + b_1b_2 = 0$',
      'The angle between perpendicular lines is $\\theta = 90^\\circ$'
    ],
    example: 'Line $l_1$ with $m_1 = \\frac{2}{3}$ is perpendicular to line $l_2$ with $m_2 = -\\frac{3}{2}$ since $(\\frac{2}{3})(-\\frac{3}{2}) = -1$.',
  },

  // =========================================================================
  // CHAPTER 7 — CIRCLE (Definitions 31 - 36)
  // =========================================================================
  {
    id: 'def-c12-ch7-1',
    class: 12,
    chapterId: 'c12-ch7',
    chapterName: 'Circle',
    term: 'Circle',
    category: 'Circles & Conics',
    definition: 'A circle is the geometric locus of a point moving in a plane such that its distance from a fixed point (center) remains constant (radius).',
    formula: '(x - h)^2 + (y - k)^2 = r^2, \\qquad x^2 + y^2 = r^2 \\text{ (Origin)}',
    keyPoints: [
      'Standard form: $(x - h)^2 + (y - k)^2 = r^2$ with center $(h, k)$ and radius $r$',
      'General form: $x^2 + y^2 + 2gx + 2fy + c = 0$ with center $(-g, -f)$ and radius $r = \\sqrt{g^2 + f^2 - c}$',
      'If $g^2 + f^2 - c > 0$, real circle; if $= 0$, point circle; if $< 0$, imaginary circle'
    ],
    example: '$(x - 2)^2 + (y + 3)^2 = 25$ represents a circle with center $(2, -3)$ and radius $r = 5$.',
    diagramType: 'circle_geometry'
  },
  {
    id: 'def-c12-ch7-2',
    class: 12,
    chapterId: 'c12-ch7',
    chapterName: 'Circle',
    term: 'Centre of a Circle',
    category: 'Circles & Conics',
    definition: 'The fixed point in the plane from which all points on the circumference of the circle are equidistant.',
    formula: '\\text{Centre } C = (h, k) \\quad \\text{or } C = (-g, -f)',
    keyPoints: [
      'Midpoint of any diameter of the circle',
      'Intersection point of any two normal lines to the circle',
      'For $x^2 + y^2 = r^2$, the center is the origin $(0, 0)$'
    ],
    example: 'For $x^2 + y^2 - 6x + 8y - 11 = 0$, $2g = -6 \\implies g = -3$ and $2f = 8 \\implies f = 4$. Center is $(-g, -f) = (3, -4)$.',
  },
  {
    id: 'def-c12-ch7-3',
    class: 12,
    chapterId: 'c12-ch7',
    chapterName: 'Circle',
    term: 'Radius of a Circle',
    category: 'Circles & Conics',
    definition: 'The constant distance from the centre of the circle to any point lying on its circumference.',
    formula: 'r = \\sqrt{(x - h)^2 + (y - k)^2} = \\sqrt{g^2 + f^2 - c}',
    keyPoints: [
      'Always a positive real scalar ($r > 0$)',
      'Circumference $C = 2\\pi r$',
      'Area of the circle $A = \\pi r^2$'
    ],
    example: 'For $x^2 + y^2 - 6x + 8y - 11 = 0$, $r = \\sqrt{(-3)^2 + 4^2 - (-11)} = \\sqrt{9 + 16 + 11} = \\sqrt{36} = 6$.',
  },
  {
    id: 'def-c12-ch7-4',
    class: 12,
    chapterId: 'c12-ch7',
    chapterName: 'Circle',
    term: 'Diameter of a Circle',
    category: 'Circles & Conics',
    definition: 'A straight line segment passing through the center of a circle and having both of its endpoints on the circle. Its length is equal to twice the radius.',
    formula: 'd = 2r',
    keyPoints: [
      'The longest chord of a circle',
      'Divides the circle into two equal semicircles',
      'Angle inscribed in a semicircle is a right angle ($90^\\circ$)'
    ],
    example: 'If the radius of a circle is $r = 7\\text{ cm}$, its diameter is $d = 2(7) = 14\\text{ cm}$.',
  },
  {
    id: 'def-c12-ch7-5',
    class: 12,
    chapterId: 'c12-ch7',
    chapterName: 'Circle',
    term: 'Tangent to a Circle',
    category: 'Circles & Conics',
    definition: 'A straight line that touches the circle at exactly one point (point of contact). The radius drawn to the point of contact is strictly perpendicular to the tangent.',
    formula: '\\text{Tangent} \\perp \\text{Radius}, \\qquad xx_1 + yy_1 = r^2 \\; \\text{at } (x_1, y_1)',
    keyPoints: [
      'Equation of tangent to $x^2 + y^2 = r^2$ at $P(x_1, y_1)$ is $xx_1 + yy_1 = r^2$',
      'Condition for line $y = mx + c$ to touch $x^2 + y^2 = r^2$: $c^2 = r^2(1 + m^2)$',
      'From an external point, exactly two tangents can be drawn, and their lengths are equal'
    ],
    example: 'The tangent to $x^2 + y^2 = 25$ at $(3, 4)$ is $3x + 4y = 25$.',
  },
  {
    id: 'def-c12-ch7-6',
    class: 12,
    chapterId: 'c12-ch7',
    chapterName: 'Circle',
    term: 'Secant of a Circle',
    category: 'Circles & Conics',
    definition: 'A straight line that intersects the circle at two distinct points.',
    formula: '\\text{Secant intersects circle at } P(x_1, y_1) \\text{ and } Q(x_2, y_2)',
    keyPoints: [
      'The line segment of the secant inside the circle is called a chord',
      'Perpendicular from the center to any chord bisects the chord',
      'As the two intersection points merge into one, the secant becomes a tangent'
    ],
    example: 'Line $x = 3$ intersects $x^2 + y^2 = 25$ at $(3, 4)$ and $(3, -4)$, acting as a secant.',
  },

  // =========================================================================
  // CHAPTER 8 — PARABOLA, ELLIPSE AND HYPERBOLA (Definitions 37 - 46)
  // =========================================================================
  {
    id: 'def-c12-ch8-1',
    class: 12,
    chapterId: 'c12-ch8',
    chapterName: 'Parabola, Ellipse and Hyperbola',
    term: 'Parabola',
    category: 'Conic Sections',
    definition: 'A parabola is the locus of a point moving in a plane such that its distance from a fixed point (focus) is equal to its perpendicular distance from a fixed straight line (directrix). Eccentricity $e = 1$.',
    formula: 'y^2 = 4ax \\quad (a > 0)',
    keyPoints: [
      'Focus: $S(a, 0)$, Directrix: $x = -a$',
      'Vertex: $V(0, 0)$, Axis of symmetry: $y = 0$ ($x$-axis)',
      'Latus Rectum: Chord through focus perpendicular to axis, length $= 4a$',
      'Parametric coordinates: $x = at^2, \\; y = 2at$'
    ],
    example: 'For $y^2 = 12x$, $4a = 12 \\implies a = 3$. Focus is $(3, 0)$ and directrix is $x = -3$.',
    diagramType: 'conics_parabola_ellipse_hyperbola'
  },
  {
    id: 'def-c12-ch8-2',
    class: 12,
    chapterId: 'c12-ch8',
    chapterName: 'Parabola, Ellipse and Hyperbola',
    term: 'Focus of a Conic',
    category: 'Conic Sections',
    definition: 'The fixed point $S$ used in the focal-directrix definition of a conic section such that for any point $P$ on the curve, the distance $SP = e \\cdot PM$.',
    formula: 'SP = e \\cdot PM, \\qquad S = (a, 0) \\text{ for } y^2 = 4ax',
    keyPoints: [
      'Parabola has 1 focus: $(a, 0)$',
      'Ellipse has 2 foci: $(\\pm c, 0)$ where $c^2 = a^2 - b^2$',
      'Hyperbola has 2 foci: $(\\pm c, 0)$ where $c^2 = a^2 + b^2$'
    ],
    example: 'For $y^2 = 16x$, $a = 4 \\implies$ Focus is $S(4, 0)$.',
  },
  {
    id: 'def-c12-ch8-3',
    class: 12,
    chapterId: 'c12-ch8',
    chapterName: 'Parabola, Ellipse and Hyperbola',
    term: 'Directrix of a Conic',
    category: 'Conic Sections',
    definition: 'The fixed straight line perpendicular to the axis of symmetry used in defining a conic section by distance ratio.',
    formula: 'x = -a \\quad \\text{for } y^2 = 4ax, \\qquad x = \\pm \\frac{a}{e} \\quad \\text{for Ellipse/Hyperbola}',
    keyPoints: [
      'For parabola $y^2 = 4ax$, directrix is $x = -a$',
      'For parabola $x^2 = 4ay$, directrix is $y = -a$',
      'The vertex lies midway between the focus and the directrix'
    ],
    example: 'For $y^2 = 8x$, $a = 2 \\implies$ Directrix is $x = -2$.',
  },
  {
    id: 'def-c12-ch8-4',
    class: 12,
    chapterId: 'c12-ch8',
    chapterName: 'Parabola, Ellipse and Hyperbola',
    term: 'Vertex of a Parabola',
    category: 'Conic Sections',
    definition: 'The point where the axis of symmetry intersects the parabola. It is the turning point of the curve and lies midway between the focus and the directrix.',
    formula: 'V = (0, 0) \\text{ for } y^2 = 4ax; \\qquad V = (h, k) \\text{ for } (y - k)^2 = 4a(x - h)',
    keyPoints: [
      'The tangent at the vertex is perpendicular to the axis of the parabola',
      'For standard parabola $y^2 = 4ax$, vertex is $(0, 0)$',
      'For translated parabola $(y - k)^2 = 4a(x - h)$, vertex is $(h, k)$'
    ],
    example: 'For $(y - 3)^2 = 8(x + 2)$, the vertex is $(-2, 3)$.',
  },
  {
    id: 'def-c12-ch8-5',
    class: 12,
    chapterId: 'c12-ch8',
    chapterName: 'Parabola, Ellipse and Hyperbola',
    term: 'Axis of Parabola',
    category: 'Conic Sections',
    definition: 'The straight line passing through the vertex and focus of the parabola and perpendicular to the directrix. The parabola is symmetric about its axis.',
    formula: 'y = 0 \\quad (x\\text{-axis for } y^2 = 4ax); \\qquad y = k \\quad \\text{for } (y - k)^2 = 4a(x - h)',
    keyPoints: [
      'Reflecting any point $(x, y)$ on $y^2 = 4ax$ across the axis yields $(x, -y)$, also on the curve',
      'Perpendicular to the latus rectum at the focus'
    ],
    example: 'For $y^2 = 12x$, the axis of symmetry is the line $y = 0$.',
  },
  {
    id: 'def-c12-ch8-6',
    class: 12,
    chapterId: 'c12-ch8',
    chapterName: 'Parabola, Ellipse and Hyperbola',
    term: 'Ellipse',
    category: 'Conic Sections',
    definition: 'An ellipse is the locus of a point moving in a plane such that the sum of its distances from two fixed points (foci) is constant and equal to the major axis length $2a$. Eccentricity $e < 1$.',
    formula: '\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 \\quad (a > b > 0), \\qquad c^2 = a^2 - b^2, \\quad e = \\frac{c}{a} < 1',
    keyPoints: [
      'Focal Property: $PF_1 + PF_2 = 2a$',
      'Major axis length $= 2a$ along $x$-axis, Minor axis length $= 2b$ along $y$-axis',
      'Foci: $(\\pm c, 0) = (\\pm ae, 0)$, Directrices: $x = \\pm \\frac{a}{e}$',
      'Latus rectum length $= \\frac{2b^2}{a}$'
    ],
    example: 'For $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$, $a = 5, b = 3 \\implies c = \\sqrt{25 - 9} = 4$. Foci are $(\\pm 4, 0)$, $e = \\frac{4}{5} = 0.8$.',
  },
  {
    id: 'def-c12-ch8-7',
    class: 12,
    chapterId: 'c12-ch8',
    chapterName: 'Parabola, Ellipse and Hyperbola',
    term: 'Foci of an Ellipse',
    category: 'Conic Sections',
    definition: 'The two fixed points $F_1(-c, 0)$ and $F_2(c, 0)$ located on the major axis inside the ellipse such that the sum of distances from any point on the ellipse to both foci is constant ($2a$).',
    formula: 'F_1(-c, 0), \\quad F_2(c, 0) \\quad \\text{where } c = \\sqrt{a^2 - b^2} = ae',
    keyPoints: [
      'Distance between foci $= 2c = 2ae$',
      'Center $(0, 0)$ is the midpoint between both foci',
      'Sound/light waves emitted from one focus reflect directly to the other focus'
    ],
    example: 'For $\\frac{x^2}{169} + \\frac{y^2}{144} = 1$, $a = 13, b = 12 \\implies c = \\sqrt{169 - 144} = 5$. Foci are $(\\pm 5, 0)$.',
  },
  {
    id: 'def-c12-ch8-8',
    class: 12,
    chapterId: 'c12-ch8',
    chapterName: 'Parabola, Ellipse and Hyperbola',
    term: 'Hyperbola',
    category: 'Conic Sections',
    definition: 'A hyperbola is the locus of a point moving in a plane such that the absolute difference of its distances from two fixed points (foci) is constant and equal to $2a$. Eccentricity $e > 1$.',
    formula: '\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1, \\qquad c^2 = a^2 + b^2, \\quad e = \\frac{c}{a} > 1',
    keyPoints: [
      'Focal Property: $|PF_1 - PF_2| = 2a$',
      'Transverse axis length $= 2a$, Conjugate axis length $= 2b$',
      'Foci: $(\\pm c, 0) = (\\pm ae, 0)$, Directrices: $x = \\pm \\frac{a}{e}$',
      'Asymptotes: $y = \\pm \\frac{b}{a}x$'
    ],
    example: 'For $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$, $a = 4, b = 3 \\implies c = \\sqrt{16 + 9} = 5$. Foci are $(\\pm 5, 0)$, $e = \\frac{5}{4} = 1.25$.',
  },
  {
    id: 'def-c12-ch8-9',
    class: 12,
    chapterId: 'c12-ch8',
    chapterName: 'Parabola, Ellipse and Hyperbola',
    term: 'Tangent to a Conic',
    category: 'Conic Sections',
    definition: 'A straight line that touches a conic section at exactly one point without cutting across it locally.',
    formula: 'y - y_1 = f\'(x_1)(x - x_1), \\qquad \\text{For Ellipse: } \\frac{xx_1}{a^2} + \\frac{yy_1}{b^2} = 1',
    keyPoints: [
      'For parabola $y^2 = 4ax$ at $(x_1, y_1)$: $yy_1 = 2a(x + x_1)$',
      'For ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$: $\\frac{xx_1}{a^2} + \\frac{yy_1}{b^2} = 1$',
      'For hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$: $\\frac{xx_1}{a^2} - \\frac{yy_1}{b^2} = 1$'
    ],
    example: 'The tangent to $y^2 = 8x$ at $(2, 4)$ is $y(4) = 4(x + 2) \\implies 4y = 4x + 8 \\implies y = x + 2$.'
  },
  {
    id: 'def-c12-ch8-10',
    class: 12,
    chapterId: 'c12-ch8',
    chapterName: 'Parabola, Ellipse and Hyperbola',
    term: 'Normal to a Conic',
    category: 'Conic Sections',
    definition: 'The straight line passing through the point of contact $(x_1, y_1)$ on a conic and perpendicular to the tangent line at that point.',
    formula: 'y - y_1 = -\\frac{1}{m}(x - x_1) \\quad \\text{where } m = f\'(x_1)',
    keyPoints: [
      'Slope of normal $= -\\frac{1}{m_{\\text{tangent}}}$',
      'For parabola $y^2 = 4ax$ at $(x_1, y_1)$, slope $m_T = \\frac{2a}{y_1} \\implies m_N = -\\frac{y_1}{2a}$',
      'Normal equation: $y - y_1 = -\\frac{y_1}{2a}(x - x_1)$'
    ],
    example: 'For $y^2 = 8x$ at $(2, 4)$, $m_T = 1 \\implies m_N = -1$. Normal line: $y - 4 = -1(x - 2) \\implies x + y - 6 = 0$.'
  },

  // =========================================================================
  // CHAPTER 9 — DIFFERENTIAL EQUATIONS (Definitions 47 - 51)
  // =========================================================================
  {
    id: 'def-c12-ch9-1',
    class: 12,
    chapterId: 'c12-ch9',
    chapterName: 'Differential Equations',
    term: 'Differential Equation',
    category: 'Differential Equations',
    definition: 'A differential equation is an equation involving an unknown function and one or more of its derivatives with respect to one or more independent variables.',
    formula: '\\frac{dy}{dx} = f(x, y) \\quad \\text{or} \\quad F\\left(x, y, \\frac{dy}{dx}, \\frac{d^2y}{dx^2}, \\dots\\right) = 0',
    keyPoints: [
      'Ordinary Differential Equation (ODE): Involves ordinary derivatives with respect to a single variable $x$',
      'Partial Differential Equation (PDE): Involves partial derivatives with respect to two or more independent variables',
      'Used to model population growth, decay, harmonic motion, and heat transfer'
    ],
    example: '$\\frac{dy}{dx} = 2x, \\quad \\frac{d^2y}{dx^2} + 4y = 0, \\quad \\frac{dy}{dx} + 3y = e^x$.'
  },
  {
    id: 'def-c12-ch9-2',
    class: 12,
    chapterId: 'c12-ch9',
    chapterName: 'Differential Equations',
    term: 'Order of a Differential Equation',
    category: 'Differential Equations',
    definition: 'The order of a differential equation is the order of the highest derivative occurring in the equation.',
    formula: '\\text{Order} = \\text{Order of the highest-order derivative present}',
    keyPoints: [
      'First-order: Involves $\\frac{dy}{dx}$ (e.g. $\\frac{dy}{dx} + 5y = 0$)',
      'Second-order: Involves $\\frac{d^2y}{dx^2}$ (e.g. $\\frac{d^2y}{dx^2} + 3\\frac{dy}{dx} + 2y = 0$)',
      'Determines the number of arbitrary constants in the general solution'
    ],
    example: '$\\frac{d^3y}{dx^3} + 4\\left(\\frac{dy}{dx}\\right)^5 - 6y = 0$ has order $3$.'
  },
  {
    id: 'def-c12-ch9-3',
    class: 12,
    chapterId: 'c12-ch9',
    chapterName: 'Differential Equations',
    term: 'Degree of a Differential Equation',
    category: 'Differential Equations',
    definition: 'The degree of a differential equation is the power (exponent) of the highest-order derivative occurring in it, after the equation has been cleared of fractional powers and radicals in derivatives.',
    formula: '\\text{Degree} = \\text{Power of the highest derivative in polynomial form}',
    keyPoints: [
      'Must be expressible as a polynomial in its derivatives',
      'If transcendental functions of derivatives exist (e.g. $\\sin(y\')$ or $e^{y\'}$), degree is not defined',
      'Order is always identified before determining degree'
    ],
    example: '$\\left(\\frac{d^2y}{dx^2}\\right)^3 + \\left(\\frac{dy}{dx}\\right)^4 + y = 0$ has Order $= 2$ and Degree $= 3$.'
  },
  {
    id: 'def-c12-ch9-4',
    class: 12,
    chapterId: 'c12-ch9',
    chapterName: 'Differential Equations',
    term: 'General Solution',
    category: 'Differential Equations',
    definition: 'A general solution of an $n$-th order differential equation is a relationship between the variables that satisfies the equation and contains exactly $n$ independent arbitrary constants.',
    formula: 'y = F(x, C_1, C_2, \\dots, C_n)',
    keyPoints: [
      'First-order equation general solution has 1 arbitrary constant $C$',
      'Second-order equation general solution has 2 arbitrary constants $C_1, C_2$',
      'Represents the entire family of all possible solution curves'
    ],
    example: 'For $\\frac{dy}{dx} = 2x$, the general solution is $y = \\int 2x\\,dx = x^2 + C$.'
  },
  {
    id: 'def-c12-ch9-5',
    class: 12,
    chapterId: 'c12-ch9',
    chapterName: 'Differential Equations',
    term: 'Particular Solution',
    category: 'Differential Equations',
    definition: 'A particular solution of a differential equation is a solution obtained from the general solution by assigning definite numerical values to the arbitrary constants using given initial or boundary conditions.',
    formula: 'y = F(x, c_1, c_2, \\dots, c_n) \\quad (\\text{Constants evaluated from conditions})',
    keyPoints: [
      'Contains no arbitrary constants',
      'Represents a single specific curve out of the infinite family',
      'Derived from Initial Value Problems (IVP) or Boundary Value Problems (BVP)'
    ],
    example: 'For $\\frac{dy}{dx} = 2x$ with condition $y(0) = 3$: general solution $y = x^2 + C \\implies 3 = 0^2 + C \\implies C = 3$. Particular solution: $y = x^2 + 3$.'
  },

  // =========================================================================
  // CHAPTER 10 — PARTIAL DIFFERENTIATION (Definitions 52 - 54)
  // =========================================================================
  {
    id: 'def-c12-ch10-1',
    class: 12,
    chapterId: 'c12-ch10',
    chapterName: 'Partial Differentiation',
    term: 'Partial Derivative',
    category: 'Partial Differentiation',
    definition: 'When a function $z = f(x, y)$ depends on two or more independent variables, the derivative with respect to one variable while treating all other independent variables as constants is called a partial derivative.',
    formula: '\\frac{\\partial z}{\\partial x} = \\lim_{h \\to 0} \\frac{f(x+h, y) - f(x, y)}{h}, \\qquad \\frac{\\partial z}{\\partial y} = \\lim_{k \\to 0} \\frac{f(x, y+k) - f(x, y)}{k}',
    keyPoints: [
      'Uses the partial symbol $\\partial$ (curly d / Jacobi delta)',
      '$\\frac{\\partial z}{\\partial x}$: Rate of change along the $x$-direction (holding $y$ constant)',
      '$\\frac{\\partial z}{\\partial y}$: Rate of change along the $y$-direction (holding $x$ constant)',
      'Geometrically represents slopes of tangent lines to cross-sectional surface curves'
    ],
    example: 'For $z = x^3 + x^2 y + y^4$, treating $y$ as constant gives $\\frac{\\partial z}{\\partial x} = 3x^2 + 2xy$.',
    diagramType: 'partial_derivatives_surface'
  },
  {
    id: 'def-c12-ch10-2',
    class: 12,
    chapterId: 'c12-ch10',
    chapterName: 'Partial Differentiation',
    term: 'First Partial Derivatives',
    category: 'Partial Differentiation',
    definition: 'The first partial derivatives $f_x$ and $f_y$ of $z = f(x, y)$ give the instantaneous slopes of the surface $z = f(x, y)$ in the directions parallel to the coordinate axes.',
    formula: 'f_x = \\frac{\\partial f}{\\partial x}, \\qquad f_y = \\frac{\\partial f}{\\partial y}',
    keyPoints: [
      'Subscript notation: $f_x = \\frac{\\partial z}{\\partial x}$ and $f_y = \\frac{\\partial z}{\\partial y}$',
      'The gradient vector is formed by first partials: $\\nabla f = f_x \\mathbf{i} + f_y \\mathbf{j}$',
      'Total differential: $dz = \\frac{\\partial z}{\\partial x}dx + \\frac{\\partial z}{\\partial y}dy$'
    ],
    example: 'For $f(x, y) = 3x^2 y^3 - 5x + 7y$, $f_x = 6xy^3 - 5$ and $f_y = 9x^2 y^2 + 7$.',
  },
  {
    id: 'def-c12-ch10-3',
    class: 12,
    chapterId: 'c12-ch10',
    chapterName: 'Partial Differentiation',
    term: 'Higher Partial Derivatives',
    category: 'Partial Differentiation',
    definition: 'Derivatives obtained by repeatedly differentiating a multivariable function. By Clairaut\'s (Schwarz\'s) theorem, mixed second partial derivatives are equal for smooth continuous functions.',
    formula: '\\frac{\\partial^2 z}{\\partial x^2} = \\frac{\\partial}{\\partial x}\\left(\\frac{\\partial z}{\\partial x}\\right), \\qquad \\frac{\\partial^2 z}{\\partial y \\partial x} = \\frac{\\partial}{\\partial y}\\left(\\frac{\\partial z}{\\partial x}\\right) = \\frac{\\partial^2 z}{\\partial x \\partial y}',
    keyPoints: [
      'Direct second partials: $f_{xx} = \\frac{\\partial^2 z}{\\partial x^2}$ and $f_{yy} = \\frac{\\partial^2 z}{\\partial y^2}$',
      'Mixed second partials: $f_{xy} = \\frac{\\partial^2 z}{\\partial y \\partial x}$ and $f_{yx} = \\frac{\\partial^2 z}{\\partial x \\partial y}$',
      'Clairaut\'s Theorem: $f_{xy} = f_{yx}$ if both mixed partial derivatives are continuous'
    ],
    example: 'For $z = x^2 y^3$, $f_x = 2xy^3 \\implies f_{xy} = 6xy^2$. Also $f_y = 3x^2 y^2 \\implies f_{yx} = 6xy^2$. Thus $f_{xy} = f_{yx}$.',
  },

  // =========================================================================
  // CHAPTER 11 — INTRODUCTION TO NUMERICAL METHODS (Definitions 55 - 57)
  // =========================================================================
  {
    id: 'def-c12-ch11-1',
    class: 12,
    chapterId: 'c12-ch11',
    chapterName: 'Introduction to Numerical Methods',
    term: 'Numerical Method',
    category: 'Numerical Methods',
    definition: 'A numerical method is a systematic mathematical algorithm designed to solve mathematical problems numerically by computing successive approximations, especially when exact analytical solutions cannot be found.',
    formula: 'x_{n+1} = g(x_n) \\implies \\lim_{n \\to \\infty} x_n = \\alpha',
    keyPoints: [
      'Iterative procedures that converge toward the true mathematical solution',
      'Root-finding methods: Bisection Method, Regula Falsi, Newton-Raphson Method',
      'Numerical Integration: Trapezoidal Rule, Simpson\'s Rule',
      'Ideal for execution on computers and scientific calculators'
    ],
    example: 'Newton-Raphson iteration $x_{n+1} = x_n - \\frac{f(x_n)}{f\'(x_n)}$ finds roots of complex transcendental equations like $x - \\cos x = 0$.',
    diagramType: 'numerical_newton_secant'
  },
  {
    id: 'def-c12-ch11-2',
    class: 12,
    chapterId: 'c12-ch11',
    chapterName: 'Introduction to Numerical Methods',
    term: 'Numerical Approximation & Error',
    category: 'Numerical Methods',
    definition: 'A numerical approximation $\\tilde{x}$ is an estimated value close to the true value $x$. The discrepancy between the true value and the approximate value is called the error.',
    formula: 'E = x - \\tilde{x}, \\qquad E_{\\text{rel}} = \\frac{|x - \\tilde{x}|}{|x|}, \\qquad E_{\\text{pct}} = \\frac{|x - \\tilde{x}|}{|x|} \\times 100\\%',
    keyPoints: [
      'Absolute Error: $E_{\\text{abs}} = |x - \\tilde{x}|$',
      'Relative Error: $E_{\\text{rel}} = \\frac{|x - \\tilde{x}|}{|x|}$ (dimensionless)',
      'Percentage Error: $E_{\\text{pct}} = E_{\\text{rel}} \\times 100\\%$',
      'Sources of error: Round-off errors (finite precision) and Truncation errors (finite series steps)'
    ],
    example: 'If true root is $x = 3.14159$ and numerical approximation is $\\tilde{x} = 3.14$, absolute error is $|3.14159 - 3.14| = 0.00159$.',
  },
  {
    id: 'def-c12-ch11-3',
    class: 12,
    chapterId: 'c12-ch11',
    chapterName: 'Introduction to Numerical Methods',
    term: 'Numerical Solution (Root Finding)',
    category: 'Numerical Methods',
    definition: 'A numerical solution or root finding is the process of finding an approximate value $x \\approx r$ satisfying an equation $f(x) = 0$ within a specified tolerance $\\epsilon > 0$.',
    formula: 'f(x) = 0 \\implies x \\approx r, \\qquad x_{n+1} = x_n - \\frac{f(x_n)}{f\'(x_n)} \\; \\text{until } |f(x_n)| < \\epsilon',
    keyPoints: [
      'Stopping criteria: $|x_{n+1} - x_n| < \\epsilon$ or $|f(x_n)| < \\epsilon$',
      'Bisection Method uses Intermediate Value Theorem: if $f(a)f(b) < 0$, root lies in $[a, b]$',
      'Newton-Raphson method uses linear tangent approximation and exhibits quadratic convergence'
    ],
    example: 'To find $\\sqrt{7}$ by solving $f(x) = x^2 - 7 = 0$, starting with $x_0 = 3$: $x_1 = 3 - \\frac{3^2 - 7}{2(3)} = 3 - \\frac{2}{6} = 2.6667$, rapidly converging to $2.64575$.'
  }
];
