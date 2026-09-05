import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  CheckCircle2,
  Calculator, 
  GraduationCap, 
  Sigma, 
  Sparkles, 
  Atom, 
  Zap,
  FlaskConical,
  BookOpen,
  Layers,
  Lightbulb,
  ChevronRight
} from 'lucide-react';
import { ClassLevel } from '../types';
import { MathText } from './MathText';

export type SubjectTrack = 
  | 'Elementary Mathematics' 
  | 'Chemistry' 
  | 'Elementary Physics' 
  | 'Pre Calculas';

interface HeroSectionProps {
  onSelectClass: (classLevel: ClassLevel, track?: SubjectTrack) => void;
  onStartPracticing: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSelectClass,
}) => {
  const [showExplanation, setShowExplanation] = useState(false);
  const [sampleIdx, setSampleIdx] = useState(0);

  const sampleQuestions = [
    // 1. Mathematics
    {
      subject: 'Mathematics – Quadratic Equations',
      question: 'For the quadratic equation $ax^2 + bx + c = 0$, if the discriminant $\\Delta = b^2 - 4ac < 0$, the roots are:',
      options: [
        { key: 'A', text: 'Complex conjugate roots $\\alpha \\pm i\\beta$', correct: true },
        { key: 'B', text: 'Real and distinct roots', correct: false },
        { key: 'C', text: 'Real and equal roots', correct: false },
        { key: 'D', text: 'None of these', correct: false },
      ],
      explanation: 'When discriminant $\\Delta = b^2 - 4ac < 0$, the quantity under the radical $\\sqrt{\\Delta}$ is negative ($i\\sqrt{|\\Delta|}$), yielding complex conjugate roots: $x = \\frac{-b \\pm i\\sqrt{4ac - b^2}}{2a}$.'
    },
    // 2. Physics
    {
      subject: 'Physics – Vectors & Equilibrium',
      question: 'Two forces of equal magnitude $F$ act at an angle of $60^\\circ$ to each other. The magnitude of their resultant is:',
      options: [
        { key: 'A', text: '$\\sqrt{3}F$', correct: true },
        { key: 'B', text: '$F$', correct: false },
        { key: 'C', text: '$2F$', correct: false },
        { key: 'D', text: '$\\frac{F}{\\sqrt{3}}$', correct: false },
      ],
      explanation: 'By law of cosines for vectors: $R = \\sqrt{F^2 + F^2 + 2(F)(F)\\cos(60^\\circ)} = \\sqrt{2F^2 + 2F^2(0.5)} = \\sqrt{3F^2} = \\sqrt{3}F$.'
    },
    // 3. Mathematics
    {
      subject: 'Mathematics – Limits & Trigonometry',
      question: 'The value of the fundamental trigonometric limit $\\lim\\limits_{\\theta \\to 0} \\frac{\\sin\\theta}{\\theta}$ (where $\\theta$ is in radians) is:',
      options: [
        { key: 'A', text: '$1$', correct: true },
        { key: 'B', text: '$0$', correct: false },
        { key: 'C', text: '$\\infty$', correct: false },
        { key: 'D', text: 'Undefined', correct: false },
      ],
      explanation: 'By the Squeeze (Sandwich) Theorem in radian measure, $\\cos\\theta < \\frac{\\sin\\theta}{\\theta} < 1$ near $\\theta = 0$. Since $\\lim\\limits_{\\theta \\to 0}\\cos\\theta = 1$, the limit equals $1$.'
    },
    // 4. Physics
    {
      subject: 'Physics – Projectile Motion',
      question: 'At what angle of projection $\\theta$ with the horizontal is the maximum height $H$ reached by a projectile equal to its horizontal range $R$?',
      options: [
        { key: 'A', text: '$\\tan^{-1}(4) \\approx 76^\\circ$', correct: true },
        { key: 'B', text: '$45^\\circ$', correct: false },
        { key: 'C', text: '$60^\\circ$', correct: false },
        { key: 'D', text: '$\\tan^{-1}(2) \\approx 63.4^\\circ$', correct: false },
      ],
      explanation: 'Since $H = \\frac{v_0^2 \\sin^2\\theta}{2g}$ and $R = \\frac{2v_0^2 \\sin\\theta \\cos\\theta}{g}$, setting $H = R$ gives $\\frac{\\sin^2\\theta}{2} = 2\\sin\\theta\\cos\\theta \\implies \\frac{\\sin\\theta}{\\cos\\theta} = 4 \\implies \\theta = \\tan^{-1}(4)$.'
    },
    // 5. Mathematics
    {
      subject: 'Mathematics – Functions & Limits',
      question: 'Evaluate the standard algebraic limit $\\lim\\limits_{x \\to a} \\frac{x^n - a^n}{x - a}$ for any rational number $n$:',
      options: [
        { key: 'A', text: '$n a^{n-1}$', correct: true },
        { key: 'B', text: '$a^n$', correct: false },
        { key: 'C', text: '$n a^n$', correct: false },
        { key: 'D', text: '$\\frac{a^{n-1}}{n}$', correct: false },
      ],
      explanation: 'By algebraic quotient theorem or derivative definition: $\\lim\\limits_{x \\to a}\\frac{x^n - a^n}{x - a} = \\lim\\limits_{h \\to 0}\\frac{(a+h)^n - a^n}{h} = \\frac{d}{dx}(x^n)\\Big|_{x=a} = n a^{n-1}$.'
    },
    // 6. Physics
    {
      subject: 'Physics – Work, Energy & Momentum',
      question: 'If the kinetic energy of a moving body is increased by $300\\%$, what is the percentage increase in its linear momentum?',
      options: [
        { key: 'A', text: '$100\\%$', correct: true },
        { key: 'B', text: '$50\\%$', correct: false },
        { key: 'C', text: '$200\\%$', correct: false },
        { key: 'D', text: '$300\\%$', correct: false },
      ],
      explanation: 'Since $K = \\frac{p^2}{2m}$, momentum is $p = \\sqrt{2mK}$. If $K$ increases by $300\\%$, the new kinetic energy is $K\' = 4K$. Then $p\' = \\sqrt{2m(4K)} = 2\\sqrt{2mK} = 2p$, which corresponds to a $\\frac{2p - p}{p} \\times 100\\% = 100\\%$ increase.'
    },
    // 7. Mathematics
    {
      subject: 'Mathematics – Differentiation & Calculus',
      question: 'If $y = \\ln(\\sec x + \\tan x)$, then the derivative $\\frac{dy}{dx}$ equals:',
      options: [
        { key: 'A', text: '$\\sec x$', correct: true },
        { key: 'B', text: '$\\tan x$', correct: false },
        { key: 'C', text: '$\\sec^2 x$', correct: false },
        { key: 'D', text: '$\\sec x \\tan x$', correct: false },
      ],
      explanation: 'Using the derivative of natural logarithm and chain rule: $\\frac{dy}{dx} = \\frac{\\frac{d}{dx}(\\sec x + \\tan x)}{\\sec x + \\tan x} = \\frac{\\sec x \\tan x + \\sec^2 x}{\\sec x + \\tan x} = \\frac{\\sec x(\\tan x + \\sec x)}{\\sec x + \\tan x} = \\sec x$.'
    },
    // 8. Physics
    {
      subject: 'Physics – Electrostatics & Capacitance',
      question: 'A parallel-plate capacitor with plate separation $d$ has capacitance $C$. If a dielectric slab with relative permittivity $\\kappa = 4$ fills the gap, the capacitance becomes:',
      options: [
        { key: 'A', text: '$4C$', correct: true },
        { key: 'B', text: '$\\frac{C}{4}$', correct: false },
        { key: 'C', text: '$2C$', correct: false },
        { key: 'D', text: '$16C$', correct: false },
      ],
      explanation: 'Capacitance with a dielectric medium is $C\' = \\kappa \\frac{\\varepsilon_0 A}{d} = \\kappa C$. With $\\kappa = 4$, the capacitance quadruples to $4C$.'
    },
    // 9. Mathematics
    {
      subject: 'Mathematics – Definite Integration',
      question: 'Evaluate the definite trigonometric integral $\\int_{0}^{\\pi/2} \\cos(x)\\,dx$:',
      options: [
        { key: 'A', text: '$1$', correct: true },
        { key: 'B', text: '$0$', correct: false },
        { key: 'C', text: '$\\pi$', correct: false },
        { key: 'D', text: '$-1$', correct: false },
      ],
      explanation: 'The antiderivative of $\\cos(x)$ is $\\sin(x)$. By the Fundamental Theorem of Calculus: $\\int_{0}^{\\pi/2} \\cos(x)\\,dx = \\left[\\sin x\\right]_{0}^{\\pi/2} = \\sin(\\pi/2) - \\sin(0) = 1 - 0 = 1$.'
    },
    // 10. Physics
    {
      subject: 'Physics – Electromagnetic Induction',
      question: 'According to Faraday\'s law of electromagnetic induction, the induced electromotive force (EMF) $\\mathcal{E}$ in a coil is proportional to:',
      options: [
        { key: 'A', text: 'Rate of change of magnetic flux $-\\frac{d\\Phi_B}{dt}$', correct: true },
        { key: 'B', text: 'Total magnetic flux $\\Phi_B$', correct: false },
        { key: 'C', text: 'Electric current in the coil', correct: false },
        { key: 'D', text: 'Magnetic flux density squared $B^2$', correct: false },
      ],
      explanation: 'Faraday-Lenz law states that the induced EMF in a coil is given by $\\mathcal{E} = -N\\frac{d\\Phi_B}{dt}$, which is proportional to the time rate of change of magnetic flux.'
    }
  ];

  const currentSample = sampleQuestions[sampleIdx];

  const tracks: {
    id: SubjectTrack;
    title: string;
    subtitle: string;
    description: string;
    classes: ClassLevel[];
    icon: React.ComponentType<{ className?: string }>;
    accentColor: string;
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
    buttonBg: string;
    features: string[];
  }[] = [
    {
      id: 'Elementary Mathematics',
      title: 'Mathematics',
      subtitle: 'Classes 9, 10, 11, 12',
      description: 'Standard curriculum covering Algebra, Coordinate Geometry, Matrices, Trigonometry, and introductory Calculus with interactive KaTeX solutions.',
      classes: [9, 10, 11, 12],
      icon: Sigma,
      accentColor: 'indigo',
      badgeBg: 'bg-indigo-50 dark:bg-indigo-950/70',
      badgeText: 'text-indigo-700 dark:text-indigo-300',
      badgeBorder: 'border-indigo-200 dark:border-indigo-800',
      buttonBg: 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/25',
      features: ['Algebra', 'Trigonometry', 'Calculus', 'Matrices & Vectors'],
    },
    {
      id: 'Elementary Physics',
      title: 'Physics',
      subtitle: 'Classes 11 & 12',
      description: 'Foundational physics principles: kinematics, Newtonian mechanics, work & energy, gravitation, wave theory, electrostatics, optics, and thermodynamics.',
      classes: [11, 12],
      icon: Atom,
      accentColor: 'cyan',
      badgeBg: 'bg-cyan-50 dark:bg-cyan-950/70',
      badgeText: 'text-cyan-700 dark:text-cyan-300',
      badgeBorder: 'border-cyan-200 dark:border-cyan-800',
      buttonBg: 'bg-cyan-600 hover:bg-cyan-700 shadow-cyan-600/25',
      features: ['Mechanics', 'Electricity & Magnetism', 'Modern Physics', 'Waves & Optics'],
    },
    {
      id: 'Chemistry',
      title: 'Chemistry',
      subtitle: 'Classes 9, 10, 11, 12',
      description: 'Comprehensive Chemistry curriculum covering Physical, Organic, and Inorganic Chemistry across Classes 9, 10, 11, and 12.',
      classes: [9, 10, 11, 12],
      icon: FlaskConical,
      accentColor: 'emerald',
      badgeBg: 'bg-emerald-50 dark:bg-emerald-950/70',
      badgeText: 'text-emerald-700 dark:text-emerald-300',
      badgeBorder: 'border-emerald-200 dark:border-emerald-800',
      buttonBg: 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/25',
      features: ['Physical Chemistry', 'Inorganic Chemistry', 'Organic Chemistry', 'Stoichiometry'],
    },
    {
      id: 'Pre Calculas',
      title: 'Pre Calculas',
      subtitle: 'Class 11',
      description: 'Pre-calculus foundations: polynomial & rational functions, trigonometry, analytic geometry, sequences, series, and introductory analysis.',
      classes: [11],
      icon: Calculator,
      accentColor: 'violet',
      badgeBg: 'bg-violet-50 dark:bg-violet-950/70',
      badgeText: 'text-violet-700 dark:text-violet-300',
      badgeBorder: 'border-violet-200 dark:border-violet-800',
      buttonBg: 'bg-violet-600 hover:bg-violet-700 shadow-violet-600/25',
      features: ['Functions & Relations', 'Trigonometry', 'Limits & Continuity', 'Analytic Geometry'],
    },
  ];

  return (
    <div className="space-y-10">
      
      {/* Top Hero Banner with Mathematical Blueprint Wallpaper */}
      <section id="hero-section" className="relative overflow-hidden bg-slate-50/70 dark:bg-slate-950 py-10 md:py-16 border-b border-slate-200/90 dark:border-slate-800">
        
        {/* Subtle math blueprint grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e140_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e140_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#33415525_1px,transparent_1px),linear-gradient(to_bottom,#33415525_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* Wallpaper Watermark: Integral Symbol */}
        <div className="absolute top-8 left-4 sm:left-10 text-8xl sm:text-[140px] font-serif text-slate-300/35 dark:text-slate-800/40 select-none pointer-events-none font-thin -rotate-6 leading-none">
          ∫
        </div>

        {/* Wallpaper Watermark: Pi Symbol */}
        <div className="absolute bottom-6 left-8 sm:left-24 text-7xl sm:text-9xl font-serif text-slate-300/30 dark:text-slate-800/35 select-none pointer-events-none font-thin">
          π
        </div>

        {/* Wallpaper Watermark: E = mc² */}
        <div className="absolute top-6 left-[30%] sm:left-[36%] text-xl sm:text-3xl font-serif italic text-slate-300/45 dark:text-slate-800/45 select-none pointer-events-none tracking-wider">
          E = mc²
        </div>

        {/* Wallpaper Watermark: ax² + bx + c = 0 */}
        <div className="absolute top-8 left-[52%] sm:left-[56%] text-base sm:text-2xl font-serif italic text-slate-300/45 dark:text-slate-800/45 select-none pointer-events-none tracking-wide">
          ax² + bx + c = 0
        </div>

        {/* Wallpaper Watermark: 3D Wireframe Pyramid */}
        <svg className="absolute top-10 left-[48%] -translate-x-1/2 w-48 h-48 sm:w-64 sm:h-64 text-slate-300/35 dark:text-slate-800/30 pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <polygon points="50,15 15,80 85,80" />
          <line x1="50" y1="15" x2="50" y2="80" strokeDasharray="2,2" />
          <line x1="50" y1="15" x2="68" y2="85" />
          <line x1="15" y1="80" x2="68" y2="85" />
          <line x1="85" y1="80" x2="68" y2="85" />
        </svg>

        {/* Wallpaper Watermark: Sinusoidal wave */}
        <svg className="absolute top-44 left-[34%] w-64 sm:w-88 h-24 text-slate-300/35 dark:text-slate-800/30 pointer-events-none" viewBox="0 0 200 60" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M 0,30 Q 25,5 50,30 T 100,30 T 150,30 T 200,30" />
          <line x1="0" y1="30" x2="200" y2="30" strokeDasharray="2,2" strokeWidth="0.75" />
        </svg>

        {/* Wallpaper Watermark: 3D Isometric Cube */}
        <svg className="absolute top-20 right-4 sm:right-16 w-36 h-36 sm:w-52 sm:h-52 text-slate-300/35 dark:text-slate-800/30 pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <polygon points="50,15 85,35 50,55 15,35" />
          <polyline points="15,35 15,75 50,95 50,55" />
          <polyline points="50,95 85,75 85,35" />
          <line x1="15" y1="75" x2="50" y2="55" strokeDasharray="2,2" />
          <line x1="85" y1="75" x2="50" y2="55" strokeDasharray="2,2" />
        </svg>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Heading & CTAs matching the image */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/70 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-bold tracking-wide shadow-xs">
                <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>PAKISTAN&apos;S #1 ECAT PREPARATION PLATFORM</span>
              </div>

              <div className="space-y-1.5">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.08]">
                  ECAT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-500">Preparation</span>
                </h1>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
                  Engineering College Admission Test
                </p>
                <p className="text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 pt-1">
                  Practice Smarter • Learn Deeper • Score Higher
                </p>
              </div>

              {/* Feature Checkpoints */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-3 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Chapter-wise MCQs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Detailed Explanations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Performance Tracking</span>
                </div>
              </div>
            </div>

            {/* Right Column: Sample Question Preview Card matching the image */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200/90 dark:border-slate-800 space-y-4">
                
                {/* Header badge */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-2xs ${
                      currentSample.subject.startsWith('Physics')
                        ? 'bg-cyan-50 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400'
                        : 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400'
                    }`}>
                      {currentSample.subject.startsWith('Physics') ? <Atom className="w-5 h-5" /> : <Calculator className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Sample ECAT Question</h3>
                      <p className="text-[11px] font-medium text-slate-500">{currentSample.subject}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-0.5 text-xs font-bold text-white rounded-full shadow-xs ${
                    currentSample.subject.startsWith('Physics') ? 'bg-cyan-600' : 'bg-indigo-600'
                  }`}>
                    {sampleIdx + 1}/10
                  </span>
                </div>

                {/* Sample Question Box */}
                <div className="space-y-2">
                  <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-snug">
                    <MathText text={currentSample.question} />
                  </p>
                </div>

                {/* Sample Options (A, B, C, D) */}
                <div className="space-y-2 text-xs font-medium">
                  {currentSample.options.map((opt) => (
                    <div 
                      key={opt.key}
                      className={`p-2.5 rounded-xl border flex items-center justify-between transition-all ${
                        opt.correct
                          ? 'border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-200 font-semibold'
                          : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`w-5 h-5 rounded-md font-bold flex items-center justify-center text-[10px] shrink-0 ${
                          opt.correct
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                        }`}>
                          {opt.key}
                        </span>
                        <span><MathText text={opt.text} /></span>
                      </div>
                      {opt.correct && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Explanation Box (toggled) */}
                {showExplanation && (
                  <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 space-y-1 animate-in fade-in duration-150">
                    <div className="font-bold flex items-center gap-1.5 text-[11px] uppercase tracking-wide text-amber-700 dark:text-amber-300">
                      <Lightbulb className="w-3.5 h-3.5" />
                      <span>Step-by-Step Proof</span>
                    </div>
                    <p className="leading-relaxed">
                      <MathText text={currentSample.explanation} />
                    </p>
                  </div>
                )}

                {/* Card Action Buttons (View Explanation & Next Question) */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => setShowExplanation(!showExplanation)}
                    className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 flex items-center gap-1.5 cursor-pointer py-1 px-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-colors"
                  >
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>{showExplanation ? 'Hide Explanation' : 'View Explanation'}</span>
                  </button>

                  <button
                    onClick={() => {
                      setSampleIdx((sampleIdx + 1) % sampleQuestions.length);
                      setShowExplanation(false);
                    }}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/80 dark:hover:bg-indigo-900 text-indigo-600 dark:text-indigo-300 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Next Question</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Academic Tracks & Subject Cards Section - Fully responsive on Mobile & Desktop */}
      <section id="academic-tracks-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold mb-2 border border-indigo-200/80 dark:border-indigo-800">
                <Layers className="w-3.5 h-3.5 text-indigo-600" />
                <span>SUBJECTS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                Explore Subjects &amp; Start Practicing
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
              Choose your subject below to practice chapter MCQs, explore formulas, and view detailed solutions.
            </p>
          </div>

          {/* 4 Track Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {tracks.map((track) => {
              const IconComp = track.icon;
              return (
                <div
                  key={track.id}
                  id={`track-card-${track.id.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 rounded-xl ${track.badgeBg} ${track.badgeText} flex items-center justify-center font-black shadow-xs`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${track.badgeBg} ${track.badgeText} ${track.badgeBorder}`}>
                        {track.subtitle}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-base font-black text-slate-900 dark:text-white">
                        {track.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed line-clamp-3">
                        {track.description}
                      </p>
                    </div>

                    {/* Key Topics List */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                        Focus Areas:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {track.features.map((feat, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300"
                          >
                            {feat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Class Selection Buttons */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Select Class:
                    </span>
                    <div className={`grid ${track.classes.length === 4 ? 'grid-cols-4' : 'grid-cols-2'} gap-1.5`}>
                      {track.classes.map((lvl) => (
                        <button
                          key={lvl}
                          type="button"
                          onClick={() => onSelectClass(lvl, track.id)}
                          className="py-1.5 px-2 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white text-slate-700 dark:text-slate-200 transition-colors text-center cursor-pointer border border-slate-200/60 dark:border-slate-700/60"
                        >
                          Class {lvl}
                        </button>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectClass(track.classes[0], track.id)}
                      className={`w-full py-2 px-3 rounded-xl text-xs font-bold text-white ${track.buttonBg} transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm`}
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Open {track.title.split(' ')[0]}</span>
                      <ArrowRight className="w-3 h-3 ml-auto opacity-75" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

