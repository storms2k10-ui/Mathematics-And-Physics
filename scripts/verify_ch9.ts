import { MathService } from '../src/services/mathService';
import { EL_PHY12_CH9_QUESTIONS } from '../src/data/el_phy12_chapter9_data';
import katex from 'katex';

async function main() {
  console.log(`EL_PHY12_CH9_QUESTIONS length: ${EL_PHY12_CH9_QUESTIONS.length}`);
  
  const counts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  for (const q of EL_PHY12_CH9_QUESTIONS) {
    if (q.correct_answer) counts[q.correct_answer]++;
    if (!q.question || !q.option_a || !q.option_b || !q.option_c || !q.option_d) {
      throw new Error(`Question ${q.id} missing text or options!`);
    }
    if (!q.explanation) {
      throw new Error(`Question ${q.id} missing explanation!`);
    }
    if (q.correct_answer !== q.correct_option) {
      throw new Error(`Question ${q.id} correct_answer !== correct_option!`);
    }
  }
  console.log('Answer distribution in raw data:', counts);

  const normalQuestions = await MathService.getQuestionsByChapter('el-phy12-ch9', 'all', 'Elementary Physics', 'Normal');
  console.log(`MathService normal questions count: ${normalQuestions.length}`);

  const normalCounts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  for (const q of normalQuestions) {
    if (q.correct_answer) normalCounts[q.correct_answer]++;
  }
  console.log('MathService normal answer distribution:', normalCounts);

  const advancedQuestions = await MathService.getQuestionsByChapter('el-phy12-ch9', 'all', 'Elementary Physics', 'Advanced');
  console.log(`MathService advanced questions count: ${advancedQuestions.length}`);

  const normalCountByService = MathService.getQuestionCountByDifficulty(12, 'el-phy12-ch9', 'Normal', 'Elementary Physics');
  console.log(`MathService getQuestionCountByDifficulty (Normal): ${normalCountByService}`);

  const advancedCountByService = MathService.getQuestionCountByDifficulty(12, 'el-phy12-ch9', 'Advanced', 'Elementary Physics');
  console.log(`MathService getQuestionCountByDifficulty (Advanced): ${advancedCountByService}`);

  // Test KaTeX
  let mathSegmentsCount = 0;
  const regex = /\$(.*?)\$/g;
  for (const q of normalQuestions) {
    const fields = [q.question, q.option_a, q.option_b, q.option_c, q.option_d, q.explanation];
    if (q.formula) fields.push(q.formula);
    for (const fld of fields) {
      if (!fld) continue;
      let m;
      while ((m = regex.exec(fld)) !== null) {
        mathSegmentsCount++;
        katex.renderToString(m[1], { throwOnError: true });
      }
    }
  }
  console.log(`KaTeX successfully verified ${mathSegmentsCount} mathematical segments.`);

  if (
    normalQuestions.length === 200 &&
    advancedQuestions.length === 0 &&
    normalCountByService === 200 &&
    advancedCountByService === 0
  ) {
    console.log('🎉 CHAPTER 9 VERIFICATION PASSED PERFECTLY!');
  } else {
    throw new Error('Verification failed: Counts do not match expected numbers.');
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
