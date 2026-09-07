import fs from 'fs';
import katex from 'katex';
import { KATEX_CONFIG } from './src/components/MathDisplay';

const raw = fs.readFileSync('parsed_questions.json', 'utf-8');
const questions = JSON.parse(raw);

let mathCount = 0;
let errors = 0;

for (const q of questions) {
  const fields = [q.question, q.A, q.B, q.C, q.D, q.explanation];
  for (const f of fields) {
    if (!f) continue;
    const regex = /\$([^$]+)\$/g;
    let m;
    while ((m = regex.exec(f)) !== null) {
      mathCount++;
      try {
        katex.renderToString(m[1], { ...KATEX_CONFIG, throwOnError: true });
      } catch (err: any) {
        console.error(`KaTeX error in Q${q.num} on snippet: "${m[1]}" -> ${err.message}`);
        errors++;
      }
    }
  }
}

console.log(`Checked ${mathCount} math expressions across 200 questions. Errors: ${errors}`);
