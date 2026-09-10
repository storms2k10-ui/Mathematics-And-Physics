import fs from 'fs';
import path from 'path';
import katex from 'katex';
import { Question } from '../src/types';

interface RawQuestion {
  qnum: number;
  question: string;
  opt_a: string;
  opt_b: string;
  opt_c: string;
  opt_d: string;
  answer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
}

const rawQuestions: RawQuestion[] = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), 'scripts/raw_ch14_questions.json'), 'utf-8')
);

/**
 * Clean and standardize LaTeX in text.
 */
function standardizeMath(text: string): string {
  if (!text) return '';

  let t = text;

  // Standardize unicode minus
  t = t.replace(/−/g, '-');

  // Convert powers of 10: 10^-39, 10^-7, 10^-2, 10^39, etc.
  t = t.replace(/10\^(-?\d+)/g, '$$10^{$1}$$');

  // Fix double dollar if already wrapped
  t = t.replace(/\$\$10\^\{(-?\d+)\}\$\$/g, '$$10^{$1}$$');

  // Fractional charges: +2/3 e, -2/3 e, +1/3 e, -1/3 e, +4/3 e
  t = t.replace(/\+2\/3\s*e\b/g, '$$+\\frac{2}{3}e$$');
  t = t.replace(/-2\/3\s*e\b/g, '$$-\\frac{2}{3}e$$');
  t = t.replace(/\+1\/3\s*e\b/g, '$$+\\frac{1}{3}e$$');
  t = t.replace(/-1\/3\s*e\b/g, '$$-\\frac{1}{3}e$$');
  t = t.replace(/\+4\/3\s*e\b/g, '$$+\\frac{4}{3}e$$');
  t = t.replace(/\+1\s*e\b/g, '$$+1e$$');
  t = t.replace(/-1\s*e\b/g, '$$-1e$$');
  t = t.replace(/\+2\s*e\b/g, '$$+2e$$');
  t = t.replace(/-2\s*e\b/g, '$$-2e$$');
  t = t.replace(/\b1\s*e\b/g, '$$1e$$');

  // Fractions like 1/2 and 3/2 in spin contexts
  t = t.replace(/\bspin\s+1\/2\b/gi, 'spin $\\frac{1}{2}$');
  t = t.replace(/\bspin\s+3\/2\b/gi, 'spin $\\frac{3}{2}$');
  t = t.replace(/\b1\/2\s+and\s+3\/2\b/g, '$\\frac{1}{2}$ and $\\frac{3}{2}$');

  // Energies: 0.511 MeV, 931 MeV, 80.91 GeV, 1 GeV
  t = t.replace(/\b0\.511\s*MeV\b/g, '$0.511\\text{ MeV}$');
  t = t.replace(/\b931\s*MeV\b/g, '$931\\text{ MeV}$');
  t = t.replace(/\b1\s*GeV\b/g, '$1\\text{ GeV}$');
  t = t.replace(/\b80\.91\s*GeV\b/g, '$80.91\\text{ GeV}$');

  // Weak bosons: W+, W-, W/Z, Z
  t = t.replace(/\bW\+,\s*W-\s*and\s*Z\s*bosons\b/gi, '$W^+$, $W^-$ and $Z$ bosons');
  t = t.replace(/\bW\+\s*boson\b/g, '$W^+$ boson');
  t = t.replace(/\bW-\s*boson\b/g, '$W^-$ boson');
  t = t.replace(/\bW\+\b/g, '$W^+$');
  t = t.replace(/\bW-\b/g, '$W^-$');
  t = t.replace(/\bW\/Z\s*bosons\b/g, '$W/Z$ bosons');
  t = t.replace(/\bW\/Z\b/g, '$W/Z$');

  // Quark transitions: d -> u, u -> d, udd -> uud, uud -> udd
  t = t.replace(/\bd\s*->\s*u\b/g, '$d \\to u$');
  t = t.replace(/\bu\s*->\s*d\b/g, '$u \\to d$');
  t = t.replace(/\bd\s*→\s*u\b/g, '$d \\to u$');
  t = t.replace(/\bu\s*→\s*d\b/g, '$u \\to d$');
  t = t.replace(/\budd\s*->\s*uud\b/g, '$udd \\to uud$');
  t = t.replace(/\buud\s*->\s*udd\b/g, '$uud \\to udd$');
  t = t.replace(/\budd\s*→\s*uud\b/g, '$udd \\to uud$');
  t = t.replace(/\buud\s*→\s*udd\b/g, '$uud \\to udd$');

  // Calculations in explanations:
  // e.g. +2/3 + 2/3 - 1/3 = +1
  t = t.replace(/\+2\/3\s*\+\s*2\/3\s*-\s*1\/3\s*=\s*\+1/g, '$$+\\frac{2}{3} + \\frac{2}{3} - \\frac{1}{3} = +1$$');
  t = t.replace(/\+2\/3\s*-\s*1\/3\s*-\s*1\/3\s*=\s*0/g, '$$+\\frac{2}{3} - \\frac{1}{3} - \\frac{1}{3} = 0$$');
  t = t.replace(/\+2\/3\s*\+\s*1\/3\s*=\s*\+1/g, '$$+\\frac{2}{3} + \\frac{1}{3} = +1$$');
  t = t.replace(/-1\/3\s*-\s*2\/3\s*=\s*-1/g, '$$-\\frac{1}{3} - \\frac{2}{3} = -1$$');
  t = t.replace(/-1\/3\s*\+\s*1\/3\s*=\s*0/g, '$$-\\frac{1}{3} + \\frac{1}{3} = 0$$');
  t = t.replace(/\(\+2\/3\)\s*-\s*\(-1\/3\)\s*=\s*\+1/g, '$$\\left(+\\frac{2}{3}\\right) - \\left(-\\frac{1}{3}\\right) = +1$$');
  t = t.replace(/-1\/3\s*-\s*2\/3\s*=\s*-1/g, '$$-\\frac{1}{3} - \\frac{2}{3} = -1$$');
  t = t.replace(/3\(\+2\/3\s*e\)\s*=\s*\+2\s*e/g, '$$3\\left(+\\frac{2}{3}e\\right) = +2e$$');
  t = t.replace(/3\(-1\/3\s*e\)\s*=\s*-1\s*e/g, '$$3\\left(-\\frac{1}{3}e\\right) = -1e$$');
  t = t.replace(/3\s*×\s*\(\+2\/3\)\s*=\s*\+2\s*e/g, '$$3 \\times \\left(+\\frac{2}{3}\\right) = +2e$$');
  t = t.replace(/3\s*×\s*\(-1\/3\)\s*=\s*-1\s*e/g, '$$3 \\times \\left(-\\frac{1}{3}\\right) = -1e$$');
  t = t.replace(/1\/\(10\^\{-?2\}\)\s*=\s*10\^2\s*=\s*100/g, '$$\\frac{1}{10^{-2}} = 10^2 = 100$$');
  t = t.replace(/10\^\{-?2\}\s*\/\s*10\^\{-?7\}\s*=\s*10\^5/g, '$$\\frac{10^{-2}}{10^{-7}} = 10^5$$');
  t = t.replace(/10\^\{-?7\}\s*\/\s*10\^\{-?39\}\s*=\s*10\^\{?32\}?/g, '$$\\frac{10^{-7}}{10^{-39}} = 10^{32}$$');
  t = t.replace(/1\/\(10\^\{-?39\}\)\s*=\s*10\^\{?39\}?/g, '$$\\frac{1}{10^{-39}} = 10^{39}$$');
  t = t.replace(/1\/\(10\^\{-?7\}\)\s*=\s*10\^7/g, '$$\\frac{1}{10^{-7}} = 10^7$$');
  t = t.replace(/10\^\{-?2\}\s*\/\s*10\^\{-?39\}\s*=\s*10\^\{?37\}?/g, '$$\\frac{10^{-2}}{10^{-39}} = 10^{37}$$');
  t = t.replace(/1\/10\^\{-?7\}\s*=\s*10\^7/g, '$$\\frac{1}{10^{-7}} = 10^7$$');
  t = t.replace(/1\/10\^\{-?2\}\s*=\s*10\^2/g, '$$\\frac{1}{10^{-2}} = 10^2$$');
  t = t.replace(/\(-2\)\s*-\s*\(-39\)\s*=\s*37/g, '$$(-2) - (-39) = 37$$');

  // Fractions like 6/3 = 2 and 6/2 = 3
  t = t.replace(/\b6\/3\s*=\s*2\b/g, '$\\frac{6}{3} = 2$');
  t = t.replace(/\b6\/2\s*=\s*3\b/g, '$\\frac{6}{2} = 3$');

  // Comparisons: Strong > electromagnetic > weak > gravity
  if (t.includes(' > ') && (t.toLowerCase().includes('strong') || t.toLowerCase().includes('gravity'))) {
    // Format if it's an option or question comparing forces
    t = t.replace(/Gravity > weak > electromagnetic > strong/gi, 'Gravity $>$ Weak $>$ Electromagnetic $>$ Strong');
    t = t.replace(/Electromagnetic > strong > gravity > weak/gi, 'Electromagnetic $>$ Strong $>$ Gravity $>$ Weak');
    t = t.replace(/Strong > weak > gravity > electromagnetic/gi, 'Strong $>$ Weak $>$ Gravity $>$ Electromagnetic');
    t = t.replace(/Strong > electromagnetic > weak > gravity/gi, 'Strong $>$ Electromagnetic $>$ Weak $>$ Gravity');
    t = t.replace(/Gravity > strong > weak > electromagnetic/gi, 'Gravity $>$ Strong $>$ Weak $>$ Electromagnetic');
    t = t.replace(/Weak > strong > electromagnetic > gravity/gi, 'Weak $>$ Strong $>$ Electromagnetic $>$ Gravity');
    t = t.replace(/Electromagnetic > strong > weak > gravity/gi, 'Electromagnetic $>$ Strong $>$ Weak $>$ Gravity');
  }

  // Clean up any repeated $$
  t = t.replace(/\$\$\$/g, '$$');

  return t;
}

function getFormulaForQuestion(qnum: number, text: string): string {
  const t = text.toLowerCase();
  if (t.includes('proton') && (t.includes('quark') || t.includes('uud') || t.includes('charge'))) {
    return 'p = uud \\implies Q = +\\frac{2}{3}e + \\frac{2}{3}e - \\frac{1}{3}e = +1e';
  }
  if (t.includes('neutron') && (t.includes('quark') || t.includes('udd') || t.includes('charge'))) {
    return 'n = udd \\implies Q = +\\frac{2}{3}e - \\frac{1}{3}e - \\frac{1}{3}e = 0';
  }
  if (t.includes('beta-minus') || t.includes('beta minus') || (t.includes('down quark') && t.includes('up quark'))) {
    return 'd \\to u + W^-, \\quad W^- \\to e^- + \\bar{\\nu}_e';
  }
  if (t.includes('beta-plus') || t.includes('beta plus') || (t.includes('up quark') && t.includes('down quark'))) {
    return 'u \\to d + W^+, \\quad W^+ \\to e^+ + \\nu_e';
  }
  if (t.includes('relative strength') || t.includes('strongest') || t.includes('weakest') || t.includes('four fundamental forces') || t.includes('orders of magnitude')) {
    return 'F_{\\text{strong}} : F_{\\text{em}} : F_{\\text{weak}} : F_{\\text{grav}} \\approx 1 : 10^{-2} : 10^{-7} : 10^{-39}';
  }
  if (t.includes('baryon') && !t.includes('meson')) {
    return '\\text{Baryon} = q_1 q_2 q_3, \\quad B = +1, \\quad \\text{Spin} = \\frac{1}{2}, \\frac{3}{2}';
  }
  if (t.includes('meson')) {
    return '\\text{Meson} = q\\bar{q}, \\quad B = 0, \\quad \\text{Spin} = 0, 1';
  }
  if (t.includes('cloud chamber') || t.includes('wilson')) {
    return '\\text{Supersaturated Vapor} \\xrightarrow{\\text{Ions}} \\text{Visible Droplet Tracks}';
  }
  if (t.includes('geiger') || t.includes('gm') || t.includes('plateau') || t.includes('threshold') || t.includes('discharge')) {
    return 'V_{\\text{threshold}} < V_{\\text{plateau}} < V_{\\text{continuous discharge}}';
  }
  if (t.includes('lepton') || t.includes('generation')) {
    return '\\begin{pmatrix} e^- \\\\ \\nu_e \\end{pmatrix}, \\quad \\begin{pmatrix} \\mu^- \\\\ \\nu_\\mu \\end{pmatrix}, \\quad \\begin{pmatrix} \\tau^- \\\\ \\nu_\\tau \\end{pmatrix}';
  }
  if (t.includes('color charge') || t.includes('confinement') || t.includes('gluon')) {
    return 'q_{\\text{color}} \\in \\{\\text{red}, \\text{green}, \\text{blue}\\}, \\quad \\text{Hadrons: Color-Neutral}';
  }
  if (t.includes('spin') || t.includes('fermion') || t.includes('boson')) {
    return 's = n + \\frac{1}{2} \\implies \\text{Fermion}, \\quad s = n \\implies \\text{Boson}';
  }
  if (t.includes('up quark') || t.includes('down quark') || t.includes('charge')) {
    return 'q_u = +\\frac{2}{3}e, \\quad q_d = -\\frac{1}{3}e, \\quad q_{\\bar{u}} = -\\frac{2}{3}e, \\quad q_{\\bar{d}} = +\\frac{1}{3}e';
  }
  return 'q_u = +\\frac{2}{3}e, \\quad q_d = -\\frac{1}{3}e, \\quad p = uud, \\quad n = udd';
}

function getDifficulty(qnum: number): 'Easy' | 'Medium' | 'Hard' {
  if (qnum <= 50) return 'Easy';
  if (qnum <= 130) return (qnum % 2 === 0) ? 'Medium' : 'Easy';
  return (qnum % 3 === 0) ? 'Hard' : 'Medium';
}

async function main() {
  const questions: Question[] = [];

  for (const raw of rawQuestions) {
    let qtext = standardizeMath(raw.question);
    let opt_a = standardizeMath(raw.opt_a);
    let opt_b = standardizeMath(raw.opt_b);
    let opt_c = standardizeMath(raw.opt_c);
    let opt_d = standardizeMath(raw.opt_d);
    let exp = standardizeMath(raw.explanation);
    const formula = getFormulaForQuestion(raw.qnum, raw.question + ' ' + raw.explanation);

    // Verify all math segments with KaTeX
    const fields = [qtext, opt_a, opt_b, opt_c, opt_d, exp];
    const regex = /\$(.*?)\$/g;
    for (const f of fields) {
      let m;
      regex.lastIndex = 0;
      while ((m = regex.exec(f)) !== null) {
        const mathContent = m[1];
        try {
          katex.renderToString(mathContent, { throwOnError: true });
        } catch (err: any) {
          console.error(`KaTeX error in Question ${raw.qnum} field "${f}": math "${mathContent}"`);
          throw err;
        }
      }
    }

    // Verify formula with KaTeX
    try {
      katex.renderToString(formula, { throwOnError: true });
    } catch (err: any) {
      console.error(`KaTeX error in Question ${raw.qnum} formula "${formula}"`);
      throw err;
    }

    const questionObj: Question = {
      id: `el-phy12-ch14-q${raw.qnum}`,
      class: 12,
      subject: 'Physics',
      chapter_id: 'el-phy12-ch14',
      chapter: 'Chapter 14 — Particle Physics',
      question: qtext,
      options: {
        A: opt_a,
        B: opt_b,
        C: opt_c,
        D: opt_d,
      },
      option_a: opt_a,
      option_b: opt_b,
      option_c: opt_c,
      option_d: opt_d,
      correct_answer: raw.answer,
      correct_option: raw.answer,
      explanation: exp,
      difficulty: getDifficulty(raw.qnum),
      difficulty_tier: 'Normal',
      formula,
    };

    questions.push(questionObj);
  }

  console.log(`Successfully prepared and validated ${questions.length} questions.`);

  const content = `import { Question } from '../types';

// ============================================================================
// ⚛️ ELEMENTARY PHYSICS CLASS 12 — CHAPTER 14: PARTICLE PHYSICS (200 MCQs)
// Difficulty: Normal
// Standard Model Concepts & Classifications:
// Matter particles: Fermions (spin 1/2, 3/2, ...) -> Quarks & Leptons (3 generations)
// Hadrons: Baryons (3 quarks, B=1, half-integer spin) & Mesons (quark-antiquark pair, B=0, integer spin)
// Forces & Gauge Bosons: Strong (Gluon), Electromagnetic (Photon), Weak (W+, W-, Z0), Gravity (Graviton)
// Relative Strengths: Strong (1), Electromagnetic (10^-2), Weak (10^-7), Gravitational (10^-39)
// Detectors: Wilson Cloud Chamber (tracking, supersaturated vapor) & Geiger-Muller Counter (pulse counting)
// ============================================================================

export const EL_PHY12_CH14_QUESTIONS: Question[] = ${JSON.stringify(questions, null, 2)};
`;

  fs.writeFileSync(
    path.join(process.cwd(), 'src/data/el_phy12_chapter14_data.ts'),
    content,
    'utf-8'
  );

  console.log('Saved to src/data/el_phy12_chapter14_data.ts');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
