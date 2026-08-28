import { Question } from '../types';
import { CHEM11_CH1_ADVANCED_PART1 } from './chem11_ch1_advanced_part1';
import { CHEM11_CH1_ADVANCED_PART2 } from './chem11_ch1_advanced_part2';
import { CHEM11_CH1_NORMAL_PART1 } from './chem11_ch1_normal_part1';
import { CHEM11_CH1_NORMAL_PART2 } from './chem11_ch1_normal_part2';
import { CHEM11_CH2_NORMAL_PART1 } from './chem11_ch2_normal_part1';
import { CHEM11_CH2_NORMAL_PART2 } from './chem11_ch2_normal_part2';
import { CHEM11_CH2_ADVANCED_PART1 } from './chem11_ch2_advanced_part1';
import { CHEM11_CH2_ADVANCED_PART2 } from './chem11_ch2_advanced_part2';
import { CHEM11_CH3_NORMAL_PART1 } from './chem11_ch3_normal_part1';
import { CHEM11_CH3_NORMAL_PART2 } from './chem11_ch3_normal_part2';
import { CHEM11_CH3_ADVANCED_PART1 } from './chem11_ch3_advanced_part1';
import { CHEM11_CH3_ADVANCED_PART2 } from './chem11_ch3_advanced_part2';
import { CHEM11_CH4_NORMAL_PART1 } from './chem11_ch4_normal_part1';
import { CHEM11_CH4_NORMAL_PART2 } from './chem11_ch4_normal_part2';
import { CHEM11_CH4_ADVANCED_PART1 } from './chem11_ch4_advanced_part1';
import { CHEM11_CH4_ADVANCED_PART2 } from './chem11_ch4_advanced_part2';
import { CHEM11_CH5_NORMAL_PART1 } from './chem11_ch5_normal_part1';
import { CHEM11_CH5_NORMAL_PART2 } from './chem11_ch5_normal_part2';
import { CHEM11_CH5_ADVANCED_PART1 } from './chem11_ch5_advanced_part1';
import { CHEM11_CH5_ADVANCED_PART2 } from './chem11_ch5_advanced_part2';
import { CHEM11_CH6_NORMAL_PART1 } from './chem11_ch6_normal_part1';
import { CHEM11_CH6_NORMAL_PART2 } from './chem11_ch6_normal_part2';
import { CHEM11_CH6_ADVANCED_PART1 } from './chem11_ch6_advanced_part1';
import { CHEM11_CH6_ADVANCED_PART2 } from './chem11_ch6_advanced_part2';
import { CHEM11_CH7_NORMAL_PART1 } from './chem11_ch7_normal_part1';
import { CHEM11_CH7_NORMAL_PART2 } from './chem11_ch7_normal_part2';
import { CHEM11_CH7_ADVANCED_PART1 } from './chem11_ch7_advanced_part1';
import { CHEM11_CH7_ADVANCED_PART2 } from './chem11_ch7_advanced_part2';

// ============================================================================
// 🧪 CHEMISTRY CLASS 11 — COMPREHENSIVE MCQS QUESTION BANK (CHAPTERS 1 TO 12)
// ============================================================================

export const CHEMISTRY_11_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // Chapter 1: Stoichiometry (Full 100 Advanced + 100 Normal Questions)
  // --------------------------------------------------------------------------
  ...CHEM11_CH1_ADVANCED_PART1,
  ...CHEM11_CH1_ADVANCED_PART2,
  ...CHEM11_CH1_NORMAL_PART1,
  ...CHEM11_CH1_NORMAL_PART2,


  // --------------------------------------------------------------------------
  // Chapter 2: Atomic Structure (Full 100 Normal + 100 Advanced Questions)
  // --------------------------------------------------------------------------
  ...CHEM11_CH2_NORMAL_PART1,
  ...CHEM11_CH2_NORMAL_PART2,
  ...CHEM11_CH2_ADVANCED_PART1,
  ...CHEM11_CH2_ADVANCED_PART2,

  // --------------------------------------------------------------------------
  // Chapter 3: Theories of Covalent Bonding and Shapes of Molecules (Full 100 Normal + 100 Advanced Questions)
  // --------------------------------------------------------------------------
  ...CHEM11_CH3_NORMAL_PART1,
  ...CHEM11_CH3_NORMAL_PART2,
  ...CHEM11_CH3_ADVANCED_PART1,
  ...CHEM11_CH3_ADVANCED_PART2,

  // --------------------------------------------------------------------------
  // Chapter 4: State of Matter I: Gases (Full 100 Normal + 100 Advanced Questions)
  // --------------------------------------------------------------------------
  ...CHEM11_CH4_NORMAL_PART1,
  ...CHEM11_CH4_NORMAL_PART2,
  ...CHEM11_CH4_ADVANCED_PART1,
  ...CHEM11_CH4_ADVANCED_PART2,

  // --------------------------------------------------------------------------
  // Chapter 5: State of Matter II: Liquids (Full 100 Normal + 100 Advanced Questions)
  // --------------------------------------------------------------------------
  ...CHEM11_CH5_NORMAL_PART1,
  ...CHEM11_CH5_NORMAL_PART2,
  ...CHEM11_CH5_ADVANCED_PART1,
  ...CHEM11_CH5_ADVANCED_PART2,

  // --------------------------------------------------------------------------
  // Chapter 6: State of Matter III: Solids (Full 100 Normal + 100 Advanced Questions)
  // --------------------------------------------------------------------------
  ...CHEM11_CH6_NORMAL_PART1,
  ...CHEM11_CH6_NORMAL_PART2,
  ...CHEM11_CH6_ADVANCED_PART1,
  ...CHEM11_CH6_ADVANCED_PART2,

  // --------------------------------------------------------------------------
  // Chapter 7: Chemical Equilibrium (Full 100 Normal + 100 Advanced Questions)
  // --------------------------------------------------------------------------
  ...CHEM11_CH7_NORMAL_PART1,
  ...CHEM11_CH7_NORMAL_PART2,
  ...CHEM11_CH7_ADVANCED_PART1,
  ...CHEM11_CH7_ADVANCED_PART2,

  // --------------------------------------------------------------------------
  // Chapter 8: Acids, Bases and Salts
  // --------------------------------------------------------------------------
  {
    id: 'chem11-ch8-q1',
    class: 11,
    subject: 'Chemistry',
    chapter_id: 'chem11-ch8',
    chapter: 'Acids, Bases and Salts',
    question: 'What is the pH of a $1.0 \\times 10^{-3}\\text{ M } HCl$ aqueous solution at $25^\\circ\\text{C}$?',
    option_a: '$3.0$',
    option_b: '$11.0$',
    option_c: '$1.0$',
    option_d: '$7.0$',
    correct_answer: 'A',
    explanation: '$HCl$ is a strong monoprotic acid that dissociates completely: $[H^+] = 1.0 \\times 10^{-3}\\text{ M}$. Thus, $\\text{pH} = -\\log_{10}[H^+] = -\\log_{10}(10^{-3}) = 3.0$.',
    difficulty: 'Easy',
    formula: '\\text{pH} = -\\log[H^+]',
  },
  {
    id: 'chem11-ch8-q2',
    class: 11,
    subject: 'Chemistry',
    chapter_id: 'chem11-ch8',
    chapter: 'Acids, Bases and Salts',
    question: 'The Henderson-Hasselbalch equation for an acidic buffer solution is given by:',
    option_a: '$\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{[\\text{Salt}]}{[\\text{Acid}]}\\right)$',
    option_b: '$\\text{pH} = \\text{p}K_a - \\log\\left(\\frac{[\\text{Salt}]}{[\\text{Acid}]}\\right)$',
    option_c: '$\\text{pH} = \\text{p}K_b + \\log\\left(\\frac{[\\text{Acid}]}{[\\text{Salt}]}\\right)$',
    option_d: '$\\text{pH} = -\\log K_w + \\text{p}K_a$',
    correct_answer: 'A',
    explanation: 'The Henderson-Hasselbalch equation for an acidic buffer is $\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{[A^-]}{[HA]}\\right) = \\text{p}K_a + \\log\\left(\\frac{[\\text{Salt}]}{[\\text{Acid}]}\\right)$.',
    difficulty: 'Easy',
    formula: '\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{[\\text{Conjugate Base}]}{[\\text{Acid}]}\\right)',
  },

  // --------------------------------------------------------------------------
  // Chapter 9: Chemical Kinetics
  // --------------------------------------------------------------------------
  {
    id: 'chem11-ch9-q1',
    class: 11,
    subject: 'Chemistry',
    chapter_id: 'chem11-ch9',
    chapter: 'Chemical Kinetics',
    question: 'The half-life period ($t_{1/2}$) of a first-order chemical reaction with rate constant $k$ is given by:',
    option_a: '$t_{1/2} = \\frac{0.693}{k}$',
    option_b: '$t_{1/2} = \\frac{[A]_0}{2k}$',
    option_c: '$t_{1/2} = \\frac{1}{k[A]_0}$',
    option_d: '$t_{1/2} = 0.693 \\cdot k$',
    correct_answer: 'A',
    explanation: 'For a first-order reaction, $t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$, which is strictly independent of the initial reactant concentration.',
    difficulty: 'Easy',
    formula: 't_{1/2} = \\frac{0.693}{k}',
  },
  {
    id: 'chem11-ch9-q2',
    class: 11,
    subject: 'Chemistry',
    chapter_id: 'chem11-ch9',
    chapter: 'Chemical Kinetics',
    question: 'In the Arrhenius equation $k = A e^{-\\frac{E_a}{RT}}$, what does $E_a$ represent?',
    option_a: 'Equilibrium free energy',
    option_b: 'Activation energy',
    option_c: 'Enthalpy of reaction',
    option_d: 'Entropy of vaporization',
    correct_answer: 'B',
    explanation: '$E_a$ is the activation energy, defined as the minimum kinetic energy that colliding reactant molecules must possess to undergo a successful chemical reaction.',
    difficulty: 'Easy',
    formula: 'k = A e^{-\\frac{E_a}{RT}}',
  },

  // --------------------------------------------------------------------------
  // Chapter 10: Solutions
  // --------------------------------------------------------------------------
  {
    id: 'chem11-ch10-q1',
    class: 11,
    subject: 'Chemistry',
    chapter_id: 'chem11-ch10',
    chapter: 'Solutions',
    question: 'Which concentration unit remains independent of temperature variations?',
    option_a: 'Molarity ($M$)',
    option_b: 'Molality ($m$)',
    option_c: 'Normality ($N$)',
    option_d: 'Volume Percentage',
    correct_answer: 'B',
    explanation: 'Molality ($m = \\frac{\\text{moles of solute}}{\\text{kg of solvent}}$) depends only on mass, not volume, and is therefore completely independent of thermal volume expansion.',
    difficulty: 'Easy',
    formula: 'm = \\frac{n_{\\text{solute}}}{m_{\\text{solvent (kg)}}}',
  },
  {
    id: 'chem11-ch10-q2',
    class: 11,
    subject: 'Chemistry',
    chapter_id: 'chem11-ch10',
    chapter: 'Solutions',
    question: 'The elevation in boiling point of a non-electrolyte solution is given by $\\Delta T_b = K_b m$. The unit of molal boiling point constant $K_b$ is:',
    option_a: '$\\text{K}\\cdot\\text{kg}\\cdot\\text{mol}^{-1}$',
    option_b: '$\\text{mol}\\cdot\\text{kg}^{-1}$',
    option_c: '$\\text{K}\\cdot\\text{L}\\cdot\\text{mol}^{-1}$',
    option_d: '$\\text{J}\\cdot\\text{K}^{-1}$',
    correct_answer: 'A',
    explanation: '$K_b = \\frac{\\Delta T_b}{m} = \\frac{\\text{K}}{\\text{mol/kg}} = \\text{K}\\cdot\\text{kg}\\cdot\\text{mol}^{-1}$.',
    difficulty: 'Medium',
    formula: 'K_b = \\frac{\\Delta T_b}{m}',
  },

  // --------------------------------------------------------------------------
  // Chapter 11: ThermoChemistry
  // --------------------------------------------------------------------------
  {
    id: 'chem11-ch11-q1',
    class: 11,
    subject: 'Chemistry',
    chapter_id: 'chem11-ch11',
    chapter: 'ThermoChemistry',
    question: 'Hess’s Law of Constant Heat Summation is a direct consequence of the:',
    option_a: 'Law of Conservation of Mass',
    option_b: 'First Law of Thermodynamics (Conservation of Energy)',
    option_c: 'Second Law of Thermodynamics',
    option_d: 'Third Law of Thermodynamics',
    correct_answer: 'B',
    explanation: 'Because enthalpy ($H$) is a thermodynamic state function, the net heat change in a reaction is independent of pathway, reflecting the First Law of Thermodynamics.',
    difficulty: 'Easy',
    formula: '\\Delta H_{\\text{total}} = \\sum \\Delta H_i',
  },
  {
    id: 'chem11-ch11-q2',
    class: 11,
    subject: 'Chemistry',
    chapter_id: 'chem11-ch11',
    chapter: 'ThermoChemistry',
    question: 'For a chemical reaction carried out at constant volume in a bomb calorimeter, the heat evolved ($q_v$) equals the change in:',
    option_a: 'Enthalpy ($\\Delta H$)',
    option_b: 'Internal Energy ($\\Delta U$)',
    option_c: 'Gibbs Free Energy ($\\Delta G$)',
    option_d: 'Entropy ($\\Delta S$)',
    correct_answer: 'B',
    explanation: 'At constant volume ($w = -P\\Delta V = 0$), the First Law gives $\\Delta U = q_v + w = q_v$. Thus, bomb calorimeter heat measurements directly yield $\\Delta U$.',
    difficulty: 'Medium',
    formula: '\\Delta U = q_v',
  },

  // --------------------------------------------------------------------------
  // Chapter 12: ElectroChemistry
  // --------------------------------------------------------------------------
  {
    id: 'chem11-ch12-q1',
    class: 11,
    subject: 'Chemistry',
    chapter_id: 'chem11-ch12',
    chapter: 'ElectroChemistry',
    question: 'According to Faraday’s First Law of Electrolysis, the mass $m$ of a substance deposited at an electrode is proportional to:',
    option_a: 'Electric charge ($Q = I \\cdot t$)',
    option_b: 'Voltage squared ($V^2$)',
    option_c: 'Resistance of electrolyte ($R$)',
    option_d: 'Electrode surface area',
    correct_answer: 'A',
    explanation: 'Faraday’s First Law states $m = Z \\cdot Q = Z \\cdot I \\cdot t$, where mass deposited is directly proportional to the total quantity of electric charge passed.',
    difficulty: 'Easy',
    formula: 'm = Z I t = \\frac{M I t}{n F}',
  },
  {
    id: 'chem11-ch12-q2',
    class: 11,
    subject: 'Chemistry',
    chapter_id: 'chem11-ch12',
    chapter: 'ElectroChemistry',
    question: 'The standard reduction potential of the Standard Hydrogen Electrode (SHE) at $25^\\circ\\text{C}$ and $1\\text{ atm}$ is defined as:',
    option_a: '$+1.00\\text{ V}$',
    option_b: '$0.00\\text{ V}$',
    option_c: '$-1.00\\text{ V}$',
    option_d: '$+0.76\\text{ V}$',
    correct_answer: 'B',
    explanation: 'By international convention, the standard electrode potential of the Standard Hydrogen Electrode ($2H^+ + 2e^- \\rightleftharpoons H_2$) is defined exactly as $0.00\\text{ V}$ at all temperatures.',
    difficulty: 'Easy',
    formula: 'E^\\circ(H^+/H_2) = 0.00\\text{ V}',
  }
];
