import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Sparkles, 
  Layers, 
  RotateCcw, 
  ZoomIn, 
  ZoomOut, 
  Sliders, 
  Info, 
  Maximize2, 
  Palette,
  Play,
  Pause,
  ChevronRight,
  Calculator,
  Compass,
  Download,
  Flame,
  TreePine,
  Feather,
  Orbit,
  Grid
} from 'lucide-react';
import { MathText } from './MathText';

export type FractalType = 
  | 'sierpinski' 
  | 'koch' 
  | 'dragon' 
  | 'pythagoras_tree' 
  | 'barnsley_fern' 
  | 'carpet' 
  | 'mandelbrot' 
  | 'julia';

interface ColorTheme {
  name: string;
  primary: string;
  secondary: string;
  background: string;
  palette: string[];
}

const COLOR_THEMES: Record<string, ColorTheme> = {
  indigo: {
    name: 'Electric Indigo',
    primary: '#6366f1',
    secondary: '#818cf8',
    background: '#0f172a',
    palette: ['#312e81', '#4338ca', '#6366f1', '#818cf8', '#a5b4fc', '#c7d2fe', '#e0e7ff'],
  },
  emerald: {
    name: 'Neon Emerald',
    primary: '#10b981',
    secondary: '#34d399',
    background: '#022c22',
    palette: ['#064e3b', '#047857', '#059669', '#10b981', '#34d399', '#6ee7b7', '#a7f3d0'],
  },
  amber: {
    name: 'Sunset Amber',
    primary: '#f59e0b',
    secondary: '#fbbf24',
    background: '#1c1917',
    palette: ['#78350f', '#92400e', '#b45309', '#d97706', '#f59e0b', '#fbbf24', '#fde68a'],
  },
  rose: {
    name: 'Cosmic Magenta',
    primary: '#f43f5e',
    secondary: '#fb7185',
    background: '#1e1b4b',
    palette: ['#881337', '#9f1239', '#be123c', '#e11d48', '#f43f5e', '#fb7185', '#fda4af'],
  },
  cyber: {
    name: 'Cyber Matrix',
    primary: '#06b6d4',
    secondary: '#38bdf8',
    background: '#030712',
    palette: ['#083344', '#0e7490', '#06b6d4', '#22d3ee', '#38bdf8', '#60a5fa', '#a5f3fc'],
  },
  gold: {
    name: 'Golden Ratio',
    primary: '#d97706',
    secondary: '#eab308',
    background: '#18181b',
    palette: ['#451a03', '#78350f', '#b45309', '#d97706', '#eab308', '#fde047', '#fef08a'],
  }
};

interface Point {
  x: number;
  y: number;
}

export const FractalShowcase: React.FC = () => {
  const [selectedFractal, setSelectedFractal] = useState<FractalType>('sierpinski');
  const [themeKey, setThemeKey] = useState<string>('indigo');
  const currentTheme = COLOR_THEMES[themeKey] || COLOR_THEMES.indigo;

  // General controls
  const [isAutoCycling, setIsAutoCycling] = useState<boolean>(false);
  const [zoom, setZoom] = useState<number>(1);
  const svgRef = useRef<SVGSVGElement | null>(null);

  // Fractal specific parameter states
  const [sierpinskiDepth, setSierpinskiDepth] = useState<number>(5);
  const [kochDepth, setKochDepth] = useState<number>(4);
  const [dragonDepth, setDragonDepth] = useState<number>(11);
  
  // Pythagoras Tree state
  const [treeDepth, setTreeDepth] = useState<number>(8);
  const [treeAngle, setTreeAngle] = useState<number>(35); // degrees
  const [treeRatio, setTreeRatio] = useState<number>(0.72);

  // Barnsley Fern state
  const [fernPointsCount, setFernPointsCount] = useState<number>(12000);

  // Sierpinski Carpet state
  const [carpetDepth, setCarpetDepth] = useState<number>(3);

  // Mandelbrot & Julia Canvas State
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [maxIter, setMaxIter] = useState<number>(65);
  const [centerOffset, setCenterOffset] = useState<{ x: number; y: number }>({ x: -0.75, y: 0 });
  const [juliaParam, setJuliaParam] = useState<{ cr: number; ci: number }>({ cr: -0.7, ci: 0.27015 });
  const [isRendering, setIsRendering] = useState<boolean>(false);

  // Auto cycling animation
  useEffect(() => {
    if (!isAutoCycling) return;
    const interval = setInterval(() => {
      if (selectedFractal === 'sierpinski') {
        setSierpinskiDepth((prev) => (prev >= 6 ? 1 : prev + 1));
      } else if (selectedFractal === 'koch') {
        setKochDepth((prev) => (prev >= 5 ? 1 : prev + 1));
      } else if (selectedFractal === 'dragon') {
        setDragonDepth((prev) => (prev >= 13 ? 4 : prev + 1));
      } else if (selectedFractal === 'pythagoras_tree') {
        setTreeAngle((prev) => (prev >= 60 ? 20 : prev + 5));
      } else if (selectedFractal === 'carpet') {
        setCarpetDepth((prev) => (prev >= 4 ? 1 : prev + 1));
      } else if (selectedFractal === 'julia') {
        setJuliaParam((prev) => ({
          cr: -0.7 + 0.15 * Math.sin(Date.now() / 1500),
          ci: 0.27 + 0.15 * Math.cos(Date.now() / 1500)
        }));
      }
    }, 1800);
    return () => clearInterval(interval);
  }, [isAutoCycling, selectedFractal]);

  // -------------------------------------------------------------
  // 1. SIERPINSKI TRIANGLE SVG GENERATOR
  // -------------------------------------------------------------
  const generateSierpinskiTriangles = (
    p1: Point,
    p2: Point,
    p3: Point,
    depth: number,
    colorIndex: number = 0
  ): { p1: Point; p2: Point; p3: Point; color: string; level: number }[] => {
    if (depth === 0) {
      const color = currentTheme.palette[colorIndex % currentTheme.palette.length];
      return [{ p1, p2, p3, color, level: depth }];
    }

    const mid1: Point = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
    const mid2: Point = { x: (p2.x + p3.x) / 2, y: (p2.y + p3.y) / 2 };
    const mid3: Point = { x: (p3.x + p1.x) / 2, y: (p3.y + p1.y) / 2 };

    return [
      ...generateSierpinskiTriangles(p1, mid1, mid3, depth - 1, colorIndex),
      ...generateSierpinskiTriangles(mid1, p2, mid2, depth - 1, colorIndex + 1),
      ...generateSierpinskiTriangles(mid3, mid2, p3, depth - 1, colorIndex + 2),
    ];
  };

  const sierpinskiTriangles = useMemo(() => {
    const p1: Point = { x: 300, y: 35 };
    const p2: Point = { x: 45, y: 475 };
    const p3: Point = { x: 555, y: 475 };
    return generateSierpinskiTriangles(p1, p2, p3, sierpinskiDepth);
  }, [sierpinskiDepth, currentTheme]);

  // -------------------------------------------------------------
  // 2. KOCH SNOWFLAKE SVG GENERATOR
  // -------------------------------------------------------------
  const generateKochLines = (
    p1: Point,
    p2: Point,
    depth: number
  ): Point[] => {
    if (depth === 0) return [p1, p2];

    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;

    const pA = p1;
    const pB: Point = { x: p1.x + dx / 3, y: p1.y + dy / 3 };
    const pD: Point = { x: p1.x + (2 * dx) / 3, y: p1.y + (2 * dy) / 3 };
    const pE = p2;

    const sin60 = -Math.sin(Math.PI / 3);
    const cos60 = Math.cos(Math.PI / 3);
    const vX = pD.x - pB.x;
    const vY = pD.y - pB.y;
    const pC: Point = {
      x: pB.x + (vX * cos60 - vY * sin60),
      y: pB.y + (vX * sin60 + vY * cos60),
    };

    const s1 = generateKochLines(pA, pB, depth - 1);
    const s2 = generateKochLines(pB, pC, depth - 1);
    const s3 = generateKochLines(pC, pD, depth - 1);
    const s4 = generateKochLines(pD, pE, depth - 1);

    return [...s1.slice(0, -1), ...s2.slice(0, -1), ...s3.slice(0, -1), ...s4];
  };

  const kochPolygonPoints = useMemo(() => {
    const size = 370;
    const cx = 300;
    const cy = 265;
    const r = size / Math.sqrt(3);

    const p1: Point = { x: cx, y: cy - r };
    const p2: Point = { x: cx + size / 2, y: cy + r / 2 };
    const p3: Point = { x: cx - size / 2, y: cy + r / 2 };

    const side1 = generateKochLines(p1, p2, kochDepth);
    const side2 = generateKochLines(p2, p3, kochDepth);
    const side3 = generateKochLines(p3, p1, kochDepth);

    return [...side1.slice(0, -1), ...side2.slice(0, -1), ...side3];
  }, [kochDepth]);

  // -------------------------------------------------------------
  // 3. HEIGHWAY DRAGON CURVE SVG GENERATOR
  // -------------------------------------------------------------
  const dragonPathString = useMemo(() => {
    let turns: boolean[] = [];
    for (let i = 0; i < dragonDepth; i++) {
      const copy = [...turns];
      turns.push(true); // right turn
      for (let j = copy.length - 1; j >= 0; j--) {
        turns.push(!copy[j]);
      }
    }

    let x = 180;
    let y = 330;
    let angle = 0;
    const step = 430 / Math.pow(Math.SQRT2, dragonDepth);

    let path = `M ${x} ${y}`;
    for (const isRight of turns) {
      angle += isRight ? Math.PI / 2 : -Math.PI / 2;
      x += Math.cos(angle) * step;
      y += Math.sin(angle) * step;
      path += ` L ${x.toFixed(2)} ${y.toFixed(2)}`;
    }
    return path;
  }, [dragonDepth]);

  // -------------------------------------------------------------
  // 4. PYTHAGORAS FRACTAL CANOPY TREE
  // -------------------------------------------------------------
  interface TreeBranch {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    thickness: number;
    color: string;
  }

  const treeBranches = useMemo(() => {
    const branches: TreeBranch[] = [];
    const rad = (treeAngle * Math.PI) / 180;

    const buildBranch = (
      x: number,
      y: number,
      len: number,
      angle: number,
      depth: number
    ) => {
      if (depth <= 0) return;
      const x2 = x + len * Math.sin(angle);
      const y2 = y - len * Math.cos(angle);

      const colorIdx = Math.min(
        currentTheme.palette.length - 1,
        Math.floor(((treeDepth - depth) / treeDepth) * currentTheme.palette.length)
      );

      branches.push({
        x1: x,
        y1: y,
        x2,
        y2,
        thickness: Math.max(1, depth * 1.3),
        color: currentTheme.palette[colorIdx],
      });

      // Left and right recursive sub-branches
      buildBranch(x2, y2, len * treeRatio, angle - rad, depth - 1);
      buildBranch(x2, y2, len * treeRatio, angle + rad, depth - 1);
    };

    buildBranch(300, 480, 110, 0, treeDepth);
    return branches;
  }, [treeDepth, treeAngle, treeRatio, currentTheme]);

  // -------------------------------------------------------------
  // 5. BARNSLEY FERN (IFS Point Cloud)
  // -------------------------------------------------------------
  const fernPoints = useMemo(() => {
    const pts: { x: number; y: number; color: string }[] = [];
    let x = 0;
    let y = 0;

    for (let i = 0; i < fernPointsCount; i++) {
      const r = Math.random();
      let nextX: number;
      let nextY: number;
      let stem = false;

      if (r < 0.01) {
        nextX = 0;
        nextY = 0.16 * y;
        stem = true;
      } else if (r < 0.86) {
        nextX = 0.85 * x + 0.04 * y;
        nextY = -0.04 * x + 0.85 * y + 1.6;
      } else if (r < 0.93) {
        nextX = 0.2 * x - 0.26 * y;
        nextY = 0.23 * x + 0.22 * y + 1.6;
      } else {
        nextX = -0.15 * x + 0.28 * y;
        nextY = 0.26 * x + 0.24 * y + 0.44;
      }

      x = nextX;
      y = nextY;

      // Project into 600x500 viewport (x: [-2.5, 2.5] -> [80, 520], y: [0, 10] -> [470, 30])
      if (i > 20) {
        const px = 300 + x * 54;
        const py = 480 - y * 44;
        const colorIdx = stem
          ? 0
          : Math.floor((y / 10) * (currentTheme.palette.length - 1));
        pts.push({
          x: px,
          y: py,
          color: currentTheme.palette[Math.min(colorIdx, currentTheme.palette.length - 1)],
        });
      }
    }
    return pts;
  }, [fernPointsCount, currentTheme]);

  // -------------------------------------------------------------
  // 6. SIERPINSKI CARPET SVG
  // -------------------------------------------------------------
  interface CarpetHole {
    x: number;
    y: number;
    size: number;
    level: number;
  }

  const carpetHoles = useMemo(() => {
    const holes: CarpetHole[] = [];

    const subdivide = (x: number, y: number, size: number, depth: number) => {
      if (depth <= 0) return;
      const sub = size / 3;
      // Center hole
      holes.push({ x: x + sub, y: y + sub, size: sub, level: depth });

      // 8 surrounding blocks
      for (let dx = 0; dx < 3; dx++) {
        for (let dy = 0; dy < 3; dy++) {
          if (dx === 1 && dy === 1) continue; // skip center
          subdivide(x + dx * sub, y + dy * sub, sub, depth - 1);
        }
      }
    };

    subdivide(50, 20, 500, carpetDepth);
    return holes;
  }, [carpetDepth]);

  // -------------------------------------------------------------
  // 7. COMPLEX DYNAMICS CANVAS RENDERER (MANDELBROT & JULIA SET)
  // -------------------------------------------------------------
  useEffect(() => {
    if (selectedFractal !== 'mandelbrot' && selectedFractal !== 'julia') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsRendering(true);
    const width = canvas.width;
    const height = canvas.height;
    const imgData = ctx.createImageData(width, height);
    const data = imgData.data;

    const scale = (selectedFractal === 'mandelbrot' ? 3.2 : 3.0) / (zoom * width);
    const cx = selectedFractal === 'mandelbrot' ? centerOffset.x : 0;
    const cy = selectedFractal === 'mandelbrot' ? centerOffset.y : 0;

    // Palette hex colors to RGB
    const rgbPalette = currentTheme.palette.map((hex) => {
      const clean = hex.replace('#', '');
      const num = parseInt(clean, 16);
      return {
        r: (num >> 16) & 255,
        g: (num >> 8) & 255,
        b: num & 255,
      };
    });

    const numColors = rgbPalette.length;

    for (let py = 0; py < height; py++) {
      const y0 = (py - height / 2) * scale + cy;
      for (let px = 0; px < width; px++) {
        const x0 = (px - width / 2) * scale + cx;
        const pixelIdx = (py * width + px) * 4;

        let zx = selectedFractal === 'mandelbrot' ? 0 : x0;
        let zy = selectedFractal === 'mandelbrot' ? 0 : y0;
        const cr = selectedFractal === 'mandelbrot' ? x0 : juliaParam.cr;
        const ci = selectedFractal === 'mandelbrot' ? y0 : juliaParam.ci;

        let iter = 0;
        while (zx * zx + zy * zy <= 4 && iter < maxIter) {
          const xtemp = zx * zx - zy * zy + cr;
          zy = 2 * zx * zy + ci;
          zx = xtemp;
          iter++;
        }

        if (iter === maxIter) {
          // Interior set: deep dark background
          data[pixelIdx] = 10;
          data[pixelIdx + 1] = 10;
          data[pixelIdx + 2] = 20;
          data[pixelIdx + 3] = 255;
        } else {
          // Continuous smooth shading
          const colorT = (iter / maxIter) * (numColors - 1);
          const idxLow = Math.floor(colorT);
          const idxHigh = Math.min(idxLow + 1, numColors - 1);
          const frac = colorT - idxLow;

          const c1 = rgbPalette[idxLow];
          const c2 = rgbPalette[idxHigh];

          data[pixelIdx] = Math.round(c1.r + (c2.r - c1.r) * frac);
          data[pixelIdx + 1] = Math.round(c1.g + (c2.g - c1.g) * frac);
          data[pixelIdx + 2] = Math.round(c1.b + (c2.b - c1.b) * frac);
          data[pixelIdx + 3] = 255;
        }
      }
    }

    ctx.putImageData(imgData, 0, 0);
    setIsRendering(false);
  }, [selectedFractal, zoom, centerOffset, maxIter, juliaParam, currentTheme]);

  // Handle Export / Download SVG or Canvas
  const handleExport = () => {
    if (selectedFractal === 'mandelbrot' || selectedFractal === 'julia') {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const link = document.createElement('a');
      link.download = `${selectedFractal}_fractal.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } else {
      const svg = svgRef.current;
      if (!svg) return;
      const serializer = new XMLSerializer();
      const source = serializer.serializeToString(svg);
      const blob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${selectedFractal}_fractal.svg`;
      link.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div id="fractal-showcase" className="space-y-6 animate-fade-in">
      
      {/* Top Toolbar for Actions */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Fractal Models
          </span>
        </div>

        {/* Global Action Toolbar */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setIsAutoCycling(!isAutoCycling)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border cursor-pointer ${
              isAutoCycling
                ? 'bg-amber-500 text-white border-amber-400 shadow-md shadow-amber-500/20 animate-pulse'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
            }`}
          >
            {isAutoCycling ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isAutoCycling ? 'Pause Cycle' : 'Auto Animate'}</span>
          </button>

          <button
            onClick={handleExport}
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/20 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Image</span>
          </button>
        </div>
      </div>

      {/* Main Fractal Selector Navigation Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 p-1.5 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
        {[
          { id: 'sierpinski', label: 'Sierpinski', icon: Layers },
          { id: 'koch', label: 'Koch Snowflake', icon: Sparkles },
          { id: 'dragon', label: 'Dragon Curve', icon: Flame },
          { id: 'pythagoras_tree', label: 'Canopy Tree', icon: TreePine },
          { id: 'barnsley_fern', label: 'Barnsley Fern', icon: Feather },
          { id: 'carpet', label: 'Sierpinski Carpet', icon: Grid },
          { id: 'mandelbrot', label: 'Mandelbrot Set', icon: Orbit },
          { id: 'julia', label: 'Julia Set', icon: Compass },
        ].map((item) => {
          const Icon = item.icon;
          const isSelected = selectedFractal === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setSelectedFractal(item.id as FractalType);
                setZoom(1);
              }}
              className={`px-3 py-2.5 rounded-xl text-xs font-bold flex flex-col sm:flex-row items-center justify-center gap-1.5 transition-all cursor-pointer ${
                isSelected
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span className="truncate">{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Stage Grid: Interactive Viewer + Live Controls + Formulas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* VIEWPORT CANVAS / SVG (8 COLS) */}
        <div className="lg:col-span-8 flex flex-col bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden relative min-h-[460px] sm:min-h-[540px]">
          
          {/* Top Canvas Bar */}
          <div className="px-5 py-3.5 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between z-10 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-mono font-bold text-slate-300">
                Viewport: {selectedFractal.toUpperCase()}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-indigo-300 font-mono">
                Zoom: {zoom.toFixed(1)}x
              </span>
            </div>

            {/* Zoom / Reset Quick Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setZoom((prev) => Math.max(0.6, Number((prev - 0.2).toFixed(1))))}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setZoom((prev) => Math.min(4, Number((prev + 0.2).toFixed(1))))}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => {
                  setZoom(1);
                  setCenterOffset({ x: -0.75, y: 0 });
                }}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                title="Reset View"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Rendering Canvas / SVG */}
          <div className="flex-1 flex items-center justify-center p-4 relative overflow-hidden bg-slate-950">
            
            {/* 1. Canvas Mode for Mandelbrot & Julia */}
            {(selectedFractal === 'mandelbrot' || selectedFractal === 'julia') && (
              <canvas
                ref={canvasRef}
                width={600}
                height={500}
                className="max-w-full max-h-full rounded-2xl shadow-2xl transition-transform duration-200"
                style={{ transform: `scale(${zoom})` }}
              />
            )}

            {/* 2. Vector SVG Mode for Recursive Fractals */}
            {selectedFractal !== 'mandelbrot' && selectedFractal !== 'julia' && (
              <svg
                ref={svgRef}
                viewBox="0 0 600 500"
                className="w-full h-full max-h-[500px] select-none transition-transform duration-200"
                style={{ transform: `scale(${zoom})` }}
              >
                {/* Background Defs and Gradients */}
                <defs>
                  <radialGradient id="stageGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor={currentTheme.primary} stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#000" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <rect width="600" height="500" fill="url(#stageGlow)" />

                {/* A. SIERPINSKI TRIANGLE SVG */}
                {selectedFractal === 'sierpinski' && (
                  <g>
                    {sierpinskiTriangles.map((tri, i) => (
                      <polygon
                        key={i}
                        points={`${tri.p1.x},${tri.p1.y} ${tri.p2.x},${tri.p2.y} ${tri.p3.x},${tri.p3.y}`}
                        fill={tri.color}
                        stroke="#0f172a"
                        strokeWidth="0.5"
                        opacity={0.92}
                      />
                    ))}
                  </g>
                )}

                {/* B. KOCH SNOWFLAKE SVG */}
                {selectedFractal === 'koch' && (
                  <polygon
                    points={kochPolygonPoints.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')}
                    fill="none"
                    stroke={currentTheme.primary}
                    strokeWidth={kochDepth > 4 ? 1 : 1.5}
                    strokeLinejoin="round"
                  />
                )}

                {/* C. DRAGON CURVE SVG */}
                {selectedFractal === 'dragon' && (
                  <path
                    d={dragonPathString}
                    fill="none"
                    stroke={currentTheme.primary}
                    strokeWidth={dragonDepth > 11 ? 1 : 1.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}

                {/* D. PYTHAGORAS CANOPY TREE */}
                {selectedFractal === 'pythagoras_tree' && (
                  <g>
                    {treeBranches.map((b, i) => (
                      <line
                        key={i}
                        x1={b.x1}
                        y1={b.y1}
                        x2={b.x2}
                        y2={b.y2}
                        stroke={b.color}
                        strokeWidth={b.thickness}
                        strokeLinecap="round"
                      />
                    ))}
                  </g>
                )}

                {/* E. BARNSLEY FERN POINT CLOUD */}
                {selectedFractal === 'barnsley_fern' && (
                  <g>
                    {fernPoints.map((pt, i) => (
                      <circle
                        key={i}
                        cx={pt.x}
                        cy={pt.y}
                        r={0.9}
                        fill={pt.color}
                        opacity={0.85}
                      />
                    ))}
                  </g>
                )}

                {/* F. SIERPINSKI CARPET */}
                {selectedFractal === 'carpet' && (
                  <g>
                    {/* Base Solid Square */}
                    <rect x="50" y="20" width="500" height="500" fill={currentTheme.primary} rx="8" />
                    {/* Recursive Cutout Holes */}
                    {carpetHoles.map((hole, i) => (
                      <rect
                        key={i}
                        x={hole.x}
                        y={hole.y}
                        width={hole.size}
                        height={hole.size}
                        fill="#030712"
                        stroke="#0f172a"
                        strokeWidth="0.4"
                      />
                    ))}
                  </g>
                )}

              </svg>
            )}

          </div>

          {/* Bottom Live Metrics Bar */}
          <div className="px-5 py-2.5 bg-slate-900/90 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>
              {selectedFractal === 'sierpinski' && `Triangles Generated: ${sierpinskiTriangles.length.toLocaleString()}`}
              {selectedFractal === 'koch' && `Polygon Vertices: ${kochPolygonPoints.length.toLocaleString()}`}
              {selectedFractal === 'dragon' && `Line Segments: ${(Math.pow(2, dragonDepth)).toLocaleString()}`}
              {selectedFractal === 'pythagoras_tree' && `Canopy Branches: ${treeBranches.length.toLocaleString()}`}
              {selectedFractal === 'barnsley_fern' && `IFS Iterations: ${fernPoints.length.toLocaleString()} pts`}
              {selectedFractal === 'carpet' && `Holes Punched: ${carpetHoles.length.toLocaleString()}`}
              {selectedFractal === 'mandelbrot' && `Escape Time Bound: ${maxIter} iters`}
              {selectedFractal === 'julia' && `Seed c: ${juliaParam.cr.toFixed(3)} + ${juliaParam.ci.toFixed(3)}i`}
            </span>
            <span className="text-indigo-400">Pure Real-Time Generator</span>
          </div>

        </div>

        {/* CONTROLS & FORMULAS SIDEBAR (4 COLS) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* PARAMETERS CONTROL CARD */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 shadow-xl space-y-4">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 border-b border-slate-100 dark:border-slate-800 pb-3">
              <Sliders className="w-4 h-4" />
              <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white">
                Fractal Parameters
              </h3>
            </div>

            {/* Color Palette Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
                <span>Color Spectrum</span>
                <span className="text-[10px] text-indigo-500 font-bold">{currentTheme.name}</span>
              </label>
              <div className="grid grid-cols-6 gap-1.5">
                {Object.keys(COLOR_THEMES).map((key) => {
                  const t = COLOR_THEMES[key];
                  return (
                    <button
                      key={key}
                      onClick={() => setThemeKey(key)}
                      style={{ backgroundColor: t.primary }}
                      className={`h-7 rounded-lg border-2 transition-all cursor-pointer ${
                        themeKey === key ? 'border-white scale-110 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                      title={t.name}
                    />
                  );
                })}
              </div>
            </div>

            {/* DYNAMIC SLIDERS ACCORDING TO FRACTAL TYPE */}
            {selectedFractal === 'sierpinski' && (
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs font-bold">
                  <span>Recursion Depth:</span>
                  <span className="text-indigo-600 dark:text-indigo-400">{sierpinskiDepth}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="6"
                  value={sierpinskiDepth}
                  onChange={(e) => setSierpinskiDepth(Number(e.target.value))}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
              </div>
            )}

            {selectedFractal === 'koch' && (
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs font-bold">
                  <span>Iteration Level:</span>
                  <span className="text-cyan-600 dark:text-cyan-400">{kochDepth}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5"
                  value={kochDepth}
                  onChange={(e) => setKochDepth(Number(e.target.value))}
                  className="w-full accent-cyan-600 cursor-pointer"
                />
              </div>
            )}

            {selectedFractal === 'dragon' && (
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs font-bold">
                  <span>Paper Folds:</span>
                  <span className="text-amber-600 dark:text-amber-400">{dragonDepth}</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="13"
                  value={dragonDepth}
                  onChange={(e) => setDragonDepth(Number(e.target.value))}
                  className="w-full accent-amber-600 cursor-pointer"
                />
              </div>
            )}

            {selectedFractal === 'pythagoras_tree' && (
              <div className="space-y-3 pt-2">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span>Branching Angle:</span>
                    <span className="text-emerald-500 font-mono">{treeAngle}°</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="65"
                    value={treeAngle}
                    onChange={(e) => setTreeAngle(Number(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span>Recursion Depth:</span>
                    <span className="text-emerald-500 font-mono">{treeDepth}</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="10"
                    value={treeDepth}
                    onChange={(e) => setTreeDepth(Number(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                </div>
              </div>
            )}

            {selectedFractal === 'barnsley_fern' && (
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs font-bold">
                  <span>Point Cloud Density:</span>
                  <span className="text-emerald-500 font-mono">{fernPointsCount.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="3000"
                  max="30000"
                  step="1000"
                  value={fernPointsCount}
                  onChange={(e) => setFernPointsCount(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>
            )}

            {selectedFractal === 'carpet' && (
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs font-bold">
                  <span>Subdivision Depth:</span>
                  <span className="text-indigo-500 font-mono">{carpetDepth}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="4"
                  value={carpetDepth}
                  onChange={(e) => setCarpetDepth(Number(e.target.value))}
                  className="w-full accent-indigo-500 cursor-pointer"
                />
              </div>
            )}

            {(selectedFractal === 'mandelbrot' || selectedFractal === 'julia') && (
              <div className="space-y-3 pt-2">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span>Max Escape Iterations:</span>
                    <span className="text-purple-500 font-mono">{maxIter}</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="120"
                    value={maxIter}
                    onChange={(e) => setMaxIter(Number(e.target.value))}
                    className="w-full accent-purple-500 cursor-pointer"
                  />
                </div>

                {selectedFractal === 'julia' && (
                  <>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-bold">
                        <span>Re(c) Seed:</span>
                        <span className="text-purple-500 font-mono">{juliaParam.cr.toFixed(3)}</span>
                      </div>
                      <input
                        type="range"
                        min="-1"
                        max="0.5"
                        step="0.01"
                        value={juliaParam.cr}
                        onChange={(e) => setJuliaParam({ ...juliaParam, cr: Number(e.target.value) })}
                        className="w-full accent-purple-500 cursor-pointer"
                      />
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-bold">
                        <span>Im(c) Seed:</span>
                        <span className="text-purple-500 font-mono">{juliaParam.ci.toFixed(3)}</span>
                      </div>
                      <input
                        type="range"
                        min="-0.6"
                        max="0.6"
                        step="0.01"
                        value={juliaParam.ci}
                        onChange={(e) => setJuliaParam({ ...juliaParam, ci: Number(e.target.value) })}
                        className="w-full accent-purple-500 cursor-pointer"
                      />
                    </div>
                  </>
                )}
              </div>
            )}

          </div>

          {/* MATHEMATICAL INSIGHT CARD */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 shadow-xl space-y-4">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 border-b border-slate-100 dark:border-slate-800 pb-3">
              <Calculator className="w-4 h-4" />
              <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white">
                Mathematical Theory
              </h3>
            </div>

            {selectedFractal === 'sierpinski' && (
              <div className="space-y-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                <p>
                  Wacław Sierpiński (1915). A self-similar fractal constructed by recursively removing the central triangle from an equilateral triangle.
                </p>
                <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 text-xs text-indigo-700 dark:text-indigo-300 space-y-1">
                  <div><strong>Hausdorff Dimension:</strong></div>
                  <div><MathText text="$D = \frac{\log 3}{\log 2} \approx 1.58496$" /></div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs space-y-1">
                  <div><strong>Area as $n \to \infty$:</strong> <MathText text="$A_n = A_0 \left(\frac{3}{4}\right)^n \to 0$" /></div>
                  <div><strong>Perimeter as $n \to \infty$:</strong> <MathText text="$P_n = P_0 \left(\frac{3}{2}\right)^n \to \infty$" /></div>
                </div>
              </div>
            )}

            {selectedFractal === 'koch' && (
              <div className="space-y-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                <p>
                  Helge von Koch (1904). Continuous nowhere-differentiable boundary enclosing a finite area with infinite perimeter.
                </p>
                <div className="p-2.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/60 text-xs text-cyan-700 dark:text-cyan-300 space-y-1">
                  <div><strong>Hausdorff Dimension:</strong></div>
                  <div><MathText text="$D = \frac{\log 4}{\log 3} \approx 1.26186$" /></div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs space-y-1">
                  <div><strong>Total Area:</strong> <MathText text="$A_\infty = \frac{8}{5} A_0$" /></div>
                  <div><strong>Perimeter:</strong> <MathText text="$P_n = 3 s_0 \left(\frac{4}{3}\right)^n \to \infty$" /></div>
                </div>
              </div>
            )}

            {selectedFractal === 'dragon' && (
              <div className="space-y-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                <p>
                  Heighway Dragon (Jurassic Curve). Space-filling fractal generated by recursive paper folding iterations at 90° angles.
                </p>
                <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-xs text-amber-700 dark:text-amber-300 space-y-1">
                  <div><strong>Boundary Dimension:</strong></div>
                  <div><MathText text="$\dim_H(\partial D) \approx 1.523627$" /></div>
                </div>
                <p className="text-[11px] text-slate-500">
                  Four identical dragons tile the 2D plane perfectly without gaps or overlaps.
                </p>
              </div>
            )}

            {selectedFractal === 'pythagoras_tree' && (
              <div className="space-y-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                <p>
                  Albert E. Bosman (1942). Tree constructed from squares and triangles based on the Pythagorean theorem.
                </p>
                <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-xs text-emerald-700 dark:text-emerald-300 space-y-1">
                  <div><strong>Pythagorean Area Invariant:</strong></div>
                  <div><MathText text="$a^2 + b^2 = c^2$ (Total square area per level is conserved)" /></div>
                </div>
              </div>
            )}

            {selectedFractal === 'barnsley_fern' && (
              <div className="space-y-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                <p>
                  Michael Barnsley (1988). Iterated Function System (IFS) demonstrating biological self-similarity via 4 affine matrix transforms.
                </p>
                <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-xs text-emerald-700 dark:text-emerald-300 space-y-1">
                  <div><strong>Affine Map:</strong> <MathText text="$f(\mathbf{x}) = \mathbf{A}\mathbf{x} + \mathbf{b}$" /></div>
                  <div><strong>Probabilities:</strong> 85% leaflet, 7% left, 7% right, 1% stem</div>
                </div>
              </div>
            )}

            {selectedFractal === 'carpet' && (
              <div className="space-y-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                <p>
                  Sierpiński Carpet (1916). 2D analog of the Cantor set and face of the 3D Menger Sponge.
                </p>
                <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 text-xs text-indigo-700 dark:text-indigo-300 space-y-1">
                  <div><strong>Hausdorff Dimension:</strong></div>
                  <div><MathText text="$D = \frac{\log 8}{\log 3} \approx 1.89279$" /></div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs">
                  <strong>Lebesgue Measure (Area):</strong> <MathText text="$\lim_{n \to \infty} A_n = 0$" />
                </div>
              </div>
            )}

            {(selectedFractal === 'mandelbrot' || selectedFractal === 'julia') && (
              <div className="space-y-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                <p>
                  Benoit Mandelbrot (1980) &amp; Gaston Julia (1918). Quadratic complex polynomial recurrence mapping.
                </p>
                <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/60 text-xs text-purple-700 dark:text-purple-300 space-y-1">
                  <div><strong>Recurrence Relation:</strong> <MathText text="$z_{n+1} = z_n^2 + c$" /></div>
                  <div><strong>Escape Bound:</strong> <MathText text="$|z_n| \le 2 \quad (\forall n \in \mathbb{N})$" /></div>
                </div>
                <p className="text-[11px] text-slate-500">
                  Mitsuhiro Shishikura proved the boundary $\partial M$ has Hausdorff dimension exactly 2.
                </p>
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
};
