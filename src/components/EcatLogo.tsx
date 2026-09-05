import React from 'react';

interface EcatLogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export const EcatLogo: React.FC<EcatLogoProps> = ({ 
  className = "h-9 w-auto",
  showSubtitle = true 
}) => {
  return (
    <svg 
      viewBox="0 0 224 74" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="ECAT - Engineering Your Future"
    >
      <defs>
        {/* Bright ice-cyan to sky-cyan gradient for the outer chevron legs of A */}
        <linearGradient id="ecatChevronGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A5F3FC" />
          <stop offset="50%" stopColor="#67E8F9" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>

        {/* Electric cyan glow gradient for the inner delta triangle */}
        <linearGradient id="ecatDeltaGrad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="50%" stopColor="#00E5FF" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>

        {/* Soft neon aura for the A glyph */}
        <filter id="ecatNeonGlow" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Letter E */}
      <path 
        d="M 10,8 H 48 V 17.5 H 21 V 24.5 H 43.5 V 33.5 H 21 V 41.5 H 48 V 50 H 10 Z" 
        fill="#FFFFFF" 
      />

      {/* Letter C */}
      <path 
        d="M 100,10.5 C 100,8.8 98.5,8 96.5,8 H 73 C 62.5,8 58.5,14 58.5,24.5 V 33.5 C 58.5,44 62.5,50 73,50 H 96.5 C 98.5,50 100,49.2 100,47.5 V 41 H 73.5 C 69.5,41 68,38.5 68,33.5 V 24.5 C 68,19.5 69.5,17 73.5,17 H 100 Z" 
        fill="#FFFFFF" 
      />

      {/* Letter A: Stylized Outer Chevron */}
      <path 
        d="M 133,8 H 139 L 161,50 H 149.5 L 136,22.5 L 122.5,50 H 111 Z" 
        fill="url(#ecatChevronGrad)"
        filter="url(#ecatNeonGlow)"
      />

      {/* Letter A: Inner Illuminated Delta Arrow / Triangle */}
      <polygon 
        points="136,29 146.5,48.5 125.5,48.5" 
        fill="url(#ecatDeltaGrad)" 
        filter="url(#ecatNeonGlow)"
      />

      {/* Letter T */}
      <path 
        d="M 172,8 H 213 V 17.5 H 197.5 V 50 H 187.5 V 17.5 H 172 Z" 
        fill="#FFFFFF" 
      />

      {/* Subtitle: ENGINEERING YOUR FUTURE */}
      {showSubtitle && (
        <text 
          x="111.5" 
          y="65" 
          textAnchor="middle" 
          textLength="203"
          lengthAdjust="spacing"
          fill="#FFFFFF" 
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif" 
          fontSize="9.2" 
          fontWeight="800" 
          letterSpacing="2.8"
        >
          ENGINEERING YOUR FUTURE
        </text>
      )}
    </svg>
  );
};
