import { MathDefinition } from '../types';

export const C9_DEFINITIONS_ALL: MathDefinition[] = [
  // =========================================================================
  // UNIT 1 — REAL AND COMPLEX NUMBERS
  // =========================================================================
  {
    id: 'def-c9-u1-1',
    class: 9,
    chapterId: 'c9-ch1',
    chapterName: 'Real and Complex Numbers',
    term: 'Real Numbers',
    category: 'Real & Complex Numbers',
    definition: 'The set of rational and irrational numbers together is called the set of real numbers.',
    formula: '\\mathbb{R} = \\mathbb{Q} \\cup \\mathbb{Q}\'',
    keyPoints: [
      'Every real number can be represented by a unique point on the real number line',
      'The set $\\mathbb{R}$ is closed under addition, subtraction, multiplication, and non-zero division',
      '$\\mathbb{Q} \\cap \\mathbb{Q}\' = \\emptyset$'
    ],
    example: '$-5, 0, \\frac{3}{4}, \\sqrt{2}, \\pi, e \\in \\mathbb{R}$.'
  },
  {
    id: 'def-c9-u1-2',
    class: 9,
    chapterId: 'c9-ch1',
    chapterName: 'Real and Complex Numbers',
    term: 'Rational Number',
    category: 'Real & Complex Numbers',
    definition: 'A number that can be expressed in the form $\\frac{p}{q}$, where $p, q$ are integers and $q \\ne 0$.',
    formula: '\\mathbb{Q} = \\left\\{ \\frac{p}{q} \\;\\middle|\\; p, q \\in \\mathbb{Z}, q \\ne 0 \\right\\}',
    keyPoints: [
      'Decimal representation is either terminating (e.g. $0.75$) or non-terminating recurring (e.g. $0.333\\dots$)',
      'All integers are rational numbers with denominator $1$'
    ],
    example: '$\\frac{3}{4} = 0.75, \\quad -\\frac{7}{2} = -3.5, \\quad \\frac{1}{3} = 0.\\overline{3}$.'
  },
  {
    id: 'def-c9-u1-3',
    class: 9,
    chapterId: 'c9-ch1',
    chapterName: 'Real and Complex Numbers',
    term: 'Irrational Number',
    category: 'Real & Complex Numbers',
    definition: 'A number that cannot be expressed in the form $\\frac{p}{q}$, where $p, q$ are integers and $q \\ne 0$.',
    formula: '\\mathbb{Q}\' = \\mathbb{R} \\setminus \\mathbb{Q}',
    keyPoints: [
      'Decimal representation is non-terminating and non-recurring (non-repeating)',
      'Square roots of non-perfect squares are always irrational'
    ],
    example: '$\\sqrt{2} \\approx 1.4142\\dots, \\quad \\sqrt{3} \\approx 1.7320\\dots, \\quad \\pi \\approx 3.14159\\dots$'
  },
  {
    id: 'def-c9-u1-4',
    class: 9,
    chapterId: 'c9-ch1',
    chapterName: 'Real and Complex Numbers',
    term: 'Terminating Decimal',
    category: 'Real & Complex Numbers',
    definition: 'A decimal representation that ends after a finite number of decimal places.',
    formula: '\\frac{p}{q} = a.b_1 b_2 \\dots b_n \\quad (\\text{finite digits})',
    keyPoints: [
      'A rational number in lowest terms $\\frac{p}{q}$ has a terminating decimal if and only if prime factors of $q$ are $2$ and/or $5$'
    ],
    example: '$\\frac{1}{2} = 0.5, \\quad \\frac{3}{8} = 0.375, \\quad \\frac{7}{20} = 0.35$.'
  },
  {
    id: 'def-c9-u1-5',
    class: 9,
    chapterId: 'c9-ch1',
    chapterName: 'Real and Complex Numbers',
    term: 'Non-terminating Recurring Decimal',
    category: 'Real & Complex Numbers',
    definition: 'A decimal that continues indefinitely with a repeating pattern of digits.',
    formula: '\\frac{p}{q} = 0.\\overline{a_1 a_2 \\dots a_k}',
    keyPoints: [
      'Always represents a rational number',
      'The repeating group of digits is indicated with a bar (vinculum)'
    ],
    example: '$\\frac{1}{3} = 0.333\\dots = 0.\\overline{3}, \\quad \\frac{2}{7} = 0.\\overline{285714}$.'
  },
  {
    id: 'def-c9-u1-6',
    class: 9,
    chapterId: 'c9-ch1',
    chapterName: 'Real and Complex Numbers',
    term: 'Number Line',
    category: 'Real & Complex Numbers',
    definition: 'A straight line used for representing real numbers where each point corresponds to exactly one real number and vice versa.',
    formula: 'x \\in \\mathbb{R} \\longleftrightarrow \\text{Point } P(x) \\text{ on line}',
    keyPoints: [
      'Origin represents $0$',
      'Positive numbers are to the right of zero, negative numbers to the left',
      'Continuous and complete'
    ]
  },
  {
    id: 'def-c9-u1-7',
    class: 9,
    chapterId: 'c9-ch1',
    chapterName: 'Real and Complex Numbers',
    term: 'Radical',
    category: 'Real & Complex Numbers',
    definition: 'An expression containing a root sign, such as $\\sqrt{a}$ or $\\sqrt[n]{a}$.',
    formula: '\\sqrt[n]{a} = a^{1/n}',
    keyPoints: [
      '$\\sqrt{}$ is called the radical sign',
      '$n$ is called the index (order) of the radical ($n \\ge 2, n \\in \\mathbb{N}$)'
    ],
    example: '$\\sqrt{25} = 5, \\quad \\sqrt[3]{27} = 3, \\quad \\sqrt[4]{16} = 2$.'
  },
  {
    id: 'def-c9-u1-8',
    class: 9,
    chapterId: 'c9-ch1',
    chapterName: 'Real and Complex Numbers',
    term: 'Radicand',
    category: 'Real & Complex Numbers',
    definition: 'The quantity under the radical sign.',
    formula: '\\text{In } \\sqrt[n]{a}, \\quad a \\text{ is the radicand}',
    keyPoints: [
      'For even root indices $n$, radicand $a$ must be non-negative in real arithmetic ($a \\ge 0$)'
    ],
    example: 'In $\\sqrt[3]{64}$, the radicand is $64$. In $\\sqrt{x+5}$, the radicand is $x+5$.'
  },
  {
    id: 'def-c9-u1-9',
    class: 9,
    chapterId: 'c9-ch1',
    chapterName: 'Real and Complex Numbers',
    term: 'Exponent',
    category: 'Real & Complex Numbers',
    definition: 'A number that indicates how many times a base quantity is to be multiplied by itself.',
    formula: 'a^n = \\underbrace{a \\times a \\times \\dots \\times a}_{n \\text{ times}}, \\quad a^0 = 1, \\quad a^{-n} = \\frac{1}{a^n}',
    keyPoints: [
      'Product Rule: $a^m \\cdot a^n = a^{m+n}$',
      'Quotient Rule: $\\frac{a^m}{a^n} = a^{m-n}$',
      'Power of a Power: $(a^m)^n = a^{mn}$'
    ],
    example: '$2^4 = 2 \\times 2 \\times 2 \\times 2 = 16$.'
  },
  {
    id: 'def-c9-u1-10',
    class: 9,
    chapterId: 'c9-ch1',
    chapterName: 'Real and Complex Numbers',
    term: 'Complex Number',
    category: 'Real & Complex Numbers',
    definition: 'A number of the form $a+ib$, where $a, b$ are real numbers and $i$ is the imaginary unit satisfying $i^2 = -1$.',
    formula: 'z = a + ib \\quad (a, b \\in \\mathbb{R}, i^2 = -1)',
    diagramType: 'argand_plane',
    keyPoints: [
      'If $b = 0$, $z = a$ is purely real',
      'If $a = 0$ ($b \\ne 0$), $z = ib$ is purely imaginary',
      'Set of complex numbers is denoted by $\\mathbb{C}$'
    ],
    example: '$z = 3 + 4i, \\quad z = -2 - 5i$.'
  },
  {
    id: 'def-c9-u1-11',
    class: 9,
    chapterId: 'c9-ch1',
    chapterName: 'Real and Complex Numbers',
    term: 'Real Part',
    category: 'Real & Complex Numbers',
    definition: 'In $a+ib$, $a$ is called the real part, denoted by $\\operatorname{Re}(z)$.',
    formula: '\\operatorname{Re}(z) = \\operatorname{Re}(a+ib) = a',
    keyPoints: [
      'Extracted as the scalar coefficient without the imaginary unit $i$'
    ],
    example: 'For $z = 7 - 9i$, the real part is $\\operatorname{Re}(z) = 7$.'
  },
  {
    id: 'def-c9-u1-12',
    class: 9,
    chapterId: 'c9-ch1',
    chapterName: 'Real and Complex Numbers',
    term: 'Imaginary Part',
    category: 'Real & Complex Numbers',
    definition: 'In $a+ib$, $b$ is called the imaginary part, denoted by $\\operatorname{Im}(z)$.',
    formula: '\\operatorname{Im}(z) = \\operatorname{Im}(a+ib) = b',
    keyPoints: [
      'The imaginary part $b$ is itself a real number multiplying $i$'
    ],
    example: 'For $z = 7 - 9i$, the imaginary part is $\\operatorname{Im}(z) = -9$.'
  },
  {
    id: 'def-c9-u1-13',
    class: 9,
    chapterId: 'c9-ch1',
    chapterName: 'Real and Complex Numbers',
    term: 'Conjugate of a Complex Number',
    category: 'Real & Complex Numbers',
    definition: 'The conjugate of $a+ib$ is $a-ib$, denoted by $\\bar{z}$.',
    formula: 'z = a + ib \\implies \\bar{z} = a - ib, \\quad z \\cdot \\bar{z} = a^2 + b^2 = |z|^2',
    keyPoints: [
      'Formed by reversing the sign of the imaginary part',
      'Geometrically represents reflection across the real axis in the Argand plane',
      '$\\overline{\\bar{z}} = z$'
    ],
    example: 'If $z = 5 + 3i$, then $\\bar{z} = 5 - 3i$.'
  },

  // =========================================================================
  // UNIT 2 — LOGARITHMS
  // =========================================================================
  {
    id: 'def-c9-u2-1',
    class: 9,
    chapterId: 'c9-ch2',
    chapterName: 'Logarithms',
    term: 'Logarithm',
    category: 'Logarithms',
    definition: 'If $a^x = y$ ($a > 0, a \\ne 1, y > 0$), then $x$ is called the logarithm of $y$ to the base $a$, written as $\\log_a y = x$.',
    formula: 'a^x = y \\iff \\log_a y = x \\quad (a > 0, a \\ne 1, y > 0)',
    keyPoints: [
      'Logarithm is the inverse operation to exponentiation',
      '$\\log_a 1 = 0$ since $a^0 = 1$',
      '$\\log_a a = 1$ since $a^1 = a$'
    ],
    example: '$2^3 = 8 \\iff \\log_2 8 = 3, \\quad 10^2 = 100 \\iff \\log_{10} 100 = 2$.'
  },
  {
    id: 'def-c9-u2-2',
    class: 9,
    chapterId: 'c9-ch2',
    chapterName: 'Logarithms',
    term: 'Common Logarithm',
    category: 'Logarithms',
    definition: 'A logarithm having base $10$, often written simply as $\\log x$ or $\\lg x$ (Briggsian logarithm).',
    formula: '\\log_{10} x = \\log x',
    keyPoints: [
      'Introduced by Henry Briggs',
      'Standard logarithm used in logarithmic tables for scientific computations'
    ],
    example: '$\\log 1000 = \\log_{10} 10^3 = 3$.'
  },
  {
    id: 'def-c9-u2-3',
    class: 9,
    chapterId: 'c9-ch2',
    chapterName: 'Logarithms',
    term: 'Natural Logarithm',
    category: 'Logarithms',
    definition: 'A logarithm having base $e$, where $e \\approx 2.71828\\dots$ (Euler\'s number), denoted by $\\ln x$.',
    formula: '\\log_e x = \\ln x \\quad (e \\approx 2.71828)',
    keyPoints: [
      'Introduced by John Napier (Napierian logarithm)',
      'Widely used in calculus, physics, and continuous growth models'
    ],
    example: '$\\ln(e) = 1, \\quad \\ln(e^5) = 5$.'
  },
  {
    id: 'def-c9-u2-4',
    class: 9,
    chapterId: 'c9-ch2',
    chapterName: 'Logarithms',
    term: 'Characteristic',
    category: 'Logarithms',
    definition: 'The integral part of a logarithm of a real number.',
    formula: '\\log x = \\text{Characteristic} + \\text{Mantissa}',
    keyPoints: [
      'Can be zero, positive, or negative (written with a bar over it, e.g. $\\bar{1}, \\bar{2}$)',
      'For a number $\\ge 1$, characteristic = $(\\text{number of digits before decimal}) - 1$',
      'For a number $< 1$, characteristic = $-(\\text{number of zeroes after decimal point} + 1)$'
    ],
    example: 'For $\\log 432.5 = 2.6360$, Characteristic = $2$. For $\\log 0.0056 = \\bar{3}.7482$, Characteristic = $\\bar{3} = -3$.'
  },
  {
    id: 'def-c9-u2-5',
    class: 9,
    chapterId: 'c9-ch2',
    chapterName: 'Logarithms',
    term: 'Mantissa',
    category: 'Logarithms',
    definition: 'The fractional (decimal) part of a logarithm of a real number.',
    formula: '0 \\le \\text{Mantissa} < 1',
    keyPoints: [
      'Always non-negative ($0 \\le \\text{Mantissa} < 1$)',
      'Determined using log tables from the significant digits of the number regardless of decimal position'
    ],
    example: 'In $\\log 432.5 = 2.6360$, Mantissa = $0.6360$.'
  },
  {
    id: 'def-c9-u2-6',
    class: 9,
    chapterId: 'c9-ch2',
    chapterName: 'Logarithms',
    term: 'Antilogarithm',
    category: 'Logarithms',
    definition: 'The number corresponding to a given logarithm; the inverse operation of finding a logarithm.',
    formula: '\\text{If } \\log x = y, \\text{ then } x = \\operatorname{antilog}(y) = 10^y',
    keyPoints: [
      'Found using antilogarithm tables looking up the mantissa',
      'The characteristic sets the decimal point placement in the final answer'
    ],
    example: '$\\operatorname{antilog}(2.6360) = 432.5$.'
  },
  {
    id: 'def-c9-u2-7',
    class: 9,
    chapterId: 'c9-ch2',
    chapterName: 'Logarithms',
    term: 'Scientific Notation',
    category: 'Logarithms',
    definition: 'A special standard form used to write very large or very small numbers, in the form $a \\times 10^n$ where $1 \\le a < 10$ and $n \\in \\mathbb{Z}$.',
    formula: 'N = a \\times 10^n \\quad (1 \\le a < 10, \\; n \\in \\mathbb{Z})',
    keyPoints: [
      'Eliminates ambiguity in zeroes and simplifies arithmetic',
      '$n > 0$ for numbers $\\ge 10$; $n < 0$ for numbers $< 1$'
    ],
    example: '$150{,}000{,}000 = 1.5 \\times 10^8, \\quad 0.000034 = 3.4 \\times 10^{-5}$.'
  },

  // =========================================================================
  // UNIT 3 — ALGEBRAIC EXPRESSIONS AND FORMULAE
  // =========================================================================
  {
    id: 'def-c9-u3-1',
    class: 9,
    chapterId: 'c9-ch3',
    chapterName: 'Algebraic Expressions and Formulae',
    term: 'Algebraic Expression',
    category: 'Algebraic Expressions',
    definition: 'An expression made up of variables, constants and mathematical operations (addition, subtraction, multiplication, division, root extraction).',
    formula: 'E(x, y) = a_n x^n + \\dots + c',
    keyPoints: ['Does not contain an equality sign ($=$)', 'Can be evaluated for specific numerical values of variables'],
    example: '$3x^2 + 5x - 7, \\quad \\frac{2x+1}{x-3}$.'
  },
  {
    id: 'def-c9-u3-2',
    class: 9,
    chapterId: 'c9-ch3',
    chapterName: 'Algebraic Expressions and Formulae',
    term: 'Polynomial',
    category: 'Algebraic Expressions',
    definition: 'An algebraic expression in which the powers (exponents) of the variables are non-negative integers ($0, 1, 2, 3, \\dots$).',
    formula: 'P(x) = a_n x^n + a_{n-1}x^{n-1} + \\dots + a_1 x + a_0 \\quad (n \\in \\mathbb{W}, a_n \\ne 0)',
    keyPoints: [
      'No fractional or negative exponents of variables permitted',
      'Variables cannot appear in the denominator'
    ],
    example: '$4x^3 - 2x^2 + x - 5$ is a polynomial. $x^{-2} + 3$ and $\\sqrt{x}$ are NOT polynomials.'
  },
  {
    id: 'def-c9-u3-3',
    class: 9,
    chapterId: 'c9-ch3',
    chapterName: 'Algebraic Expressions and Formulae',
    term: 'Coefficient',
    category: 'Algebraic Expressions',
    definition: 'The numerical or constant factor multiplying a variable or term in an algebraic expression.',
    formula: '\\text{In term } cx^n, \\quad c \\text{ is the coefficient}',
    keyPoints: ['Can be positive, negative, integer, rational, or real'],
    example: 'In $5x^3 - 7x^2 + x$, the coefficient of $x^3$ is $5$, coefficient of $x^2$ is $-7$, and coefficient of $x$ is $1$.'
  },
  {
    id: 'def-c9-u3-4',
    class: 9,
    chapterId: 'c9-ch3',
    chapterName: 'Algebraic Expressions and Formulae',
    term: 'Degree of a Polynomial',
    category: 'Algebraic Expressions',
    definition: 'The highest power of the variable occurring in the polynomial.',
    formula: '\\operatorname{deg}(P(x)) = \\max(n) \\quad \\text{where } a_n \\ne 0',
    keyPoints: [
      'For polynomials in multiple variables, degree of a term is the sum of powers of its variables',
      'Constant non-zero polynomial has degree $0$'
    ],
    example: 'Degree of $7x^4 - 3x^2 + 2$ is $4$. Degree of $5x^2 y^3 + 2xy$ is $2+3 = 5$.'
  },
  {
    id: 'def-c9-u3-5',
    class: 9,
    chapterId: 'c9-ch3',
    chapterName: 'Algebraic Expressions and Formulae',
    term: 'Monomial',
    category: 'Algebraic Expressions',
    definition: 'A polynomial consisting of only one term.',
    formula: 'M(x) = a x^n',
    keyPoints: ['Single term joined by multiplication/division of constants and variables'],
    example: '$5x^2, \\quad -7y, \\quad 12x^3 y^2$.'
  },
  {
    id: 'def-c9-u3-6',
    class: 9,
    chapterId: 'c9-ch3',
    chapterName: 'Algebraic Expressions and Formulae',
    term: 'Binomial',
    category: 'Algebraic Expressions',
    definition: 'A polynomial consisting of two terms separated by $+$ or $-$ sign.',
    formula: 'B(x) = a x^m + b x^n',
    keyPoints: ['Can be expanded using binomial identities or binomial theorem'],
    example: '$2x + 5, \\quad x^2 - y^2, \\quad 4a - 3b$.'
  },
  {
    id: 'def-c9-u3-7',
    class: 9,
    chapterId: 'c9-ch3',
    chapterName: 'Algebraic Expressions and Formulae',
    term: 'Trinomial',
    category: 'Algebraic Expressions',
    definition: 'A polynomial consisting of three terms.',
    formula: 'T(x) = a x^2 + b x + c',
    keyPoints: ['Standard quadratic expressions are trinomials'],
    example: '$x^2 + 5x + 6, \\quad 3a^2 - 2ab + b^2$.'
  },
  {
    id: 'def-c9-u3-8',
    class: 9,
    chapterId: 'c9-ch3',
    chapterName: 'Algebraic Expressions and Formulae',
    term: 'Rational Expression',
    category: 'Algebraic Expressions',
    definition: 'An algebraic expression that can be written in the form $\\frac{p(x)}{q(x)}$, where $p(x)$ and $q(x)$ are polynomials and $q(x) \\ne 0$.',
    formula: 'R(x) = \\frac{p(x)}{q(x)} \\quad (q(x) \\ne 0)',
    keyPoints: [
      'Similar to rational numbers, closed under four fundamental arithmetic operations',
      'Undefined at values of $x$ where denominator $q(x) = 0$'
    ],
    example: '$\\frac{x^2 + 1}{x - 3} \\quad (x \\ne 3)$.'
  },
  {
    id: 'def-c9-u3-9',
    class: 9,
    chapterId: 'c9-ch3',
    chapterName: 'Algebraic Expressions and Formulae',
    term: 'Irrational Expression',
    category: 'Algebraic Expressions',
    definition: 'An algebraic expression that cannot be written in the rational expression form $\\frac{p(x)}{q(x)}$ with polynomials in numerator and denominator.',
    formula: 'E(x) \\notin \\mathbb{R}(x)',
    keyPoints: ['Contains non-integer powers or variables under radical signs that do not cancel out'],
    example: '$\\sqrt{x^2 + 5}, \\quad \\frac{\\sqrt{x}+1}{x-2}$.'
  },
  {
    id: 'def-c9-u3-10',
    class: 9,
    chapterId: 'c9-ch3',
    chapterName: 'Algebraic Expressions and Formulae',
    term: 'Surd',
    category: 'Algebraic Expressions',
    definition: 'An irrational expression involving a radical of a rational number that cannot be simplified to a rational number.',
    formula: '\\sqrt[n]{a} \\notin \\mathbb{Q} \\quad (a \\in \\mathbb{Q}^+, n \\in \\mathbb{N}, n \\ge 2)',
    keyPoints: [
      'Every surd is an irrational number, but every irrational number (like $\\pi, e$) is not a surd',
      'Radicand must be rational'
    ],
    example: '$\\sqrt{3}, \\quad \\sqrt[3]{5}, \\quad \\sqrt[4]{10}$ are surds. $\\sqrt{4} = 2$ is NOT a surd.'
  },
  {
    id: 'def-c9-u3-11',
    class: 9,
    chapterId: 'c9-ch3',
    chapterName: 'Algebraic Expressions and Formulae',
    term: 'Monomial Surd',
    category: 'Algebraic Expressions',
    definition: 'A surd containing only a single term.',
    formula: 'k\\sqrt[n]{a} \\quad (k \\in \\mathbb{Q})',
    keyPoints: ['Simplest form of surd expression'],
    example: '$\\sqrt{5}, \\quad 3\\sqrt{2}, \\quad -7\\sqrt[3]{4}$.'
  },
  {
    id: 'def-c9-u3-12',
    class: 9,
    chapterId: 'c9-ch3',
    chapterName: 'Algebraic Expressions and Formulae',
    term: 'Binomial Surd',
    category: 'Algebraic Expressions',
    definition: 'A surd consisting of two terms, at least one of which is a surd.',
    formula: 'a + \\sqrt{b}, \\quad \\sqrt{a} + \\sqrt{b}, \\quad a - \\sqrt{b}',
    keyPoints: ['Sum or difference of two surds or a rational number and a surd'],
    example: '$3 + \\sqrt{2}, \\quad \\sqrt{5} - \\sqrt{3}$.'
  },
  {
    id: 'def-c9-u3-13',
    class: 9,
    chapterId: 'c9-ch3',
    chapterName: 'Algebraic Expressions and Formulae',
    term: 'Conjugate Surds',
    category: 'Algebraic Expressions',
    definition: 'Two binomial surds whose signs between the terms are opposite, such as $(a+\\sqrt{b})$ and $(a-\\sqrt{b})$.',
    formula: '(a+\\sqrt{b})(a-\\sqrt{b}) = a^2 - b',
    keyPoints: [
      'Product of two conjugate surds is always a rational number',
      'Crucial for rationalizing irrational denominators'
    ],
    example: '$(3 + \\sqrt{5})$ and $(3 - \\sqrt{5})$ are conjugate surds: $(3+\\sqrt{5})(3-\\sqrt{5}) = 9 - 5 = 4$.'
  },
  {
    id: 'def-c9-u3-14',
    class: 9,
    chapterId: 'c9-ch3',
    chapterName: 'Algebraic Expressions and Formulae',
    term: 'Rationalizing Factor',
    category: 'Algebraic Expressions',
    definition: 'A factor which, when multiplied by a surd expression, produces a rational result.',
    formula: '\\text{Surd} \\times \\text{Rationalizing Factor} = \\text{Rational Number}',
    keyPoints: ['For $\\sqrt{a}$, the rationalizing factor is $\\sqrt{a}$', 'For $a+\\sqrt{b}$, the rationalizing factor is $a-\\sqrt{b}$'],
    example: 'For $\\sqrt{7}$, rationalizing factor is $\\sqrt{7}$ (since $\\sqrt{7}\\cdot\\sqrt{7} = 7$).'
  },
  {
    id: 'def-c9-u3-15',
    class: 9,
    chapterId: 'c9-ch3',
    chapterName: 'Algebraic Expressions and Formulae',
    term: 'Rationalization',
    category: 'Algebraic Expressions',
    definition: 'The process of multiplying numerator and denominator of a fraction containing a surd by its rationalizing factor to obtain a rational denominator.',
    formula: '\\frac{1}{a+\\sqrt{b}} = \\frac{1(a-\\sqrt{b})}{(a+\\sqrt{b})(a-\\sqrt{b})} = \\frac{a-\\sqrt{b}}{a^2 - b}',
    keyPoints: ['Transforms fractional surd expressions into standard algebraic form'],
    example: '$\\frac{1}{\\sqrt{3}+1} = \\frac{\\sqrt{3}-1}{(\\sqrt{3}+1)(\\sqrt{3}-1)} = \\frac{\\sqrt{3}-1}{3-1} = \\frac{\\sqrt{3}-1}{2}$.'
  },

  // =========================================================================
  // UNIT 4 — FACTORIZATION
  // =========================================================================
  {
    id: 'def-c9-u4-1',
    class: 9,
    chapterId: 'c9-ch4',
    chapterName: 'Factorization',
    term: 'Factorization',
    category: 'Factorization & Polynomials',
    definition: 'The process of expressing a polynomial or algebraic expression as a product of two or more irreducible expressions (factors).',
    formula: 'P(x) = f_1(x) \\cdot f_2(x) \\cdots f_k(x)',
    keyPoints: ['Inverse process of algebraic multiplication / expansion'],
    example: '$x^2 - 9 = (x-3)(x+3), \\quad x^2 + 5x + 6 = (x+2)(x+3)$.'
  },
  {
    id: 'def-c9-u4-2',
    class: 9,
    chapterId: 'c9-ch4',
    chapterName: 'Factorization',
    term: 'Factor',
    category: 'Factorization & Polynomials',
    definition: 'An algebraic expression that divides another expression exactly without leaving a remainder.',
    formula: 'P(x) = Q(x) \\cdot D(x) \\implies D(x) \\text{ is a factor of } P(x)',
    keyPoints: ['If $D(x)$ is a factor of $P(x)$, then remainder $R = 0$'],
    example: '$(x-2)$ is a factor of $x^2 - 4$ because $(x^2-4) \\div (x-2) = (x+2)$.'
  },
  {
    id: 'def-c9-u4-3',
    class: 9,
    chapterId: 'c9-ch4',
    chapterName: 'Factorization',
    term: 'Remainder',
    category: 'Factorization & Polynomials',
    definition: 'The quantity left after dividing one polynomial by another when it cannot be divided any further.',
    formula: 'P(x) = Q(x) \\cdot D(x) + R(x) \\quad (\\operatorname{deg}(R) < \\operatorname{deg}(D))',
    keyPoints: ['Division Algorithm: $\\text{Dividend} = (\\text{Divisor} \\times \\text{Quotient}) + \\text{Remainder}$'],
    example: 'When $x^2 + 5x + 8$ is divided by $(x+2)$, Quotient = $(x+3)$ and Remainder = $2$.'
  },
  {
    id: 'def-c9-u4-4',
    class: 9,
    chapterId: 'c9-ch4',
    chapterName: 'Factorization',
    term: 'Remainder Theorem',
    category: 'Factorization & Polynomials',
    definition: 'If a polynomial $P(x)$ is divided by a linear divisor $(x-a)$, then the remainder is $R = P(a)$.',
    formula: 'R = P(a) \\quad \\text{when divided by } (x-a); \\quad R = P\\left(\\frac{b}{a}\\right) \\text{ when divided by } (ax-b)',
    keyPoints: ['Enables finding remainder without performing long polynomial division'],
    example: 'When $P(x) = x^3 - 2x + 4$ is divided by $(x-1)$, $R = P(1) = 1^3 - 2(1) + 4 = 3$.'
  },
  {
    id: 'def-c9-u4-5',
    class: 9,
    chapterId: 'c9-ch4',
    chapterName: 'Factorization',
    term: 'Factor Theorem',
    category: 'Factorization & Polynomials',
    definition: 'If $P(a) = 0$, then $(x-a)$ is a factor of the polynomial $P(x)$. Conversely, if $(x-a)$ is a factor of $P(x)$, then $P(a) = 0$.',
    formula: '(x-a) \\text{ is a factor of } P(x) \\iff P(a) = 0',
    keyPoints: ['Special case of Remainder Theorem where Remainder $R = 0$'],
    example: 'For $P(x) = x^2 - 5x + 6$, $P(2) = 4 - 10 + 6 = 0 \\implies (x-2)$ is a factor.'
  },
  {
    id: 'def-c9-u4-6',
    class: 9,
    chapterId: 'c9-ch4',
    chapterName: 'Factorization',
    term: 'Zero of a Polynomial',
    category: 'Factorization & Polynomials',
    definition: 'A real value $a$ for which the value of the polynomial becomes zero, i.e., $P(a) = 0$.',
    formula: 'a \\text{ is a zero} \\iff P(a) = 0',
    keyPoints: ['A polynomial of degree $n$ has at most $n$ real zeroes', 'Also called root of equation $P(x) = 0$'],
    example: 'The zeroes of $P(x) = x^2 - 9$ are $x = 3$ and $x = -3$.'
  },
  {
    id: 'def-c9-u4-7',
    class: 9,
    chapterId: 'c9-ch4',
    chapterName: 'Factorization',
    term: 'Synthetic Division',
    category: 'Factorization & Polynomials',
    definition: 'A streamlined shortcut method of dividing a polynomial by a linear polynomial $(x-a)$ using only its numerical coefficients.',
    formula: 'P(x) \\div (x-a) \\xrightarrow{\\text{coefficients}} Q(x) \\text{ and } R',
    keyPoints: ['Fast calculation of quotient polynomial and remainder without variable terms'],
    example: 'Dividing $x^3 - 4x^2 + x + 6$ by $(x-2)$ using synthetic division yields quotient $x^2 - 2x - 3$ and remainder $0$.'
  },
  {
    id: 'def-c9-u4-8',
    class: 9,
    chapterId: 'c9-ch4',
    chapterName: 'Factorization',
    term: 'Cubic Polynomial',
    category: 'Factorization & Polynomials',
    definition: 'A polynomial whose highest degree of the variable is $3$.',
    formula: 'P(x) = ax^3 + bx^2 + cx + d \\quad (a \\ne 0)',
    keyPoints: ['Has exactly 3 roots (real or complex)', 'Can be factorized using synthetic division and factor theorem'],
    example: '$P(x) = 2x^3 - 5x^2 + 3x - 1$.'
  },

  // =========================================================================
  // UNIT 5 — ALGEBRAIC MANIPULATION
  // =========================================================================
  {
    id: 'def-c9-u5-1',
    class: 9,
    chapterId: 'c9-ch5',
    chapterName: 'Algebraic Manipulation',
    term: 'HCF (Highest Common Factor)',
    category: 'Algebraic Manipulation',
    definition: 'The product of common factors of the highest powers that divide two or more algebraic expressions exactly.',
    formula: '\\operatorname{HCF}(A, B) = \\prod (\\text{common irreducible factors})',
    keyPoints: [
      'Found by method of factorization or method of division',
      '$\\operatorname{HCF}$ divides each of the given expressions without remainder'
    ],
    example: '$\\operatorname{HCF}(x^2 - 4, \\; x^2 - 5x + 6) = \\operatorname{HCF}((x-2)(x+2), \\; (x-2)(x-3)) = x-2$.'
  },
  {
    id: 'def-c9-u5-2',
    class: 9,
    chapterId: 'c9-ch5',
    chapterName: 'Algebraic Manipulation',
    term: 'LCM (Least Common Multiple)',
    category: 'Algebraic Manipulation',
    definition: 'The least algebraic expression of lowest degree that is exactly divisible by each of the given expressions.',
    formula: '\\operatorname{LCM}(A, B) = \\text{Common factors} \\times \\text{Non-common factors} = \\frac{A \\times B}{\\operatorname{HCF}(A, B)}',
    keyPoints: [
      'Fundamental Identity: $\\operatorname{HCF}(A, B) \\times \\operatorname{LCM}(A, B) = A \\times B$'
    ],
    example: '$\\operatorname{LCM}(x-2, x+2) = (x-2)(x+2) = x^2 - 4$.'
  },
  {
    id: 'def-c9-u5-3',
    class: 9,
    chapterId: 'c9-ch5',
    chapterName: 'Algebraic Manipulation',
    term: 'Algebraic Manipulation',
    category: 'Algebraic Manipulation',
    definition: 'The process of simplifying, expanding, factorizing, and transforming algebraic expressions using mathematical operations.',
    formula: '\\frac{A}{B} \\pm \\frac{C}{D} = \\frac{AD \\pm BC}{BD}',
    keyPoints: ['Includes finding HCF, LCM, algebraic simplification, and square roots of polynomials']
  },
  {
    id: 'def-c9-u5-4',
    class: 9,
    chapterId: 'c9-ch5',
    chapterName: 'Algebraic Manipulation',
    term: 'Perfect Square',
    category: 'Algebraic Manipulation',
    definition: 'An algebraic expression that can be expressed as the square of another algebraic expression.',
    formula: 'A^2 \\pm 2AB + B^2 = (A \\pm B)^2',
    keyPoints: ['Its square root is an exact rational expression without radicals'],
    example: '$x^2 + 6x + 9 = (x+3)^2$ is a perfect square.'
  },
  {
    id: 'def-c9-u5-5',
    class: 9,
    chapterId: 'c9-ch5',
    chapterName: 'Algebraic Manipulation',
    term: 'Square Root',
    category: 'Algebraic Manipulation',
    definition: 'An algebraic expression which, when multiplied by itself, gives the given expression.',
    formula: '\\sqrt{P(x)^2} = \\pm P(x)',
    keyPoints: [
      'Methods of finding: (1) By Factorization, (2) By Division method'
    ],
    example: '$\\sqrt{4x^2 + 12x + 9} = \\pm(2x+3)$.'
  },

  // =========================================================================
  // UNIT 6 — LINEAR EQUATIONS AND INEQUALITIES
  // =========================================================================
  {
    id: 'def-c9-u6-1',
    class: 9,
    chapterId: 'c9-ch6',
    chapterName: 'Linear Equations and Inequalities',
    term: 'Equation',
    category: 'Equations & Inequalities',
    definition: 'A mathematical statement showing that two algebraic expressions are equal, connected by an equal sign ($=$).',
    formula: 'LHS = RHS',
    keyPoints: ['An equation is an identity if true for all values of variable; conditional if true for specific values'],
    example: '$2x + 3 = 11, \\quad x^2 - 4 = 0$.'
  },
  {
    id: 'def-c9-u6-2',
    class: 9,
    chapterId: 'c9-ch6',
    chapterName: 'Linear Equations and Inequalities',
    term: 'Linear Equation',
    category: 'Equations & Inequalities',
    definition: 'An equation in which the highest power (degree) of the variable is $1$.',
    formula: 'ax + b = 0 \\quad (a \\ne 0, \\; a, b \\in \\mathbb{R})',
    keyPoints: ['Has exactly one unique solution: $x = -\\frac{b}{a}$', 'Graph is always a straight line'],
    example: '$3x - 12 = 0 \\implies x = 4$.'
  },
  {
    id: 'def-c9-u6-3',
    class: 9,
    chapterId: 'c9-ch6',
    chapterName: 'Linear Equations and Inequalities',
    term: 'Solution of an Equation',
    category: 'Equations & Inequalities',
    definition: 'The value of the variable that makes the equation a true mathematical statement when substituted into it.',
    formula: 'x = r \\implies P(r) = 0',
    keyPoints: ['Also called root of the equation', 'Satisfies both LHS and RHS'],
    example: '$x = 5$ is the solution of $2x - 3 = 7$ because $2(5) - 3 = 7$.'
  },
  {
    id: 'def-c9-u6-4',
    class: 9,
    chapterId: 'c9-ch6',
    chapterName: 'Linear Equations and Inequalities',
    term: 'Radical Equation',
    category: 'Equations & Inequalities',
    definition: 'An equation in which the variable occurs under a radical sign.',
    formula: '\\sqrt{ax + b} = c',
    keyPoints: [
      'Solved by squaring both sides',
      'Squaring can introduce extraneous solutions; all solutions must be checked in the original equation'
    ],
    example: '$\\sqrt{2x+3} = 5 \\implies 2x+3 = 25 \\implies 2x = 22 \\implies x = 11$.'
  },
  {
    id: 'def-c9-u6-5',
    class: 9,
    chapterId: 'c9-ch6',
    chapterName: 'Linear Equations and Inequalities',
    term: 'Inequality',
    category: 'Equations & Inequalities',
    definition: 'A mathematical statement showing that one quantity is greater than ($>$), less than ($<$), greater than or equal to ($\\ge$), or less than or equal to ($\\le$) another.',
    formula: 'A(x) < B(x), \\quad A(x) > B(x), \\quad A(x) \\le B(x), \\quad A(x) \\ge B(x)',
    keyPoints: [
      'Multiplying or dividing both sides by a negative number reverses the inequality sign ($a < b \\implies -a > -b$)'
    ],
    example: '$2x + 1 > 7 \\implies 2x > 6 \\implies x > 3$.'
  },
  {
    id: 'def-c9-u6-6',
    class: 9,
    chapterId: 'c9-ch6',
    chapterName: 'Linear Equations and Inequalities',
    term: 'Linear Inequality',
    category: 'Equations & Inequalities',
    definition: 'An inequality in which the highest power of the variable is $1$.',
    formula: 'ax + b < 0, \\quad ax + b > 0 \\quad (a \\ne 0)',
    keyPoints: ['Solution is represented as an interval or region on the number line'],
    example: '$5x - 10 \\le 0 \\implies x \\le 2$.'
  },
  {
    id: 'def-c9-u6-7',
    class: 9,
    chapterId: 'c9-ch6',
    chapterName: 'Linear Equations and Inequalities',
    term: 'Solution Set',
    category: 'Equations & Inequalities',
    definition: 'The set of all values that satisfy a given equation or inequality.',
    formula: 'S = \\{ x \\in \\mathbb{R} \\mid P(x) = 0 \\text{ or } P(x) > 0 \\}',
    keyPoints: ['Can be finite (for equations) or infinite intervals (for inequalities) or empty set $\\emptyset$'],
    example: 'For $x^2 = 4$, Solution set $S = \\{-2, 2\\}$. For $x > 3$, $S = (3, \\infty)$.'
  },

  // =========================================================================
  // UNIT 7 — LINEAR GRAPHS AND THEIR APPLICATIONS
  // =========================================================================
  {
    id: 'def-c9-u7-1',
    class: 9,
    chapterId: 'c9-ch7',
    chapterName: 'Linear Graphs and Their Applications',
    term: 'Coordinate Plane',
    category: 'Linear Graphs',
    definition: 'A two-dimensional plane formed by two mutually perpendicular number lines intersecting at their zero points.',
    formula: '\\mathbb{R}^2 = \\mathbb{R} \\times \\mathbb{R} = \\{ (x, y) \\mid x, y \\in \\mathbb{R} \\}',
    keyPoints: ['Divides the 2D plane into four quadrants']
  },
  {
    id: 'def-c9-u7-2',
    class: 9,
    chapterId: 'c9-ch7',
    chapterName: 'Linear Graphs and Their Applications',
    term: 'Cartesian Plane',
    category: 'Linear Graphs',
    definition: 'The coordinate plane consisting of the horizontal $x$-axis and the vertical $y$-axis named after René Descartes.',
    formula: '(x, y) \\in \\text{Cartesian Plane}',
    keyPoints: ['Enables geometric figures to be analyzed algebraically']
  },
  {
    id: 'def-c9-u7-3',
    class: 9,
    chapterId: 'c9-ch7',
    chapterName: 'Linear Graphs and Their Applications',
    term: 'x-axis',
    category: 'Linear Graphs',
    definition: 'The horizontal reference number line of the Cartesian plane.',
    formula: 'y = 0 \\quad (\\text{Equation of the } x\\text{-axis})',
    keyPoints: ['Coordinates along this line have $y = 0$, formatted as $(x, 0)$']
  },
  {
    id: 'def-c9-u7-4',
    class: 9,
    chapterId: 'c9-ch7',
    chapterName: 'Linear Graphs and Their Applications',
    term: 'y-axis',
    category: 'Linear Graphs',
    definition: 'The vertical reference number line of the Cartesian plane.',
    formula: 'x = 0 \\quad (\\text{Equation of the } y\\text{-axis})',
    keyPoints: ['Coordinates along this line have $x = 0$, formatted as $(0, y)$']
  },
  {
    id: 'def-c9-u7-5',
    class: 9,
    chapterId: 'c9-ch7',
    chapterName: 'Linear Graphs and Their Applications',
    term: 'Origin',
    category: 'Linear Graphs',
    definition: 'The point where the $x$-axis and $y$-axis intersect, represented by $O(0,0)$.',
    formula: 'O = (0, 0)',
    keyPoints: ['Reference starting point for measuring all coordinates $(x, y)$']
  },
  {
    id: 'def-c9-u7-6',
    class: 9,
    chapterId: 'c9-ch7',
    chapterName: 'Linear Graphs and Their Applications',
    term: 'Ordered Pair',
    category: 'Linear Graphs',
    definition: 'A pair of numbers $(x,y)$ written in a specific order used to locate a point in the Cartesian plane.',
    formula: 'P = (x, y) \\quad (x \\ne y \\implies (x,y) \\ne (y,x))',
    keyPoints: ['$x$ is the abscissa (horizontal displacement)', '$y$ is the ordinate (vertical displacement)'],
    example: '$P(3, -4)$ represents 3 units right, 4 units down.'
  },
  {
    id: 'def-c9-u7-7',
    class: 9,
    chapterId: 'c9-ch7',
    chapterName: 'Linear Graphs and Their Applications',
    term: 'Quadrant',
    category: 'Linear Graphs',
    definition: 'Each of the four regions into which the coordinate axes divide the Cartesian plane.',
    formula: 'Q_I: (+,+), \\quad Q_{II}: (-,+), \\quad Q_{III}: (-,-), \\quad Q_{IV}: (+,-)',
    keyPoints: [
      'Quadrant I: $x > 0, y > 0$',
      'Quadrant II: $x < 0, y > 0$',
      'Quadrant III: $x < 0, y < 0$',
      'Quadrant IV: $x > 0, y < 0$'
    ],
    example: '$(2, 3) \\in Q_I, \\; (-2, 3) \\in Q_{II}, \\; (-2, -3) \\in Q_{III}, \\; (2, -3) \\in Q_{IV}$.'
  },
  {
    id: 'def-c9-u7-8',
    class: 9,
    chapterId: 'c9-ch7',
    chapterName: 'Linear Graphs and Their Applications',
    term: 'Linear Graph',
    category: 'Linear Graphs',
    definition: 'The graph of a first-degree linear equation in two variables, which forms a continuous straight line.',
    formula: 'ax + by + c = 0 \\quad (a, b \\text{ not both zero})',
    keyPoints: ['Slope-intercept form: $y = mx + c$', 'Two distinct points uniquely determine a straight line']
  },
  {
    id: 'def-c9-u7-9',
    class: 9,
    chapterId: 'c9-ch7',
    chapterName: 'Linear Graphs and Their Applications',
    term: 'Slope / Gradient',
    category: 'Linear Graphs',
    definition: 'The ratio of the vertical change (rise) to the horizontal change (run) between two points on a line.',
    formula: 'm = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1} = \\tan\\theta',
    keyPoints: [
      'Horizontal line has slope $m = 0$',
      'Vertical line has undefined slope ($x_2 = x_1$)',
      'Parallel lines have equal slopes ($m_1 = m_2$)',
      'Perpendicular lines: $m_1 m_2 = -1$'
    ],
    example: 'For points $(1, 2)$ and $(3, 8)$, $m = \\frac{8-2}{3-1} = \\frac{6}{2} = 3$.'
  },

  // =========================================================================
  // UNIT 8 — QUADRATIC EQUATIONS
  // =========================================================================
  {
    id: 'def-c9-u8-1',
    class: 9,
    chapterId: 'c9-ch17',
    chapterName: 'Quadratic Equations',
    term: 'Quadratic Equation',
    category: 'Quadratic Equations',
    definition: 'An equation of the second degree in one variable of the form $ax^2 + bx + c = 0$, where $a \\ne 0$ and $a, b, c \\in \\mathbb{R}$.',
    formula: 'ax^2 + bx + c = 0 \\quad (a \\ne 0)',
    keyPoints: [
      'If $b = 0$, $ax^2 + c = 0$ is a pure quadratic equation',
      'Has exactly 2 roots given by $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$'
    ],
    example: '$2x^2 - 5x + 3 = 0$.'
  },
  {
    id: 'def-c9-u8-2',
    class: 9,
    chapterId: 'c9-ch17',
    chapterName: 'Quadratic Equations',
    term: 'Quadratic Polynomial',
    category: 'Quadratic Equations',
    definition: 'A polynomial of degree 2.',
    formula: 'P(x) = ax^2 + bx + c \\quad (a \\ne 0)',
    keyPoints: ['Graph is a parabola opening upward ($a > 0$) or downward ($a < 0$)'],
    example: '$P(x) = x^2 - 4x + 3$.'
  },
  {
    id: 'def-c9-u8-3',
    class: 9,
    chapterId: 'c9-ch17',
    chapterName: 'Quadratic Equations',
    term: 'Root of an Equation',
    category: 'Quadratic Equations',
    definition: 'A value of the variable that satisfies the equation.',
    formula: 'x = \\alpha \\implies a\\alpha^2 + b\\alpha + c = 0',
    keyPoints: ['Sum of roots $S = \\alpha + \\beta = -\\frac{b}{a}$', 'Product of roots $P = \\alpha \\beta = \\frac{c}{a}$'],
    example: 'The roots of $x^2 - 5x + 6 = 0$ are $x = 2$ and $x = 3$.'
  },
  {
    id: 'def-c9-u8-4',
    class: 9,
    chapterId: 'c9-ch17',
    chapterName: 'Quadratic Equations',
    term: 'Solution of a Quadratic Equation',
    category: 'Quadratic Equations',
    definition: 'The values of $x$ that make the quadratic equation true, obtained by factorization, completing the square, or the quadratic formula.',
    formula: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
    keyPoints: ['Three standard methods: Factorization, Completing the Square, Quadratic Formula']
  },
  {
    id: 'def-c9-u8-5',
    class: 9,
    chapterId: 'c9-ch17',
    chapterName: 'Quadratic Equations',
    term: 'Discriminant',
    category: 'Quadratic Equations',
    definition: 'For $ax^2 + bx + c = 0$, the expression $\\Delta = b^2 - 4ac$ is called the discriminant.',
    formula: '\\Delta = b^2 - 4ac',
    keyPoints: ['Completely determines the nature and character of the roots without solving the equation'],
    example: 'For $x^2 - 4x + 4 = 0$, $\\Delta = (-4)^2 - 4(1)(4) = 16 - 16 = 0$.'
  },
  {
    id: 'def-c9-u8-6',
    class: 9,
    chapterId: 'c9-ch17',
    chapterName: 'Quadratic Equations',
    term: 'Nature of Roots',
    category: 'Quadratic Equations',
    definition: 'The type of roots of a quadratic equation determined by the value of its discriminant $\\Delta = b^2 - 4ac$.',
    formula: '\\Delta > 0 \\implies \\text{Real & Distinct}; \\quad \\Delta = 0 \\implies \\text{Real & Equal}; \\quad \\Delta < 0 \\implies \\text{Imaginary/Complex}',
    keyPoints: [
      'If $\\Delta > 0$ and a perfect square: Rational and unequal',
      'If $\\Delta > 0$ and not a perfect square: Irrational and unequal (occur in conjugate pairs)',
      'If $\\Delta = 0$: Real, rational, and repeated (equal roots $x = -\\frac{b}{2a}$)',
      'If $\\Delta < 0$: Complex conjugate roots ($u \\pm iv$)'
    ]
  },
  {
    id: 'def-c9-u8-7',
    class: 9,
    chapterId: 'c9-ch17',
    chapterName: 'Quadratic Equations',
    term: 'Extraneous Root',
    category: 'Quadratic Equations',
    definition: 'A value obtained during the algebraic solving process (such as squaring radical equations) that does not satisfy the original equation.',
    formula: 'x = k \\text{ such that } \\text{Original LHS}(k) \\ne \\text{Original RHS}(k)',
    keyPoints: ['Must be rejected from the final solution set'],
    example: 'Solving $\\sqrt{x+3} = x+1$ gives $x=1$ and $x=-2$. But $x=-2$ produces $\\sqrt{1} = -1$ (false), so $x=-2$ is extraneous.'
  },

  // =========================================================================
  // UNIT 9 — CONGRUENT TRIANGLES
  // =========================================================================
  {
    id: 'def-c9-u9-1',
    class: 9,
    chapterId: 'c9-ch9',
    chapterName: 'Congruent Triangles',
    term: 'Congruent Figures',
    category: 'Euclidean Geometry',
    definition: 'Geometric figures having exactly the same shape and the same size.',
    formula: 'F_1 \\cong F_2',
    keyPoints: ['Can be superimposed on each other to coincide point-for-point']
  },
  {
    id: 'def-c9-u9-2',
    class: 9,
    chapterId: 'c9-ch9',
    chapterName: 'Congruent Triangles',
    term: 'Congruent Triangles',
    category: 'Euclidean Geometry',
    definition: 'Two triangles are congruent if all corresponding sides and all corresponding angles are equal.',
    formula: '\\Delta ABC \\cong \\Delta DEF \\iff AB=DE, BC=EF, CA=FD \\text{ and } \\angle A=\\angle D, \\angle B=\\angle E, \\angle C=\\angle F',
    keyPoints: ['Denoted by the congruence symbol $\\cong$']
  },
  {
    id: 'def-c9-u9-3',
    class: 9,
    chapterId: 'c9-ch9',
    chapterName: 'Congruent Triangles',
    term: 'Corresponding Parts',
    category: 'Euclidean Geometry',
    definition: 'Sides or angles that occupy the same relative positions in two geometric figures.',
    formula: '\\text{Side } AB \\leftrightarrow \\text{Side } DE, \\quad \\angle A \\leftrightarrow \\angle D',
    keyPoints: ['Identified by the order of vertex naming in congruent triangles']
  },
  {
    id: 'def-c9-u9-4',
    class: 9,
    chapterId: 'c9-ch9',
    chapterName: 'Congruent Triangles',
    term: 'CPCT',
    category: 'Euclidean Geometry',
    definition: 'Abbreviation for "Corresponding Parts of Congruent Triangles" (which are always equal).',
    formula: '\\Delta ABC \\cong \\Delta DEF \\implies \\text{Corresponding Parts are Congruent (CPCT)}',
    keyPoints: ['Used as justification in geometric theorem proofs after proving triangle congruence']
  },
  {
    id: 'def-c9-u9-5',
    class: 9,
    chapterId: 'c9-ch9',
    chapterName: 'Congruent Triangles',
    term: 'SSS Congruence',
    category: 'Euclidean Geometry',
    definition: 'Two triangles are congruent if all three corresponding sides of one triangle are equal to the three sides of the other (Side-Side-Side).',
    formula: 'AB = DE, \\; BC = EF, \\; CA = FD \\implies \\Delta ABC \\cong \\Delta DEF',
    keyPoints: ['Side-Side-Side Theorem']
  },
  {
    id: 'def-c9-u9-6',
    class: 9,
    chapterId: 'c9-ch9',
    chapterName: 'Congruent Triangles',
    term: 'SAS Congruence',
    category: 'Euclidean Geometry',
    definition: 'Two triangles are congruent if two sides and the included angle of one triangle are equal to two sides and the included angle of the other (Side-Angle-Side).',
    formula: 'AB = DE, \\; \\angle B = \\angle E, \\; BC = EF \\implies \\Delta ABC \\cong \\Delta DEF',
    keyPoints: ['The angle must be strictly included between the two equal sides']
  },
  {
    id: 'def-c9-u9-7',
    class: 9,
    chapterId: 'c9-ch9',
    chapterName: 'Congruent Triangles',
    term: 'ASA Congruence',
    category: 'Euclidean Geometry',
    definition: 'Two triangles are congruent if two corresponding angles and the included side of one triangle are equal to those of the other (Angle-Side-Angle).',
    formula: '\\angle A = \\angle D, \\; AB = DE, \\; \\angle B = \\angle E \\implies \\Delta ABC \\cong \\Delta DEF',
    keyPoints: ['Angle-Side-Angle Postulate / Theorem']
  },
  {
    id: 'def-c9-u9-8',
    class: 9,
    chapterId: 'c9-ch9',
    chapterName: 'Congruent Triangles',
    term: 'RHS Congruence',
    category: 'Euclidean Geometry',
    definition: 'Two right-angled triangles are congruent if their hypotenuse and one corresponding side are equal (Right angle-Hypotenuse-Side).',
    formula: '\\angle B = \\angle E = 90^\\circ, \\; \\text{Hypotenuse } AC = DF, \\; \\text{Side } AB = DE \\implies \\Delta ABC \\cong \\Delta DEF',
    keyPoints: ['Applies specifically to right-angled triangles']
  },

  // =========================================================================
  // UNIT 10 — LINE BISECTORS AND ANGLE BISECTORS
  // =========================================================================
  {
    id: 'def-c9-u10-1',
    class: 9,
    chapterId: 'c9-ch11',
    chapterName: 'Line Bisectors and Angle Bisectors',
    term: 'Bisector of a Line Segment',
    category: 'Geometric Bisectors',
    definition: 'A line, ray, or segment that divides a line segment into two equal parts passing through its midpoint.',
    formula: 'M \\in AB \\text{ such that } AM = MB',
    keyPoints: ['Midpoint $M$ bisects line segment $AB$']
  },
  {
    id: 'def-c9-u10-2',
    class: 9,
    chapterId: 'c9-ch11',
    chapterName: 'Line Bisectors and Angle Bisectors',
    term: 'Perpendicular Bisector',
    category: 'Geometric Bisectors',
    definition: 'A line that passes through the midpoint of a line segment and is perpendicular ($90^\\circ$) to it.',
    formula: 'L \\perp AB \\quad \\text{and} \\quad AM = MB',
    keyPoints: [
      'Theorem: Any point on the perpendicular bisector of a line segment is equidistant from its endpoints ($PA = PB$)',
      'Converse is also true'
    ]
  },
  {
    id: 'def-c9-u10-3',
    class: 9,
    chapterId: 'c9-ch11',
    chapterName: 'Line Bisectors and Angle Bisectors',
    term: 'Angle Bisector',
    category: 'Geometric Bisectors',
    definition: 'A line or ray that divides an angle into two equal angles.',
    formula: '\\angle AOC = \\angle BOC = \\frac{1}{2}\\angle AOB',
    keyPoints: [
      'Theorem: Any point on the bisector of an angle is equidistant from its arms'
    ]
  },
  {
    id: 'def-c9-u10-4',
    class: 9,
    chapterId: 'c9-ch11',
    chapterName: 'Line Bisectors and Angle Bisectors',
    term: 'Perpendicular Lines',
    category: 'Geometric Bisectors',
    definition: 'Two lines that intersect at a right angle ($90^\\circ$).',
    formula: 'L_1 \\perp L_2 \\iff \\theta = 90^\\circ \\iff m_1 m_2 = -1',
    keyPoints: ['Form four $90^\\circ$ angles at intersection']
  },
  {
    id: 'def-c9-u10-5',
    class: 9,
    chapterId: 'c9-ch11',
    chapterName: 'Line Bisectors and Angle Bisectors',
    term: 'Equidistant',
    category: 'Geometric Bisectors',
    definition: 'Having equal distances from a given point, line, or object.',
    formula: 'd(P, A) = d(P, B) \\implies PA = PB',
    keyPoints: ['Fundamental concept in geometric loci and circle definitions']
  },
  {
    id: 'def-c9-u10-6',
    class: 9,
    chapterId: 'c9-ch11',
    chapterName: 'Line Bisectors and Angle Bisectors',
    term: 'Locus',
    category: 'Geometric Bisectors',
    definition: 'The set or path of all points satisfying a given geometric condition.',
    formula: '\\{ P \\mid \\text{Condition}(P) = \\text{True} \\}',
    keyPoints: ['Locus of points equidistant from two fixed points is their perpendicular bisector', 'Locus of points equidistant from a single point is a circle']
  },
  {
    id: 'def-c9-u10-7',
    class: 9,
    chapterId: 'c9-ch11',
    chapterName: 'Line Bisectors and Angle Bisectors',
    term: 'Right Angle',
    category: 'Geometric Bisectors',
    definition: 'An angle measuring exactly $90^\\circ$ (or $\\frac{\\pi}{2}$ radians).',
    formula: '\\theta = 90^\\circ = \\frac{\\pi}{2} \\text{ rad}',
    keyPoints: ['Formed by perpendicular rays or lines']
  },

  // =========================================================================
  // UNIT 11 — SIDES AND ANGLES OF A TRIANGLE
  // =========================================================================
  {
    id: 'def-c9-u11-1',
    class: 9,
    chapterId: 'c9-ch12',
    chapterName: 'Sides and Angles of a Triangle',
    term: 'Triangle',
    category: 'Triangles & Properties',
    definition: 'A closed three-sided plane geometric figure formed by three non-collinear line segments.',
    formula: '\\angle A + \\angle B + \\angle C = 180^\\circ',
    keyPoints: ['Has 3 vertices, 3 sides, and 3 interior angles']
  },
  {
    id: 'def-c9-u11-2',
    class: 9,
    chapterId: 'c9-ch12',
    chapterName: 'Sides and Angles of a Triangle',
    term: 'Median',
    category: 'Triangles & Properties',
    definition: 'A line segment joining a vertex of a triangle to the midpoint of the opposite side.',
    formula: 'M \\in BC, \\; BM=MC \\implies AM \\text{ is a median}',
    keyPoints: ['Every triangle has 3 medians', 'Divides the triangle into two triangles of equal area']
  },
  {
    id: 'def-c9-u11-3',
    class: 9,
    chapterId: 'c9-ch12',
    chapterName: 'Sides and Angles of a Triangle',
    term: 'Altitude',
    category: 'Triangles & Properties',
    definition: 'A perpendicular line segment drawn from a vertex of a triangle to the opposite side or its extension.',
    formula: 'AD \\perp BC \\implies AD \\text{ is the altitude from } A',
    keyPoints: ['Length of altitude represents height ($h$) for area calculations']
  },
  {
    id: 'def-c9-u11-4',
    class: 9,
    chapterId: 'c9-ch12',
    chapterName: 'Sides and Angles of a Triangle',
    term: 'Angle Bisector of a Triangle',
    category: 'Triangles & Properties',
    definition: 'A line segment from a vertex that divides the vertex angle into two equal angles and terminates at the opposite side.',
    formula: '\\angle BAD = \\angle CAD = \\frac{1}{2}\\angle BAC',
    keyPoints: ['Angle Bisector Theorem: $\\frac{BD}{DC} = \\frac{AB}{AC}$']
  },
  {
    id: 'def-c9-u11-5',
    class: 9,
    chapterId: 'c9-ch12',
    chapterName: 'Sides and Angles of a Triangle',
    term: 'Centroid',
    category: 'Triangles & Properties',
    definition: 'The point of concurrency where the three medians of a triangle meet.',
    formula: 'G = \\left(\\frac{x_1+x_2+x_3}{3}, \\frac{y_1+y_2+y_3}{3}\\right)',
    keyPoints: [
      'Always lies strictly inside the triangle',
      'Divides each median in the ratio $2:1$ from vertex to midpoint'
    ]
  },
  {
    id: 'def-c9-u11-6',
    class: 9,
    chapterId: 'c9-ch12',
    chapterName: 'Sides and Angles of a Triangle',
    term: 'Incenter',
    category: 'Triangles & Properties',
    definition: 'The point of concurrency where the three internal angle bisectors of a triangle meet.',
    formula: 'I = \\left(\\frac{ax_1+bx_2+cx_3}{a+b+c}, \\frac{ay_1+by_2+cy_3}{a+b+c}\\right)',
    keyPoints: ['Center of the inscribed circle (incircle)', 'Equidistant from all three sides ($r = \\frac{\\Delta}{s}$)']
  },
  {
    id: 'def-c9-u11-7',
    class: 9,
    chapterId: 'c9-ch12',
    chapterName: 'Sides and Angles of a Triangle',
    term: 'Circumcenter',
    category: 'Triangles & Properties',
    definition: 'The point of concurrency where the perpendicular bisectors of the three sides of a triangle meet.',
    formula: 'OA = OB = OC = R \\quad (R = \\text{Circumradius})',
    keyPoints: [
      'Center of circumscribed circle passing through all 3 vertices',
      'For right-angled triangle, circumcenter is the midpoint of the hypotenuse'
    ]
  },
  {
    id: 'def-c9-u11-8',
    class: 9,
    chapterId: 'c9-ch12',
    chapterName: 'Sides and Angles of a Triangle',
    term: 'Orthocenter',
    category: 'Triangles & Properties',
    definition: 'The point of concurrency where the three altitudes of a triangle meet.',
    formula: 'H = \\text{Intersection of altitudes } AD, BE, CF',
    keyPoints: [
      'Inside acute triangle, outside obtuse triangle, and at vertex of right angle in right triangle'
    ]
  },
  {
    id: 'def-c9-u11-9',
    class: 9,
    chapterId: 'c9-ch12',
    chapterName: 'Sides and Angles of a Triangle',
    term: 'Isosceles Triangle',
    category: 'Triangles & Properties',
    definition: 'A triangle having at least two equal sides.',
    formula: 'AB = AC \\implies \\angle B = \\angle C',
    keyPoints: ['Angles opposite to equal sides are equal']
  },
  {
    id: 'def-c9-u11-10',
    class: 9,
    chapterId: 'c9-ch12',
    chapterName: 'Sides and Angles of a Triangle',
    term: 'Equilateral Triangle',
    category: 'Triangles & Properties',
    definition: 'A triangle having all three sides equal in length.',
    formula: 'a = b = c \\implies \\angle A = \\angle B = \\angle C = 60^\\circ',
    keyPoints: ['All interior angles are $60^\\circ$', 'Area = $\\frac{\\sqrt{3}}{4} a^2$']
  },
  {
    id: 'def-c9-u11-11',
    class: 9,
    chapterId: 'c9-ch12',
    chapterName: 'Sides and Angles of a Triangle',
    term: 'Scalene Triangle',
    category: 'Triangles & Properties',
    definition: 'A triangle in which all three sides are of different (unequal) lengths.',
    formula: 'a \\ne b \\ne c \\implies \\angle A \\ne \\angle B \\ne \\angle C',
    keyPoints: ['All three interior angles have distinct measures']
  },

  // =========================================================================
  // UNIT 12 — PRACTICAL GEOMETRY: TRIANGLES
  // =========================================================================
  {
    id: 'def-c9-u12-1',
    class: 9,
    chapterId: 'c9-ch13',
    chapterName: 'Practical Geometry: Triangles',
    term: 'Construction',
    category: 'Practical Geometry',
    definition: 'The accurate drawing of a geometrical figure using only standard geometrical instruments (straightedge and compass).',
    formula: '\\text{Geometric Figure accurately constructed without measuring angles freehand}',
    keyPoints: ['Follows systematic, reproducible Euclidean construction steps']
  },
  {
    id: 'def-c9-u12-2',
    class: 9,
    chapterId: 'c9-ch13',
    chapterName: 'Practical Geometry: Triangles',
    term: 'Geometrical Instruments',
    category: 'Practical Geometry',
    definition: 'Precision drafting instruments such as ruler (straightedge), pair of compasses, dividers, and protractor used for geometrical drawings.',
    formula: '\\{ \\text{Ruler, Compass, Protractor, Set Squares} \\}',
    keyPoints: ['Standard Euclidean tools include ruler for straight lines and compass for arcs/circles']
  },
  {
    id: 'def-c9-u12-3',
    class: 9,
    chapterId: 'c9-ch13',
    chapterName: 'Practical Geometry: Triangles',
    term: 'Perpendicular',
    category: 'Practical Geometry',
    definition: 'A line making an angle of $90^\\circ$ with another line or plane.',
    formula: 'AB \\perp CD \\iff \\angle = 90^\\circ',
    keyPoints: ['Constructible using compass arcs of equal radii intersecting above and below a segment']
  },
  {
    id: 'def-c9-u12-4',
    class: 9,
    chapterId: 'c9-ch13',
    chapterName: 'Practical Geometry: Triangles',
    term: 'Perpendicular Bisector Construction',
    category: 'Practical Geometry',
    definition: 'A perpendicular line passing through the midpoint of a given line segment constructed using compass arcs.',
    formula: 'PA = PB \\implies P \\text{ lies on perpendicular bisector}',
    keyPoints: ['Constructed by drawing arcs of radius $> \\frac{1}{2}AB$ centered at $A$ and $B$']
  },
  {
    id: 'def-c9-u12-5',
    class: 9,
    chapterId: 'c9-ch13',
    chapterName: 'Practical Geometry: Triangles',
    term: 'Bisect',
    category: 'Practical Geometry',
    definition: 'To divide a geometric figure (line segment, angle, or area) into two equal parts.',
    formula: '\\text{Original} = 2 \\times \\text{Bisected Half}',
    keyPoints: ['Angle bisection and segment bisection are core geometric operations']
  },
  {
    id: 'def-c9-u12-6',
    class: 9,
    chapterId: 'c9-ch13',
    chapterName: 'Practical Geometry: Triangles',
    term: 'Construction of a Triangle',
    category: 'Practical Geometry',
    definition: 'The process of accurately drawing a triangle when sufficient independent measurements are given (e.g. SSS, SAS, ASA, RHS, or side with perimeter/altitude).',
    formula: '\\text{Requires 3 independent parameters}',
    keyPoints: ['Triangle inequality $a+b > c$ must be satisfied']
  },

  // =========================================================================
  // UNIT 13 — THEOREMS RELATED WITH AREA
  // =========================================================================
  {
    id: 'def-c9-u13-1',
    class: 9,
    chapterId: 'c9-ch14',
    chapterName: 'Theorems Related with Area',
    term: 'Area',
    category: 'Theorems on Area',
    definition: 'The amount of two-dimensional surface enclosed by the boundary of a plane figure, measured in square units.',
    formula: '\\text{Area}(\\text{Region}) \\in \\mathbb{R}^+ \\quad (\\text{units}^2)',
    keyPoints: ['Area is always a positive scalar quantity', 'Congruent figures have equal areas']
  },
  {
    id: 'def-c9-u13-2',
    class: 9,
    chapterId: 'c9-ch14',
    chapterName: 'Theorems Related with Area',
    term: 'Equal Areas',
    category: 'Theorems on Area',
    definition: 'Two figures have equal areas when the regions enclosed by them have identical numerical surface measure (they need not be congruent).',
    formula: '\\operatorname{Area}(F_1) = \\operatorname{Area}(F_2)',
    keyPoints: ['Congruence implies equal area, but equal area does NOT imply congruence']
  },
  {
    id: 'def-c9-u13-3',
    class: 9,
    chapterId: 'c9-ch14',
    chapterName: 'Theorems Related with Area',
    term: 'Equal Bases',
    category: 'Theorems on Area',
    definition: 'Two geometric figures have equal bases when their corresponding base segments have identical lengths.',
    formula: 'b_1 = b_2',
    keyPoints: ['Used in establishing equal area theorems for triangles and parallelograms']
  },
  {
    id: 'def-c9-u13-4',
    class: 9,
    chapterId: 'c9-ch14',
    chapterName: 'Theorems Related with Area',
    term: 'Same Parallel Lines',
    category: 'Theorems on Area',
    definition: 'Two figures are between the same parallel lines when their bases and top vertices lie on two parallel lines, giving them equal perpendicular heights.',
    formula: 'h_1 = h_2 = d(L_1, L_2)',
    keyPoints: ['Distance between two parallel lines is constant everywhere']
  },
  {
    id: 'def-c9-u13-5',
    class: 9,
    chapterId: 'c9-ch14',
    chapterName: 'Theorems Related with Area',
    term: 'Parallelogram',
    category: 'Theorems on Area',
    definition: 'A quadrilateral whose opposite sides are parallel and equal in length.',
    formula: '\\operatorname{Area}(\\text{Parallelogram}) = \\text{Base} \\times \\text{Height} = b \\cdot h',
    keyPoints: [
      'Theorem: Parallelograms on the same base and between the same parallels are equal in area'
    ]
  },
  {
    id: 'def-c9-u13-6',
    class: 9,
    chapterId: 'c9-ch14',
    chapterName: 'Theorems Related with Area',
    term: 'Triangle on the Same Base',
    category: 'Theorems on Area',
    definition: 'Triangles having the same line segment as their common base.',
    formula: '\\operatorname{Area}(\\Delta) = \\frac{1}{2} b \\cdot h',
    keyPoints: [
      'Theorem: Triangles on the same base and between the same parallel lines are equal in area',
      'Area of a triangle is half the area of a parallelogram on the same base and between same parallels'
    ]
  },
  {
    id: 'def-c9-u13-7',
    class: 9,
    chapterId: 'c9-ch14',
    chapterName: 'Theorems Related with Area',
    term: 'Theorem',
    category: 'Theorems on Area',
    definition: 'A mathematical proposition that has been formally proved to be true on the basis of accepted axioms and previously established theorems.',
    formula: '\\text{Hypothesis (Given)} \\implies \\text{Proof} \\implies \\text{Conclusion (To Prove)}',
    keyPoints: ['Consists of Given, To Prove, Construction, and Proof (Statements and Reasons)']
  },
  {
    id: 'def-c9-u13-8',
    class: 9,
    chapterId: 'c9-ch14',
    chapterName: 'Theorems Related with Area',
    term: 'Corollary',
    category: 'Theorems on Area',
    definition: 'A mathematical proposition that follows as an immediate and direct consequence of a proved theorem with little or no additional proof.',
    formula: '\\text{Theorem} \\implies \\text{Corollary}',
    keyPoints: ['Directly derived extension of a proved theorem']
  },

  // =========================================================================
  // UNIT 14 — PROJECTION OF A SIDE OF A TRIANGLE
  // =========================================================================
  {
    id: 'def-c9-u14-1',
    class: 9,
    chapterId: 'c9-ch15',
    chapterName: 'Projection of a Side of a Triangle',
    term: 'Projection',
    category: 'Projections & Triangles',
    definition: 'The perpendicular component or shadow of a line segment on another line.',
    formula: 'p = c \\cos\\theta',
    keyPoints: ['Formed by dropping perpendiculars from endpoints to the line of projection']
  },
  {
    id: 'def-c9-u14-2',
    class: 9,
    chapterId: 'c9-ch15',
    chapterName: 'Projection of a Side of a Triangle',
    term: 'Orthogonal Projection',
    category: 'Projections & Triangles',
    definition: 'The projection obtained by drawing perpendicular lines ($90^\\circ$) from each point of a segment to the line on which the projection is made.',
    formula: 'A\'B\' = \\text{Projection of } AB \\text{ on line } L \\quad (AA\' \\perp L, BB\' \\perp L)',
    keyPoints: ['Length of projection = $|AB| \\cos\\theta$ where $\\theta$ is the inclination angle']
  },
  {
    id: 'def-c9-u14-3',
    class: 9,
    chapterId: 'c9-ch15',
    chapterName: 'Projection of a Side of a Triangle',
    term: 'Perpendicular',
    category: 'Projections & Triangles',
    definition: 'Two lines are perpendicular if they intersect at a right angle ($90^\\circ$).',
    formula: '\\theta = 90^\\circ',
    keyPoints: ['Fundamental for defining orthogonal projections and altitudes']
  },
  {
    id: 'def-c9-u14-4',
    class: 9,
    chapterId: 'c9-ch15',
    chapterName: 'Projection of a Side of a Triangle',
    term: 'Acute Angle',
    category: 'Projections & Triangles',
    definition: 'An angle measuring strictly less than $90^\\circ$ ($0^\\circ < \\theta < 90^\\circ$).',
    formula: '0^\\circ < \\theta < 90^\\circ',
    keyPoints: [
      'In acute triangle: $c^2 = a^2 + b^2 - 2a \\cdot p$ (less than sum of squares)'
    ]
  },
  {
    id: 'def-c9-u14-5',
    class: 9,
    chapterId: 'c9-ch15',
    chapterName: 'Projection of a Side of a Triangle',
    term: 'Obtuse Angle',
    category: 'Projections & Triangles',
    definition: 'An angle measuring greater than $90^\\circ$ but strictly less than $180^\\circ$ ($90^\\circ < \\theta < 180^\\circ$).',
    formula: '90^\\circ < \\theta < 180^\\circ',
    keyPoints: [
      'In obtuse triangle: $c^2 = a^2 + b^2 + 2a \\cdot p$ (greater than sum of squares)'
    ]
  },
  {
    id: 'def-c9-u14-6',
    class: 9,
    chapterId: 'c9-ch15',
    chapterName: 'Projection of a Side of a Triangle',
    term: 'Right-Angled Triangle',
    category: 'Projections & Triangles',
    definition: 'A triangle containing one angle of exactly $90^\\circ$.',
    formula: 'c^2 = a^2 + b^2 \\quad (\\text{Pythagoras Theorem})',
    keyPoints: ['Hypotenuse is the side opposite to the $90^\\circ$ angle and is the longest side']
  },

  // =========================================================================
  // UNIT 15 — INTRODUCTION TO COORDINATE GEOMETRY / ANALYTICAL GEOMETRY
  // =========================================================================
  {
    id: 'def-c9-u15-1',
    class: 9,
    chapterId: 'c9-ch16',
    chapterName: 'Introduction to Coordinate Geometry',
    term: 'Coordinate Geometry',
    category: 'Coordinate Geometry',
    definition: 'The branch of mathematics in which geometric figures and curves are studied using coordinate systems and algebraic equations.',
    formula: '\\text{Geometry} \\longleftrightarrow \\text{Algebra via } (x, y)',
    keyPoints: ['Pioneered by René Descartes (Cartesian Geometry)']
  },
  {
    id: 'def-c9-u15-2',
    class: 9,
    chapterId: 'c9-ch16',
    chapterName: 'Introduction to Coordinate Geometry',
    term: 'Analytical Geometry',
    category: 'Coordinate Geometry',
    definition: 'The study of geometric figures, distances, lines, and curves using algebraic methods and numerical coordinate systems.',
    formula: 'y = f(x) \\longleftrightarrow \\text{Geometric locus in 2D/3D}',
    keyPoints: ['Bridges algebra with geometry']
  },
  {
    id: 'def-c9-u15-3',
    class: 9,
    chapterId: 'c9-ch16',
    chapterName: 'Introduction to Coordinate Geometry',
    term: 'Coordinates',
    category: 'Coordinate Geometry',
    definition: 'Numbers used to specify the exact location of a point in a coordinate space.',
    formula: 'P = (x, y)',
    keyPoints: ['Ordered sequence of values giving directed distances from coordinate axes']
  },
  {
    id: 'def-c9-u15-4',
    class: 9,
    chapterId: 'c9-ch16',
    chapterName: 'Introduction to Coordinate Geometry',
    term: 'Abscissa',
    category: 'Coordinate Geometry',
    definition: 'The $x$-coordinate of a point representing its directed horizontal distance from the $y$-axis.',
    formula: 'x = \\text{Abscissa of } P(x, y)',
    keyPoints: ['Positive to the right of $y$-axis, negative to the left'],
    example: 'For $P(4, -7)$, the abscissa is $4$.'
  },
  {
    id: 'def-c9-u15-5',
    class: 9,
    chapterId: 'c9-ch16',
    chapterName: 'Introduction to Coordinate Geometry',
    term: 'Ordinate',
    category: 'Coordinate Geometry',
    definition: 'The $y$-coordinate of a point representing its directed vertical distance from the $x$-axis.',
    formula: 'y = \\text{Ordinate of } P(x, y)',
    keyPoints: ['Positive above the $x$-axis, negative below'],
    example: 'For $P(4, -7)$, the ordinate is $-7$.'
  },
  {
    id: 'def-c9-u15-6',
    class: 9,
    chapterId: 'c9-ch16',
    chapterName: 'Introduction to Coordinate Geometry',
    term: 'Origin',
    category: 'Coordinate Geometry',
    definition: 'The reference point $(0,0)$ where the two coordinate axes intersect.',
    formula: 'O(0, 0)',
    keyPoints: ['Both abscissa and ordinate are zero at the origin']
  },
  {
    id: 'def-c9-u15-7',
    class: 9,
    chapterId: 'c9-ch16',
    chapterName: 'Introduction to Coordinate Geometry',
    term: 'Distance Formula',
    category: 'Coordinate Geometry',
    definition: 'A formula used to find the Euclidean distance between any two points in the coordinate plane.',
    formula: 'd = AB = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}',
    keyPoints: ['Derived directly from Pythagoras Theorem ($d^2 = \\Delta x^2 + \\Delta y^2$)'],
    example: 'Distance between $(1, 2)$ and $(4, 6)$ is $\\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.'
  },
  {
    id: 'def-c9-u15-8',
    class: 9,
    chapterId: 'c9-ch16',
    chapterName: 'Introduction to Coordinate Geometry',
    term: 'Midpoint',
    category: 'Coordinate Geometry',
    definition: 'The point that divides a line segment joining two points into two equal halves.',
    formula: 'M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)',
    keyPoints: ['Arithmetic mean of the endpoints\' coordinates'],
    example: 'Midpoint of $(2, 4)$ and $(6, 10)$ is $\\left(\\frac{2+6}{2}, \\frac{4+10}{2}\\right) = (4, 7)$.'
  },
  {
    id: 'def-c9-u15-9',
    class: 9,
    chapterId: 'c9-ch16',
    chapterName: 'Introduction to Coordinate Geometry',
    term: 'Slope',
    category: 'Coordinate Geometry',
    definition: 'The measure of the steepness and direction of a straight line.',
    formula: 'm = \\frac{y_2 - y_1}{x_2 - x_1} = \\tan\\theta',
    keyPoints: ['Collinear points have equal slopes between any pairs of points ($m_{AB} = m_{BC}$)']
  },

  // =========================================================================
  // UNIT 16 — ANALYTICAL GEOMETRY
  // =========================================================================
  {
    id: 'def-c9-u16-1',
    class: 9,
    chapterId: 'c9-ch16',
    chapterName: 'Analytical Geometry',
    term: 'Coordinate System',
    category: 'Analytical Geometry',
    definition: 'A system in which the position of any point is represented uniquely by an ordered set of coordinates.',
    formula: 'P \\longleftrightarrow (x_1, x_2, \\dots, x_n)',
    keyPoints: ['Establishes a 1-to-1 correspondence between algebraic numbers and geometric space']
  },
  {
    id: 'def-c9-u16-2',
    class: 9,
    chapterId: 'c9-ch16',
    chapterName: 'Analytical Geometry',
    term: 'Point',
    category: 'Analytical Geometry',
    definition: 'A fundamental location in space having position but zero dimensions (no length, width, or height).',
    formula: 'P(x, y)',
    keyPoints: ['Building block of all geometric lines, curves, and figures']
  },
  {
    id: 'def-c9-u16-3',
    class: 9,
    chapterId: 'c9-ch16',
    chapterName: 'Analytical Geometry',
    term: 'Line',
    category: 'Analytical Geometry',
    definition: 'A continuous straight one-dimensional path of points extending indefinitely in both opposite directions.',
    formula: 'ax + by + c = 0',
    keyPoints: ['Has length but no thickness or width; infinitely long']
  },
  {
    id: 'def-c9-u16-4',
    class: 9,
    chapterId: 'c9-ch16',
    chapterName: 'Analytical Geometry',
    term: 'Line Segment',
    category: 'Analytical Geometry',
    definition: 'The part of a straight line bounded between two fixed distinct endpoints.',
    formula: '\\overline{AB} = \\{ P(x,y) \\mid P \\text{ lies between } A \\text{ and } B \\}',
    keyPoints: ['Has a definite measurable length ($|AB|$)']
  },
  {
    id: 'def-c9-u16-5',
    class: 9,
    chapterId: 'c9-ch16',
    chapterName: 'Analytical Geometry',
    term: 'Slope of a Line',
    category: 'Analytical Geometry',
    definition: 'The ratio of the change in $y$ to the change in $x$ between any two distinct points on the line.',
    formula: 'm = \\frac{y_2 - y_1}{x_2 - x_1}',
    keyPoints: [
      'If line is parallel to $x$-axis, $m = 0$',
      'If line is perpendicular to $x$-axis, $m$ is undefined'
    ],
    example: 'For points $(2, 3)$ and $(6, 11)$, $m = \\frac{11 - 3}{6 - 2} = \\frac{8}{4} = 2$.'
  },
  {
    id: 'def-c9-u16-6',
    class: 9,
    chapterId: 'c9-ch16',
    chapterName: 'Analytical Geometry',
    term: 'Equation of a Straight Line',
    category: 'Analytical Geometry',
    definition: 'An algebraic relation in $x$ and $y$ satisfied by the coordinates of every point lying on that particular straight line.',
    formula: 'y - y_1 = m(x - x_1), \\quad y = mx + c, \\quad ax + by + c = 0',
    keyPoints: [
      'Slope-intercept form: $y = mx + c$',
      'Point-slope form: $y - y_1 = m(x - x_1)$',
      'Two-point form: $\\frac{y - y_1}{y_2 - y_1} = \\frac{x - x_1}{x_2 - x_1}$'
    ],
    example: 'Line with slope $m = 3$ passing through $(0, 2)$ has equation $y = 3x + 2$.'
  },
  {
    id: 'def-c9-u16-7',
    class: 9,
    chapterId: 'c9-ch16',
    chapterName: 'Analytical Geometry',
    term: 'Distance Between Two Points',
    category: 'Analytical Geometry',
    definition: 'For points $A(x_1, y_1)$ and $B(x_2, y_2)$, the straight-line Euclidean distance is given by the distance formula.',
    formula: 'AB = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}',
    keyPoints: ['Distance is non-negative ($AB \\ge 0$)', '$AB = 0 \\iff A = B$'],
    example: 'Distance between $(0, 0)$ and $(3, 4)$ is $\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.'
  },
  {
    id: 'def-c9-u16-8',
    class: 9,
    chapterId: 'c9-ch16',
    chapterName: 'Analytical Geometry',
    term: 'Midpoint of a Line Segment',
    category: 'Analytical Geometry',
    definition: 'For endpoints $A(x_1, y_1)$ and $B(x_2, y_2)$, the coordinates of the midpoint $M$ dividing the segment into two equal parts are given by the midpoint formula.',
    formula: 'M = \\left(\\frac{x_1 + x_2}{2}, \\; \\frac{y_1 + y_2}{2}\\right)',
    keyPoints: ['Special case of internal section formula with ratio $1:1$'],
    example: 'Midpoint of $(3, -2)$ and $(7, 6)$ is $\\left(\\frac{3+7}{2}, \\frac{-2+6}{2}\\right) = (5, 2)$.'
  }
];
