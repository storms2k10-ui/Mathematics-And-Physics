import { Chapter } from '../types';

// ============================================================================
// 🧪 CHEMISTRY — CLASS 11 CURRICULUM (12 EXACT CHAPTERS WITH DYNAMIC OVERVIEWS)
// ============================================================================
export const CHEMISTRY_CHAPTERS: Chapter[] = [
  {
    id: 'chem11-ch1',
    class: 11,
    track: 'Chemistry',
    name: 'Stoichiometry',
    description: 'Quantitative relationships in chemical reactions, mole concept, Avogadro’s number ($6.022 \\times 10^{23}$), molar mass, empirical & molecular formulas, stoichiometric ratios, limiting reactants, and percentage yield.',
    category: 'Stoichiometry & Atomic Structure',
    questionCount: 200,
    difficulty: 'Mixed',
    keyTopics: [
      'Mole Concept & Avogadro’s Constant ($N_A = 6.022 \\times 10^{23}\\text{ mol}^{-1}$)',
      'Molar Volume at STP ($22.414\\text{ dm}^3\\text{/mol}$)',
      'Empirical Formula vs. Molecular Formula ($M = n \\times EF$)',
      'Stoichiometric Calculations: Mass-Mass, Mass-Volume, Mole-Mole Ratios',
      'Limiting Reactant Identification and Excess Reagent',
      'Theoretical Yield, Actual Yield, and Percentage Yield'
    ],
    color: 'emerald',
    icon: 'Scale',
    artTheme: 'chemistry',
    formulaHighlight: 'n = \\frac{m}{M} = \\frac{N}{N_A} = \\frac{V}{22.414}, \\quad \\%\\text{Yield} = \\frac{\\text{Actual Yield}}{\\text{Theoretical Yield}} \\times 100\\%',
    overview: {
      summary: 'Stoichiometry is the quantitative foundation of chemical science, governing the conservation of mass and stoichiometric proportions in chemical transformations. It enables precise calculation of reactants needed and products formed in chemical syntheses.',
      historicalContext: 'Formulated by Jeremias Benjamin Richter in 1792 based on Antoine Lavoisier’s law of conservation of mass and Joseph Proust’s law of definite proportions.',
      learningOutcomes: [
        'Interconvert between mass, moles, particle counts, and molar volume at STP',
        'Determine empirical and molecular formulas from combustion analysis and percentage composition',
        'Identify limiting and excess reagents in multi-reactant systems',
        'Calculate theoretical yields and experimental percentage yields for chemical processes'
      ],
      coreFormulas: [
        { label: 'Number of Moles', formula: 'n = \\frac{m}{M} = \\frac{N}{N_A}', explanation: 'Calculates chemical amount from sample mass $m$ and molar mass $M$, or particle count $N$.' },
        { label: 'Molar Volume at STP', formula: 'V = n \\times 22.414 \\text{ dm}^3', explanation: 'Volume occupied by $n$ moles of an ideal gas at standard temperature and pressure ($0^\\circ\\text{C}, 1\\text{ atm}$).' },
        { label: 'Percentage Yield', formula: '\\%\\text{Yield} = \\frac{\\text{Actual Yield}}{\\text{Theoretical Yield}} \\times 100\\%', explanation: 'Quantifies reaction efficiency by comparing measured product mass with stoichiometric maximum.' }
      ],
      realWorldApplications: [
        'Pharmaceutical Manufacturing: Precise active ingredient dosage formulation and yield optimization',
        'Fertilizer Synthesis: Stoichiometric mass balance in the Haber-Bosch ammonia production cycle',
        'Environmental Monitoring: Gravimetric and volumetric air pollutant concentration measurement',
        'Automotive Airbags: Rapid stoichiometric sodium azide ($NaN_3$) decomposition yielding nitrogen gas'
      ],
      keyTheorems: [
        { title: 'Law of Conservation of Mass', statement: 'In any closed chemical reaction, the total mass of reactants equals the total mass of products.', importance: 'Provides the fundamental mathematical basis for balancing all chemical equations.' }
      ]
    }
  },
  {
    id: 'chem11-ch2',
    class: 11,
    track: 'Chemistry',
    name: 'Atomic Structure',
    description: 'Subatomic particles, cathode & positive rays, Planck’s quantum theory, Rutherford & Bohr models, hydrogen emission spectrum, de Broglie hypothesis, Heisenberg uncertainty principle, quantum numbers ($n, l, m, s$), and electronic configurations.',
    category: 'Stoichiometry & Atomic Structure',
    questionCount: 200,
    difficulty: 'Mixed',
    keyTopics: [
      'Discovery of Electron, Proton, and Neutron ($e/m$ ratio)',
      'Planck’s Quantum Theory: $E = h\\nu = \\frac{hc}{\\lambda}$',
      'Bohr’s Postulates, Radii ($r_n = 0.529n^2\\text{ Å}$), and Energy Levels ($E_n = -\\frac{13.6}{n^2}\\text{ eV}$)',
      'Hydrogen Line Spectrum: Lyman, Balmer, Paschen, Brackett, Pfund Series',
      'Wave-Particle Duality & de Broglie Wavelength ($\\lambda = \\frac{h}{mv}$)',
      'Heisenberg Uncertainty Principle ($\\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi}$)',
      'Four Quantum Numbers ($n, l, m, s$) and Aufbau, Pauli, Hund Rules'
    ],
    color: 'cyan',
    icon: 'Atom',
    artTheme: 'chemistry',
    formulaHighlight: 'E_n = -\\frac{2.18 \\times 10^{-18}}{n^2}\\text{ J}, \\quad \\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right), \\quad \\lambda = \\frac{h}{p}',
    overview: {
      summary: 'Atomic Structure explores the quantum mechanical architecture of matter. From classical planetary analogies to modern wave mechanics and orbital probability distributions, it explains elemental periodic trends and spectroscopy.',
      historicalContext: 'Pioneered by J.J. Thomson, Ernest Rutherford, Niels Bohr (1913), Louis de Broglie (1924), and Erwin Schrödinger (1926) in the birth of quantum mechanics.',
      learningOutcomes: [
        'Calculate photon energies, frequencies, and wavelengths across the electromagnetic spectrum',
        'Derive Bohr orbital radii, electron velocities, and quantized energy transitions for hydrogenic atoms',
        'Explain spectroscopic emission series using the Rydberg formula',
        'Assign four quantum numbers and construct ground-state electronic configurations for all elements'
      ],
      coreFormulas: [
        { label: 'Planck’s Energy Equation', formula: 'E = h\\nu = \\frac{hc}{\\lambda}', explanation: 'Relates photon energy to frequency $\\nu$ and wavelength $\\lambda$ using Planck’s constant $h$.' },
        { label: 'Rydberg Spectral Formula', formula: '\\bar{\\nu} = \\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)', explanation: 'Predicts wavenumbers of spectral lines emitted during electronic relaxation in hydrogen.' },
        { label: 'de Broglie Wavelength', formula: '\\lambda = \\frac{h}{mv} = \\frac{h}{p}', explanation: 'Calculates the matter wave wavelength associated with a particle of mass $m$ and velocity $v$.' }
      ],
      realWorldApplications: [
        'Astrophysical Spectroscopy: Determining elemental composition of distant stars and galaxies',
        'Medical MRI & PET Imaging: Nuclear magnetic resonance and radioactive isotope tracing',
        'Semiconductor Design: Bandgap tuning and quantum well engineering in laser diodes',
        'Fluorescence Microscopy: High-resolution cellular visualization using fluorophores'
      ],
      keyTheorems: [
        { title: 'Pauli Exclusion Principle', statement: 'No two electrons in the same atom can have an identical set of all four quantum numbers.', importance: 'Determines the maximum electron capacity of orbitals and the structure of the periodic table.' }
      ]
    }
  },
  {
    id: 'chem11-ch3',
    class: 11,
    track: 'Chemistry',
    name: 'Theories of Covalent Bonding and Shapes of Molecules',
    description: 'Valence Shell Electron Pair Repulsion (VSEPR) geometry, Valence Bond Theory (VBT), orbital hybridization ($sp, sp^2, sp^3, sp^3d, sp^3d^2$), sigma vs. pi bonding, Molecular Orbital Theory (MOT), bond order, and dipole moments.',
    category: 'Chemical Bonding & Molecular Shapes',
    questionCount: 200,
    difficulty: 'Mixed',
    keyTopics: [
      'Lewis Structures & Formal Charge Calculations',
      'VSEPR Theory: Electron Pair Repulsion and Molecular Geometries (Linear, Trigonal, Tetrahedral, Bent, Pyramidal)',
      'Valence Bond Theory: Atomic Orbital Overlap ($\\sigma$ and $\\pi$ bonds)',
      'Hybridization Theory: $sp, sp^2, sp^3, sp^3d, sp^3d^2$ hybridized orbitals',
      'Molecular Orbital Theory (MOT): Bonding vs. Antibonding MOs ($O_2, N_2$ Paramagnetism)',
      'Bond Order, Bond Energy, Bond Length, and Dipole Moment ($\\mu = q \\times d$)'
    ],
    color: 'teal',
    icon: 'Sparkles',
    artTheme: 'chemistry',
    formulaHighlight: '\\text{Bond Order} = \\frac{N_b - N_a}{2}, \\quad \\mu = q \\times d, \\quad \\%\\text{Ionic Character} = 16|\\Delta EN| + 3.5(\\Delta EN)^2',
    overview: {
      summary: 'Chemical bonding theories elucidate how atoms combine to form stable molecules. Modern models connect quantum wave overlaps to 3D spatial geometries, dipole polarities, and macroscopic chemical reactivity.',
      historicalContext: 'Originated with G.N. Lewis (1916), developed through Linus Pauling’s hybridization (1931), Gillespie-Nyholm VSEPR (1957), and Mulliken-Hund Molecular Orbital Theory.',
      learningOutcomes: [
        'Predict 3D molecular shapes and bond angles using VSEPR electron-pair counting',
        'Describe orbital hybridization schemes and identify $\\sigma$ and $\\pi$ bonds in complex molecules',
        'Construct MO energy diagrams and calculate bond order and magnetic behavior for homonuclear diatomics',
        'Determine molecular polarity from vector summation of bond dipole moments'
      ],
      coreFormulas: [
        { label: 'Molecular Orbital Bond Order', formula: '\\text{Bond Order} = \\frac{N_b - N_a}{2}', explanation: 'Quantifies bond strength and stability from bonding ($N_b$) and antibonding ($N_a$) electron counts.' },
        { label: 'Dipole Moment', formula: '\\mu = q \\times d', explanation: 'Product of magnitude of separated partial charge $q$ and bond distance $d$ in Debye units.' },
        { label: 'Steric Number (VSEPR)', formula: 'SN = (\\text{Bond Pairs}) + (\\text{Lone Pairs})', explanation: 'Determines the basic electron-pair geometry and hybridization state of the central atom.' }
      ],
      realWorldApplications: [
        'Drug-Receptor Design: Lock-and-key steric fitting based on precise molecular conformations',
        'Liquid Crystal Displays (LCDs): Electric field alignment of polar anisotropic organic molecules',
        'Polymer Synthesis: Stereo-specific catalytic polymerization yielding high-strength plastics',
        'Catalysis: Transition metal coordinate bond activation of industrial substrates'
      ],
      keyTheorems: [
        { title: 'VSEPR Postulate', statement: 'Electron pairs in the valence shell of a central atom repel one another and adopt spatial arrangements that minimize electrostatic repulsion.', importance: 'Provides intuitive, accurate predictions of molecular geometries.' }
      ]
    }
  },
  {
    id: 'chem11-ch4',
    class: 11,
    track: 'Chemistry',
    name: 'State of Matter I: Gases',
    description: 'Gas laws (Boyle’s, Charles’s, Avogadro’s, Dalton’s Law of Partial Pressures, Graham’s Law of Diffusion), Ideal Gas Equation ($PV = nRT$), Kinetic Molecular Theory (KMT), molecular speeds, real gas non-ideality, Van der Waals equation, and liquefaction of gases.',
    category: 'States of Matter',
    questionCount: 200,
    difficulty: 'Mixed',
    keyTopics: [
      'Gas Laws: Boyle ($P_1V_1 = P_2V_2$), Charles ($\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$), Avogadro',
      'Ideal Gas Equation ($PV = nRT$) and Gas Constant ($R = 0.0821\\text{ atm}\\cdot\\text{L}/(\\text{mol}\\cdot\\text{K})$)',
      'Dalton’s Law of Partial Pressures ($P_{\\text{total}} = \\sum P_i$) and Mole Fraction ($P_i = X_i P_{\\text{total}}$)',
      'Graham’s Law of Gaseous Diffusion and Effusion ($\\frac{r_1}{r_2} = \\sqrt{\\frac{M_2}{M_1}}$)',
      'Kinetic Molecular Theory Postulates and Kinetic Equation ($PV = \\frac{1}{3}mNc^2$)',
      'Molecular Velocities: Root Mean Square ($v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}$), Average, Most Probable',
      'Non-Ideal Behavior, Compressibility Factor ($Z = \\frac{PV}{nRT}$), and Van der Waals Equation'
    ],
    color: 'sky',
    icon: 'Flame',
    artTheme: 'chemistry',
    formulaHighlight: 'PV = nRT, \\quad \\left(P + \\frac{an^2}{V^2}\\right)(V - nb) = nRT, \\quad v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}',
    overview: {
      summary: 'Gases exhibit continuous random molecular motion governed by macroscopic thermodynamic state variables. Kinetic Molecular Theory models microscopic particle collisions, explaining ideal behavior and real gas non-ideality.',
      historicalContext: 'Formulated through experimental gas laws by Robert Boyle (1662), Jacques Charles (1787), John Dalton (1801), and unified by Johannes Diderik van der Waals (1873).',
      learningOutcomes: [
        'Apply combined gas laws and ideal gas equations across varying temperature, pressure, and volume states',
        'Calculate partial pressures, gaseous diffusion rates, and molecular weights of unknown gases',
        'Derive kinetic gas equations and compute root mean square velocity distributions',
        'Analyze non-ideal gas deviations and apply Van der Waals correction parameters ($a$ and $b$)'
      ],
      coreFormulas: [
        { label: 'Ideal Gas Law', formula: 'PV = nRT = \\frac{m}{M}RT', explanation: 'Universal state equation relating pressure, volume, temperature, and moles of ideal gas.' },
        { label: 'Van der Waals Equation', formula: '\\left(P + \\frac{an^2}{V^2}\\right)(V - nb) = nRT', explanation: 'Corrects ideal gas law for intermolecular attractive forces ($a$) and finite molecular volume ($b$).' },
        { label: 'Root Mean Square Speed', formula: 'v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}} = \\sqrt{\\frac{3P}{\\rho}}', explanation: 'Direct measure of the average kinetic energy and thermal speed of gas molecules.' }
      ],
      realWorldApplications: [
        'Aerospace & Scuba Diving: Compressed gas breathing mixtures and decompression calculations',
        'Cryogenics: Industrial liquefaction of air into liquid nitrogen and oxygen via Joule-Thomson expansion',
        'Uranium Enrichment: Isotopic separation of $^{235}UF_6$ and $^{238}UF_6$ via gaseous effusion',
        'Atmospheric Science: Barometric pressure modeling and greenhouse gas diffusion dynamics'
      ],
      keyTheorems: [
        { title: 'Graham’s Law of Diffusion', statement: 'Under identical conditions of temperature and pressure, the rate of diffusion of a gas is inversely proportional to the square root of its molar mass or density.', importance: 'Enables precise isotopic separation and molecular weight determinations.' }
      ]
    }
  },
  {
    id: 'chem11-ch5',
    class: 11,
    track: 'Chemistry',
    name: 'State of Matter II: Liquids',
    description: 'Intermolecular forces (dipole-dipole, hydrogen bonding, London dispersion forces), physical properties of liquids (evaporation, dynamic equilibrium, vapor pressure, boiling point), surface tension ($\\gamma$), viscosity ($\\eta$), and liquid crystals.',
    category: 'States of Matter',
    questionCount: 200,
    difficulty: 'Mixed',
    keyTopics: [
      'Types of Intermolecular Forces: Dipole-Dipole, Ion-Dipole, London Dispersion, Hydrogen Bonding',
      'Evaporation Kinetics, Dynamic Vapor-Liquid Equilibrium, and Factors Affecting Vapor Pressure',
      'Boiling Point, Molar Heat of Vaporization ($\\Delta H_{\\text{vap}}$), and Clausius-Clapeyron Relation',
      'Surface Tension: Cohesive Forces, Capillary Action, and Meniscus Curvature',
      'Viscosity: Fluid Shear Stress, Poiseuille Flow, and Temperature Dependence',
      'Liquid Crystals: Mesomorphic State, Nematic & Smectic Phases, and Optical Applications'
    ],
    color: 'blue',
    icon: 'Droplets',
    artTheme: 'chemistry',
    formulaHighlight: '\\ln\\left(\\frac{P_2}{P_1}\\right) = -\\frac{\\Delta H_{\\text{vap}}}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right), \\quad \\gamma = \\frac{F}{2L}, \\quad \\eta = \\frac{F \\cdot d}{A \\cdot v}',
    overview: {
      summary: 'The liquid state bridges condensed solids and expansive gases, characterized by definite volume and fluid mobility. Intermolecular forces like hydrogen bonding govern thermal transitions, capillary action, and dynamic vapor equilibrium.',
      historicalContext: 'Thermodynamics of liquid phase transitions established by Rudolf Clausius and Émile Clapeyron in the 19th century; liquid crystals discovered by Friedrich Reinitzer in 1888.',
      learningOutcomes: [
        'Classify intermolecular forces and correlate their magnitudes with boiling points and vapor pressures',
        'Apply the Clausius-Clapeyron equation to calculate heats of vaporization and vapor pressures',
        'Explain fluid phenomena including surface tension, meniscus formation, and capillary rise',
        'Describe the structural characteristics and technological applications of liquid crystal phases'
      ],
      coreFormulas: [
        { label: 'Clausius-Clapeyron Equation', formula: '\\ln\\left(\\frac{P_2}{P_1}\\right) = -\\frac{\\Delta H_{\\text{vap}}}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)', explanation: 'Relates liquid vapor pressure changes to absolute temperature and enthalpy of vaporization.' },
        { label: 'Surface Tension', formula: '\\gamma = \\frac{F}{2L} = \\frac{\\Delta W}{\\Delta A}', explanation: 'Force per unit length or work required to increase the liquid surface area by one unit.' },
        { label: 'Dynamic Viscosity', formula: '\\eta = \\frac{F \\cdot \\Delta x}{A \\cdot \\Delta v}', explanation: 'Ratio of shearing stress to velocity gradient in laminar fluid motion.' }
      ],
      realWorldApplications: [
        'Flat-Panel Displays: Twisted nematic liquid crystal light modulation in high-definition screens',
        'Lubrication Engineering: Viscosity index modifiers in high-performance automotive engine oils',
        'Detergent Technology: Surfactant reduction of water surface tension for stain emulsification',
        'Biological Systems: Capillary blood flow and pulmonary surfactant maintenance in alveoli'
      ],
      keyTheorems: [
        { title: 'Hydrogen Bonding Criterion', statement: 'A strong directional dipole attraction occurring between a hydrogen atom covalently bonded to a highly electronegative atom (N, O, F) and a lone pair on another electronegative atom.', importance: 'Explains water’s high heat capacity, surface tension, and DNA double-helix stability.' }
      ]
    }
  },
  {
    id: 'chem11-ch6',
    class: 11,
    track: 'Chemistry',
    name: 'State of Matter III: Solids',
    description: 'Crystalline vs. amorphous solids, unit cells, 7 crystal systems and 14 Bravais lattices, crystal lattice parameters, types of crystalline solids (ionic, covalent network, molecular, metallic), lattice energy, Born-Haber cycle, Bragg’s Law ($n\\lambda = 2d\\sin\\theta$), and crystal defects.',
    category: 'States of Matter',
    questionCount: 200,
    difficulty: 'Mixed',
    keyTopics: [
      'Crystalline vs. Amorphous Solids and Anisotropy vs. Isotropy',
      'Unit Cell Geometry, Lattice Points, and Coordination Numbers (SC, BCC, FCC)',
      '7 Crystal Systems (Cubic, Tetragonal, Orthorhombic, Hexagonal, Trigonal, Monoclinic, Triclinic)',
      'Classification of Solids: Ionic, Covalent Network, Molecular, and Metallic',
      'Lattice Energy and Born-Haber Thermochemical Cycle',
      'X-ray Crystallography and Bragg’s Equation ($n\\lambda = 2d\\sin\\theta$)',
      'Crystal Imperfections: Point Defects (Schottky, Frenkel) and Non-Stoichiometric Defects'
    ],
    color: 'indigo',
    icon: 'Layers',
    artTheme: 'chemistry',
    formulaHighlight: 'n\\lambda = 2d\\sin\\theta, \\quad \\rho = \\frac{Z \\cdot M}{N_A \\cdot a^3}, \\quad \\text{Packing Fraction} = \\frac{V_{\\text{atoms}}}{V_{\\text{unit cell}}}',
    overview: {
      summary: 'Solids possess definite shape and volume due to tightly packed constituents held by robust interatomic or intermolecular forces. X-ray diffraction reveals the periodic symmetry of unit cells and crystal lattice systems.',
      historicalContext: 'X-ray diffraction pioneered by Max von Laue (1912) and William Henry Bragg & William Lawrence Bragg (1913), establishing structural crystallography.',
      learningOutcomes: [
        'Distinguish between isotropic amorphous materials and anisotropic crystalline lattices',
        'Calculate unit cell densities, lattice parameters, and atomic packing efficiencies (SC, BCC, FCC)',
        'Apply Bragg’s Law to determine interplanar crystal spacings from X-ray diffraction angles',
        'Construct Born-Haber cycles to determine ionic lattice energies and evaluate crystal defects'
      ],
      coreFormulas: [
        { label: 'Bragg’s Law', formula: 'n\\lambda = 2d\\sin\\theta', explanation: 'Condition for constructive interference of X-rays scattered by parallel crystal lattice planes.' },
        { label: 'Unit Cell Density', formula: '\\rho = \\frac{Z \\cdot M}{N_A \\cdot a^3}', explanation: 'Calculates theoretical density from unit cell mass, effective atom count $Z$, and volume $a^3$.' },
        { label: 'FCC / HCP Packing Efficiency', formula: '\\text{Efficiency} = \\frac{Z \\times \\frac{4}{3}\\pi r^3}{a^3} = 74\\%', explanation: 'Maximum volume percentage occupied by hard spheres in close-packed lattices.' }
      ],
      realWorldApplications: [
        'Semiconductor Fabrication: Monocrystalline silicon wafer pulling for integrated microprocessor chips',
        'Structural Material Science: Work hardening and dislocation pinning in titanium aerospace alloys',
        'Protein Crystallography: Atomic-resolution structural elucidation of viral enzymes and antibodies',
        'Battery Solid Electrolytes: Fast lithium-ion transport through defect-engineered perovskite ceramics'
      ],
      keyTheorems: [
        { title: 'Bragg’s Diffraction Condition', statement: 'Constructive interference occurs when the path difference between reflected waves from adjacent crystal planes equals an integral number of wavelengths.', importance: 'Forms the universal foundation of structural crystallography and mineral identification.' }
      ]
    }
  },
  {
    id: 'chem11-ch7',
    class: 11,
    track: 'Chemistry',
    name: 'Chemical Equilibrium',
    description: 'Reversible reactions, dynamic equilibrium, Law of Mass Action, equilibrium constants ($K_c, K_p, K_x$), relationship $K_p = K_c(RT)^{\\Delta n}$, reaction quotient ($Q$), Le Chatelier’s Principle (effects of concentration, temperature, pressure, volume, catalysts), and industrial synthesis.',
    category: 'Chemical Equilibrium & Kinetics',
    questionCount: 200,
    difficulty: 'Mixed',
    keyTopics: [
      'Reversible vs. Irreversible Reactions and Dynamic Equilibrium Characteristics',
      'Law of Mass Action and Formulation of Equilibrium Constant Expressions ($K_c$ and $K_p$)',
      'Mathematical Relation: $K_p = K_c(RT)^{\\Delta n_g}$',
      'Reaction Quotient ($Q_c$) and Predicting Direction of Reaction Shift ($Q < K, Q = K, Q > K$)',
      'Le Chatelier’s Principle: Shifts with Concentration, Pressure, Volume, and Temperature',
      'Thermodynamic Equilibrium Link: $\\Delta G^\\circ = -RT \\ln K$',
      'Industrial Applications: Haber-Bosch Ammonia Synthesis and Contact Process ($SO_3$)'
    ],
    color: 'violet',
    icon: 'Scale',
    artTheme: 'chemistry',
    formulaHighlight: 'K_p = K_c(RT)^{\\Delta n_g}, \\quad \\Delta G^\\circ = -RT \\ln K_p, \\quad K_c = \\frac{[C]^c[D]^d}{[A]^a[B]^b}',
    overview: {
      summary: 'Chemical Equilibrium describes the dynamic state where the forward and reverse reaction rates are exactly equal, keeping reactant and product concentrations constant over time. Le Chatelier’s Principle governs how equilibrium systems respond to external perturbations.',
      historicalContext: 'Formulated by Cato Maximilian Guldberg and Peter Waage (1864) with the Law of Mass Action, and generalized by Henri Louis Le Chatelier in 1884.',
      learningOutcomes: [
        'Write equilibrium constant expressions in terms of concentrations ($K_c$) and partial pressures ($K_p$)',
        'Convert between $K_c$ and $K_p$ using the ideal gas constant and molar reaction stoichiometry',
        'Compare reaction quotient $Q$ with $K$ to predict the spontaneous direction of reaction shift',
        'Apply Le Chatelier’s principle to optimize industrial chemical yields under thermodynamic constraints'
      ],
      coreFormulas: [
        { label: 'Equilibrium Constant Expression', formula: 'K_c = \\frac{[C]^c[D]^d}{[A]^a[B]^b}', explanation: 'Ratio of product concentrations to reactant concentrations raised to stoichiometric coefficients.' },
        { label: 'Kp and Kc Relationship', formula: 'K_p = K_c(RT)^{\\Delta n_g}', explanation: 'Relates pressure-based and concentration-based equilibrium constants where $\\Delta n_g$ is gas mole change.' },
        { label: 'Standard Free Energy Link', formula: '\\Delta G^\\circ = -RT \\ln K_p', explanation: 'Connects thermodynamic spontaneity with the magnitude of the equilibrium constant.' }
      ],
      realWorldApplications: [
        'Industrial Haber-Bosch Process: High-pressure ($200\\text{ atm}$), moderate-temp ($450^\\circ\\text{C}$) ammonia production',
        'Blood Oxygen Transport: Reversible binding of $O_2$ to hemoglobin in pulmonary and systemic capillaries',
        'Environmental Ocean Carbonate Cycle: Carbon dioxide atmospheric dissolution and coral calcification',
        'Sulfuric Acid Contact Process: Catalytic oxidation of $SO_2$ to $SO_3$ over vanadium pentoxide ($V_2O_5$)'
      ],
      keyTheorems: [
        { title: 'Le Chatelier’s Principle', statement: 'If a chemical system at equilibrium experiences a change in concentration, temperature, volume, or total pressure, the equilibrium position shifts in a direction that counteracts the applied stress.', importance: 'Enables chemical engineers to maximize product yield in reversible reaction systems.' }
      ]
    }
  },
  {
    id: 'chem11-ch8',
    class: 11,
    track: 'Chemistry',
    name: 'Acids, Bases and Salts',
    description: 'Acid-base theories (Arrhenius, Brønsted-Lowry, Lewis), auto-ionization of water and ionic product ($K_w = 1.0 \\times 10^{-14}$), pH and pOH scale, ionization constants ($K_a, K_b$), Henderson-Hasselbalch equation for buffer solutions, solubility product ($K_{sp}$), and common ion effect.',
    category: 'Acids, Bases & Solutions',
    questionCount: 50,
    difficulty: 'Mixed',
    keyTopics: [
      'Acid-Base Theories: Arrhenius ($H^+/OH^-$), Brønsted-Lowry (Proton Donor/Acceptor), Lewis (Electron Pair)',
      'Auto-Ionization of Water and Ion Product Constant ($K_w = [H^+][OH^-] = 1.0 \\times 10^{-14}$ at $25^\\circ\\text{C}$)',
      'pH and pOH Calculations ($\\text{pH} + \\text{pOH} = 14$)',
      'Ionization Constants of Weak Acids ($K_a$) and Weak Bases ($K_b$), Degree of Dissociation ($\\alpha$)',
      'Buffer Solutions: Acidic/Basic Buffers, Buffer Capacity, Henderson-Hasselbalch Equation',
      'Salt Hydrolysis: Neutral, Acidic, and Basic Salt Solutions',
      'Solubility Product Constant ($K_{sp}$) and Precipitation Condition ($Q_{sp} > K_{sp}$)'
    ],
    color: 'rose',
    icon: 'Beaker',
    artTheme: 'chemistry',
    formulaHighlight: '\\text{pH} = -\\log[H^+], \\quad \\text{pH} = \\text{p}K_a + \\log\\left(\\frac{[\\text{Salt}]}{[\\text{Acid}]}\\right), \\quad K_{sp} = [M^{m+}]^n[X^{n-}]^m',
    overview: {
      summary: 'Acids, bases, and salts play pivotal roles in aqueous solution equilibria. From conjugate acid-base pairs and logarithmic pH scales to buffer mechanisms and solubility product limits, this chapter quantifies proton and electron transfer reactions.',
      historicalContext: 'Developed by Svante Arrhenius (1887), Johannes Brønsted and Thomas Lowry (1923), G.N. Lewis (1923), and Søren Sørensen (who invented the pH scale in 1909).',
      learningOutcomes: [
        'Identify conjugate acid-base pairs and Lewis electron donor/acceptor adducts',
        'Calculate pH, pOH, hydronium concentration, and hydroxide concentration for strong and weak electrolytes',
        'Derive and apply the Henderson-Hasselbalch equation to formulate stable buffer solutions',
        'Predict precipitate formation and evaluate common ion suppression using solubility products ($K_{sp}$)'
      ],
      coreFormulas: [
        { label: 'pH Definition', formula: '\\text{pH} = -\\log_{10}[H_3O^+], \\quad \\text{pH} + \\text{pOH} = 14', explanation: 'Logarithmic quantification of hydrogen ion activity in aqueous media at $25^\\circ\\text{C}$.' },
        { label: 'Henderson-Hasselbalch Equation', formula: '\\text{pH} = \\text{p}K_a + \\log_{10}\\left(\\frac{[A^-]}{[HA]}\\right)', explanation: 'Determines the pH of a buffer solution composed of a weak acid and its conjugate base.' },
        { label: 'Solubility Product Constant', formula: 'K_{sp} = [A^{y+}]^x [B^{x-}]^y', explanation: 'Equilibrium constant for the dissolution of a sparingly soluble salt $A_x B_y$.' }
      ],
      realWorldApplications: [
        'Physiological Blood Buffering: Carbonic acid-bicarbonate ($H_2CO_3/HCO_3^-$) maintaining blood pH $7.35–7.45$',
        'Agricultural Soil Management: Lime ($CaCO_3$) addition to neutralize acidic arable soils',
        'Pharmaceutical Formulations: Stabilizing injectable active compounds against degradation',
        'Industrial Wastewater Treatment: Controlled chemical precipitation of toxic heavy metal ions'
      ],
      keyTheorems: [
        { title: 'Common Ion Effect', statement: 'The suppression of the degree of dissociation of a weak electrolyte or the solubility of a sparingly soluble salt upon adding a strong electrolyte sharing a common ion.', importance: 'Essential for selective qualitative inorganic salt analysis and analytical precipitation.' }
      ]
    }
  },
  {
    id: 'chem11-ch9',
    class: 11,
    track: 'Chemistry',
    name: 'Chemical Kinetics',
    description: 'Rates of chemical reactions, rate laws and rate constant ($k$), reaction order (zero, 1st, 2nd, fractional) and molecularity, integrated rate equations, half-life periods ($t_{1/2}$), collision theory, activation energy ($E_a$), Arrhenius equation, and catalysis.',
    category: 'Chemical Equilibrium & Kinetics',
    questionCount: 50,
    difficulty: 'Mixed',
    keyTopics: [
      'Reaction Rates: Average vs. Instantaneous Rates ($r = -\\frac{1}{a}\\frac{d[A]}{dt} = \\frac{1}{b}\\frac{d[B]}{dt}$)',
      'Rate Law, Specific Rate Constant ($k$), and Reaction Order vs. Molecularity',
      'Zero-Order and First-Order Integrated Rate Laws ($[A] = [A]_0 e^{-kt}$)',
      'Half-Life Period of First-Order Reactions ($t_{1/2} = \\frac{0.693}{k}$)',
      'Collision Theory, Effective Collisions, and Transition State Theory',
      'Activation Energy ($E_a$) and Arrhenius Equation ($k = A e^{-E_a/RT}$)',
      'Catalysis: Homogeneous vs. Heterogeneous Catalysis and Enzyme Kinetics'
    ],
    color: 'fuchsia',
    icon: 'Activity',
    artTheme: 'chemistry',
    formulaHighlight: 'k = A e^{-\\frac{E_a}{RT}}, \\quad \\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right), \\quad t_{1/2} = \\frac{\\ln 2}{k}',
    overview: {
      summary: 'Chemical Kinetics investigates the speed of chemical reactions and their step-by-step molecular mechanisms. It quantifies how concentration, temperature, activation energy barriers, and catalytic surfaces influence chemical dynamics.',
      historicalContext: 'Pioneered by Wilhelmy (1850), Ludwig Boltzmann, and Svante Arrhenius (1889) who formulated the temperature dependence of reaction rates.',
      learningOutcomes: [
        'Determine reaction orders and rate laws from initial rate experimental datasets',
        'Apply integrated first-order and zero-order rate equations to calculate reactant concentrations over time',
        'Calculate half-life periods for radioactive decay and first-order chemical decompositions',
        'Compute activation energies and pre-exponential frequency factors using the Arrhenius equation'
      ],
      coreFormulas: [
        { label: 'Arrhenius Equation', formula: 'k = A e^{-\\frac{E_a}{RT}} \\implies \\ln k = \\ln A - \\frac{E_a}{RT}', explanation: 'Relates reaction rate constant $k$ exponentially to temperature $T$ and activation energy $E_a$.' },
        { label: 'First-Order Integrated Rate Law', formula: '\\ln\\left(\\frac{[A]_0}{[A]_t}\\right) = kt \\implies [A]_t = [A]_0 e^{-kt}', explanation: 'Models exponential concentration decay over elapsed reaction time $t$.' },
        { label: 'First-Order Half-Life', formula: 't_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}', explanation: 'Time required for half the reactant to decompose, strictly independent of initial concentration.' }
      ],
      realWorldApplications: [
        'Radiocarbon Dating: Tracking $^{14}C$ half-life ($5,730\\text{ years}$) to date ancient archaeological artifacts',
        'Pharmaceutical Pharmacokinetics: Drug shelf-life determination and physiological clearance rates',
        'Automotive Catalytic Converters: Platinum-rhodium surface catalysis converting $CO$ and $NO_x$ to $CO_2$ and $N_2$',
        'Food Preservation: Refrigeration slowing down oxidative spoilage kinetics via Arrhenius deceleration'
      ],
      keyTheorems: [
        { title: 'Collision Theory of Reaction Rates', statement: 'For a chemical reaction to occur, reactant molecules must collide with kinetic energy exceeding the activation energy ($E \\ge E_a$) and with proper geometric orientation.', importance: 'Provides a microscopic physical explanation for macroscopic reaction rates.' }
      ]
    }
  },
  {
    id: 'chem11-ch10',
    class: 11,
    track: 'Chemistry',
    name: 'Solutions',
    description: 'Types of solutions, concentration units (molarity $M$, molality $m$, mole fraction $X$, ppm), Raoult’s Law for ideal and non-ideal solutions (azeotropic mixtures), colligative properties (boiling point elevation $\\Delta T_b$, freezing point depression $\\Delta T_f$, osmotic pressure $\\pi$), and Van ’t Hoff factor ($i$).',
    category: 'Acids, Bases & Solutions',
    questionCount: 50,
    difficulty: 'Mixed',
    keyTopics: [
      'Concentration Expressions: Molarity ($M$), Molality ($m$), Mole Fraction ($X$), Mass Percentage, ppm',
      'Thermodynamics of Solution Formation: $\\Delta H_{\\text{soln}}$ and Enthalpy of Hydration',
      'Raoult’s Law: Ideal Solutions vs. Positive and Negative Deviations',
      'Azeotropes: Maximum and Minimum Boiling Azeotropic Mixtures',
      'Colligative Properties: Relative Lowering of Vapor Pressure ($\\frac{\\Delta P}{P^\\circ} = X_2$)',
      'Elevation of Boiling Point ($\\Delta T_b = i K_b m$) and Depression of Freezing Point ($\\Delta T_f = i K_f m$)',
      'Osmotic Pressure ($\\pi = iCRT$) and Van ’t Hoff Factor ($i$) for Electrolytic Dissociation/Association'
    ],
    color: 'emerald',
    icon: 'FlaskConical',
    artTheme: 'chemistry',
    formulaHighlight: '\\Delta T_b = i K_b m, \\quad \\Delta T_f = i K_f m, \\quad \\pi = iCRT, \\quad \\frac{P^\\circ - P}{P^\\circ} = \\frac{n_2}{n_1 + n_2}',
    overview: {
      summary: 'Solutions are homogeneous mixtures whose physical characteristics depend on concentration and solute-solvent interactions. Colligative properties depend solely on the ratio of solute particles to solvent molecules, enabling precise molar mass determination.',
      historicalContext: 'Formulated by François-Marie Raoult (1887) and Jacobus Henricus van ’t Hoff (1886), who was awarded the first Nobel Prize in Chemistry (1901).',
      learningOutcomes: [
        'Interconvert between molarity, molality, mole fraction, and parts per million (ppm)',
        'Evaluate vapor pressure lowering in binary liquid systems using Raoult’s Law',
        'Calculate molar masses of unknown non-volatile solutes using boiling point elevation and freezing point depression',
        'Determine osmotic pressure and compute the Van ’t Hoff factor for ionizing electrolytes'
      ],
      coreFormulas: [
        { label: 'Raoult’s Law for Volatile Binary Liquids', formula: 'P_{\\text{total}} = P_A^\\circ X_A + P_B^\\circ X_B', explanation: 'Total vapor pressure is the sum of partial vapor pressures weighted by liquid mole fractions.' },
        { label: 'Boiling Point Elevation & Freezing Depression', formula: '\\Delta T_b = i K_b m, \\quad \\Delta T_f = i K_f m', explanation: 'Temperature shifts proportional to molality $m$, ebullioscopic/cryoscopic constants, and ion factor $i$.' },
        { label: 'Osmotic Pressure', formula: '\\pi = iCRT = i\\left(\\frac{n}{V}\\right)RT', explanation: 'Pressure required to halt osmotic solvent influx across a semipermeable membrane.' }
      ],
      realWorldApplications: [
        'Desalination: Industrial reverse osmosis purifying seawater into municipal drinking water',
        'Automotive Antifreeze: Ethylene glycol-water formulations preventing winter radiator freezing and summer boil-over',
        'Intravenous Fluids: Isotonic $0.9\\%\\text{ NaCl}$ saline solutions matching erythrocyte osmotic pressure',
        'De-icing Highways: Calcium chloride ($CaCl_2$) application lowering ice freezing points'
      ],
      keyTheorems: [
        { title: 'Raoult’s Law', statement: 'The partial vapor pressure of each volatile component in an ideal solution equals the vapor pressure of the pure component multiplied by its mole fraction in the liquid mixture.', importance: 'Forms the physical foundation for fractional distillation of multi-component petroleum fractions.' }
      ]
    }
  },
  {
    id: 'chem11-ch11',
    class: 11,
    track: 'Chemistry',
    name: 'ThermoChemistry',
    description: 'Thermodynamic systems, state functions, First Law of Thermodynamics ($\\Delta U = q + w$), enthalpy ($\\Delta H$), standard enthalpy changes (formation, combustion, neutralization), calorimetry (bomb calorimeter), Hess’s Law of Constant Heat Summation, and bond enthalpies.',
    category: 'Thermochemistry & Electrochemistry',
    questionCount: 50,
    difficulty: 'Mixed',
    keyTopics: [
      'Thermodynamic Systems (Open, Closed, Isolated), Surroundings, and State Functions',
      'First Law of Thermodynamics: Internal Energy Change ($\\Delta U = q + w$)',
      'Enthalpy ($\\Delta H = \\Delta U + P\\Delta V$) and Relation $\\Delta H = \\Delta U + \\Delta n_g RT$',
      'Standard Enthalpies: Formation ($\\Delta H_f^\\circ$), Combustion ($\\Delta H_c^\\circ$), Neutralization ($\\Delta H_n^\\circ$)',
      'Calorimetric Methods: Bomb Calorimeter and Constant-Pressure Coffee-Cup Calorimetry',
      'Hess’s Law of Constant Heat Summation and Thermochemical Energy Cycles',
      'Bond Enthalpies and Estimating Reaction Enthalpies ($\\Delta H_{\\text{rxn}} = \\sum BE_{\\text{bonds broken}} - \\sum BE_{\\text{bonds formed}}$)'
    ],
    color: 'amber',
    icon: 'Thermometer',
    artTheme: 'chemistry',
    formulaHighlight: '\\Delta H = \\Delta U + \\Delta n_g RT, \\quad \\Delta H_{\\text{rxn}}^\\circ = \\sum \\Delta H_f^\\circ(\\text{products}) - \\sum \\Delta H_f^\\circ(\\text{reactants})',
    overview: {
      summary: 'Thermochemistry investigates the heat energy exchanges accompanying chemical reactions and physical phase transformations. By applying the First Law of Thermodynamics and Hess’s Law, it enables precise calculation of enthalpy changes without direct experimental measurement.',
      historicalContext: 'Pioneered by Germain Hess (1840) with his law of constant heat summation, and Julius Thomsen & Marcellin Berthelot in thermochemical calorimetry.',
      learningOutcomes: [
        'Differentiate between system, surroundings, heat, work, internal energy, and enthalpy state functions',
        'Calculate heat capacities and reaction enthalpies from bomb calorimeter experimental data',
        'Apply Hess’s Law to construct thermochemical cycles for indirect enthalpy calculations',
        'Estimate standard enthalpies of reaction using average covalent bond dissociation enthalpies'
      ],
      coreFormulas: [
        { label: 'First Law of Thermodynamics', formula: '\\Delta U = q + w = q - P\\Delta V', explanation: 'Energy conservation relating internal energy change to heat added $q$ and pressure-volume work $w$.' },
        { label: 'Hess’s Law of Heat Summation', formula: '\\Delta H_{\\text{net}} = \\Delta H_1 + \\Delta H_2 + \\dots + \\Delta H_n', explanation: 'Total enthalpy change of a reaction is identical regardless of the reaction pathway.' },
        { label: 'Enthalpy from Standard Formation', formula: '\\Delta H_{\\text{rxn}}^\\circ = \\sum n\\Delta H_f^\\circ(\\text{products}) - \\sum m\\Delta H_f^\\circ(\\text{reactants})', explanation: 'Standard enthalpy change calculated from tabulated elemental heats of formation.' }
      ],
      realWorldApplications: [
        'Rocket Propulsion: High-enthalpy combustion optimization of liquid hydrogen and liquid oxygen fuels',
        'Food Nutritional Science: Bomb calorimetry measuring dietary caloric content (kcal/kJ)',
        'Industrial Metallurgy: Blast furnace thermal energy balances during iron ore carbothermic reduction',
        'Instant Cold/Hot Packs: Exothermic dissolution of $CaCl_2$ and endothermic dissolution of $NH_4NO_3$'
      ],
      keyTheorems: [
        { title: 'Hess’s Law of Constant Heat Summation', statement: 'The overall enthalpy change in a chemical reaction depends solely on the initial and final states and is independent of the pathway or number of intermediate steps.', importance: 'Allows determination of enthalpies of reactions that cannot be measured directly in the laboratory.' }
      ]
    }
  },
  {
    id: 'chem11-ch12',
    class: 11,
    track: 'Chemistry',
    name: 'ElectroChemistry',
    description: 'Oxidation-reduction (redox) reactions and oxidation states, balancing redox equations (ion-electron and oxidation number methods), electrolytic conduction, Faraday’s Laws of Electrolysis, galvanic/voltaic cells, standard electrode potentials ($E^\\circ$), Standard Hydrogen Electrode (SHE), electrochemical series, Nernst equation, and batteries.',
    category: 'Thermochemistry & Electrochemistry',
    questionCount: 50,
    difficulty: 'Mixed',
    keyTopics: [
      'Oxidation Numbers, Redox Balancing (Ion-Electron & Oxidation State Methods in Acidic/Basic Media)',
      'Electrolytic vs. Galvanic (Voltaic) Cells and Daniell Cell Architecture',
      'Faraday’s Laws of Electrolysis: First Law ($m = ZIt$) and Second Law ($\\frac{m_1}{m_2} = \\frac{E_1}{E_2}$)',
      'Standard Hydrogen Electrode (SHE, $E^\\circ = 0.00\\text{ V}$) and Reference Electrodes',
      'Electrochemical Series: Relative Oxidizing/Reducing Strengths and Reaction Spontaneity',
      'Standard Cell Potential: $E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$',
      'Nernst Equation: $E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$ at $298\\text{ K}$',
      'Commercial Batteries: Lead-Acid Storage, Alkaline, Lithium-Ion, and Hydrogen Fuel Cells'
    ],
    color: 'purple',
    icon: 'Zap',
    artTheme: 'chemistry',
    formulaHighlight: 'E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log Q, \\quad \\Delta G^\\circ = -nFE^\\circ_{\\text{cell}}, \\quad m = \\frac{M \\cdot I \\cdot t}{n \\cdot F}',
    overview: {
      summary: 'Electrochemistry explores the interconversion of chemical energy and electrical energy. By analyzing electron transfer in redox half-reactions, electrochemical series, and the Nernst equation, it underpins modern energy storage, batteries, and electroplating.',
      historicalContext: 'Pioneered by Luigi Galvani, Alessandro Volta (1800), Michael Faraday (1834 with laws of electrolysis), and Walther Nernst (1889).',
      learningOutcomes: [
        'Assign oxidation numbers and balance complex redox reactions in acidic and alkaline solutions',
        'Apply Faraday’s laws of electrolysis to calculate electrodeposited metal mass, current, and time',
        'Construct galvanic cell notation and calculate standard cell electromotive force ($E^\\circ_{\\text{cell}}$)',
        'Use the Nernst equation to determine cell potentials under non-standard ion concentrations'
      ],
      coreFormulas: [
        { label: 'Nernst Equation (298 K)', formula: 'E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10}\\left(\\frac{[\\text{Products}]^p}{[\\text{Reactants}]^r}\\right)', explanation: 'Calculates non-standard electrochemical cell potential from reaction quotient $Q$ and electron count $n$.' },
        { label: 'Standard Cell Potential & Gibbs Energy', formula: '\\Delta G^\\circ = -nFE^\\circ_{\\text{cell}}', explanation: 'Relates electrical work and cell potential to thermodynamic free energy ($F = 96,485\\text{ C/mol}$).' },
        { label: 'Faraday’s Law of Electrolysis', formula: 'm = Z \\cdot I \\cdot t = \\frac{M \\cdot I \\cdot t}{n \\cdot F}', explanation: 'Mass $m$ of substance liberated at an electrode by current $I$ passing for duration $t$.' }
      ],
      realWorldApplications: [
        'Electric Vehicle Batteries: Lithium-ion intercalation chemistries ($LiCoO_2 / C_6$) powering modern transport',
        'Hydrogen Fuel Cells: Zero-emission catalytic conversion of $H_2$ and $O_2$ into electricity and pure water',
        'Industrial Electro-Refining: High-purity ($99.99\\%$) electrolytic copper extraction and zinc electroplating',
        'Cathodic Corrosion Protection: Sacrificial zinc anodes protecting steel ship hulls and subsea pipelines'
      ],
      keyTheorems: [
        { title: 'Nernst Relation', statement: 'The electromotive force of an electrochemical cell varies logarithmically with the ratio of activities of the oxidized and reduced chemical species.', importance: 'Fundamental for pH meters, ion-selective electrodes, and chemical battery design.' }
      ]
    }
  }
];
