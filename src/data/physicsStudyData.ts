import { ClassLevel } from '../types';

export interface PhysicsLawDefinitionItem {
  id: string;
  category: 'laws_definitions';
  title: string;
  class: ClassLevel;
  lawType: string;
  formula: string;
  statement: string;
  explanation: string;
  keyPoints: string[];
  applications?: string;
}

export interface PhysicsPrincipleItem {
  id: string;
  category: 'principles';
  title: string;
  class: ClassLevel;
  principleType: string;
  formula?: string;
  statement: string;
  mechanism: string;
  keyPoints: string[];
  realWorldExample: string;
}

export interface PhysicsFormulaItem {
  id: string;
  category: 'formulas';
  title: string;
  class: ClassLevel;
  topic: string;
  formula: string;
  variablesExplanation: string;
  notes?: string;
  siUnits?: string;
}

export interface PhysicsDerivationItem {
  id: string;
  category: 'derivations';
  title: string;
  class: ClassLevel;
  targetResult: string;
  startingPrinciples: string;
  stepByStepDerivation: string[];
  finalEquation: string;
  keyAssumptions?: string;
}

// ============================================================================
// 1. LAWS & DEFINITIONS
// ============================================================================
export const ALL_PHYSICS_LAWS_DEFINITIONS: PhysicsLawDefinitionItem[] = [
  {
    id: 'p-law-newton-1',
    category: 'laws_definitions',
    title: "Newton's First Law of Motion (Law of Inertia)",
    class: 9,
    lawType: 'Classical Mechanics',
    formula: '\\sum \\vec{F} = 0 \\implies \\vec{v} = \\text{constant} \\; (\\vec{a} = 0)',
    statement: 'An object remains in a state of rest or uniform motion in a straight line unless acted upon by an external net unbalanced force.',
    explanation: 'Defines the property of inertia: matter resists changes to its state of motion. Also establishes inertial frames of reference.',
    keyPoints: [
      'Inertia is directly proportional to the mass of the body ($I \\propto m$).',
      'If net external force is zero, velocity vector remains constant in magnitude and direction.',
      'Forms the foundation of classical Newtonian mechanics.'
    ],
    applications: 'Seatbelts in automobiles, banking of roads, motion of satellites in vacuum.'
  },
  {
    id: 'p-law-newton-2',
    category: 'laws_definitions',
    title: "Newton's Second Law of Motion",
    class: 9,
    lawType: 'Classical Mechanics',
    formula: '\\vec{F}_{\\text{net}} = \\frac{d\\vec{p}}{dt} = m \\vec{a}',
    statement: 'The time rate of change of linear momentum of a body is directly proportional to the applied net force and takes place in the direction of the force.',
    explanation: 'Quantifies force as the product of mass and acceleration (when mass is constant). In variable mass systems: $\\vec{F} = m\\frac{d\\vec{v}}{dt} + \\vec{v}\\frac{dm}{dt}$.',
    keyPoints: [
      'SI Unit of Force: Newton ($\\text{N} = \\text{kg}\\cdot\\text{m}/\\text{s}^2$).',
      'Vector equation applicable along each coordinate axis independently ($F_x = m a_x, F_y = m a_y$).',
      'Impulse $\\vec{J} = \\int \\vec{F}\\,dt = \\Delta \\vec{p}$.'
    ],
    applications: 'Rocket propulsion, cricket player cushioning a catch, vehicle braking dynamics.'
  },
  {
    id: 'p-law-newton-3',
    category: 'laws_definitions',
    title: "Newton's Third Law of Motion (Action-Reaction)",
    class: 9,
    lawType: 'Classical Mechanics',
    formula: '\\vec{F}_{AB} = -\\vec{F}_{BA}',
    statement: 'To every action, there is always an equal and opposite reaction; mutual forces between two bodies act along the line joining them.',
    explanation: 'Forces always occur in pairs. Action and reaction forces act simultaneously on two different interacting bodies, never on the same body.',
    keyPoints: [
      'Action and reaction do NOT cancel each other out because they act on different bodies.',
      'Crucial for internal force cancellation in multi-particle systems, yielding momentum conservation.',
      'Valid for both contact forces and action-at-a-distance field forces.'
    ],
    applications: 'Walking on ground, swimming, recoil of a firearm, jet engines.'
  },
  {
    id: 'p-law-gravitation',
    category: 'laws_definitions',
    title: "Newton's Universal Law of Gravitation",
    class: 9,
    lawType: 'Gravitation & Astrophysics',
    formula: 'F_g = G \\frac{m_1 m_2}{r^2}, \\quad G = 6.674 \\times 10^{-11} \\text{ N}\\cdot\\text{m}^2/\\text{kg}^2',
    statement: 'Every point mass attracts every other point mass with a force along the line intersecting both points, proportional to the product of their masses and inversely proportional to the square of distance.',
    explanation: 'Fundamental inverse-square central conservative force governing planetary orbits, ocean tides, and galactic structures.',
    keyPoints: [
      'Gravitational constant $G$ is a universal physical scalar constant.',
      'Acceleration due to gravity at surface: $g = \\frac{GM}{R^2} \\approx 9.8 \\text{ m/s}^2$.',
      'Conservative field: work done over any closed path is zero.'
    ],
    applications: 'Planetary orbital mechanics, geosynchronous satellites, calculating planetary masses.'
  },
  {
    id: 'p-law-coulomb',
    category: 'laws_definitions',
    title: "Coulomb's Law of Electrostatics",
    class: 10,
    lawType: 'Electromagnetism',
    formula: 'F_e = \\frac{1}{4\\pi \\varepsilon_0} \\frac{|q_1 q_2|}{r^2} = k_e \\frac{|q_1 q_2|}{r^2}',
    statement: 'The electrostatic force between two stationary electric point charges is directly proportional to the product of charge magnitudes and inversely proportional to the square of the distance between them.',
    explanation: 'Like charges repel and opposite charges attract. In medium: $F = \\frac{1}{4\\pi \\varepsilon_r \\varepsilon_0} \\frac{|q_1 q_2|}{r^2}$ where $\\varepsilon_r$ is the relative permittivity.',
    keyPoints: [
      'Electrostatic constant $k_e = \\frac{1}{4\\pi\\varepsilon_0} \\approx 8.988 \\times 10^9 \\text{ N}\\cdot\\text{m}^2/\\text{C}^2$.',
      'Permittivity of vacuum $\\varepsilon_0 = 8.854 \\times 10^{-12} \\text{ F/m}$.',
      'Central force obeying inverse-square law, analogous to gravitation but much stronger ($F_e / F_g \\sim 10^{36}$).'
    ],
    applications: 'Atomic electron binding, dielectric materials, laser printers, electrostatic precipitators.'
  },
  {
    id: 'p-law-ohm',
    category: 'laws_definitions',
    title: "Ohm's Law & Electrical Resistivity",
    class: 10,
    lawType: 'Current Electricity',
    formula: 'V = I R, \\quad R = \\rho \\frac{L}{A}, \\quad \\vec{J} = \\sigma \\vec{E}',
    statement: 'The current passing through an ohmic conductor is directly proportional to the potential difference across its terminals, provided physical conditions (temperature, strain) remain constant.',
    explanation: 'Defines electrical resistance $R$ as the ratio of voltage to current. Microscopic form relates current density $\\vec{J}$ to electric field $\\vec{E}$ via conductivity $\\sigma = 1/\\rho$.',
    keyPoints: [
      'Resistance depends on material resistivity $\\rho$, conductor length $L$, and cross-sectional area $A$.',
      'Series Combination: $R_{\\text{eq}} = R_1 + R_2 + \\dots + R_n$.',
      'Parallel Combination: $\\frac{1}{R_{\\text{eq}}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\dots + \\frac{1}{R_n}$.'
    ],
    applications: 'Electrical circuit design, potentiometers, rheostats, electronic current limiting.'
  },
  {
    id: 'p-law-faraday',
    category: 'laws_definitions',
    title: "Faraday-Lenz Law of Electromagnetic Induction",
    class: 12,
    lawType: 'Electrodynamics',
    formula: '\\mathcal{E} = -N \\frac{d\\Phi_B}{dt}, \\quad \\Phi_B = \\int \\vec{B} \\cdot d\\vec{A}',
    statement: 'An electromotive force is induced in any closed circuit whenever the magnetic flux linking that circuit changes with time. Lenz’s law specifies the polarity of the induced emf opposes the flux change that produced it.',
    explanation: 'The negative sign (Lenz’s law) is a manifestation of energy conservation: mechanical work required to change flux converts directly into electrical energy.',
    keyPoints: [
      'Magnetic flux $\\Phi_B = B A \\cos\\theta$ in Webers ($\\text{Wb} = \\text{T}\\cdot\\text{m}^2$).',
      'Induced EMF can be produced by varying magnetic field $B$, loop area $A$, or orientation angle $\\theta$.',
      'AC generators exploit rotating loop $\\theta = \\omega t$ to generate $\\mathcal{E}(t) = \\mathcal{E}_0 \\sin(\\omega t)$.'
    ],
    applications: 'Electric generators, transformers, induction cooktops, magnetic braking in bullet trains.'
  },
  {
    id: 'p-law-gauss',
    category: 'laws_definitions',
    title: "Gauss's Law for Electrostatics",
    class: 12,
    lawType: 'Electromagnetism',
    formula: '\\Phi_E = \\oint_S \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{\\text{enclosed}}}{\\varepsilon_0}',
    statement: 'The total electric flux through any closed Gaussian surface equals the net charge enclosed by the surface divided by the permittivity of free space.',
    explanation: 'First Maxwell equation. Provides an elegant method to calculate electric fields for highly symmetric charge distributions (spherical, cylindrical, planar).',
    keyPoints: [
      'Electric field inside a hollow conductor in electrostatic equilibrium is zero ($E=0$).',
      'Field due to infinite plane sheet of charge: $E = \\frac{\\sigma}{2\\varepsilon_0}$.',
      'Field due to infinite line charge: $E = \\frac{\\lambda}{2\\pi \\varepsilon_0 r}$.'
    ],
    applications: 'Electrostatic shielding (Faraday cages), coaxial cable design, high-voltage insulation.'
  },
  {
    id: 'p-law-snell',
    category: 'laws_definitions',
    title: "Snell's Law of Optical Refraction",
    class: 10,
    lawType: 'Optics & Wave Physics',
    formula: 'n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2, \\quad n = \\frac{c}{v}',
    statement: 'The ratio of the sine of the angle of incidence to the sine of the angle of refraction is equal to the ratio of the refractive index of the second medium to that of the first.',
    explanation: 'Governs light bending at dielectric interfaces resulting from differing phase velocities of light across optical media.',
    keyPoints: [
      'When entering an optically denser medium ($n_2 > n_1$), light bends toward the normal ($\\theta_2 < \\theta_1$).',
      'Critical angle for Total Internal Reflection: $\\sin\\theta_c = \\frac{n_2}{n_1}$ when light travels from dense to rare medium.',
      'Frequency $f$ of light remains constant across boundary; wavelength changes: $\\lambda_2 = \\lambda_1 / n$.'
    ],
    applications: 'Fiber optic communication, optical lenses, prisms, mirage formation, endoscopy.'
  },
  {
    id: 'p-law-thermo-first',
    category: 'laws_definitions',
    title: "First Law of Thermodynamics",
    class: 11,
    lawType: 'Thermodynamics',
    formula: '\\Delta U = Q - W, \\quad dU = dQ - dW',
    statement: 'The change in internal energy of a closed thermodynamic system equals the heat added to the system minus the work done by the system on its surroundings.',
    explanation: 'Universal principle of energy conservation applied to thermodynamic processes. Internal energy $U$ is a state variable independent of process path.',
    keyPoints: [
      'Isothermal Process ($T = \\text{const}$): $\\Delta U = 0 \\implies Q = W = nRT \\ln(V_2/V_1)$.',
      'Isochoric Process ($V = \\text{const}$): $W = 0 \\implies Q = \\Delta U = n C_v \\Delta T$.',
      'Adiabatic Process ($Q = 0$): $\\Delta U = -W \\implies P V^\\gamma = \\text{constant}$.'
    ],
    applications: 'Automobile combustion engines, refrigerators, steam turbines, atmospheric convection.'
  },
  {
    id: 'p-law-ampere',
    category: 'laws_definitions',
    title: "Ampère's Circuital Law",
    class: 12,
    lawType: 'Magnetism',
    formula: '\\oint_C \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{\\text{enclosed}} + \\mu_0 \\varepsilon_0 \\frac{d\\Phi_E}{dt}',
    statement: 'The line integral of magnetic field $\\vec{B}$ around any closed Amperian loop equals the permeability of free space $\\mu_0$ multiplied by total current (conduction + Maxwell displacement current) passing through the loop.',
    explanation: 'Allows direct determination of magnetic fields around high-symmetry current paths such as long straight wires, solenoids, and toroids.',
    keyPoints: [
      'Magnetic field inside ideal long solenoid: $B = \\mu_0 n I$.',
      'Magnetic field inside toroid: $B = \\frac{\\mu_0 N I}{2\\pi r}$.',
      'Displacement current $I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt}$ unifies electricity and magnetism into Maxwell equations.'
    ],
    applications: 'Electromagnets, MRI scanner solenoids, particle accelerators (cyclotrons).'
  }
];

// ============================================================================
// 2. PRINCIPLES
// ============================================================================
export const ALL_PHYSICS_PRINCIPLES: PhysicsPrincipleItem[] = [
  {
    id: 'p-prin-archimedes',
    category: 'principles',
    title: "Archimedes' Principle of Buoyancy",
    class: 9,
    principleType: 'Fluid Mechanics',
    formula: 'F_B = \\rho_{\\text{fluid}} \\cdot V_{\\text{submerged}} \\cdot g',
    statement: 'Any body completely or partially submerged in a fluid experiences an upward buoyant force equal to the weight of fluid displaced by the body.',
    mechanism: 'Arises from vertical hydrostatic pressure gradient in fluid ($\Delta P = \\rho g h$). The pressure on the bottom face exceeds the pressure on top face.',
    keyPoints: [
      'Law of Flotation: A floating body displaces a weight of fluid equal to its own total weight.',
      'Apparent Weight = $\\text{Real Weight} - F_B = mg\\left(1 - \\frac{\\rho_{\\text{fluid}}}{\\rho_{\\text{object}}}\\right)$.',
      'Valid for both liquids and gases.'
    ],
    realWorldExample: 'Hydrometers for measuring battery acid density, submarine ballast control, hot air balloon ascension.'
  },
  {
    id: 'p-prin-bernoulli',
    category: 'principles',
    title: "Bernoulli's Principle of Fluid Dynamics",
    class: 11,
    principleType: 'Fluid Mechanics',
    formula: 'P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{constant}',
    statement: 'For an incompressible, non-viscous, irrotational fluid flowing steadily along a streamline, the sum of pressure energy, kinetic energy per unit volume, and potential energy per unit volume remains constant.',
    mechanism: 'Direct consequence of work-energy theorem applied to moving fluid elements. As fluid velocity increases in constricted paths, static pressure decreases.',
    keyPoints: [
      'High velocity region $\\implies$ Low static pressure region.',
      'Continuity equation constraint: $A_1 v_1 = A_2 v_2 = \\text{constant}$ (mass conservation).',
      'Torricelli’s law of efflux velocity from orifice: $v = \\sqrt{2gh}$.'
    ],
    realWorldExample: 'Aerodynamic lift on airplane wings, Venturi meters in carburetors, spray atomizers, curveball Magnus effect.'
  },
  {
    id: 'p-prin-momentum-cons',
    category: 'principles',
    title: 'Principle of Conservation of Linear Momentum',
    class: 9,
    principleType: 'Mechanics',
    formula: '\\sum \\vec{p}_{\\text{initial}} = \\sum \\vec{p}_{\\text{final}}, \\quad \\vec{P}_{\\text{total}} = \\sum m_i \\vec{v}_i = \\text{constant}',
    statement: 'In an isolated system where no net external force acts, the total linear momentum of all interacting particles remains strictly constant over time.',
    mechanism: 'Derived from Newton’s Third Law: internal interaction forces occur in equal and opposite pairs, so $\\sum \\vec{F}_{\\text{internal}} = 0$.',
    keyPoints: [
      'Elastic Collisions: Momentum is conserved AND kinetic energy is conserved ($e = 1$).',
      'Inelastic Collisions: Momentum is conserved, but kinetic energy converts to heat/deformation ($e < 1$).',
      'Direct consequence of spatial translational symmetry (Noether’s Theorem).'
    ],
    realWorldExample: 'Rocket staging in spaceflight, billiard ball kinematics, particle collider scattering experiments.'
  },
  {
    id: 'p-prin-energy-cons',
    category: 'principles',
    title: 'Principle of Conservation of Mechanical Energy',
    class: 9,
    principleType: 'Work & Energy',
    formula: 'E_{\\text{total}} = K + U = \\frac{1}{2}m v^2 + m g h = \\text{constant}',
    statement: 'In a conservative force field (such as gravity or ideal spring electrostatic fields), the total mechanical energy of a closed system remains constant.',
    mechanism: 'Work done by conservative forces equals negative change in potential energy ($W_c = -\\Delta U$), transforming kinetic energy into potential energy and vice versa.',
    keyPoints: [
      'At highest point of a projectile, potential energy is maximized while kinetic energy is minimized.',
      'Spring-mass system: $E = \\frac{1}{2}mv^2 + \\frac{1}{2}kx^2 = \\frac{1}{2}kA^2$.',
      'Non-conservative forces (friction, drag) dissipate mechanical energy into thermal energy ($W_{\\text{nc}} = \\Delta E_{\\text{mech}}$).'
    ],
    realWorldExample: 'Roller coaster loops, pendulum clocks, hydroelectric power generation from dam reservoirs.'
  },
  {
    id: 'p-prin-pascal',
    category: 'principles',
    title: "Pascal's Principle of Hydrostatic Transmission",
    class: 11,
    principleType: 'Fluid Statics',
    formula: '\\Delta P_1 = \\Delta P_2 \\implies \\frac{F_1}{A_1} = \\frac{F_2}{A_2} \\implies F_2 = F_1 \\left(\\frac{A_2}{A_1}\\right)',
    statement: 'Pressure applied to an enclosed, incompressible fluid is transmitted undiminished to every portion of the fluid and to the walls of the containing vessel.',
    mechanism: 'Molecules in incompressible liquid resist compression uniformly, transmitting force across cross-sectional areas with force multiplication proportional to area ratio.',
    keyPoints: [
      'Enables hydraulic force multiplication: a small input force creates a massive lifting force on larger piston.',
      'Mechanical Advantage: $\\text{MA} = \\frac{F_2}{F_1} = \\frac{A_2}{A_1}$.',
      'Work input equals work output (ignoring fluid friction): $F_1 d_1 = F_2 d_2$.'
    ],
    realWorldExample: 'Hydraulic car jacks, automotive disc braking systems, hydraulic excavators and heavy industrial presses.'
  },
  {
    id: 'p-prin-heisenberg',
    category: 'principles',
    title: "Heisenberg's Uncertainty Principle",
    class: 11,
    principleType: 'Quantum Mechanics',
    formula: '\\Delta x \\cdot \\Delta p_x \\ge \\frac{\\hbar}{2} = \\frac{h}{4\\pi}, \\quad \\Delta E \\cdot \\Delta t \\ge \\frac{\\hbar}{2}',
    statement: 'It is fundamentally impossible to measure simultaneously both the exact position and exact linear momentum of a quantum particle with arbitrary precision.',
    mechanism: 'Intrinsic consequence of wave-particle duality: localizing a wave packet in space requires a wide superposition of spatial wave numbers $k$, introducing spread in momentum $p = \\hbar k$.',
    keyPoints: [
      'Planck reduced constant $\\hbar = \\frac{h}{2\\pi} \\approx 1.05457 \\times 10^{-34} \\text{ J}\\cdot\\text{s}$.',
      'Explains why electrons cannot collapse into atomic nuclei.',
      'Time-Energy uncertainty principle governs quantum vacuum fluctuations and virtual particle creation.'
    ],
    realWorldExample: 'Quantum tunneling in semiconductor flash memory, scanning tunneling microscopes (STM), radioactive alpha decay.'
  },
  {
    id: 'p-prin-superposition',
    category: 'principles',
    title: 'Principle of Superposition (Waves & Fields)',
    class: 11,
    principleType: 'Wave Motion & Optics',
    formula: 'y(x,t) = y_1(x,t) + y_2(x,t), \\quad \\vec{E}_{\\text{net}} = \\sum_{i} \\vec{E}_i',
    statement: 'When two or more waves travel through the same medium simultaneously, the resultant displacement at any point is the vector sum of individual displacements produced by each wave.',
    mechanism: 'Arises from linearity of the governing wave differential equations ($\\frac{\\partial^2 y}{\\partial x^2} = \\frac{1}{v^2} \\frac{\\partial^2 y}{\\partial t^2}$).',
    keyPoints: [
      'Constructive Interference: Waves arrive in phase ($\\Delta \\phi = 2n\\pi$) $\\implies$ maximum amplitude $A_{\\max} = A_1 + A_2$.',
      'Destructive Interference: Waves arrive out of phase ($\\Delta \\phi = (2n+1)\\pi$) $\\implies$ minimum amplitude $A_{\\min} = |A_1 - A_2|$.',
      'Produces standing waves on strings and organ pipes.'
    ],
    realWorldExample: 'Active noise-canceling headphones, Young’s double slit optical interference, acoustic resonance in musical instruments.'
  },
  {
    id: 'p-prin-huygens',
    category: 'principles',
    title: "Huygens' Principle of Wavefronts",
    class: 12,
    principleType: 'Wave Optics',
    formula: 'v = \\frac{c}{n}, \\quad \\sin i / \\sin r = n_{21}',
    statement: 'Every point on a primary wavefront serves as a point source of spherical secondary wavelets. The new wavefront at a later time is the forward envelope tangent to all these secondary wavelets.',
    mechanism: 'Geometrical construction providing a rigorous physical wave model explaining reflection, refraction, and diffraction without relying on ray approximations.',
    keyPoints: [
      'Secondary wavelets propagate forward with the phase speed characteristic of that optical medium.',
      'Explains diffraction of light bending around obstacles and narrow slits.',
      'Derived directly from scalar wave Helmholtz equation.'
    ],
    realWorldExample: 'Single slit diffraction patterns, holographic imaging, radar beamforming.'
  }
];

// ============================================================================
// 3. FORMULAS
// ============================================================================
export const ALL_PHYSICS_FORMULAS: PhysicsFormulaItem[] = [
  {
    id: 'p-form-kinematics',
    category: 'formulas',
    title: 'Kinematic Equations for Uniform Acceleration',
    class: 9,
    topic: 'Rectilinear Motion',
    formula: 'v = u + at, \\quad s = ut + \\frac{1}{2}at^2, \\quad v^2 = u^2 + 2as, \\quad s_n = u + \\frac{a}{2}(2n - 1)',
    variablesExplanation: '$u$: initial velocity (m/s), $v$: final velocity (m/s), $a$: constant acceleration (m/s²), $t$: time elapsed (s), $s$: displacement (m), $s_n$: displacement in $n$-th second.',
    notes: 'Valid ONLY for motion along a straight line under constant acceleration. Choose appropriate sign convention for upward/downward vertical motion under gravity ($a = -g$).',
    siUnits: 'Velocity: m/s, Acceleration: m/s², Displacement: m'
  },
  {
    id: 'p-form-work-power',
    category: 'formulas',
    title: 'Work, Kinetic Energy & Power',
    class: 9,
    topic: 'Work, Energy and Power',
    formula: 'W = \\vec{F} \\cdot \\vec{d} = F d \\cos\\theta, \\quad K = \\frac{1}{2}m v^2 = \\frac{p^2}{2m}, \\quad P = \\frac{dW}{dt} = \\vec{F} \\cdot \\vec{v}',
    variablesExplanation: '$W$: work done (Joules), $\\vec{F}$: applied force (N), $\\vec{d}$: displacement vector (m), $\\theta$: angle between force and displacement, $K$: kinetic energy (J), $p$: linear momentum (kg·m/s), $P$: instantaneous power (Watts).',
    notes: 'Work is zero if displacement is perpendicular to force ($\\theta = 90^\\circ$), such as in uniform circular motion with centripetal force.',
    siUnits: 'Work & Energy: Joules (J), Power: Watts (W = J/s)'
  },
  {
    id: 'p-form-shm',
    category: 'formulas',
    title: 'Simple Harmonic Motion (SHM) Dynamics',
    class: 11,
    topic: 'Oscillations & Waves',
    formula: 'x(t) = A \\cos(\\omega t + \\phi), \\quad T = 2\\pi\\sqrt{\\frac{m}{k}}, \\quad T_{\\text{pendulum}} = 2\\pi\\sqrt{\\frac{L}{g}}, \\quad \\omega = \\sqrt{\\frac{k}{m}}',
    variablesExplanation: '$x(t)$: displacement from mean position, $A$: amplitude, $\\omega$: angular frequency (rad/s), $\\phi$: initial phase angle, $T$: time period (s), $k$: spring stiffness constant (N/m), $L$: pendulum length (m).',
    notes: 'Restoring force $F = -kx$ and acceleration $a = -\\omega^2 x$. Maximum velocity $v_{\\max} = A\\omega$ occurs at mean position ($x=0$); maximum acceleration occurs at extreme positions.',
    siUnits: 'Period: s, Frequency: Hz, Angular Frequency: rad/s'
  },
  {
    id: 'p-form-rotational',
    category: 'formulas',
    title: 'Rotational Dynamics & Moment of Inertia',
    class: 11,
    topic: 'System of Particles & Rotational Motion',
    formula: '\\tau = I \\alpha = \\vec{r} \\times \\vec{F}, \\quad L = I \\omega = \\vec{r} \\times \\vec{p}, \\quad K_{\\text{rot}} = \\frac{1}{2}I \\omega^2, \\quad I = \\sum m_i r_i^2',
    variablesExplanation: '$\\tau$: torque (N·m), $I$: moment of inertia (kg·m²), $\\alpha$: angular acceleration (rad/s²), $L$: angular momentum (kg·m²/s), $\\omega$: angular velocity (rad/s).',
    notes: 'Parallel Axis Theorem: $I = I_{\\text{cm}} + M d^2$. Perpendicular Axis Theorem for planar laminae: $I_z = I_x + I_y$.',
    siUnits: 'Torque: N·m, Moment of Inertia: kg·m², Angular Momentum: J·s'
  },
  {
    id: 'p-form-grav-orbit',
    category: 'formulas',
    title: 'Orbital Speed & Kepler Planetary Laws',
    class: 11,
    topic: 'Gravitation',
    formula: 'v_{\\text{orb}} = \\sqrt{\\frac{GM}{r}}, \\quad v_{\\text{esc}} = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2gR}, \\quad T^2 = \\left(\\frac{4\\pi^2}{GM}\\right) r^3',
    variablesExplanation: '$v_{\\text{orb}}$: satellite circular orbital speed, $v_{\\text{esc}}$: escape velocity from planetary surface, $G$: gravitational constant, $M$: central body mass, $R$: planetary radius, $r = R+h$: orbital radius, $T$: orbital period.',
    notes: 'Escape velocity from Earth surface is approximately $11.2 \\text{ km/s}$, independent of projectile launch angle or mass.',
    siUnits: 'Velocity: m/s, Period: s'
  },
  {
    id: 'p-form-capacitance',
    category: 'formulas',
    title: 'Capacitance & Electrostatic Stored Energy',
    class: 12,
    topic: 'Electrostatic Potential & Capacitance',
    formula: 'C = \\frac{Q}{V} = \\frac{\\kappa \\varepsilon_0 A}{d}, \\quad U = \\frac{1}{2} C V^2 = \\frac{Q^2}{2C} = \\frac{1}{2} Q V, \\quad u_E = \\frac{1}{2}\\varepsilon_0 E^2',
    variablesExplanation: '$C$: capacitance (Farads), $Q$: stored charge (C), $V$: potential difference (V), $\\kappa$: dielectric constant, $A$: plate area (m²), $d$: plate separation (m), $U$: electrostatic energy (J), $u_E$: energy density (J/m³).',
    notes: 'Series Capacitors: $\\frac{1}{C_{\\text{eq}}} = \\frac{1}{C_1} + \\frac{1}{C_2}$. Parallel Capacitors: $C_{\\text{eq}} = C_1 + C_2$.',
    siUnits: 'Capacitance: Farad (F = C/V), Energy: Joules (J)'
  },
  {
    id: 'p-form-lorentz-force',
    category: 'formulas',
    title: 'Magnetic Lorentz Force & Cyclotron Radius',
    class: 12,
    topic: 'Moving Charges and Magnetism',
    formula: '\\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B}), \\quad r = \\frac{m v}{q B} = \\frac{p}{q B}, \\quad f_{\\text{cyclotron}} = \\frac{q B}{2\\pi m}',
    variablesExplanation: '$\\vec{F}$: total Lorentz force (N), $q$: electric charge (C), $\\vec{v}$: velocity vector (m/s), $\\vec{B}$: magnetic field (Tesla), $r$: gyroradius in perpendicular field, $f$: cyclotron frequency.',
    notes: 'Magnetic force does zero work on moving charged particles since $\\vec{F}_B \\perp \\vec{v}$, changing only trajectory direction and not kinetic energy.',
    siUnits: 'Magnetic Field: Tesla ($\\text{T} = \\text{N}/(\\text{A}\\cdot\\text{m})$)'
  },
  {
    id: 'p-form-photoelectric',
    category: 'formulas',
    title: "Einstein's Photoelectric Equation & De Broglie Relation",
    class: 12,
    topic: 'Dual Nature of Radiation and Matter',
    formula: 'E = h f = \\frac{h c}{\\lambda}, \\quad K_{\\max} = e V_0 = h f - \\Phi_0 = h(f - f_0), \\quad \\lambda = \\frac{h}{p} = \\frac{h}{\\sqrt{2m E}}',
    variablesExplanation: '$E$: photon energy, $h$: Planck constant ($6.626 \\times 10^{-34} \\text{ J}\\cdot\\text{s}$), $f$: frequency (Hz), $\\lambda$: wavelength, $K_{\\max}$: maximum electron kinetic energy, $V_0$: stopping potential (V), $\\Phi_0 = hf_0$: work function of metal.',
    notes: 'For electrons accelerated through potential difference $V$: $\\lambda = \\frac{1.227}{\\sqrt{V}} \\text{ nm}$.',
    siUnits: 'Work Function: eV or Joules, Planck Constant: J·s'
  },
  {
    id: 'p-form-carnot',
    category: 'formulas',
    title: 'Carnot Cycle Maximum Heat Engine Efficiency',
    class: 11,
    topic: 'Thermodynamics',
    formula: '\\eta_{\\text{Carnot}} = 1 - \\frac{T_C}{T_H} = \\frac{W_{\\text{net}}}{Q_{\\text{in}}} = \\frac{Q_H - Q_C}{Q_H}, \\quad \\text{COP}_{\\text{refrig}} = \\frac{T_C}{T_H - T_C}',
    variablesExplanation: '$\\eta$: thermal efficiency, $T_H$: temperature of hot heat source (Kelvin), $T_C$: temperature of cold heat sink (Kelvin), $Q_H$: heat absorbed, $Q_C$: heat rejected, $\\text{COP}$: coefficient of performance.',
    notes: 'Carnot efficiency represents the upper theoretical limit for any heat engine operating between two thermal reservoirs.',
    siUnits: 'Temperatures MUST always be expressed in absolute Kelvin (K = °C + 273.15).'
  }
];

// ============================================================================
// 4. DERIVATIONS
// ============================================================================
export const ALL_PHYSICS_DERIVATIONS: PhysicsDerivationItem[] = [
  {
    id: 'p-der-kinematics-v2',
    category: 'derivations',
    title: 'Derivation of Third Kinematic Equation: v² = u² + 2as',
    class: 11,
    targetResult: 'v^2 = u^2 + 2as',
    startingPrinciples: 'Instantaneous acceleration definition $a = \\frac{dv}{dt}$ and velocity chain rule $a = v \\frac{dv}{ds}$.',
    stepByStepDerivation: [
      'Express acceleration using calculus chain rule: $a = \\frac{dv}{dt} = \\frac{dv}{ds} \\cdot \\frac{ds}{dt} = v \\frac{dv}{ds}$.',
      'Rearrange variables to separate displacement and velocity: $a \\, ds = v \\, dv$.',
      'Integrate both sides over initial state ($s=0, v=u$) to final state ($s=s, v=v$) under constant acceleration $a$:',
      '$\\int_0^s a \\, ds = \\int_u^v v \\, dv$',
      'Evaluate left side: $a \\left[ s \\right]_0^s = a s$.',
      'Evaluate right side: $\\left[ \\frac{v^2}{2} \\right]_u^v = \\frac{v^2 - u^2}{2}$.',
      'Equate both sides: $as = \\frac{v^2 - u^2}{2} \\implies 2as = v^2 - u^2$.',
      'Rearrange to obtain the final equation: $v^2 = u^2 + 2as$.'
    ],
    finalEquation: 'v^2 = u^2 + 2as',
    keyAssumptions: 'Acceleration $a$ is constant and motion is in a straight line.'
  },
  {
    id: 'p-der-escape-vel',
    category: 'derivations',
    title: 'Derivation of Planetary Escape Velocity',
    class: 11,
    targetResult: 'v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2gR}',
    startingPrinciples: 'Work done against gravitational force field from planetary surface $r=R$ to infinity $r=\\infty$.',
    stepByStepDerivation: [
      'Gravitational attractive force on projectile mass $m$ at distance $r$ from center of planet mass $M$: $F(r) = \\frac{GMm}{r^2}$.',
      'Work required to move object infinitely far away against gravity: $W = \\int_R^\\infty F(r)\\,dr = \\int_R^\\infty \\frac{GMm}{r^2} dr$.',
      'Evaluate improper integral: $W = GMm \\left[ -\\frac{1}{r} \\right]_R^\\infty = GMm \\left( 0 - \\left(-\\frac{1}{R}\\right) \\right) = \\frac{GMm}{R}$.',
      'By conservation of energy, the projectile initial kinetic energy $\\frac{1}{2}m v_e^2$ must equal this escape binding work $W$:',
      '$\\frac{1}{2} m v_e^2 = \\frac{GMm}{R}$',
      'Cancel projectile mass $m$: $v_e^2 = \\frac{2GM}{R}$.',
      'Substitute surface gravity $g = \\frac{GM}{R^2} \\implies GM = g R^2$:',
      '$v_e = \\sqrt{\\frac{2(g R^2)}{R}} = \\sqrt{2gR}$.'
    ],
    finalEquation: 'v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2gR} \\approx 11.2 \\text{ km/s for Earth}',
    keyAssumptions: 'Atmospheric drag neglected, non-rotating spherical planetary mass distribution.'
  },
  {
    id: 'p-der-kinetic-energy',
    category: 'derivations',
    title: 'Derivation of Kinetic Energy Formula (Work-Energy Theorem)',
    class: 9,
    targetResult: 'K = \\frac{1}{2}m v^2',
    startingPrinciples: 'Work done by net force $F = ma = m \\frac{dv}{dt}$ over displacement $dx$.',
    stepByStepDerivation: [
      'Work done by a force moving a mass $m$ over infinitesimal distance $dx$: $dW = F \\, dx$.',
      'Substitute Newton’s Second Law $F = m \\frac{dv}{dt}$: $dW = m \\frac{dv}{dt} dx = m \\left( \\frac{dx}{dt} \\right) dv = m v \\, dv$.',
      'Integrate work done accelerating the mass from rest ($v=0$) to final speed $v$:',
      '$W = \\int_0^v m v \\, dv = m \\left[ \\frac{v^2}{2} \\right]_0^v = \\frac{1}{2}m v^2$.',
      'Since initial kinetic energy is zero, the work done on the particle equals its acquired kinetic energy $K = W = \\frac{1}{2}mv^2$.'
    ],
    finalEquation: 'K = \\frac{1}{2}m v^2',
    keyAssumptions: 'Non-relativistic speeds ($v \\ll c$) and constant inertial mass.'
  },
  {
    id: 'p-der-pendulum-period',
    category: 'derivations',
    title: 'Derivation of Time Period of a Simple Pendulum',
    class: 11,
    targetResult: 'T = 2\\pi \\sqrt{\\frac{L}{g}}',
    startingPrinciples: 'Restoring torque $\\tau = I \\alpha$ for a point mass $m$ suspended on massless string of length $L$.',
    stepByStepDerivation: [
      'Restoring torque about suspension pivot: $\\tau = -(mg \\sin\\theta) L$.',
      'Apply rotational dynamics $\\tau = I \\frac{d^2\\theta}{dt^2}$ with moment of inertia $I = m L^2$:',
      '$m L^2 \\frac{d^2\\theta}{dt^2} = -mg L \\sin\\theta \\implies \\frac{d^2\\theta}{dt^2} + \\frac{g}{L} \\sin\\theta = 0$.',
      'Apply Small Angle Approximation ($\\sin\\theta \\approx \\theta$ for $\\theta \\ll 1$ radian):',
      '$\\frac{d^2\\theta}{dt^2} + \\left( \\frac{g}{L} \\right) \\theta = 0$.',
      'Compare with standard SHM differential equation $\\frac{d^2\\theta}{dt^2} + \\omega^2 \\theta = 0$ to identify angular frequency:',
      '$\\omega = \\sqrt{\\frac{g}{L}}$.',
      'Time period relates to angular frequency by $T = \\frac{2\\pi}{\\omega} = 2\\pi \\sqrt{\\frac{L}{g}}$.'
    ],
    finalEquation: 'T = 2\\pi\\sqrt{\\frac{L}{g}}',
    keyAssumptions: 'Small angular displacement ($\\theta < 10^\\circ$), massless inextensible string, air resistance neglected.'
  },
  {
    id: 'p-der-lens-maker',
    category: 'derivations',
    title: "Derivation of Lens Maker's Formula",
    class: 12,
    targetResult: '\\frac{1}{f} = (\\mu - 1)\\left( \\frac{1}{R_1} - \\frac{1}{R_2} \\right)',
    startingPrinciples: 'Refraction formula at single spherical surface: $\\frac{\\mu_2}{v} - \\frac{\\mu_1}{u} = \\frac{\\mu_2 - \\mu_1}{R}$.',
    stepByStepDerivation: [
      'Refraction at first convex surface of radius $R_1$ from air ($\mu_1=1$) into lens medium ($\mu_2=\mu$):',
      '$\\frac{\\mu}{v_1} - \\frac{1}{u} = \\frac{\\mu - 1}{R_1} \\quad \\text{--- (Equation 1)}$',
      'The virtual image formed at $v_1$ acts as object for second surface of radius $R_2$, refracting from lens ($\mu$) into air ($1$):',
      '$\\frac{1}{v} - \\frac{\\mu}{v_1} = \\frac{1 - \\mu}{R_2} = -\\frac{\\mu - 1}{R_2} \\quad \\text{--- (Equation 2)}$',
      'Add Equation 1 and Equation 2 to eliminate the intermediate image distance $v_1$:',
      '$\\left(\\frac{\\mu}{v_1} - \\frac{1}{u}\\right) + \\left(\\frac{1}{v} - \\frac{\\mu}{v_1}\\right) = \\frac{\\mu - 1}{R_1} - \\frac{\\mu - 1}{R_2}$',
      '$\\frac{1}{v} - \\frac{1}{u} = (\\mu - 1)\\left( \\frac{1}{R_1} - \\frac{1}{R_2} \\right)$',
      'By thin lens definition, when object is at infinity ($u=\\infty$), image forms at focal point ($v=f$), so $\\frac{1}{f} - 0 = \\frac{1}{f}$:',
      '$\\frac{1}{f} = (\\mu - 1)\\left( \\frac{1}{R_1} - \\frac{1}{R_2} \\right)$.'
    ],
    finalEquation: '\\frac{1}{f} = (\\mu - 1)\\left( \\frac{1}{R_1} - \\frac{1}{R_2} \\right)',
    keyAssumptions: 'Thin lens approximation (thickness $t \\ll R_1, R_2$) and paraxial light rays.'
  },
  {
    id: 'p-der-dipole-axial',
    category: 'derivations',
    title: 'Derivation of Electric Field on Axial Line of an Electric Dipole',
    class: 12,
    targetResult: 'E_{\\text{axial}} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{2p}{r^3}',
    startingPrinciples: "Coulomb's Law and superposition principle for two charges $+q$ and $-q$ separated by distance $2a$.",
    stepByStepDerivation: [
      'Consider electric dipole of moment $p = q(2a)$ centered at origin. Point $P$ lies on the axial line at distance $r$ from dipole center.',
      'Electric field at $P$ due to positive charge $+q$ at distance $(r - a)$:',
      '$E_+ = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q}{(r - a)^2} \\quad (\\text{directed away from dipole})$',
      'Electric field at $P$ due to negative charge $-q$ at distance $(r + a)$:',
      '$E_- = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q}{(r + a)^2} \\quad (\\text{directed toward dipole})$',
      'Net axial field is the vector difference: $E_{\\text{net}} = E_+ - E_-$:',
      '$E_{\\text{net}} = \\frac{q}{4\\pi\\varepsilon_0} \\left[ \\frac{1}{(r-a)^2} - \\frac{1}{(r+a)^2} \\right] = \\frac{q}{4\\pi\\varepsilon_0} \\left[ \\frac{(r+a)^2 - (r-a)^2}{(r^2 - a^2)^2} \\right]$',
      'Simplify numerator: $(r^2 + 2ar + a^2) - (r^2 - 2ar + a^2) = 4ar$:',
      '$E_{\\text{net}} = \\frac{q (4ar)}{4\\pi\\varepsilon_0 (r^2 - a^2)^2} = \\frac{2 (q \\cdot 2a) r}{4\\pi\\varepsilon_0 (r^2 - a^2)^2} = \\frac{2pr}{4\\pi\\varepsilon_0 (r^2 - a^2)^2}$',
      'For short dipole / far field where distance $r \\gg a$, $(r^2 - a^2)^2 \\approx r^4$:',
      '$E_{\\text{axial}} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{2pr}{r^4} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{2p}{r^3}$.'
    ],
    finalEquation: 'E_{\\text{axial}} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{2p}{r^3} = \\frac{2kp}{r^3}',
    keyAssumptions: 'Point $P$ distance is much larger than dipole charge separation ($r \\gg a$).'
  },
  {
    id: 'p-der-bohr-radius',
    category: 'derivations',
    title: "Derivation of Bohr's Orbit Radius & Hydrogen Energy Levels",
    class: 12,
    targetResult: 'r_n = \\frac{n^2 h^2 \\varepsilon_0}{\\pi m e^2} = n^2 a_0, \\quad E_n = -\\frac{13.6}{n^2} \\text{ eV}',
    startingPrinciples: 'Bohr quantization of angular momentum $mvr = \\frac{nh}{2\\pi}$ and Coulomb centripetal balance.',
    stepByStepDerivation: [
      'Equate electrostatic Coulomb force to centripetal force for an electron of mass $m$ orbiting nuclear charge $Z e$ ($Z=1$ for Hydrogen):',
      '$\\frac{m v^2}{r} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{e^2}{r^2} \\implies m v^2 r = \\frac{e^2}{4\\pi\\varepsilon_0} \\quad \\text{--- (Eq. 1)}$',
      'Apply Bohr’s Quantum Angular Momentum Postulate: $m v r = \\frac{n h}{2\\pi} \\implies v = \\frac{n h}{2\\pi m r} \\quad \\text{--- (Eq. 2)}$',
      'Substitute Eq. 2 into Eq. 1: $m \\left( \\frac{n h}{2\\pi m r} \\right)^2 r = \\frac{e^2}{4\\pi\\varepsilon_0} \\implies \\frac{n^2 h^2}{4\\pi^2 m r} = \\frac{e^2}{4\\pi\\varepsilon_0}$',
      'Solve for orbit radius $r_n$:',
      '$r_n = \\frac{n^2 h^2 \\varepsilon_0}{\\pi m e^2} = n^2 \\cdot (0.529 \\text{ Å}) = n^2 a_0$.',
      'Total orbital energy equals sum of kinetic energy $K = \\frac{1}{2}mv^2 = \\frac{e^2}{8\\pi\\varepsilon_0 r}$ and potential energy $U = -\\frac{e^2}{4\\pi\\varepsilon_0 r}$:',
      '$E_n = K + U = -\\frac{e^2}{8\\pi\\varepsilon_0 r_n} = -\\frac{m e^4}{8 \\varepsilon_0^2 h^2} \\cdot \\frac{1}{n^2} = -\\frac{13.6}{n^2} \\text{ eV}$.'
    ],
    finalEquation: 'r_n = n^2 (0.529 \\text{ Å}), \\quad E_n = -\\frac{13.6}{n^2} \\text{ eV}',
    keyAssumptions: 'Circular electron orbits, non-relativistic classical dynamics coupled with Planck-Bohr quantization.'
  },
  {
    id: 'p-der-de-broglie',
    category: 'derivations',
    title: 'Derivation of de Broglie Matter Wavelength',
    class: 12,
    targetResult: '\\lambda = \\frac{h}{p} = \\frac{h}{m v} = \\frac{h}{\\sqrt{2m E_k}}',
    startingPrinciples: "Einstein's photon energy relation $E = mc^2 = hf$ and wave relation $c = f\\lambda$.",
    stepByStepDerivation: [
      'According to Einstein’s Special Relativity, photon energy is related to its effective relativistic mass by: $E = m c^2$.',
      'According to Planck’s Quantum Hypothesis, energy of a photon of frequency $f$ is: $E = h f = \\frac{h c}{\\lambda}$.',
      'Equate both energy expressions: $m c^2 = \\frac{h c}{\\lambda} \\implies m c = \\frac{h}{\\lambda}$.',
      'Since $m c$ represents the photon momentum $p$, we have: $p = \\frac{h}{\\lambda} \\implies \\lambda = \\frac{h}{p}$.',
      'De Broglie hypothesized that this relation applies universally to any material particle of mass $m$ moving at velocity $v$ with momentum $p = mv$:',
      '$\\lambda = \\frac{h}{m v}$',
      'Relate momentum to kinetic energy $E_k = \\frac{p^2}{2m} \\implies p = \\sqrt{2m E_k}$:',
      '$\\lambda = \\frac{h}{\\sqrt{2m E_k}}$.'
    ],
    finalEquation: '\\lambda = \\frac{h}{p} = \\frac{h}{\\sqrt{2mE_k}}',
    keyAssumptions: 'Matter particles exhibit wave-like characteristics with wavelength inversely proportional to momentum.'
  }
];
