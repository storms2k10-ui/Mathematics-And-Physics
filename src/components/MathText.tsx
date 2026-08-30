import React, { useMemo } from 'react';
import katex from 'katex';

interface MathTextProps {
  text: string;
  className?: string;
  displayMode?: boolean;
}

/**
 * Sanitizes LaTeX strings to fix common escaping artifacts, primes, degree symbols,
 * limits, vectors, integrals, and standardizes summation upper and lower limits with proper brackets.
 */
function sanitizeLatex(str: string): string {
  if (!str) return '';
  let s = str.trim();
  // Fix escaped single quotes used for primes (e.g. f\'(x) -> f'(x), y\'\' -> y'')
  s = s.replace(/\\'/g, "'");
  // Fix literal newlines that were meant to be \neq, \nu, \notin, \nabla
  s = s.replace(/\neq\b/g, '\\neq ');
  s = s.replace(/\notin\b/g, '\\notin ');
  // Fix double backslashes before common LaTeX keywords
  s = s.replace(/\\\\([a-zA-Z]+)/g, '\\$1');
  // Normalize degree symbols
  s = s.replace(/(\d+)\^\\circ/g, '$1^{\\circ}');
  s = s.replace(/(\d+)\^\{\\circ\}/g, '$1^{\\circ}');
  s = s.replace(/(\d+)°/g, '$1^{\\circ}');
  // Normalize unbraced scientific exponents (e.g. 10^-19 -> 10^{-19}, 10^9 -> 10^{9})
  s = s.replace(/10\^(-?\d+)/g, '10^{$1}');
  // Normalize unbraced limits (e.g. \lim_x\to 0 -> \lim_{x \to 0})
  s = s.replace(/\\lim_([a-zA-Z0-9]+)\\to([a-zA-Z0-9\\infty]+)/g, '\\lim_{$1 \\to $2}');
  // Normalize unbraced integrals (e.g. \int_0^1 -> \int_{0}^{1})
  s = s.replace(/\\int_([a-zA-Z0-9]+)\^([a-zA-Z0-9\\infty]+)/g, '\\int_{$1}^{$2}');
  // Normalize unbraced summation lower and upper limits
  s = s.replace(/\\sum_([a-zA-Z0-9]+)=([a-zA-Z0-9]+)\^([a-zA-Z0-9\\infty]+)/g, '\\sum_{$1=$2}^{$3}');
  s = s.replace(/\\sum_([a-zA-Z0-9]+)=([a-zA-Z0-9]+)\^\{([^}]+)\}/g, '\\sum_{$1=$2}^{$3}');
  s = s.replace(/\\sum_\{([^}]+)\}\^([a-zA-Z0-9\\infty]+)(?!\{)/g, '\\sum_{$1}^{$2}');
  // Fix trailing % or \%
  s = s.replace(/\\%$/, '\\%');
  return s;
}

/**
 * MathText Component
 * Renders mathematical expressions, LaTeX scripts, formulas, fractions, powers,
 * integrals, matrices, square roots, and symbols with crystal-clear KaTeX typography.
 */
export const MathText: React.FC<MathTextProps> = ({
  text,
  className = '',
  displayMode = false,
}) => {
  const renderedHtml = useMemo(() => {
    if (!text) return '';

    const trimmed = text.trim();

    // 1. If explicit displayMode is requested (like formula highlight boxes)
    if (displayMode) {
      let cleanMath = trimmed;
      if (cleanMath.startsWith('$$') && cleanMath.endsWith('$$')) {
        cleanMath = cleanMath.slice(2, -2).trim();
      } else if (cleanMath.startsWith('$') && cleanMath.endsWith('$')) {
        cleanMath = cleanMath.slice(1, -1).trim();
      }
      try {
        return katex.renderToString(sanitizeLatex(cleanMath), {
          displayMode: true,
          throwOnError: false,
          strict: 'ignore',
        });
      } catch {
        // Fall back to token parser
      }
    }

    // 2. Check if the string is wrapped entirely in $$ or $
    if (trimmed.startsWith('$$') && trimmed.endsWith('$$') && trimmed.length > 4) {
      try {
        return katex.renderToString(sanitizeLatex(trimmed.slice(2, -2).trim()), {
          displayMode: true,
          throwOnError: false,
          strict: 'ignore',
        });
      } catch {
        // fallback
      }
    }

    if (trimmed.startsWith('$') && trimmed.endsWith('$') && trimmed.length > 2 && !trimmed.slice(1, -1).includes('$')) {
      try {
        return katex.renderToString(sanitizeLatex(trimmed.slice(1, -1).trim()), {
          displayMode: false,
          throwOnError: false,
          strict: 'ignore',
        });
      } catch {
        // fallback
      }
    }

    // 3. Check if it's a standalone pure LaTeX formula (even without $ delimiters)
    const hasLatexCommands = /\\(frac|sqrt|int|sum|prod|log|ln|sin|cos|tan|cot|sec|csc|alpha|beta|gamma|delta|theta|lambda|pi|mu|sigma|omega|Delta|Sigma|partial|infty|pm|neq|le|ge|approx|times|cdot|in|notin|subset|cap|cup|forall|exists|mathbb|mathbf|mathcal|text|quad|qquad|left|right|begin|end|vec|overline|hat)/.test(trimmed);
    const hasMathOperators = /[\^_=+\-*/<>]/.test(trimmed);
    const isLikelyPureMath = hasLatexCommands || (hasMathOperators && !/[a-zA-Z]{5,}/.test(trimmed) && trimmed.length < 80);

    if (isLikelyPureMath && !trimmed.includes('$') && !trimmed.includes('Which') && !trimmed.includes('What') && !trimmed.includes('Find') && !trimmed.includes('Determine') && !trimmed.includes('According')) {
      try {
        return katex.renderToString(sanitizeLatex(trimmed), {
          displayMode: false,
          throwOnError: false,
          strict: 'ignore',
        });
      } catch {
        // fallback
      }
    }

    // 4. Tokenize mixed text with math delimiters $...$, $$...$$, \(...\), \[...\]
    try {
      let processed = text;
      const tokens: { type: 'text' | 'inline-math' | 'display-math'; content: string }[] = [];
      let cursor = 0;

      // Regex matching $$...$$, $...$, \[...\], \(...\)
      const mathRegex = /(\$\$[\s\S]*?\$\$|\$[^$\n]+?\$|\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\))/g;
      let match: RegExpExecArray | null;

      while ((match = mathRegex.exec(processed)) !== null) {
        if (match.index > cursor) {
          tokens.push({
            type: 'text',
            content: processed.slice(cursor, match.index),
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

      if (cursor < processed.length) {
        tokens.push({
          type: 'text',
          content: processed.slice(cursor),
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
              textHtml = textHtml.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
              return textHtml;
            }
            try {
              return katex.renderToString(sanitizeLatex(token.content), {
                displayMode: token.type === 'display-math',
                throwOnError: false,
                strict: 'ignore',
              });
            } catch {
              return token.content;
            }
          })
          .join('');
      }

      // If no delimiters found, escape basic HTML and format markdown bold
      let textHtml = processed
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      textHtml = textHtml.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-white">$1</strong>');
      textHtml = textHtml.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
      return textHtml;
    } catch {
      return text;
    }
  }, [text, displayMode]);

  return (
    <span
      className={`math-rendered font-normal leading-relaxed ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
};
