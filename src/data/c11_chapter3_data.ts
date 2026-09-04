import { Question } from '../types';
import { C11_CH3_NORMAL_PART1 } from './c11_ch3_normal_part1';
import { C11_CH3_NORMAL_PART2 } from './c11_ch3_normal_part2';
import { C11_CH3_NORMAL_PART3 } from './c11_ch3_normal_part3';
import { C11_CH3_NORMAL_PART4 } from './c11_ch3_normal_part4';
import { C11_CH3_ADVANCED_PART1 } from './c11_ch3_advanced_part1';
import { C11_CH3_ADVANCED_PART2 } from './c11_ch3_advanced_part2';
import { C11_CH3_ADVANCED_PART3 } from './c11_ch3_advanced_part3';
import { C11_CH3_ADVANCED_PART4 } from './c11_ch3_advanced_part4';

export const C11_CH3_NORMAL_QUESTIONS: Question[] = [
  ...C11_CH3_NORMAL_PART1,
  ...C11_CH3_NORMAL_PART2,
  ...C11_CH3_NORMAL_PART3,
  ...C11_CH3_NORMAL_PART4,
];

export const C11_CH3_ADVANCED_QUESTIONS: Question[] = [
  ...C11_CH3_ADVANCED_PART1,
  ...C11_CH3_ADVANCED_PART2,
  ...C11_CH3_ADVANCED_PART3,
  ...C11_CH3_ADVANCED_PART4,
];

export const C11_CH3_QUESTIONS: Question[] = [
  ...C11_CH3_NORMAL_QUESTIONS,
  ...C11_CH3_ADVANCED_QUESTIONS,
];

