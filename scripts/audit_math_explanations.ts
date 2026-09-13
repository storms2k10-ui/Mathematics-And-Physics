import { ALL_QUESTIONS } from '../src/data/questionsData';

const mathQuestions = ALL_QUESTIONS.filter(q => 
  (q.subject?.toLowerCase().includes("math") || !q.subject) &&
  [9, 10, 11, 12].includes(Number(q.class))
);

console.log(`Auditing ${mathQuestions.length} math questions...`);

interface AuditResult {
  id: string;
  class: number;
  chapter?: string;
  category: string;
  issue: string;
  question: string;
  correct_answer: string;
  correct_opt: string;
  explanation: string;
}

const results: AuditResult[] = [];

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

  // Category 1: Truncated intermediate equations ending with "= [number]" or "gives [var] = [number]" but correct option is different
  // e.g. "leaving 2x=10." when correct answer is 5.
  // "giving 3x=6." when correct answer is 2.
  // "giving a^2=16." when correct answer is 4.
  const eqEndMatch = exp.match(/(?:leaving|giving|gives|gives that|is|means|when|where|so|equals)\s*\$?([a-zA-Z0-9\^_\+\-\*/\(\)]+)\s*=\s*(-?\d+(?:\/\d+)?)\$?\s*\.?$/i);
  if (eqEndMatch) {
    const leftSide = eqEndMatch[1].trim();
    const rightSide = eqEndMatch[2].trim();
    const cleanOpt = correctOpt.replace(/[\$\s]/g, '');
    if (cleanOpt !== rightSide && !exp.includes(correctOpt)) {
      results.push({
        id: q.id,
        class: Number(q.class),
        chapter: q.chapter,
        category: 'INCOMPLETE_EQUATION_STEP',
        issue: `Explanation ends at intermediate equation '${leftSide} = ${rightSide}', does not conclude to answer '${correctOpt}'`,
        question: q.question,
        correct_answer: correctKey,
        correct_opt: correctOpt,
        explanation: exp
      });
    }
  }

  // Category 2: Typo numbers in explanation (like n+1=16 when question has 12)
  const qNums = (q.question.match(/\b\d+\b/g) || []).map(Number);
  if (q.id === 'c11-ch7-adv-q143' && /n\+1=16/.test(exp)) {
    results.push({
      id: q.id,
      class: Number(q.class),
      chapter: q.chapter,
      category: 'FACTUAL_TYPO',
      issue: 'Mismatched number in explanation',
      question: q.question,
      correct_answer: correctKey,
      correct_opt: correctOpt,
      explanation: exp
    });
  }

  // Category 3: Very short explanation (< 20 chars) that lacks mathematical derivation
  if (exp.length < 25 && !exp.includes('Definition') && !exp.includes('formula') && !exp.includes('Identity')) {
    results.push({
      id: q.id,
      class: Number(q.class),
      chapter: q.chapter,
      category: 'TOO_BRIEF',
      issue: `Explanation is only ${exp.length} chars and lacks step-by-step mathematical reasoning`,
      question: q.question,
      correct_answer: correctKey,
      correct_opt: correctOpt,
      explanation: exp
    });
  }

  // Category 4: Explanation mentions wrong quantity or amplitude without concluding min/max
  if (/amplitude is.*=\s*\d+/i.test(exp) && /minimum/i.test(q.question) && !exp.includes('-')) {
    results.push({
      id: q.id,
      class: Number(q.class),
      chapter: q.chapter,
      category: 'UNFINISHED_MIN_MAX',
      issue: 'States amplitude but does not complete minimum value calculation (negative amplitude)',
      question: q.question,
      correct_answer: correctKey,
      correct_opt: correctOpt,
      explanation: exp
    });
  }

  // Category 5: "Squaring gives ... = 1" when question asks for sin x cos x
  if (/Squaring gives.*=\s*\d+/i.test(exp) && /\\sin\s*x\s*\\cos\s*x/i.test(q.question) && !/\\sin\s*x\s*\\cos\s*x\s*=/i.test(exp)) {
    results.push({
      id: q.id,
      class: Number(q.class),
      chapter: q.chapter,
      category: 'UNFINISHED_TRIG_STEP',
      issue: 'Squares identity but does not solve for sin(x)cos(x)',
      question: q.question,
      correct_answer: correctKey,
      correct_opt: correctOpt,
      explanation: exp
    });
  }

  // Category 6: Geometric/trig explanation ending at side/hypotenuse but not finding the requested ratio
  if (/(?:adjacent|opposite|hypotenuse)\s*(?:is|=)\s*\d+/i.test(exp) && !exp.includes(correctOpt)) {
    results.push({
      id: q.id,
      class: Number(q.class),
      chapter: q.chapter,
      category: 'UNFINISHED_TRIG_RATIO',
      issue: 'Finds triangle side but does not state the final trigonometric ratio',
      question: q.question,
      correct_answer: correctKey,
      correct_opt: correctOpt,
      explanation: exp
    });
  }

  // Category 7: "Set sin x = 1" or "Put x = 0" without computing value
  if (/^(?:Set|Put)\s+[a-zA-Z0-9\\]+\s*=\s*\d+\.?$/i.test(exp)) {
    results.push({
      id: q.id,
      class: Number(q.class),
      chapter: q.chapter,
      category: 'UNFINISHED_EVALUATION',
      issue: 'Only says Put/Set variable without computing result',
      question: q.question,
      correct_answer: correctKey,
      correct_opt: correctOpt,
      explanation: exp
    });
  }
});

console.log(`Found ${results.length} items needing improvement across categories:`);
const cats: Record<string, number> = {};
results.forEach(r => cats[r.category] = (cats[r.category] || 0) + 1);
console.log('Categories:', cats);

console.log('\nSample items:');
console.log(JSON.stringify(results.slice(0, 30), null, 2));
