import katex from 'katex';
import { Question } from '../types';
import { ALL_QUESTIONS } from '../data/questionsData';

export interface KaTeXErrorRecord {
  field: string;
  math: string;
  error: string;
  repaired: boolean;
}

export interface MCQValidationResult {
  question: Question;
  isValid: boolean;
  repaired: boolean;
  formattedFields: string[];
  katexErrors: KaTeXErrorRecord[];
}

export interface BatchValidationReport {
  totalProcessed: number;
  totalValid: number;
  totalRepaired: number;
  totalFailed: number;
  fieldsFormattedCount: {
    questionText: number;
    options: number;
    explanation: number;
    formula: number;
  };
  classBreakdown: Record<string, { total: number; valid: number; repaired: number; failed: number }>;
  errors: KaTeXErrorRecord[];
}

/**
 * Standard KaTeX parsing options for strict syntax verification.
 */
export const KATEX_STRICT_OPTIONS: katex.KatexOptions = {
  throwOnError: true,
  strict: 'ignore',
  macros: {
    '\\R': '\\mathbb{R}',
    '\\N': '\\mathbb{N}',
    '\\Z': '\\mathbb{Z}',
    '\\Q': '\\mathbb{Q}',
    '\\C': '\\mathbb{C}',
    '\\deg': '^\\circ',
    '\\d': '\\mathrm{d}',
    '\\diff': '\\mathrm{d}',
    '\\defeq': '\\stackrel{\\text{def}}{=}',
    '\\implies': '\\Longrightarrow',
    '\\iff': '\\Longleftrightarrow',
  },
};

/**
 * Common LaTeX math keywords to detect unadorned raw math.
 */
const RAW_LATEX_COMMANDS_REGEX = /\\(frac|sqrt|sum|int|prod|lim|alpha|beta|gamma|delta|epsilon|theta|lambda|pi|mu|sigma|omega|Delta|Sigma|partial|infty|pm|mp|neq|le|ge|approx|equiv|sim|times|div|cdot|in|notin|subset|subseteq|cap|cup|emptyset|forall|exists|mathbb|mathbf|mathcal|matrix|pmatrix|bmatrix|vmatrix|vec|hat|bar|overline|sin|cos|tan|cot|sec|csc|log|ln|exp|quad|qquad|text)\b/;

/**
 * Sanitizes and repairs common LaTeX syntax glitches:
 * - Escapes primes correctly (e.g. f\'(x) -> f'(x))
 * - Normalizes degree symbols (e.g. 45° -> 45^{\circ})
 * - Balances mismatched curly braces
 * - Escapes percentage symbols in math mode
 * - Braces multi-character exponents (10^-19 -> 10^{-19})
 */
export function repairLatexSyntax(latex: string): string {
  if (!latex) return '';
  let s = latex.trim();

  // Fix escaped single quotes used for primes: f\'(x) -> f'(x)
  s = s.replace(/\\'/g, "'");

  // Fix literal newlines or escaped letters that were intended to be keywords
  s = s.replace(/\neq\b/g, '\\neq ');
  s = s.replace(/\notin\b/g, '\\notin ');

  // Fix accidental double backslashes before known LaTeX command keywords (e.g. \\frac -> \frac),
  // while preserving matrix newline row separators (e.g. \\c, \\y, \\a)
  s = s.replace(
    /\\\\(frac|sqrt|sum|int|prod|lim|alpha|beta|gamma|delta|epsilon|theta|lambda|pi|mu|sigma|omega|Delta|Sigma|partial|infty|pm|mp|neq|le|ge|approx|equiv|sim|times|div|cdot|in|notin|subset|subseteq|cap|cup|emptyset|forall|exists|mathbb|mathbf|mathcal|matrix|pmatrix|bmatrix|vmatrix|vec|hat|bar|overline|sin|cos|tan|cot|sec|csc|log|ln|exp|quad|qquad|text|mathrm|left|right|begin|end)\b/g,
    '\\$1'
  );

  // Fix misplaced dollar in exponent: e.g. $$2x+3$^2$ -> (2x+3)^2, $x-3$^2 -> (x-3)^2
  s = s.replace(/\$([^\$\n]+)\$\^([0-9a-zA-Z]+)/g, '($1)^{$2}');

  // Fix matrix row breaks where single backslash was used instead of double backslash:
  // e.g. 1\x_2 or 1\x_3 inside matrix environments (specifically for coordinate subscripts)
  s = s.replace(/\\begin\{([a-z]+matrix)\}([\s\S]*?)\\end\{\1\}/g, (fullMatch) => {
    return fullMatch.replace(/([0-9a-zA-Z}])\\([xyzXYZ][0-9_])/g, '$1\\\\ $2');
  });

  // Fix currency artifacts or accidental double dollar prefix: e.g. $$50$ -> 50
  s = s.replace(/^\$\$([0-9]+)\$$/, '$1');

  // Fix unescaped percentage signs in math: e.g. 50% -> 50\%
  s = s.replace(/([0-9a-zA-Z])%(?![a-zA-Z])/g, '$1\\%');

  // Normalize degree signs: 45° or 45^° or 45^\circ -> 45^{\circ}
  s = s.replace(/(\d+)\s*°/g, '$1^{\\circ}');
  s = s.replace(/(\d+)\^\\circ(?![a-zA-Z])/g, '$1^{\\circ}');
  s = s.replace(/(\d+)\^\{\\circ\}/g, '$1^{\\circ}');

  // Normalize scientific notation: 10^-19 -> 10^{-19}, 10^9 -> 10^{9}
  s = s.replace(/10\^(-?\d+)/g, '10^{$1}');

  // Normalize unbraced limits: \lim_x\to 0 -> \lim_{x \to 0}
  s = s.replace(/\\lim_([a-zA-Z0-9]+)\\to([a-zA-Z0-9\\infty]+)/g, '\\lim_{$1 \\to $2}');

  // Normalize unbraced integrals: \int_0^1 -> \int_{0}^{1}
  s = s.replace(/\\int_([a-zA-Z0-9]+)\^([a-zA-Z0-9\\infty]+)/g, '\\int_{$1}^{$2}');

  // Fix unbalanced curly braces
  let openBraces = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '{' && (i === 0 || s[i - 1] !== '\\')) openBraces++;
    if (s[i] === '}' && (i === 0 || s[i - 1] !== '\\')) openBraces--;
  }
  if (openBraces > 0) {
    s += '}'.repeat(openBraces);
  } else if (openBraces < 0) {
    s = '{'.repeat(Math.abs(openBraces)) + s;
  }

  return s;
}

/**
 * Validates a single LaTeX math expression with KaTeX.
 */
export function validateWithKaTeX(math: string, isDisplayMode = false): { isValid: boolean; error?: string } {
  try {
    katex.renderToString(math, {
      ...KATEX_STRICT_OPTIONS,
      displayMode: isDisplayMode,
    });
    return { isValid: true };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return { isValid: false, error: message };
  }
}

/**
 * Standardizes raw math expressions in an option string.
 * Supports standalone numbers, fractions ("1/2"), roots ("sqrt(3)"), powers ("x^2"),
 * Greek symbols, and plus-minus options.
 */
export function formatOptionMath(optionText: string): string {
  if (!optionText) return '';
  const trimmed = optionText.trim();

  // Fix accidental $$number$ pattern
  const currencyMatch = /^\$\$([0-9]+)\$$/.exec(trimmed);
  if (currencyMatch) {
    return `$${currencyMatch[1]}$`;
  }

  // Fix accidental broken exponent in option (e.g. "$$2x+3$^2$" or "$$x-3$^2+1$")
  const brokenExpMatch = /^\$\$?([^\$\n]+)\$\^([0-9a-zA-Z]+)([\s\S]*?)\$?$/.exec(trimmed);
  if (brokenExpMatch) {
    const trailing = brokenExpMatch[3].replace(/\$$/, '');
    return `$(${brokenExpMatch[1]})^{${brokenExpMatch[2]}}${trailing}$`;
  }

  // Already wrapped in $...$ or $$...$$
  if ((trimmed.startsWith('$') && trimmed.endsWith('$')) || (trimmed.startsWith('$$') && trimmed.endsWith('$$'))) {
    const isDisplay = trimmed.startsWith('$$');
    const inner = isDisplay ? trimmed.slice(2, -2).trim() : trimmed.slice(1, -1).trim();
    const repaired = repairLatexSyntax(inner);
    return isDisplay ? `$$${repaired}$$` : `$${repaired}$`;
  }

  // Raw LaTeX command without wrappers: e.g. "\frac{1}{2}", "\sqrt{3}"
  if (RAW_LATEX_COMMANDS_REGEX.test(trimmed)) {
    const repaired = repairLatexSyntax(trimmed);
    return `$${repaired}$`;
  }

  // Standalone simple fractions: e.g. "1/2", "-3/4", "a/b", "pi/2"
  const fractionMatch = /^([+-]?)\s*([a-zA-Z0-9\\]+)\s*\/\s*([a-zA-Z0-9\\]+)$/.exec(trimmed);
  if (fractionMatch) {
    const sign = fractionMatch[1] ? fractionMatch[1] : '';
    let num = fractionMatch[2];
    let den = fractionMatch[3];
    if (num.toLowerCase() === 'pi') num = '\\pi';
    if (den.toLowerCase() === 'pi') den = '\\pi';
    return `$${sign}\\frac{${num}}{${den}}$`;
  }

  // Standalone square roots: e.g. "sqrt(2)", "sqrt(3)"
  if (/^sqrt\(([^)]+)\)$/i.test(trimmed)) {
    const inner = trimmed.replace(/^sqrt\(([^)]+)\)$/i, '$1');
    return `$\\sqrt{${inner}}$`;
  }

  // Standalone plus-minus: e.g. "+/- 5", "± 3", "+- 2"
  if (/^(\+\/-|\+-|±)\s*([0-9a-zA-Z\\/]+)$/.test(trimmed)) {
    const val = trimmed.replace(/^(\+\/-|\+-|±)\s*/, '');
    return `$\\pm ${val}$`;
  }

  // Standalone powers: e.g. "x^2", "10^5", "e^x", "r^2"
  if (/^[a-zA-Z0-9]\^[0-9a-zA-Z-]+$/.test(trimmed)) {
    const parts = trimmed.split('^');
    return `$${parts[0]}^{${parts[1]}}$`;
  }

  // Standalone scientific exponents: e.g. "10^-19"
  if (/^10\^(-?\d+)$/.test(trimmed)) {
    return `$${trimmed.replace(/10\^(-?\d+)/, '10^{$1}')}$`;
  }

  // Standalone degrees: e.g. "45°", "90°", "180°"
  if (/^(\d+)°$/.test(trimmed)) {
    return `$${trimmed.replace(/(\d+)°/, '$1^{\\circ}')}$`;
  }

  // Mixed text option
  return formatMixedTextMath(optionText);
}

/**
 * Standardizes math expressions in general text (questions, explanations, hints).
 * Tokenizes the text into existing math blocks and non-math prose.
 * Strictly avoids mutating existing LaTeX formulas while standardizing raw expressions
 * in non-math segments.
 */
export function formatMixedTextMath(text: string): string {
  if (!text) return '';

  // Fix accidental $$number$ pattern (e.g. $$50$ and profit $$30$)
  let sanitized = text.replace(/\$\$([0-9]+)\$/g, '$$$1$');

  // Tokenize text into math blocks and non-math prose
  const tokens: { type: 'math' | 'text'; content: string; isDisplay?: boolean }[] = [];
  const mathRegex = /(\$\$[\s\S]*?\$\$|\$[^$\n]+?\$|\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\))/g;
  let cursor = 0;
  let match: RegExpExecArray | null;

  while ((match = mathRegex.exec(sanitized)) !== null) {
    if (match.index > cursor) {
      tokens.push({
        type: 'text',
        content: sanitized.slice(cursor, match.index),
      });
    }

    const raw = match[0];
    const isDisplay = raw.startsWith('$$') || raw.startsWith('\\[');
    let innerMath = '';
    if (raw.startsWith('$$') && raw.endsWith('$$')) {
      innerMath = raw.slice(2, -2).trim();
    } else if (raw.startsWith('\\[') && raw.endsWith('\\]')) {
      innerMath = raw.slice(2, -2).trim();
    } else if (raw.startsWith('\\(') && raw.endsWith('\\)')) {
      innerMath = raw.slice(2, -2).trim();
    } else if (raw.startsWith('$') && raw.endsWith('$')) {
      innerMath = raw.slice(1, -1).trim();
    }

    tokens.push({
      type: 'math',
      content: innerMath,
      isDisplay,
    });

    cursor = match.index + raw.length;
  }

  if (cursor < sanitized.length) {
    tokens.push({
      type: 'text',
      content: sanitized.slice(cursor),
    });
  }

  // Process tokens
  return tokens
    .map((token) => {
      if (token.type === 'math') {
        const repaired = repairLatexSyntax(token.content);
        return token.isDisplay ? `$$${repaired}$$` : `$${repaired}$`;
      }

      // Non-math text segment: standardize raw math expressions that lack delimiters
      let segment = token.content;

      // 1. Detect raw LaTeX commands written without $:
      // e.g. "which equals \frac{a}{b} for all" -> "which equals $\frac{a}{b}$ for all"
      segment = segment.replace(
        /(^|[\s(])(\\(frac\{[^{}]+\}\{[^{}]+\}|sqrt\{[^{}]+\}|sum_[^{}]+\^[^{}]+|int_[^{}]+\^[^{}]+|alpha|beta|gamma|delta|theta|lambda|pi|sigma|omega|pm|neq|le|ge|times|cdot|in|subset))([.,;:?)\s]|$)/g,
        (_m, prefix, cmd, _c, suffix) => {
          return `${prefix}$${repairLatexSyntax(cmd)}$${suffix}`;
        }
      );

      // 2. Normalize raw degrees in text: e.g. "angle of 45°" -> "angle of $45^{\circ}$"
      segment = segment.replace(/(^|\s)(\d+)°(\s|[.,;:?!]|$)/g, (_m, p1, deg, p2) => {
        return `${p1}$${deg}^{\\circ}$${p2}`;
      });

      return segment;
    })
    .join('');
}

/**
 * Validates all LaTeX blocks within a text field using KaTeX.
 * If syntax errors are found, applies automatic repair and returns diagnostics.
 */
export function validateTextFieldLatex(
  text: string,
  fieldName: string
): { isValid: boolean; repairedText: string; errors: KaTeXErrorRecord[] } {
  const errors: KaTeXErrorRecord[] = [];
  let repairedText = text;
  let allValid = true;

  const mathRegex = /(\$\$[\s\S]*?\$\$|\$[^$\n]+?\$)/g;
  let match: RegExpExecArray | null;

  while ((match = mathRegex.exec(text)) !== null) {
    const raw = match[0];
    const isDisplay = raw.startsWith('$$');
    const mathContent = isDisplay ? raw.slice(2, -2).trim() : raw.slice(1, -1).trim();

    const check = validateWithKaTeX(mathContent, isDisplay);
    if (!check.isValid) {
      allValid = false;
      const repairedMath = repairLatexSyntax(mathContent);
      const recheck = validateWithKaTeX(repairedMath, isDisplay);

      errors.push({
        field: fieldName,
        math: mathContent,
        error: check.error || 'KaTeX parsing error',
        repaired: recheck.isValid,
      });

      if (recheck.isValid) {
        const replacement = isDisplay ? `$$${repairedMath}$$` : `$${repairedMath}$`;
        repairedText = repairedText.replace(raw, replacement);
      }
    }
  }

  return {
    isValid: allValid,
    repairedText,
    errors,
  };
}

/**
 * Parses and formats a single Question object:
 * - Standardizes raw math expressions in question text and option fields
 * - Validates all LaTeX syntax using KaTeX
 * - Synchronizes option_a..d and options map
 * - Returns the updated question and validation diagnostics
 */
export function parseAndFormatMCQ(q: Question): MCQValidationResult {
  const formattedFields: string[] = [];
  const katexErrors: KaTeXErrorRecord[] = [];
  let wasRepaired = false;

  const updated: Question = { ...q };

  // 1. Format and validate Question text
  const originalQuestion = updated.question || '';
  const formattedQuestion = formatMixedTextMath(originalQuestion);
  const qValidation = validateTextFieldLatex(formattedQuestion, 'question');
  updated.question = qValidation.repairedText;
  if (formattedQuestion !== originalQuestion || qValidation.repairedText !== formattedQuestion) {
    formattedFields.push('question');
  }
  if (qValidation.errors.length > 0) {
    katexErrors.push(...qValidation.errors);
    if (qValidation.errors.some((e) => e.repaired)) wasRepaired = true;
  }

  // 2. Format and validate Option fields (both option_a..d and options map)
  const optionKeys: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];
  const newOptions = { ...(updated.options || { A: '', B: '', C: '', D: '' }) };

  for (const key of optionKeys) {
    const propKey = `option_${key.toLowerCase()}` as 'option_a' | 'option_b' | 'option_c' | 'option_d';
    const rawVal = updated[propKey] || newOptions[key] || '';
    if (!rawVal) continue;

    const formattedVal = formatOptionMath(rawVal);
    const optValidation = validateTextFieldLatex(formattedVal, propKey);
    const finalVal = optValidation.repairedText;

    updated[propKey] = finalVal;
    newOptions[key] = finalVal;

    if (formattedVal !== rawVal || finalVal !== formattedVal) {
      formattedFields.push(propKey);
    }
    if (optValidation.errors.length > 0) {
      katexErrors.push(...optValidation.errors);
      if (optValidation.errors.some((e) => e.repaired)) wasRepaired = true;
    }
  }
  updated.options = newOptions;

  // 3. Format and validate Explanation
  if (updated.explanation) {
    const originalExp = updated.explanation;
    const formattedExp = formatMixedTextMath(originalExp);
    const expValidation = validateTextFieldLatex(formattedExp, 'explanation');
    updated.explanation = expValidation.repairedText;
    if (formattedExp !== originalExp || expValidation.repairedText !== formattedExp) {
      formattedFields.push('explanation');
    }
    if (expValidation.errors.length > 0) {
      katexErrors.push(...expValidation.errors);
      if (expValidation.errors.some((e) => e.repaired)) wasRepaired = true;
    }
  }

  // 4. Format and validate Formula (if present)
  if (updated.formula) {
    const originalForm = updated.formula;
    const formattedForm = formatOptionMath(originalForm);
    const formValidation = validateTextFieldLatex(formattedForm, 'formula');
    updated.formula = formValidation.repairedText;
    if (formattedForm !== originalForm || formValidation.repairedText !== formattedForm) {
      formattedFields.push('formula');
    }
    if (formValidation.errors.length > 0) {
      katexErrors.push(...formValidation.errors);
      if (formValidation.errors.some((e) => e.repaired)) wasRepaired = true;
    }
  }

  // 5. Ensure correct_answer consistency
  if (!updated.correct_answer && updated.correct_option) {
    updated.correct_answer = updated.correct_option;
  }

  const isCompletelyValid = katexErrors.every((e) => e.repaired) || katexErrors.length === 0;

  return {
    question: updated,
    isValid: isCompletelyValid,
    repaired: wasRepaired,
    formattedFields,
    katexErrors,
  };
}

/**
 * Parses and formats all existing MCQs across classes and chapters.
 * Validates KaTeX syntax and outputs a batch verification report.
 */
export function validateAndFormatAllMCQs(questions: Question[] = ALL_QUESTIONS): {
  report: BatchValidationReport;
  formattedQuestions: Question[];
} {
  const formattedQuestions: Question[] = [];
  const errors: KaTeXErrorRecord[] = [];

  const classBreakdown: Record<string, { total: number; valid: number; repaired: number; failed: number }> = {};
  const fieldsFormattedCount = {
    questionText: 0,
    options: 0,
    explanation: 0,
    formula: 0,
  };

  let totalValid = 0;
  let totalRepaired = 0;
  let totalFailed = 0;

  for (const q of questions) {
    const classKey = `Class ${q.class} - ${q.subject || 'Math'}`;
    if (!classBreakdown[classKey]) {
      classBreakdown[classKey] = { total: 0, valid: 0, repaired: 0, failed: 0 };
    }
    classBreakdown[classKey].total++;

    const res = parseAndFormatMCQ(q);
    formattedQuestions.push(res.question);

    if (res.formattedFields.includes('question')) fieldsFormattedCount.questionText++;
    if (res.formattedFields.some((f) => f.startsWith('option_'))) fieldsFormattedCount.options++;
    if (res.formattedFields.includes('explanation')) fieldsFormattedCount.explanation++;
    if (res.formattedFields.includes('formula')) fieldsFormattedCount.formula++;

    if (res.isValid) {
      totalValid++;
      classBreakdown[classKey].valid++;
    } else {
      totalFailed++;
      classBreakdown[classKey].failed++;
    }

    if (res.repaired) {
      totalRepaired++;
      classBreakdown[classKey].repaired++;
    }

    if (res.katexErrors.length > 0) {
      errors.push(...res.katexErrors);
    }
  }

  const report: BatchValidationReport = {
    totalProcessed: questions.length,
    totalValid,
    totalRepaired,
    totalFailed,
    fieldsFormattedCount,
    classBreakdown,
    errors,
  };

  return { report, formattedQuestions };
}

/**
 * Standalone runner: When executed directly via `tsx src/utils/dataImportUtility.ts`,
 * processes all MCQs and prints a terminal validation summary.
 */
export function runMCQImportScript(): BatchValidationReport {
  console.log('='.repeat(70));
  console.log('  MCQ DATA IMPORT & KATEX VALIDATION UTILITY');
  console.log('='.repeat(70));
  console.log(`Starting parsing & syntax validation of ${ALL_QUESTIONS.length} existing MCQs...\n`);

  const startTime = Date.now();
  const { report } = validateAndFormatAllMCQs(ALL_QUESTIONS);
  const durationMs = Date.now() - startTime;

  console.log('Validation Results:');
  console.log(`- Total Questions Processed: ${report.totalProcessed}`);
  console.log(`- Valid KaTeX Syntax:        ${report.totalValid} / ${report.totalProcessed} (${((report.totalValid / report.totalProcessed) * 100).toFixed(2)}%)`);
  console.log(`- Auto-Repaired Math Glitches: ${report.totalRepaired}`);
  console.log(`- Unresolved Syntax Failures:  ${report.totalFailed}`);
  console.log(`- Elapsed Duration:          ${durationMs}ms\n`);

  console.log('Formatted Fields Breakdown:');
  console.log(`- Question Text Formatted:   ${report.fieldsFormattedCount.questionText}`);
  console.log(`- Option Fields Formatted:   ${report.fieldsFormattedCount.options}`);
  console.log(`- Explanations Formatted:    ${report.fieldsFormattedCount.explanation}`);
  console.log(`- Formulas Formatted:        ${report.fieldsFormattedCount.formula}\n`);

  console.log('Class-wise Verification Summary:');
  Object.entries(report.classBreakdown).forEach(([cls, stats]) => {
    console.log(`  • ${cls.padEnd(30)}: Total ${stats.total.toString().padStart(4)} | Valid ${stats.valid.toString().padStart(4)} | Repaired ${stats.repaired.toString().padStart(3)}`);
  });

  if (report.errors.length > 0) {
    console.log(`\nDiagnostics: ${report.errors.length} math warnings/glitches detected.`);
    report.errors.slice(0, 5).forEach((err, idx) => {
      console.log(`  [${idx + 1}] Field: ${err.field}, Repaired: ${err.repaired}`);
      console.log(`      Math:  ${err.math}`);
      console.log(`      Error: ${err.error}`);
    });
    if (report.errors.length > 5) {
      console.log(`  ... and ${report.errors.length - 5} more issues.`);
    }
  } else {
    console.log('\nAll LaTeX expressions passed KaTeX syntax validation with 100% compliance!');
  }

  console.log('='.repeat(70));
  return report;
}

// Auto-run when invoked directly from command line
if (typeof process !== 'undefined' && process.argv && process.argv[1]?.includes('dataImportUtility')) {
  runMCQImportScript();
}

export default {
  parseAndFormatMCQ,
  validateAndFormatAllMCQs,
  formatOptionMath,
  formatMixedTextMath,
  validateWithKaTeX,
  repairLatexSyntax,
  runMCQImportScript,
};
