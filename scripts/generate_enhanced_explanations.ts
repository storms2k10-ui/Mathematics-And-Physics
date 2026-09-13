import * as fs from 'fs';

export interface BriefItem {
  id: string;
  file: string;
  chapter: string;
  question: string;
  options: Record<string, string>;
  correct_answer: string;
  correct_opt: string;
  current_exp: string;
  formula?: string;
}

function toMath(s: string): string {
  s = (s || '').trim();
  if (s.startsWith('$') && s.endsWith('$')) return s;
  return `$${s}$`;
}

function unMath(s: string): string {
  s = (s || '').trim();
  if (s.startsWith('$') && s.endsWith('$')) return s.slice(1, -1);
  return s;
}

export function enhanceExplanation(item: BriefItem): string {
  const { question: q, current_exp: exp, correct_opt: rawAns, chapter: ch } = item;
  const ans = toMath(rawAns);
  const bareAns = unMath(rawAns);
  let cleanExp = exp.trim().replace(/\.$/, '');

  // 1. Complex numbers expansions like (1+i)^2, (1-i)^2, (2+i)^2
  if (/[0-9]*i.*?\^2|\^2.*?=[0-9]*i/i.test(q) || /\(1[+-]i\)\^2/i.test(q)) {
    return `Expanding using the algebraic identity $(a \\pm b)^2 = a^2 \\pm 2ab + b^2$ with $i^2 = -1$: ${cleanExp}. Thus the value is ${ans}.`;
  }

  // 2. Complex modulus properties: |zw| = |z||w|, |z^n| = |z|^n, |z-w| <= |z| + |w|
  if (/\|zw\|/i.test(q)) {
    return `By the modulus multiplication property for complex numbers, $|zw| = |z||w|$. Substituting the given values: ${cleanExp}. Hence $|zw| = ${bareAns}$.`;
  }
  if (/\|z\^[0-9]+\|/i.test(q)) {
    return `Using the complex power modulus property $|z^n| = |z|^n$: ${cleanExp}. Thus the value is ${ans}.`;
  }
  if (/maximum.*\|z\s*-\s*w\|/i.test(q) || /\|z\s*-\s*w\|\s*\\le/i.test(exp)) {
    return `By the triangle inequality, $|z - w| \\le |z| + |-w| = |z| + |w|$. Substituting the moduli yields ${cleanExp}. Thus the maximum possible value is ${ans}.`;
  }
  if (/Re\(z\)\)\^2.*Im\(z\)\)\^2/i.test(q) || /a\^2\+b\^2\s*=\s*\|z\|\^2/i.test(exp)) {
    return `For a complex number $z = a + bi$, the real part is $\\operatorname{Re}(z) = a$ and imaginary part is $\\operatorname{Im}(z) = b$. Therefore, $(\\operatorname{Re}(z))^2 + (\\operatorname{Im}(z))^2 = a^2 + b^2 = |z|^2$.`;
  }
  if (/multiplicative inverse of/i.test(q)) {
    return `The multiplicative inverse $z^{-1}$ of a complex number $z$ satisfies $z \\cdot z^{-1} = 1$. Since ${cleanExp.replace(/^since\s*/i, '')}, the inverse is ${ans}.`;
  }
  if (/\\frac\{z\}\{\\bar\{z\}\}/i.test(q) || /\\frac\{\\bar\{z\}\}\{z\}/i.test(q)) {
    return `Multiplying numerator and denominator by the conjugate of the denominator: ${cleanExp}. Thus the value is ${ans}.`;
  }
  if (/solutions of \$z\^2\s*=\s*1\$/i.test(q)) {
    return `Factoring the difference of squares: $z^2 - 1 = (z - 1)(z + 1) = 0 \\implies z = \\pm 1$.`;
  }
  if (/product of the roots of/i.test(q)) {
    return `By Vieta's formulas, for any quadratic equation $ax^2 + bx + c = 0$, the product of the roots is given by $\\frac{c}{a}$: ${cleanExp}.`;
  }
  if (/sum of the roots of/i.test(q)) {
    return `By Vieta's formulas, for a quadratic equation $ax^2 + bx + c = 0$, the sum of the roots is given by $-\\frac{b}{a}$: ${cleanExp}.`;
  }
  if (/x\+iy\s*=\s*\([0-9+-i]+\)\^2/i.test(q) || /\\frac\{x\+iy\}/i.test(q)) {
    return `Simplifying the complex expression into standard rectangular form $a + bi$: ${cleanExp}. Equating real and imaginary components yields $(x, y) = ${ans}$.`;
  }

  // 3. Matrix properties
  if (/additive identity for.*matri/i.test(q)) {
    return `By matrix algebra properties, adding the zero (null) matrix $O$ of matching dimensions to any matrix $A$ satisfies $A + O = O + A = A$. Therefore, the null matrix is the additive identity.`;
  }
  if (/additive inverse of/i.test(q)) {
    return `By definition, the additive inverse of matrix $A$ is the matrix $-A$ such that $A + (-A) = O$, where $O$ is the null matrix.`;
  }
  if (/multiplicative identity for.*matri/i.test(q)) {
    return `For any square matrix $A$ of order $n$, multiplying by the identity matrix $I$ satisfies $A I = I A = A$. Hence the identity matrix $I$ is the multiplicative identity.`;
  }
  if (/A\s*\+\s*A\^t\s+is/i.test(q)) {
    return `A square matrix $M$ is symmetric if $M^t = M$. Taking transpose: $(A + A^t)^t = A^t + (A^t)^t = A^t + A = A + A^t$. Hence $A + A^t$ is symmetric.`;
  }
  if (/A\s*-\s*A\^t\s+is/i.test(q)) {
    return `A square matrix $M$ is skew-symmetric if $M^t = -M$. Taking transpose: $(A - A^t)^t = A^t - (A^t)^t = A^t - A = -(A - A^t)$. Hence $A - A^t$ is skew-symmetric.`;
  }
  if (/Evaluate.*\\begin\{vmatrix\}/i.test(q) || /determinant/i.test(q)) {
    return `Evaluating the $2 \\times 2$ determinant using $\\begin{vmatrix}a&b\\\\c&d\\end{vmatrix} = ad - bc$: ${cleanExp}. Thus the determinant is ${ans}.`;
  }

  // 4. Vector relations
  if (/parallel to/i.test(q)) {
    return `Two vectors are parallel if and only if their corresponding components are proportional: ${cleanExp}. Therefore, the required value is ${ans}.`;
  }
  if (/Evaluate.*\\cdot/i.test(q) || /dot product/i.test(q)) {
    return `The scalar (dot) product is computed by summing the products of corresponding components: ${cleanExp}. Hence the dot product is ${ans}.`;
  }

  // 5. AP and GP sequences
  if (/consecutive terms of an A\.?P\.?/i.test(q)) {
    return `In an arithmetic progression, the difference between consecutive terms is constant: $a_n - a_{n-1} = a_{n+1} - a_n \\implies 2a_n = a_{n-1} + a_{n+1}$. Therefore, $a_n$ is the arithmetic mean of the adjacent terms.`;
  }
  if (/recurrence relation for the factorial/i.test(q)) {
    return `By the recursive definition of the factorial function, $n! = n \\times (n-1)!$, which corresponds to the recurrence relation $a_n = n a_{n-1}$ with initial condition $a_0 = 1$.`;
  }
  if (/\$n\$th term of/i.test(q) && /arithmetic|A\.?P\.?/i.test(q + ' ' + ch)) {
    return `Using the $n$-th term formula for an arithmetic progression $a_n = a + (n - 1)d$: ${cleanExp}. Thus the $n$-th term is ${ans}.`;
  }
  if (/\$n\$th term of/i.test(q) && /geometric|G\.?P\.?/i.test(q + ' ' + ch)) {
    return `Using the $n$-th term formula for a geometric progression $a_n = a r^{n-1}$: ${cleanExp}. Thus the $n$-th term is ${ans}.`;
  }
  if (/common difference/i.test(q)) {
    return `In an arithmetic progression, the common difference $d$ is the difference between any term and its predecessor: ${cleanExp}. Thus $d = ${ans}$.`;
  }
  if (/common ratio/i.test(q)) {
    return `In a geometric progression, the common ratio $r$ is the quotient of any term and its predecessor: ${cleanExp}. Thus $r = ${ans}$.`;
  }

  // 6. Summation of standard series
  if (/\\sum_\{k=1\}\^\{[0-9]+\}\s*k\b/.test(q)) {
    return `Using the formula for the sum of the first $n$ natural numbers $\\sum_{k=1}^n k = \\frac{n(n+1)}{2}$, evaluating gives ${cleanExp}.`;
  }
  if (/\\sum_\{k=1\}\^\{[0-9]+\}\s*k\^2/.test(q)) {
    return `Using the formula for the sum of the squares of the first $n$ natural numbers $\\sum_{k=1}^n k^2 = \\frac{n(n+1)(2n+1)}{6}$, evaluating gives ${cleanExp}.`;
  }
  if (/\\sum_\{k=1\}\^\{[0-9]+\}\s*k\^3/.test(q)) {
    return `Using the formula for the sum of the cubes of the first $n$ natural numbers $\\sum_{k=1}^n k^3 = \\left[\\frac{n(n+1)}{2}\\right]^2$, evaluating gives ${cleanExp}.`;
  }

  // 7. Factorials & Combinatorics
  if (/\$0!\$/i.test(q)) {
    return `By mathematical convention and the definition of the empty product / Gamma function $\\Gamma(1) = 0!$, we have $0! = 1$.`;
  }
  if (/\$[0-9]+!\$/i.test(q)) {
    return `Evaluating the factorial product $n! = n \\times (n-1) \\times \\cdots \\times 1$: ${cleanExp}.`;
  }
  if (/P_[0-9]+/i.test(q)) {
    return `Using the permutation formula ${"{}^n P_r"} = \\frac{n!}{(n-r)!}$, calculating gives ${cleanExp}.`;
  }
  if (/C_[0-9]+/i.test(q) || /\\binom/i.test(q) || /inom[0-9]/i.test(exp)) {
    return `Using the combination formula ${"{}^n C_r"} = \\binom{n}{r} = \\frac{n!}{r!(n-r)!}$, calculating gives ${cleanExp.replace(/inom(\d)(\d)/, '\\binom{$1}{$2}')}.`;
  }
  if (/divisible by\s*([0-9]+)/i.test(q)) {
    return `By modular arithmetic or mathematical induction: ${cleanExp}. Hence the expression is divisible by ${ans}.`;
  }

  // 8. Functions and Graphs
  if (/if\s*\$f\(x\)=.*then\s*\$f\([0-9-]+\)/i.test(q)) {
    return `Substituting the value of the independent variable into the function definition: ${cleanExp}.`;
  }
  if (/\(f\+g\)\(x\)/i.test(q)) {
    return `By the definition of function addition, $(f+g)(x) = f(x) + g(x)$: ${cleanExp}.`;
  }
  if (/\(fg\)\(x\)/i.test(q)) {
    return `By the definition of function multiplication, $(fg)(x) = f(x) \\cdot g(x)$: ${cleanExp}.`;
  }

  // 9. Linear Inequalities & Programming
  if (/\$x\$-intercept of/i.test(q)) {
    return `Setting $y = 0$ in the line equation yields ${cleanExp}, which gives $x$-intercept ${ans}.`;
  }
  if (/\$y\$-intercept of/i.test(q)) {
    return `Setting $x = 0$ in the line equation yields ${cleanExp}, which gives $y$-intercept ${ans}.`;
  }
  if (/solution of.*[<>\le\ge]/i.test(q)) {
    return `Solving the linear inequality algebraically: ${cleanExp}. Thus the solution set is ${ans}.`;
  }
  if (/satisfy.*[<>\le\ge]/i.test(q)) {
    return `Substituting the coordinates of the test point into the inequality: ${cleanExp}, confirming that the condition is satisfied (${ans}).`;
  }

  // 10. Trigonometric Identities
  if (/\\sin\(-\\theta\)/i.test(q)) {
    return `By the symmetry properties of trigonometric functions on the Cartesian circle, sine is an odd function satisfying $\\sin(-\\theta) = -\\sin\\theta$.`;
  }
  if (/\\cos\(-\\theta\)/i.test(q)) {
    return `By the symmetry properties of trigonometric functions, cosine is an even function satisfying $\\cos(-\\theta) = \\cos\\theta$.`;
  }
  if (/\\tan\(-\\theta\)/i.test(q)) {
    return `By the symmetry properties of trigonometric functions, tangent is an odd function satisfying $\\tan(-\\theta) = -\\tan\\theta$.`;
  }
  if (/period of/i.test(q)) {
    return `The fundamental period of a sinusoidal function $f(x) = A\\cos(kx + \\phi)$ or $A\\sin(kx + \\phi)$ is $T = \\frac{2\\pi}{|k|}$. Here $k$ gives period ${ans}.`;
  }
  if (/amplitude of/i.test(q)) {
    return `For a linear combination of the form $a\\sin x + b\\cos x$, the amplitude is $R = \\sqrt{a^2 + b^2}$, which yields ${ans}.`;
  }
  if (/range of/i.test(q)) {
    return `Determining the extrema: the maximum and minimum values bound the range as ${cleanExp}, giving range ${ans}.`;
  }
  if (/maximum value of/i.test(q) && /\\sin|\\cos/i.test(q)) {
    return `Since $-1 \\le \\sin x, \\cos x \\le 1$, the maximum occurs at $+1$: ${cleanExp}. Thus the maximum value is ${ans}.`;
  }
  if (/minimum value of/i.test(q) && /\\sin|\\cos/i.test(q)) {
    return `Since $-1 \\le \\sin x, \\cos x \\le 1$, the minimum occurs at $-1$: ${cleanExp}. Thus the minimum value is ${ans}.`;
  }
  if (/phase shift/i.test(q)) {
    return `Writing the trigonometric argument in the standard form $k(x - c)$: ${cleanExp}. The phase shift is $c = ${ans}$.`;
  }

  // 11. Application of Trigonometry
  if (/shadow|pole|elevation|tower/i.test(q)) {
    return `Using right-triangle trigonometry $\\tan\\theta = \\frac{\\text{opposite}}{\\text{adjacent}}$: ${cleanExp}. Hence the required length is ${ans}.`;
  }
  if (/A=90|right-angled|hypotenuse/i.test(q)) {
    return `Applying the Pythagorean theorem $a^2 + b^2 = c^2$: ${cleanExp}. Thus the side length is ${ans}.`;
  }
  if (/semiperimeter/i.test(q)) {
    return `The semiperimeter $s$ of a triangle with side lengths $a, b, c$ is $s = \\frac{a+b+c}{2}$: ${cleanExp}.`;
  }

  // 12. Induction base cases
  if (/base case|true at \$n=1\$/i.test(q)) {
    return `Verifying the base step for the principle of mathematical induction at $n = 1$: ${cleanExp}, confirming the base case holds.`;
  }

  // Default fallback: wrap existing expression in structured mathematical prose
  if (cleanExp.startsWith('$') && cleanExp.endsWith('$')) {
    return `Evaluating the mathematical expression step-by-step: ${cleanExp}, which yields ${ans}.`;
  }

  return `Applying the relevant mathematical principles and simplifying: ${cleanExp}. Therefore, the correct answer is ${ans}.`;
}

if (process.argv[1]?.endsWith('generate_enhanced_explanations.ts')) {
  const items: BriefItem[] = JSON.parse(fs.readFileSync('./scripts/c11_brief_detailed.json', 'utf8'));
  console.log(`Total brief items: ${items.length}`);
  const dict: Record<string, string> = {};
  items.forEach(i => {
    dict[i.id] = enhanceExplanation(i);
  });
  fs.writeFileSync('./scripts/enhanced_c11_map.json', JSON.stringify(dict, null, 2));
  console.log('Saved enhanced map to scripts/enhanced_c11_map.json');
}
