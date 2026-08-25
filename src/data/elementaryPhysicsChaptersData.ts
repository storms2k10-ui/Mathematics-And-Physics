import { Chapter } from '../types';

// ============================================================================
// ⚛️ ELEMENTARY PHYSICS — CLASS 11 CURRICULUM (14 CHAPTERS WITH DYNAMIC OVERVIEWS)
// ============================================================================
export const ELEMENTARY_PHYSICS_11_CHAPTERS: Chapter[] = [
  {
    id: 'el-phy11-ch1',
    class: 11,
    track: 'Elementary Physics',
    name: 'Physical World, Units & Measurements',
    description: 'Fundamental units of the SI system, dimensions of physical quantities $[M^a L^b T^c]$, dimensional homogeneity, error analysis, and precision vs accuracy.',
    category: 'Mechanics & Kinematics',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'SI Base Units & Derived Dimensions $[M^a L^b T^c]$',
      'Principle of Dimensional Homogeneity in Physical Equations',
      'Absolute, Relative, and Percentage Error Analysis',
      'Significant Figures & Propagation of Measurement Uncertainties'
    ],
    color: 'cyan',
    icon: 'Atom',
    artTheme: 'algebra',
    formulaHighlight: '[\\text{Force}] = [M L T^{-2}], \\quad \\frac{\\Delta x}{x} = \\sqrt{\\left(\\frac{\\Delta a}{a}\\right)^2 + \\left(\\frac{\\Delta b}{b}\\right)^2}',
    overview: {
      summary: 'Physics is the foundational quantitative science exploring matter, energy, space, and time. Units and dimensional analysis establish standard measurement scales, enabling mathematical verification of equations and systematic error propagation.',
      historicalContext: 'Standardized by the Conférence Générale des Poids et Mesures (CGPM) with the metric convention of 1875, leading to the modern 7-base-unit SI system redefined via fundamental quantum constants in 2019.',
      learningOutcomes: [
        'Derive dimensional formulas for mechanical, thermal, and electromagnetic quantities',
        'Verify the dimensional consistency of complex physical equations',
        'Calculate absolute, relative, and percentage uncertainties in composite experimental data',
        'Apply significant figure rules in multi-step scientific computations'
      ],
      coreFormulas: [
        { label: 'Dimensional Homogeneity', formula: '[\\text{LHS}] = [\\text{RHS}]', explanation: 'All terms added, subtracted, or equated in a physical law must possess identical dimensions.' },
        { label: 'Percentage Error', formula: '\\% \\text{ Error} = \\left| \\frac{x_{\\text{measured}} - x_{\\text{true}}}{x_{\\text{true}}} \\right| \\times 100\\%', explanation: 'Quantifies experimental deviation from standard reference value.' },
        { label: 'Error Propagation in Product', formula: 'z = x^a y^b \\implies \\frac{\\Delta z}{z} = a\\frac{\\Delta x}{x} + b\\frac{\\Delta y}{y}', explanation: 'Maximum fractional uncertainty in powers and products of measured variables.' }
      ],
      realWorldApplications: [
        'Aerospace Engineering: Dimensional scaling in wind tunnel aerodynamic model testing',
        'Precision Metrology: Optical atomic clocks calibrated to cesium-133 hyperfine transitions',
        'Sensor Calibration: Error tolerance modeling in industrial IoT instrumentation',
        'Astrophysics: Order-of-magnitude Fermi estimations for stellar distances'
      ],
      keyTheorems: [
        { title: 'Buckingham $\\pi$ Theorem', statement: 'If an equation involving $n$ physical variables has $k$ fundamental physical dimensions, it can be written in terms of $p = n - k$ dimensionless parameters.', importance: 'Forms the universal foundation for fluid and aerodynamic dimensional scaling.' }
      ]
    }
  },
  {
    id: 'el-phy11-ch2',
    class: 11,
    track: 'Elementary Physics',
    name: 'Motion in a Straight Line',
    description: 'Kinematics in 1D: position, instantaneous velocity $v = \\frac{dx}{dt}$, acceleration $a = \\frac{dv}{dt}$, kinematic equations under constant acceleration, and graphical analysis.',
    category: 'Mechanics & Kinematics',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Position-Time $(x-t)$ and Velocity-Time $(v-t)$ Graphs',
      'Kinematic Equations: $v = u + at, \\; s = ut + \\frac{1}{2}at^2, \\; v^2 = u^2 + 2as$',
      'Free Fall Acceleration under Gravity ($g = 9.8 \\text{ m/s}^2$)',
      'Relative Velocity in 1D: $v_{AB} = v_A - v_B$'
    ],
    color: 'indigo',
    icon: 'TrendingUp',
    artTheme: 'calculus',
    formulaHighlight: 'v = \\frac{dx}{dt}, \\quad a = \\frac{dv}{dt} = v\\frac{dv}{dx}, \\quad s = ut + \\frac{1}{2}at^2',
    overview: {
      summary: '1D kinematics mathematically models the motion of point particles along a linear axis without considering the forces causing the motion, using differential calculus and algebraic equations of motion.',
      historicalContext: 'Galileo Galilei formulated the law of falling bodies and constant acceleration in 1638 at the University of Pisa, disproving Aristotelian mechanics.',
      learningOutcomes: [
        'Calculate instantaneous velocity and acceleration using derivatives of position functions',
        'Derive and apply kinematic equations for uniformly accelerated rectilinear motion',
        'Analyze velocity-time graphs to determine instantaneous acceleration and net displacement',
        'Solve vertical free-fall and relative linear velocity problems'
      ],
      coreFormulas: [
        { label: 'First Kinematic Equation', formula: 'v = u + at', explanation: 'Relates final velocity to initial velocity, uniform acceleration, and elapsed time.' },
        { label: 'Second Kinematic Equation', formula: 's = ut + \\frac{1}{2}at^2', explanation: 'Displacement as a quadratic function of time under constant acceleration.' },
        { label: 'Third Kinematic Equation', formula: 'v^2 = u^2 + 2as', explanation: 'Relates velocities directly to displacement independent of time.' }
      ],
      realWorldApplications: [
        'Automotive Safety: Anti-lock braking system (ABS) stopping distance calculations',
        'High-Speed Rail: Acceleration profile planning for smooth passenger comfort',
        'Elevator Control: Jerk-free motion profiling in skyscraper vertical transit',
        'Rocketry: First-stage linear boost phase trajectory modeling'
      ],
      keyTheorems: [
        { title: 'Mean Speed Theorem', statement: 'A body undergoing uniform acceleration traverses the same distance in time $t$ as a body moving at constant speed equal to the average of its initial and final velocities: $\\bar{v} = \\frac{u+v}{2}$.', importance: 'The foundational Merton College rule unifying linear kinematics.' }
      ]
    }
  },
  {
    id: 'el-phy11-ch3',
    class: 11,
    track: 'Elementary Physics',
    name: 'Motion in a Plane & Vectors',
    description: '2D kinematics: vector resolution, dot and cross products, projectile motion under gravity, trajectories, and uniform circular motion with centripetal acceleration $a_c = \\frac{v^2}{r}$.',
    category: 'Mechanics & Kinematics',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Vector Components: $\\mathbf{A} = A_x\\mathbf{i} + A_y\\mathbf{j}$',
      'Projectile Trajectory: $y = x\\tan\\theta - \\frac{g x^2}{2u^2\\cos^2\\theta}$',
      'Maximum Height $H = \\frac{u^2\\sin^2\\theta}{2g}$ & Range $R = \\frac{u^2\\sin 2\\theta}{g}$',
      'Centripetal Acceleration: $\\mathbf{a}_c = -\\frac{v^2}{r}\\hat{\\mathbf{r}} = -\\omega^2\\mathbf{r}$'
    ],
    color: 'emerald',
    icon: 'Navigation',
    artTheme: 'vector',
    formulaHighlight: 'R = \\frac{u^2\\sin 2\\theta}{g}, \\quad H_{\\max} = \\frac{u^2\\sin^2\\theta}{2g}, \\quad a_c = \\frac{v^2}{r} = \\omega^2 r',
    overview: {
      summary: 'Planar motion decomposes 2D trajectories into independent orthogonal 1D components using vectors, modeling parabolic projectile flight and orbital circular paths.',
      historicalContext: 'Galileo proved that projectile paths are parabolas in his 1638 Discourses, and Christiaan Huygens derived the centripetal acceleration formula in 1659.',
      learningOutcomes: [
        'Resolve velocity and displacement vectors into Cartesian components',
        'Compute flight time, maximum height, and horizontal range of projectiles',
        'Derive the parabolic trajectory equation for arbitrary projection angles',
        'Analyze uniform circular motion parameters including angular velocity $\\omega$ and centripetal acceleration'
      ],
      coreFormulas: [
        { label: 'Time of Flight', formula: 'T = \\frac{2u\\sin\\theta}{g}', explanation: 'Total duration a projectile remains in flight over level ground.' },
        { label: 'Horizontal Range', formula: 'R = \\frac{u^2\\sin 2\\theta}{g}', explanation: 'Maximum range occurs at projection angle $\\theta = 45^\\circ$.' },
        { label: 'Centripetal Acceleration', formula: 'a_c = \\frac{v^2}{r} = \\omega^2 r', explanation: 'Inward radial acceleration required to sustain circular motion.' }
      ],
      realWorldApplications: [
        'Ballistics & Defense: Artillery shell trajectory and windage compensation',
        'Satellite Orbits: Circular low Earth orbit orbital velocity $v = \\sqrt{gr}$',
        'Sports Analytics: Optimal launch angles and spin rates in golf and football',
        'Amusement Park Rides: G-force calculations on roller coaster loops'
      ],
      keyTheorems: [
        { title: 'Principle of Independence of Orthogonal Motions', statement: 'Motion along orthogonal axes (such as horizontal $x$ and vertical $y$) proceeds completely independently without cross-axis interference.', importance: 'Enables separation of complex 2D and 3D vector equations into solvable 1D systems.' }
      ]
    }
  },
  {
    id: 'el-phy11-ch4',
    class: 11,
    track: 'Elementary Physics',
    name: 'Laws of Motion & Friction',
    description: 'Newton\'s three laws of motion, momentum $\\mathbf{p} = m\\mathbf{v}$, impulse $\\mathbf{J} = \\Delta\\mathbf{p}$, static & kinetic friction ($f_s \\le \\mu_s N$), free body diagrams, and banked roads.',
    category: 'Laws of Motion & Gravitation',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Newton\'s Second Law: $\\mathbf{F}_{\\text{net}} = \\frac{d\\mathbf{p}}{dt} = m\\mathbf{a}$',
      'Law of Conservation of Linear Momentum',
      'Static ($f_s \\le \\mu_s N$) and Kinetic ($f_k = \\mu_k N$) Friction',
      'Circular Banking of Roads: $\\tan\\theta = \\frac{v^2}{rg}$'
    ],
    color: 'rose',
    icon: 'Sliders',
    artTheme: 'differential',
    formulaHighlight: '\\mathbf{F} = \\frac{d\\mathbf{p}}{dt} = m\\mathbf{a}, \\quad f_s \\le \\mu_s N, \\quad \\tan\\theta = \\frac{v^2}{rg}',
    overview: {
      summary: 'Dynamics studies the causes of motion. Newton\'s laws of motion establish the concepts of mass, inertia, and force, while frictional laws govern interfacial resistive dynamics and safe vehicle banking.',
      historicalContext: 'Published by Sir Isaac Newton in Philosophiæ Naturalis Principia Mathematica in 1687, laying the cornerstone of classical physics.',
      learningOutcomes: [
        'Draw comprehensive Free Body Diagrams (FBDs) for connected mechanical bodies',
        'Apply Newton\'s second law to pulleys, inclined planes, and coupled masses',
        'Calculate limiting static friction and kinetic friction forces',
        'Derive safe velocity ranges for banked curves with and without friction'
      ],
      coreFormulas: [
        { label: 'Newton\'s Second Law', formula: '\\mathbf{F}_{\\text{net}} = m\\mathbf{a}', explanation: 'Net external force equals rate of change of linear momentum.' },
        { label: 'Impulse-Momentum Theorem', formula: '\\mathbf{J} = \\int \\mathbf{F}\\,dt = \\Delta\\mathbf{p}', explanation: 'Impulse delivered by a force equals the change in momentum.' },
        { label: 'Optimum Banking Angle', formula: '\\tan\\theta = \\frac{v^2}{rg}', explanation: 'Banking angle where centripetal force is provided solely by the normal force without friction.' }
      ],
      realWorldApplications: [
        'Automotive Engineering: Crash testing and vehicle crumple zone impulse reduction',
        'Civil Engineering: Highway and high-speed railway super-elevation banking design',
        'Aerospace: Rocket thrust-to-weight ratio and stage separation dynamics',
        'Robotics: Friction coefficient estimation for tactile robotic grippers'
      ],
      keyTheorems: [
        { title: 'Law of Action and Reaction', statement: 'When one body exerts a force on a second body, the second body simultaneously exerts a force equal in magnitude and opposite in direction on the first body.', importance: 'Establishes force as an interaction between pairs of bodies and proves momentum conservation.' }
      ]
    }
  },
  {
    id: 'el-phy11-ch5',
    class: 11,
    track: 'Elementary Physics',
    name: 'Work, Energy & Power',
    description: 'Work done by constant and variable forces $W = \\int \\mathbf{F} \\cdot d\\mathbf{r}$, kinetic and potential energy, Work-Energy Theorem ($W_{\\text{net}} = \\Delta K$), conservative forces, elastic/inelastic collisions, and power.',
    category: 'Mechanics & Kinematics',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Work Done: $W = \\mathbf{F} \\cdot \\mathbf{d} = F d \\cos\\theta = \\int F_x dx$',
      'Work-Energy Theorem: $W_{\\text{net}} = \\Delta K = \\frac{1}{2}m v_f^2 - \\frac{1}{2}m v_i^2$',
      'Conservative Forces & Potential Energy: $F(x) = -\\frac{dU}{dx}$',
      '1D Elastic Collisions & Coefficient of Restitution $e = \\frac{v_2 - v_1}{u_1 - u_2}$'
    ],
    color: 'amber',
    icon: 'Activity',
    artTheme: 'integral',
    formulaHighlight: 'W_{\\text{net}} = \\Delta K, \\quad U_s = \\frac{1}{2}kx^2, \\quad P = \\frac{dW}{dt} = \\mathbf{F} \\cdot \\mathbf{v}',
    overview: {
      summary: 'Work and energy provide scalar formulations of mechanical principles. The conservation of mechanical energy relates work performed by conservative and non-conservative forces to kinematic states and collision outcomes.',
      historicalContext: 'Conceptualized by Thomas Young in 1807, with the Work-Energy theorem formalized by Gaspard-Gustave de Coriolis in 1829.',
      learningOutcomes: [
        'Calculate work done by constant and spatially variable force fields',
        'Apply the Work-Energy Theorem to complex mechanical systems',
        'Determine potential energy curves, equilibrium points, and stability ($d^2U/dx^2 > 0$)',
        'Solve 1D and 2D elastic and inelastic collision problems using momentum and energy conservation'
      ],
      coreFormulas: [
        { label: 'Work by Variable Force', formula: 'W = \\int_{x_1}^{x_2} F(x)\\,dx', explanation: 'Area under the force-displacement curve.' },
        { label: 'Spring Potential Energy', formula: 'U_s = \\frac{1}{2}kx^2', explanation: 'Elastic potential energy stored in an ideal Hookean spring.' },
        { label: 'Instantaneous Power', formula: 'P = \\mathbf{F} \\cdot \\mathbf{v} = \\frac{dW}{dt}', explanation: 'Rate of energy transfer or work performed per unit time.' }
      ],
      realWorldApplications: [
        'Hydroelectric Power: Gravitational potential energy $U = mgh$ converted to electric power',
        'Vehicle Regenerative Braking: Kinetic energy recovery systems (KERS) in electric vehicles',
        'Renewable Wind Turbines: Betz limit aerodynamic kinetic power extraction $P = \\frac{1}{2}\\rho A v^3$',
        'Materials Testing: Charpy impact testing for fracture toughness and energy absorption'
      ],
      keyTheorems: [
        { title: 'Work-Energy Theorem', statement: 'The net work done by all forces (conservative and non-conservative) on a particle equals the change in its kinetic energy: $W_{\\text{total}} = K_f - K_i$.', importance: 'Unifies kinematics with dynamics in a single scalar equation.' }
      ]
    }
  },
  {
    id: 'el-phy11-ch6',
    class: 11,
    track: 'Elementary Physics',
    name: 'System of Particles & Rotational Motion',
    description: 'Center of mass, torque $\\boldsymbol{\\tau} = \\mathbf{r} \\times \\mathbf{F}$, angular momentum $\\mathbf{L} = I\\boldsymbol{\\omega}$, moment of inertia $I = \\int r^2 dm$, parallel and perpendicular axis theorems, and rolling motion without slipping.',
    category: 'Mechanics & Kinematics',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Center of Mass: $\\mathbf{R}_{\\text{cm}} = \\frac{\\sum m_i \\mathbf{r}_i}{\\sum m_i}$',
      'Torque $\\boldsymbol{\\tau} = \\mathbf{r} \\times \\mathbf{F} = I\\boldsymbol{\\alpha}$',
      'Moment of Inertia & Radius of Gyration: $I = M k^2$',
      'Parallel ($I = I_{\\text{cm}} + M d^2$) and Perpendicular ($I_z = I_x + I_y$) Axis Theorems',
      'Rolling Motion: $K_{\\text{total}} = \\frac{1}{2}M v_{\\text{cm}}^2 + \\frac{1}{2}I_{\\text{cm}}\\omega^2$'
    ],
    color: 'violet',
    icon: 'Compass',
    artTheme: 'vector',
    formulaHighlight: '\\boldsymbol{\\tau} = \\frac{d\\mathbf{L}}{dt} = I\\boldsymbol{\\alpha}, \\quad I = \\int r^2 dm, \\quad K_{\\text{roll}} = \\frac{1}{2}M v^2\\left(1 + \\frac{k^2}{R^2}\\right)',
    overview: {
      summary: 'Rigid body dynamics extends translational mechanics into the rotational domain. Torque acts as rotational force, moment of inertia represents rotational mass, and angular momentum is conserved in the absence of external net torque.',
      historicalContext: 'Formulated by Leonhard Euler in his 1765 treatise on the mechanics of rigid bodies, introducing Euler\'s laws of rotational motion.',
      learningOutcomes: [
        'Determine the center of mass for discrete and continuous mass distributions',
        'Calculate moments of inertia for standard geometric bodies (rods, disks, rings, spheres)',
        'Apply parallel and perpendicular axis theorems to evaluate shifted moments of inertia',
        'Analyze rolling without slipping down inclined planes using energy conservation'
      ],
      coreFormulas: [
        { label: 'Rotational Dynamics', formula: '\\tau_{\\text{net}} = I\\alpha', explanation: 'Rotational analog to Newton\'s second law ($F=ma$).' },
        { label: 'Parallel Axis Theorem', formula: 'I = I_{\\text{cm}} + M d^2', explanation: 'Moment of inertia about any parallel axis displaced by distance $d$.' },
        { label: 'Rolling Acceleration on Incline', formula: 'a = \\frac{g\\sin\\theta}{1 + I_{\\text{cm}}/(MR^2)}', explanation: 'Translational acceleration of a rolling cylinder or sphere down an incline.' }
      ],
      realWorldApplications: [
        'Flywheel Energy Storage: High-speed composite rotors storing kinetic grid energy',
        'Aerospace Gyroscopes: Inertial guidance systems for spacecraft attitude stabilization',
        'Automotive Differentials: Torque distribution across vehicle drive axles during cornering',
        'Planetary Precession: Earth\'s axial rotational precession and tidal torque interactions'
      ],
      keyTheorems: [
        { title: 'Conservation of Angular Momentum', statement: 'If the net external torque acting on a system is zero, its total angular momentum $\\mathbf{L}$ remains constant: $\\boldsymbol{\\tau}_{\\text{ext}} = 0 \\implies \\mathbf{L} = \\text{constant}$.', importance: 'Explains spinning figure skaters, pulsar spin rates, and planetary orbit stability.' }
      ]
    }
  },
  {
    id: 'el-phy11-ch7',
    class: 11,
    track: 'Elementary Physics',
    name: 'Gravitation & Planetary Orbits',
    description: 'Newton\'s universal law of gravitation, gravitational field and potential $V = -\\frac{GM}{r}$, acceleration due to gravity $g(h, d)$, Kepler\'s three planetary laws, orbital speed $v_o = \\sqrt{\\frac{GM}{r}}$, and escape speed $v_e = \\sqrt{\\frac{2GM}{R}}$.',
    category: 'Laws of Motion & Gravitation',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Universal Gravitation: $F = G\\frac{m_1 m_2}{r^2}$ with $G = 6.674 \\times 10^{-11} \\text{ N m}^2/\\text{kg}^2$',
      'Variation of $g$ with Altitude $h$ and Depth $d$',
      'Gravitational Potential Energy: $U(r) = -\\frac{GMm}{r}$',
      'Kepler\'s Three Laws of Planetary Motion ($T^2 \\propto a^3$)',
      'Escape Velocity $v_e = \\sqrt{2 g R} = \\sqrt{\\frac{2GM}{R}} \\approx 11.2 \\text{ km/s}$'
    ],
    color: 'teal',
    icon: 'Globe',
    artTheme: 'conic',
    formulaHighlight: 'F = G\\frac{m_1 m_2}{r^2}, \\quad v_e = \\sqrt{\\frac{2GM}{R}}, \\quad T^2 = \\frac{4\\pi^2}{GM}a^3',
    overview: {
      summary: 'Gravitation is the fundamental attractive force governing cosmic structures. Newton\'s inverse-square law unifies terrestrial falling objects with planetary and satellite orbits governed by Kepler\'s laws.',
      historicalContext: 'Johannes Kepler derived planetary laws empirically between 1609 and 1619; Newton unified them mathematically with inverse-square gravitation in 1687.',
      learningOutcomes: [
        'Calculate gravitational force and potential between planetary masses',
        'Determine gravitational acceleration variation at heights above and depths below Earth\'s surface',
        'Derive Kepler\'s Third Law from circular orbital mechanics ($T^2 \\propto r^3$)',
        'Compute orbital speeds, orbital periods, and escape velocities for artificial satellites'
      ],
      coreFormulas: [
        { label: 'Gravitational Force', formula: 'F = G\\frac{M m}{r^2}', explanation: 'Inverse square law between two point masses.' },
        { label: 'Orbital Velocity', formula: 'v_o = \\sqrt{\\frac{GM}{r}}', explanation: 'Velocity required for a circular orbit at radius $r$.' },
        { label: 'Escape Velocity', formula: 'v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2} v_o', explanation: 'Minimum speed required to escape a body\'s gravitational field entirely.' }
      ],
      realWorldApplications: [
        'GPS & Geostationary Satellites: Satellite orbital synchronization at $h \\approx 35,786\\text{ km}$',
        'Interplanetary Space Flight: Gravitational slingshot (gravity assist) trajectories',
        'Tidal Energy: Lunar and solar gravitational gradient tides generating marine power',
        'Exoplanet Detection: Radial velocity Doppler wobbles and transit timing variations'
      ],
      keyTheorems: [
        { title: 'Newton\'s Shell Theorem', statement: 'A spherically symmetric mass shell exerts no net gravitational force on any particle inside it, and attracts any particle outside as if all its mass were concentrated at the center.', importance: 'Enables treating planets as point masses for orbital calculations.' }
      ]
    }
  },
  {
    id: 'el-phy11-ch8',
    class: 11,
    track: 'Elementary Physics',
    name: 'Mechanical Properties of Solids',
    description: 'Elastic behavior of matter, stress (tensile, compressive, shear), strain, Hooke\'s Law ($\\sigma = E \\epsilon$), Young\'s modulus $Y$, bulk modulus $B$, shear modulus $\\eta$, Poisson\'s ratio $\\nu$, and strain energy density.',
    category: 'Fluids & Material Properties',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Stress ($\\sigma = F/A$) and Strain ($\\epsilon = \\Delta L/L$)',
      'Hooke\'s Law & Stress-Strain Curve (Proportional limit, Yield point, Fracture)',
      'Elastic Moduli: Young\'s Modulus $Y$, Bulk Modulus $B$, Shear Modulus $\\eta$',
      'Poisson\'s Ratio $\\nu = -\\frac{\\Delta d/d}{\\Delta L/L}$ and Elastic Potential Energy Density $u = \\frac{1}{2}\\sigma\\epsilon$'
    ],
    color: 'rose',
    icon: 'Layers',
    artTheme: 'differential',
    formulaHighlight: 'Y = \\frac{\\sigma}{\\epsilon} = \\frac{F L}{A \\Delta L}, \\quad B = -V\\frac{\\Delta P}{\\Delta V}, \\quad u = \\frac{1}{2}\\times\\text{stress}\\times\\text{strain}',
    overview: {
      summary: 'Solid mechanics analyzes deformation of materials under external loads. Hooke\'s law and elastic moduli characterize structural stiffness, tensile strength, and resilience under mechanical stress.',
      historicalContext: 'Robert Hooke discovered the linear law of elasticity in 1660 (ceiiinosssttuv: Ut tensio, sic vis), with Thomas Young formalizing the modulus of elasticity in 1807.',
      learningOutcomes: [
        'Interpret the stress-strain curve from the elastic region to plastic yield and fracture',
        'Calculate elongation, compression, and shear in structural cables and beams',
        'Determine bulk modulus and compressibility for solids subjected to uniform hydrostatic pressure',
        'Compute elastic strain energy stored in deformed structures'
      ],
      coreFormulas: [
        { label: 'Young\'s Modulus', formula: 'Y = \\frac{F/A}{\\Delta L/L} = \\frac{F L}{A \\Delta L}', explanation: 'Ratio of tensile stress to tensile strain.' },
        { label: 'Bulk Modulus', formula: 'B = -V \\frac{\\Delta P}{\\Delta V}', explanation: 'Resistance of a substance to uniform volumetric compression.' },
        { label: 'Elastic Energy Density', formula: 'u = \\frac{1}{2} Y \\epsilon^2 = \\frac{1}{2} \\sigma \\epsilon', explanation: 'Strain energy stored per unit volume of an elastic material.' }
      ],
      realWorldApplications: [
        'Structural Civil Engineering: Steel girder deflection and load-bearing bridge design',
        'Biomedical Implants: Titanium alloy elasticity matched to human cortical bone',
        'Aeronautics: Carbon-fiber reinforced polymer stress-strain resilience in aircraft wings',
        'Seismic Engineering: Earthquake-resistant base isolation elastomer pads'
      ],
      keyTheorems: [
        { title: 'Hooke\'s Law of Elasticity', statement: 'Within the elastic proportional limit, strain in a body is directly proportional to the applied stress: $\\sigma = E \\epsilon$.', importance: 'The fundamental constitutive equation of linear elasticity.' }
      ]
    }
  },
  {
    id: 'el-phy11-ch9',
    class: 11,
    track: 'Elementary Physics',
    name: 'Mechanical Properties of Fluids',
    description: 'Hydrostatic pressure $P = \\rho gh$, Pascal\'s law, Archimedes\' principle, surface tension, continuity equation ($A_1 v_1 = A_2 v_2$), Bernoulli\'s principle, viscosity, and Stokes\' law $F = 6\\pi\\eta r v$.',
    category: 'Fluids & Material Properties',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Hydrostatic Pressure: $P = P_0 + \\rho gh$ & Pascal\'s Hydraulic Principle',
      'Archimedes\' Principle & Buoyancy Force $F_b = \\rho_f V_{\\text{disp}} g$',
      'Equation of Continuity: $A_1 v_1 = A_2 v_2$',
      'Bernoulli\'s Equation: $P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{constant}$',
      'Viscosity, Stokes\' Law ($F = 6\\pi\\eta r v$) & Terminal Velocity $v_t = \\frac{2r^2(\\rho-\\sigma)g}{9\\eta}$'
    ],
    color: 'cyan',
    icon: 'Activity',
    artTheme: 'calculus',
    formulaHighlight: 'P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{const}, \\quad A_1 v_1 = A_2 v_2, \\quad F = 6\\pi\\eta r v',
    overview: {
      summary: 'Fluid mechanics investigates liquids and gases at rest (hydrostatics) and in motion (hydrodynamics). Pascal\'s principle explains hydraulic amplification, while Bernoulli\'s theorem models dynamic pressure in streamlined flow.',
      historicalContext: 'Archimedes formulated buoyancy in 250 BCE; Blaise Pascal discovered hydraulic transmission in 1653, and Daniel Bernoulli published Hydrodynamica in 1738.',
      learningOutcomes: [
        'Calculate hydrostatic pressure variations and hydraulic lift mechanical advantage',
        'Apply Archimedes\' principle to determine buoyant forces and floating equilibrium',
        'Use the continuity equation to compute fluid velocities in tapering pipes',
        'Apply Bernoulli\'s principle to venturi meters, atomizers, and aerodynamic lift'
      ],
      coreFormulas: [
        { label: 'Hydrostatic Pressure', formula: 'P = P_0 + \\rho g h', explanation: 'Total pressure at depth $h$ in a fluid of density $\\rho$.' },
        { label: 'Bernoulli\'s Equation', formula: 'P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{constant}', explanation: 'Conservation of mechanical energy for an incompressible, non-viscous fluid.' },
        { label: 'Stokes\' Terminal Velocity', formula: 'v_t = \\frac{2 r^2 (\\rho - \\sigma) g}{9 \\eta}', explanation: 'Terminal falling speed of a sphere of density $\\rho$ in a fluid of density $\\sigma$ and viscosity $\\eta$.' }
      ],
      realWorldApplications: [
        'Aerodynamic Lift: Airfoil camber creating pressure differentials via Bernoulli and flow turning',
        'Hydraulic Heavy Machinery: Excavator hydraulic cylinders multiplying pedal forces',
        'Medicine: Sphygmomanometer blood pressure and cardiovascular fluid dynamics',
        'Civil Water Infrastructure: Venturi flow meters and water distribution networks'
      ],
      keyTheorems: [
        { title: 'Pascal\'s Principle', statement: 'A pressure change applied to an enclosed incompressible fluid is transmitted undiminished to every portion of the fluid and to the walls of its container.', importance: 'The working principle behind all hydraulic lifts, brakes, and presses.' }
      ]
    }
  },
  {
    id: 'el-phy11-ch10',
    class: 11,
    track: 'Elementary Physics',
    name: 'Thermal Properties of Matter',
    description: 'Temperature scales, thermal expansion (linear $\\alpha$, superficial $\\beta$, volumetric $\\gamma$), specific heat capacity $Q = mc\\Delta T$, calorimetry, latent heat, and heat transfer mechanisms (conduction, convection, radiation, Stefan-Boltzmann law $E = \\sigma e A T^4$).',
    category: 'Thermodynamics & Heat',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Thermal Expansion: $\\Delta L = \\alpha L_0 \\Delta T, \\; \\Delta V = \\gamma V_0 \\Delta T$ ($\\gamma \\approx 3\\alpha$)',
      'Heat Capacity & Calorimetry: $Q = m c \\Delta T$ and Latent Heat $Q = m L$',
      'Thermal Conduction: $\\frac{dQ}{dt} = -k A \\frac{dT}{dx}$ (Fourier\'s Law)',
      'Radiation Laws: Stefan-Boltzmann Law ($P = \\sigma e A T^4$) and Wien\'s Displacement Law ($\\lambda_{\\max} T = b$)'
    ],
    color: 'amber',
    icon: 'Sun',
    artTheme: 'differential',
    formulaHighlight: 'Q = m c \\Delta T, \\quad \\frac{dQ}{dt} = -k A \\frac{dT}{dx}, \\quad P = \\sigma e A (T^4 - T_0^4), \\quad \\lambda_{\\max}T = b',
    overview: {
      summary: 'Thermal physics studies heat transfer and thermal matter expansion. Temperature governs internal energy states, while conduction, convection, and radiation dictate energy dissipation across thermodynamic gradients.',
      historicalContext: 'Joseph Black introduced latent and specific heat in the 1760s; Joseph Fourier formulated the law of heat conduction in 1822, and Josef Stefan discovered radiative cooling in 1879.',
      learningOutcomes: [
        'Calculate linear, areal, and volumetric thermal expansion in engineering materials',
        'Solve calorimetry equilibrium equations for multi-phase mixtures (ice-water-steam)',
        'Compute rate of thermal conduction through composite walls using Fourier\'s law',
        'Apply the Stefan-Boltzmann law and Wien\'s law to blackbody radiation calculations'
      ],
      coreFormulas: [
        { label: 'Thermal Conduction Rate', formula: '\\frac{dQ}{dt} = \\frac{k A (T_1 - T_2)}{L}', explanation: 'Heat flow per second through a thermal conductor of area $A$ and length $L$.' },
        { label: 'Stefan-Boltzmann Radiation', formula: 'P_{\\text{net}} = e \\sigma A (T^4 - T_0^4)', explanation: 'Net radiative thermal power emitted to surroundings at temperature $T_0$.' },
        { label: 'Wien\'s Displacement Law', formula: '\\lambda_{\\max} T = 2.898 \\times 10^{-3} \\text{ m}\\cdot\\text{K}', explanation: 'Peak emission wavelength shifts inversely with absolute temperature.' }
      ],
      realWorldApplications: [
        'Building Architecture: Double-glazed thermal window insulation ratings (U-values)',
        'Railway Engineering: Thermal expansion gaps and continuous welded rail pre-stressing',
        'Astrophysics: Stellar surface temperature determination from emission spectral peaks',
        'Electronics Cooling: Heat pipe and heat sink thermal resistance optimization'
      ],
      keyTheorems: [
        { title: 'Fourier\'s Law of Heat Conduction', statement: 'The time rate of heat transfer through a material is proportional to the negative gradient in the temperature and to the area through which the heat flows.', importance: 'The foundational differential equation of thermal transport.' }
      ]
    }
  },
  {
    id: 'el-phy11-ch11',
    class: 11,
    track: 'Elementary Physics',
    name: 'Thermodynamics & Heat Engines',
    description: 'Thermodynamic systems, Zeroth Law, First Law ($\\Delta Q = \\Delta U + W$), isobaric, isochoric, isothermal ($PV = \\text{const}$), and adiabatic ($PV^\\gamma = \\text{const}$) processes, Second Law, Carnot engine efficiency $\\eta = 1 - \\frac{T_C}{T_H}$, and entropy.',
    category: 'Thermodynamics & Heat',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'First Law of Thermodynamics: $\\Delta Q = \\Delta U + W$ (with $W = \\int P dV$)',
      'Thermodynamic Processes: Isothermal ($\\Delta U = 0$), Adiabatic ($Q = 0, PV^\\gamma = \\text{const}$)',
      'Molar Heat Capacities: $C_p - C_v = R$ (Mayer\'s Relation)',
      'Second Law: Clausius and Kelvin-Planck Statements & Entropy $dS = \\frac{dQ_{\\text{rev}}}{T}$',
      'Carnot Heat Engine Efficiency: $\\eta = 1 - \\frac{T_C}{T_H}$'
    ],
    color: 'rose',
    icon: 'Flame',
    artTheme: 'integral',
    formulaHighlight: '\\Delta Q = \\Delta U + W, \\quad PV^\\gamma = \\text{const}, \\quad \\eta_{\\text{Carnot}} = 1 - \\frac{T_C}{T_H}, \\quad \\Delta S = \\int \\frac{dQ_{\\text{rev}}}{T}',
    overview: {
      summary: 'Thermodynamics governs energy transformations and the fundamental efficiency limits of heat engines. The First Law enforces energy conservation, while the Second Law dictates entropy growth and the irreversibility of natural processes.',
      historicalContext: 'Sadi Carnot published Reflections on the Motive Power of Fire in 1824, establishing the theoretical efficiency limit of all thermodynamic heat engines.',
      learningOutcomes: [
        'Calculate work done, internal energy changes, and heat exchanged in cyclic processes',
        'Derive Mayer\'s relation ($C_p - C_v = R$) for ideal monoatomic and diatomic gases',
        'Analyze $P-V$ indicator diagrams for Otto, Diesel, and Carnot thermodynamic cycles',
        'Compute maximum theoretical thermal efficiency and refrigerator coefficient of performance'
      ],
      coreFormulas: [
        { label: 'First Law of Thermodynamics', formula: '\\Delta U = Q - W', explanation: 'Internal energy change equals net heat added minus work done by system.' },
        { label: 'Adiabatic Process Relation', formula: 'P V^\\gamma = \\text{constant} \\quad \\left(\\gamma = \\frac{C_p}{C_v}\\right)', explanation: 'Pressure-volume relation during reversible insulated expansion/compression.' },
        { label: 'Carnot Engine Efficiency', formula: '\\eta = 1 - \\frac{T_L}{T_H} = \\frac{W_{\\text{out}}}{Q_{\\text{in}}}', explanation: 'Maximum possible efficiency of any heat engine operating between $T_H$ and $T_L$.' }
      ],
      realWorldApplications: [
        'Thermal Power Plants: Steam Rankine and gas turbine Brayton cycle power generation',
        'HVAC & Refrigeration: Vapor-compression heat pumps and COP optimization',
        'Automotive Powertrains: Internal combustion engine compression ratio efficiency limits',
        'Cryogenics: Joule-Thomson expansion gas liquefaction systems'
      ],
      keyTheorems: [
        { title: 'Carnot\'s Theorem', statement: 'No heat engine operating between two thermal reservoirs can be more efficient than a reversible Carnot engine operating between the same two temperatures.', importance: 'Establishes the absolute theoretical ceiling on mechanical energy conversion from heat.' }
      ]
    }
  },
  {
    id: 'el-phy11-ch12',
    class: 11,
    track: 'Elementary Physics',
    name: 'Kinetic Theory of Gases',
    description: 'Molecular model of an ideal gas, kinetic derivation of pressure $P = \\frac{1}{3}\\rho v_{\\text{rms}}^2$, temperature as molecular kinetic energy, Maxwell-Boltzmann distribution, degrees of freedom, law of equipartition of energy, and mean free path $\\lambda = \\frac{1}{\\sqrt{2}\\pi n d^2}$.',
    category: 'Thermodynamics & Heat',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Kinetic Pressure Equation: $P = \\frac{1}{3}\\frac{N m}{V} v_{\\text{rms}}^2 = \\frac{1}{3}\\rho v_{\\text{rms}}^2$',
      'RMS, Average, and Most Probable Speeds: $v_{\\text{rms}} = \\sqrt{\\frac{3k_B T}{m}}$',
      'Law of Equipartition of Energy: $E = \\frac{f}{2}k_B T$ per Molecule',
      'Molar Specific Heats of Monoatomic ($f=3$), Diatomic ($f=5$), and Polyatomic Gases',
      'Mean Free Path: $\\lambda = \\frac{1}{\\sqrt{2} n \\pi d^2}$'
    ],
    color: 'indigo',
    icon: 'Atom',
    artTheme: 'algebra',
    formulaHighlight: 'P = \\frac{1}{3}\\rho v_{\\text{rms}}^2, \\quad v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}, \\quad E_{\\text{avg}} = \\frac{3}{2}k_B T, \\quad \\lambda = \\frac{1}{\\sqrt{2}\\pi n d^2}',
    overview: {
      summary: 'Kinetic theory bridges microscopic molecular collisions with macroscopic thermodynamic observables (pressure, temperature, volume), proving that temperature is a direct measure of average molecular kinetic energy.',
      historicalContext: 'Developed by Daniel Bernoulli, James Clerk Maxwell, and Ludwig Boltzmann in the 19th century, founding modern statistical mechanics.',
      learningOutcomes: [
        'Derive the kinetic expression for ideal gas pressure from momentum transfer',
        'Calculate root-mean-square, mean, and most probable molecular speeds',
        'Determine degrees of freedom and predict molar specific heat capacities ($C_v, C_p, \\gamma$)',
        'Compute the mean free path and collision frequency of gas molecules under varied pressures'
      ],
      coreFormulas: [
        { label: 'RMS Velocity', formula: 'v_{\\text{rms}} = \\sqrt{\\frac{3 k_B T}{m}} = \\sqrt{\\frac{3 R T}{M}}', explanation: 'Root-mean-square velocity of gas molecules at absolute temperature $T$.' },
        { label: 'Translational Kinetic Energy', formula: 'K_{\\text{avg}} = \\frac{3}{2} k_B T', explanation: 'Average kinetic energy of an ideal gas molecule depends strictly on temperature.' },
        { label: 'Mean Free Path', formula: '\\lambda = \\frac{1}{\\sqrt{2}\\pi n d^2}', explanation: 'Average distance traversed by a molecule between successive collisions.' }
      ],
      realWorldApplications: [
        'Vacuum Technology: High-vacuum chamber pumping speeds in semiconductor fabrication',
        'Uranium Enrichment: Gaseous diffusion isotope separation rates based on Graham\'s law',
        'Atmospheric Physics: Planetary atmospheric retention and thermal Jeans escape modeling',
        'Aerosol Science: Brownian diffusion and air filtration particulate trapping'
      ],
      keyTheorems: [
        { title: 'Law of Equipartition of Energy', statement: 'For any dynamic system in thermal equilibrium, the total energy is distributed equally among all degrees of freedom, each possessing an average energy of $\\frac{1}{2}k_B T$.', importance: 'Predicts specific heats of gases and solids across broad temperature regimes.' }
      ]
    }
  },
  {
    id: 'el-phy11-ch13',
    class: 11,
    track: 'Elementary Physics',
    name: 'Oscillations & Simple Harmonic Motion (SHM)',
    description: 'Periodic and oscillatory motion, Simple Harmonic Motion (SHM) differential equation $\\frac{d^2x}{dt^2} + \\omega^2 x = 0$, displacement $x(t) = A\\cos(\\omega t + \\phi)$, simple pendulum $T = 2\\pi\\sqrt{\\frac{L}{g}}$, spring-mass systems, energy in SHM, and damped/forced resonance.',
    category: 'Oscillations & Waves',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'SHM Differential Equation: $\\frac{d^2x}{dt^2} + \\omega^2 x = 0$',
      'Kinematic Equations of SHM: $x(t) = A\\sin(\\omega t + \\phi), \\; v(t) = \\omega\\sqrt{A^2 - x^2}, \\; a(t) = -\\omega^2 x$',
      'Simple Pendulum: $T = 2\\pi\\sqrt{\\frac{L}{g}}$ & Spring-Mass System: $T = 2\\pi\\sqrt{\\frac{m}{k}}$',
      'Total Mechanical Energy: $E = \\frac{1}{2}m\\omega^2 A^2 = \\text{constant}$',
      'Damped & Forced Oscillations, Sharpness of Resonance & Q-Factor'
    ],
    color: 'emerald',
    icon: 'Radio',
    artTheme: 'calculus',
    formulaHighlight: '\\frac{d^2x}{dt^2} + \\omega^2 x = 0, \\quad T = 2\\pi\\sqrt{\\frac{m}{k}}, \\quad T = 2\\pi\\sqrt{\\frac{L}{g}}, \\quad E = \\frac{1}{2}k A^2',
    overview: {
      summary: 'Simple Harmonic Motion describes systems where a restoring force is directly proportional to displacement. Energy oscillates continuously between kinetic and potential forms with a constant period independent of amplitude.',
      historicalContext: 'Galileo discovered the isochronism of the pendulum in 1581; Christiaan Huygens invented the pendulum clock in 1656.',
      learningOutcomes: [
        'Formulate and solve the differential equation of linear simple harmonic motion',
        'Calculate phase, displacement, velocity, and acceleration at any time instant',
        'Derive oscillation periods for simple pendulums, loaded springs, and torsional balances',
        'Analyze energy exchanges between potential and kinetic modes across the oscillation cycle'
      ],
      coreFormulas: [
        { label: 'SHM Restoring Force', formula: 'F = -k x = -m \\omega^2 x', explanation: 'Linear restoring force directed toward the equilibrium point.' },
        { label: 'Simple Pendulum Period', formula: 'T = 2\\pi \\sqrt{\\frac{L}{g}}', explanation: 'Period for small angular oscillations independent of mass.' },
        { label: 'Total Energy in SHM', formula: 'E = \\frac{1}{2} k A^2 = \\frac{1}{2} m \\omega^2 A^2', explanation: 'Total mechanical energy proportional to the square of amplitude.' }
      ],
      realWorldApplications: [
        'Structural Vibration Isolation: Tuned mass dampers in tall skyscrapers (e.g. Taipei 101)',
        'Quartz Crystal Resonators: Piezoelectric frequency standards in computers and wristwatches',
        'Automotive Suspension: Vehicle shock absorber damping coefficient tuning',
        'Atomic Force Microscopy: Micro-cantilever resonance frequency surface topography mapping'
      ],
      keyTheorems: [
        { title: 'Isochronism Principle', statement: 'The period of simple harmonic oscillation is strictly independent of the amplitude of vibration for small displacements.', importance: 'The fundamental mathematical property enabling precise timekeeping.' }
      ]
    }
  },
  {
    id: 'el-phy11-ch14',
    class: 11,
    track: 'Elementary Physics',
    name: 'Waves & Acoustics',
    description: 'Transverse and longitudinal mechanical waves, wave speed $v = \\nu\\lambda = \\sqrt{\\frac{T}{\\mu}}$, principle of superposition, standing waves on strings and organ pipes, beats $f_b = |f_1 - f_2|$, and the Doppler effect $f\' = f\\left(\\frac{v \\pm v_o}{v \\mp v_s}\\right)$.',
    category: 'Oscillations & Waves',
    questionCount: 0,
    difficulty: 'Mixed',
    keyTopics: [
      'Progressive Wave Equation: $y(x,t) = A\\sin(kx - \\omega t + \\phi)$ with $k = \\frac{2\\pi}{\\lambda}, \\; \\omega = 2\\pi\\nu$',
      'Speed of Waves: Transverse String ($v = \\sqrt{\\frac{T}{\\mu}}$), Longitudinal in Fluid ($v = \\sqrt{\\frac{B}{\\rho}}$)',
      'Superposition & Standing Waves: Nodes ($y=0$) and Antinodes ($y=\\pm 2A$)',
      'Acoustic Resonance in Open & Closed Organ Pipes',
      'Beats ($f_{\\text{beat}} = |f_1 - f_2|$) & Doppler Effect for Sound: $f\' = f\\left(\\frac{v \\pm v_o}{v \\mp v_s}\\right)$'
    ],
    color: 'blue',
    icon: 'Activity',
    artTheme: 'trigonometry',
    formulaHighlight: 'y(x,t) = A\\sin(kx - \\omega t), \\quad v = \\sqrt{\\frac{T}{\\mu}}, \\quad f_{\\text{beat}} = |f_1 - f_2|, \\quad f\' = f\\left(\\frac{v \\pm v_o}{v \\mp v_s}\\right)',
    overview: {
      summary: 'Wave mechanics investigates the propagation of energy and momentum through media without permanent mass transport. Superposition explains interference, standing waves, beats, and frequency shifts via the Doppler effect.',
      historicalContext: 'Jean-Baptiste le Rond d\'Alembert discovered the 1D wave partial differential equation in 1747; Christian Doppler discovered frequency shifts in 1842.',
      learningOutcomes: [
        'Write mathematical wave equations and extract wavelength, frequency, wave speed, and phase',
        'Compute fundamental and harmonic frequencies for vibrating strings and air columns',
        'Analyze standing wave formation and determine node/antinode spatial locations',
        'Calculate perceived Doppler frequency shifts for moving sources and observers'
      ],
      coreFormulas: [
        { label: 'Wave Speed Relation', formula: 'v = \\nu \\lambda = \\frac{\\omega}{k}', explanation: 'Relates propagation speed to frequency, wavelength, and wavenumber.' },
        { label: 'Doppler Frequency Shift', formula: 'f\' = f \\left( \\frac{v \\pm v_o}{v \\mp v_s} \\right)', explanation: 'Observed frequency when sound source and observer are in relative motion.' },
        { label: 'Vibrating String Harmonics', formula: 'f_n = n \\frac{v}{2L} = \\frac{n}{2L} \\sqrt{\\frac{T}{\\mu}} \\quad (n=1,2,3,\\dots)', explanation: 'Harmonic frequencies produced by a string fixed at both ends.' }
      ],
      realWorldApplications: [
        'Medical Ultrasound Imaging: High-frequency acoustic echo and Doppler blood flow imaging',
        'Sonar Systems: Submarine navigation and bathymetric ocean depth mapping',
        'Radar Speed Traps: Microwave Doppler frequency shifts measuring vehicle velocities',
        'Architectural Acoustics: Concert hall reverberation time and destructive interference reduction'
      ],
      keyTheorems: [
        { title: 'Principle of Superposition of Waves', statement: 'When two or more propagating waves overlap in a linear medium, the resultant displacement at any point is the vector sum of the displacements of the individual waves.', importance: 'The foundational principle governing interference, diffraction, and standing waves.' }
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
