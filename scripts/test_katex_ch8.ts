import katex from 'katex';
import { EL_PHY12_CH8_QUESTIONS } from '../src/data/el_phy12_chapter8_data';

function extractMath(text: string): string[] {
  const matches: string[] = [];
  const regex = /\$(.*?)\$/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    matches.push(match[1]);
  }
  return matches;
}

let totalMath = 0;
let errors = 0;

for (const q of EL_PHY12_CH8_QUESTIONS) {
  const fields = [q.question, q.option_a, q.option_b, q.option_c, q.option_d, q.explanation];
  if (q.formula) fields.push(q.formula);
  for (const field of fields) {
    if (!field) continue;
    const mathSegments = extractMath(field);
    for (const math of mathSegments) {
      totalMath++;
      try {
        katex.renderToString(math, { throwOnError: true });
      } catch (err: any) {
        console.error(`KaTeX error in question ${q.id}: "${math}" -> ${err.message}`);
        errors++;
      }
    }
  }
}

console.log(`Tested ${totalMath} math segments with KaTeX. Total errors: ${errors}`);
if (errors > 0) {
  process.exit(1);
} else {
  console.log('✅ All KaTeX math expressions in Chapter 8 rendered cleanly without any errors!');
}
