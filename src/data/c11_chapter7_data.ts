import { Question } from '../types';
import { C11_CH7_NORMAL_ORIGINAL } from './c11_ch7_normal_original';
import { C11_CH7_NORMAL_PART1 } from './c11_ch7_normal_part1';
import { C11_CH7_NORMAL_PART2 } from './c11_ch7_normal_part2';
import { C11_CH7_NORMAL_PART3 } from './c11_ch7_normal_part3';
import { C11_CH7_NORMAL_PART4 } from './c11_ch7_normal_part4';
import { C11_CH7_ADVANCED_PART1 } from './c11_ch7_advanced_part1';
import { C11_CH7_ADVANCED_PART2 } from './c11_ch7_advanced_part2';
import { C11_CH7_ADVANCED_PART3 } from './c11_ch7_advanced_part3';
import { C11_CH7_ADVANCED_PART4 } from './c11_ch7_advanced_part4';

export const C11_CH7_NORMAL_QUESTIONS: Question[] = [
  ...C11_CH7_NORMAL_ORIGINAL, // 50 MCQs
  ...C11_CH7_NORMAL_PART1,    // 50 MCQs (Q1 - Q50)
  ...C11_CH7_NORMAL_PART2,    // 50 MCQs (Q51 - Q100)
  ...C11_CH7_NORMAL_PART3,    // 50 MCQs (Q101 - Q150)
  ...C11_CH7_NORMAL_PART4,    // 50 MCQs (Q151 - Q200)
]; // Total: 250 Questions

export const C11_CH7_ADVANCED_QUESTIONS: Question[] = [
  ...C11_CH7_ADVANCED_PART1,
  ...C11_CH7_ADVANCED_PART2,
  ...C11_CH7_ADVANCED_PART3,
  ...C11_CH7_ADVANCED_PART4,
];

export const C11_CH7_QUESTIONS: Question[] = [
  ...C11_CH7_NORMAL_QUESTIONS,
  ...C11_CH7_ADVANCED_QUESTIONS,
];
