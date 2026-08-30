import { Question } from '../types';
import { C11_CH4_ADVANCED_PART1 } from './c11_ch4_advanced_part1';
import { C11_CH4_ADVANCED_PART2 } from './c11_ch4_advanced_part2';
import { C11_CH4_ADVANCED_PART3 } from './c11_ch4_advanced_part3';
import { C11_CH4_ADVANCED_PART4 } from './c11_ch4_advanced_part4';

export const C11_CH4_ADVANCED_QUESTIONS: Question[] = [
  ...C11_CH4_ADVANCED_PART1,
  ...C11_CH4_ADVANCED_PART2,
  ...C11_CH4_ADVANCED_PART3,
  ...C11_CH4_ADVANCED_PART4,
];

export const C11_CH4_QUESTIONS: Question[] = [
  ...C11_CH4_ADVANCED_QUESTIONS,
];
