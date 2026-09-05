import { Chapter } from '../types';

// ============================================================================
// ⚛️ ELEMENTARY PHYSICS — CLASS 11 CURRICULUM (14 CHAPTERS WITH DYNAMIC OVERVIEWS)
// ============================================================================
export const ELEMENTARY_PHYSICS_11_CHAPTERS: Chapter[] = [
  {
    id: 'el-phy11-ch1',
    class: 11,
    track: 'Elementary Physics',
    name: 'Physics and Measurements',
    description: 'Fundamental physical quantities, SI base & derived units, dimensional analysis $[M^a L^b T^c]$, errors (systematic & random), uncertainty propagation, and significant figures.',
    category: 'Mechanics & Kinematics',
    questionCount: 120,
    difficulty: 'Mixed',
    keyTopics: [
      'Physical Quantities: Base and Derived Units',
      'SI Standards & Metric Prefixes',
      'Principle of Dimensional Homogeneity & Dimensional Formulas',
      'Errors: Systematic, Random, and Percentage Errors',
      'Significant Figures & Measurement Precision'
    ],
    color: 'cyan',
    icon: 'Atom',
    artTheme: 'algebra',
    formulaHighlight: '[\\text{Force}] = [M L T^{-2}], \\quad \\%\\text{Error} = \\left|\\frac{x_{\\text{exp}} - x_{\\text{true}}}{x_{\\text{true}}}\\right| \\times 100\\%',
    overview: {
      summary: 'Physics is the foundational quantitative science exploring the universe. Units, standard dimensions, and rigorous error analysis establish reproducible measurements essential for formulating and verifying physical laws.',
      historicalContext: 'Established by the CGPM metric convention in 1875, leading to the modern SI system redefined through fundamental physical constants (Planck constant, speed of light, cesium transition) in 2019.',
      learningOutcomes: [
        'Distinguish between fundamental base quantities and derived physical quantities',
        'Derive and verify dimensional formulas for mechanical and electrical quantities',
        'Analyze systematic and random experimental errors with statistical uncertainty propagation',
        'Apply significant figures rules in scientific calculations and experimental reports'
      ],
      coreFormulas: [
        { label: 'Dimensional Homogeneity', formula: '[\\text{LHS}] = [\\text{RHS}]', explanation: 'All terms in a physically valid equation must possess identical dimensional formulas.' },
        { label: 'Percentage Error', formula: '\\% \\text{ Error} = \\left| \\frac{x_{\\text{meas}} - x_{\\text{true}}}{x_{\\text{true}}} \\right| \\times 100\\%', explanation: 'Quantifies deviation of experimental result from standard accepted value.' },
        { label: 'Fractional Error in Power Law', formula: 'z = x^a y^b \\implies \\frac{\\Delta z}{z} = a\\frac{\\Delta x}{x} + b\\frac{\\Delta y}{y}', explanation: 'Maximum uncertainty propagation in products and powers of measured variables.' }
      ],
      realWorldApplications: [
        'Precision Metrology: Optical atomic clocks calibrated to cesium-133 hyperfine transitions',
        'Aerospace Engineering: Dimensional scaling in wind tunnel aerodynamic model testing',
        'Sensor Calibration: Error tolerance and resolution profiling in industrial IoT sensors',
        'Astrophysics: Order-of-magnitude Fermi calculations for astronomical scales'
      ],
      keyTheorems: [
        { title: 'Principle of Dimensional Homogeneity', statement: 'In every valid physical equation, every term added, subtracted, or equated must possess identical dimensional exponents of base quantities.', importance: 'Serves as an essential mathematical sanity check for physical derivations.' }
      ]
    }
  },
  {
    id: 'el-phy11-ch2',
    class: 11,
    track: 'Elementary Physics',
    name: 'Kinematics',
    description: 'Rectilinear motion, displacement vs distance, speed and instantaneous velocity, uniform and non-uniform acceleration, kinematic equations of motion, and graphical analysis ($x-t, v-t$).',
    category: 'Mechanics & Kinematics',
    questionCount: 70,
    difficulty: 'Mixed',
    keyTopics: [
      'Displacement, Speed, and Velocity Vectors',
      'Acceleration: Average, Instantaneous, and Free Fall ($g = 9.8\\text{ m/s}^2$)',
      'Kinematic Equations: $v = u + at, \\; s = ut + \\frac{1}{2}at^2, \\; v^2 = u^2 + 2as$',
      'Distance in the $n^{\\text{th}}$ Second: $s_n = u + \\frac{a}{2}(2n - 1)$',
      'Graphical Interpretation of Motion ($x-t$ slope is velocity, $v-t$ area is displacement)'
    ],
    color: 'indigo',
    icon: 'TrendingUp',
    artTheme: 'calculus',
    formulaHighlight: 'v = u + at, \\quad s = ut + \\frac{1}{2}at^2, \\quad v^2 = u^2 + 2as, \\quad s_n = u + \\frac{a}{2}(2n-1)',
    overview: {
      summary: 'Kinematics describes the geometry of motion in space and time without referencing the forces causing it, employing differential calculus and uniformly accelerated equations of motion.',
      historicalContext: 'Galileo Galilei formulated the laws of uniform acceleration and free falling bodies in 1638 at the University of Pisa, disproving Aristotelian mechanics.',
      learningOutcomes: [
        'Compute instantaneous velocity and acceleration using derivatives and differences',
        'Solve multi-stage rectilinear acceleration and vertical free-fall problems',
        'Calculate distance traversed in the n-th second for accelerated particles',
        'Extract velocity from position-time graphs and displacement/acceleration from velocity-time graphs'
      ],
      coreFormulas: [
        { label: 'First Kinematic Equation', formula: 'v = u + at', explanation: 'Relates final velocity to initial velocity, uniform acceleration, and elapsed time.' },
        { label: 'Second Kinematic Equation', formula: 's = ut + \\frac{1}{2}at^2', explanation: 'Displacement as a quadratic function of time under uniform acceleration.' },
        { label: 'Third Kinematic Equation', formula: 'v^2 = u^2 + 2as', explanation: 'Relates velocities directly to displacement independent of time.' }
      ],
      realWorldApplications: [
        'Automotive Safety: Stopping distance calculations and anti-lock braking systems (ABS)',
        'Railway Engineering: Smooth acceleration and braking profiles for high-speed transit',
        'Elevator Design: Jerk-free motion profiling in high-rise building vertical transport',
        'Aviation: Runway takeoff and landing ground roll distance calculations'
      ],
      keyTheorems: [
        { title: 'Mean Speed Theorem (Merton Rule)', statement: 'A uniformly accelerated body travels the same distance in time $t$ as a body moving at constant speed equal to the average of its initial and final velocities: $\\bar{v} = \\frac{u+v}{2}$.', importance: 'Unifies rectilinear motion under constant acceleration.' }
      ]
    }
  },
  {
    id: 'el-phy11-ch3',
    class: 11,
    track: 'Elementary Physics',
    name: 'Dynamics',
    description: 'Newton\'s laws of motion, linear momentum $\\mathbf{p} = m\\mathbf{v}$, impulse $\\mathbf{J} = \\Delta\\mathbf{p}$, law of conservation of momentum, friction (static and kinetic), connected bodies, and Atwood machines.',
    category: 'Laws of Motion & Gravitation',
    questionCount: 70,
    difficulty: 'Mixed',
    keyTopics: [
      'Newton\'s Three Laws of Motion & Inertial Reference Frames',
      'Linear Momentum & Conservation of Momentum in Collisions',
      'Impulse and Force-Time Graphs ($\\mathbf{J} = \\int \\mathbf{F}\\,dt = \\Delta\\mathbf{p}$)',
      'Static ($f_s \\le \\mu_s N$) and Kinetic ($f_k = \\mu_k N$) Friction',
      'Connected Bodies, Pulleys, and Tension in Strings'
    ],
    color: 'emerald',
    icon: 'Sliders',
    artTheme: 'differential',
    formulaHighlight: '\\mathbf{F} = m\\mathbf{a} = \\frac{d\\mathbf{p}}{dt}, \\quad \\mathbf{J} = \\Delta\\mathbf{p}, \\quad f_s \\le \\mu_s N, \\quad f_k = \\mu_k N',
    overview: {
      summary: 'Dynamics investigates the causes of motion through forces and interactions. Newton\'s laws govern momentum exchange, resistive friction forces, and the equilibrium of multi-body coupled systems.',
      historicalContext: 'Sir Isaac Newton published the three fundamental laws of motion in Philosophiæ Naturalis Principia Mathematica in 1687, forming the foundation of classical mechanics.',
      learningOutcomes: [
        'Construct comprehensive Free Body Diagrams (FBDs) for complex coupled systems',
        'Apply Newton\'s second law to pulleys, inclined planes, and accelerating elevators',
        'Calculate limiting static friction, kinetic friction, and coefficients of friction',
        'Solve momentum conservation problems in elastic and inelastic collisions'
      ],
      coreFormulas: [
        { label: 'Newton\'s Second Law', formula: '\\mathbf{F}_{\\text{net}} = m\\mathbf{a} = \\frac{d\\mathbf{p}}{dt}', explanation: 'Net external force equals time rate of change of linear momentum.' },
        { label: 'Impulse-Momentum Relation', formula: '\\mathbf{J} = \\int \\mathbf{F}\\,dt = \\Delta\\mathbf{p}', explanation: 'The impulse of a force equals the change in momentum it produces.' },
        { label: 'Limiting Static Friction', formula: 'f_{s,\\max} = \\mu_s N', explanation: 'Maximum resistive force before impending motion occurs.' }
      ],
      realWorldApplications: [
        'Vehicle Crashworthiness: Crumple zones extending collision duration to reduce impact force',
        'Aerospace Propulsion: Rocket thrust generation via high-speed exhaust momentum ejection',
        'Elevator Safety: Counterweight balancing and cable tension load limits',
        'Tire Engineering: Tread pattern design and rubber compounding for optimal friction coefficients'
      ],
      keyTheorems: [
        { title: 'Newton\'s Third Law', statement: 'Whenever one body exerts a force on a second body, the second body exerts an equal and opposite force on the first body.', importance: 'Establishes force as an interaction and proves universal conservation of momentum.' }
      ]
    }
  },
  {
    id: 'el-phy11-ch4',
    class: 11,
    track: 'Elementary Physics',
    name: 'Rotational and Circular Motion',
    description: 'Angular displacement, angular velocity $\\omega$, angular acceleration $\\alpha$, centripetal acceleration $a_c = \\frac{v^2}{r}$, torque $\\tau = r F \\sin\\theta$, moment of inertia $I = \\sum m r^2$, angular momentum $L = I\\omega$, and banking of roads.',
    category: 'Laws of Motion & Gravitation',
    questionCount: 70,
    difficulty: 'Mixed',
    keyTopics: [
      'Uniform Circular Motion: Centripetal Acceleration & Centripetal Force ($F_c = \\frac{mv^2}{r}$)',
      'Angular Kinematics: $\\omega = \\omega_0 + \\alpha t, \\; \\theta = \\omega_0 t + \\frac{1}{2}\\alpha t^2$',
      'Torque and Rotational Equilibrium ($\\tau = I\\alpha$)',
      'Moment of Inertia of Standard Bodies and Radius of Gyration ($k$)',
      'Banking of Curved Tracks: $\\tan\\theta = \\frac{v^2}{rg}$',
      'Conservation of Angular Momentum ($L_1 = L_2$)'
    ],
    color: 'violet',
    icon: 'Compass',
    artTheme: 'vector',
    formulaHighlight: 'a_c = \\frac{v^2}{r} = \\omega^2 r, \\quad \\tau = I\\alpha, \\quad L = I\\omega, \\quad \\tan\\theta = \\frac{v^2}{rg}',
    overview: {
      summary: 'Rotational dynamics analyzes bodies rotating about fixed axes or undergoing circular trajectories. Angular momentum conservation, torque, and moment of inertia mirror translational mechanical laws in rotational coordinates.',
      historicalContext: 'Christiaan Huygens derived centripetal acceleration in 1659; Leonhard Euler developed rigid body mechanics in 1765.',
      learningOutcomes: [
        'Relate linear kinematic quantities to angular kinematic counterparts ($v = r\\omega, a_t = r\\alpha$)',
        'Calculate centripetal acceleration and required banking angle for friction-free turns',
        'Determine moments of inertia for rods, disks, rings, and solid/hollow spheres',
        'Apply the principle of conservation of angular momentum to rotating mechanical systems'
      ],
      coreFormulas: [
        { label: 'Centripetal Force', formula: 'F_c = \\frac{m v^2}{r} = m \\omega^2 r', explanation: 'Net inward radial force maintaining circular motion.' },
        { label: 'Rotational Second Law', formula: '\\tau_{\\text{net}} = I\\alpha', explanation: 'Net torque equals moment of inertia times angular acceleration.' },
        { label: 'Optimum Road Banking', formula: '\\tan\\theta = \\frac{v^2}{rg}', explanation: 'Banking angle where normal force supplies required centripetal acceleration.' }
      ],
      realWorldApplications: [
        'Automotive Engineering: Super-elevation banking on expressways and racetrack turns',
        'Space Station Artificial Gravity: Rotating habitats generating centripetal acceleration',
        'Flywheel Energy Storage: High-speed carbon-fiber rotors storing kinetic rotational energy',
        'Aerospace Gyroscopes: Inertial navigation and attitude stabilization in satellites'
      ],
      keyTheorems: [
        { title: 'Law of Conservation of Angular Momentum', statement: 'When the net external torque acting on a system is zero, the total angular momentum remains constant: $\\tau_{\\text{ext}} = 0 \\implies I_1\\omega_1 = I_2\\omega_2$.', importance: 'Explains spin acceleration in figure skaters, neutron stars, and planetary orbital conservation.' }
      ]
    }
  },
  {
    id: 'el-phy11-ch5',
    class: 11,
    track: 'Elementary Physics',
    name: 'Work, Energy and Power',
    description: 'Work done by constant & variable forces $W = \\int \\mathbf{F} \\cdot d\\mathbf{r}$, kinetic energy $K = \\frac{1}{2}mv^2$, potential energy, Work-Energy Theorem ($W_{\\text{net}} = \\Delta K$), conservative vs non-conservative forces, elastic/inelastic collisions, and power $P = \\mathbf{F}\\cdot\\mathbf{v}$.',
    category: 'Laws of Motion & Gravitation',
    questionCount: 70,
    difficulty: 'Mixed',
    keyTopics: [
      'Work Done: $W = F d \\cos\\theta = \\mathbf{F} \\cdot \\mathbf{d}$',
      'Work-Energy Theorem: $W_{\\text{net}} = \\Delta K = \\frac{1}{2}m(v^2 - u^2)$',
      'Gravitational & Elastic Spring Potential Energy ($U = \\frac{1}{2}kx^2$)',
      'Conservation of Total Mechanical Energy: $E = K + U = \\text{constant}$',
      'Power & Efficiency: $P = \\frac{dW}{dt} = \\mathbf{F} \\cdot \\mathbf{v}$',
      '1D Elastic Collisions & Coefficient of Restitution $e = \\frac{v_2 - v_1}{u_1 - u_2}$'
    ],
    color: 'amber',
    icon: 'Activity',
    artTheme: 'integral',
    formulaHighlight: 'W = \\mathbf{F}\\cdot\\mathbf{d}, \\quad W_{\\text{net}} = \\Delta K, \\quad U_s = \\frac{1}{2}kx^2, \\quad P = \\mathbf{F}\\cdot\\mathbf{v}',
    overview: {
      summary: 'Work and energy provide scalar formulations of physical dynamics. The Work-Energy Theorem and universal energy conservation unify mechanical, gravitational, and elastic processes.',
      historicalContext: 'Thomas Young coined the term energy in 1807; Gaspard-Gustave de Coriolis formalized kinetic energy and work in 1829.',
      learningOutcomes: [
        'Calculate work done by constant forces and variable force fields',
        'Apply the Work-Energy Theorem to determine velocities and stopping distances',
        'Analyze conservative potential energy functions ($F = -dU/dx$)',
        'Compute power delivery, engine efficiency, and post-collision velocities'
      ],
      coreFormulas: [
        { label: 'Work-Energy Theorem', formula: 'W_{\\text{net}} = K_f - K_i = \\Delta K', explanation: 'Net work done on a particle equals change in its kinetic energy.' },
        { label: 'Spring Potential Energy', formula: 'U = \\frac{1}{2}k x^2', explanation: 'Elastic energy stored in a spring deformed by displacement $x$.' },
        { label: 'Instantaneous Power', formula: 'P = \\mathbf{F} \\cdot \\mathbf{v} = \\frac{dW}{dt}', explanation: 'Rate of doing work or transferring energy.' }
      ],
      realWorldApplications: [
        'Hydroelectric Power: Gravitational potential energy $mgh$ converted into electrical power',
        'Electric Vehicle Braking: Regenerative braking capturing kinetic energy into battery storage',
        'Wind Turbine Energy: Betz limit aerodynamic kinetic power extraction',
        'Charpy Impact Testing: Energy absorption measurement in structural metallurgy'
      ],
      keyTheorems: [
        { title: 'Law of Conservation of Mechanical Energy', statement: 'In an isolated system subject only to conservative forces, total mechanical energy ($E = K + U$) remains strictly constant.', importance: 'Universal principle for analyzing oscillating and conservative dynamical systems.' }
      ]
    }
  },
  {
    id: 'el-phy11-ch6',
    class: 11,
    track: 'Elementary Physics',
    name: 'Fluid Statics',
    description: 'Fluids at rest, density $\\rho$, hydrostatic pressure $P = \\rho gh$, Pascal\'s principle & hydraulic press, atmospheric pressure, Archimedes\' principle & buoyancy $F_B = \\rho_f V g$, surface tension, and capillary action.',
    category: 'Fluids & Material Properties',
    questionCount: 70,
    difficulty: 'Mixed',
    keyTopics: [
      'Fluid Pressure and Hydrostatic Law: $P = P_0 + \\rho gh$',
      'Pascal\'s Law and Hydraulic Multiplication of Force: $\\frac{F_1}{A_1} = \\frac{F_2}{A_2}$',
      'Archimedes\' Principle, Upthrust, and Law of Floatation',
      'Surface Tension ($T = \\frac{F}{L}$), Surface Energy, and Excess Pressure in Drops/Bubbles',
      'Capillarity and Jurin\'s Law: $h = \\frac{2T\\cos\\theta}{\\rho g r}$'
    ],
    color: 'teal',
    icon: 'Layers',
    artTheme: 'calculus',
    formulaHighlight: 'P = \\rho gh, \\quad \\frac{F_1}{A_1} = \\frac{F_2}{A_2}, \\quad F_B = \\rho_f V_{\\text{disp}} g, \\quad \\Delta P_{\\text{bubble}} = \\frac{4T}{r}, \\quad h = \\frac{2T\\cos\\theta}{\\rho g r}',
    overview: {
      summary: 'Fluid statics deals with fluids in static equilibrium. Hydrostatic pressure, Pascal\'s hydraulic transmission, Archimedes\' buoyancy principle, and intermolecular surface tension govern static fluid behavior.',
      historicalContext: 'Archimedes discovered the buoyancy principle in Syracuse around 250 BCE; Blaise Pascal formulated hydraulic transmission in 1653.',
      learningOutcomes: [
        'Calculate hydrostatic pressure at varying liquid depths and determine gauge vs absolute pressure',
        'Apply Pascal\'s law to compute force and displacement ratios in hydraulic lifts',
        'Determine buoyant forces, apparent weights, and floatation stability of submerged bodies',
        'Compute surface tension, excess pressure in soap bubbles/droplets, and capillary rise heights'
      ],
      coreFormulas: [
        { label: 'Hydrostatic Pressure', formula: 'P = P_0 + \\rho g h', explanation: 'Total pressure at depth $h$ below the free surface of a static liquid.' },
        { label: 'Archimedes\' Upthrust', formula: 'F_B = \\rho_f V_{\\text{disp}} g', explanation: 'Buoyant force equals weight of fluid displaced by submerged volume.' },
        { label: 'Capillary Rise (Jurin\'s Law)', formula: 'h = \\frac{2 T \\cos\\theta}{\\rho g r}', explanation: 'Equilibrium height of liquid column in a capillary tube of radius $r$.' }
      ],
      realWorldApplications: [
        'Hydraulic Heavy Machinery: Multi-ton force generation in excavator rams and car lifts',
        'Marine Architecture: Submarine ballast tanks and ship hull displacement buoyancy design',
        'Barometry & Altimetry: Torricelli mercury barometers and aircraft altimeter pressure sensors',
        'Botanical Xylem Transport: Capillary action and surface tension driving sap ascent in trees'
      ],
      keyTheorems: [
        { title: 'Pascal\'s Principle', statement: 'Any pressure applied to an enclosed, incompressible static fluid is transmitted undiminished throughout every portion of the fluid and to the container walls.', importance: 'The fundamental engineering basis for all hydraulic multiplication mechanisms.' }
      ]
    }
  },
  {
    id: 'el-phy11-ch7',
    class: 11,
    track: 'Elementary Physics',
    name: 'Fluid Dynamics',
    description: 'Steady vs turbulent flow, equation of continuity $A_1 v_1 = A_2 v_2$, Bernoulli\'s theorem $P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{const}$, Torricelli\'s theorem $v = \\sqrt{2gh}$, Venturi meter, viscosity $\\eta$, and Stokes\' law $F = 6\\pi\\eta r v$.',
    category: 'Fluids & Material Properties',
    questionCount: 70,
    difficulty: 'Mixed',
    keyTopics: [
      'Streamline vs Turbulent Flow & Reynolds Number ($Re$)',
      'Equation of Continuity: $A_1 v_1 = A_2 v_2$ (Conservation of Mass)',
      'Bernoulli\'s Equation: $P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{constant}$',
      'Applications: Torricelli\'s Law of Efflux ($v = \\sqrt{2gh}$), Venturi Meter, and Aerodynamic Lift',
      'Viscosity, Velocity Gradient, and Newton\'s Law of Viscosity ($F = \\eta A \\frac{dv}{dx}$)',
      'Stokes\' Law ($F = 6\\pi\\eta r v$) and Terminal Velocity ($v_t = \\frac{2r^2(\\rho-\\sigma)g}{9\\eta}$)'
    ],
    color: 'cyan',
    icon: 'Activity',
    artTheme: 'calculus',
    formulaHighlight: 'A_1 v_1 = A_2 v_2, \\quad P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{const}, \\quad v = \\sqrt{2gh}, \\quad F = 6\\pi\\eta r v, \\quad v_t = \\frac{2r^2(\\rho-\\sigma)g}{9\\eta}',
    overview: {
      summary: 'Fluid dynamics examines fluids in motion. Mass conservation (continuity) and mechanical energy conservation (Bernoulli) describe inviscid flows, while viscous shearing and Stokes drag govern real fluid resistance.',
      historicalContext: 'Daniel Bernoulli published Hydrodynamica in 1738; Sir George Gabriel Stokes derived the viscous drag law on spheres in 1851.',
      learningOutcomes: [
        'Apply the continuity equation to calculate fluid speeds in contracting conduits',
        'Employ Bernoulli\'s equation to calculate dynamic pressure drops and flow rates',
        'Determine efflux speeds from open and pressurized orifices using Torricelli\'s theorem',
        'Calculate viscous drag and terminal velocity for falling spherical particles'
      ],
      coreFormulas: [
        { label: 'Equation of Continuity', formula: 'A_1 v_1 = A_2 v_2', explanation: 'Conservation of mass for incompressible fluid along a streamline.' },
        { label: 'Bernoulli\'s Equation', formula: 'P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{constant}', explanation: 'Conservation of total mechanical energy per unit volume along a streamline.' },
        { label: 'Stokes\' Terminal Velocity', formula: 'v_t = \\frac{2 r^2 (\\rho - \\sigma) g}{9 \\eta}', explanation: 'Steady-state falling speed where gravity is balanced by buoyancy and viscous drag.' }
      ],
      realWorldApplications: [
        'Aerospace: Cambered wing aerodynamic lift generation and aircraft airspeed pitot tubes',
        'Medical: Sphygmomanometer blood flow dynamics and cardiovascular catheterization',
        'Meteorology: Atmospheric pressure gradients, cyclonic winds, and raindrop terminal speeds',
        'Chemical Engineering: Pipeline flow optimization and Venturi mixing injectors'
      ],
      keyTheorems: [
        { title: 'Bernoulli\'s Principle', statement: 'An increase in the speed of a fluid occurs simultaneously with a decrease in static pressure or a decrease in the fluid\'s potential energy.', importance: 'Central theorem governing aerodynamic lift, carburetors, and aspirators.' }
      ]
    }
  },
  {
    id: 'el-phy11-ch8',
    class: 11,
    track: 'Elementary Physics',
    name: 'Electric Fields',
    description: 'Coulomb\'s Law $F = \\frac{k q_1 q_2}{r^2}$, electric field intensity $\\mathbf{E} = \\frac{\\mathbf{F}}{q_0}$, field lines, electric dipole and dipole moment $\\mathbf{p} = q(2\\mathbf{a})$, electric flux $\\Phi_E = \\mathbf{E}\\cdot\\mathbf{A}$, Gauss\'s Law $\\oint \\mathbf{E}\\cdot d\\mathbf{A} = \\frac{q_{\\text{enc}}}{\\varepsilon_0}$, and electric potential $V$.',
    category: 'Electrostatics & Current Electricity',
    questionCount: 70,
    difficulty: 'Mixed',
    keyTopics: [
      'Coulomb\'s Law in Vacuum and Dielectric Media ($F = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q_1 q_2}{r^2}$)',
      'Electric Field Intensity $\\mathbf{E}$ of Point Charges and Continuous Distributions',
      'Electric Dipole: Torque ($\\boldsymbol{\\tau} = \\mathbf{p} \\times \\mathbf{E}$) and Potential Energy ($U = -\\mathbf{p}\\cdot\\mathbf{E}$)',
      'Electric Flux and Gauss\'s Law: $\\Phi_E = \\oint \\mathbf{E}\\cdot d\\mathbf{A} = \\frac{q_{\\text{in}}}{\\varepsilon_0}$',
      'Applications of Gauss\'s Law (Infinite wire, Sheet of charge, Spherical shell)',
      'Electric Potential $V = \\frac{k q}{r}$ and Potential Gradient ($E = -\\frac{dV}{dr}$)'
    ],
    color: 'amber',
    icon: 'Sun',
    artTheme: 'vector',
    formulaHighlight: 'F = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q_1 q_2}{r^2}, \\quad \\mathbf{E} = \\frac{\\mathbf{F}}{q}, \\quad \\Phi_E = \\frac{q_{\\text{enc}}}{\\varepsilon_0}, \\quad V = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{r}, \\quad E = -\\frac{dV}{dr}',
    overview: {
      summary: 'Electrostatics studies static electric charges and electric fields. Coulomb\'s inverse-square law, Gauss\'s law, and electric potential describe fundamental interactions between charges in space and dielectrics.',
      historicalContext: 'Charles-Augustin de Coulomb verified the electrostatic force law in 1785; Carl Friedrich Gauss formalized the flux divergence law in 1835.',
      learningOutcomes: [
        'Calculate electrostatic forces between discrete configurations of point charges',
        'Determine electric field intensity and direction for individual charges and dipoles',
        'Apply Gauss\'s law to compute electric fields around symmetric charge geometries',
        'Relate electric potential scalar fields to electric field vector gradients ($E = -\\nabla V$)'
      ],
      coreFormulas: [
        { label: 'Coulomb\'s Law', formula: 'F = \\frac{1}{4\\pi\\varepsilon_0} \\frac{|q_1 q_2|}{r^2}', explanation: 'Inverse square electrostatic force between two stationary point charges.' },
        { label: 'Gauss\'s Law', formula: '\\Phi_E = \\oint \\mathbf{E} \\cdot d\\mathbf{A} = \\frac{Q_{\\text{enc}}}{\\varepsilon_0}', explanation: 'Total electric flux through any closed surface equals enclosed charge divided by permittivity.' },
        { label: 'Electric Potential Gradient', formula: 'E = -\\frac{dV}{dr}', explanation: 'Electric field is the negative spatial rate of change of electric potential.' }
      ],
      realWorldApplications: [
        'Electrostatic Precipitators: Industrial pollution filtration removing particulate soot',
        'Laser Printing & Photocopying: Photoconductive drum electrostatic toner attraction',
        'Semiconductor Devices: Electric field control in field-effect transistors (MOSFETs)',
        'Lightning Protection: Faraday cages and electrostatic shielding in aircraft'
      ],
      keyTheorems: [
        { title: 'Gauss\'s Law of Electrostatics', statement: 'The total electric flux through any closed Gaussian surface in free space is equal to $\\frac{1}{\\varepsilon_0}$ times the total charge enclosed within that surface.', importance: 'One of Maxwell\'s four foundational electromagnetic equations.' }
      ]
    }
  },
  {
    id: 'el-phy11-ch9',
    class: 11,
    track: 'Elementary Physics',
    name: 'Capacitors',
    description: 'Capacitance definition $C = \\frac{Q}{V}$, parallel plate capacitor $C = \\frac{\\varepsilon_0 A}{d}$, effect of dielectrics ($C = \\kappa C_0$), series ($1/C_{\\text{eq}} = \\sum 1/C_i$) and parallel ($C_{\\text{eq}} = \\sum C_i$) combinations, energy stored $U = \\frac{1}{2}CV^2$, and energy density $u = \\frac{1}{2}\\varepsilon_0 E^2$.',
    category: 'Electrostatics & Current Electricity',
    questionCount: 70,
    difficulty: 'Mixed',
    keyTopics: [
      'Capacitance Definition: $C = \\frac{Q}{V}$ (SI Unit: Farad, F)',
      'Parallel Plate Capacitor with Vacuum ($C_0 = \\frac{\\varepsilon_0 A}{d}$) and Dielectric ($C = \\frac{\\kappa \\varepsilon_0 A}{d}$)',
      'Capacitors in Series ($\\frac{1}{C_s} = \\frac{1}{C_1} + \\frac{1}{C_2}$) and Parallel ($C_p = C_1 + C_2$)',
      'Electrostatic Energy Stored: $U = \\frac{1}{2}CV^2 = \\frac{1}{2}QV = \\frac{Q^2}{2C}$',
      'Energy Density in Electric Field: $u_E = \\frac{1}{2}\\varepsilon_0 E^2$',
      'Dielectric Breakdown, Polarization, and Dielectric Constant $\\kappa$'
    ],
    color: 'rose',
    icon: 'Zap',
    artTheme: 'algebra',
    formulaHighlight: 'C = \\frac{Q}{V}, \\quad C = \\frac{\\kappa\\varepsilon_0 A}{d}, \\quad U = \\frac{1}{2}CV^2, \\quad u_E = \\frac{1}{2}\\varepsilon_0 E^2, \\quad C_p = \\sum C_i, \\quad \\frac{1}{C_s} = \\sum \\frac{1}{C_i}',
    overview: {
      summary: 'Capacitors are two-conductor devices that store electric charge and electrostatic potential energy within an electric field. Dielectric materials enhance capacitance by polarization, mitigating electric fields.',
      historicalContext: 'Ewald Georg von Kleist and Pieter van Musschenbroek invented the Leyden jar in 1745; Michael Faraday pioneered dielectric investigations in 1837.',
      learningOutcomes: [
        'Calculate capacitance for parallel plate, spherical, and cylindrical geometries',
        'Determine equivalent capacitance and charge distributions for complex series-parallel networks',
        'Analyze dielectric insertion effects on voltage, charge, field strength, and stored energy',
        'Compute electrostatic energy stored in capacitors and volumetric energy densities'
      ],
      coreFormulas: [
        { label: 'Parallel Plate Capacitance', formula: 'C = \\frac{\\kappa \\varepsilon_0 A}{d}', explanation: 'Capacitance with dielectric constant $\\kappa$, plate area $A$, and separation $d$.' },
        { label: 'Energy Stored in Capacitor', formula: 'U = \\frac{1}{2} C V^2 = \\frac{Q^2}{2C}', explanation: 'Total electrostatic potential energy stored in the electric field.' },
        { label: 'Electric Energy Density', formula: 'u_E = \\frac{1}{2} \\varepsilon_0 E^2', explanation: 'Energy stored per unit volume of the electrostatic field.' }
      ],
      realWorldApplications: [
        'Defibrillators: Rapid high-energy discharge restoring cardiac sinus rhythm',
        'Power Grid Decoupling: Power factor correction capacitor banks smoothing AC grids',
        'Touchscreen Digitizers: Projected capacitive touch sensors in modern smartphones',
        'Camera Flash Units: High-voltage pulsed discharge triggering xenon flash tubes'
      ],
      keyTheorems: [
        { title: 'Principle of Capacitance Enhancement', statement: 'Introducing a dielectric medium of constant $\\kappa$ between capacitor plates reduces the interior electric field by $\\frac{1}{\\kappa}$ for a given charge, increasing capacitance by factor $\\kappa$.', importance: 'Fundamental mechanism for compact high-density charge storage.' }
      ]
    }
  },
  {
    id: 'el-phy11-ch10',
    class: 11,
    track: 'Elementary Physics',
    name: 'D.C. Circuits',
    description: 'Electric current $I = \\frac{dQ}{dt}$, drift velocity $v_d$, Ohm\'s Law ($V = IR$), resistivity $\\rho$ and conductivity $\\sigma$, temperature dependence of resistance, EMF vs terminal potential difference, Kirchhoff\'s laws (KCL & KVL), Wheatstone bridge, and potentiometer.',
    category: 'Electrostatics & Current Electricity',
    questionCount: 70,
    difficulty: 'Mixed',
    keyTopics: [
      'Electric Current, Current Density $\\mathbf{J}$, and Drift Velocity: $I = n e A v_d$',
      'Ohm\'s Law, Resistivity $\\rho = \\frac{R A}{L}$, and Temperature Coefficient $\\alpha$',
      'Resistors in Series ($R_s = R_1 + R_2$) and Parallel ($\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2}$)',
      'Electromotive Force (EMF $\\mathcal{E}$), Internal Resistance ($r$), and Terminal Voltage ($V = \\mathcal{E} - Ir$)',
      'Kirchhoff\'s Junction Law (KCL: $\\sum I = 0$) and Loop Law (KVL: $\\sum V = 0$)',
      'Wheatstone Bridge Balanced Condition ($\\frac{P}{Q} = \\frac{R}{S}$) and Potentiometer Principle'
    ],
    color: 'emerald',
    icon: 'Cpu',
    artTheme: 'differential',
    formulaHighlight: 'I = n e A v_d, \\quad V = IR, \\quad R = \\rho\\frac{L}{A}, \\quad V = \\mathcal{E} - Ir, \\quad \\sum I = 0, \\quad \\sum \\Delta V = 0, \\quad \\frac{P}{Q} = \\frac{R}{S}',
    overview: {
      summary: 'Direct Current (D.C.) circuits investigate steady electron flow driven by constant voltage sources. Kirchhoff\'s conservation laws, Ohm\'s microscopic transport relations, and bridge topologies govern resistive networks.',
      historicalContext: 'Georg Simon Ohm published Ohm\'s law in 1827; Gustav Kirchhoff formulated junction and loop circuit laws in 1845.',
      learningOutcomes: [
        'Relate microscopic electron drift velocity to macroscopic electric current and conductivity',
        'Solve complex multi-loop circuit networks using Kirchhoff\'s Current and Voltage Laws',
        'Calculate internal resistance, terminal voltage, and maximum power transfer condition ($R = r$)',
        'Analyze Wheatstone bridge circuits for precise unknown resistance measurement'
      ],
      coreFormulas: [
        { label: 'Microscopic Current Equation', formula: 'I = n e A v_d', explanation: 'Current in terms of free electron density $n$, charge $e$, area $A$, and drift speed $v_d$.' },
        { label: 'Terminal Potential Difference', formula: 'V = \\mathcal{E} - I r', explanation: 'Voltage across battery terminals delivering current $I$ with internal resistance $r$.' },
        { label: 'Balanced Wheatstone Condition', formula: '\\frac{R_1}{R_2} = \\frac{R_3}{R_4}', explanation: 'Null deflection condition in the galvanometer branch of a Wheatstone bridge.' }
      ],
      realWorldApplications: [
        'Battery Management Systems: Internal resistance tracking and state-of-charge calculation in EVs',
        'Strain Gauge Sensors: Wheatstone bridge transducers measuring micro-strain in aerospace structures',
        'Precision Metrology: Potentiometric zero-current EMF calibration instruments',
        'Printed Circuit Board Design: Trace resistance and Joule heating power dissipation thermal budgets'
      ],
      keyTheorems: [
        { title: 'Kirchhoff\'s Laws', statement: 'KCL (Conservation of Charge): Algebraic sum of currents meeting at any junction is zero ($\\sum I = 0$). KVL (Conservation of Energy): Algebraic sum of potential changes around any closed loop is zero ($\\sum \\Delta V = 0$).', importance: 'The fundamental analytical framework for all electrical network theory.' }
      ]
    }
  },
  {
    id: 'el-phy11-ch11',
    class: 11,
    track: 'Elementary Physics',
    name: 'Oscillations',
    description: 'Periodic & simple harmonic motion (SHM) $\\frac{d^2x}{dt^2} + \\omega^2 x = 0$, displacement $x(t) = A\\cos(\\omega t + \\phi)$, velocity, acceleration, energy in SHM ($E = \\frac{1}{2}kA^2$), simple pendulum $T = 2\\pi\\sqrt{\\frac{L}{g}}$, spring-mass system $T = 2\\pi\\sqrt{\\frac{m}{k}}$, damped oscillations, and resonance.',
    category: 'Oscillations & Waves',
    questionCount: 70,
    difficulty: 'Mixed',
    keyTopics: [
      'Simple Harmonic Motion (SHM) Definition & Differential Equation: $\\frac{d^2x}{dt^2} + \\omega^2 x = 0$',
      'Kinematics of SHM: $x(t) = A\\sin(\\omega t + \\phi), \\; v(t) = \\omega\\sqrt{A^2 - x^2}, \\; a(t) = -\\omega^2 x$',
      'Energy in SHM: Kinetic ($K = \\frac{1}{2}m\\omega^2(A^2 - x^2)$), Potential ($U = \\frac{1}{2}kx^2$), Total ($E = \\frac{1}{2}kA^2$)',
      'Simple Pendulum ($T = 2\\pi\\sqrt{\\frac{L}{g}}$) and Horizontal/Vertical Spring Oscillators ($T = 2\\pi\\sqrt{\\frac{m}{k}}$)',
      'Free, Damped, and Forced Oscillations, Resonance, and Quality Factor ($Q$)'
    ],
    color: 'rose',
    icon: 'Radio',
    artTheme: 'calculus',
    formulaHighlight: '\\frac{d^2x}{dt^2} + \\omega^2 x = 0, \\quad T = 2\\pi\\sqrt{\\frac{L}{g}}, \\quad T = 2\\pi\\sqrt{\\frac{m}{k}}, \\quad E = \\frac{1}{2}k A^2, \\quad v = \\omega\\sqrt{A^2 - x^2}',
    overview: {
      summary: 'Simple Harmonic Motion describes systems where a linear restoring force produces sinusoidal oscillations. Kinetic and potential energies interconvert continuously, maintaining a constant total mechanical energy.',
      historicalContext: 'Galileo Galilei observed the isochronism of the pendulum in 1581; Christiaan Huygens invented the pendulum-regulated clock in 1656.',
      learningOutcomes: [
        'Formulate and solve the differential equation of linear simple harmonic oscillators',
        'Calculate phase, displacement, velocity, and acceleration at any position or time instant',
        'Derive time periods for simple pendulums, compound pendulums, and loaded spring combinations',
        'Analyze energy exchanges between potential and kinetic modes across the oscillation cycle'
      ],
      coreFormulas: [
        { label: 'SHM Restoring Force', formula: 'F = -k x = -m \\omega^2 x', explanation: 'Linear restoring force directed toward the central equilibrium position.' },
        { label: 'Simple Pendulum Period', formula: 'T = 2\\pi \\sqrt{\\frac{L}{g}}', explanation: 'Oscillation period for small angular displacements independent of pendulum bob mass.' },
        { label: 'Spring Oscillator Period', formula: 'T = 2\\pi \\sqrt{\\frac{m}{k}}', explanation: 'Period of mass $m$ attached to an ideal spring of stiffness constant $k$.' }
      ],
      realWorldApplications: [
        'Tuned Mass Dampers: High-rise building oscillation suppression during typhoons/earthquakes (Taipei 101)',
        'Quartz Crystal Resonators: Ultra-stable piezoelectric clock frequency references in microprocessors',
        'Vehicle Suspension: Shock absorbers damping spring oscillations for smooth vehicle ride',
        'Atomic Force Microscopy: Micro-cantilever resonance frequency detection for nanoscale surface mapping'
      ],
      keyTheorems: [
        { title: 'Isochronism Principle of SHM', statement: 'The period of simple harmonic oscillation is strictly independent of the amplitude of vibration for small displacements.', importance: 'The fundamental mathematical property enabling precise mechanical timekeeping.' }
      ]
    }
  },
  {
    id: 'el-phy11-ch12',
    class: 11,
    track: 'Elementary Physics',
    name: 'Acoustics',
    description: 'Mechanical waves, longitudinal vs transverse waves, speed of sound in media ($v = \\sqrt{\\frac{B}{\\rho}}$, Newton-Laplace formula $v = \\sqrt{\\frac{\\gamma P}{\\rho}}$), intensity level (decibels $\\beta = 10\\log_{10}\\frac{I}{I_0}$), standing acoustic waves in organ pipes, beats $f_b = |f_1 - f_2|$, and the Doppler effect.',
    category: 'Oscillations & Waves',
    questionCount: 70,
    difficulty: 'Mixed',
    keyTopics: [
      'Nature of Sound: Longitudinal Pressure Waves & Speed of Sound ($v = \\sqrt{\\frac{\\gamma P}{\\rho}}$)',
      'Factors Affecting Speed of Sound: Temperature ($v \\propto \\sqrt{T}$), Humidity, and Pressure',
      'Sound Intensity ($I = \\frac{P}{4\\pi r^2}$) and Loudness in Decibels ($\\beta = 10\\log_{10}\\frac{I}{I_0}$ with $I_0 = 10^{-12}\\text{ W/m}^2$)',
      'Stationary Waves in Open ($f_n = \\frac{n v}{2L}$) and Closed ($f_n = \\frac{(2n-1)v}{4L}$) Organ Pipes',
      'Beats Phenomenon ($f_{\\text{beat}} = |f_1 - f_2|$) and Musical Tuning',
      'Doppler Effect for Sound: $f\' = f\\left(\\frac{v \\pm v_o}{v \\mp v_s}\\right)$'
    ],
    color: 'blue',
    icon: 'Radio',
    artTheme: 'trigonometry',
    formulaHighlight: 'v = \\sqrt{\\frac{\\gamma P}{\\rho}}, \\quad \\beta = 10\\log_{10}\\left(\\frac{I}{I_0}\\right), \\quad f_{\\text{beat}} = |f_1 - f_2|, \\quad f\' = f\\left(\\frac{v \\pm v_o}{v \\mp v_s}\\right)',
    overview: {
      summary: 'Acoustics investigates the physics of sound generation, propagation, and reception. Newton and Laplace established speed-of-sound thermodynamics, while wave superposition explains pipe resonance, beats, and Doppler frequency shifts.',
      historicalContext: 'Sir Isaac Newton estimated sound speed in 1686; Pierre-Simon Laplace corrected it for adiabatic compressions in 1816; Christian Doppler published the Doppler shift in 1842.',
      learningOutcomes: [
        'Calculate speed of sound under varying temperature, pressure, and gas molecular weight',
        'Determine acoustic intensity levels in decibels and solve inverse-square sound propagation problems',
        'Compute fundamental and harmonic frequencies for open and closed acoustic resonating tubes',
        'Calculate perceived Doppler frequency shifts for moving sound sources, observers, and reflecting targets'
      ],
      coreFormulas: [
        { label: 'Laplace Sound Speed', formula: 'v = \\sqrt{\\frac{\\gamma P}{\\rho}} = \\sqrt{\\frac{\\gamma R T}{M}}', explanation: 'Speed of sound in an ideal gas under adiabatic pressure fluctuations.' },
        { label: 'Sound Intensity Level', formula: '\\beta = 10 \\log_{10}\\left(\\frac{I}{I_0}\\right) \\text{ dB}', explanation: 'Decibel scale relative to threshold of human hearing ($I_0 = 10^{-12} \\text{ W/m}^2$).' },
        { label: 'Doppler Frequency Shift', formula: 'f\' = f \\left( \\frac{v \\pm v_o}{v \\mp v_s} \\right)', explanation: 'Observed frequency when sound source and observer move along line of sight.' }
      ],
      realWorldApplications: [
        'Medical Ultrasound: Pulse-echo diagnostic sonography and fetal Doppler flowmetry',
        'SONAR: Marine depth sounding, submarine acoustic detection, and bathymetric mapping',
        'Architectural Acoustics: Concert hall reverberation time (Sabine formula) and noise cancellation',
        'Aviation & Traffic Radar: Doppler speed measurement guns and sonic boom shockwave prediction'
      ],
      keyTheorems: [
        { title: 'Laplace\'s Adiabatic Correction', statement: 'Sound propagation in gases is an adiabatic process, not isothermal, because rapid pressure oscillations leave insufficient time for heat exchange ($\\gamma = C_p/C_v$).', importance: 'Resolved Newton\'s theoretical underestimation of sound speed by 15%.' }
      ]
    }
  },
  {
    id: 'el-phy11-ch13',
    class: 11,
    track: 'Elementary Physics',
    name: 'Physical Optics',
    description: 'Wave theory of light, Huygens\' principle, wave fronts, Young\'s double slit interference ($y_n = \\frac{n\\lambda D}{d}$), thin film interference, diffraction at a single slit, diffraction grating ($d\\sin\\theta = n\\lambda$), and polarization (Brewster\'s law $\\tan\\theta_p = \\mu$, Malus\'s law $I = I_0\\cos^2\\theta$).',
    category: 'Optics & Wave Theory',
    questionCount: 70,
    difficulty: 'Mixed',
    keyTopics: [
      'Huygens\' Wave Theory, Wavefronts (Spherical, Plane), and Secondary Wavelets',
      'Interference of Light: Coherent Sources, Path Difference ($\\Delta x = n\\lambda$ for constructive)',
      'Young\'s Double Slit Experiment (YDSE): Fringe Width ($\\beta = \\frac{\\lambda D}{d}$)',
      'Diffraction of Light: Single Slit Diffraction Minima ($a\\sin\\theta = n\\lambda$) & Resolving Power',
      'Diffraction Grating: Principal Maxima Condition ($d\\sin\\theta = n\\lambda$)',
      'Polarization of Light: Brewster\'s Angle ($\\tan\\theta_B = \\mu$) and Malus\'s Law ($I = I_0\\cos^2\\theta$)'
    ],
    color: 'violet',
    icon: 'Eye',
    artTheme: 'trigonometry',
    formulaHighlight: '\\beta = \\frac{\\lambda D}{d}, \\quad d\\sin\\theta = n\\lambda, \\quad a\\sin\\theta = m\\lambda, \\quad \\tan\\theta_B = \\mu, \\quad I = I_0\\cos^2\\theta',
    overview: {
      summary: 'Physical optics treats light as an electromagnetic wave, explaining phenomena that ray optics cannot: wave interference, diffraction around aperture boundaries, and transverse polarization.',
      historicalContext: 'Christiaan Huygens proposed wave theory in 1678; Thomas Young demonstrated double-slit interference in 1801; Augustin-Jean Fresnel unified wave diffraction in 1818.',
      learningOutcomes: [
        'Apply Huygens\' principle to derive the laws of reflection and refraction',
        'Calculate fringe widths and bright/dark fringe locations in Young\'s double-slit experiment',
        'Determine angular diffraction widths and grating spectral resolution lines',
        'Apply Brewster\'s law and Malus\'s law to compute transmitted intensities through polarizing filters'
      ],
      coreFormulas: [
        { label: 'Double Slit Fringe Width', formula: '\\beta = \\frac{\\lambda D}{d}', explanation: 'Separation between adjacent bright or dark interference fringes.' },
        { label: 'Diffraction Grating Formula', formula: 'd \\sin\\theta = n \\lambda', explanation: 'Condition for $n^{\\text{th}}$ order principal interference maximum with grating spacing $d$.' },
        { label: 'Brewster\'s Polarization Law', formula: '\\tan\\theta_B = \\mu', explanation: 'Polarizing angle where reflected ray is 100% linearly polarized perpendicular to plane of incidence.' },
        { label: 'Malus\'s Law', formula: 'I = I_0 \\cos^2\\theta', explanation: 'Intensity of polarized light transmitted through an analyzer rotated by angle $\\theta$.' }
      ],
      realWorldApplications: [
        'Anti-Reflective Coatings: Destructive thin-film interference on camera lenses and eyeglasses',
        'Optical Spectrometers: Diffraction gratings dispersing atomic spectral emission lines',
        'Polarized Sunglasses: Glare reduction by filtering horizontally polarized surface reflections',
        'LCD Displays: Liquid crystal polarization rotation controlling pixel optical transmissions'
      ],
      keyTheorems: [
        { title: 'Huygens-Fresnel Superposition Principle', statement: 'Every unobstructed point of a wavefront acts as a source of secondary spherical wavelets; the resultant wavefront at any later time is the envelope of these wavelets with mutual phase interference.', importance: 'The foundational mathematical basis for all wave propagation and diffraction.' }
      ]
    }
  },
  {
    id: 'el-phy11-ch14',
    class: 11,
    track: 'Elementary Physics',
    name: 'Communication',
    description: 'Basics of communication systems (transmitter, channel, receiver), electromagnetic wave spectrum, modulation types (Amplitude Modulation AM, Frequency Modulation FM), digital modulation (PCM, ASK, FSK), bandwidth, fiber optic total internal reflection, satellite orbits, and wireless telemetry.',
    category: 'Semiconductors & Electronics',
    questionCount: 70,
    difficulty: 'Mixed',
    keyTopics: [
      'Basic Elements of Communication: Transmitter, Transmission Channel, and Receiver',
      'Electromagnetic Wave Propagation: Ground wave, Sky wave (ionospheric reflection), and Space wave (line of sight)',
      'Amplitude Modulation (AM): Modulation Index ($m = \\frac{A_m}{A_c}$), Sideband Frequencies ($f_c \\pm f_m$), and Bandwidth ($2f_m$)',
      'Frequency Modulation (FM): Advantages over AM and Frequency Deviation ($\\Delta f$)',
      'Fiber Optic Communication: Numerical Aperture ($NA = \\sqrt{n_1^2 - n_2^2}$), Total Internal Reflection, and Attenuation',
      'Satellite Communication: Geostationary Orbits ($h \\approx 35,786\\text{ km}$) and Uplink/Downlink Frequencies'
    ],
    color: 'indigo',
    icon: 'Radio',
    artTheme: 'algebra',
    formulaHighlight: 'm = \\frac{A_m}{A_c}, \\quad \\text{BW}_{\\text{AM}} = 2f_m, \\quad NA = \\sqrt{n_1^2 - n_2^2}, \\quad d = \\sqrt{2Rh_T} + \\sqrt{2Rh_R}',
    overview: {
      summary: 'Communication physics explores the transmission of information via electromagnetic signals. Carrier modulation, ionospheric propagation, optical fiber waveguiding, and orbital satellites enable modern global telecommunications.',
      historicalContext: 'Heinrich Hertz generated radio waves in 1887; Guglielmo Marconi demonstrated transatlantic wireless telegraphy in 1901; Charles Kao pioneered optical fiber communications in 1966.',
      learningOutcomes: [
        'Identify core components of electronic communication systems and noise sources',
        'Calculate modulation index, sideband spectrum, and bandwidth for AM and FM signals',
        'Determine line-of-sight space wave horizon distances based on antenna heights ($d = \\sqrt{2Rh}$)',
        'Compute critical angles, numerical aperture, and acceptance angles in optical fiber cables'
      ],
      coreFormulas: [
        { label: 'AM Modulation Index', formula: 'm = \\frac{A_m}{A_c} = \\frac{V_{\\max} - V_{\\min}}{V_{\\max} + V_{\\min}}', explanation: 'Ratio of modulating message amplitude to carrier amplitude.' },
        { label: 'Line of Sight Transmission Range', formula: 'd_{\\max} = \\sqrt{2 R h_T} + \\sqrt{2 R h_R}', explanation: 'Maximum space wave transmission distance between transmitter and receiver towers.' },
        { label: 'Fiber Numerical Aperture', formula: 'NA = \\sin\\theta_a = \\sqrt{n_1^2 - n_2^2}', explanation: 'Light-gathering capacity of an optical fiber of core index $n_1$ and cladding index $n_2$.' }
      ],
      realWorldApplications: [
        'Cellular 5G Networks: Millimeter-wave beamforming and high-bandwidth wireless backhauls',
        'Transoceanic Fiber Optics: High-capacity wavelength-division multiplexing subsea internet cables',
        'GPS Navigation: Satellite constellation time-of-flight trilateration positioning',
        'Deep Space Telemetry: NASA Deep Space Network parabolic dish transceiver links'
      ],
      keyTheorems: [
        { title: 'Nyquist-Shannon Sampling Theorem', statement: 'To be completely reconstructed without distortion or aliasing, a continuous bandlimited signal of maximum frequency $f_{\\max}$ must be sampled at a rate $f_s \\ge 2 f_{\\max}$.', importance: 'The mathematical bridge transforming analog continuous physics into digital communication.' }
      ]
    }
  }
];

// ============================================================================
// ⚡ ELEMENTARY PHYSICS — CLASS 12 CURRICULUM (14 CHAPTERS WITH DYNAMIC OVERVIEWS)
// ============================================================================
export const ELEMENTARY_PHYSICS_12_CHAPTERS: Chapter[] = [
  {
    id: 'el-phy12-ch1',
    class: 12,
    track: 'Elementary Physics',
    name: 'Electric Charges & Fields',
    description: 'Electric charge properties, Coulomb\'s inverse-square law, electric field $\\mathbf{E}$, electric dipole $\\mathbf{p} = q(2\\mathbf{a})$, dipole torque $\\boldsymbol{\\tau} = \\mathbf{p} \\times \\mathbf{E}$, Gauss\'s Law $\\oint \\mathbf{E} \\cdot d\\mathbf{A} = \\frac{Q_{\\text{enc}}}{\\varepsilon_0}$, and applications to symmetric charge distributions.',
    category: 'Electrostatics & Current Electricity',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Quantization ($q = \\pm ne$) and Conservation of Electric Charge',
      'Coulomb\'s Law: $\\mathbf{F} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q_1 q_2}{r^2}\\hat{\\mathbf{r}}$',
      'Electric Field & Field Lines for Point Charges and Dipoles',
      'Electric Dipole Moment $\\mathbf{p} = q(2\\mathbf{a})$ and Torque $\\boldsymbol{\\tau} = \\mathbf{p} \\times \\mathbf{E}$',
      'Gauss\'s Law: $\\oint \\mathbf{E} \\cdot d\\mathbf{A} = \\frac{Q_{\\text{enclosed}}}{\\varepsilon_0}$ (Infinite Wire, Plane Sheet, Spherical Shell)'
    ],
    color: 'indigo',
    icon: 'Zap',
    artTheme: 'calculus',
    formulaHighlight: 'F = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q_1 q_2}{r^2}, \\quad \\boldsymbol{\\tau} = \\mathbf{p} \\times \\mathbf{E}, \\quad \\oint \\mathbf{E} \\cdot d\\mathbf{A} = \\frac{Q_{\\text{enc}}}{\\varepsilon_0}',
    overview: {
      summary: 'Electrostatics studies static electric charges and their interactions. Coulomb\'s law quantifies fundamental forces, while Gauss\'s law uses flux symmetry to evaluate electric fields around continuous charge distributions.',
      historicalContext: 'Charles-Augustin de Coulomb formulated his inverse-square law in 1785; Carl Friedrich Gauss published his divergence theorem for electric flux in 1835.',
      learningOutcomes: [
        'Calculate electrostatic forces between multiple point charges using Coulomb\'s law and superposition',
        'Evaluate electric field intensity along axial and equatorial lines of an electric dipole',
        'Apply Gauss\'s law to compute electric fields of infinite line charges, sheets, and spherical shells',
        'Determine torque and potential energy of an electric dipole in uniform and non-uniform fields'
      ],
      coreFormulas: [
        { label: 'Coulomb\'s Law in Vacuum', formula: 'F = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q_1 q_2}{r^2} \\quad \\left(\\frac{1}{4\\pi\\varepsilon_0} \\approx 8.99 \\times 10^9 \\text{ N}\\cdot\\text{m}^2/\\text{C}^2\\right)', explanation: 'Magnitude of electrostatic force between two point charges separated by distance $r$.' },
        { label: 'Gauss\'s Law', formula: '\\Phi_E = \\oint \\mathbf{E} \\cdot d\\mathbf{A} = \\frac{Q_{\\text{enclosed}}}{\\varepsilon_0}', explanation: 'Total electric flux passing through a closed Gaussian surface.' },
        { label: 'Field of Infinite Line Charge', formula: 'E = \\frac{\\lambda}{2\\pi\\varepsilon_0 r}', explanation: 'Radial field at distance $r$ from a line of uniform linear charge density $\\lambda$.' }
      ],
      realWorldApplications: [
        'Photocopying & Laser Printing: Electrostatic charge deposition on photoreceptor drums',
        'Electrostatic Precipitators: Industrial smoke stack particulate pollution filtering',
        'Faraday Cage Shielding: Protecting sensitive avionics and electronics from lightning strikes',
        'Touchscreen Displays: Capacitive touch grid sensing human fingertip charges'
      ],
      keyTheorems: [
        { title: 'Gauss\'s Electrostatic Law', statement: 'The total electric flux through any closed Gaussian surface is equal to $\\frac{1}{\\varepsilon_0}$ times the total net charge enclosed within that surface.', importance: 'The first of Maxwell\'s four fundamental equations of electromagnetism.' }
      ]
    }
  },
  {
    id: 'el-phy12-ch2',
    class: 12,
    track: 'Elementary Physics',
    name: 'Electrostatic Potential & Capacitance',
    description: 'Electric potential $V = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{r}$, conservative field gradient $\\mathbf{E} = -\\boldsymbol{\\nabla}V$, equipotential surfaces, capacitance $C = \\frac{Q}{V}$, parallel-plate capacitors $C = \\frac{\\varepsilon_r \\varepsilon_0 A}{d}$, dielectric polarization, and electrostatic energy density $u = \\frac{1}{2}\\varepsilon_0 E^2$.',
    category: 'Electrostatics & Current Electricity',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Electric Potential: $V(\\mathbf{r}) = -\\int_\\infty^\\mathbf{r} \\mathbf{E} \\cdot d\\mathbf{l} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{r}$',
      'Equipotential Surfaces ($V = \\text{const}$) & Field Gradient $\\mathbf{E} = -\\frac{dV}{dr}\\hat{\\mathbf{r}}$',
      'Capacitance: $C = \\frac{Q}{V}$ & Parallel Plate Capacitor $C = \\frac{\\varepsilon_0 A}{d}$',
      'Dielectric Insertion: $C = K C_0$ & Dielectric Breakdown Strength',
      'Energy Stored in Capacitor: $U = \\frac{1}{2} C V^2 = \\frac{Q^2}{2C}$ & Energy Density $u = \\frac{1}{2}\\varepsilon_0 E^2$'
    ],
    color: 'emerald',
    icon: 'Layers',
    artTheme: 'integral',
    formulaHighlight: 'V = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{r}, \\quad C = \\frac{K \\varepsilon_0 A}{d}, \\quad U = \\frac{1}{2} C V^2, \\quad u_E = \\frac{1}{2}\\varepsilon_0 E^2',
    overview: {
      summary: 'Electric potential represents the potential energy per unit charge. Capacitors store electrostatic energy in electric fields between conductors separated by dielectrics, serving as essential components in electronic circuits.',
      historicalContext: 'Ewald Georg von Kleist and Pieter van Musschenbroek invented the Leyden jar capacitor in 1745; Michael Faraday formalized capacitance and dielectric constants in 1837.',
      learningOutcomes: [
        'Calculate electrostatic potential due to point charges, dipoles, and continuous charge distributions',
        'Determine the relationship between electric field vectors and equipotential contours',
        'Derive capacitance formulas for parallel plate, spherical, and cylindrical capacitors',
        'Compute equivalent capacitance and stored energy for series-parallel capacitor combinations'
      ],
      coreFormulas: [
        { label: 'Parallel Plate Capacitance', formula: 'C = \\frac{K \\varepsilon_0 A}{d}', explanation: 'Capacitance with a dielectric of constant $K$ filling plate spacing $d$.' },
        { label: 'Electrostatic Stored Energy', formula: 'U = \\frac{1}{2} C V^2 = \\frac{1}{2} Q V = \\frac{Q^2}{2C}', explanation: 'Total electrostatic potential energy stored inside the capacitor.' },
        { label: 'Energy Density of Electric Field', formula: 'u_E = \\frac{1}{2} \\varepsilon_0 E^2', explanation: 'Energy stored per unit volume in an electric field of intensity $E$.' }
      ],
      realWorldApplications: [
        'Medical Defibrillators: Rapid high-voltage capacitor energy discharge restoring cardiac rhythm',
        'Camera Flash Units: Capacitor rapid discharge delivering intense high-lumen illumination pulses',
        'DRAM Memory Cells: Microscopic 1-transistor 1-capacitor binary charge storage bits',
        'Supercapacitors: High energy density regenerative braking and grid peak-shaving storage'
      ],
      keyTheorems: [
        { title: 'Equipotential Surface Orthogonality', statement: 'Electric field lines are always perpendicular to equipotential surfaces at every point in space.', importance: 'Proves that zero work is performed moving a charge along an equipotential path.' }
      ]
    }
  },
  {
    id: 'el-phy12-ch3',
    class: 12,
    track: 'Elementary Physics',
    name: 'Current Electricity',
    description: 'Electric current $I = n e A v_d$, drift velocity, Ohm\'s law $\\mathbf{J} = \\sigma\\mathbf{E}$, resistivity and temperature coefficient $\\rho(T)$, EMF and internal resistance, Kirchhoff\'s junction and loop rules, Wheatstone bridge, and potentiometer.',
    category: 'Electrostatics & Current Electricity',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Current & Drift Velocity: $I = n e A v_d$ with $v_d = \\frac{e E \\tau}{m}$',
      'Ohm\'s Law: $V = I R$ and Resistivity: $R = \\rho \\frac{L}{A}$ with $\\rho(T) = \\rho_0[1+\\alpha(T-T_0)]$',
      'EMF ($\\mathcal{E}$), Internal Resistance ($r$), and Terminal Voltage: $V = \\mathcal{E} - I r$',
      'Kirchhoff\'s Rules: Junction Rule ($\\sum I = 0$) & Loop Rule ($\\sum \\Delta V = 0$)',
      'Wheatstone Bridge Balance: $\\frac{P}{Q} = \\frac{R}{S}$ & Potentiometer Principle'
    ],
    color: 'amber',
    icon: 'Sliders',
    artTheme: 'differential',
    formulaHighlight: 'I = n e A v_d, \\quad V = I R, \\quad \\sum I_{\\text{in}} = \\sum I_{\\text{out}}, \\quad \\sum \\Delta V = 0, \\quad \\frac{P}{Q} = \\frac{R}{S}',
    overview: {
      summary: 'Current electricity investigates the dynamics of charge carrier drift in conducting materials. Kirchhoff\'s conservation laws and bridge networks enable complete analysis of complex multi-loop DC electrical circuits.',
      historicalContext: 'Georg Simon Ohm published Ohm\'s Law in 1827; Gustav Kirchhoff published his circuit laws in 1845, establishing universal circuit analysis rules.',
      learningOutcomes: [
        'Derive the microscopic relationship between drift velocity, relaxation time, and electric current',
        'Calculate resistance variations across temperature regimes and analyze color-coded resistors',
        'Apply Kirchhoff\'s junction and loop laws to solve multi-branch DC mesh networks',
        'Determine unknown resistances and EMFs using Wheatstone bridge and potentiometer methods'
      ],
      coreFormulas: [
        { label: 'Drift Velocity Relation', formula: 'v_d = \\frac{e E \\tau}{m} = \\frac{I}{n e A}', explanation: 'Average drift speed of conduction electrons under applied field $E$.' },
        { label: 'Resistivity and Resistance', formula: 'R = \\rho \\frac{L}{A} = \\frac{m}{n e^2 \\tau} \\frac{L}{A}', explanation: 'Resistance in terms of material resistivity $\\rho$, length $L$, and area $A$.' },
        { label: 'Wheatstone Bridge Balance Condition', formula: '\\frac{R_1}{R_2} = \\frac{R_3}{R_4} \\implies I_g = 0', explanation: 'Condition for zero galvanometer current across bridge diagonal.' }
      ],
      realWorldApplications: [
        'Electrical Power Grid: High-voltage AC/DC transmission line resistive loss reduction ($P = I^2 R$)',
        'Strain Gauge Sensors: Wheatstone bridge resistive micro-strain measurements in aerospace',
        'Battery Management Systems: Monitoring internal battery cell resistance and State of Charge (SoC)',
        'Thermistor Temperature Probes: NTC/PTC resistance-temperature measurement in avionics'
      ],
      keyTheorems: [
        { title: 'Kirchhoff\'s Current and Voltage Laws', statement: 'At any circuit junction, $\\sum I = 0$ (conservation of charge), and around any closed loop, $\\sum \\Delta V = 0$ (conservation of energy).', importance: 'The fundamental mathematical axioms of all electrical circuit analysis.' }
      ]
    }
  },
  {
    id: 'el-phy12-ch4',
    class: 12,
    track: 'Elementary Physics',
    name: 'Moving Charges & Magnetism',
    description: 'Lorentz force $\\mathbf{F} = q(\\mathbf{E} + \\mathbf{v} \\times \\mathbf{B})$, magnetic force on current-carrying conductor $\\mathbf{F} = I\\mathbf{L} \\times \\mathbf{B}$, Biot-Savart law, Ampere\'s Circuital Law $\\oint \\mathbf{B} \\cdot d\\mathbf{l} = \\mu_0 I_{\\text{enc}}$, magnetic field of solenoids/toroids, and moving coil galvanometers.',
    category: 'Magnetism & Induction',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Lorentz Force: $\\mathbf{F} = q(\\mathbf{E} + \\mathbf{v} \\times \\mathbf{B})$ & Helical Motion ($r = \\frac{mv}{qB}, T = \\frac{2\\pi m}{qB}$)',
      'Biot-Savart Law: $d\\mathbf{B} = \\frac{\\mu_0}{4\\pi} \\frac{I d\\mathbf{l} \\times \\hat{\\mathbf{r}}}{r^2}$ (Circular Loop Field $B = \\frac{\\mu_0 I R^2}{2(R^2+x^2)^{3/2}}$)',
      'Ampere\'s Circuital Law: $\\oint \\mathbf{B} \\cdot d\\mathbf{l} = \\mu_0 I_{\\text{enclosed}}$ (Straight Wire, Solenoid, Toroid)',
      'Force Between Parallel Currents: $\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$ (Definition of the Ampere)',
      'Torque on Magnetic Loop $\\boldsymbol{\\tau} = \\mathbf{M} \\times \\mathbf{B}$ & Moving Coil Galvanometer Sensitivity'
    ],
    color: 'cyan',
    icon: 'Compass',
    artTheme: 'vector',
    formulaHighlight: '\\mathbf{F} = q(\\mathbf{E} + \\mathbf{v} \\times \\mathbf{B}), \\quad d\\mathbf{B} = \\frac{\\mu_0}{4\\pi}\\frac{I d\\mathbf{l} \\times \\hat{\\mathbf{r}}}{r^2}, \\quad \\oint \\mathbf{B} \\cdot d\\mathbf{l} = \\mu_0 I_{\\text{enc}}',
    overview: {
      summary: 'Moving electric charges generate magnetic fields, and magnetic fields exert forces on moving charges. The Biot-Savart law and Ampere\'s circuital law calculate magnetic field topologies around current-carrying conductors.',
      historicalContext: 'Hans Christian Ørsted discovered current-induced magnetic deflection in 1820; Jean-Baptiste Biot, Félix Savart, and André-Marie Ampère formalized magnetic electrodynamics.',
      learningOutcomes: [
        'Calculate trajectory radii and orbital frequencies for charged particles moving in uniform magnetic fields',
        'Apply the Biot-Savart law to find magnetic fields at centers and axes of circular coils',
        'Use Ampere\'s circuital law to derive magnetic fields inside ideal solenoids and toroids',
        'Determine forces between parallel current-carrying conductors and torque on magnetic dipoles'
      ],
      coreFormulas: [
        { label: 'Lorentz Force', formula: '\\mathbf{F} = q(\\mathbf{E} + \\mathbf{v} \\times \\mathbf{B})', explanation: 'Total force on a charge $q$ experiencing simultaneous electric and magnetic fields.' },
        { label: 'Ampere\'s Circuital Law', formula: '\\oint \\mathbf{B} \\cdot d\\mathbf{l} = \\mu_0 I_{\\text{enclosed}}', explanation: 'Line integral of magnetic field around any closed loop equals $\\mu_0$ times enclosed current.' },
        { label: 'Magnetic Field of Ideal Solenoid', formula: 'B = \\mu_0 n I', explanation: 'Uniform axial magnetic field inside a solenoid with $n$ turns per unit length.' }
      ],
      realWorldApplications: [
        'Magnetic Resonance Imaging (MRI): High-field superconducting solenoid magnets for medical diagnostics',
        'Electric Motors & Actuators: Lorentz torque driving electric vehicle traction motors',
        'Particle Accelerators (CERN LHC): Magnetic dipole bending fields guiding proton beams',
        'Mass Spectrometry: Velocity selector and magnetic deflection isotope mass separation'
      ],
      keyTheorems: [
        { title: 'Ampere\'s Circuital Theorem', statement: 'The circulation of magnetic field $\\mathbf{B}$ around any closed Amperian path equals $\\mu_0$ times the total electric current passing through the surface enclosed by the path.', importance: 'The magnetic counterpart to Gauss\'s Law in symmetric current geometry.' }
      ]
    }
  },
  {
    id: 'el-phy12-ch5',
    class: 12,
    track: 'Elementary Physics',
    name: 'Magnetism & Matter',
    description: 'Magnetic dipole moment $\\mathbf{M} = I\\mathbf{A}$, Gauss\'s Law for Magnetism $\\oint \\mathbf{B} \\cdot d\\mathbf{A} = 0$, Earth\'s magnetic elements (declination, dip, horizontal field), classification of magnetic materials (diamagnetic, paramagnetic, ferromagnetic, Curie\'s law), and hysteresis.',
    category: 'Magnetism & Induction',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Bar Magnet as Magnetic Dipole ($M = m \\times 2l$) & Magnetic Field Lines',
      'Gauss\'s Law for Magnetism: $\\oint \\mathbf{B} \\cdot d\\mathbf{A} = 0$ (Absence of Monopoles)',
      'Earth\'s Magnetic Field: Declination ($\\theta$), Angle of Dip ($\\delta$), and Horizontal Component ($B_H = B\\cos\\delta$)',
      'Magnetic Intensity ($\\mathbf{H}$), Magnetization ($\\mathbf{M}$), and Magnetic Susceptibility ($\\chi_m$)',
      'Dia-, Para-, and Ferromagnetism, Curie\'s Law ($\\chi \\propto 1/T$), and Hysteresis ($B-H$) Loop'
    ],
    color: 'blue',
    icon: 'Radio',
    artTheme: 'conic',
    formulaHighlight: '\\oint \\mathbf{B} \\cdot d\\mathbf{A} = 0, \\quad \\mathbf{B} = \\mu_0(\\mathbf{H} + \\mathbf{M}), \\quad \\chi_m = \\frac{M}{H}, \\quad B_H = B\\cos\\delta',
    overview: {
      summary: 'Magnetic properties of materials originate from atomic electron orbital and spin magnetic dipoles. Gauss\'s law for magnetism confirms the absence of isolated magnetic monopoles, while materials exhibit diamagnetic, paramagnetic, or ferromagnetic behaviors.',
      historicalContext: 'William Gilbert published De Magnete in 1600 identifying Earth as a giant magnet; Pierre Curie discovered the temperature dependence of paramagnetic susceptibility in 1895.',
      learningOutcomes: [
        'Calculate magnetic field intensity along axial and broadside-on equatorial lines of bar magnets',
        'Explain Gauss\'s law for magnetism and its implication for continuous closed magnetic flux loops',
        'Determine terrestrial magnetic field components using dip circles and deflection magnetometers',
        'Differentiate between diamagnetic, paramagnetic, and ferromagnetic materials via susceptibility and hysteresis'
      ],
      coreFormulas: [
        { label: 'Gauss\'s Law for Magnetism', formula: '\\oint \\mathbf{B} \\cdot d\\mathbf{A} = 0', explanation: 'Net magnetic flux through any closed Gaussian surface is identically zero.' },
        { label: 'Magnetic Susceptibility', formula: '\\chi_m = \\frac{M}{H} = \\mu_r - 1', explanation: 'Degree of magnetization induced in a material per unit applied magnetic field intensity.' },
        { label: 'Curie\'s Law for Paramagnetism', formula: '\\chi = \\frac{C}{T}', explanation: 'Paramagnetic susceptibility is inversely proportional to absolute temperature $T$.' }
      ],
      realWorldApplications: [
        'Magnetic Data Storage: Ferromagnetic thin-film domain orientations on computer hard drives',
        'Transformer Core Design: Soft ferromagnetic silicon steel reducing hysteresis power loss',
        'Permanent Magnet Motors: Rare-earth NdFeB magnets delivering extreme magnetic flux densities',
        'Geophysical Navigation: Geomagnetic field orientation aiding aviation and marine compasses'
      ],
      keyTheorems: [
        { title: 'Non-Existence of Magnetic Monopoles', statement: 'Magnetic poles always exist in equal and opposite dipole pairs; isolated single magnetic charges (monopoles) do not exist in classical electromagnetism.', importance: 'Guarantees that all magnetic field lines form continuous closed loops.' }
      ]
    }
  },
  {
    id: 'el-phy12-ch6',
    class: 12,
    track: 'Elementary Physics',
    name: 'Electromagnetic Induction (EMI)',
    description: 'Magnetic flux $\\Phi_B = \\mathbf{B} \\cdot \\mathbf{A}$, Faraday\'s Law of Electromagnetic Induction $\\mathcal{E} = -\\frac{d\\Phi_B}{dt}$, Lenz\'s Law, motional EMF $\\mathcal{E} = Bvl$, eddy currents, self-inductance $L$, mutual inductance $M$, and energy stored in inductors $U = \\frac{1}{2}LI^2$.',
    category: 'Magnetism & Induction',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Magnetic Flux: $\\Phi_B = \\int \\mathbf{B} \\cdot d\\mathbf{A} = B A \\cos\\theta$',
      'Faraday\'s Law: $\\mathcal{E} = -N \\frac{d\\Phi_B}{dt}$ and Lenz\'s Law of Conservation of Energy',
      'Motional Electromotive Force: $\\mathcal{E} = B v l$ and Induced Current $I = \\frac{B v l}{R}$',
      'Eddy Currents, Induction Heating & Electromagnetic Damping',
      'Self-Inductance ($L = \\frac{N\\Phi}{I}$) and Mutual Inductance ($M = \\frac{\\mu_0 N_1 N_2 A}{l}$)'
    ],
    color: 'teal',
    icon: 'Activity',
    artTheme: 'calculus',
    formulaHighlight: '\\mathcal{E} = -\\frac{d\\Phi_B}{dt}, \\quad \\mathcal{E} = B v l, \\quad U = \\frac{1}{2} L I^2, \\quad L = \\frac{\\mu_0 N^2 A}{l}',
    overview: {
      summary: 'Electromagnetic induction describes how a changing magnetic flux induces an electromotive force (EMF) in a closed conductor. Lenz\'s law guarantees energy conservation by opposing the flux change, enabling electrical power generation.',
      historicalContext: 'Discovered independently by Michael Faraday in 1831 and Joseph Henry, revolutionizing electrical engineering and mechanical-to-electrical energy conversion.',
      learningOutcomes: [
        'Calculate induced EMF using Faraday\'s Law for time-varying magnetic fields and moving loops',
        'Determine direction of induced currents using Lenz\'s law and Right-Hand Rules',
        'Derive motional EMF and power dissipation in sliding conducting bars across magnetic tracks',
        'Calculate self and mutual inductances for coaxial solenoids and stored magnetic energy'
      ],
      coreFormulas: [
        { label: 'Faraday-Lenz Law', formula: '\\mathcal{E} = -\\frac{d\\Phi_B}{dt} = -\\frac{d}{dt}(B A \\cos\\theta)', explanation: 'Induced EMF equals the negative rate of change of magnetic flux.' },
        { label: 'Motional EMF', formula: '\\mathcal{E} = B v l', explanation: 'EMF induced across a conductor of length $l$ moving at speed $v$ through field $B$.' },
        { label: 'Energy in Magnetic Field of Inductor', formula: 'U_B = \\frac{1}{2} L I^2', explanation: 'Magnetic potential energy stored in an inductor carrying current $I$.' }
      ],
      realWorldApplications: [
        'Hydro & Steam Turbine Generators: Rotating rotor magnetic flux inducing multi-megawatt AC voltage',
        'Induction Cooktops: High-frequency eddy currents heating ferromagnetic cookware directly',
        'Electromagnetic Braking: Eddy current retardation in high-speed bullet trains (Shinkansen)',
        'Wireless EV Charging: Resonant inductive coupling transmitting power across air gaps'
      ],
      keyTheorems: [
        { title: 'Lenz\'s Law of Induced Currents', statement: 'The polarity of an induced electromotive force is always such that it produces a current whose magnetic field opposes the original change in flux that produced it.', importance: 'Direct consequence of the law of conservation of energy in electrodynamics.' }
      ]
    }
  },
  {
    id: 'el-phy12-ch7',
    class: 12,
    track: 'Elementary Physics',
    name: 'Alternating Current (AC) Circuits',
    description: 'Sinusoidal AC voltage and current $V(t) = V_0\\sin(\\omega t)$, root-mean-square values $V_{\\text{rms}} = \\frac{V_0}{\\sqrt{2}}$, phasor diagrams, inductive reactance $X_L = \\omega L$, capacitive reactance $X_C = \\frac{1}{\\omega C}$, LCR series resonance $\\omega_0 = \\frac{1}{\\sqrt{LC}}$, quality factor $Q$, power factor $\\cos\\phi$, and transformers.',
    category: 'Electrostatics & Current Electricity',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'AC Voltage & RMS Relationships: $I_{\\text{rms}} = \\frac{I_0}{\\sqrt{2}} \\approx 0.707 I_0$',
      'Reactance: Inductive $X_L = \\omega L$ (Current Lags) & Capacitive $X_C = \\frac{1}{\\omega C}$ (Current Leads)',
      'Series LCR Circuit Impedance: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ with $\\tan\\phi = \\frac{X_L - X_C}{R}$',
      'Electrical Resonance: $\\omega_0 = \\frac{1}{\\sqrt{LC}}$, Sharpness, and Quality Factor $Q = \\frac{\\omega_0 L}{R}$',
      'Power in AC: $P_{\\text{avg}} = V_{\\text{rms}} I_{\\text{rms}} \\cos\\phi$ & Transformer Equation $\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s}$'
    ],
    color: 'purple',
    icon: 'Zap',
    artTheme: 'trigonometry',
    formulaHighlight: 'I_{\\text{rms}} = \\frac{I_0}{\\sqrt{2}}, \\quad Z = \\sqrt{R^2 + (\\omega L - \\frac{1}{\\omega C})^2}, \\quad f_0 = \\frac{1}{2\\pi\\sqrt{LC}}, \\quad \\frac{V_s}{V_p} = \\frac{N_s}{N_p}',
    overview: {
      summary: 'Alternating current powers global electrical grids. Phasor analysis resolves phase relationships between voltage and current across resistive, inductive, and capacitive components, with resonance enabling frequency tuning.',
      historicalContext: 'Nikola Tesla and George Westinghouse pioneered multiphase AC power in the late 19th-century "War of the Currents", proving its superiority over DC for long-distance transmission.',
      learningOutcomes: [
        'Calculate peak, instantaneous, and RMS values for sinusoidal voltages and currents',
        'Construct phasor diagrams and compute total impedance $Z$ for series LCR networks',
        'Determine resonant frequency, bandwidth, and quality factor $Q$ of tuned filter circuits',
        'Evaluate active, reactive, and apparent power, and calculate transformer voltage/current step ratios'
      ],
      coreFormulas: [
        { label: 'Series LCR Impedance', formula: 'Z = \\sqrt{R^2 + \\left(\\omega L - \\frac{1}{\\omega C}\\right)^2}', explanation: 'Total opposition to AC current flow combining resistance and net reactance.' },
        { label: 'Resonant Frequency', formula: '\\omega_0 = \\frac{1}{\\sqrt{L C}} \\implies f_0 = \\frac{1}{2\\pi\\sqrt{L C}}', explanation: 'Frequency where inductive and capacitive reactances cancel ($X_L = X_C$), minimizing impedance to $Z=R$.' },
        { label: 'Ideal Transformer Relation', formula: '\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s}', explanation: 'Voltage transformation ratio proportional to secondary-to-primary turn ratio.' }
      ],
      realWorldApplications: [
        'Power Grid Transmission: Step-up transformers boosting voltages to 400kV+ minimizing line losses',
        'Radio & Wireless Tuning: Variable capacitor LCR tank resonance selecting specific broadcasting stations',
        'Audio Equalizers & Crossovers: Passive filter networks directing bass/treble frequencies to speakers',
        'Switched-Mode Power Supplies: High-frequency AC conversion in consumer electronics adapters'
      ],
      keyTheorems: [
        { title: 'Maximum Power Transfer at Resonance', statement: 'In a series LCR circuit driven at resonant frequency $\\omega_0 = 1/\\sqrt{LC}$, the total impedance is purely resistive ($Z=R$) and power dissipation in the circuit reaches its absolute maximum.', importance: 'The operational basis of all radiofrequency transmitters and receivers.' }
      ]
    }
  },
  {
    id: 'el-phy12-ch8',
    class: 12,
    track: 'Elementary Physics',
    name: 'Electromagnetic Waves',
    description: 'Displacement current $I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt}$, Maxwell\'s four equations, transverse wave propagation, speed of light $c = \\frac{1}{\\sqrt{\\mu_0\\varepsilon_0}}$, energy transport, Poynting vector $\\mathbf{S} = \\frac{1}{\\mu_0}(\\mathbf{E} \\times \\mathbf{B})$, and the electromagnetic spectrum.',
    category: 'Oscillations & Waves',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Displacement Current: $I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt}$ & Maxwell-Ampere Law',
      'Maxwell\'s Four Fundamental Equations of Electromagnetism',
      'Wave Velocity: $c = \\frac{1}{\\sqrt{\\mu_0\\varepsilon_0}} = \\frac{E_0}{B_0} \\approx 3 \\times 10^8 \\text{ m/s}$',
      'Transverse Nature of EM Waves: $\\mathbf{E} \\perp \\mathbf{B} \\perp \\mathbf{k}$',
      'Energy Density ($u = \\varepsilon_0 E^2$) & Poynting Vector: $\\mathbf{S} = \\frac{1}{\\mu_0}(\\mathbf{E} \\times \\mathbf{B})$',
      'Electromagnetic Spectrum (Radio, Micro, Infrared, Visible, UV, X-rays, Gamma rays)'
    ],
    color: 'cyan',
    icon: 'Radio',
    artTheme: 'calculus',
    formulaHighlight: 'c = \\frac{1}{\\sqrt{\\mu_0\\varepsilon_0}}, \\quad \\mathbf{S} = \\frac{1}{\\mu_0}(\\mathbf{E} \\times \\mathbf{B}), \\quad \\frac{E_0}{B_0} = c, \\quad I_d = \\varepsilon_0\\frac{d\\Phi_E}{dt}',
    overview: {
      summary: 'Electromagnetic waves are self-propagating oscillations of coupled electric and magnetic fields traveling through vacuum at the speed of light. Maxwell\'s unification of electricity and magnetism proved that light is an electromagnetic wave.',
      historicalContext: 'James Clerk Maxwell published his unifying equations in 1865; Heinrich Hertz experimentally verified radio wave propagation in 1887.',
      learningOutcomes: [
        'Explain the necessity of Maxwell\'s displacement current in capacitor charging loops',
        'Write Maxwell\'s four differential/integral equations and identify their physical meanings',
        'Calculate electric and magnetic field amplitudes ($E_0 = c B_0$) for propagating EM waves',
        'Determine energy flux density using the Poynting vector and map EM spectrum characteristics'
      ],
      coreFormulas: [
        { label: 'Speed of Light in Vacuum', formula: 'c = \\frac{1}{\\sqrt{\\mu_0\\varepsilon_0}} \\approx 2.998 \\times 10^8 \\text{ m/s}', explanation: 'Fundamental invariant speed determined by electric permittivity and magnetic permeability.' },
        { label: 'Poynting Vector', formula: '\\mathbf{S} = \\frac{1}{\\mu_0}(\\mathbf{E} \\times \\mathbf{B})', explanation: 'Vector rate of directional energy flow per unit area in an electromagnetic wave.' },
        { label: 'EM Energy Density', formula: 'u = u_E + u_B = \\frac{1}{2}\\varepsilon_0 E^2 + \\frac{1}{2\\mu_0}B^2 = \\varepsilon_0 E^2', explanation: 'Total electromagnetic energy stored per unit volume of space.' }
      ],
      realWorldApplications: [
        '5G & Satellite Telecommunications: Microwave and millimeter-wave wireless data transmission',
        'Radar & Weather Forecasting: Doppler pulsed radio echo atmospheric cloud mapping',
        'Fiber-Optic Internet: Infrared optical carrier signals transmitting petabits of global web data',
        'Medical Radiology: Diagnostic X-ray imaging and oncology radiation therapy'
      ],
      keyTheorems: [
        { title: 'Maxwell\'s Electromagnetic Wave Theorem', statement: 'Time-varying electric fields produce magnetic fields and time-varying magnetic fields produce electric fields, propagating as transverse coupled waves through vacuum at speed $c = 1/\\sqrt{\\mu_0\\varepsilon_0}$.', importance: 'Unifies light, optics, electricity, and magnetism into a single comprehensive theory.' }
      ]
    }
  },
  {
    id: 'el-phy12-ch9',
    class: 12,
    track: 'Elementary Physics',
    name: 'Ray Optics & Optical Instruments',
    description: 'Reflection, refraction, Snell\'s Law ($n_1\\sin\\theta_1 = n_2\\sin\\theta_2$), Total Internal Reflection (TIR), critical angle $\\sin\\theta_c = \\frac{1}{n}$, prism formula $n = \\frac{\\sin(\\frac{A+D_m}{2})}{\\sin(\\frac{A}{2})}$, thin lens equation $\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u}$, lens maker\'s formula, compound microscope, and astronomical telescope.',
    category: 'Optics & Wave Theory',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Refraction at Spherical Surfaces & Snell\'s Law: $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$',
      'Total Internal Reflection (TIR) & Optical Fibers ($\\sin i_c = \\frac{1}{n}$)',
      'Prism Deviation & Refractive Index: $n = \\frac{\\sin\\left(\\frac{A + D_m}{2}\\right)}{\\sin\\left(\\frac{A}{2}\\right)}$',
      'Lens Maker\'s Formula: $\\frac{1}{f} = (n - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$ & Power $P = \\frac{1}{f}$',
      'Magnification of Compound Microscope ($M = \\frac{L}{f_o}\\frac{D}{f_e}$) & Astronomical Telescope ($M = \\frac{f_o}{f_e}$)'
    ],
    color: 'emerald',
    icon: 'Sun',
    artTheme: 'triangle',
    formulaHighlight: 'n_1\\sin\\theta_1 = n_2\\sin\\theta_2, \\quad \\frac{1}{f} = (n-1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right), \\quad M_{\\text{telescope}} = \\frac{f_o}{f_e}',
    overview: {
      summary: 'Ray optics models light propagation as rectilinear rays obeying reflection and refraction laws at interfaces. Geometric ray tracing designs precision lenses, prisms, optical fiber waveguides, microscopes, and telescopes.',
      historicalContext: 'Willebrord Snellius formulated Snell\'s Law in 1621; René Descartes published geometric ray refraction in La Dioptrique in 1637.',
      learningOutcomes: [
        'Trace rays and calculate image locations, magnification, and real/virtual orientations',
        'Apply total internal reflection principles to prism periscopes and optical fiber cladding',
        'Use the Lens Maker\'s formula to design lenses with prescribed focal lengths and curvatures',
        'Calculate angular magnification and tube lengths for compound microscopes and astronomical telescopes'
      ],
      coreFormulas: [
        { label: 'Snell\'s Law of Refraction', formula: 'n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2', explanation: 'Fundamental relation between angles of incidence and refraction across optical boundaries.' },
        { label: 'Lens Maker\'s Formula', formula: '\\frac{1}{f} = (n - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)', explanation: 'Calculates focal length from glass refractive index $n$ and radii of curvature $R_1, R_2$.' },
        { label: 'Telescope Angular Magnification', formula: 'M = \\frac{f_o}{f_e}', explanation: 'Magnifying power of an astronomical telescope in normal adjustment.' }
      ],
      realWorldApplications: [
        'Fiber-Optic Communications: Total internal reflection carrying internet signals with minimal attenuation',
        'Vision Correction: Optometric prescription glasses correcting myopia (concave) and hyperopia (convex)',
        'Observational Astronomy: Giant ground-based and space telescopes (James Webb Space Telescope)',
        'Biomedical Endoscopy: Flexible fiber-optic bundles providing internal surgical imaging'
      ],
      keyTheorems: [
        { title: 'Fermat\'s Principle of Least Time', statement: 'The path taken by a ray of light between two points is the path that can be traversed in the least time.', importance: 'The overarching variational principle from which all reflection and refraction laws derive.' }
      ]
    }
  },
  {
    id: 'el-phy12-ch10',
    class: 12,
    track: 'Elementary Physics',
    name: 'Wave Optics',
    description: 'Huygens\' wave principle, wave fronts, reflection and refraction by wave theory, Young\'s Double Slit Experiment (YDSE) fringe width $\\beta = \\frac{\\lambda D}{d}$, single slit Fraunhofer diffraction angular width $\\theta = \\frac{\\lambda}{a}$, Brewster\'s Law $\\tan i_p = n$, and polarization.',
    category: 'Optics & Wave Theory',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Huygens\' Principle of Secondary Wavelets & Wavefront Construction',
      'Interference & Young\'s Double Slit Experiment (YDSE): Path Difference $\\Delta x = d\\sin\\theta$',
      'YDSE Fringe Width: $\\beta = \\frac{\\lambda D}{d}$ for Bright and Dark Fringes',
      'Single Slit Fraunhofer Diffraction: Central Maxima Width $2\\theta = \\frac{2\\lambda}{a}$',
      'Polarization of Light: Malus\'s Law ($I = I_0\\cos^2\\theta$) & Brewster\'s Law ($\\tan i_p = n$)'
    ],
    color: 'rose',
    icon: 'Disc',
    artTheme: 'series',
    formulaHighlight: '\\beta = \\frac{\\lambda D}{d}, \\quad I = I_0\\cos^2\\theta, \\quad \\tan i_p = n, \\quad a\\sin\\theta = m\\lambda',
    overview: {
      summary: 'Wave optics proves the wave nature of light through interference, diffraction, and polarization. Huygens\' wavelets explain wavefront propagation, while Young\'s double-slit experiment demonstrates spatial constructive and destructive interference fringes.',
      historicalContext: 'Christiaan Huygens proposed wave theory in 1678; Thomas Young definitively proved wave interference with his famous double-slit experiment in 1801.',
      learningOutcomes: [
        'Construct spherical and planar wavefronts using Huygens\' secondary wavelet principle',
        'Calculate fringe widths and positions of constructive/destructive interference in YDSE',
        'Determine angular spread and intensity profile of single-slit Fraunhofer diffraction patterns',
        'Apply Brewster\'s law and Malus\'s law to calculate polarized light transmission intensities'
      ],
      coreFormulas: [
        { label: 'YDSE Fringe Width', formula: '\\beta = \\frac{\\lambda D}{d}', explanation: 'Separation between consecutive bright (or dark) interference bands on a screen at distance $D$.' },
        { label: 'Single Slit Diffraction Minimum', formula: 'a \\sin\\theta = m \\lambda \\quad (m = \\pm 1, \\pm 2, \\dots)', explanation: 'Condition for zero intensity in Fraunhofer diffraction by a slit of width $a$.' },
        { label: 'Brewster\'s Law', formula: '\\tan i_p = n', explanation: 'Angle of incidence where reflected light is 100% linearly polarized.' }
      ],
      realWorldApplications: [
        'Anti-Reflective Optical Coatings: Thin-film destructive interference on camera and eyeglass lenses',
        'Polarized Sunglasses: Eliminating glare from reflective water and road surfaces via Brewster filtering',
        'Laser Holography: 3D wavefront recording and reconstruction using coherent interference patterns',
        'Diffraction Gratings: High-resolution spectrometers analyzing chemical element emission spectra'
      ],
      keyTheorems: [
        { title: 'Huygens-Fresnel Wave Principle', statement: 'Every point on a primary wavefront acts as a source of secondary spherical wavelets, and the new wavefront at any later instant is the envelope tangent to these secondary wavelets.', importance: 'The foundational wave mechanism explaining diffraction around barriers.' }
      ]
    }
  },
  {
    id: 'el-phy12-ch11',
    class: 12,
    track: 'Elementary Physics',
    name: 'Dual Nature of Radiation & Matter',
    description: 'Photoelectric effect observations (Hertz, Lenard), Einstein\'s photoelectric equation $h\\nu = \\Phi_0 + K_{\\max} = h\\nu_0 + eV_0$, work function, threshold frequency, stopping potential, de Broglie matter wave hypothesis $\\lambda = \\frac{h}{p} = \\frac{h}{\\sqrt{2mE}}$, and Davisson-Germer electron diffraction.',
    category: 'Modern Physics & Quantum Theory',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Photoelectric Effect: Instantaneous Emission, Threshold Frequency ($\\nu_0$), Stopping Potential ($V_0$)',
      'Einstein\'s Photoelectric Equation: $K_{\\max} = h\\nu - \\Phi_0 = e V_0$',
      'Photon Properties: Energy $E = h\\nu$, Momentum $p = \\frac{h}{\\lambda}$, Rest Mass $m_0 = 0$',
      'de Broglie Matter Waves: $\\lambda = \\frac{h}{p} = \\frac{h}{mv} = \\frac{h}{\\sqrt{2m q V}}$',
      'Davisson-Germer Experiment (Electron Diffraction Proof of Matter Waves)'
    ],
    color: 'violet',
    icon: 'Sparkles',
    artTheme: 'calculus',
    formulaHighlight: 'h\\nu = \\Phi_0 + \\frac{1}{2}m v_{\\max}^2, \\quad e V_0 = h\\nu - h\\nu_0, \\quad \\lambda = \\frac{h}{p} = \\frac{1.227}{\\sqrt{V}}\\text{ nm}',
    overview: {
      summary: 'Quantum mechanics emerged from wave-particle duality. Light behaves as discrete quanta (photons) in the photoelectric effect, while moving particles (electrons) exhibit wave properties governed by the de Broglie wavelength.',
      historicalContext: 'Max Planck postulated quantum energy packets in 1900; Albert Einstein explained the photoelectric effect in 1905 (earning the 1921 Nobel Prize), and Louis de Broglie introduced matter waves in 1924.',
      learningOutcomes: [
        'Analyze photoelectric experimental graphs ($I$ vs $V$, stopping potential vs frequency)',
        'Apply Einstein\'s equation to calculate work functions, threshold frequencies, and electron speeds',
        'Calculate de Broglie wavelengths for accelerated electrons, protons, and macroscopic bodies',
        'Explain how the Davisson-Germer electron diffraction experiment confirms matter wave theory'
      ],
      coreFormulas: [
        { label: 'Einstein\'s Photoelectric Equation', formula: 'K_{\\max} = e V_0 = h\\nu - \\Phi_0 = h(\\nu - \\nu_0)', explanation: 'Maximum kinetic energy of ejected photoelectrons equals photon energy minus work function.' },
        { label: 'de Broglie Wavelength of Electron', formula: '\\lambda = \\frac{h}{\\sqrt{2m e V}} = \\frac{1.227}{\\sqrt{V}} \\text{ nm}', explanation: 'Quantum wavelength of an electron accelerated through potential difference $V$.' },
        { label: 'Photon Momentum', formula: 'p = \\frac{E}{c} = \\frac{h}{\\lambda}', explanation: 'Momentum carried by a single light quantum (photon).' }
      ],
      realWorldApplications: [
        'Transmission Electron Microscopes (TEM): Ultra-short electron matter waves delivering sub-angstrom resolution',
        'Solar Photovoltaic Cells: Photon absorption generating electron-hole pairs and renewable DC electricity',
        'Night Vision Photomultiplier Tubes: Cascade electron multiplication from low-light photon strikes',
        'Quantum Cryptography: Quantum key distribution (QKD) secured by single-photon polarization'
      ],
      keyTheorems: [
        { title: 'de Broglie\'s Wave-Particle Hypothesis', statement: 'Every moving particle or quantum entity possesses an associated matter wave with wavelength $\\lambda = \\frac{h}{p}$, where $h$ is Planck\'s constant and $p$ is momentum.', importance: 'The fundamental postulate initiating modern quantum wave mechanics.' }
      ]
    }
  },
  {
    id: 'el-phy12-ch12',
    class: 12,
    track: 'Elementary Physics',
    name: 'Atoms & Atomic Spectra',
    description: 'Rutherford\'s $\\alpha$-particle scattering experiment and nuclear atom model, Bohr\'s postulates for the hydrogen atom ($mvr = \\frac{nh}{2\\pi}$), quantized orbital radii $r_n = n^2 a_0$, energy levels $E_n = -\\frac{13.6}{n^2}\\text{ eV}$, hydrogen emission spectral series (Lyman, Balmer, Paschen, Brackett, Pfund), and Rydberg formula.',
    category: 'Modern Physics & Quantum Theory',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Rutherford Alpha Scattering Experiment, Impact Parameter & Distance of Closest Approach',
      'Bohr\'s Postulates: Angular Momentum Quantization $L = mvr = n\\frac{h}{2\\pi}$',
      'Bohr Orbit Radius: $r_n = \\frac{n^2 h^2 \\varepsilon_0}{\\pi m e^2} = n^2 a_0$ ($a_0 \\approx 0.529 \\text{ \\AA}$)',
      'Energy Quantization: $E_n = -\\frac{13.6}{n^2} \\text{ eV}$ (Ground state $E_1 = -13.6 \\text{ eV}$)',
      'Hydrogen Spectral Series: $\\frac{1}{\\lambda} = R_H\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$ (Lyman, Balmer, Paschen)'
    ],
    color: 'indigo',
    icon: 'Atom',
    artTheme: 'conic',
    formulaHighlight: 'mvr = \\frac{nh}{2\\pi}, \\quad E_n = -\\frac{13.6}{n^2}\\text{ eV}, \\quad \\frac{1}{\\lambda} = R_H\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)',
    overview: {
      summary: 'Atomic physics models the subatomic structure of matter. Bohr\'s quantum postulates resolved classical orbital radiation instability by quantizing electron angular momentum, explaining the discrete line spectra of hydrogen.',
      historicalContext: 'Ernest Rutherford discovered the dense atomic nucleus in 1911; Niels Bohr published his quantum model of the atom in 1913, introducing stationary quantized energy levels.',
      learningOutcomes: [
        'Calculate nuclear impact parameters and distance of closest approach for alpha scattering',
        'Derive Bohr orbital radii, orbital velocities, and quantized total energy levels for hydrogenic atoms',
        'Compute photon wavelengths, frequencies, and transition energies between atomic quantum shells',
        'Map emission and absorption transitions to the Lyman (UV), Balmer (Visible), and Paschen (IR) series'
      ],
      coreFormulas: [
        { label: 'Bohr Angular Momentum Quantization', formula: 'L = m v r = \\frac{n h}{2\\pi} \\quad (n = 1, 2, 3, \\dots)', explanation: 'Electrons orbit stably only in orbits where orbital angular momentum is an integer multiple of $\\hbar$.' },
        { label: 'Hydrogen Energy Level Formula', formula: 'E_n = -\\frac{13.6 \\text{ eV}}{n^2} Z^2', explanation: 'Total quantized binding energy of an electron in orbit $n$ around nucleus of charge $Z$.' },
        { label: 'Rydberg Spectral Formula', formula: '\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right) \\quad (R_H \\approx 1.097 \\times 10^7 \\text{ m}^{-1})', explanation: 'Calculates the exact emitted photon wavelength during electron transition from $n_2$ to $n_1$.' }
      ],
      realWorldApplications: [
        'Laser Technology: Stimulated emission in Ruby, He-Ne, and diode lasers creating coherent monochromatic beams',
        'Astronomical Spectroscopy: Identifying atmospheric chemical composition of distant stars and exoplanets',
        'Atomic Clocks: Hyperfine transition resonance frequencies providing GPS nanosecond synchronization',
        'Fluorescent Lighting: UV mercury vapor emission exciting phosphor coatings into white light'
      ],
      keyTheorems: [
        { title: 'Bohr Frequency Condition', statement: 'Radiation is emitted or absorbed by an atom only when an electron jumps from one stationary quantum state to another, with photon frequency given by $h\\nu = E_{\\text{initial}} - E_{\\text{final}}$.', importance: 'Replaces classical continuous electromagnetic radiation with discrete quantum photon emissions.' }
      ]
    }
  },
  {
    id: 'el-phy12-ch13',
    class: 12,
    track: 'Elementary Physics',
    name: 'Nuclei & Nuclear Energy',
    description: 'Nuclear composition, nuclear radius $R = R_0 A^{1/3}$, mass defect $\\Delta m$, nuclear binding energy $E_b = \\Delta m \\cdot c^2$, binding energy per nucleon curve, nuclear forces, radioactive decay law $N(t) = N_0 e^{-\\lambda t}$, half-life $T_{1/2} = \\frac{\\ln 2}{\\lambda}$, nuclear fission, and nuclear fusion.',
    category: 'Modern Physics & Quantum Theory',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Nuclear Properties: Size $R = R_0 A^{1/3}$ ($R_0 \\approx 1.2 \\text{ fm}$) and Constant Nuclear Density',
      'Mass Defect $\\Delta m = [Z m_p + (A-Z)m_n] - M_{\\text{nucleus}}$ & Binding Energy $E_b = \\Delta m c^2$',
      'Binding Energy per Nucleon ($E_b/A$) Curve & Peak Stability around Iron-56 ($^{56}\\text{Fe}$)',
      'Radioactivity Law: $N(t) = N_0 e^{-\\lambda t}$, Half-Life $T_{1/2} = \\frac{0.693}{\\lambda}$, Activity $A = \\lambda N$',
      'Nuclear Fission ($^{235}\\text{U} + n \\to \\text{Fission Products} + 200\\text{ MeV}$) & Fusion ($4^1\\text{H} \\to ^4\\text{He} + 26.7\\text{ MeV}$)'
    ],
    color: 'rose',
    icon: 'Flame',
    artTheme: 'differential',
    formulaHighlight: 'E = \\Delta m \\cdot c^2, \\quad N(t) = N_0 e^{-\\lambda t}, \\quad T_{1/2} = \\frac{\\ln 2}{\\lambda}, \\quad R = R_0 A^{1/3}',
    overview: {
      summary: 'Nuclear physics investigates atomic nuclei bound by the strong nuclear force. Mass-energy equivalence ($E=mc^2$) explains the enormous energy released in radioactive decay, nuclear fission, and stellar thermonuclear fusion.',
      historicalContext: 'Henri Becquerel discovered radioactivity in 1896; Marie and Pierre Curie isolated polonium and radium; James Chadwick discovered the neutron in 1932.',
      learningOutcomes: [
        'Calculate nuclear radii, densities, mass defects, and total nuclear binding energies in MeV',
        'Analyze the $E_b/A$ binding energy curve to explain fission of heavy nuclei and fusion of light nuclei',
        'Apply the exponential radioactive decay law to solve half-life, activity, and carbon dating problems',
        'Calculate $Q$-values and released energy in nuclear fission and stellar fusion reaction chains'
      ],
      coreFormulas: [
        { label: 'Mass-Energy Equivalence', formula: 'E_b = \\Delta m \\cdot c^2 = \\Delta m \\times 931.5 \\text{ MeV/u}', explanation: 'Nuclear binding energy resulting from converted nuclear mass defect.' },
        { label: 'Radioactive Decay Law', formula: 'N(t) = N_0 e^{-\\lambda t}', explanation: 'Number of remaining undecayed radioactive nuclei after elapsed time $t$.' },
        { label: 'Half-Life Relationship', formula: 'T_{1/2} = \\frac{\\ln 2}{\\lambda} = \\frac{0.693}{\\lambda}', explanation: 'Time required for half of any radioactive isotope sample to decay.' }
      ],
      realWorldApplications: [
        'Nuclear Fission Power Plants: Controlled chain reactions generating gigawatts of clean baseload electricity',
        'Radiocarbon Dating ($^{14}\\text{C}$): Determining archaeological artifact ages up to 50,000 years',
        'Nuclear Medicine & PET Scans: Technetium-99m and fluorine-18 radiotracers for cancer diagnostics',
        'Stellar Nucleosynthesis: Solar proton-proton fusion converting 600 million tons of hydrogen per second'
      ],
      keyTheorems: [
        { title: 'Law of Radioactive Decay', statement: 'The rate of disintegration of a radioactive sample at any instant is directly proportional to the number of radioactive nuclei present in the sample at that instant: $-\\frac{dN}{dt} = \\lambda N$.', importance: 'Fundamental statistical rate equation for all nuclear disintegration processes.' }
      ]
    }
  },
  {
    id: 'el-phy12-ch14',
    class: 12,
    track: 'Elementary Physics',
    name: 'Semiconductor Electronics & Digital Logic',
    description: 'Energy bands in solids (valence, conduction, forbidden bandgap $E_g$), intrinsic & extrinsic semiconductors (p-type, n-type), p-n junction diode forward and reverse bias characteristics, half-wave & full-wave rectifiers, Zener diode voltage regulation, optoelectronic devices (LEDs, photodiodes, solar cells), and fundamental digital logic gates (AND, OR, NOT, NAND, NOR).',
    category: 'Semiconductors & Electronics',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Energy Band Theory: Conductors ($E_g=0$), Semiconductors ($E_g \\sim 1\\text{ eV}$), Insulators ($E_g > 3\\text{ eV}$)',
      'Doping: Intrinsic Carrier Density $n_i^2 = n_e n_h$, n-type (Donor Group V) & p-type (Acceptor Group III)',
      'p-n Junction Diode: Depletion Layer, Barrier Potential & I-V Characteristics',
      'Diode Applications: Half-Wave ($50\\text{ Hz}$) & Full-Wave Center-Tapped/Bridge Rectifiers ($100\\text{ Hz}$)',
      'Zener Diode as DC Voltage Regulator, LEDs, Photodiodes & Solar Cell V-I Quadrants',
      'Digital Logic Gates: Truth Tables and Boolean Algebra for AND, OR, NOT, NAND, NOR'
    ],
    color: 'emerald',
    icon: 'Binary',
    artTheme: 'algebra',
    formulaHighlight: 'n_i^2 = n_e \\cdot n_h, \\quad I = I_0(e^{\\frac{eV}{k_B T}} - 1), \\quad Y = \\overline{A \\cdot B}, \\quad Y = \\overline{A + B}',
    overview: {
      summary: 'Semiconductor physics forms the physical hardware foundation of all modern computation and telecommunications. Controllable doping in silicon and germanium enables p-n junction rectification, optoelectronics, and digital logic gates.',
      historicalContext: 'John Bardeen, Walter Brattain, and William Shockley invented the point-contact transistor at Bell Labs in 1947, ushering in the modern Information Age.',
      learningOutcomes: [
        'Differentiate conductors, semiconductors, and insulators using energy band gap diagrams',
        'Explain majority and minority charge carrier transport in doped n-type and p-type semiconductors',
        'Analyze p-n junction barrier potentials under forward and reverse bias configurations',
        'Design AC-to-DC rectifier circuits and construct truth tables for combination logic gate networks'
      ],
      coreFormulas: [
        { label: 'Mass Action Law', formula: 'n_e \\cdot n_h = n_i^2', explanation: 'Product of electron and hole concentrations in thermal equilibrium.' },
        { label: 'Diode Ideal Shockley Equation', formula: 'I = I_s \\left( e^{\\frac{e V}{\\eta k_B T}} - 1 \\right)', explanation: 'Exponential forward and reverse saturation current response of a semiconductor diode.' },
        { label: 'De Morgan\'s Laws', formula: '\\overline{A + B} = \\overline{A} \\cdot \\overline{B}, \\quad \\overline{A \\cdot B} = \\overline{A} + \\overline{B}', explanation: 'Universal Boolean algebraic rules for digital logic gate transformation.' }
      ],
      realWorldApplications: [
        'Microprocessors & GPUs: Billions of nanometer FinFET and GAA silicon transistors in modern chips',
        'Power Electronics: Silicon Carbide (SiC) and GaN high-efficiency fast-charging power converters',
        'Solid-State Lighting: High-efficiency GaN blue and white LEDs illuminating modern infrastructure',
        'Digital Embedded Systems: NAND and NOR flash memory arrays and microcontrollers'
      ],
      keyTheorems: [
        { title: 'Universal Logic Gate Theorem', statement: 'Any arbitrary digital logic circuit or computing system can be synthesized entirely using only NAND gates or only NOR gates.', importance: 'Proves the completeness of universal logic in digital computer hardware architecture.' }
      ]
    }
  }
];
