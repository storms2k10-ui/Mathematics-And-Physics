import React from 'react';
import { Chapter } from '../types';

interface ChapterArtworkProps {
  theme: Chapter['artTheme'];
  title: string;
  category?: string;
  className?: string;
  size?: 'banner' | 'card' | 'hero' | 'modal';
}

export const ChapterArtwork: React.FC<ChapterArtworkProps> = ({
  theme,
  title,
  category,
  className = '',
  size = 'banner',
}) => {
  const heightClasses = {
    banner: 'h-48 sm:h-56',
    card: 'h-32',
    hero: 'h-64 sm:h-72',
    modal: 'h-48 sm:h-60',
  }[size];

  const renderSvgPattern = () => {
    switch (theme) {
      case 'logarithm':
        return (
          <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice" fill="none">
            {/* Logarithmic Spiral & Grid */}
            <path d="M 50,250 C 150,240 250,200 350,130 C 450,70 520,30 580,20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <path d="M 50,250 L 580,250" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M 50,30 L 50,250" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="350" cy="130" r="6" fill="currentColor" />
            <circle cx="200" cy="220" r="5" fill="currentColor" />
            <circle cx="480" cy="50" r="6" fill="currentColor" />
            <text x="70" y="70" fill="currentColor" fontSize="24" fontFamily="monospace" opacity="0.6">log_a(x · y) = log_a(x) + log_a(y)</text>
            <text x="360" y="170" fill="currentColor" fontSize="20" fontFamily="monospace" opacity="0.5">e^{'{i\\pi}'} + 1 = 0</text>
          </svg>
        );

      case 'algebra':
        return (
          <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice" fill="none">
            {/* Quadratic Parabola & Polynomial Curves */}
            <path d="M 100,20 Q 300,320 500,20" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M 50,180 L 550,180" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 5" />
            <path d="M 300,30 L 300,270" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 5" />
            <circle cx="200" cy="180" r="6" fill="currentColor" />
            <circle cx="400" cy="180" r="6" fill="currentColor" />
            <circle cx="300" cy="245" r="7" fill="currentColor" />
            <text x="315" y="260" fill="currentColor" fontSize="18" fontFamily="monospace">Vertex (h, k)</text>
            <text x="70" y="80" fill="currentColor" fontSize="24" fontFamily="monospace" opacity="0.6">x = [-b ± √(b² - 4ac)] / 2a</text>
          </svg>
        );

      case 'triangle':
        return (
          <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice" fill="none">
            {/* Geometric Triangle with Incircle & Altitudes */}
            <polygon points="120,240 480,240 300,60" stroke="currentColor" strokeWidth="3" fill="currentColor" fillOpacity="0.06" />
            <circle cx="300" cy="180" r="60" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="300" y1="60" x2="300" y2="240" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="120" y1="240" x2="390" y2="150" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="480" y1="240" x2="210" y2="150" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="300" cy="180" r="5" fill="currentColor" />
            <text x="60" y="50" fill="currentColor" fontSize="22" fontFamily="serif" fontStyle="italic" opacity="0.7">a² + b² = c²</text>
            <text x="315" y="185" fill="currentColor" fontSize="16" fontFamily="sans-serif">Incenter (I)</text>
          </svg>
        );

      case 'circle':
        return (
          <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice" fill="none">
            {/* Circle with Tangents, Radius, and Inscribed Angle */}
            <circle cx="300" cy="150" r="90" stroke="currentColor" strokeWidth="3" fill="currentColor" fillOpacity="0.05" />
            <line x1="100" y1="240" x2="500" y2="240" stroke="currentColor" strokeWidth="2.5" />
            <line x1="300" y1="150" x2="300" y2="240" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
            <circle cx="300" cy="240" r="6" fill="currentColor" />
            <line x1="210" y1="150" x2="390" y2="150" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
            <polygon points="210,150 390,150 300,60" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" />
            <text x="315" y="200" fill="currentColor" fontSize="18" fontFamily="monospace">r ⊥ Tangent</text>
            <text x="80" y="60" fill="currentColor" fontSize="22" fontFamily="monospace" opacity="0.6">(x - h)² + (y - k)² = r²</text>
          </svg>
        );

      case 'trigonometry':
        return (
          <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice" fill="none">
            {/* Sine Wave & Unit Circle Projection */}
            <path d="M 50,150 Q 125,50 200,150 T 350,150 T 500,150" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <line x1="40" y1="150" x2="560" y2="150" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="125" cy="50" r="6" fill="currentColor" />
            <circle cx="275" cy="250" r="6" fill="currentColor" />
            <circle cx="425" cy="50" r="6" fill="currentColor" />
            <text x="70" y="70" fill="currentColor" fontSize="22" fontFamily="serif" fontStyle="italic" opacity="0.7">sin²θ + cos²θ = 1</text>
            <text x="320" y="270" fill="currentColor" fontSize="18" fontFamily="monospace" opacity="0.6">f(x) = A sin(ωt + φ)</text>
          </svg>
        );

      case 'matrix':
        return (
          <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice" fill="none">
            {/* Matrix brackets & Grid Cells */}
            <path d="M 180,60 L 150,60 L 150,240 L 180,240" stroke="currentColor" strokeWidth="3.5" />
            <path d="M 420,60 L 450,60 L 450,240 L 420,240" stroke="currentColor" strokeWidth="3.5" />
            <g fontSize="20" fontFamily="monospace" fill="currentColor" textAnchor="middle">
              <text x="210" y="110">a₁₁</text>
              <text x="300" y="110">a₁₂</text>
              <text x="390" y="110">a₁₃</text>
              <text x="210" y="160">a₂₁</text>
              <text x="300" y="160">a₂₂</text>
              <text x="390" y="160">a₂₃</text>
              <text x="210" y="210">a₃₁</text>
              <text x="300" y="210">a₃₂</text>
              <text x="390" y="210">a₃₃</text>
            </g>
            <text x="60" y="50" fill="currentColor" fontSize="20" fontFamily="monospace" opacity="0.6">A⁻¹ = adj(A) / |A|</text>
          </svg>
        );

      case 'vector':
        return (
          <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice" fill="none">
            {/* 3D Vectors & Cross Product Direction */}
            <line x1="300" y1="200" x2="300" y2="40" stroke="currentColor" strokeWidth="3" markerEnd="url(#arrow)" />
            <line x1="300" y1="200" x2="480" y2="130" stroke="currentColor" strokeWidth="3" />
            <line x1="300" y1="200" x2="160" y2="250" stroke="currentColor" strokeWidth="3" />
            <line x1="300" y1="200" x2="430" y2="260" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4 4" />
            <circle cx="300" cy="200" r="5" fill="currentColor" />
            <text x="310" y="55" fill="currentColor" fontSize="20" fontFamily="monospace" fontWeight="bold">a⃗ × b⃗ (k̂)</text>
            <text x="490" y="130" fill="currentColor" fontSize="18" fontFamily="monospace">b⃗ (ĵ)</text>
            <text x="130" y="260" fill="currentColor" fontSize="18" fontFamily="monospace">a⃗ (î)</text>
            <text x="60" y="50" fill="currentColor" fontSize="22" fontFamily="monospace" opacity="0.6">a⃗ · b⃗ = |a||b| cos θ</text>
          </svg>
        );

      case 'calculus':
        return (
          <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice" fill="none">
            {/* Smooth Curve with Tangent Slope Line */}
            <path d="M 60,240 C 180,240 220,60 380,80 C 480,95 520,240 560,250" stroke="currentColor" strokeWidth="3.5" fill="none" />
            <line x1="150" y1="180" x2="450" y2="40" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
            <circle cx="285" cy="115" r="6" fill="currentColor" />
            <text x="300" y="110" fill="currentColor" fontSize="18" fontFamily="sans-serif">Slope = f'(x)</text>
            <text x="70" y="60" fill="currentColor" fontSize="24" fontFamily="serif" fontStyle="italic" opacity="0.7">df/dx = lim [f(x+h) - f(x)] / h</text>
          </svg>
        );

      case 'integral':
        return (
          <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice" fill="none">
            {/* Shaded Area Under Curve with Riemann Strips */}
            <path d="M 120,220 C 200,80 340,60 480,220 L 480,220 L 120,220 Z" fill="currentColor" fillOpacity="0.12" />
            <path d="M 80,220 C 180,70 340,50 520,220" stroke="currentColor" strokeWidth="3" fill="none" />
            <line x1="120" y1="180" x2="120" y2="220" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="200" y1="95" x2="200" y2="220" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="300" y1="65" x2="300" y2="220" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="400" y1="105" x2="400" y2="220" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="480" y1="200" x2="480" y2="220" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="270" y="160" fill="currentColor" fontSize="22" fontFamily="serif" fontStyle="italic">Area = ∫ₐᵇ f(x) dx</text>
          </svg>
        );

      case 'conic':
        return (
          <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice" fill="none">
            {/* Ellipse and Hyperbolic Curves */}
            <ellipse cx="300" cy="150" rx="180" ry="90" stroke="currentColor" strokeWidth="3" fill="currentColor" fillOpacity="0.05" />
            <circle cx="210" cy="150" r="5" fill="currentColor" />
            <circle cx="390" cy="150" r="5" fill="currentColor" />
            <line x1="80" y1="150" x2="520" y2="150" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="300" y1="40" x2="300" y2="260" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
            <text x="185" y="140" fill="currentColor" fontSize="16" fontFamily="monospace">Focus F₁</text>
            <text x="365" y="140" fill="currentColor" fontSize="16" fontFamily="monospace">Focus F₂</text>
            <text x="80" y="60" fill="currentColor" fontSize="22" fontFamily="monospace" opacity="0.6">x²/a² + y²/b² = 1</text>
          </svg>
        );

      case 'coordinate':
        return (
          <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice" fill="none">
            {/* 2D Coordinate Grid with Distance Line & Projections */}
            <line x1="60" y1="150" x2="540" y2="150" stroke="currentColor" strokeWidth="2" />
            <line x1="300" y1="30" x2="300" y2="270" stroke="currentColor" strokeWidth="2" />
            <line x1="180" y1="210" x2="420" y2="80" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <circle cx="180" cy="210" r="6" fill="currentColor" />
            <circle cx="420" cy="80" r="6" fill="currentColor" />
            <line x1="180" y1="210" x2="420" y2="210" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="420" y1="210" x2="420" y2="80" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="130" y="235" fill="currentColor" fontSize="16" fontFamily="monospace">A(x₁, y₁)</text>
            <text x="435" y="85" fill="currentColor" fontSize="16" fontFamily="monospace">B(x₂, y₂)</text>
            <text x="60" y="55" fill="currentColor" fontSize="20" fontFamily="monospace" opacity="0.6">d = √[(Δx)² + (Δy)²]</text>
          </svg>
        );

      default:
        return (
          <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice" fill="none">
            {/* General Mathematical Waves & Formula Matrix */}
            <circle cx="150" cy="150" r="80" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
            <circle cx="450" cy="150" r="80" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
            <path d="M 50,150 C 200,20 400,280 550,150" stroke="currentColor" strokeWidth="3" />
            <text x="80" y="70" fill="currentColor" fontSize="22" fontFamily="serif" fontStyle="italic" opacity="0.7">f(x) = ∑ aₙ xⁿ</text>
          </svg>
        );
    }
  };

  // Color gradient according to theme
  const getGradient = () => {
    switch (theme) {
      case 'calculus':
      case 'integral':
        return 'from-indigo-900 via-indigo-950 to-slate-950 text-indigo-400';
      case 'trigonometry':
        return 'from-cyan-900 via-slate-900 to-indigo-950 text-cyan-400';
      case 'matrix':
      case 'vector':
        return 'from-emerald-950 via-slate-900 to-teal-950 text-emerald-400';
      case 'algebra':
        return 'from-violet-950 via-slate-900 to-purple-950 text-purple-400';
      case 'triangle':
      case 'circle':
        return 'from-blue-950 via-slate-900 to-slate-950 text-sky-400';
      case 'conic':
      case 'differential':
        return 'from-amber-950 via-slate-900 to-orange-950 text-amber-400';
      default:
        return 'from-slate-900 via-indigo-950 to-slate-950 text-indigo-400';
    }
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${getGradient()} ${heightClasses} ${className} shadow-lg border border-slate-700/50 flex flex-col justify-end p-6 select-none transition-all duration-300`}
    >
      {/* Background SVG Vector Pattern */}
      {renderSvgPattern()}

      {/* Atmospheric glow orb */}
      <div className="absolute -top-16 -right-16 w-52 h-52 bg-white/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-52 h-52 bg-white/5 rounded-full blur-2xl pointer-events-none" />

      {/* Content overlay - Chapter Title Only */}
      <div className="relative z-10">
        <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight drop-shadow-xs">
          {title}
        </h3>
      </div>
    </div>
  );
};
