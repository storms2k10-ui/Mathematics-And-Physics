import React from 'react';
import { Sigma, Atom } from 'lucide-react';
import { MathText } from './MathText';

interface HeaderQuoteProps {
  onOpenDictionary?: () => void;
}

export const HeaderQuote: React.FC<HeaderQuoteProps> = () => {
  return (
    <header id="top-quote-header" className="hidden" aria-hidden="true">
    </header>
  );
};
