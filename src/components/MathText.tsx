import React from 'react';
import { MathDisplay, MathDisplayProps } from './MathDisplay';

export interface MathTextProps {
  text: string;
  className?: string;
  displayMode?: boolean;
  size?: MathDisplayProps['size'];
}

/**
 * MathText Component
 * Backwards-compatible wrapper that forwards to the centralized MathDisplay component.
 * Renders mathematical expressions, LaTeX scripts, formulas, fractions, powers,
 * integrals, matrices, square roots, and symbols with crystal-clear KaTeX typography
 * and responsive mobile view support.
 */
export const MathText: React.FC<MathTextProps> = ({
  text,
  className = '',
  displayMode = false,
  size = 'auto',
}) => {
  return (
    <MathDisplay
      content={text}
      displayMode={displayMode}
      className={className}
      size={size}
    />
  );
};

export default MathText;
