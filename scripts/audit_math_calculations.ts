import { ALL_QUESTIONS } from '../src/data/questionsData';

const mathQuestions = ALL_QUESTIONS.filter(q => 
  (q.subject?.toLowerCase().includes("math") || !q.subject) &&
  [9, 10, 11, 12].includes(Number(q.class))
);

console.log(`Auditing mathematical calculations across ${mathQuestions.length} questions...`);

const mathDiscrepancies: any[] = [];

mathQuestions.forEach(q => {
  const opts: Record<string, string> = q.options || {
    A: q.option_a || '',
    B: q.option_b || '',
    C: q.option_c || '',
    D: q.option_d || ''
  };
  const correctKey = (q.correct_answer || '').toUpperCase().trim();
  const correctOpt = (opts[correctKey] || '').trim();
  const exp = (q.explanation || '').trim();

  // Test 1: Sum and product of roots: ax^2 + bx + c = 0
  // e.g., "sum of roots of 3x^2 - 5x + 7 = 0"
  const quadMatch = q.question.match(/([+-]?\s*\d*)\s*x\^2\s*([+-]\s*\d*)\s*x\s*([+-]\s*\d+)\s*=\s*0/);
  if (quadMatch) {
    let aStr = quadMatch[1].replace(/\s+/g, '');
    let bStr = quadMatch[2].replace(/\s+/g, '');
    let cStr = quadMatch[3].replace(/\s+/g, '');
    let a = aStr === '' || aStr === '+' ? 1 : aStr === '-' ? -1 : parseInt(aStr, 10);
    let b = bStr === '+' ? 1 : bStr === '-' ? -1 : parseInt(bStr, 10);
    let c = parseInt(cStr, 10);

    const disc = b * b - 4 * a * c;
    const sumRoots = -b / a;
    const prodRoots = c / a;

    if (/discriminant/i.test(q.question) && !/formula/i.test(q.question)) {
      const discStr = `${disc}`;
      if (!correctOpt.includes(discStr) && !exp.includes(discStr)) {
        mathDiscrepancies.push({
          id: q.id,
          class: q.class,
          type: 'DISCRIMINANT_MISMATCH',
          calculated: disc,
          correct_answer: correctKey,
          correctOpt,
          exp,
          q: q.question
        });
      }
    }
  }

  // Test 2: Factorials: n! = ...
  const factMatch = q.question.match(/(\d+)\s*!\s*=\s*(\d+)/);
  if (factMatch) {
    const n = parseInt(factMatch[1], 10);
    const expected = [1, 1, 2, 6, 24, 120, 720, 5040, 40320][n];
    const stated = parseInt(factMatch[2], 10);
    if (expected !== undefined && stated !== expected) {
      mathDiscrepancies.push({
        id: q.id,
        class: q.class,
        type: 'FACTORIAL_ERROR',
        expected,
        stated,
        q: q.question
      });
    }
  }

  // Test 3: Binomial coefficients: \binom{n}{k}
  const binomMatch = exp.match(/\\binom\{(\d+)\}\{(\d+)\}\s*=\s*(\d+)/);
  if (binomMatch) {
    const n = parseInt(binomMatch[1], 10);
    const k = parseInt(binomMatch[2], 10);
    const stated = parseInt(binomMatch[3], 10);
    function nCr(n: number, r: number): number {
      if (r < 0 || r > n) return 0;
      let res = 1;
      for (let i = 1; i <= r; i++) {
        res = (res * (n - i + 1)) / i;
      }
      return Math.round(res);
    }
    const actual = nCr(n, k);
    if (actual !== stated) {
      mathDiscrepancies.push({
        id: q.id,
        class: q.class,
        type: 'BINOMIAL_CALCULATION_ERROR',
        formula: `binom(${n}, ${k})`,
        stated,
        actual,
        exp,
        q: q.question
      });
    }
  }

  // Test 4: Matrix 2x2 determinant: \begin{bmatrix} a & b \\ c & d \end{bmatrix}
  const matMatch = q.question.match(/begin\{[bBpvV]?matrix\}\s*(-?\d+)\s*&\s*(-?\d+)\s*\\\\\s*(-?\d+)\s*&\s*(-?\d+)\s*\\end/);
  if (matMatch && (/determinant/i.test(q.question) || /singular/i.test(q.question))) {
    const a = parseInt(matMatch[1], 10);
    const b = parseInt(matMatch[2], 10);
    const c = parseInt(matMatch[3], 10);
    const d = parseInt(matMatch[4], 10);
    const det = a * d - b * c;
    if (/singular/i.test(correctOpt) && det !== 0) {
      mathDiscrepancies.push({
        id: q.id,
        class: q.class,
        type: 'SINGULAR_MATRIX_ERROR',
        matrix: [[a,b],[c,d]],
        det,
        correctOpt,
        q: q.question
      });
    }
  }

  // Test 5: Check if explanation has obvious wrong arithmetic: e.g. "X + Y = Z" where X+Y != Z
  const arithMatches = [...exp.matchAll(/(-?\d+)\s*([+\-*/])\s*(-?\d+)\s*=\s*(-?\d+)/g)];
  for (const am of arithMatches) {
    const num1 = parseInt(am[1], 10);
    const op = am[2];
    const num2 = parseInt(am[3], 10);
    const res = parseInt(am[4], 10);
    let expected: number | null = null;
    if (op === '+') expected = num1 + num2;
    if (op === '-') expected = num1 - num2;
    if (op === '*') expected = num1 * num2;
    if (op === '/' && num2 !== 0 && num1 % num2 === 0) expected = num1 / num2;

    if (expected !== null && expected !== res && Math.abs(num1) < 10000 && Math.abs(num2) < 10000) {
      // make sure it wasn't modulo or base-2 or something
      if (!/mod|base|binary/i.test(exp)) {
        mathDiscrepancies.push({
          id: q.id,
          class: q.class,
          type: 'ARITHMETIC_ERROR',
          stated: `${num1} ${op} ${num2} = ${res}`,
          expected: `${num1} ${op} ${num2} = ${expected}`,
          exp,
          q: q.question
        });
      }
    }
  }
});

console.log(`Found ${mathDiscrepancies.length} mathematical discrepancies:`);
console.log(JSON.stringify(mathDiscrepancies, null, 2));
