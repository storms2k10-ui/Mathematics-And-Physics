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
  fs.readFileSync(path.join(process.cwd(), 'scripts/raw_ch13_questions.json'), 'utf-8')
);

/**
 * Clean and standardize LaTeX in text.
 * Replaces \( ... \) with $ ... $
 * Fixes units, element symbols, powers, fractions for KaTeX.
 */
function standardizeMath(text: string): string {
  if (!text) return '';

  let t = text;

  // Convert \( ... \) to $ ... $
  t = t.replace(/\\\((.*?)\\\)/g, (_, math) => `$${math.trim()}$`);

  // Convert elements like {}^{238}_{92}U or {}^{A}_{Z}X or {}^{14}_{6}C or {}^{226}_{88}Ra
  t = t.replace(/\${}\^\{([0-9A-Za-z+-]+)\}_\{([0-9A-Za-z+-]+)\}([A-Za-z]+)\$/g, '${}^{$1}_{$2}\\text{$3}$');
  t = t.replace(/\${}\^\{([0-9A-Za-z+-]+)\}([A-Za-z]+)\$/g, '${}^{$1}\\text{$2}$');

  // Fix nuclear symbols inside math: e.g. {}^{238}_{92}U -> {}^{238}_{92}\text{U}
  t = t.replace(/{}\^{([0-9A-Za-z+-]+)}_{([0-9A-Za-z+-]+)}([A-Za-z]+)/g, '{}^{$1}_{$2}\\text{$3}');
  t = t.replace(/{}\^{([0-9A-Za-z+-]+)}([A-Za-z]+)/g, '{}^{$1}\\text{$2}');

  // Replace \times with \times
  // Standardize units inside math:
  t = t.replace(/(\d+)\s*MeV/gi, '$1\\text{ MeV}');
  t = t.replace(/(\d+)\s*eV/gi, '$1\\text{ eV}');
  t = t.replace(/(\d+)\s*keV/gi, '$1\\text{ keV}');
  t = t.replace(/(\d+)\s*Bq/gi, '$1\\text{ Bq}');

  // Standardize text fractions: 1/2 -> \frac{1}{2}, etc. if in math
  t = t.replace(/\$1\/2\$/g, '$\\frac{1}{2}$');
  t = t.replace(/\$1\/4\$/g, '$\\frac{1}{4}$');
  t = t.replace(/\$1\/8\$/g, '$\\frac{1}{8}$');
  t = t.replace(/\$1\/16\$/g, '$\\frac{1}{16}$');
  t = t.replace(/\$1\/32\$/g, '$\\frac{1}{32}$');
  t = t.replace(/\$3\/4\$/g, '$\\frac{3}{4}$');
  t = t.replace(/\$1\/6\$/g, '$\\frac{1}{6}$');

  // Fix \text{day}^{-1} or s^{-1}
  t = t.replace(/\$s\^{-1}\$/g, '$\\text{s}^{-1}$');
  t = t.replace(/\$kg s\^{-1}\$/g, '$\\text{kg}\\cdot\\text{s}^{-1}$');
  t = t.replace(/\$([0-9.]+)\\,s\^{-1}\$/g, '$$$1\\text{ s}^{-1}$$');
  t = t.replace(/\\,s\^{-1}/g, '\\text{ s}^{-1}');
  t = t.replace(/s\^{-1}/g, '\\text{s}^{-1}');

  // Fix \lambda=...
  t = t.replace(/\$\\lambda=([0-9.]+)\\,\\text\{day\}\^{-1}\$/g, '$\\lambda = $1\\text{ day}^{-1}$');
  t = t.replace(/\$\\lambda=([0-9.]+)\\text\{ s\}\^{-1}\$/g, '$\\lambda = $1\\text{ s}^{-1}$');

  // Fix scientific notation inside math: e.g. 1.6\times10^{-19} J -> 1.6 \times 10^{-19}\text{ J}
  t = t.replace(/\\times10\^/g, ' \\times 10^');
  t = t.replace(/\$([0-9.eE+-]+)\s*\\times\s*10\^\{([^{}]+)\}\s*J\$/g, '$$$1 \\times 10^{$2}\\text{ J}$$');
  t = t.replace(/\$([0-9.eE+-]+)\s*\\times\s*10\^([0-9-]+)\s*J\$/g, '$$$1 \\times 10^{$2}\\text{ J}$$');

  // Fix 1\,eV -> 1\text{ eV}
  t = t.replace(/1\\,eV/g, '1\\text{ eV}');
  t = t.replace(/1\\,MeV/g, '1\\text{ MeV}');
  t = t.replace(/1\\,u/g, '1\\text{ u}');
  t = t.replace(/0\.020\\,u/g, '0.020\\text{ u}');
  t = t.replace(/0\.03\\,u/g, '0.03\\text{ u}');
  t = t.replace(/0\.005\\,u/g, '0.005\\text{ u}');
  t = t.replace(/0\.001\\,kg/g, '0.001\\text{ kg}');
  t = t.replace(/2\\,u/g, '2\\text{ u}');
  t = t.replace(/3\\,MeV/g, '3\\text{ MeV}');
  t = t.replace(/1\\,V/g, '1\\text{ V}');

  // Fix \alpha,\beta,\gamma -> \alpha, \beta, \gamma
  t = t.replace(/\\alpha,\\beta,\\gamma/g, '\\alpha, \\beta, \\gamma');
  t = t.replace(/\\alpha<\\beta<\\gamma/g, '\\alpha < \\beta < \\gamma');

  // Fix \beta^- -> \beta^-
  // Fix arrows \to
  t = t.replace(/\\rightarrow/g, '\\to');

  // Specific text cleanups:
  t = t.replace(/\$1\\,\\text\{Bq\}=1\\\$ decay s\$\^{-1}\$/g, '$1\\text{ Bq} = 1\\text{ decay}\\cdot\\text{s}^{-1}$');
  t = t.replace(/\$1\\,\\text\{Bq\}=1\$/g, '$1\\text{ Bq} = 1\\text{ decay}\\cdot\\text{s}^{-1}$');

  return t;
}

function getFormulaForQuestion(qnum: number, text: string): string {
  const t = text.toLowerCase();
  if (t.includes('half-life') || t.includes('half life') || t.includes('decay constant') || t.includes('\\lambda') || t.includes('t_{1/2}')) {
    if (t.includes('fraction') || t.includes('remaining') || t.includes('percent')) {
      return 'N(t) = N_0 \\left(\\frac{1}{2}\\right)^n, \\quad n = \\frac{t}{T_{1/2}}';
    }
    return 'T_{1/2} = \\frac{\\ln 2}{\\lambda} \\approx \\frac{0.693}{\\lambda}, \\quad N(t) = N_0 e^{-\\lambda t}';
  }
  if (t.includes('activity') || t.includes('bq') || t.includes('becquerel') || t.includes('geiger') || t.includes('counts/min')) {
    return 'R = \\lambda N = R_0 e^{-\\lambda t}, \\quad 1\\text{ Bq} = 1\\text{ decay/s}';
  }
  if (t.includes('alpha decay') || t.includes('alpha particle') || t.includes('\\alpha')) {
    return '{}^{A}_{Z}\\text{X} \\to {}^{A-4}_{Z-2}\\text{Y} + {}^{4}_{2}\\text{He}';
  }
  if (t.includes('beta') || t.includes('\\beta')) {
    return 'n \\to p + e^- + \\bar{\\nu}_e, \\quad {}^{A}_{Z}\\text{X} \\to {}^{A}_{Z+1}\\text{Y} + e^-';
  }
  if (t.includes('gamma') || t.includes('\\gamma')) {
    return '{}^{A}_{Z}\\text{X}^* \\to {}^{A}_{Z}\\text{X} + \\gamma, \\quad \\Delta A = 0, \\; \\Delta Z = 0';
  }
  if (t.includes('binding energy per nucleon') || t.includes('be/a')) {
    return '\\frac{E_b}{A} = \\frac{\\Delta m \\cdot c^2}{A}, \\quad 1\\text{ u} \\approx 931.5\\text{ MeV}';
  }
  if (t.includes('binding energy') || t.includes('mass defect') || t.includes('e=mc') || t.includes('\\delta m')) {
    return 'E_b = \\Delta m \\cdot c^2, \\quad \\Delta m = [Z m_p + (A-Z)m_n] - M_{\\text{nucleus}}';
  }
  if (t.includes('fission') || t.includes('chain reaction') || t.includes('control rod') || t.includes('moderator') || t.includes('critical')) {
    return '{}^{235}_{92}\\text{U} + {}^{1}_{0}n \\to \\text{fragments} + (2\\text{--}3)\\,{}^{1}_{0}n + 200\\text{ MeV}';
  }
  if (t.includes('fusion') || t.includes('sun') || t.includes('thermonuclear') || t.includes('hydrogen bomb')) {
    return '{}^{2}_{1}\\text{H} + {}^{3}_{1}\\text{H} \\to {}^{4}_{2}\\text{He} + {}^{1}_{0}n + 17.6\\text{ MeV}';
  }
  if (t.includes('carbon-14') || t.includes('c-14') || t.includes('dating') || t.includes('fossil')) {
    return '\\frac{N(t)}{N_0} = \\left(\\frac{1}{2}\\right)^{t/T_{1/2}}, \\quad T_{1/2}({}^{14}\\text{C}) \\approx 5730\\text{ y}';
  }
  if (t.includes('neutron') || t.includes('proton') || t.includes('atomic number') || t.includes('mass number') || t.includes('isotope')) {
    return 'A = Z + N, \\quad q = +Ze, \\quad R = R_0 A^{1/3}';
  }
  return 'E = mc^2, \\quad N(t) = N_0 e^{-\\lambda t}';
}

function getDifficulty(qnum: number): 'Easy' | 'Medium' | 'Hard' {
  // Balanced distribution of Easy, Medium, Hard
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
      id: `el-phy12-ch13-q${raw.qnum}`,
      class: 12,
      subject: 'Physics',
      chapter_id: 'el-phy12-ch13',
      chapter: 'Chapter 13 — Nuclear Physics',
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
// ⚛️ ELEMENTARY PHYSICS CLASS 12 — CHAPTER 13: NUCLEAR PHYSICS (200 MCQs)
// Difficulty: Normal
// Physical Constants & Models:
// 1 u ≈ 931.5 MeV/c^2 = 1.6605 × 10^-27 kg, c ≈ 3 × 10^8 m/s, e ≈ 1.602 × 10^-19 C,
// R_0 ≈ 1.2 × 10^-15 m (1.2 fm), Nuclear density ρ ≈ 2.3 × 10^17 kg/m^3.
// Half-life relation: T_1/2 = ln(2)/λ ≈ 0.693/λ, Decay law: N(t) = N_0 e^(-λt).
// ============================================================================

export const EL_PHY12_CH13_QUESTIONS: Question[] = ${JSON.stringify(questions, null, 2)};
`;

  fs.writeFileSync(
    path.join(process.cwd(), 'src/data/el_phy12_chapter13_data.ts'),
    content,
    'utf-8'
  );

  console.log('Saved to src/data/el_phy12_chapter13_data.ts');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
