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
    name: '1. Molecular Theory of Gases',
    description: 'Kinetic molecular theory of gases, ideal gas equation $PV = nRT$, pressure exerted by gas $P = \\frac{1}{3}\\rho \\overline{v^2}$, kinetic interpretation of temperature $\\overline{K} = \\frac{3}{2} k_B T$, root-mean-square speed $v_{\\text{rms}} = \\sqrt{\\frac{3k_B T}{m}}$, degrees of freedom, equipartition of energy, and mean free path.',
    category: 'Thermodynamics & Heat',
    questionCount: 250,
    difficulty: 'Normal',
    keyTopics: [
      'Postulates of Kinetic Molecular Theory of Gases',
      'Derivation of Gas Pressure: $P = \\frac{1}{3}\\rho \\overline{v^2}$',
      'Kinetic Interpretation of Temperature: $\\overline{E_k} = \\frac{3}{2} k_B T$',
      'Root-Mean-Square Speed: $v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}} = \\sqrt{\\frac{3k_B T}{m}}$',
      'Degrees of Freedom & Law of Equipartition of Energy',
      'Mean Free Path of Gas Molecules: $\\lambda = \\frac{1}{\\sqrt{2}\\pi n d^2}$'
    ],
    color: 'amber',
    icon: 'Wind',
    artTheme: 'chemistry',
    formulaHighlight: 'P = \\frac{1}{3}\\rho \\overline{v^2}, \\quad \\overline{K} = \\frac{3}{2}k_B T, \\quad v_{\\text{rms}} = \\sqrt{\\frac{3k_B T}{m}}, \\quad \\lambda = \\frac{1}{\\sqrt{2}\\pi n d^2}',
    overview: {
      summary: 'The molecular theory of gases provides a microscopic statistical interpretation of macroscopic thermodynamic quantities. It establishes that gas pressure originates from molecular collisions and absolute temperature is directly proportional to average translational kinetic energy.',
      historicalContext: 'Daniel Bernoulli first proposed the kinetic model of gases in 1738; Rudolf Clausius, James Clerk Maxwell, and Ludwig Boltzmann formulated the statistical kinetic theory in the 19th century.',
      learningOutcomes: [
        'State and explain the fundamental postulates of the kinetic molecular theory of ideal gases',
        'Derive the pressure formula $P = \\frac{1}{3}\\rho \\overline{v^2}$ from elastic collisions with container walls',
        'Relate average translational kinetic energy per molecule directly to thermodynamic temperature',
        'Calculate root-mean-square speed, degrees of freedom, and mean free path for diverse gases'
      ],
      coreFormulas: [
        { label: 'Pressure of an Ideal Gas', formula: 'P = \\frac{1}{3}\\rho \\overline{v^2} = \\frac{2}{3} N_0 \\overline{E_k}', explanation: 'Pressure exerted by $N$ gas molecules of mass $m$ in volume $V$ with mean square speed $\\overline{v^2}$.' },
        { label: 'Kinetic Temperature Relation', formula: '\\overline{E_k} = \\frac{1}{2} m \\overline{v^2} = \\frac{3}{2} k_B T', explanation: 'Average translational kinetic energy per molecule depends solely on absolute temperature.' },
        { label: 'Root-Mean-Square Speed', formula: 'v_{\\text{rms}} = \\sqrt{\\frac{3 k_B T}{m}} = \\sqrt{\\frac{3 R T}{M}}', explanation: 'Effective statistical molecular velocity in an ideal gas at temperature $T$.' }
      ],
      realWorldApplications: [
        'Vacuum Engineering: High-vacuum diffusion pumps operating below atmospheric mean free path thresholds',
        'Atmospheric Physics: Planetary atmospheric retention and thermal escape velocities of light gases (hydrogen, helium)',
        'Gas Separation: Uranium isotope separation ($^{235}\\text{UF}_6$ vs $^{238}\\text{UF}_6$) via gaseous effusion rates',
        'Aerospace Hypersonics: Knudsen number regimes determining continuum vs rarefied aerodynamic flow'
      ],
      keyTheorems: [
        { title: 'Law of Equipartition of Energy', statement: 'For any dynamical system in thermal equilibrium, the total energy is distributed equally among all degrees of freedom, with each degree of freedom possessing average energy $\\frac{1}{2}k_B T$.', importance: 'Determines molar specific heats and adiabatic indices across monatomic, diatomic, and polyatomic gases.' }
      ]
    }
  },
  {
    id: 'el-phy12-ch2',
    class: 12,
    track: 'Elementary Physics',
    name: '2. First Law of Thermodynamics',
    description: 'Thermodynamic systems, state variables, heat ($Q$), work done by gas ($W = \\int P\\,dV$), First Law of Thermodynamics $\\Delta U = Q - W$, isothermal, isobaric, isochoric, and adiabatic processes ($PV^\\gamma = \\text{const}$), molar specific heats $C_p$ and $C_v$, and Mayer\'s relation $C_p - C_v = R$.',
    category: 'Thermodynamics & Heat',
    questionCount: 200,
    difficulty: 'Normal',
    keyTopics: [
      'Thermodynamic State Variables, Boundaries & Internal Energy ($U$)',
      'Work Done During Volume Changes ($W = \\int P\\,dV$ and $P-V$ Indicator Diagrams)',
      'First Law of Thermodynamics: $\\Delta U = Q - W$',
      'Isothermal Process (\\Delta T = 0, $W = nRT\\ln(V_f/V_i)$) & Isochoric Process (\\Delta V = 0, $W = 0$)',
      'Isobaric Process (\\Delta P = 0, $W = P\\Delta V$) & Adiabatic Process ($Q = 0, P V^\\gamma = \\text{const}$)',
      'Molar Specific Heat Capacities: $C_p - C_v = R$ and Ratio $\\gamma = C_p/C_v$'
    ],
    color: 'rose',
    icon: 'Flame',
    artTheme: 'differential',
    formulaHighlight: '\\Delta U = Q - W, \\quad W = nRT\\ln\\left(\\frac{V_f}{V_i}\\right), \\quad P V^\\gamma = \\text{const}, \\quad C_p - C_v = R',
    overview: {
      summary: 'The First Law of Thermodynamics is the universal law of conservation of energy applied to thermodynamic systems. It establishes internal energy as a state function and governs energy exchange through heat transfer and mechanical work.',
      historicalContext: 'Julius Robert von Mayer, James Prescott Joule, and Hermann von Helmholtz formulated the mechanical equivalence of heat and the conservation of energy in the 1840s.',
      learningOutcomes: [
        'Distinguish state functions (internal energy, pressure, temperature) from path-dependent quantities (heat, work)',
        'Calculate mechanical work done during expansion or compression using area under $P-V$ curves',
        'Apply the First Law to isothermal, isobaric, isochoric, and adiabatic thermodynamic paths',
        'Derive Mayer\'s relation $C_p - C_v = R$ and analyze adiabatic expansion equations'
      ],
      coreFormulas: [
        { label: 'First Law of Thermodynamics', formula: '\\Delta U = Q - W \\implies Q = \\Delta U + W', explanation: 'Net heat supplied to a system equals increase in internal energy plus work done by the system.' },
        { label: 'Isothermal Work Formula', formula: 'W = n R T \\ln\\left(\\frac{V_f}{V_i}\\right) = n R T \\ln\\left(\\frac{P_i}{P_f}\\right)', explanation: 'Work executed by an ideal gas expanding reversibly at constant temperature $T$.' },
        { label: 'Mayer\'s Relation', formula: 'C_p - C_v = R', explanation: 'Difference between constant pressure and constant volume molar heat capacities equals universal gas constant $R$.' }
      ],
      realWorldApplications: [
        'Internal Combustion Engines: Compression and expansion power strokes modeled by thermodynamic cycles',
        'Gas Turbines & Jet Engines: Brayton cycle isobaric heating and adiabatic nozzle gas expansion',
        'Scuba Diving Tanks: Adiabatic cooling during rapid air tank decompression valves',
        'Meteorological Lapse Rates: Dry adiabatic cooling of rising air parcels creating cloud condensation layers'
      ],
      keyTheorems: [
        { title: 'First Law of Thermodynamics', statement: 'Energy cannot be created or destroyed in any thermodynamic interaction; the total change in internal energy of a closed system is equal to the heat added minus work done by the system.', importance: 'The cornerstone conservation law connecting mechanical work, thermal energy, and internal energy.' }
      ]
    }
  },
  {
    id: 'el-phy12-ch3',
    class: 12,
    track: 'Elementary Physics',
    name: '3. Second Law of Thermodynamics',
    description: 'Heat engines and cyclic processes, thermal efficiency $\\eta = \\frac{W}{Q_H}$, Kelvin-Planck and Clausius statements, Carnot reversible engine cycle, Carnot efficiency $\\eta_C = 1 - \\frac{T_C}{T_H}$, refrigerators and heat pumps (COP), entropy $S$, entropy changes $\\Delta S = \\int \\frac{dQ_{\\text{rev}}}{T}$, and principle of entropy increase.',
    category: 'Thermodynamics & Heat',
    questionCount: 200,
    difficulty: 'Normal',
    keyTopics: [
      'Heat Engines & Thermal Efficiency $\\eta = 1 - \\frac{Q_C}{Q_H}$',
      'Kelvin-Planck and Clausius Formulations of the Second Law of Thermodynamics',
      'Carnot Reversible Cycle (Isothermal and Adiabatic Expansions & Compressions)',
      'Carnot Theorem & Upper Bound Thermal Efficiency $\\eta_C = 1 - \\frac{T_C}{T_H}$',
      'Refrigerators and Heat Pumps: Coefficient of Performance ($\\text{COP}$)',
      'Concept of Entropy ($S$) & Principle of Entropy Increase ($\\Delta S_{\\text{universe}} \\ge 0$)'
    ],
    color: 'amber',
    icon: 'RotateCw',
    artTheme: 'calculus',
    formulaHighlight: '\\eta = 1 - \\frac{Q_C}{Q_H}, \\quad \\eta_{\\text{Carnot}} = 1 - \\frac{T_C}{T_H}, \\quad \\Delta S = \\int \\frac{dQ_{\\text{rev}}}{T} \\ge 0, \\quad \\text{COP} = \\frac{Q_C}{W}',
    overview: {
      summary: 'The Second Law of Thermodynamics determines the natural direction of physical and chemical processes. It proves that no heat engine can convert heat entirely into work and establishes entropy as the fundamental measure of thermodynamic irreversibility and disorder.',
      historicalContext: 'Nicolas Léonard Sadi Carnot established the foundations of heat engine efficiency in 1824; Rudolf Clausius and Lord Kelvin formalized the Second Law and entropy concept in the 1850s.',
      learningOutcomes: [
        'Analyze heat engine cycles and calculate thermal efficiencies from heat absorbed and rejected',
        'Prove equivalence between Kelvin-Planck and Clausius statements of the Second Law',
        'Trace the four stages of the Carnot cycle and calculate maximum theoretical Carnot efficiency',
        'Calculate entropy changes for reversible and irreversible processes, demonstrating universal entropy growth'
      ],
      coreFormulas: [
        { label: 'Carnot Engine Efficiency', formula: '\\eta_{\\text{Carnot}} = 1 - \\frac{T_C}{T_H}', explanation: 'Maximum attainable efficiency of any heat engine operating between hot reservoir $T_H$ and cold reservoir $T_C$.' },
        { label: 'Entropy Definition', formula: 'dS = \\frac{dQ_{\\text{rev}}}{T} \\implies \\Delta S = \\int \\frac{dQ_{\\text{rev}}}{T}', explanation: 'Infinitesimal reversible heat transfer divided by absolute temperature.' },
        { label: 'Refrigerator Performance', formula: '\\text{COP}_{\\text{ref}} = \\frac{Q_C}{W} = \\frac{T_C}{T_H - T_C}', explanation: 'Coefficient of performance for a Carnot refrigerator extracting heat $Q_C$ with work input $W$.' }
      ],
      realWorldApplications: [
        'Thermal & Nuclear Power Plants: Superheated steam Rankine cycles engineered against Carnot limits',
        'HVAC & Domestic Refrigeration: Vapor-compression heat pump cycles and seasonal COP optimization',
        'Automotive Powertrains: Fuel economy limits in internal combustion Otto and Diesel engines',
        'Cosmological Thermodynamics: The Arrow of Time and the ultimate Thermodynamic Heat Death of the Universe'
      ],
      keyTheorems: [
        { title: 'Carnot\'s Theorem', statement: 'No heat engine operating between two given heat reservoirs can be more efficient than a reversible Carnot engine operating between the same two reservoirs.', importance: 'Establishes the absolute theoretical upper limit of heat engine performance.' }
      ]
    }
  },
  {
    id: 'el-phy12-ch4',
    class: 12,
    track: 'Elementary Physics',
    name: '4. Magnetic Fields',
    description: 'Magnetic induction vector $\\mathbf{B}$, magnetic flux $\\Phi_B$, Lorentz force $\\mathbf{F} = q(\\mathbf{v} \\times \\mathbf{B})$, cyclotron radius $r = \\frac{mv}{qB}$ and frequency, force on current-carrying conductor $\\mathbf{F} = I(\\mathbf{L} \\times \\mathbf{B})$, magnetic torque $\\boldsymbol{\\tau} = \\mathbf{M} \\times \\mathbf{B}$, Biot-Savart law, Ampere\'s Circuital Law, and magnetic fields of coils, solenoids, and toroids.',
    category: 'Magnetism & Induction',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Magnetic Lorentz Force: $\\mathbf{F} = q(\\mathbf{v} \\times \\mathbf{B})$ & Helical Particle Trajectories',
      'Cyclotron Motion: Orbit Radius $r = \\frac{mv}{qB}$ & Period $T = \\frac{2\\pi m}{qB}$',
      'Magnetic Force on Current-Carrying Conductor: $\\mathbf{F} = I(\\mathbf{L} \\times \\mathbf{B})$',
      'Torque on Magnetic Loop $\\boldsymbol{\\tau} = \\mathbf{M} \\times \\mathbf{B}$ & Magnetic Dipole Moment $\\mathbf{M} = I\\mathbf{A}$',
      'Biot-Savart Law: $d\\mathbf{B} = \\frac{\\mu_0}{4\\pi}\\frac{I d\\mathbf{l} \\times \\hat{\\mathbf{r}}}{r^2}$ (Circular Coil Field $B = \\frac{\\mu_0 I R^2}{2(R^2+x^2)^{3/2}}$)',
      'Ampere\'s Circuital Law: $\\oint \\mathbf{B} \\cdot d\\mathbf{l} = \\mu_0 I_{\\text{enc}}$ (Straight Wire, Solenoid $B = \\mu_0 n I$, Toroid)'
    ],
    color: 'indigo',
    icon: 'Compass',
    artTheme: 'vector',
    formulaHighlight: '\\mathbf{F} = q(\\mathbf{v} \\times \\mathbf{B}), \\quad r = \\frac{mv}{qB}, \\quad \\boldsymbol{\\tau} = \\mathbf{M} \\times \\mathbf{B}, \\quad \\oint \\mathbf{B} \\cdot d\\mathbf{l} = \\mu_0 I_{\\text{enc}}',
    overview: {
      summary: 'Magnetic fields are produced by moving electric charges and exert forces on other moving charges or electric currents. The Biot-Savart and Ampere circuital laws calculate magnetic field geometries for fundamental circuit topologies.',
      historicalContext: 'Hans Christian Ørsted discovered current-induced magnetic deflection in 1820; Jean-Baptiste Biot, Félix Savart, and André-Marie Ampère formalized magnetic electrodynamics.',
      learningOutcomes: [
        'Calculate magnetic Lorentz force on charged particles and predict helical trajectory parameters',
        'Determine magnetic force and torque on conductors and closed planar coils in uniform fields',
        'Apply the Biot-Savart law to find magnetic fields of straight lines and circular current loops',
        'Employ Ampere\'s circuital law to compute magnetic fields inside ideal solenoids and toroids'
      ],
      coreFormulas: [
        { label: 'Lorentz Force', formula: '\\mathbf{F} = q(\\mathbf{E} + \\mathbf{v} \\times \\mathbf{B})', explanation: 'Combined electromagnetic force acting on a point charge $q$ moving with velocity $\\mathbf{v}$.' },
        { label: 'Cyclotron Radius', formula: 'r = \\frac{m v}{q B}', explanation: 'Radius of circular orbit for a charged particle moving perpendicular to uniform magnetic field $B$.' },
        { label: 'Field Inside Long Solenoid', formula: 'B = \\mu_0 n I = \\mu_0 \\frac{N}{L} I', explanation: 'Uniform magnetic field inside an ideal solenoid with $n$ turns per unit length carrying current $I$.' }
      ],
      realWorldApplications: [
        'Particle Accelerators (CERN LHC): Superconducting bending magnets steering relativistic proton beams',
        'Mass Spectrometry: Magnetic deflection sorting ionized chemical isotopes according to mass-to-charge ratios',
        'Electric Vehicle Motors: Stator coils generating rotating magnetic fields to produce rotor torque',
        'Magnetic Levitation (Maglev): Electrodynamic suspension propelling high-speed trains without rail friction'
      ],
      keyTheorems: [
        { title: 'Ampere\'s Circuital Theorem', statement: 'The line integral of magnetic field $\\mathbf{B}$ around any closed path equals $\\mu_0$ times the total steady electric current enclosed by the path.', importance: 'The magnetic counterpart to Gauss\'s Law in electrostatics.' }
      ]
    }
  },
  {
    id: 'el-phy12-ch5',
    class: 12,
    track: 'Elementary Physics',
    name: '5. Electromagnetic Induction',
    description: 'Magnetic flux $\\Phi = \\mathbf{B} \\cdot \\mathbf{A}$, Faraday\'s laws of electromagnetic induction $\\mathcal{E} = -N \\frac{d\\Phi}{dt}$, Lenz\'s law and energy conservation, motional electromotive force $\\mathcal{E} = Bvl$, induced electric fields, eddy currents and damping, self-inductance ($L$), mutual inductance ($M$), and energy stored in magnetic field $U_B = \\frac{1}{2} L I^2$.',
    category: 'Magnetism & Induction',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Magnetic Flux: $\\Phi = \\mathbf{B} \\cdot \\mathbf{A} = B A \\cos\\theta$',
      'Faraday\'s Law of Induction: $\\mathcal{E} = -N \\frac{d\\Phi}{dt}$',
      'Lenz\'s Law and Electromagnetic Conservation of Energy',
      'Motional Electromotive Force: $\\mathcal{E} = B v l$ and Induced Current $I = \\frac{Bvl}{R}$',
      'Eddy Currents, Induction Heating, and Electromagnetic Brakes',
      'Self-Inductance ($L = \\frac{N\\Phi}{I}$) & Energy in Inductor ($U = \\frac{1}{2} L I^2$)'
    ],
    color: 'teal',
    icon: 'Activity',
    artTheme: 'calculus',
    formulaHighlight: '\\mathcal{E} = -N\\frac{d\\Phi}{dt}, \\quad \\mathcal{E} = B v l, \\quad U_B = \\frac{1}{2} L I^2, \\quad L = \\frac{\\mu_0 N^2 A}{l}',
    overview: {
      summary: 'Electromagnetic induction describes how a changing magnetic flux induces an electromotive force (EMF) in a closed conductor. Lenz\'s law enforces energy conservation by opposing the flux change, enabling modern electrical power generation.',
      historicalContext: 'Discovered independently by Michael Faraday in 1831 and Joseph Henry, revolutionizing electrical engineering and mechanical-to-electrical energy conversion.',
      learningOutcomes: [
        'Calculate induced EMF using Faraday\'s Law for time-varying magnetic fields and moving loops',
        'Determine direction of induced currents using Lenz\'s law and Right-Hand Rules',
        'Derive motional EMF and power dissipation in sliding conducting bars across magnetic tracks',
        'Calculate self and mutual inductances for coaxial solenoids and stored magnetic energy'
      ],
      coreFormulas: [
        { label: 'Faraday-Lenz Law', formula: '\\mathcal{E} = -N \\frac{d\\Phi_B}{dt} = -N \\frac{d}{dt}(B A \\cos\\theta)', explanation: 'Induced EMF equals the negative rate of change of magnetic flux through $N$ turns.' },
        { label: 'Motional EMF', formula: '\\mathcal{E} = B v l', explanation: 'EMF induced across a conductor of length $l$ moving at speed $v$ perpendicularly through field $B$.' },
        { label: 'Energy Stored in Inductor', formula: 'U_B = \\frac{1}{2} L I^2', explanation: 'Magnetic potential energy stored in an inductor carrying current $I$.' }
      ],
      realWorldApplications: [
        'Hydroelectric & Wind Turbines: Rotor magnets inducing multi-megawatt AC voltage across stator coils',
        'Induction Cooktops: High-frequency eddy currents heating ferromagnetic cookware directly',
        'Electromagnetic Braking: Eddy current retardation in high-speed bullet trains',
        'Wireless EV Charging: Resonant inductive coupling transmitting power across air gaps'
      ],
      keyTheorems: [
        { title: 'Lenz\'s Law of Induced Currents', statement: 'The polarity of an induced electromotive force is always such that it produces a current whose magnetic field opposes the original change in flux that produced it.', importance: 'Direct consequence of the law of conservation of energy in electrodynamics.' }
      ]
    }
  },
  {
    id: 'el-phy12-ch6',
    class: 12,
    track: 'Elementary Physics',
    name: '6. AC Circuits',
    description: 'Sinusoidal alternating voltage and current, RMS and peak values $I_{\\text{rms}} = \\frac{I_0}{\\sqrt{2}}$, AC through pure resistor, inductor, and capacitor, phase angles and phasor diagrams, inductive reactance $X_L = \\omega L$, capacitive reactance $X_C = \\frac{1}{\\omega C}$, series RLC circuits, total impedance $Z = \\sqrt{R^2 + (X_L - X_C)^2}$, electrical resonance $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$, quality factor $Q$, and power in AC circuits.',
    category: 'Magnetism & Induction',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Sinusoidal AC Waveforms & Root Mean Square ($V_{\\text{rms}} = \\frac{V_0}{\\sqrt{2}}$)',
      'Phasor Representation & Phase Shifts in Resistors, Inductors, and Capacitors',
      'Reactance: Inductive $X_L = \\omega L$ and Capacitive $X_C = \\frac{1}{\\omega C}$',
      'Series R-L-C Circuit Impedance: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$',
      'Resonance in AC Circuits: $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$ & Sharpness Quality Factor ($Q$)',
      'AC Power Factor $\\cos\\phi$ and Average Power Dissipation ($P = V_{\\text{rms}} I_{\\text{rms}} \\cos\\phi$)'
    ],
    color: 'purple',
    icon: 'Zap',
    artTheme: 'trigonometry',
    formulaHighlight: 'I_{\\text{rms}} = \\frac{I_0}{\\sqrt{2}}, \\quad Z = \\sqrt{R^2 + \\left(\\omega L - \\frac{1}{\\omega C}\\right)^2}, \\quad f_0 = \\frac{1}{2\\pi\\sqrt{LC}}, \\quad P = V I \\cos\\phi',
    overview: {
      summary: 'Alternating current powers global electrical grids. Phasor analysis resolves phase relationships between voltage and current across resistive, inductive, and capacitive components, with resonance enabling frequency tuning.',
      historicalContext: 'Nikola Tesla and George Westinghouse pioneered multiphase AC power in the late 19th-century "War of the Currents", proving its superiority over DC for long-distance transmission.',
      learningOutcomes: [
        'Calculate peak, instantaneous, and RMS values for sinusoidal voltages and currents',
        'Construct phasor diagrams and compute total impedance $Z$ for series RLC networks',
        'Determine resonant frequency, bandwidth, and quality factor $Q$ of tuned filter circuits',
        'Evaluate active, reactive, and apparent power, and calculate transformer voltage/current step ratios'
      ],
      coreFormulas: [
        { label: 'Series RLC Impedance', formula: 'Z = \\sqrt{R^2 + \\left(\\omega L - \\frac{1}{\\omega C}\\right)^2}', explanation: 'Total opposition to AC current flow combining resistance and net reactance.' },
        { label: 'Resonant Frequency', formula: '\\omega_0 = \\frac{1}{\\sqrt{L C}} \\implies f_0 = \\frac{1}{2\\pi\\sqrt{L C}}', explanation: 'Frequency where inductive and capacitive reactances cancel ($X_L = X_C$), minimizing impedance to $Z=R$.' },
        { label: 'AC Power Factor', formula: 'P_{\\text{avg}} = V_{\\text{rms}} I_{\\text{rms}} \\cos\\phi \\quad \\left(\\cos\\phi = \\frac{R}{Z}\\right)', explanation: 'Real electrical power consumed in an AC circuit as a function of phase difference $\\phi$.' }
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
    id: 'el-phy12-ch7',
    class: 12,
    track: 'Elementary Physics',
    name: '7. Physics of Solids',
    description: 'Structure of crystalline, amorphous, and polymeric solids, crystal lattices and unit cells, mechanical properties: stress $\\sigma$, strain $\\varepsilon$, Hooke\'s law, Young\'s, shear, and bulk moduli, stress-strain curves and elastic limit, strain energy density $u = \\frac{1}{2}\\sigma \\varepsilon$, electrical energy band theory of solids (conductors, semiconductors, insulators), superconductivity ($T_c$, Meissner effect), and magnetic domains.',
    category: 'Fluids & Material Properties',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Classification of Solids: Crystalline, Amorphous, and Polymeric',
      'Mechanical Stress ($\\sigma = F/A$) and Tensile/Shear/Volumetric Strain ($\\varepsilon$)',
      'Elastic Moduli: Young\'s ($Y$), Shear ($G$), and Bulk ($K$) Modulus',
      'Stress-Strain Curve: Proportional Limit, Yield Point, UTS, and Fracture',
      'Energy Band Theory: Valence Band, Conduction Band, and Energy Gap $E_g$',
      'Superconductivity, Critical Temperature ($T_c$), and Magnetic Properties'
    ],
    color: 'cyan',
    icon: 'Layers',
    artTheme: 'integral',
    formulaHighlight: 'Y = \\frac{\\sigma}{\\varepsilon} = \\frac{F L}{A \\Delta L}, \\quad U = \\frac{1}{2} F \\Delta L = \\frac{1}{2} \\sigma \\varepsilon V, \\quad E_g = E_c - E_v',
    overview: {
      summary: 'The physics of solids explores the mechanical, electrical, and magnetic properties arising from atomic arrangements in crystal lattices. Energy band theory explains the quantum distinction between conductors, semiconductors, and insulators.',
      historicalContext: 'Robert Hooke formulated Hooke\'s law of elasticity in 1676; Felix Bloch and Alan Wilson developed the quantum band theory of solids in the late 1920s and 1930s.',
      learningOutcomes: [
        'Distinguish crystalline, amorphous, and polymeric molecular structures and unit cell lattices',
        'Calculate stress, strain, and Young\'s modulus from experimental tensile test data',
        'Evaluate elastic strain energy stored in deformed structural elements and wires',
        'Explain electrical conduction using energy band diagrams and classify conductors, semiconductors, and insulators'
      ],
      coreFormulas: [
        { label: 'Young\'s Modulus of Elasticity', formula: 'Y = \\frac{\\text{Tensile Stress}}{\\text{Tensile Strain}} = \\frac{F / A}{\\Delta L / L} = \\frac{F L}{A \\Delta L}', explanation: 'Ratio of longitudinal stress to strain within the proportional elastic limit.' },
        { label: 'Elastic Strain Energy Density', formula: 'u = \\frac{1}{2} \\sigma \\varepsilon = \\frac{1}{2} Y \\varepsilon^2', explanation: 'Strain energy stored per unit volume in an elastically deformed solid.' },
        { label: 'Energy Band Gap', formula: 'E_g = E_c - E_v', explanation: 'Forbidden energy gap between top of valence band $E_v$ and bottom of conduction band $E_c$.' }
      ],
      realWorldApplications: [
        'Civil & Structural Engineering: Tensile testing and safety factors in steel girder and bridge designs',
        'Aerospace Composites: Carbon fiber reinforced polymers engineered for high strength-to-weight ratios',
        'Superconducting Magnets: MRI scanners and fusion tokamaks operating below critical temperature $T_c$',
        'Piezoelectric Transducers: Quartz crystal oscillators providing precision timing in microchips'
      ],
      keyTheorems: [
        { title: 'Hooke\'s Law of Elasticity', statement: 'Within elastic limits, the mechanical stress produced in a body is directly proportional to the corresponding strain produced.', importance: 'The fundamental constitutive relation in solid state mechanics.' }
      ]
    }
  },
  {
    id: 'el-phy12-ch8',
    class: 12,
    track: 'Elementary Physics',
    name: '8. Solid State Electronics',
    description: 'Intrinsic semiconductors and thermal generation, extrinsic semiconductors (n-type and p-type doping), p-n junction formation, barrier potential and depletion layer, forward and reverse bias V-I characteristics, half-wave and full-wave bridge rectification, filter circuits, Zener diode as voltage regulator, optoelectronic devices (LED, photodiode, solar cells), and bipolar junction transistors (BJT npn/pnp, current gain $\\beta$, amplifier and switch action).',
    category: 'Semiconductors & Electronics',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Intrinsic & Extrinsic Semiconductors (Group III & V Doping)',
      'p-n Junction Diode: Depletion Layer, Barrier Potential & Bias Characteristics',
      'Diode Rectification: Half-Wave, Full-Wave Center-Tapped & Bridge Rectifiers',
      'Zener Diode Breakdown Mechanism & DC Voltage Regulation',
      'Optoelectronic Transducers: Photodiodes, LEDs, and Solar Cell Operation',
      'Bipolar Junction Transistors (BJT): Configurations, Current Gain $\\beta$, and Amplification'
    ],
    color: 'emerald',
    icon: 'Cpu',
    artTheme: 'differential',
    formulaHighlight: 'n_e n_h = n_i^2, \\quad I = I_s\\left(e^{\\frac{eV}{\\eta k_B T}} - 1\\right), \\quad I_e = I_b + I_c, \\quad \\beta = \\frac{I_c}{I_b}',
    overview: {
      summary: 'Solid state electronics constitutes the hardware backbone of all modern computation and telecommunications. Controllable doping in semiconductor lattices enables p-n junction rectification, optoelectronics, and transistor signal amplification.',
      historicalContext: 'John Bardeen, Walter Brattain, and William Shockley invented the point-contact transistor at Bell Labs in 1947, replacing vacuum tubes and initiating the microelectronics revolution.',
      learningOutcomes: [
        'Explain charge carrier transport and Fermi level shifts in doped n-type and p-type silicon',
        'Analyze p-n junction depletion layer dynamics under forward and reverse bias voltages',
        'Design AC-to-DC rectifier circuits with smoothing capacitor filters and Zener regulation',
        'Determine BJT transistor operating regions (cutoff, active, saturation) and calculate current gain'
      ],
      coreFormulas: [
        { label: 'Mass Action Law', formula: 'n_e \\cdot n_h = n_i^2', explanation: 'Product of electron and hole concentrations in thermal equilibrium at temperature $T$.' },
        { label: 'Transistor Current Conservation', formula: 'I_e = I_b + I_c', explanation: 'Emitter current equals base current plus collector current in any bipolar junction transistor.' },
        { label: 'Common-Emitter Current Gain', formula: '\\beta = \\frac{I_c}{I_b}', explanation: 'DC current amplification factor relating collector current to base current.' }
      ],
      realWorldApplications: [
        'Microprocessors & GPUs: Billions of nanometer FinFET and GAA silicon transistors in modern chips',
        'Power Electronics: Silicon Carbide (SiC) and GaN high-efficiency fast-charging power converters',
        'Solid-State Lighting: High-efficiency GaN blue and white LEDs illuminating modern infrastructure',
        'Renewable Photovoltaics: Silicon p-n junction solar panels converting solar irradiance into clean DC power'
      ],
      keyTheorems: [
        { title: 'Shockley Diode Equation', statement: 'The current through an ideal p-n junction diode grows exponentially with applied forward voltage: $I = I_s (e^{eV/\eta k_B T} - 1)$.', importance: 'Defines the non-linear rectification behavior fundamental to semiconductor physics.' }
      ]
    }
  },
  {
    id: 'el-phy12-ch9',
    class: 12,
    track: 'Elementary Physics',
    name: '9. Digital Electronics',
    description: 'Analog versus digital signals, binary number system and binary logic levels, fundamental logic gates (NOT, AND, OR) and their truth tables, universal logic gates (NAND, NOR), exclusive gates (XOR, XNOR), Boolean algebra laws and De Morgan\'s theorems, logic gate combinations, operational amplifiers (Op-Amp) in inverting, non-inverting, and comparator configurations, and digital electronic control systems.',
    category: 'Semiconductors & Electronics',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Analog vs Digital Signals & Binary Logic Representation',
      'Basic Logic Gates (NOT, AND, OR): Symbols and Truth Tables',
      'Universal Logic Gates: NAND and NOR Synthesis of Logic Functions',
      'Exclusive Logic Gates: XOR and XNOR Parity Operations',
      'Boolean Algebra Simplification & De Morgan\'s Theorems',
      'Operational Amplifier (Op-Amp): Inverting, Non-Inverting, and Comparator Circuits'
    ],
    color: 'blue',
    icon: 'Binary',
    artTheme: 'algebra',
    formulaHighlight: 'Y = \\overline{A \\cdot B}, \\quad Y = \\overline{A + B}, \\quad \\overline{A \\cdot B} = \\overline{A} + \\overline{B}, \\quad A_v = -\\frac{R_f}{R_{in}}',
    overview: {
      summary: 'Digital electronics processes discrete binary states (0 and 1) to perform arithmetic and logical operations. Boolean algebra and universal logic gates provide the mathematical and physical foundation of computer processors and digital control systems.',
      historicalContext: 'George Boole published the laws of Boolean logic in 1854; Claude Shannon demonstrated that Boolean algebra could model electrical relay circuits in 1937.',
      learningOutcomes: [
        'Convert between analog signals, binary levels, and decimal numbers',
        'Construct and interpret truth tables for all elementary, universal, and exclusive logic gates',
        'Apply Boolean theorems and De Morgan\'s laws to simplify digital combinational logic circuits',
        'Analyze operational amplifier configurations for signal amplification and analog-to-digital comparison'
      ],
      coreFormulas: [
        { label: 'De Morgan\'s First Law', formula: '\\overline{A \\cdot B} = \\overline{A} + \\overline{B}', explanation: 'The complement of a logical product equals the sum of individual complements.' },
        { label: 'De Morgan\'s Second Law', formula: '\\overline{A + B} = \\overline{A} \\cdot \\overline{B}', explanation: 'The complement of a logical sum equals the product of individual complements.' },
        { label: 'Inverting Op-Amp Closed-Loop Gain', formula: 'A_v = \\frac{V_{\\text{out}}}{V_{\\text{in}}} = -\\frac{R_f}{R_{\\text{in}}}', explanation: 'Voltage gain determined strictly by external feedback and input resistors.' }
      ],
      realWorldApplications: [
        'Central Processing Units (CPUs): Arithmetic Logic Units (ALUs) constructed from billions of CMOS logic gates',
        'Flash Memory Arrays: Non-volatile NAND flash chips storing data in solid-state drives and smartphones',
        'Industrial Automation: Programmable Logic Controllers (PLCs) automating manufacturing robotics',
        'Sensor Interfacing: Op-Amp comparator circuits converting raw analog transducer voltages to digital triggers'
      ],
      keyTheorems: [
        { title: 'Universal Logic Gate Theorem', statement: 'Any arbitrary digital logic circuit or computing system can be synthesized entirely using only NAND gates or only NOR gates.', importance: 'Proves the completeness of universal logic in digital computer hardware architecture.' }
      ]
    }
  },
  {
    id: 'el-phy12-ch10',
    class: 12,
    track: 'Elementary Physics',
    name: '10. Relativity',
    description: 'Galilean relativity and reference frames, Michelson-Morley experiment and constancy of speed of light, Einstein\'s two postulates of Special Relativity, Lorentz transformations, relativity of simultaneity, relativistic time dilation $\\Delta t = \\gamma \\Delta t_0$, Lorentz length contraction $L = L_0/\\gamma$, relativistic momentum $\\mathbf{p} = \\gamma m_0 \\mathbf{v}$, mass-energy equivalence $E = mc^2 = \\gamma m_0 c^2$, and the energy-momentum invariant $E^2 = p^2 c^2 + m_0^2 c^4$.',
    category: 'Modern Physics & Quantum Theory',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Postulates of Special Relativity & Invariance of the Speed of Light ($c$)',
      'Lorentz Factor: $\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}$',
      'Relativistic Time Dilation: $\\Delta t = \\gamma \\Delta t_0$ (Twin Paradox & Muon Decay)',
      'Lorentz Length Contraction: $L = L_0 \\sqrt{1 - v^2/c^2}$',
      'Relativistic Momentum ($\\mathbf{p} = \\gamma m_0 \\mathbf{v}$) & Mass-Energy Equivalence ($E = m c^2$)',
      'Energy-Momentum Relation: $E^2 = p^2 c^2 + m_0^2 c^4$ (Massless Photons $E = pc$)'
    ],
    color: 'violet',
    icon: 'Hourglass',
    artTheme: 'calculus',
    formulaHighlight: '\\Delta t = \\frac{\\Delta t_0}{\\sqrt{1 - v^2/c^2}}, \\quad L = L_0\\sqrt{1 - v^2/c^2}, \\quad E = m c^2, \\quad E^2 = p^2 c^2 + m_0^2 c^4',
    overview: {
      summary: 'Albert Einstein\'s Special Theory of Relativity revolutionized our understanding of space, time, and energy. It unifies space and time into a four-dimensional spacetime continuum where the speed of light in vacuum is an absolute universal invariant.',
      historicalContext: 'Albert Einstein formulated Special Relativity in 1905, resolving incompatibilities between Newtonian mechanics and Maxwellian electrodynamics without requiring a luminiferous ether.',
      learningOutcomes: [
        'State Einstein\'s two fundamental postulates of Special Relativity and explain their physical implications',
        'Calculate time dilation and length contraction for relativistic speeds ($v \\to c$)',
        'Derive the relativistic mass-energy equivalence $E = mc^2$ and momentum-energy relation',
        'Explain experimental confirmations of relativity including atmospheric muon lifetime extension and GPS corrections'
      ],
      coreFormulas: [
        { label: 'Relativistic Time Dilation', formula: '\\Delta t = \\frac{\\Delta t_0}{\\sqrt{1 - \\frac{v^2}{c^2}}} = \\gamma \\Delta t_0', explanation: 'Elapsed time $\\Delta t$ measured by a moving observer is dilated relative to proper time $\\Delta t_0$.' },
        { label: 'Lorentz Length Contraction', formula: 'L = L_0 \\sqrt{1 - \\frac{v^2}{c^2}} = \\frac{L_0}{\\gamma}', explanation: 'Length $L$ measured along direction of motion contracts relative to proper length $L_0$.' },
        { label: 'Relativistic Energy-Momentum Invariant', formula: 'E^2 = p^2 c^2 + m_0^2 c^4', explanation: 'Fundamental relation connecting total relativistic energy $E$, momentum $p$, and rest mass $m_0$.' }
      ],
      realWorldApplications: [
        'Global Positioning System (GPS): Satellite atomic clocks corrected daily for special and general relativistic time shifts',
        'Particle Colliders: Relativistic beam dynamics and particle lifetimes at CERN\'s Large Hadron Collider',
        'Nuclear Energy Generation: Mass defect conversions releasing multi-gigawatt thermal energy via $E = \\Delta m c^2$',
        'Astrophysics: Relativistic jets ejected by supermassive black holes at over 99% the speed of light'
      ],
      keyTheorems: [
        { title: 'Principle of Invariant Light Speed', statement: 'The speed of light in vacuum ($c \\approx 3 \\times 10^8 \\text{ m/s}$) is identical in all inertial reference frames, independent of the motion of the emitting source or observing receiver.', importance: 'The revolutionary kinematic axiom underlying modern spacetime geometry.' }
      ]
    }
  },
  {
    id: 'el-phy12-ch11',
    class: 12,
    track: 'Elementary Physics',
    name: '11. Quantum Physics',
    description: 'Blackbody radiation curves and Planck\'s quantum hypothesis $E = h\\nu$, photoelectric effect observations and Einstein\'s photoelectric equation $K_{\\max} = h\\nu - \\Phi_0 = e V_0$, Compton scattering and Compton shift $\\Delta\\lambda = \\frac{h}{m_e c}(1 - \\cos\\theta)$, pair production and annihilation, de Broglie matter waves $\\lambda = \\frac{h}{p}$, Davisson-Germer electron diffraction, and Heisenberg\'s Uncertainty Principle $\\Delta x \\Delta p \\ge \\frac{\\hbar}{2}$.',
    category: 'Modern Physics & Quantum Theory',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Blackbody Radiation & Planck\'s Quantization of Energy ($E = h\\nu$)',
      'Photoelectric Effect: Work Function $\\Phi_0$, Stopping Potential $V_0$, and Photons',
      'Compton Effect: Wavelength Shift $\\Delta\\lambda = \\frac{h}{m_e c}(1 - \\cos\\theta)$',
      'Pair Production ($h\\nu \\to e^- + e^+$) and Electron-Positron Annihilation',
      'de Broglie Matter Waves: $\\lambda = \\frac{h}{p} = \\frac{h}{\\sqrt{2m E_k}}$ & Davisson-Germer Experiment',
      'Heisenberg Uncertainty Principle: $\\Delta x \\cdot \\Delta p \\ge \\frac{\\hbar}{2}$ and $\\Delta E \\cdot \\Delta t \\ge \\frac{\\hbar}{2}$'
    ],
    color: 'rose',
    icon: 'Sparkles',
    artTheme: 'calculus',
    formulaHighlight: 'K_{\\max} = h\\nu - \\Phi_0 = e V_0, \\quad \\Delta\\lambda = \\frac{h}{m_e c}(1 - \\cos\\theta), \\quad \\lambda = \\frac{h}{p}, \\quad \\Delta x \\Delta p \\ge \\frac{\\hbar}{2}',
    overview: {
      summary: 'Quantum physics describes physical phenomena at atomic and subatomic scales where energy and momentum are quantized. Wave-particle duality reveals that electromagnetic radiation behaves as discrete quanta (photons) while material particles exhibit wave characteristics.',
      historicalContext: 'Max Planck postulated quantum energy packets in 1900; Albert Einstein explained the photoelectric effect in 1905, Louis de Broglie introduced matter waves in 1924, and Werner Heisenberg formulated uncertainty in 1927.',
      learningOutcomes: [
        'Explain the ultraviolet catastrophe and analyze Planck\'s quantum blackbody radiation formula',
        'Apply Einstein\'s photoelectric equation to calculate work functions, threshold frequencies, and electron speeds',
        'Calculate Compton wavelength shifts during high-energy photon collisions with electrons',
        'Compute de Broglie matter wavelengths and apply Heisenberg\'s uncertainty principle to bound quantum states'
      ],
      coreFormulas: [
        { label: 'Einstein\'s Photoelectric Equation', formula: 'K_{\\max} = e V_0 = h\\nu - \\Phi_0 = h(\\nu - \\nu_0)', explanation: 'Maximum kinetic energy of ejected photoelectrons equals photon energy minus material work function.' },
        { label: 'Compton Scattering Shift', formula: '\\Delta\\lambda = \\lambda\' - \\lambda = \\frac{h}{m_e c}(1 - \\cos\\theta) = \\lambda_c (1 - \\cos\\theta)', explanation: 'Wavelength increase of X-ray or gamma photon scattering through angle $\\theta$ off stationary electron.' },
        { label: 'de Broglie Matter Wavelength', formula: '\\lambda = \\frac{h}{p} = \\frac{h}{m v} = \\frac{h}{\\sqrt{2m q V}}', explanation: 'Wavelength of quantum matter wave associated with any moving mass $m$ with momentum $p$.' }
      ],
      realWorldApplications: [
        'Transmission Electron Microscopes (TEM): Sub-angstrom atomic imaging leveraging picometer electron matter waves',
        'Solar Photovoltaic Cells: Photon absorption generating electron-hole pairs and clean DC electricity',
        'Quantum Computing: Qubits exploiting quantum superposition and entanglement for exponential calculation speedups',
        'Medical Radiation Oncology: Linear accelerator megavoltage Compton scattering targeting deep tumors'
      ],
      keyTheorems: [
        { title: 'Heisenberg Uncertainty Principle', statement: 'It is impossible to simultaneously measure both the exact position and exact linear momentum of a quantum particle with arbitrary precision: $\\Delta x \\cdot \\Delta p \\ge \\frac{\\hbar}{2}$.', importance: 'The fundamental epistemological and physical boundary of quantum mechanics.' }
      ]
    }
  },
  {
    id: 'el-phy12-ch12',
    class: 12,
    track: 'Elementary Physics',
    name: '12. Atomic Physics',
    description: 'Rutherford\'s alpha scattering experiment and nuclear atom model, atomic spectra and emission/absorption series, Rydberg formula $\\frac{1}{\\lambda} = R_H\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$, Bohr\'s quantum postulates of hydrogen atom ($L = mvr = \\frac{nh}{2\\pi}$), Bohr radii $r_n = n^2 a_0$, quantized energy levels $E_n = -\\frac{13.6}{n^2}\\text{ eV}$, spectral series (Lyman, Balmer, Paschen), X-ray production (characteristic and Bremsstrahlung, Moseley\'s law), and lasers (stimulated emission and population inversion).',
    category: 'Modern Physics & Quantum Theory',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Rutherford Alpha Scattering Experiment & Nuclear Atom Model',
      'Bohr Postulates: Quantized Angular Momentum $L = mvr = n\\hbar$',
      'Bohr Orbit Radii ($r_n = n^2 a_0$) and Quantized Energy Levels ($E_n = -\\frac{13.6}{n^2}\\text{ eV}$)',
      'Hydrogen Emission Spectral Series (Lyman, Balmer, Paschen, Brackett, Pfund)',
      'Production of X-Rays: Continuous Bremsstrahlung, Characteristic Lines & Moseley\'s Law',
      'Laser Physics: Spontaneous & Stimulated Emission, Population Inversion, and He-Ne Lasers'
    ],
    color: 'indigo',
    icon: 'Atom',
    artTheme: 'conic',
    formulaHighlight: 'mvr = \\frac{nh}{2\\pi}, \\quad E_n = -\\frac{13.6}{n^2}\\text{ eV}, \\quad \\frac{1}{\\lambda} = R_H\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right), \\quad \\sqrt{\\nu} = a(Z - b)',
    overview: {
      summary: 'Atomic physics investigates the quantum electronic architecture of atoms. Bohr\'s postulates resolved classical orbital radiation collapse by quantizing electron angular momentum, explaining the discrete line emission and absorption spectra of hydrogen.',
      historicalContext: 'Ernest Rutherford discovered the atomic nucleus in 1911; Niels Bohr published his quantum model of the atom in 1913, introducing stationary quantized energy states.',
      learningOutcomes: [
        'Calculate nuclear impact parameters and distance of closest approach for alpha scattering',
        'Derive Bohr orbital radii, orbital velocities, and quantized total energy levels for hydrogenic atoms',
        'Compute photon wavelengths, frequencies, and transition energies between atomic quantum shells',
        'Explain X-ray production mechanisms and apply Moseley\'s law to determine atomic numbers'
      ],
      coreFormulas: [
        { label: 'Bohr Angular Momentum Quantization', formula: 'L = m v r = \\frac{n h}{2\\pi} = n \\hbar \\quad (n = 1, 2, 3, \\dots)', explanation: 'Electrons orbit stably without radiating only in orbits where orbital angular momentum is an integer multiple of $\\hbar$.' },
        { label: 'Hydrogen Quantized Energy Levels', formula: 'E_n = -\\frac{13.6 \\text{ eV}}{n^2} \\cdot Z^2', explanation: 'Total quantized binding energy of an electron in orbit $n$ around a nucleus of charge $Z$.' },
        { label: 'Rydberg Spectral Formula', formula: '\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right) \\quad (R_H \\approx 1.097 \\times 10^7 \\text{ m}^{-1})', explanation: 'Calculates emitted or absorbed photon wavelength during electron transition between levels $n_2$ and $n_1$.' }
      ],
      realWorldApplications: [
        'Laser Technology: Stimulated emission in gas, solid-state, and semiconductor lasers providing monochromatic beams',
        'Astronomical Spectroscopy: Identifying atmospheric chemical composition and redshift of distant stars and galaxies',
        'Medical Radiography: Diagnostic X-ray tubes producing Bremsstrahlung and characteristic tungsten emission lines',
        'Atomic Clocks: Cesium-133 hyperfine transition resonance frequencies providing GPS nanosecond synchronization'
      ],
      keyTheorems: [
        { title: 'Bohr Frequency Condition', statement: 'Radiation is emitted or absorbed by an atom only when an electron jumps from one stationary quantum state to another, with photon frequency given by $h\\nu = E_{\\text{initial}} - E_{\\text{final}}$.', importance: 'Replaces classical continuous electromagnetic radiation with discrete quantum transitions.' }
      ]
    }
  },
  {
    id: 'el-phy12-ch13',
    class: 12,
    track: 'Elementary Physics',
    name: '13. Nuclear Physics',
    description: 'Nuclear composition (protons, neutrons, nucleons, isotopes), nuclear radius $R = R_0 A^{1/3}$ and density, strong nuclear force, mass defect $\\Delta m$ and binding energy $E_b = \\Delta m c^2$, binding energy per nucleon curve ($E_b/A$) and nuclear stability, radioactive decay law $N(t) = N_0 e^{-\\lambda t}$, half-life $T_{1/2} = \\frac{\\ln 2}{\\lambda}$ and activity $A = \\lambda N$, nuclear fission of Uranium-235 and chain reactions, nuclear reactors, and thermonuclear fusion in stars.',
    category: 'Modern Physics & Quantum Theory',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Nuclear Radius ($R = R_0 A^{1/3}$), Constant Nuclear Density & Strong Nuclear Force',
      'Mass Defect $\\Delta m = [Z m_p + (A-Z)m_n] - M_{\\text{nucleus}}$ & Binding Energy $E_b = \\Delta m c^2$',
      'Binding Energy per Nucleon ($E_b/A$) Curve, Fission and Fusion Stability',
      'Law of Radioactive Decay: $N(t) = N_0 e^{-\\lambda t}$, Half-Life $T_{1/2} = \\frac{0.693}{\\lambda}$, and Activity',
      'Nuclear Fission of $^{235}\\text{U}$, Critical Mass, and Nuclear Reactor Components',
      'Nuclear Fusion: Proton-Proton Chain in Stars and Thermonuclear Energy'
    ],
    color: 'rose',
    icon: 'Flame',
    artTheme: 'differential',
    formulaHighlight: 'R = R_0 A^{1/3}, \\quad E_b = \\Delta m \\cdot c^2 = \\Delta m \\times 931.5\\text{ MeV}, \\quad N(t) = N_0 e^{-\\lambda t}, \\quad T_{1/2} = \\frac{\\ln 2}{\\lambda}',
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
    name: '14. Particle Physics',
    description: 'Four fundamental interactions of nature (gravity, electromagnetism, weak force, strong force) and exchange bosons, matter particles: leptons and quarks, quark flavors (up, down, charm, strange, top, bottom) and fractional electric charges ($+2/3e, -1/3e$), hadrons: baryons ($qqq$) and mesons ($q\\bar{q}$), antiparticles and annihilation, fundamental conservation laws (baryon number, lepton number, strangeness, charge), the Standard Model, and the Higgs boson.',
    category: 'Modern Physics & Quantum Theory',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Four Fundamental Forces & Exchange Gauge Bosons (Photon, Gluons, $W^\\pm, Z^0$, Graviton)',
      'Leptons (Electron, Muon, Tau & Corresponding Neutrinos)',
      'Quarks: Six Flavors (u, d, c, s, t, b) and Fractional Electric Charges',
      'Hadrons: Baryons ($qqq$ like Protons/Neutrons) and Mesons ($q\\bar{q}$ like Pions/Kaons)',
      'Antiparticles, Pair Annihilation, and Fundamental Conservation Laws',
      'The Standard Model of Particle Physics, Higgs Mechanism, and Cosmic Origins'
    ],
    color: 'purple',
    icon: 'Orbit',
    artTheme: 'conic',
    formulaHighlight: 'q_u = +\\frac{2}{3}e, \\quad q_d = -\\frac{1}{3}e, \\quad p = uud, \\quad n = udd, \\quad \\sum Q = \\text{const}, \\quad \\sum B = \\text{const}',
    overview: {
      summary: 'Particle physics probes the most fundamental constituents of matter and the forces governing their interactions. The Standard Model classifies fundamental fermions (quarks and leptons) and gauge bosons mediating the fundamental forces, completed by the Higgs mechanism.',
      historicalContext: 'Murray Gell-Mann and George Zweig proposed the quark model in 1964; the electroweak theory was unified in the late 1960s, culminating in the discovery of the Higgs boson at CERN in 2012.',
      learningOutcomes: [
        'Classify fundamental forces of nature, relative strengths, ranges, and mediating gauge bosons',
        'Distinguish fundamental fermions: six leptons and six quarks with their quantum numbers and charges',
        'Determine quark composition of hadrons (baryons composed of $qqq$ and mesons composed of $q\\bar{q}$)',
        'Verify conservation of electric charge, baryon number, and lepton numbers in particle interactions'
      ],
      coreFormulas: [
        { label: 'Proton Quark Structure', formula: 'p = u + u + d \\implies Q = \\left(+\\frac{2}{3}e\\right) + \\left(+\\frac{2}{3}e\\right) + \\left(-\\frac{1}{3}e\\right) = +1e', explanation: 'Baryon composed of two up quarks and one down quark.' },
        { label: 'Neutron Quark Structure', formula: 'n = u + d + d \\implies Q = \\left(+\\frac{2}{3}e\\right) + \\left(-\\frac{1}{3}e\\right) + \\left(-\\frac{1}{3}e\\right) = 0', explanation: 'Baryon composed of one up quark and two down quarks.' },
        { label: 'Beta-Minus Decay at Quark Level', formula: 'd \\to u + W^- \\to u + e^- + \\bar{\\nu}_e', explanation: 'Weak interaction converting a down quark into an up quark with emission of electron and antineutrino.' }
      ],
      realWorldApplications: [
        'Synchrotron Light Sources: High-intensity coherent X-rays deciphering biological protein crystal structures',
        'Positron Emission Tomography (PET): Antimatter positron annihilation generating dual 511 keV gamma rays',
        'Hadron Cancer Therapy: Precision proton and carbon-ion beam irradiation minimizing surrounding tissue damage',
        'Early Universe Cosmology: Understanding matter-antimatter asymmetry and Big Bang nucleosynthesis conditions'
      ],
      keyTheorems: [
        { title: 'Standard Model of Particle Physics', statement: 'All visible matter in the universe is constructed from twelve fundamental spin-1/2 fermions (six quarks and six leptons) interacting via exchange of spin-1 gauge bosons (photons, gluons, W/Z bosons), with masses generated by electroweak symmetry breaking through the Higgs field.', importance: 'The most comprehensive and rigorously tested theory in modern fundamental physics.' }
      ]
    }
  }
];
