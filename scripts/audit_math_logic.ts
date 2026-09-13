import { ALL_QUESTIONS } from '../src/data/questionsData';

const mathQuestions = ALL_QUESTIONS.filter(q => 
  (q.subject?.toLowerCase().includes("math") || !q.subject) &&
  [9, 10, 11, 12].includes(Number(q.class))
);

console.log(`Deep auditing math logic on ${mathQuestions.length} questions...`);

const logicIssues: any[] = [];

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
  const question = q.question.trim();

  // Test: Slope formula m = (y2 - y1) / (x2 - x1)
  const slopeMatch = question.match(/slope of.*line.*(?:joining|through|passing).*\((\s*-?\d+\s*),\s*(\s*-?\d+\s*)\).*(?:and|to).*\((\s*-?\d+\s*),\s*(\s*-?\d+\s*)\)/i);
  if (slopeMatch) {
    const x1 = parseInt(slopeMatch[1]);
    const y1 = parseInt(slopeMatch[2]);
    const x2 = parseInt(slopeMatch[3]);
    const y2 = parseInt(slopeMatch[4]);
    if (x2 !== x1) {
      const slope = (y2 - y1) / (x2 - x1);
      // check if slope appears in correctOpt or exp
      const slopeStr = `${slope}`;
      const fracStr = `${y2-y1}/${x2-x1}`;
      if (!correctOpt.includes(slopeStr) && !exp.includes(slopeStr) && !exp.includes(fracStr)) {
        logicIssues.push({
          id: q.id,
          class: q.class,
          type: 'SLOPE_CHECK',
          points: [[x1, y1], [x2, y2]],
          slope,
          correctOpt,
          exp,
          q: question
        });
      }
    }
  }

  // Test: Midpoint formula ((x1+x2)/2, (y1+y2)/2)
  const midMatch = question.match(/midpoint.*(?:joining|between|of).*\((\s*-?\d+\s*),\s*(\s*-?\d+\s*)\).*(?:and|to).*\((\s*-?\d+\s*),\s*(\s*-?\d+\s*)\)/i);
  if (midMatch) {
    const x1 = parseInt(midMatch[1]);
    const y1 = parseInt(midMatch[2]);
    const x2 = parseInt(midMatch[3]);
    const y2 = parseInt(midMatch[4]);
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2;
    const midStr = `(${mx}, ${my})`;
    const midStrNoSpace = `(${mx},${my})`;
    if (!correctOpt.includes(midStr) && !correctOpt.includes(midStrNoSpace) && !exp.includes(midStr) && !exp.includes(midStrNoSpace)) {
      logicIssues.push({
        id: q.id,
        class: q.class,
        type: 'MIDPOINT_CHECK',
        points: [[x1, y1], [x2, y2]],
        midpoint: [mx, my],
        correctOpt,
        exp,
        q: question
      });
    }
  }

  // Test: Distance formula sqrt((x2-x1)^2 + (y2-y1)^2)
  const distMatch = question.match(/distance.*(?:between|from).*\((\s*-?\d+\s*),\s*(\s*-?\d+\s*)\).*(?:and|to).*\((\s*-?\d+\s*),\s*(\s*-?\d+\s*)\)/i);
  if (distMatch) {
    const x1 = parseInt(distMatch[1]);
    const y1 = parseInt(distMatch[2]);
    const x2 = parseInt(distMatch[3]);
    const y2 = parseInt(distMatch[4]);
    const distSq = (x2 - x1) ** 2 + (y2 - y1) ** 2;
    const dist = Math.sqrt(distSq);
    const distStr = `${dist}`;
    const sqrtStr = `\\sqrt{${distSq}}`;
    if (!correctOpt.includes(distStr) && !correctOpt.includes(sqrtStr) && !exp.includes(distStr) && !exp.includes(sqrtStr)) {
      logicIssues.push({
        id: q.id,
        class: q.class,
        type: 'DISTANCE_CHECK',
        points: [[x1, y1], [x2, y2]],
        distSq,
        dist,
        correctOpt,
        exp,
        q: question
      });
    }
  }

  // Test: Arithmetic Progression nth term a_n = a + (n-1)d
  const apMatch = question.match(/(?:AP|arithmetic progression).*(\d+)(?:st|nd|rd|th)\s+term.*(?:is|=)?\s*(-?\d+).*(?:and|while)\s+(\d+)(?:st|nd|rd|th)\s+term.*(?:is|=)?\s*(-?\d+)/i);
  if (apMatch) {
    const n1 = parseInt(apMatch[1]);
    const v1 = parseInt(apMatch[2]);
    const n2 = parseInt(apMatch[3]);
    const v2 = parseInt(apMatch[4]);
    const d = (v2 - v1) / (n2 - n1);
    const a = v1 - (n1 - 1) * d;
    // if question asks for common difference d
    if (/common difference/i.test(question) || /find\s+d\b/i.test(question)) {
      if (!correctOpt.includes(`${d}`) && !exp.includes(`${d}`)) {
        logicIssues.push({
          id: q.id,
          class: q.class,
          type: 'AP_D_CHECK',
          calculated_d: d,
          correctOpt,
          exp,
          q: question
        });
      }
    }
  }

  // Test: Quadratic roots product c/a and sum -b/a
  const quadSumMatch = question.match(/sum.*roots.*([+-]?\s*\d*)\s*x\^2\s*([+-]\s*\d*)\s*x\s*([+-]\s*\d+)\s*=\s*0/i);
  if (quadSumMatch) {
    let aStr = quadSumMatch[1].replace(/\s+/g, '');
    let bStr = quadSumMatch[2].replace(/\s+/g, '');
    let a = aStr === '' || aStr === '+' ? 1 : aStr === '-' ? -1 : parseInt(aStr, 10);
    let b = bStr === '+' ? 1 : bStr === '-' ? -1 : parseInt(bStr, 10);
    const sum = -b / a;
    const sumFrac = `${-b}/${a}`;
    if (!correctOpt.includes(`${sum}`) && !correctOpt.includes(sumFrac) && !exp.includes(`${sum}`) && !exp.includes(sumFrac)) {
      logicIssues.push({
        id: q.id,
        class: q.class,
        type: 'QUAD_SUM_CHECK',
        calculated_sum: sum,
        correctOpt,
        exp,
        q: question
      });
    }
  }
});

console.log(`Audit found ${logicIssues.length} logic issues:`);
console.log(JSON.stringify(logicIssues, null, 2));
