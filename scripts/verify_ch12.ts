import { MathService } from '../src/services/mathService';
import { EL_PHY12_CH12_QUESTIONS } from '../src/data/el_phy12_chapter12_data';
import katex from 'katex';

async function main() {
  console.log(`EL_PHY12_CH12_QUESTIONS length: ${EL_PHY12_CH12_QUESTIONS.length}`);
  
  if (EL_PHY12_CH12_QUESTIONS.length !== 200) {
    throw new Error(`Expected 200 questions, got ${EL_PHY12_CH12_QUESTIONS.length}`);
  }

  const counts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  for (const q of EL_PHY12_CH12_QUESTIONS) {
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
    if (!q.formula) {
      throw new Error(`Question ${q.id} missing formula!`);
    }
  }
  console.log('Answer distribution in raw data:', counts);

  const normalQuestions = await MathService.getQuestionsByChapter('el-phy12-ch12', 'all', 'Elementary Physics', 'Normal');
  console.log(`MathService normal questions count: ${normalQuestions.length}`);

  const normalCounts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  for (const q of normalQuestions) {
    if (q.correct_answer) normalCounts[q.correct_answer]++;
  }
  console.log('MathService normal answer distribution:', normalCounts);

  const advancedQuestions = await MathService.getQuestionsByChapter('el-phy12-ch12', 'all', 'Elementary Physics', 'Advanced');
  console.log(`MathService advanced questions count: ${advancedQuestions.length}`);

  const normalCountByService = MathService.getQuestionCountByDifficulty(12, 'el-phy12-ch12', 'Normal', 'Elementary Physics');
  console.log(`MathService getQuestionCountByDifficulty (Normal): ${normalCountByService}`);

  const advancedCountByService = MathService.getQuestionCountByDifficulty(12, 'el-phy12-ch12', 'Advanced', 'Elementary Physics');
  console.log(`MathService getQuestionCountByDifficulty (Advanced): ${advancedCountByService}`);

  // Test KaTeX on all fields
  let mathSegmentsCount = 0;
  const regex = /\$(.*?)\$/g;
  for (const q of normalQuestions) {
    const fields = [q.question, q.option_a, q.option_b, q.option_c, q.option_d, q.explanation];
    for (const fld of fields) {
      if (!fld) continue;
      let m;
      regex.lastIndex = 0;
      while ((m = regex.exec(fld)) !== null) {
        mathSegmentsCount++;
        try {
          katex.renderToString(m[1], { throwOnError: true });
        } catch (e) {
          console.error(`KaTeX error in question ${q.id}: "${m[1]}"`);
          throw e;
        }
      }
    }
    // Test formula field
    if (q.formula) {
      try {
        katex.renderToString(q.formula, { throwOnError: true });
        mathSegmentsCount++;
      } catch (e) {
        console.error(`KaTeX error in formula for ${q.id}: "${q.formula}"`);
        throw e;
      }
    }
  }
  console.log(`KaTeX successfully verified ${mathSegmentsCount} mathematical segments & formulas.`);

  if (
    normalQuestions.length === 200 &&
    advancedQuestions.length === 0 &&
    normalCountByService === 200 &&
    advancedCountByService === 0 &&
    counts['A'] === 50 &&
    counts['B'] === 50 &&
    counts['C'] === 50 &&
    counts['D'] === 50
  ) {
    console.log('🎉 CHAPTER 12 (ATOMIC PHYSICS) VERIFICATION PASSED PERFECTLY!');
  } else {
    throw new Error('Verification failed: Counts or answer balance do not match expected numbers.');
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
