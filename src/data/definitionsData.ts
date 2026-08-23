import { MathDefinition } from '../types';
import { C9_DEFINITIONS_ALL } from './c9_definitions_all';
import { C10_DEFINITIONS_ALL } from './c10_definitions_all';
import { C11_DEFINITIONS_CH1_CH6 } from './c11_definitions_ch1_ch6';
import { C11_DEFINITIONS_CH7_CH12 } from './c11_definitions_ch7_ch12';
import { C12_DEFINITIONS_ALL } from './c12_definitions_all';

export const ALL_DEFINITIONS: MathDefinition[] = [
  // Class 9 Definitions
  ...C9_DEFINITIONS_ALL,

  // Class 10 Definitions
  ...C10_DEFINITIONS_ALL,

  // Class 11 Definitions
  ...C11_DEFINITIONS_CH1_CH6,
  ...C11_DEFINITIONS_CH7_CH12,

  // Class 12 Definitions
  ...C12_DEFINITIONS_ALL,
];

