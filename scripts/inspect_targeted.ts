import * as fs from 'fs';

const issues = JSON.parse(fs.readFileSync('./scripts/issues_to_fix.json', 'utf8'));

const targetTypes = ['INCOMPLETE_EQUATION', 'UNFINISHED_MIN_MAX', 'UNFINISHED_TRIG_STEP', 'UNFINISHED_TRIG_RATIO', 'FACTUAL_TYPO'];
const targeted = issues.filter((i: any) => targetTypes.includes(i.type));

console.log(`Targeted issues count: ${targeted.length}`);
console.log('List of all targeted:');
targeted.forEach((item: any, idx: number) => {
  console.log(`[${idx+1}] ID: ${item.id} | File: ${item.file} | Type: ${item.type}`);
  console.log(`     Q: ${item.question}`);
  console.log(`     Ans: ${item.correct_answer} -> ${item.correct_opt}`);
  console.log(`     Old Exp: ${item.current_exp}`);
});
