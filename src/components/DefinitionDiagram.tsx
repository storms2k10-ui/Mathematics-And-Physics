import React from 'react';
import { MathText } from './MathText';

interface DefinitionDiagramProps {
  type:
    | 'argand_plane'
    | 'matrix_types'
    | 'vector_ops'
    | 'ap_gp_progression'
    | 'series_convergence'
    | 'probability_venn'
    | 'pascal_triangle'
    | 'function_mapping'
    | 'linear_programming'
    | 'trig_addition'
    | 'elevation_depression'
    | 'trig_graph'
    | 'tangent_secant_derivative'
    | 'integral_area_curve'
    | 'straight_line_slopes'
    | 'circle_geometry'
    | 'conics_parabola_ellipse_hyperbola'
    | 'vector_functions_differentiation'
    | 'maclaurin_series_approx'
    | 'sandwich_squeeze_theorem'
    | 'partial_derivatives_surface'
    | 'numerical_newton_secant'
    | 'sets_venn_subsets'
    | 'set_partitions_cells'
    | 'cartesian_product_relation'
    | 'set_representations_forms';
  title?: string;
}

export const DefinitionDiagram: React.FC<DefinitionDiagramProps> = ({ type }) => {
  switch (type) {
    case 'argand_plane':
      return (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-xs p-4 sm:p-5 text-slate-900 space-y-3">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                Argand Diagram &bull; Complex Plane
              </span>
            </div>
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
              <MathText text="z = a + ib = r e^{i\theta}" displayMode={false} />
            </span>
          </div>

          {/* White Mathematical SVG Canvas */}
          <div className="relative w-full h-56 bg-white rounded-xl border border-slate-200 overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 440 220" className="w-full h-full" fill="none">
              <defs>
                {/* Mathematical Graph Grid */}
                <pattern id="math-grid-argand" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                </pattern>
                {/* Sharp Coordinate Arrowheads */}
                <marker id="arrow-axis-argand" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                  <polygon points="0 0, 7 3.5, 0 7" fill="#0f172a" />
                </marker>
                <marker id="arrow-vector-z" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                  <polygon points="0 0, 7 3.5, 0 7" fill="#2563eb" />
                </marker>
                <marker id="arrow-vector-zbar" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                  <polygon points="0 0, 7 3.5, 0 7" fill="#059669" />
                </marker>
              </defs>

              {/* Grid Background */}
              <rect width="440" height="220" fill="url(#math-grid-argand)" />

              {/* Real Axis (Horizontal) */}
              <line x1="25" y1="110" x2="415" y2="110" stroke="#0f172a" strokeWidth="1.75" markerEnd="url(#arrow-axis-argand)" />
              {/* Imaginary Axis (Vertical) */}
              <line x1="180" y1="205" x2="180" y2="15" stroke="#0f172a" strokeWidth="1.75" markerEnd="url(#arrow-axis-argand)" />

              {/* Axis Labels */}
              <text x="360" y="102" fill="#0f172a" fontSize="12" fontWeight="700" fontFamily="serif">Re(z)</text>
              <text x="188" y="28" fill="#0f172a" fontSize="12" fontWeight="700" fontFamily="serif">Im(z)</text>
              <text x="164" y="125" fill="#475569" fontSize="11" fontFamily="serif">O(0,0)</text>

              {/* Axis Ticks */}
              {[-3, -2, -1, 1, 2, 3, 4, 5].map((t) => (
                <line key={`tx-${t}`} x1={180 + t * 40} y1="107" x2={180 + t * 40} y2="113" stroke="#475569" strokeWidth="1" />
              ))}
              {[-2, -1, 1, 2].map((t) => (
                <line key={`ty-${t}`} x1="177" y1={110 - t * 40} x2="183" y2={110 - t * 40} stroke="#475569" strokeWidth="1" />
              ))}

              {/* Point P(a, b) Vector z = a + ib */}
              {/* Coordinates: Origin (180, 110), P (320, 40) => a = 140, b = 70 */}
              {/* Projections to axes */}
              <line x1="320" y1="110" x2="320" y2="40" stroke="#94a3b8" strokeWidth="1.25" strokeDasharray="3 3" />
              <line x1="180" y1="40" x2="320" y2="40" stroke="#94a3b8" strokeWidth="1.25" strokeDasharray="3 3" />
              {/* Right angle marker at (320, 110) */}
              <rect x="310" y="100" width="10" height="10" fill="none" stroke="#94a3b8" strokeWidth="1" />

              {/* Vector OP */}
              <line x1="180" y1="110" x2="316" y2="42" stroke="#2563eb" strokeWidth="2.5" markerEnd="url(#arrow-vector-z)" />
              <circle cx="320" cy="40" r="4.5" fill="#2563eb" stroke="#ffffff" strokeWidth="1.5" />
              <text x="328" y="38" fill="#1d4ed8" fontSize="12" fontWeight="700" fontFamily="serif">P(a, b) = z = a + ib</text>

              {/* Projection Axis Labels */}
              <text x="245" y="125" fill="#334155" fontSize="11" fontWeight="600" fontFamily="serif">a = Re(z)</text>
              <text x="120" y="65" fill="#334155" fontSize="11" fontWeight="600" fontFamily="serif">b = Im(z)</text>

              {/* Modulus Label on Hypotenuse with crisp SVG radical */}
              <g transform="translate(210, 52)">
                <rect x="-4" y="-2" width="118" height="20" rx="4" fill="#ffffff" fillOpacity="0.85" />
                <text x="0" y="13" fill="#1d4ed8" fontSize="11" fontWeight="700" fontFamily="serif">|z| = r = </text>
                {/* Mathematical Square Root Radical with overline */}
                <path d="M 48,11 L 51,11 L 54,16 L 58,4 L 110,4" fill="none" stroke="#1d4ed8" strokeWidth="1.3" strokeLinecap="square" />
                <text x="60" y="13" fill="#1d4ed8" fontSize="11" fontWeight="700" fontFamily="serif">a² + b²</text>
              </g>

              {/* Argument Angle θ Arc */}
              <path d="M 225 110 A 45 45 0 0 0 220 90" stroke="#d97706" strokeWidth="2" fill="none" />
              <text x="232" y="100" fill="#b45309" fontSize="12" fontWeight="700" fontFamily="serif">&theta; = Arg(z)</text>

              {/* Conjugate Vector OP' (Mirrored across Real Axis) */}
              <line x1="320" y1="110" x2="320" y2="180" stroke="#94a3b8" strokeWidth="1.25" strokeDasharray="3 3" />
              <line x1="180" y1="110" x2="316" y2="178" stroke="#059669" strokeWidth="2.25" strokeDasharray="5 3" markerEnd="url(#arrow-vector-zbar)" />
              <circle cx="320" cy="180" r="4.5" fill="#059669" stroke="#ffffff" strokeWidth="1.5" />
              <text x="328" y="185" fill="#047857" fontSize="12" fontWeight="700" fontFamily="serif">P&apos;(a, -b) = z&#772; = a - ib</text>
              <text x="228" y="160" fill="#047857" fontSize="10" fontWeight="600" fontFamily="serif">Reflection across Real Axis</text>
            </svg>
          </div>

          {/* Mathematical Note */}
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-sans">
            <MathText text="In the complex plane, every $z = a + ib$ corresponds to a unique point $(a, b)$. The Euclidean distance $|z| = \sqrt{a^2 + b^2}$ defines the modulus, and reflection across the real horizontal axis gives the complex conjugate $\bar{z} = a - ib$." />
          </div>
        </div>
      );

    case 'trig_graph':
      return (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-xs p-4 sm:p-5 text-slate-900 space-y-3">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                Trigonometric Periodic Wave &bull; $y = \sin x$
              </span>
            </div>
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
              <MathText text="\text{Period } T = 2\pi, \quad \text{Amplitude } A = 1" displayMode={false} />
            </span>
          </div>

          {/* White Mathematical SVG Canvas */}
          <div className="relative w-full h-56 bg-white rounded-xl border border-slate-200 overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 440 220" className="w-full h-full" fill="none">
              <defs>
                <pattern id="math-grid-trig" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                </pattern>
                <marker id="arrow-axis-trig" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                  <polygon points="0 0, 7 3.5, 0 7" fill="#0f172a" />
                </marker>
              </defs>

              <rect width="440" height="220" fill="url(#math-grid-trig)" />

              {/* Amplitude Horizontal Bounds (+1 and -1) */}
              <line x1="20" y1="50" x2="420" y2="50" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="20" y1="170" x2="420" y2="170" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
              <text x="195" y="46" fill="#64748b" fontSize="11" fontWeight="bold">y = +1 (Maximum)</text>
              <text x="195" y="185" fill="#64748b" fontSize="11" fontWeight="bold">y = -1 (Minimum)</text>

              {/* Axes */}
              <line x1="20" y1="110" x2="420" y2="110" stroke="#0f172a" strokeWidth="1.75" markerEnd="url(#arrow-axis-trig)" />
              <line x1="220" y1="205" x2="220" y2="15" stroke="#0f172a" strokeWidth="1.75" markerEnd="url(#arrow-axis-trig)" />
              <text x="405" y="102" fill="#0f172a" fontSize="12" fontWeight="bold" fontFamily="serif">x (rad)</text>
              <text x="228" y="28" fill="#0f172a" fontSize="12" fontWeight="bold" fontFamily="serif">y</text>
              <text x="206" y="125" fill="#475569" fontSize="11">O(0,0)</text>

              {/* X-axis Radian Marks */}
              {/* Origin at x=220. Scale: pi = 80px */}
              {/* x = 60 (-2pi), 100 (-3pi/2), 140 (-pi), 180 (-pi/2), 220 (0), 260 (pi/2), 300 (pi), 340 (3pi/2), 380 (2pi) */}
              <text x="50" y="126" fill="#334155" fontSize="10" fontWeight="600">-2&pi;</text>
              <text x="128" y="126" fill="#334155" fontSize="10" fontWeight="600">-&pi;</text>
              <text x="292" y="126" fill="#334155" fontSize="10" fontWeight="600">+&pi;</text>
              <text x="370" y="126" fill="#334155" fontSize="10" fontWeight="600">+2&pi;</text>

              {/* Accurate Sine Curve Path across [-2pi, 2pi] */}
              <path
                d="M 60,110 C 80,40 120,40 140,110 C 160,180 200,180 220,110 C 240,40 280,40 300,110 C 320,180 360,180 380,110"
                stroke="#2563eb"
                strokeWidth="2.75"
                fill="none"
              />

              {/* Key Characteristic Points */}
              {[
                { x: 220, y: 110 },
                { x: 260, y: 50 },
                { x: 300, y: 110 },
                { x: 340, y: 170 },
                { x: 380, y: 110 },
              ].map((pt, i) => (
                <circle key={i} cx={pt.x} cy={pt.y} r="3.5" fill="#2563eb" stroke="#ffffff" strokeWidth="1.5" />
              ))}

              {/* Period Measurement Span (0 to 2pi) */}
              <line x1="220" y1="195" x2="380" y2="195" stroke="#d97706" strokeWidth="1.5" />
              <line x1="220" y1="190" x2="220" y2="200" stroke="#d97706" strokeWidth="1.5" />
              <line x1="380" y1="190" x2="380" y2="200" stroke="#d97706" strokeWidth="1.5" />
              <text x="268" y="208" fill="#b45309" fontSize="11" fontWeight="bold">Fundamental Period T = 2&pi;</text>

              {/* Curve Formula Label */}
              <text x="280" y="38" fill="#1d4ed8" fontSize="12" fontWeight="bold" fontFamily="serif">y = \sin(x)</text>
            </svg>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-sans">
            <MathText text="The fundamental period of $\sin(kx)$ and $\cos(kx)$ is $T = \frac{2\pi}{|k|}$. The wave continuously oscillates between its maximum value $+1$ and minimum value $-1$, with zeroes occurring at integral multiples of $\pi$ ($x = n\pi, \; n \in \mathbb{Z}$)." />
          </div>
        </div>
      );

    case 'vector_ops':
      return (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-xs p-4 sm:p-5 text-slate-900 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                Vector Geometry &bull; Dot &amp; Cross Products
              </span>
            </div>
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
              <MathText text="\vec{a} \times \vec{b} \perp \text{Plane}, \quad |\vec{a}\times\vec{b}| = |\vec{a}||\vec{b}|\sin\theta" displayMode={false} />
            </span>
          </div>

          <div className="relative w-full h-56 bg-white rounded-xl border border-slate-200 overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 440 220" className="w-full h-full" fill="none">
              <defs>
                <pattern id="math-grid-vec" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                </pattern>
                <marker id="arrow-vec-a" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                  <polygon points="0 0, 7 3.5, 0 7" fill="#2563eb" />
                </marker>
                <marker id="arrow-vec-b" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                  <polygon points="0 0, 7 3.5, 0 7" fill="#059669" />
                </marker>
                <marker id="arrow-vec-cross" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                  <polygon points="0 0, 7 3.5, 0 7" fill="#dc2626" />
                </marker>
              </defs>

              <rect width="440" height="220" fill="url(#math-grid-vec)" />

              {/* Spanned Parallelogram Area */}
              <polygon points="100,160 270,160 340,80 170,80" fill="#3b82f6" fillOpacity="0.1" stroke="#2563eb" strokeWidth="1.25" strokeDasharray="4 3" />

              {/* Vector a */}
              <line x1="100" y1="160" x2="264" y2="160" stroke="#2563eb" strokeWidth="3" markerEnd="url(#arrow-vec-a)" />
              <text x="180" y="180" fill="#1d4ed8" fontSize="12" fontWeight="bold" fontFamily="serif">Vector a</text>

              {/* Vector b */}
              <line x1="100" y1="160" x2="166" y2="84" stroke="#059669" strokeWidth="3" markerEnd="url(#arrow-vec-b)" />
              <text x="105" y="110" fill="#047857" fontSize="12" fontWeight="bold" fontFamily="serif">Vector b</text>

              {/* Angle θ Arc */}
              <path d="M 140 160 A 40 40 0 0 0 126 130" stroke="#d97706" strokeWidth="2" fill="none" />
              <text x="145" y="145" fill="#b45309" fontSize="12" fontWeight="bold" fontFamily="serif">&theta;</text>

              {/* Normal Cross Product Vector a x b (strictly vertical / orthogonal) */}
              <line x1="100" y1="160" x2="100" y2="35" stroke="#dc2626" strokeWidth="3" markerEnd="url(#arrow-vec-cross)" />
              <text x="108" y="42" fill="#b91c1c" fontSize="12" fontWeight="bold" fontFamily="serif">a &times; b &perp; Plane</text>
              {/* Right angle symbol at origin */}
              <rect x="100" y="145" width="15" height="15" fill="none" stroke="#dc2626" strokeWidth="1.5" />

              {/* Area formula inside parallelogram */}
              <text x="195" y="118" fill="#1e3a8a" fontSize="11" fontWeight="bold" fontFamily="serif">Parallelogram Area = |a &times; b| = |a||b|\sin&theta;</text>
              <text x="260" y="198" fill="#475569" fontSize="10">Projection of b on a = |b|\cos&theta;</text>
            </svg>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-sans">
            <MathText text="The dot product $\vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}|\cos\theta$ is a scalar (zero when perpendicular). The cross product $\vec{a} \times \vec{b} = (|\vec{a}||\vec{b}|\sin\theta)\hat{n}$ is a vector strictly orthogonal to the plane of $\vec{a}$ and $\vec{b}$." />
          </div>
        </div>
      );

    case 'linear_programming':
      return (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-xs p-4 sm:p-5 text-slate-900 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                Linear Programming &bull; Convex Feasible Region
              </span>
            </div>
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200">
              <MathText text="\text{Max } Z = ax + by \text{ at Corner Points}" displayMode={false} />
            </span>
          </div>

          <div className="relative w-full h-56 bg-white rounded-xl border border-slate-200 overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 440 220" className="w-full h-full" fill="none">
              <defs>
                <pattern id="math-grid-lp" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                </pattern>
                <marker id="arrow-axis-lp" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                  <polygon points="0 0, 7 3.5, 0 7" fill="#0f172a" />
                </marker>
              </defs>

              <rect width="440" height="220" fill="url(#math-grid-lp)" />

              {/* Axes x >= 0, y >= 0 */}
              <line x1="60" y1="180" x2="400" y2="180" stroke="#0f172a" strokeWidth="1.75" markerEnd="url(#arrow-axis-lp)" />
              <line x1="80" y1="200" x2="80" y2="20" stroke="#0f172a" strokeWidth="1.75" markerEnd="url(#arrow-axis-lp)" />
              <text x="385" y="195" fill="#0f172a" fontSize="12" fontWeight="bold" fontFamily="serif">x &ge; 0</text>
              <text x="88" y="32" fill="#0f172a" fontSize="12" fontWeight="bold" fontFamily="serif">y &ge; 0</text>

              {/* Constraint Lines */}
              {/* Line 1: x + y = 6  (Points: (80, 60) to (320, 180)) */}
              <line x1="70" y1="50" x2="340" y2="185" stroke="#ef4444" strokeWidth="2" />
              <text x="300" y="170" fill="#dc2626" fontSize="10" fontWeight="bold">x + y &le; 6</text>

              {/* Line 2: 2x + y = 8 (Points: (80, 20) to (240, 180)) */}
              <line x1="75" y1="20" x2="260" y2="190" stroke="#3b82f6" strokeWidth="2" />
              <text x="240" y="150" fill="#2563eb" fontSize="10" fontWeight="bold">2x + y &le; 8</text>

              {/* Feasible Region Bounded Polygon */}
              {/* O(80, 180), C(200, 180), B(160, 100), A(80, 60) */}
              <polygon points="80,180 80,60 160,100 200,180" fill="#10b981" fillOpacity="0.2" stroke="#059669" strokeWidth="2" />
              <text x="105" y="140" fill="#047857" fontSize="11" fontWeight="bold">Feasible Region</text>

              {/* Corner Points / Vertices */}
              <circle cx="80" cy="180" r="4.5" fill="#0f172a" />
              <text x="60" y="195" fill="#0f172a" fontSize="10" fontWeight="bold">O(0,0)</text>

              <circle cx="80" cy="60" r="4.5" fill="#2563eb" />
              <text x="40" y="58" fill="#1d4ed8" fontSize="10" fontWeight="bold">A(0, 6)</text>

              <circle cx="160" cy="100" r="6" fill="#dc2626" stroke="#ffffff" strokeWidth="2" />
              <text x="170" y="95" fill="#b91c1c" fontSize="11" fontWeight="bold">B(2, 4) [Optimal]</text>

              <circle cx="200" cy="180" r="4.5" fill="#2563eb" />
              <text x="205" y="195" fill="#1d4ed8" fontSize="10" fontWeight="bold">C(4, 0)</text>
            </svg>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-sans">
            <MathText text="According to the Fundamental Corner Point Theorem, the optimal solution of a linear programming objective function $Z = ax + by$ occurs at one of the vertices (corner points) of the convex feasible region." />
          </div>
        </div>
      );

    case 'ap_gp_progression':
      return (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-xs p-4 sm:p-5 text-slate-900 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                Sequences &amp; Progressions Dynamics
              </span>
            </div>
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
              <MathText text="\text{AP: } a_n = a + (n-1)d \quad\text{vs}\quad \text{GP: } a_n = a r^{n-1}" displayMode={false} />
            </span>
          </div>

          <div className="relative w-full h-56 bg-white rounded-xl border border-slate-200 overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 440 220" className="w-full h-full" fill="none">
              <defs>
                <pattern id="math-grid-ap" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                </pattern>
                <marker id="arrow-axis-ap" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                  <polygon points="0 0, 7 3.5, 0 7" fill="#0f172a" />
                </marker>
              </defs>

              <rect width="440" height="220" fill="url(#math-grid-ap)" />

              {/* Axes */}
              <line x1="40" y1="180" x2="410" y2="180" stroke="#0f172a" strokeWidth="1.75" markerEnd="url(#arrow-axis-ap)" />
              <line x1="60" y1="195" x2="60" y2="20" stroke="#0f172a" strokeWidth="1.75" markerEnd="url(#arrow-axis-ap)" />
              <text x="385" y="195" fill="#0f172a" fontSize="11" fontWeight="bold">Term Index (n)</text>
              <text x="35" y="28" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="serif">a_n</text>

              {/* Term Index Ticks */}
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <g key={n}>
                  <line x1={60 + n * 50} y1="177" x2={60 + n * 50} y2="183" stroke="#475569" strokeWidth="1" />
                  <text x={57 + n * 50} y="195" fill="#475569" fontSize="10" fontWeight="bold">n={n}</text>
                </g>
              ))}

              {/* AP Linear Points & Line (Slope d) */}
              <line x1="110" y1="150" x2="360" y2="75" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="4 3" />
              {[
                { x: 110, y: 150, t: 'a' },
                { x: 160, y: 135, t: 'a+d' },
                { x: 210, y: 120, t: 'a+2d' },
                { x: 260, y: 105, t: 'a+3d' },
                { x: 310, y: 90, t: 'a+4d' },
                { x: 360, y: 75, t: 'a+5d' },
              ].map((p, i) => (
                <g key={i}>
                  <circle cx={p.x} cy={p.y} r="4" fill="#2563eb" stroke="#ffffff" strokeWidth="1.5" />
                  <text x={p.x - 10} y={p.y - 8} fill="#1d4ed8" fontSize="9" fontWeight="bold">{p.t}</text>
                </g>
              ))}
              <text x="270" y="60" fill="#1d4ed8" fontSize="11" fontWeight="bold">AP: Linear Profile (+d)</text>

              {/* GP Exponential Curve & Points */}
              <path d="M 110,165 Q 260,160 360,30" stroke="#dc2626" strokeWidth="2.25" fill="none" />
              {[
                { x: 110, y: 165 },
                { x: 160, y: 160 },
                { x: 210, y: 148 },
                { x: 260, y: 120 },
                { x: 310, y: 80 },
                { x: 360, y: 30 },
              ].map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r="4" fill="#dc2626" stroke="#ffffff" strokeWidth="1.5" />
              ))}
              <text x="275" y="24" fill="#b91c1c" fontSize="11" fontWeight="bold">GP: Exponential Growth (&times;r)</text>
            </svg>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-sans">
            <MathText text="An Arithmetic Progression (AP) possesses a constant common difference $d = a_{n+1} - a_n$, producing linear growth. A Geometric Progression (GP) possesses a constant common ratio $r = \frac{a_{n+1}}{a_n}$, producing exponential growth." />
          </div>
        </div>
      );

    case 'series_convergence':
      return (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-xs p-4 sm:p-5 text-slate-900 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                Infinite Series Asymptotic Convergence
              </span>
            </div>
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200">
              <MathText text="S_\infty = \frac{a}{1 - r} \quad (|r| < 1)" displayMode={false} />
            </span>
          </div>

          <div className="relative w-full h-56 bg-white rounded-xl border border-slate-200 overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 440 220" className="w-full h-full" fill="none">
              <defs>
                <pattern id="math-grid-series" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                </pattern>
                <marker id="arrow-axis-series" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                  <polygon points="0 0, 7 3.5, 0 7" fill="#0f172a" />
                </marker>
              </defs>

              <rect width="440" height="220" fill="url(#math-grid-series)" />

              {/* Axes */}
              <line x1="40" y1="180" x2="410" y2="180" stroke="#0f172a" strokeWidth="1.75" markerEnd="url(#arrow-axis-series)" />
              <line x1="60" y1="195" x2="60" y2="20" stroke="#0f172a" strokeWidth="1.75" markerEnd="url(#arrow-axis-series)" />
              <text x="360" y="195" fill="#0f172a" fontSize="11" fontWeight="bold">Number of Terms (n)</text>
              <text x="30" y="30" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="serif">S_n</text>

              {/* Horizontal Asymptote S_infinity */}
              <line x1="60" y1="55" x2="410" y2="55" stroke="#059669" strokeWidth="1.75" strokeDasharray="5 4" />
              <text x="240" y="48" fill="#047857" fontSize="11" fontWeight="bold" fontFamily="serif">Horizontal Limit: S_&infin; = a / (1 - r)</text>

              {/* Partial Sums Progression Curve */}
              <path d="M 60,180 Q 180,68 400,56" stroke="#2563eb" strokeWidth="2.5" fill="none" />
              {[
                { x: 90, y: 145, label: 'S₁' },
                { x: 140, y: 105, label: 'S₂' },
                { x: 200, y: 80, label: 'S₃' },
                { x: 270, y: 66, label: 'S₄' },
                { x: 340, y: 59, label: 'S₅' },
              ].map((pt, i) => (
                <g key={i}>
                  <circle cx={pt.x} cy={pt.y} r="4" fill="#2563eb" stroke="#ffffff" strokeWidth="1.5" />
                  <text x={pt.x - 5} y={pt.y + 16} fill="#1d4ed8" fontSize="10" fontWeight="bold">{pt.label}</text>
                </g>
              ))}

              <text x="80" y="38" fill="#d97706" fontSize="11" fontWeight="bold">Converges strictly for |r| &lt; 1</text>
            </svg>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-sans">
            <MathText text="For an infinite geometric progression with $|r| < 1$, as $n \to \infty$, the remainder $r^n \to 0$, causing the partial sums to converge to $S_\infty = \frac{a}{1-r}$. If $|r| \ge 1$, the series is divergent." />
          </div>
        </div>
      );

    case 'elevation_depression':
      return (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-xs p-4 sm:p-5 text-slate-900 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                Angles of Elevation &amp; Depression Geometry
              </span>
            </div>
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
              <MathText text="\tan\alpha = \frac{\text{Height } h}{\text{Distance } d}" displayMode={false} />
            </span>
          </div>

          <div className="relative w-full h-56 bg-white rounded-xl border border-slate-200 overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 440 220" className="w-full h-full" fill="none">
              <defs>
                <pattern id="math-grid-elev" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                </pattern>
              </defs>

              <rect width="440" height="220" fill="url(#math-grid-elev)" />

              {/* Observer Eye Position A */}
              <circle cx="80" cy="110" r="5" fill="#2563eb" />
              <text x="35" y="105" fill="#1d4ed8" fontSize="11" fontWeight="bold">Observer (A)</text>

              {/* Horizontal Reference Line of Sight */}
              <line x1="80" y1="110" x2="360" y2="110" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 4" />
              <text x="180" y="102" fill="#64748b" fontSize="10" fontWeight="bold">Horizontal Line of Sight</text>

              {/* Line of Sight UP (Angle of Elevation α) */}
              <line x1="80" y1="110" x2="340" y2="35" stroke="#059669" strokeWidth="2.5" />
              <circle cx="340" cy="35" r="5" fill="#059669" />
              <text x="350" y="38" fill="#047857" fontSize="11" fontWeight="bold">Top of Tower (C)</text>

              {/* Elevation Arc α */}
              <path d="M 130 110 A 50 50 0 0 0 126 95" stroke="#059669" strokeWidth="2" fill="none" />
              <text x="135" y="100" fill="#047857" fontSize="11" fontWeight="bold">&alpha; (Elevation)</text>

              {/* Tower Vertical Line */}
              <line x1="340" y1="35" x2="340" y2="185" stroke="#dc2626" strokeWidth="2.5" />
              <text x="350" y="125" fill="#b91c1c" fontSize="11" fontWeight="bold">Height (h)</text>
              {/* Right angle symbol at ground */}
              <rect x="325" y="170" width="15" height="15" fill="none" stroke="#dc2626" strokeWidth="1.5" />

              {/* Line of Sight DOWN (Angle of Depression β) */}
              <line x1="80" y1="110" x2="260" y2="185" stroke="#d97706" strokeWidth="2" />
              <circle cx="260" cy="185" r="5" fill="#d97706" />
              <text x="268" y="198" fill="#b45309" fontSize="10" fontWeight="bold">Ground Object (D)</text>

              {/* Depression Arc β */}
              <path d="M 130 110 A 50 50 0 0 1 125 130" stroke="#d97706" strokeWidth="2" fill="none" />
              <text x="135" y="132" fill="#b45309" fontSize="11" fontWeight="bold">&beta; (Depression)</text>

              {/* Ground Baseline */}
              <line x1="60" y1="185" x2="360" y2="185" stroke="#0f172a" strokeWidth="1.75" />
              <text x="160" y="200" fill="#0f172a" fontSize="11" fontWeight="bold">Horizontal Baseline Distance (d)</text>
            </svg>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-sans">
            <MathText text="The angle of elevation is measured looking upward from the horizontal, while the angle of depression is measured looking downward. By alternate interior angles across parallel lines, the angle of depression equals the angle of elevation from the object back to the observer." />
          </div>
        </div>
      );

    case 'function_mapping':
      return (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-xs p-4 sm:p-5 text-slate-900 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                Function Mapping &bull; Domain, Codomain &amp; Range
              </span>
            </div>
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200">
              <MathText text="f: A \to B, \quad f^{-1}: B \to A \iff \text{Bijective}" displayMode={false} />
            </span>
          </div>

          <div className="relative w-full h-56 bg-white rounded-xl border border-slate-200 overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 440 220" className="w-full h-full" fill="none">
              <defs>
                <pattern id="math-grid-fn" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                </pattern>
                <marker id="arrow-map-fn" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                  <polygon points="0 0, 7 3.5, 0 7" fill="#2563eb" />
                </marker>
              </defs>

              <rect width="440" height="220" fill="url(#math-grid-fn)" />

              {/* Set A (Domain) Oval */}
              <ellipse cx="110" cy="110" rx="60" ry="75" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
              <text x="80" y="55" fill="#1d4ed8" fontSize="12" fontWeight="bold">Domain (Set A)</text>

              {/* Domain Elements */}
              {[
                { x: 110, y: 80, label: 'x₁' },
                { x: 110, y: 110, label: 'x₂' },
                { x: 110, y: 140, label: 'x₃' },
              ].map((el, i) => (
                <g key={i}>
                  <circle cx={el.x} cy={el.y} r="4" fill="#2563eb" />
                  <text x={el.x - 18} y={el.y + 4} fill="#1e40af" fontSize="11" fontWeight="bold">{el.label}</text>
                </g>
              ))}

              {/* Set B (Codomain) Oval */}
              <ellipse cx="330" cy="110" rx="70" ry="80" fill="#f0fdf4" stroke="#059669" strokeWidth="2" />
              <text x="295" y="50" fill="#047857" fontSize="12" fontWeight="bold">Codomain (Set B)</text>

              {/* Range Sub-region */}
              <ellipse cx="330" cy="110" rx="45" ry="55" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="3 3" />
              <text x="305" y="180" fill="#15803d" fontSize="10" fontWeight="bold">Range f(A)</text>

              {/* Codomain Elements */}
              {[
                { x: 330, y: 80, label: 'y₁ = f(x₁)' },
                { x: 330, y: 110, label: 'y₂ = f(x₂)' },
                { x: 330, y: 140, label: 'y₃ = f(x₃)' },
              ].map((el, i) => (
                <g key={i}>
                  <circle cx={el.x} cy={el.y} r="4" fill="#059669" />
                  <text x={el.x + 10} y={el.y + 4} fill="#065f46" fontSize="11" fontWeight="bold">{el.label}</text>
                </g>
              ))}

              {/* Mapping Directed Arrows */}
              <line x1="116" y1="80" x2="322" y2="80" stroke="#2563eb" strokeWidth="1.75" markerEnd="url(#arrow-map-fn)" />
              <line x1="116" y1="110" x2="322" y2="110" stroke="#2563eb" strokeWidth="1.75" markerEnd="url(#arrow-map-fn)" />
              <line x1="116" y1="140" x2="322" y2="140" stroke="#2563eb" strokeWidth="1.75" markerEnd="url(#arrow-map-fn)" />
              <text x="205" y="70" fill="#1d4ed8" fontSize="12" fontWeight="bold">f: x &rarr; y</text>
            </svg>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-sans">
            <MathText text="A function $f: A \to B$ is bijective if it is both one-to-one (injective) and onto (surjective). A function possesses a well-defined two-sided inverse $f^{-1}: B \to A$ if and only if it is strictly bijective." />
          </div>
        </div>
      );

    case 'probability_venn':
      return (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-xs p-4 sm:p-5 text-slate-900 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-600" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                Probability Sample Space &amp; Events
              </span>
            </div>
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-200">
              <MathText text="P(A \cup B) = P(A) + P(B) - P(A \cap B)" displayMode={false} />
            </span>
          </div>

          <div className="relative w-full h-56 bg-white rounded-xl border border-slate-200 overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 440 220" className="w-full h-full" fill="none">
              {/* Universal Sample Space S Box */}
              <rect x="40" y="25" width="360" height="170" rx="14" fill="#faf5ff" stroke="#7c3aed" strokeWidth="2" />
              <text x="60" y="50" fill="#6d28d9" fontSize="13" fontWeight="bold">Universal Sample Space (S), P(S) = 1</text>

              {/* Event Circle A */}
              <circle cx="175" cy="115" r="55" fill="#3b82f6" fillOpacity="0.2" stroke="#2563eb" strokeWidth="2" />
              <text x="140" y="118" fill="#1d4ed8" fontSize="12" fontWeight="bold">Event A</text>

              {/* Event Circle B */}
              <circle cx="255" cy="115" r="55" fill="#10b981" fillOpacity="0.2" stroke="#059669" strokeWidth="2" />
              <text x="270" y="118" fill="#047857" fontSize="12" fontWeight="bold">Event B</text>

              {/* Intersection Label */}
              <text x="198" y="118" fill="#4338ca" fontSize="11" fontWeight="bold">A &cap; B</text>

              {/* Complement Label in Space */}
              <text x="60" y="175" fill="#9333ea" fontSize="11" fontWeight="bold">Complement (A &cup; B)&apos;</text>
              <text x="260" y="175" fill="#64748b" fontSize="10">P(A&apos;) = 1 - P(A)</text>
            </svg>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-sans">
            <MathText text="The sample space $S$ contains all possible outcomes of a random experiment ($P(S) = 1$). For any two events $A, B \subseteq S$, the addition rule gives $P(A \cup B) = P(A) + P(B) - P(A \cap B)$." />
          </div>
        </div>
      );

    case 'pascal_triangle':
      return (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-xs p-4 sm:p-5 text-slate-900 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                Pascal&apos;s Triangle &bull; Binomial Coefficients
              </span>
            </div>
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200">
              <MathText text="\binom{n-1}{r-1} + \binom{n-1}{r} = \binom{n}{r}" displayMode={false} />
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center font-mono text-xs sm:text-sm space-y-1.5 text-slate-800">
            <div className="font-bold text-slate-600"><span className="text-[11px] text-slate-400 font-sans mr-2">n = 0:</span> 1</div>
            <div className="font-bold text-blue-700"><span className="text-[11px] text-slate-400 font-sans mr-2">n = 1:</span> 1 &nbsp;&nbsp;&nbsp; 1</div>
            <div className="font-bold text-emerald-700"><span className="text-[11px] text-slate-400 font-sans mr-2">n = 2:</span> 1 &nbsp;&nbsp;&nbsp; 2 &nbsp;&nbsp;&nbsp; 1</div>
            <div className="font-bold text-amber-700"><span className="text-[11px] text-slate-400 font-sans mr-2">n = 3:</span> 1 &nbsp;&nbsp;&nbsp; 3 &nbsp;&nbsp;&nbsp; 3 &nbsp;&nbsp;&nbsp; 1</div>
            <div className="font-bold text-purple-700"><span className="text-[11px] text-slate-400 font-sans mr-2">n = 4:</span> 1 &nbsp;&nbsp;&nbsp; 4 &nbsp;&nbsp;&nbsp; 6 &nbsp;&nbsp;&nbsp; 4 &nbsp;&nbsp;&nbsp; 1</div>
            <div className="font-bold text-rose-700"><span className="text-[11px] text-slate-400 font-sans mr-2">n = 5:</span> 1 &nbsp;&nbsp;&nbsp; 5 &nbsp;&nbsp;&nbsp; 10 &nbsp;&nbsp;&nbsp; 10 &nbsp;&nbsp;&nbsp; 5 &nbsp;&nbsp;&nbsp; 1</div>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-sans">
            <MathText text="Each entry in Pascal's triangle is the sum of the two numbers immediately above it: $\binom{n-1}{r-1} + \binom{n-1}{r} = \binom{n}{r}$. The general term of $(a+b)^n$ is $T_{r+1} = \binom{n}{r} a^{n-r} b^r$." />
          </div>
        </div>
      );

    case 'matrix_types':
      return (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-xs p-4 sm:p-5 text-slate-900 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                Matrix Classification &amp; Determinants
              </span>
            </div>
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
              <MathText text="\det(A) = ad - bc, \quad A^{-1} = \frac{\operatorname{adj}(A)}{\det(A)}" displayMode={false} />
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs">
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex flex-col justify-between">
              <span className="text-[11px] text-blue-700 font-bold uppercase block mb-1">Identity Matrix</span>
              <div className="py-2 bg-white rounded-lg border border-slate-200 flex items-center justify-center">
                <MathText text="I = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}" displayMode={false} />
              </div>
              <span className="text-[10px] text-slate-500 mt-1.5 block">
                <MathText text="a_{ii} = 1, \; a_{ij} = 0 \; (i \ne j)" displayMode={false} />
              </span>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex flex-col justify-between">
              <span className="text-[11px] text-amber-700 font-bold uppercase block mb-1">Symmetric Matrix</span>
              <div className="py-2 bg-white rounded-lg border border-slate-200 flex items-center justify-center">
                <MathText text="A = \begin{bmatrix} a & h \\ h & b \end{bmatrix}" displayMode={false} />
              </div>
              <span className="text-[10px] text-slate-500 mt-1.5 block">
                <MathText text="a_{ij} = a_{ji} \implies A^T = A" displayMode={false} />
              </span>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex flex-col justify-between">
              <span className="text-[11px] text-rose-700 font-bold uppercase block mb-1">Skew-Symmetric</span>
              <div className="py-2 bg-white rounded-lg border border-slate-200 flex items-center justify-center">
                <MathText text="A = \begin{bmatrix} 0 & -k \\ k & 0 \end{bmatrix}" displayMode={false} />
              </div>
              <span className="text-[10px] text-slate-500 mt-1.5 block">
                <MathText text="A^T = -A \implies a_{ii} = 0" displayMode={false} />
              </span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-sans">
            <MathText text="A square matrix $A$ is singular if $\det(A) = 0$ (no inverse exists) and non-singular if $\det(A) \ne 0$. For a skew-symmetric matrix, $a_{ii} = -a_{ii} \implies 2a_{ii} = 0 \implies a_{ii} = 0$ along the principal diagonal." />
          </div>
        </div>
      );

    case 'trig_addition':
      return (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-xs p-4 sm:p-5 text-slate-900 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                Compound Angle Trigonometric Identities
              </span>
            </div>
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
              <MathText text="\sin(A \pm B), \quad \cos(A \pm B)" displayMode={false} />
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            {/* Visual Angle Geometry on Left */}
            <div className="md:col-span-5 h-48 bg-white rounded-xl border border-slate-200 overflow-hidden flex items-center justify-center p-2">
              <svg viewBox="0 0 220 180" className="w-full h-full" fill="none">
                {/* Baseline Axis */}
                <line x1="25" y1="140" x2="200" y2="140" stroke="#0f172a" strokeWidth="1.75" />
                <line x1="25" y1="140" x2="185" y2="70" stroke="#2563eb" strokeWidth="2.5" />
                <line x1="25" y1="140" x2="135" y2="25" stroke="#059669" strokeWidth="2.5" />

                {/* Arc for Angle A */}
                <path d="M 75 140 A 50 50 0 0 0 68 123" stroke="#2563eb" strokeWidth="2" fill="none" />
                <text x="78" y="132" fill="#1d4ed8" fontSize="11" fontWeight="bold">Angle A</text>

                {/* Arc for Angle B */}
                <path d="M 68 123 A 50 50 0 0 0 54 98" stroke="#059669" strokeWidth="2" fill="none" />
                <text x="66" y="108" fill="#047857" fontSize="11" fontWeight="bold">Angle B</text>

                <circle cx="25" cy="140" r="4" fill="#0f172a" />
                <text x="12" y="156" fill="#475569" fontSize="11" fontWeight="bold">O</text>
                <text x="188" y="70" fill="#2563eb" fontSize="10" fontWeight="bold">Ray 1</text>
                <text x="138" y="22" fill="#059669" fontSize="10" fontWeight="bold">Ray 2</text>
              </svg>
            </div>

            {/* LaTeX Mathematical Script Cards on Right */}
            <div className="md:col-span-7 space-y-2 text-xs">
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-[10px] uppercase font-bold text-slate-500 block mb-0.5">Sum &amp; Difference Formulas</span>
                <div className="space-y-1 font-serif text-slate-800">
                  <div><MathText text="\sin(A \pm B) = \sin A\cos B \pm \cos A\sin B" displayMode={false} /></div>
                  <div><MathText text="\cos(A \pm B) = \cos A\cos B \mp \sin A\sin B" displayMode={false} /></div>
                </div>
              </div>

              <div className="p-2.5 bg-blue-50/60 rounded-lg border border-blue-200/70">
                <span className="text-[10px] uppercase font-bold text-blue-700 block mb-0.5">Double Angle Identities</span>
                <div className="space-y-1 font-serif text-blue-950">
                  <div><MathText text="\sin 2A = 2\sin A\cos A" displayMode={false} /></div>
                  <div><MathText text="\cos 2A = \cos^2 A - \sin^2 A = 1 - 2\sin^2 A" displayMode={false} /></div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-sans">
            <MathText text="The fundamental addition identities are established geometrically via Euclidean distance on the unit circle ($\cos(\alpha - \beta)$). Double-angle, half-angle, and sum-to-product formulas follow directly as immediate consequences." />
          </div>
        </div>
      );

    case 'tangent_secant_derivative':
      return (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-xs p-4 sm:p-5 text-slate-900 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                Derivative by First Principles &bull; Tangent vs Secant
              </span>
            </div>
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
              <MathText text="f'(x) = \lim_{\Delta x \to 0} \frac{\Delta y}{\Delta x}" displayMode={false} />
            </span>
          </div>

          <div className="relative w-full h-64 bg-white rounded-xl border border-slate-200 overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 460 240" className="w-full h-full" fill="none">
              <defs>
                <pattern id="math-grid-diff" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                </pattern>
                <marker id="arrow-axis-diff" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="#0f172a" />
                </marker>
                <marker id="arrow-tan" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="#059669" />
                </marker>
              </defs>

              <rect width="460" height="240" fill="url(#math-grid-diff)" />

              {/* Axes */}
              <line x1="30" y1="210" x2="430" y2="210" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#arrow-axis-diff)" />
              <line x1="60" y1="230" x2="60" y2="15" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#arrow-axis-diff)" />
              <text x="420" y="200" fill="#0f172a" fontSize="11" fontWeight="700">x</text>
              <text x="70" y="25" fill="#0f172a" fontSize="11" fontWeight="700">y</text>

              {/* Curve y = f(x) */}
              <path d="M 70,195 C 130,190 200,160 280,95 C 340,45 380,25 410,20" stroke="#2563eb" strokeWidth="2.5" />
              <text x="375" y="45" fill="#2563eb" fontSize="12" fontWeight="bold">y = f(x)</text>

              {/* Points P(x, f(x)) at (160, 165) and Q(x+h, f(x+h)) at (280, 95) */}
              {/* Projections */}
              <line x1="160" y1="210" x2="160" y2="165" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="280" y1="210" x2="280" y2="95" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="60" y1="165" x2="160" y2="165" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="60" y1="95" x2="280" y2="95" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />

              {/* Increments delta x and delta y */}
              <line x1="160" y1="165" x2="280" y2="165" stroke="#64748b" strokeWidth="1.25" strokeDasharray="2 2" />
              <line x1="280" y1="165" x2="280" y2="95" stroke="#64748b" strokeWidth="1.25" strokeDasharray="2 2" />
              <text x="210" y="180" fill="#475569" fontSize="10" fontWeight="bold">Δx = h</text>
              <text x="288" y="135" fill="#475569" fontSize="10" fontWeight="bold">Δy</text>

              {/* Secant Line (through P and Q) */}
              <line x1="80" y1="210" x2="360" y2="50" stroke="#f59e0b" strokeWidth="1.75" strokeDasharray="4 3" />
              <text x="340" y="70" fill="#b45309" fontSize="10" fontWeight="bold">Secant: Slope = Δy/Δx</text>

              {/* Tangent Line at P */}
              <line x1="90" y1="215" x2="270" y2="85" stroke="#059669" strokeWidth="2.5" markerEnd="url(#arrow-tan)" />
              <text x="120" y="125" fill="#047857" fontSize="11" fontWeight="bold">Tangent: m = f'(x)</text>

              {/* Points */}
              <circle cx="160" cy="165" r="4" fill="#2563eb" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="280" cy="95" r="4" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
              <text x="135" y="158" fill="#1e3a8a" fontSize="11" fontWeight="bold">P(x, f(x))</text>
              <text x="290" y="90" fill="#b45309" fontSize="11" fontWeight="bold">Q(x+h, f(x+h))</text>

              {/* Axis markers */}
              <text x="155" y="224" fill="#334155" fontSize="10" fontWeight="600">x</text>
              <text x="268" y="224" fill="#334155" fontSize="10" fontWeight="600">x + h</text>
            </svg>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-sans">
            <MathText text="As the increment $h = \Delta x \to 0$, point $Q$ slides along the curve toward $P$. The secant line rotates and coincides with the **tangent line**, giving the derivative $f'(x) = \lim_{h \to 0}\frac{f(x+h) - f(x)}{h}$." />
          </div>
        </div>
      );

    case 'integral_area_curve':
      return (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-xs p-4 sm:p-5 text-slate-900 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-600" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                Definite Integral &bull; Area Under a Curve
              </span>
            </div>
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-cyan-50 text-cyan-700 border border-cyan-200">
              <MathText text="A = \int_a^b f(x)\,dx = F(b) - F(a)" displayMode={false} />
            </span>
          </div>

          <div className="relative w-full h-64 bg-white rounded-xl border border-slate-200 overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 460 240" className="w-full h-full" fill="none">
              <defs>
                <pattern id="math-grid-int" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                </pattern>
                <linearGradient id="area-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.05" />
                </linearGradient>
                <marker id="arrow-axis-int" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="#0f172a" />
                </marker>
              </defs>

              <rect width="460" height="240" fill="url(#math-grid-int)" />

              {/* Axes */}
              <line x1="30" y1="200" x2="430" y2="200" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#arrow-axis-int)" />
              <line x1="60" y1="225" x2="60" y2="20" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#arrow-axis-int)" />
              <text x="420" y="190" fill="#0f172a" fontSize="11" fontWeight="700">x</text>
              <text x="70" y="30" fill="#0f172a" fontSize="11" fontWeight="700">y</text>

              {/* Shaded Area under Curve between a = 120 and b = 340 */}
              <path
                d="M 120,200 L 120,135 C 170,80 260,70 340,120 L 340,200 Z"
                fill="url(#area-grad)"
                stroke="#0891b2"
                strokeWidth="1.25"
              />

              {/* Differential Strip dx at x = 220 */}
              <rect x="220" y="76" width="18" height="124" fill="#0284c7" fillOpacity="0.3" stroke="#0284c7" strokeWidth="1" strokeDasharray="2 2" />
              <text x="217" y="140" fill="#0369a1" fontSize="9" fontWeight="bold">y dx</text>
              <text x="220" y="215" fill="#0369a1" fontSize="10" fontWeight="bold">dx</text>

              {/* Curve y = f(x) */}
              <path d="M 80,170 C 130,120 180,75 260,70 C 310,68 360,130 400,160" stroke="#0284c7" strokeWidth="2.5" />
              <text x="350" y="65" fill="#0284c7" fontSize="12" fontWeight="bold">y = f(x)</text>

              {/* Area label */}
              <text x="180" y="160" fill="#0e7490" fontSize="14" fontWeight="800" fontFamily="serif">Area = ∫ f(x) dx</text>

              {/* Boundary points a and b */}
              <circle cx="120" cy="135" r="3.5" fill="#0891b2" />
              <circle cx="340" cy="120" r="3.5" fill="#0891b2" />
              <line x1="120" y1="200" x2="120" y2="135" stroke="#0891b2" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="340" y1="200" x2="340" y2="120" stroke="#0891b2" strokeWidth="1.5" strokeDasharray="3 3" />
              <text x="115" y="218" fill="#0f172a" fontSize="12" fontWeight="bold">x = a</text>
              <text x="335" y="218" fill="#0f172a" fontSize="12" fontWeight="bold">x = b</text>
            </svg>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-sans">
            <MathText text="The definite integral represents the infinite sum of infinitesimal rectangular strips of width $dx$ and height $y = f(x)$ across the interval $[a, b]$, proving the connection between accumulation and anti-derivatives." />
          </div>
        </div>
      );

    case 'straight_line_slopes':
      return (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-xs p-4 sm:p-5 text-slate-900 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                Straight Lines &bull; Parallel &amp; Perpendicular Slopes
              </span>
            </div>
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-rose-50 text-rose-700 border border-rose-200">
              <MathText text="l_1 \parallel l_2 \iff m_1 = m_2, \quad l_1 \perp l_3 \iff m_1 m_3 = -1" displayMode={false} />
            </span>
          </div>

          <div className="relative w-full h-64 bg-white rounded-xl border border-slate-200 overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 460 240" className="w-full h-full" fill="none">
              <defs>
                <pattern id="math-grid-line" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                </pattern>
                <marker id="arrow-axis-line" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="#0f172a" />
                </marker>
              </defs>

              <rect width="460" height="240" fill="url(#math-grid-line)" />

              {/* Axes */}
              <line x1="30" y1="120" x2="430" y2="120" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#arrow-axis-line)" />
              <line x1="200" y1="230" x2="200" y2="15" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#arrow-axis-line)" />
              <text x="415" y="110" fill="#0f172a" fontSize="11" fontWeight="700">x</text>
              <text x="210" y="25" fill="#0f172a" fontSize="11" fontWeight="700">y</text>

              {/* Line 1: y = 0.6x + 20 -> (50, 180) to (370, 40) */}
              <line x1="50" y1="180" x2="370" y2="40" stroke="#2563eb" strokeWidth="2.5" />
              <text x="350" y="32" fill="#1d4ed8" fontSize="11" fontWeight="bold">l₁ : Slope m₁ = 0.6</text>

              {/* Line 2 (Parallel): y = 0.6x - 30 -> (50, 230) to (370, 90) */}
              <line x1="70" y1="230" x2="390" y2="90" stroke="#0284c7" strokeWidth="2" strokeDasharray="6 3" />
              <text x="375" y="105" fill="#0369a1" fontSize="11" fontWeight="bold">l₂ : m₂ = m₁ (Parallel)</text>

              {/* Line 3 (Perpendicular): Slope m3 = -1/0.6 = -1.67, passing through (230, 100) */}
              <line x1="170" y1="10" x2="290" y2="210" stroke="#e11d48" strokeWidth="2.5" />
              <text x="270" y="225" fill="#be123c" fontSize="11" fontWeight="bold">l₃ : m₃ = -1/m₁ (Perpendicular)</text>

              {/* Right Angle Symbol at intersection (230, 100) */}
              <rect x="230" y="90" width="12" height="12" fill="none" stroke="#be123c" strokeWidth="1.5" transform="rotate(-31 230 100)" />
              <circle cx="230" cy="100" r="3.5" fill="#0f172a" />

              {/* Angle theta with x-axis */}
              <path d="M 230,120 A 30 30 0 0 0 255,108" fill="none" stroke="#2563eb" strokeWidth="1.5" />
              <text x="260" y="118" fill="#1d4ed8" fontSize="10" fontWeight="bold">θ₁</text>
            </svg>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-sans">
            <MathText text="Slope represents rate of rise over run $m = \tan\theta = \frac{y_2 - y_1}{x_2 - x_1}$. Parallel lines share equal slopes ($m_1 = m_2$), while perpendicular lines multiply to $-1$ ($m_1 m_2 = -1$)." />
          </div>
        </div>
      );

    case 'circle_geometry':
      return (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-xs p-4 sm:p-5 text-slate-900 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-600" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                Circle Geometry &bull; Center, Radius, Tangent &amp; Secant
              </span>
            </div>
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-teal-50 text-teal-700 border border-teal-200">
              <MathText text="(x - h)^2 + (y - k)^2 = r^2, \quad \text{Tangent} \perp \text{Radius}" displayMode={false} />
            </span>
          </div>

          <div className="relative w-full h-64 bg-white rounded-xl border border-slate-200 overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 460 240" className="w-full h-full" fill="none">
              <defs>
                <pattern id="math-grid-circ" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                </pattern>
                <marker id="arrow-axis-circ" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="#0f172a" />
                </marker>
              </defs>

              <rect width="460" height="240" fill="url(#math-grid-circ)" />

              {/* Axes */}
              <line x1="30" y1="200" x2="430" y2="200" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#arrow-axis-circ)" />
              <line x1="60" y1="225" x2="60" y2="15" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#arrow-axis-circ)" />
              <text x="415" y="190" fill="#0f172a" fontSize="11" fontWeight="700">x</text>
              <text x="70" y="30" fill="#0f172a" fontSize="11" fontWeight="700">y</text>

              {/* Circle centered at C(220, 110) with r = 70 */}
              <circle cx="220" cy="110" r="70" stroke="#0d9488" strokeWidth="2.5" fill="#0d9488" fillOpacity="0.05" />

              {/* Center point C(h, k) */}
              <circle cx="220" cy="110" r="4" fill="#0f172a" />
              <text x="180" y="105" fill="#0f172a" fontSize="11" fontWeight="bold">C(h, k)</text>

              {/* Diameter Line */}
              <line x1="150" y1="110" x2="290" y2="110" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 3" />
              <text x="165" y="125" fill="#64748b" fontSize="10" fontWeight="bold">Diameter d = 2r</text>

              {/* Radius to point of contact P(270, 60) -> dx = 50, dy = -50 */}
              <line x1="220" y1="110" x2="269" y2="61" stroke="#0d9488" strokeWidth="2" />
              <text x="248" y="95" fill="#0f766e" fontSize="11" fontWeight="bold">Radius r</text>

              {/* Tangent Line at P(269, 61) perpendicular to radius */}
              <line x1="210" y1="2" x2="330" y2="122" stroke="#e11d48" strokeWidth="2.5" />
              <circle cx="269" cy="61" r="4" fill="#e11d48" stroke="#ffffff" strokeWidth="1.5" />
              <text x="278" y="55" fill="#be123c" fontSize="11" fontWeight="bold">P(x₁, y₁) [Tangent Point]</text>
              <text x="325" y="135" fill="#be123c" fontSize="11" fontWeight="bold">Tangent (⊥ Radius)</text>

              {/* Right angle symbol at P */}
              <rect x="260" y="53" width="10" height="10" fill="none" stroke="#e11d48" strokeWidth="1.25" transform="rotate(45 269 61)" />

              {/* Secant Line intersecting at A(160, 75) and B(260, 165) */}
              <line x1="120" y1="40" x2="300" y2="200" stroke="#f59e0b" strokeWidth="1.75" strokeDasharray="5 3" />
              <circle cx="160" cy="76" r="3.5" fill="#f59e0b" />
              <circle cx="260" cy="165" r="3.5" fill="#f59e0b" />
              <text x="90" y="50" fill="#b45309" fontSize="10" fontWeight="bold">Secant (2 Points A, B)</text>
            </svg>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-sans">
            <MathText text="A circle represents all points equidistant from the center $(h, k)$. Tangent lines touch at exactly one point and are strictly **perpendicular** to the radial vector ($\text{Tangent} \perp \text{Radius}$)." />
          </div>
        </div>
      );

    case 'conics_parabola_ellipse_hyperbola':
      return (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-xs p-4 sm:p-5 text-slate-900 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                Conic Sections &bull; Parabola, Ellipse &amp; Hyperbola
              </span>
            </div>
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200">
              <MathText text="e = 1 \text{ (Parabola)}, \; e < 1 \text{ (Ellipse)}, \; e > 1 \text{ (Hyperbola)}" displayMode={false} />
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Panel 1: Parabola */}
            <div className="p-3 bg-slate-50/70 rounded-xl border border-slate-200 text-center space-y-2 flex flex-col justify-between">
              <div className="text-xs font-bold text-indigo-900">
                <MathText text="\text{Parabola: } y^2 = 4ax" displayMode={false} />
              </div>
              <div className="h-40 bg-white rounded-lg border border-slate-200 flex items-center justify-center p-1">
                <svg viewBox="0 0 160 120" className="w-full h-full" fill="none">
                  {/* Axes */}
                  <line x1="10" y1="60" x2="150" y2="60" stroke="#0f172a" strokeWidth="1" />
                  <line x1="60" y1="110" x2="60" y2="10" stroke="#0f172a" strokeWidth="1" />
                  {/* Directrix x = -a */}
                  <line x1="30" y1="10" x2="30" y2="110" stroke="#e11d48" strokeWidth="1.25" strokeDasharray="3 2" />
                  <text x="12" y="20" fill="#be123c" fontSize="8" fontWeight="bold">x = -a</text>
                  {/* Parabola Curve y^2 = 4ax */}
                  <path d="M 140,15 Q 60,60 140,105" stroke="#4f46e5" strokeWidth="2" />
                  {/* Focus S(a, 0) */}
                  <circle cx="90" cy="60" r="3" fill="#4f46e5" />
                  <text x="82" y="75" fill="#4f46e5" fontSize="8" fontWeight="bold">S(a,0)</text>
                  {/* Vertex V(0, 0) */}
                  <circle cx="60" cy="60" r="2.5" fill="#0f172a" />
                  <text x="50" y="55" fill="#0f172a" fontSize="8" fontWeight="bold">V(0,0)</text>
                  {/* Point P(x, y) on curve */}
                  <circle cx="115" cy="35" r="2.5" fill="#059669" />
                  <text x="118" y="32" fill="#047857" fontSize="8" fontWeight="bold">P(x,y)</text>
                  {/* Focal Distance SP */}
                  <line x1="90" y1="60" x2="115" y2="35" stroke="#059669" strokeWidth="1" strokeDasharray="2 2" />
                  {/* Directrix Distance PM */}
                  <line x1="30" y1="35" x2="115" y2="35" stroke="#be123c" strokeWidth="1" strokeDasharray="2 2" />
                  <circle cx="30" cy="35" r="2" fill="#be123c" />
                  <text x="22" y="42" fill="#be123c" fontSize="7">M</text>
                </svg>
              </div>
              <div className="text-[11px] text-slate-700 font-serif">
                <MathText text="\frac{|SP|}{|PM|} = e = 1 \implies |SP| = |PM|" displayMode={false} />
              </div>
            </div>

            {/* Panel 2: Ellipse */}
            <div className="p-3 bg-slate-50/70 rounded-xl border border-slate-200 text-center space-y-2 flex flex-col justify-between">
              <div className="text-xs font-bold text-emerald-900">
                <MathText text="\text{Ellipse: } \frac{x^2}{a^2} + \frac{y^2}{b^2} = 1" displayMode={false} />
              </div>
              <div className="h-40 bg-white rounded-lg border border-slate-200 flex items-center justify-center p-1">
                <svg viewBox="0 0 160 120" className="w-full h-full" fill="none">
                  {/* Axes */}
                  <line x1="10" y1="60" x2="150" y2="60" stroke="#0f172a" strokeWidth="1" />
                  <line x1="80" y1="110" x2="80" y2="10" stroke="#0f172a" strokeWidth="1" />
                  {/* Ellipse outline */}
                  <ellipse cx="80" cy="60" rx="55" ry="32" stroke="#059669" strokeWidth="2" fill="#059669" fillOpacity="0.06" />
                  {/* Foci */}
                  <circle cx="50" cy="60" r="2.5" fill="#059669" />
                  <circle cx="110" cy="60" r="2.5" fill="#059669" />
                  <text x="36" y="73" fill="#047857" fontSize="8" fontWeight="bold">F₁(-c,0)</text>
                  <text x="98" y="73" fill="#047857" fontSize="8" fontWeight="bold">F₂(c,0)</text>
                  {/* Major and minor axis markers */}
                  <text x="138" y="55" fill="#0f172a" fontSize="8" fontWeight="bold">a</text>
                  <text x="83" y="24" fill="#0f172a" fontSize="8" fontWeight="bold">b</text>
                  {/* Center O */}
                  <circle cx="80" cy="60" r="2" fill="#0f172a" />
                  <text x="73" y="55" fill="#0f172a" fontSize="7">O</text>
                </svg>
              </div>
              <div className="text-[11px] text-slate-700 font-serif">
                <MathText text="|PF_1| + |PF_2| = 2a \implies e = \frac{c}{a} < 1" displayMode={false} />
              </div>
            </div>

            {/* Panel 3: Hyperbola */}
            <div className="p-3 bg-slate-50/70 rounded-xl border border-slate-200 text-center space-y-2 flex flex-col justify-between">
              <div className="text-xs font-bold text-rose-900">
                <MathText text="\text{Hyperbola: } \frac{x^2}{a^2} - \frac{y^2}{b^2} = 1" displayMode={false} />
              </div>
              <div className="h-40 bg-white rounded-lg border border-slate-200 flex items-center justify-center p-1">
                <svg viewBox="0 0 160 120" className="w-full h-full" fill="none">
                  {/* Axes */}
                  <line x1="10" y1="60" x2="150" y2="60" stroke="#0f172a" strokeWidth="1" />
                  <line x1="80" y1="110" x2="80" y2="10" stroke="#0f172a" strokeWidth="1" />
                  {/* Asymptotes */}
                  <line x1="20" y1="15" x2="140" y2="105" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2" />
                  <line x1="20" y1="105" x2="140" y2="15" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2" />
                  {/* Left and right branches */}
                  <path d="M 25,20 Q 55,60 25,100" stroke="#e11d48" strokeWidth="2" />
                  <path d="M 135,20 Q 105,60 135,100" stroke="#e11d48" strokeWidth="2" />
                  {/* Foci */}
                  <circle cx="40" cy="60" r="2.5" fill="#e11d48" />
                  <circle cx="120" cy="60" r="2.5" fill="#e11d48" />
                  <text x="30" y="73" fill="#be123c" fontSize="8" fontWeight="bold">F₁(-c,0)</text>
                  <text x="110" y="73" fill="#be123c" fontSize="8" fontWeight="bold">F₂(c,0)</text>
                  {/* Vertices */}
                  <circle cx="55" cy="60" r="2" fill="#0f172a" />
                  <circle cx="105" cy="60" r="2" fill="#0f172a" />
                  <text x="50" y="54" fill="#0f172a" fontSize="7">A'</text>
                  <text x="105" y="54" fill="#0f172a" fontSize="7">A</text>
                </svg>
              </div>
              <div className="text-[11px] text-slate-700 font-serif">
                <MathText text="\big||PF_1| - |PF_2|\big| = 2a \implies e = \frac{c}{a} > 1" displayMode={false} />
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-sans">
            <MathText text="Conic sections are planar intersections of a double cone. The ratio of focal distance to directrix distance defines eccentricity $e$: Parabola ($e = 1$), Ellipse ($e = \frac{c}{a} < 1$, where $c^2 = a^2 - b^2$), and Hyperbola ($e = \frac{c}{a} > 1$, where $c^2 = a^2 + b^2$)." />
          </div>
        </div>
      );

    case 'vector_functions_differentiation':
      return (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-xs p-4 sm:p-5 text-slate-900 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-violet-600" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                Vector Calculus &bull; Trajectory &amp; Velocity Vector
              </span>
            </div>
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-violet-50 text-violet-700 border border-violet-200">
              <MathText text="\mathbf{r}'(t) = x'(t)\mathbf{i} + y'(t)\mathbf{j} + z'(t)\mathbf{k}" displayMode={false} />
            </span>
          </div>

          <div className="relative w-full h-64 bg-white rounded-xl border border-slate-200 overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 460 240" className="w-full h-full" fill="none">
              <defs>
                <pattern id="math-grid-vec" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                </pattern>
                <marker id="arrow-axis-vec" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="#0f172a" />
                </marker>
                <marker id="arrow-r" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="#2563eb" />
                </marker>
                <marker id="arrow-v" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="#7c3aed" />
                </marker>
                <marker id="arrow-a" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="#dc2626" />
                </marker>
              </defs>

              <rect width="460" height="240" fill="url(#math-grid-vec)" />

              {/* 3D Cartesian Axes (Isometric) */}
              {/* Origin at (110, 180) */}
              <line x1="110" y1="180" x2="40" y2="220" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#arrow-axis-vec)" />
              <line x1="110" y1="180" x2="420" y2="180" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#arrow-axis-vec)" />
              <line x1="110" y1="180" x2="110" y2="20" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#arrow-axis-vec)" />
              <text x="30" y="230" fill="#0f172a" fontSize="11" fontWeight="700">x</text>
              <text x="415" y="170" fill="#0f172a" fontSize="11" fontWeight="700">y</text>
              <text x="118" y="25" fill="#0f172a" fontSize="11" fontWeight="700">z</text>
              <text x="95" y="195" fill="#475569" fontSize="10">O(0,0,0)</text>

              {/* 3D Space Curve C */}
              <path d="M 140,160 C 180,90 240,60 320,80 C 370,95 400,140 420,150" stroke="#94a3b8" strokeWidth="2.5" strokeDasharray="5 3" />
              <text x="390" y="130" fill="#64748b" fontSize="11" fontWeight="bold">Space Curve C: r(t)</text>

              {/* Position Vector r(t) to point P(250, 68) */}
              <line x1="110" y1="180" x2="246" y2="72" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arrow-r)" />
              <circle cx="250" cy="68" r="4.5" fill="#7c3aed" stroke="#ffffff" strokeWidth="1.5" />
              <text x="145" y="115" fill="#1d4ed8" fontSize="11" fontWeight="bold">r(t)</text>
              <text x="245" y="55" fill="#4c1d95" fontSize="12" fontWeight="bold">P(x(t), y(t), z(t))</text>

              {/* Tangent Velocity Vector r'(t) */}
              <line x1="250" y1="68" x2="340" y2="82" stroke="#7c3aed" strokeWidth="2.5" markerEnd="url(#arrow-v)" />
              <text x="345" y="85" fill="#6d28d9" fontSize="11" fontWeight="bold">v(t) = r'(t) [Velocity]</text>

              {/* Acceleration Vector a(t) pointing toward center of curvature */}
              <line x1="250" y1="68" x2="270" y2="130" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arrow-a)" />
              <text x="278" y="135" fill="#b91c1c" fontSize="11" fontWeight="bold">a(t) = r''(t)</text>
            </svg>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-sans">
            <MathText text="Differentiation of a vector function $\mathbf{r}(t)$ is computed component-by-component. The first derivative $\mathbf{r}'(t)$ gives the instantaneous **velocity and tangent vector**, while $\mathbf{r}''(t)$ represents the **acceleration vector**." />
          </div>
        </div>
      );

    case 'maclaurin_series_approx':
      return (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-xs p-4 sm:p-5 text-slate-900 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-600" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800 flex items-center gap-1">
                <span>Maclaurin Series Expansion &bull;</span>
                <MathText text="f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!} x^n" displayMode={false} />
              </span>
            </div>
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-cyan-50 text-cyan-700 border border-cyan-200">
              <MathText text="\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots" displayMode={false} />
            </span>
          </div>

          <div className="relative w-full h-64 bg-white rounded-xl border border-slate-200 overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 460 240" className="w-full h-full" fill="none">
              <defs>
                <pattern id="math-grid-mac" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                </pattern>
                <marker id="arrow-axis-mac" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="#0f172a" />
                </marker>
              </defs>

              <rect width="460" height="240" fill="url(#math-grid-mac)" />

              {/* Coordinate Axes with Origin at (230, 120) */}
              <line x1="20" y1="120" x2="440" y2="120" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#arrow-axis-mac)" />
              <line x1="230" y1="225" x2="230" y2="15" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#arrow-axis-mac)" />
              <text x="430" y="112" fill="#0f172a" fontSize="11" fontWeight="700">x</text>
              <text x="238" y="24" fill="#0f172a" fontSize="11" fontWeight="700">y</text>
              <text x="215" y="136" fill="#475569" fontSize="10">O(0,0)</text>

              {/* Exact Sinusoid Curve: y = sin(x) */}
              <path
                d="M 70,120 C 95,70 125,70 150,120 C 175,170 205,170 230,120 C 255,70 285,70 310,120 C 335,170 365,170 390,120"
                stroke="#0f172a"
                strokeWidth="2.75"
                fill="none"
              />
              <text x="395" y="125" fill="#0f172a" fontSize="11" fontWeight="bold">y = sin(x)</text>

              {/* First Order Maclaurin: P1(x) = x (Tangent Line at x = 0) */}
              <line x1="140" y1="210" x2="320" y2="30" stroke="#e11d48" strokeWidth="2" strokeDasharray="5 3" />
              <text x="325" y="32" fill="#be123c" fontSize="10" fontWeight="bold">P₁(x) = x</text>

              {/* Third Order Maclaurin: P3(x) = x - x^3 / 6 (Cubic Polynomial) */}
              <path
                d="M 120,230 C 170,180 200,145 230,120 C 260,95 290,60 340,10"
                stroke="#2563eb"
                strokeWidth="2.25"
                strokeDasharray="6 3"
                fill="none"
              />
              <text x="345" y="18" fill="#1d4ed8" fontSize="10" fontWeight="bold">P₃(x) = x - x³/6</text>

              {/* Fifth Order Maclaurin: P5(x) = x - x^3/6 + x^5/120 */}
              <path
                d="M 90,190 C 120,110 170,150 230,120 C 290,90 340,130 370,50"
                stroke="#059669"
                strokeWidth="1.75"
                strokeDasharray="3 2"
                fill="none"
              />
              <text x="375" y="55" fill="#047857" fontSize="10" fontWeight="bold">P₅(x) = x - x³/6 + x⁵/120</text>

              {/* Center of expansion point at origin x = 0 */}
              <circle cx="230" cy="120" r="4.5" fill="#059669" stroke="#ffffff" strokeWidth="1.5" />
              <text x="145" y="105" fill="#047857" fontSize="10" fontWeight="bold">Center x = 0</text>
            </svg>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-sans">
            <MathText text="The Maclaurin series expands any infinitely differentiable function around $x = 0$ as $f(x) = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \dots = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!}x^n$. Higher order Taylor polynomials $P_1, P_3, P_5$ approximate $\sin x$ with increasing accuracy over wider domains." />
          </div>
        </div>
      );

    case 'sandwich_squeeze_theorem':
      return (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-xs p-4 sm:p-5 text-slate-900 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                Sandwich / Squeeze Theorem &bull; Limit Bounding
              </span>
            </div>
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200">
              <MathText text="g(x) \le f(x) \le h(x) \implies \lim_{x \to a} f(x) = L" displayMode={false} />
            </span>
          </div>

          <div className="relative w-full h-64 bg-white rounded-xl border border-slate-200 overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 460 240" className="w-full h-full" fill="none">
              <defs>
                <pattern id="math-grid-sq" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                </pattern>
                <marker id="arrow-axis-sq" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="#0f172a" />
                </marker>
              </defs>

              <rect width="460" height="240" fill="url(#math-grid-sq)" />

              {/* Axes */}
              <line x1="30" y1="200" x2="430" y2="200" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#arrow-axis-sq)" />
              <line x1="60" y1="225" x2="60" y2="15" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#arrow-axis-sq)" />
              <text x="420" y="190" fill="#0f172a" fontSize="11" fontWeight="700">x</text>
              <text x="70" y="30" fill="#0f172a" fontSize="11" fontWeight="700">y</text>

              {/* Limit point (240, 100) -> x = a, y = L */}
              <line x1="240" y1="200" x2="240" y2="100" stroke="#94a3b8" strokeWidth="1.25" strokeDasharray="3 3" />
              <line x1="60" y1="100" x2="240" y2="100" stroke="#94a3b8" strokeWidth="1.25" strokeDasharray="3 3" />
              <text x="235" y="218" fill="#0f172a" fontSize="11" fontWeight="bold">x = a</text>
              <text x="40" y="105" fill="#0f172a" fontSize="11" fontWeight="bold">L</text>

              {/* Upper Bounding Function h(x) */}
              <path d="M 80,40 Q 240,100 400,40" stroke="#0284c7" strokeWidth="2.5" />
              <text x="390" y="35" fill="#0369a1" fontSize="11" fontWeight="bold">h(x) [Upper Bound]</text>

              {/* Lower Bounding Function g(x) */}
              <path d="M 80,160 Q 240,100 400,160" stroke="#e11d48" strokeWidth="2.5" />
              <text x="390" y="170" fill="#be123c" fontSize="11" fontWeight="bold">g(x) [Lower Bound]</text>

              {/* Trapped Oscillating Function f(x) */}
              <path d="M 90,95 Q 130,120 160,85 Q 190,110 215,95 Q 230,105 240,100 Q 255,95 270,105 Q 300,85 330,115 Q 365,90 390,105" stroke="#d97706" strokeWidth="2" />
              <text x="270" y="80" fill="#b45309" fontSize="11" fontWeight="bold">f(x) [Squeezed Function]</text>

              {/* Common Limit point */}
              <circle cx="240" cy="100" r="5" fill="#059669" stroke="#ffffff" strokeWidth="1.5" />
              <text x="250" y="115" fill="#047857" fontSize="11" fontWeight="extrabold">(a, L)</text>
            </svg>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-sans">
            <MathText text="When a function $f(x)$ is trapped between $g(x)$ and $h(x)$, and both outer functions converge to the same limit $L$ at $x = a$, $f(x)$ is inevitably forced to have limit $L$ as well." />
          </div>
        </div>
      );

    case 'partial_derivatives_surface':
      return (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-xs p-4 sm:p-5 text-slate-900 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-600" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                Multivariable Calculus &bull; Partial Derivatives on 3D Surface
              </span>
            </div>
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-cyan-50 text-cyan-700 border border-cyan-200">
              <MathText text="\frac{\partial z}{\partial x} = \text{Slope along } x, \quad \frac{\partial z}{\partial y} = \text{Slope along } y" displayMode={false} />
            </span>
          </div>

          <div className="relative w-full h-64 bg-white rounded-xl border border-slate-200 overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 460 240" className="w-full h-full" fill="none">
              <defs>
                <pattern id="math-grid-part" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                </pattern>
                <marker id="arrow-axis-part" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="#0f172a" />
                </marker>
                <marker id="arrow-tan-x" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="#2563eb" />
                </marker>
                <marker id="arrow-tan-y" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="#059669" />
                </marker>
              </defs>

              <rect width="460" height="240" fill="url(#math-grid-part)" />

              {/* 3D Coordinate Axes */}
              <line x1="80" y1="180" x2="30" y2="220" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#arrow-axis-part)" />
              <line x1="80" y1="180" x2="420" y2="180" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#arrow-axis-part)" />
              <line x1="80" y1="180" x2="80" y2="20" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#arrow-axis-part)" />
              <text x="20" y="230" fill="#0f172a" fontSize="11" fontWeight="700">x</text>
              <text x="415" y="170" fill="#0f172a" fontSize="11" fontWeight="700">y</text>
              <text x="88" y="25" fill="#0f172a" fontSize="11" fontWeight="700">z</text>

              {/* 3D Curved Surface Mesh z = f(x, y) */}
              <path d="M 120,130 C 180,60 300,50 380,110 L 330,190 C 260,140 160,150 90,200 Z" fill="#0284c7" fillOpacity="0.08" stroke="#cbd5e1" strokeWidth="1" />

              {/* Plane y = y0 slice curve */}
              <path d="M 140,165 C 200,90 280,85 360,130" stroke="#2563eb" strokeWidth="2.5" />
              <text x="365" y="130" fill="#1d4ed8" fontSize="10" fontWeight="bold">Curve y = y₀</text>

              {/* Plane x = x0 slice curve */}
              <path d="M 180,70 C 220,95 240,135 255,185" stroke="#059669" strokeWidth="2.5" />
              <text x="255" y="198" fill="#047857" fontSize="10" fontWeight="bold">Curve x = x₀</text>

              {/* Intersection Point P(x0, y0, z0) */}
              <circle cx="232" cy="108" r="4.5" fill="#0f172a" stroke="#ffffff" strokeWidth="1.5" />
              <text x="240" y="105" fill="#0f172a" fontSize="11" fontWeight="bold">P(x₀, y₀, z₀)</text>

              {/* Tangent Line in x-direction: dz/dx */}
              <line x1="170" y1="128" x2="290" y2="88" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arrow-tan-x)" />
              <text x="285" y="80" fill="#1d4ed8" fontSize="11" fontWeight="bold">∂z/∂x (y const)</text>

              {/* Tangent Line in y-direction: dz/dy */}
              <line x1="215" y1="75" x2="245" y2="145" stroke="#059669" strokeWidth="2" markerEnd="url(#arrow-tan-y)" />
              <text x="180" y="65" fill="#047857" fontSize="11" fontWeight="bold">∂z/∂y (x const)</text>
            </svg>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-sans">
            <MathText text="Partial derivatives isolate the rate of change of $z = f(x, y)$ along perpendicular coordinate slices: $\frac{\partial z}{\partial x}$ holds $y$ constant, and $\frac{\partial z}{\partial y}$ holds $x$ constant." />
          </div>
        </div>
      );

    case 'numerical_newton_secant':
      return (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-xs p-4 sm:p-5 text-slate-900 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                Numerical Methods &bull; Newton-Raphson Iteration
              </span>
            </div>
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200">
              <MathText text="x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}" displayMode={false} />
            </span>
          </div>

          <div className="relative w-full h-64 bg-white rounded-xl border border-slate-200 overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 460 240" className="w-full h-full" fill="none">
              <defs>
                <pattern id="math-grid-num" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                </pattern>
                <marker id="arrow-axis-num" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="#0f172a" />
                </marker>
              </defs>

              <rect width="460" height="240" fill="url(#math-grid-num)" />

              {/* Axes */}
              <line x1="30" y1="180" x2="430" y2="180" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#arrow-axis-num)" />
              <line x1="60" y1="225" x2="60" y2="15" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#arrow-axis-num)" />
              <text x="420" y="170" fill="#0f172a" fontSize="11" fontWeight="700">x</text>
              <text x="70" y="25" fill="#0f172a" fontSize="11" fontWeight="700">y</text>

              {/* Function curve y = f(x) cutting x-axis at true root r = 180 */}
              <path d="M 80,220 C 130,205 160,195 180,180 C 230,140 310,70 380,30" stroke="#2563eb" strokeWidth="2.5" />
              <text x="375" y="45" fill="#2563eb" fontSize="12" fontWeight="bold">y = f(x)</text>

              {/* True root r at (180, 180) */}
              <circle cx="180" cy="180" r="4.5" fill="#059669" />
              <text x="175" y="200" fill="#047857" fontSize="12" fontWeight="bold">r (True Root)</text>

              {/* Initial Guess x0 at (310, 180) -> f(x0) at (310, 70) */}
              <line x1="310" y1="180" x2="310" y2="70" stroke="#94a3b8" strokeWidth="1.25" strokeDasharray="3 3" />
              <circle cx="310" cy="70" r="4" fill="#e11d48" />
              <circle cx="310" cy="180" r="3.5" fill="#e11d48" />
              <text x="305" y="198" fill="#be123c" fontSize="11" fontWeight="bold">x₀ (Guess)</text>
              <text x="318" y="75" fill="#be123c" fontSize="10">(x₀, f(x₀))</text>

              {/* Tangent line at x0 hitting x-axis at x1 = 225 */}
              <line x1="350" y1="15" x2="225" y2="180" stroke="#e11d48" strokeWidth="2" />
              <circle cx="225" cy="180" r="4" fill="#d97706" />
              <text x="220" y="198" fill="#b45309" fontSize="11" fontWeight="bold">x₁</text>

              {/* Tangent line at x1 hitting near true root r */}
              <line x1="225" y1="180" x2="225" y2="145" stroke="#94a3b8" strokeWidth="1.25" strokeDasharray="3 3" />
              <circle cx="225" cy="145" r="3.5" fill="#d97706" />
              <line x1="245" y1="110" x2="185" y2="180" stroke="#d97706" strokeWidth="1.75" strokeDasharray="4 2" />
              <text x="190" y="170" fill="#b45309" fontSize="10" fontWeight="bold">x₂ ≈ r</text>
            </svg>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-sans">
            <MathText text="The Newton-Raphson method replaces the curve with its linear tangent approximation $y - f(x_n) = f'(x_n)(x - x_n)$. Setting $y = 0$ yields the iterative root formula $x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$, achieving rapid quadratic convergence." />
          </div>
        </div>
      );

    case 'sets_venn_subsets':
      return (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-xs p-4 sm:p-5 text-slate-900 space-y-3">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                Venn Diagram &bull; Subsets, Super Set &amp; Universal Set $U$
              </span>
            </div>
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
              <MathText text="A \subseteq B \subset U \iff B \supseteq A" displayMode={false} />
            </span>
          </div>

          {/* SVG Diagram Canvas */}
          <div className="relative w-full h-56 bg-white rounded-xl border border-slate-200 overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 440 220" className="w-full h-full" fill="none">
              <defs>
                <pattern id="math-grid-sets" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f8fafc" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="440" height="220" fill="url(#math-grid-sets)" />

              {/* Universal Set Rectangle U */}
              <rect x="25" y="15" width="390" height="190" rx="14" fill="#f8fafc" stroke="#334155" strokeWidth="2.25" />
              <rect x="35" y="25" width="28" height="22" rx="4" fill="#334155" />
              <text x="43" y="40" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="serif">U</text>
              <text x="70" y="40" fill="#475569" fontSize="11" fontWeight="600">Universal Set &xi;</text>

              {/* Super Set B (Outer Ellipse) */}
              <ellipse cx="200" cy="115" rx="140" ry="75" fill="#ecfdf5" stroke="#059669" strokeWidth="2.25" />
              <text x="90" y="70" fill="#047857" fontSize="13" fontWeight="bold" fontFamily="serif">Super Set B (B &supe; A)</text>

              {/* Subset A (Inner Ellipse) */}
              <ellipse cx="230" cy="120" rx="75" ry="48" fill="#d1fae5" stroke="#047857" strokeWidth="2.25" />
              <text x="200" y="105" fill="#065f46" fontSize="12" fontWeight="bold" fontFamily="serif">Subset A (A &sube; B)</text>

              {/* Elements inside A */}
              <circle cx="210" cy="130" r="3.5" fill="#047857" />
              <text x="218" y="134" fill="#065f46" fontSize="11" fontWeight="600">x &isin; A</text>
              
              <circle cx="255" cy="140" r="3.5" fill="#047857" />
              <text x="263" y="144" fill="#065f46" fontSize="11" fontWeight="600">y &isin; A</text>

              {/* Elements inside B but outside A */}
              <circle cx="110" cy="125" r="3.5" fill="#059669" />
              <text x="118" y="129" fill="#047857" fontSize="11" fontWeight="600">b &isin; (B - A)</text>

              {/* Elements in U outside B (Complement B') */}
              <circle cx="360" cy="60" r="3.5" fill="#64748b" />
              <text x="368" y="64" fill="#475569" fontSize="11" fontWeight="600">u &isin; U, u &notin; B</text>

              <circle cx="360" cy="160" r="3.5" fill="#64748b" />
              <text x="340" y="180" fill="#475569" fontSize="10" fontWeight="600">Complement B&apos; = U - B</text>
            </svg>
          </div>

          <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200 text-xs text-slate-700 leading-relaxed font-sans">
            <MathText text="Every element $x \in A$ is contained within set $B$ ($A \subseteq B$), making $B$ the Super Set ($B \supseteq A$). All elements lie within the bounding Universal Set $U$, and elements outside $B$ form the complement $B' = U - B$." />
          </div>
        </div>
      );

    case 'set_partitions_cells':
      return (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-xs p-4 sm:p-5 text-slate-900 space-y-3">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                Mathematical Partition &bull; Exhaustive Set &amp; Disjoint Cells
              </span>
            </div>
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200">
              <MathText text="S = A_1 \cup A_2 \cup A_3 \cup A_4, \quad A_i \cap A_j = \emptyset" displayMode={false} />
            </span>
          </div>

          {/* SVG Diagram Canvas */}
          <div className="relative w-full h-56 bg-white rounded-xl border border-slate-200 overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 440 220" className="w-full h-full" fill="none">
              {/* Outer Bounding Set S */}
              <rect x="25" y="15" width="390" height="190" rx="14" fill="#ffffff" stroke="#1e293b" strokeWidth="2.5" />
              
              {/* Set S Badge */}
              <rect x="35" y="22" width="55" height="20" rx="4" fill="#1e293b" />
              <text x="42" y="36" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="serif">Set S</text>

              {/* 4 Partition Cells */}
              {/* Cell A1 */}
              <path d="M 25 15 L 220 15 L 220 110 L 25 110 Z" fill="#eef2ff" stroke="#4f46e5" strokeWidth="1.75" />
              <text x="85" y="55" fill="#3730a3" fontSize="13" fontWeight="bold" fontFamily="serif">Cell A₁</text>
              <text x="45" y="80" fill="#4338ca" fontSize="10">Non-empty: A₁ &ne; &empty;</text>
              <circle cx="160" cy="65" r="3" fill="#4f46e5" />
              <text x="168" y="69" fill="#4338ca" fontSize="10">a &isin; A₁</text>

              {/* Cell A2 */}
              <path d="M 220 15 L 415 15 L 415 110 L 220 110 Z" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.75" />
              <text x="290" y="55" fill="#166534" fontSize="13" fontWeight="bold" fontFamily="serif">Cell A₂</text>
              <text x="250" y="80" fill="#15803d" fontSize="10">Disjoint: A₁ &cap; A₂ = &empty;</text>
              <circle cx="360" cy="65" r="3" fill="#16a34a" />
              <text x="368" y="69" fill="#15803d" fontSize="10">b &isin; A₂</text>

              {/* Cell A3 */}
              <path d="M 25 110 L 220 110 L 220 205 L 25 205 Z" fill="#fefce8" stroke="#ca8a04" strokeWidth="1.75" />
              <text x="85" y="150" fill="#854d0e" fontSize="13" fontWeight="bold" fontFamily="serif">Cell A₃</text>
              <text x="45" y="175" fill="#a16207" fontSize="10">Disjoint: A₃ &cap; A_j = &empty;</text>
              <circle cx="160" cy="160" r="3" fill="#ca8a04" />
              <text x="168" y="164" fill="#854d0e" fontSize="10">c &isin; A₃</text>

              {/* Cell A4 */}
              <path d="M 220 110 L 415 110 L 415 205 L 220 205 Z" fill="#faf5ff" stroke="#9333ea" strokeWidth="1.75" />
              <text x="290" y="150" fill="#6b21a8" fontSize="13" fontWeight="bold" fontFamily="serif">Cell A₄</text>
              <text x="250" y="175" fill="#7e22ce" fontSize="10">Exhaustive: &cup; A_i = S</text>
              <circle cx="360" cy="160" r="3" fill="#9333ea" />
              <text x="368" y="164" fill="#6b21a8" fontSize="10">d &isin; A₄</text>

              {/* Central Divider Lines */}
              <line x1="220" y1="15" x2="220" y2="205" stroke="#334155" strokeWidth="2" strokeDasharray="4 3" />
              <line x1="25" y1="110" x2="415" y2="110" stroke="#334155" strokeWidth="2" strokeDasharray="4 3" />
            </svg>
          </div>

          <div className="p-3 rounded-xl bg-indigo-50/60 border border-indigo-200 text-xs text-slate-700 leading-relaxed font-sans">
            <MathText text="A partition divides set $S$ into non-empty, pairwise mutually disjoint subsets $A_1, A_2, A_3, A_4$ called **cells** ($A_i \cap A_j = \emptyset$ for $i \neq j$). Together, they form an **exhaustive set** whose complete union reconstructs $S = \bigcup_{i=1}^4 A_i$ with no gaps or overlap." />
          </div>
        </div>
      );

    case 'cartesian_product_relation':
      return (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-xs p-4 sm:p-5 text-slate-900 space-y-3">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-600" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                Cartesian Product &bull; $A \times B$ Lattice &amp; Binary Relation $R$
              </span>
            </div>
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-200">
              <MathText text="A \times B = \{(a, b) \mid a \in A, b \in B\}, \quad R \subseteq A \times B" displayMode={false} />
            </span>
          </div>

          {/* SVG Diagram Canvas */}
          <div className="relative w-full h-56 bg-white rounded-xl border border-slate-200 overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 440 220" className="w-full h-full" fill="none">
              <defs>
                <marker id="arrow-rel" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="#7c3aed" />
                </marker>
                <marker id="arrow-cart-axis" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                  <polygon points="0 0, 7 3.5, 0 7" fill="#0f172a" />
                </marker>
              </defs>

              {/* Left Column: Arrow Mapping Diagram */}
              <g transform="translate(10, 10)">
                <text x="40" y="20" fill="#1e293b" fontSize="11" fontWeight="bold">Set A (Domain)</text>
                <rect x="25" y="30" width="60" height="150" rx="20" fill="#f5f3ff" stroke="#7c3aed" strokeWidth="1.5" />
                
                <text x="130" y="20" fill="#1e293b" fontSize="11" fontWeight="bold">Set B (Range)</text>
                <rect x="120" y="30" width="60" height="150" rx="20" fill="#fdf2f8" stroke="#db2777" strokeWidth="1.5" />

                {/* Elements A: 1, 2, 3 */}
                <circle cx="55" cy="65" r="4" fill="#7c3aed" />
                <text x="40" y="70" fill="#5b21b6" fontSize="12" fontWeight="bold">1</text>
                
                <circle cx="55" cy="105" r="4" fill="#7c3aed" />
                <text x="40" y="110" fill="#5b21b6" fontSize="12" fontWeight="bold">2</text>

                <circle cx="55" cy="145" r="4" fill="#7c3aed" />
                <text x="40" y="150" fill="#5b21b6" fontSize="12" fontWeight="bold">3</text>

                {/* Elements B: 2, 4, 6 */}
                <circle cx="150" cy="65" r="4" fill="#db2777" />
                <text x="160" y="70" fill="#9d174d" fontSize="12" fontWeight="bold">2</text>
                
                <circle cx="150" cy="105" r="4" fill="#db2777" />
                <text x="160" y="110" fill="#9d174d" fontSize="12" fontWeight="bold">4</text>

                <circle cx="150" cy="145" r="4" fill="#db2777" />
                <text x="160" y="150" fill="#9d174d" fontSize="12" fontWeight="bold">6</text>

                {/* Relation R = {(1, 2), (2, 4), (3, 6)} arrows */}
                <line x1="59" y1="65" x2="142" y2="65" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#arrow-rel)" />
                <line x1="59" y1="105" x2="142" y2="105" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#arrow-rel)" />
                <line x1="59" y1="145" x2="142" y2="145" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#arrow-rel)" />
                <text x="75" y="195" fill="#7c3aed" fontSize="10" fontWeight="bold">Relation R: b = 2a</text>
              </g>

              {/* Vertical Separator */}
              <line x1="210" y1="15" x2="210" y2="205" stroke="#e2e8f0" strokeWidth="1.5" />

              {/* Right Column: Coordinate Grid of A x B */}
              <g transform="translate(225, 10)">
                <text x="20" y="20" fill="#1e293b" fontSize="11" fontWeight="bold">Cartesian Grid Lattice (A &times; B)</text>
                
                {/* Axes */}
                <line x1="30" y1="160" x2="190" y2="160" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#arrow-cart-axis)" />
                <line x1="30" y1="160" x2="30" y2="30" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#arrow-cart-axis)" />
                <text x="180" y="175" fill="#0f172a" fontSize="10" fontWeight="bold">a &isin; A</text>
                <text x="15" y="35" fill="#0f172a" fontSize="10" fontWeight="bold">b &isin; B</text>

                {/* Grid points: a=1,2,3 at x=65, 110, 155; b=2,4,6 at y=130, 95, 60 */}
                {/* All 9 points of A x B in light purple */}
                {[65, 110, 155].map((xVal, xi) => 
                  [130, 95, 60].map((yVal, yi) => (
                    <circle key={`pt-${xi}-${yi}`} cx={xVal} cy={yVal} r="3" fill="#cbd5e1" />
                  ))
                )}

                {/* Highlight relation points in R: (1, 2) at (65, 130), (2, 4) at (110, 95), (3, 6) at (155, 60) */}
                <circle cx="65" cy="130" r="5" fill="#7c3aed" />
                <text x="73" y="134" fill="#5b21b6" fontSize="9" fontWeight="bold">(1, 2)</text>

                <circle cx="110" cy="95" r="5" fill="#7c3aed" />
                <text x="118" y="99" fill="#5b21b6" fontSize="9" fontWeight="bold">(2, 4)</text>

                <circle cx="155" cy="60" r="5" fill="#7c3aed" />
                <text x="120" y="55" fill="#5b21b6" fontSize="9" fontWeight="bold">(3, 6)</text>

                {/* Axis Labels */}
                <text x="62" y="174" fill="#475569" fontSize="10" fontWeight="bold">1</text>
                <text x="107" y="174" fill="#475569" fontSize="10" fontWeight="bold">2</text>
                <text x="152" y="174" fill="#475569" fontSize="10" fontWeight="bold">3</text>

                <text x="15" y="134" fill="#475569" fontSize="10" fontWeight="bold">2</text>
                <text x="15" y="99" fill="#475569" fontSize="10" fontWeight="bold">4</text>
                <text x="15" y="64" fill="#475569" fontSize="10" fontWeight="bold">6</text>
              </g>
            </svg>
          </div>

          <div className="p-3 rounded-xl bg-purple-50/60 border border-purple-200 text-xs text-slate-700 leading-relaxed font-sans">
            <MathText text="The Cartesian Product $A \times B$ consists of all $3 \times 3 = 9$ ordered pairs $(a, b)$. Any subset $R \subseteq A \times B$ is a binary relation (here $R = \{(1,2), (2,4), (3,6)\}$ represents $b = 2a$)." />
          </div>
        </div>
      );

    case 'set_representations_forms':
      return (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-xs p-4 sm:p-5 text-slate-900 space-y-3">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-600" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                The Three Mathematical Forms of Set Representation
              </span>
            </div>
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-cyan-50 text-cyan-700 border border-cyan-200">
              <MathText text="\text{Descriptive} \longleftrightarrow \text{Tabular} \longleftrightarrow \text{Set-Builder}" displayMode={false} />
            </span>
          </div>

          {/* Graphical Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Form 1: Descriptive */}
            <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-900 uppercase">1. Descriptive Form</span>
                <span className="text-[10px] bg-blue-200 text-blue-800 font-bold px-2 py-0.5 rounded">Words</span>
              </div>
              <p className="text-xs text-slate-600">
                States the common defining characteristic property in words.
              </p>
              <div className="p-2.5 bg-white rounded-lg border border-blue-200 text-xs font-serif text-blue-900">
                <MathText text="E = \text{Set of all positive even integers less than } 10" />
              </div>
            </div>

            {/* Form 2: Tabular / Roster */}
            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-900 uppercase">2. Tabular (Roster) Form</span>
                <span className="text-[10px] bg-emerald-200 text-emerald-800 font-bold px-2 py-0.5 rounded">List &#123; &#125;</span>
              </div>
              <p className="text-xs text-slate-600">
                Lists all actual elements enclosed within braces separated by commas.
              </p>
              <div className="p-2.5 bg-white rounded-lg border border-emerald-200 text-xs font-serif text-emerald-900">
                <MathText text="E = \{2, 4, 6, 8\}" />
              </div>
            </div>

            {/* Form 3: Set Builder */}
            <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-purple-900 uppercase">3. Set Builder Form</span>
                <span className="text-[10px] bg-purple-200 text-purple-800 font-bold px-2 py-0.5 rounded">Rule &#123;x | P(x)&#125;</span>
              </div>
              <p className="text-xs text-slate-600">
                Uses a variable and a formal mathematical rule/predicate $P(x)$.
              </p>
              <div className="p-2.5 bg-white rounded-lg border border-purple-200 text-xs font-serif text-purple-900">
                <MathText text="E = \{x \mid x = 2k, \; k \in \mathbb{N}, \; 1 \le k \le 4\}" />
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-sans">
            <MathText text="All three representations denote the exact same mathematical collection $\{2, 4, 6, 8\}$. Descriptive form provides natural language clarity, Tabular form lists explicit finite elements, and Set-Builder form provides rigorous symbolic logic for infinite and continuous spaces." />
          </div>
        </div>
      );

    default:
      return null;
  }
};
