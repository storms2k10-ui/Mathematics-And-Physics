import { MathService } from '../src/services/mathService';
import { EL_PHY12_CH6_QUESTIONS } from '../src/data/el_phy12_chapter6_data';

async function main() {
  console.log(`EL_PHY12_CH6_QUESTIONS length: ${EL_PHY12_CH6_QUESTIONS.length}`);
  
  const counts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  for (const q of EL_PHY12_CH6_QUESTIONS) {
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

  const normalQuestions = await MathService.getQuestionsByChapter('el-phy12-ch6', 'all', 'Elementary Physics', 'Normal');
  console.log(`MathService normal questions count: ${normalQuestions.length}`);

  const normalCounts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  for (const q of normalQuestions) {
    if (q.correct_answer) normalCounts[q.correct_answer]++;
  }
  console.log('MathService normal answer distribution:', normalCounts);

  const advancedQuestions = await MathService.getQuestionsByChapter('el-phy12-ch6', 'all', 'Elementary Physics', 'Advanced');
  console.log(`MathService advanced questions count: ${advancedQuestions.length}`);

  const normalCountByService = MathService.getQuestionCountByDifficulty(12, 'el-phy12-ch6', 'Normal', 'Elementary Physics');
  console.log(`MathService getQuestionCountByDifficulty (Normal): ${normalCountByService}`);

  const advancedCountByService = MathService.getQuestionCountByDifficulty(12, 'el-phy12-ch6', 'Advanced', 'Elementary Physics');
  console.log(`MathService getQuestionCountByDifficulty (Advanced): ${advancedCountByService}`);

  if (
    normalQuestions.length === 200 &&
    normalCounts.A === 50 &&
    normalCounts.B === 50 &&
    normalCounts.C === 50 &&
    normalCounts.D === 50 &&
    advancedQuestions.length === 0
  ) {
    console.log('✅ ALL CHAPTER 6 CHECKS PASSED PERFECTLY!');
  } else {
    console.error('❌ VALIDATION FAILED!');
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
