import React, { useMemo } from 'react';
import katex from 'katex';

export interface MathDisplayProps {
  children?: React.ReactNode;
  content?: string;
  math?: string;
  text?: string;
  displayMode?: boolean;
  inline?: boolean;
  className?: string;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | 'auto';
  showBorder?: boolean;
}

/**
 * Standardized centralized KaTeX configuration used across the application.
 * Guarantees consistent typography, strictness error handling, macros, and accessibility.
 */
export const KATEX_CONFIG: katex.KatexOptions = {
  throwOnError: false,
  errorColor: '#f43f5e',
  strict: 'ignore',
  trust: false,
  output: 'htmlAndMathml',
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
    '\\lim': '\\mathop{\\mathrm{lim}}\\limits',
    '\\limsup': '\\mathop{\\mathrm{lim\\,sup}}\\limits',
    '\\liminf': '\\mathop{\\mathrm{lim\\,inf}}\\limits',
  },
};

/**
 * Sanitizes and normalizes LaTeX source strings to fix common escaping artifacts,
 * primes, degree symbols, scientific notations, fractions, powers, and limit/summation boundaries.
 */
export function sanitizeLatex(str: string): string {
  if (!str) return '';
  let s = str.trim();

  // 1. Fix JS string control characters (0x01-0x1F) caused by single-backslash escapes
  s = s.replace(/\x08inom\b/g, '\\binom');
  s = s.replace(/\x08eta\b/g, '\\beta');
  s = s.replace(/\x08egin\b/g, '\\begin');
  s = s.replace(/\x08ar\b/g, '\\bar');
  s = s.replace(/\x08mathbf\b/g, '\\mathbf');
  s = s.replace(/\x08mathbb\b/g, '\\mathbb');
  s = s.replace(/\x08/g, '\\b');

  s = s.replace(/\x0Crac\b/g, '\\frac');
  s = s.replace(/\x0Corall\b/g, '\\forall');
  s = s.replace(/\x0C/g, '\\f');

  s = s.replace(/\x0Barnothing\b/g, '\\varnothing');
  s = s.replace(/\x0Bec\b/g, '\\vec');
  s = s.replace(/\x0B/g, '\\v');

  s = s.replace(/\x07pprox\b/g, '\\approx');
  s = s.replace(/\x07lpha\b/g, '\\alpha');
  s = s.replace(/\x07/g, '\\a');

  s = s.replace(/\x0Dight\b/g, '\\right');
  s = s.replace(/\x0Dho\b/g, '\\rho');
  s = s.replace(/\r/g, ' ');

  s = s.replace(/\t(heta|times|text|tan|to|tau)\b/g, '\\$1');
  s = s.replace(/\t/g, ' ');

  s = s.replace(/\n(eq|notin)\b/g, '\\$1');
  s = s.replace(/\\n\b/g, ' ').replace(/\\n/g, ' ');
  s = s.replace(/\n/g, ' ');

  // 2. Fix primes (e.g., f\'(x) -> f'(x), y\'\' -> y'')
  s = s.replace(/\\'/g, "'");

  // 3. Matrix newline fix: \\ followed by letter must have space in LaTeX
  s = s.replace(/\\\\([a-zA-Z])/g, '\\\\ $1');

  // 4. Missing backslash before left/right delimiters
  s = s.replace(/(^|[^\\])\bleft(\[|\(|\.|\\\{|\|)/g, '$1\\left$2');
  s = s.replace(/(^|[^\\])\bright(\]|\)|\.|\\\}|\|)/g, '$1\\right$2');

  // 5. Fix set delimiters: \left\\{ -> \left\{
  s = s.replace(/\\left\\\\\{/g, '\\left\\{').replace(/\\right\\\\}/g, '\\right\\}');

  // 6. Degree symbols
  s = s.replace(/(\d+)\^\\circ/g, '$1^{\\circ}');
  s = s.replace(/(\d+)\^\{\\circ\}/g, '$1^{\\circ}');
  s = s.replace(/(\d+)°/g, '$1^{\\circ}');

  // 7. Trig function powers without space: \cos^215^\circ -> \cos^2 15^{\circ}
  s = s.replace(/\\(sin|cos|tan|cot|sec|csc)\^(\d)(\d+)\^/g, '\\$1^{$2} $3^');

  // 8. Fractions: \frac 1 2 or \frac 12 -> \frac{1}{2}, \frac1{...} -> \frac{1}{...}
  s = s.replace(/\\frac\s*(\d)\s*(\d)\b/g, '\\frac{$1}{$2}');
  s = s.replace(/\\frac\s*(\d)\s*\{/g, '\\frac{$1}{');

  // 9. Scientific and negative powers / exponents: 10^-19 -> 10^{-19}, x^-1 -> x^{-1}, e^-x -> e^{-x}
  s = s.replace(/10\^(-?\d+)/g, '10^{$1}');
  s = s.replace(/([a-zA-Z0-9\)\}])\^(-[a-zA-Z0-9]+)\b/g, '$1^{$2}');

  // 10. Limits
  s = s.replace(/\\lim_([a-zA-Z0-9]+)\\to([a-zA-Z0-9]+|\\infty)/g, '\\lim_{$1 \\to $2}');
  s = s.replace(/\\lim_([a-zA-Z0-9]+)->([a-zA-Z0-9]+|\\infty)/g, '\\lim_{$1 \\to $2}');
  s = s.replace(/\\lim_\{([^}]+)->([^}]+)\}/g, '\\lim_{$1 \\to $2}');
  s = s.replace(/\\lim_\{([^}]+)→([^}]+)\}/g, '\\lim_{$1 \\to $2}');
  s = s.replace(/\\lim(?![a-zA-Z\\])(?!\\limits)/g, '\\lim\\limits');
  s = s.replace(/\\limsup(?![a-zA-Z\\])(?!\\limits)/g, '\\limsup\\limits');
  s = s.replace(/\\liminf(?![a-zA-Z\\])(?!\\limits)/g, '\\liminf\\limits');

  // 11. Integrals & Summations
  s = s.replace(/\\int_([a-zA-Z0-9]+)\^([a-zA-Z0-9]+|\\infty)/g, '\\int_{$1}^{$2}');
  s = s.replace(/\\sum_([a-zA-Z0-9]+)=([a-zA-Z0-9]+)\^([a-zA-Z0-9]+|\\infty)\b/g, '\\sum_{$1=$2}^{$3}');
  s = s.replace(/\\sum_([a-zA-Z0-9]+)=([a-zA-Z0-9]+)\^\{([^}]+)\}/g, '\\sum_{$1=$2}^{$3}');
  s = s.replace(/\\sum_\{([^}]+)\}\^([a-zA-Z0-9]+|\\infty)(?!\{)/g, '\\sum_{$1}^{$2}');

  // 12. Fix trailing % or \%
  s = s.replace(/\\%$/, '\\%');

  return s;
}

/**
 * Safely renders a LaTeX mathematical snippet into standard HTML using KaTeX.
 */
export function renderLatexToHtml(latex: string, isDisplayMode = false): string {
  const cleanMath = sanitizeLatex(latex);
  try {
    return katex.renderToString(cleanMath, {
      ...KATEX_CONFIG,
      displayMode: isDisplayMode,
    });
  } catch (err) {
    // Graceful fallback showing raw latex if parsing ever fails
    const escaped = cleanMath.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return `<span class="katex-error text-rose-500 font-mono text-xs" title="KaTeX error">${escaped}</span>`;
  }
}

/**
 * Parses mixed text containing mathematical expressions into an array of tokens
 * and converts math delimiters ($...$, $$...$$, \(...\), \[...\]) to KaTeX HTML.
 */
export function parseAndRenderMixedText(text: string, forceDisplayMode?: boolean): string {
  if (!text) return '';
  const trimmed = text.trim();

  // 1. If explicit displayMode is forced
  if (forceDisplayMode) {
    let cleanMath = trimmed;
    if (cleanMath.startsWith('$$') && cleanMath.endsWith('$$')) {
      cleanMath = cleanMath.slice(2, -2).trim();
    } else if (cleanMath.startsWith('$') && cleanMath.endsWith('$')) {
      cleanMath = cleanMath.slice(1, -1).trim();
    } else if (cleanMath.startsWith('\\[') && cleanMath.endsWith('\\]')) {
      cleanMath = cleanMath.slice(2, -2).trim();
    }
    return renderLatexToHtml(cleanMath, true);
  }

  // 2. Pure block math: $$...$$ or \[...\]
  if (
    (trimmed.startsWith('$$') && trimmed.endsWith('$$') && trimmed.length > 4) ||
    (trimmed.startsWith('\\[') && trimmed.endsWith('\\]') && trimmed.length > 4)
  ) {
    const rawFormula = trimmed.slice(2, -2).trim();
    return renderLatexToHtml(rawFormula, true);
  }

  // 3. Pure inline math: $...$ or \(...\)
  if (
    (trimmed.startsWith('$') && trimmed.endsWith('$') && trimmed.length > 2 && !trimmed.slice(1, -1).includes('$')) ||
    (trimmed.startsWith('\\(') && trimmed.endsWith('\\)') && trimmed.length > 4)
  ) {
    const rawFormula = trimmed.slice(trimmed.startsWith('$') ? 1 : 2, trimmed.endsWith('$') ? -1 : -2).trim();
    return renderLatexToHtml(rawFormula, false);
  }

  // 4. Check if the string is likely a pure formula without explicit $ wrappers
  const hasLatexKeywords = /\\(lim|limsup|liminf|frac|sqrt|int|sum|prod|log|ln|sin|cos|tan|cot|sec|csc|alpha|beta|gamma|delta|theta|lambda|pi|mu|sigma|omega|Delta|Sigma|partial|infty|pm|neq|le|ge|approx|times|cdot|in|notin|subset|cap|cup|forall|exists|mathbb|mathbf|mathcal|text|quad|qquad|left|right|begin|end|vec|overline|hat)/.test(trimmed);
  const hasMathOperators = /[\^_=+\-*/<>]/.test(trimmed);
  const isQuestionSentence = /(Which|What|Find|Determine|According|Calculate|Evaluate|Select|State|Where|How)/i.test(trimmed);

  if (hasLatexKeywords && !isQuestionSentence && !trimmed.includes('$')) {
    return renderLatexToHtml(trimmed, false);
  }

  // 5. Tokenize mixed text containing math expressions
  try {
    const tokens: { type: 'text' | 'inline-math' | 'display-math'; content: string }[] = [];
    let cursor = 0;
    const mathRegex = /(\$\$[\s\S]*?\$\$|\$[^$\n]+?\$|\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\))/g;
    let match: RegExpExecArray | null;

    while ((match = mathRegex.exec(text)) !== null) {
      if (match.index > cursor) {
        tokens.push({
          type: 'text',
          content: text.slice(cursor, match.index),
        });
      }

      const raw = match[0];
      if (raw.startsWith('$$') && raw.endsWith('$$')) {
        tokens.push({
          type: 'display-math',
          content: raw.slice(2, -2).trim(),
        });
      } else if (raw.startsWith('\\[') && raw.endsWith('\\]')) {
        tokens.push({
          type: 'display-math',
          content: raw.slice(2, -2).trim(),
        });
      } else if (raw.startsWith('\\(') && raw.endsWith('\\)')) {
        tokens.push({
          type: 'inline-math',
          content: raw.slice(2, -2).trim(),
        });
      } else if (raw.startsWith('$') && raw.endsWith('$')) {
        tokens.push({
          type: 'inline-math',
          content: raw.slice(1, -1).trim(),
        });
      }

      cursor = match.index + raw.length;
    }

    if (cursor < text.length) {
      tokens.push({
        type: 'text',
        content: text.slice(cursor),
      });
    }

    if (tokens.length > 0) {
      return tokens
        .map((token) => {
          if (token.type === 'text') {
            let textHtml = token.content
              .replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;');
            textHtml = textHtml.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-white">$1</strong>');
            textHtml = textHtml.replace(/\*(.*?)\*/g, '<em class="italic text-slate-800 dark:text-slate-200">$1</em>');
            return textHtml;
          }
          return renderLatexToHtml(token.content, token.type === 'display-math');
        })
        .join('');
    }

    // If no delimiters found, escape basic HTML and markdown
    let textHtml = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    textHtml = textHtml.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-white">$1</strong>');
    textHtml = textHtml.replace(/\*(.*?)\*/g, '<em class="italic text-slate-800 dark:text-slate-200">$1</em>');
    return textHtml;
  } catch {
    return text;
  }
}

/**
 * Centralized MathDisplay Component
 * 
 * Wraps children or math strings with a consistent LaTeX render configuration,
 * ensuring that even complex, multi-variable equations are properly sized and
 * readable across both desktop and mobile views.
 * 
 * Features:
 * - Consistent KaTeX render configuration & typography across all app views
 * - Mobile-first horizontal scroll containment preventing mobile screen blowouts
 * - Responsive font scaling for small screens vs desktop
 * - Handles both pure LaTeX equations and mixed prose/math text
 * - Dark mode contrast enhancements and accessibility tags (HTML + MathML)
 */
export const MathDisplay: React.FC<MathDisplayProps> = ({
  children,
  content,
  math,
  text,
  displayMode = false,
  inline = false,
  className = '',
  size = 'auto',
  showBorder = false,
}) => {
  // Determine raw text from available props or children
  const rawContent = useMemo(() => {
    if (typeof children === 'string' || typeof children === 'number') {
      return String(children);
    }
    return content || math || text || '';
  }, [children, content, math, text]);

  // Is this an explicit ReactNode wrapper or a string to render
  const isStringContent = typeof children === 'string' || typeof children === 'number' || Boolean(content || math || text);

  // Parse and render string content with centralized LaTeX configuration
  const renderedHtml = useMemo(() => {
    if (!isStringContent || !rawContent) return '';
    return parseAndRenderMixedText(rawContent, displayMode);
  }, [isStringContent, rawContent, displayMode]);

  // Sizing styles
  const sizeClasses = useMemo(() => {
    switch (size) {
      case 'xs':
        return 'text-xs';
      case 'sm':
        return 'text-xs sm:text-sm';
      case 'base':
        return 'text-sm sm:text-base';
      case 'lg':
        return 'text-base sm:text-lg';
      case 'xl':
        return 'text-lg sm:text-xl';
      case '2xl':
        return 'text-xl sm:text-2xl';
      case 'auto':
      default:
        return displayMode
          ? 'text-sm sm:text-base md:text-lg'
          : 'text-[13px] sm:text-[15px] md:text-base';
    }
  }, [size, displayMode]);

  // Block display layout vs Inline display layout
  if (displayMode && !inline) {
    return (
      <div
        className={`math-display-block group my-1.5 sm:my-2.5 max-w-full overflow-x-auto overflow-y-hidden rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 transition-all duration-200 touch-pan-x [scrollbar-width:thin] ${
          showBorder ? 'border border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40' : ''
        } ${sizeClasses} ${className}`}
      >
        {isStringContent ? (
          <div
            className="math-rendered inline-block min-w-full text-center leading-relaxed text-slate-900 dark:text-slate-100"
            dangerouslySetInnerHTML={{ __html: renderedHtml }}
          />
        ) : (
          <div className="math-rendered inline-block min-w-full text-center leading-relaxed text-slate-900 dark:text-slate-100">
            {children}
          </div>
        )}
      </div>
    );
  }

  // Inline equation / mixed text display layout
  return (
    <span
      className={`math-display-inline inline-block max-w-full align-baseline font-normal leading-relaxed text-slate-900 dark:text-slate-100 ${sizeClasses} ${className}`}
    >
      {isStringContent ? (
        <span
          className="math-rendered"
          dangerouslySetInnerHTML={{ __html: renderedHtml }}
        />
      ) : (
        <span className="math-rendered">
          {children}
        </span>
      )}
    </span>
  );
};

export default MathDisplay;
