import * as fs from 'fs';
import * as path from 'path';
import { ALL_QUESTIONS } from '../src/data/questionsData';

interface IssueItem {
  id: string;
  class: number;
  chapter?: string;
  file?: string;
  type: string;
  question: string;
  correct_answer: string;
  correct_opt: string;
  current_exp: string;
  suggested_exp?: string;
}

// Map each question ID to its file in src/data
const dataDir = path.join(process.cwd(), 'src/data');
const allDataFiles = fs.readdirSync(dataDir).filter(f => f.endsWith('.ts'));

const qToFile: Record<string, string> = {};
for (const file of allDataFiles) {
  const content = fs.readFileSync(path.join(dataDir, file), 'utf8');
  const idMatches = [...content.matchAll(/id:\s*['"]([^'"]+)['"]/g)];
  for (const m of idMatches) {
    qToFile[m[1]] = file;
  }
}

console.log(`Mapped ${Object.keys(qToFile).length} questions to source files.`);

const mathQuestions = ALL_QUESTIONS.filter(q => 
  (q.subject?.toLowerCase().includes("math") || !q.subject) &&
  [9, 10, 11, 12].includes(Number(q.class))
);

const issues: IssueItem[] = [];

mathQuestions.forEach(q => {
  const file = qToFile[q.id];
  const opts: Record<string, string> = q.options || {
    A: q.option_a || '',
    B: q.option_b || '',
    C: q.option_c || '',
    D: q.option_d || ''
  };
  const correctKey = (q.correct_answer || '').toUpperCase().trim();
  const correctOpt = (opts[correctKey] || '').trim();
  const exp = (q.explanation || '').trim();

  // Check 1: Incomplete equation step
  const eqEndMatch = exp.match(/(?:leaving|giving|gives|gives that|is|means|when|where|so|equals)\s*\$?([a-zA-Z0-9\^_\+\-\*/\(\)]+)\s*=\s*(-?\d+(?:\/\d+)?)\$?\s*\.?$/i);
  if (eqEndMatch) {
    const rightSide = eqEndMatch[2].trim();
    const cleanOpt = correctOpt.replace(/[\$\s]/g, '');
    if (cleanOpt !== rightSide && !exp.includes(correctOpt)) {
      issues.push({
        id: q.id,
        class: Number(q.class),
        chapter: q.chapter,
        file,
        type: 'INCOMPLETE_EQUATION',
        question: q.question,
        correct_answer: correctKey,
        correct_opt: correctOpt,
        current_exp: exp
      });
      return;
    }
  }

  // Check 2: Unfinished min/max or amplitude
  if (/amplitude is.*=\s*\d+/i.test(exp) && /minimum/i.test(q.question) && !exp.includes('-')) {
    issues.push({
      id: q.id,
      class: Number(q.class),
      chapter: q.chapter,
      file,
      type: 'UNFINISHED_MIN_MAX',
      question: q.question,
      correct_answer: correctKey,
      correct_opt: correctOpt,
      current_exp: exp
    });
    return;
  }

  // Check 3: Unfinished trig step
  if (/Squaring gives.*=\s*\d+/i.test(exp) && /\\sin\s*x\s*\\cos\s*x/i.test(q.question) && !/\\sin\s*x\s*\\cos\s*x\s*=/i.test(exp)) {
    issues.push({
      id: q.id,
      class: Number(q.class),
      chapter: q.chapter,
      file,
      type: 'UNFINISHED_TRIG_STEP',
      question: q.question,
      correct_answer: correctKey,
      correct_opt: correctOpt,
      current_exp: exp
    });
    return;
  }

  // Check 4: Unfinished trig ratio
  if (/(?:adjacent|opposite|hypotenuse)\s*(?:is|=)\s*\d+/i.test(exp) && !exp.includes(correctOpt)) {
    issues.push({
      id: q.id,
      class: Number(q.class),
      chapter: q.chapter,
      file,
      type: 'UNFINISHED_TRIG_RATIO',
      question: q.question,
      correct_answer: correctKey,
      correct_opt: correctOpt,
      current_exp: exp
    });
    return;
  }

  // Check 5: Factual typo in explanation
  if (q.id === 'c11-ch7-adv-q143' && /n\+1=16/.test(exp)) {
    issues.push({
      id: q.id,
      class: Number(q.class),
      chapter: q.chapter,
      file,
      type: 'FACTUAL_TYPO',
      question: q.question,
      correct_answer: correctKey,
      correct_opt: correctOpt,
      current_exp: exp
    });
    return;
  }

  // Check 6: Broken left/right delimiters (missing preceding backslash)
  if (/(?<!\\)(?:left\[|right\]|left\(|right\)|left\\\{|right\\\})/.test(exp)) {
    issues.push({
      id: q.id,
      class: Number(q.class),
      chapter: q.chapter,
      file,
      type: 'BROKEN_DELIM',
      question: q.question,
      correct_answer: correctKey,
      correct_opt: correctOpt,
      current_exp: exp
    });
    return;
  }

  // Check 7: Too brief (< 25 chars) and lacks step-by-step mathematical reasoning
  if (exp.length < 25 && !exp.includes('Definition') && !exp.includes('formula') && !exp.includes('Identity')) {
    issues.push({
      id: q.id,
      class: Number(q.class),
      chapter: q.chapter,
      file,
      type: 'TOO_BRIEF',
      question: q.question,
      correct_answer: correctKey,
      correct_opt: correctOpt,
      current_exp: exp
    });
    return;
  }
});

console.log(`Total issues identified: ${issues.length}`);

// Breakdown by class and type
const summary: Record<string, Record<string, number>> = {};
issues.forEach(i => {
  const cKey = `Class ${i.class}`;
  if (!summary[cKey]) summary[cKey] = {};
  summary[cKey][i.type] = (summary[cKey][i.type] || 0) + 1;
});
console.log('Breakdown:', JSON.stringify(summary, null, 2));

// Save issues to a json file for precise review and updating
fs.writeFileSync(path.join(process.cwd(), 'scripts/issues_to_fix.json'), JSON.stringify(issues, null, 2));
console.log('Saved to scripts/issues_to_fix.json');
