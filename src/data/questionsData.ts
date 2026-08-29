import { Question } from '../types';
import { CHEMISTRY_11_QUESTIONS } from './chemistry11QuestionsData';
import { C9_CH1_QUESTIONS } from './c9_chapter1_data';
import { C9_CH2_QUESTIONS } from './c9_chapter2_data';
import { C9_CH3_QUESTIONS } from './c9_chapter3_data';
import { C9_CH4_QUESTIONS } from './c9_chapter4_data';
import { C9_CH5_QUESTIONS } from './c9_chapter5_data';
import { C9_CH6_QUESTIONS } from './c9_chapter6_data';
import { C9_CH7_QUESTIONS } from './c9_chapter7_data';
import { C9_CH8_QUESTIONS } from './c9_chapter8_data';
import { C9_CH9_QUESTIONS } from './c9_chapter9_data';
import { C9_CH10_QUESTIONS } from './c9_chapter10_data';
import { C9_CH11_QUESTIONS } from './c9_chapter11_data';
import { C9_CH12_QUESTIONS } from './c9_chapter12_data';
import { C9_CH13_QUESTIONS } from './c9_chapter13_data';
import { C9_CH14_QUESTIONS } from './c9_chapter14_data';
import { C9_CH15_QUESTIONS } from './c9_chapter15_data';
import { C9_CH16_QUESTIONS } from './c9_chapter16_data';
import { C9_CH17_QUESTIONS } from './c9_chapter17_data';
import { C11_CH2_QUESTIONS } from './c11_chapter2_data';
import { C11_CH3_QUESTIONS } from './c11_chapter3_data';
import { C11_CH4_QUESTIONS } from './c11_chapter4_data';
import { C11_CH5_QUESTIONS } from './c11_chapter5_data';
import { C11_CH6_QUESTIONS } from './c11_chapter6_data';
import { C11_CH7_QUESTIONS } from './c11_chapter7_data';
import { C11_CH8_QUESTIONS } from './c11_chapter8_data';
import { C11_CH9_QUESTIONS } from './c11_chapter9_data';
import { C11_CH10_QUESTIONS } from './c11_chapter10_data';
import { C11_CH11_QUESTIONS } from './c11_chapter11_data';
import { C11_CH12_QUESTIONS } from './c11_chapter12_data';
import { C10_CH1_QUESTIONS } from './c10_chapter1_data';
import { C10_CH2_QUESTIONS } from './c10_chapter2_data';
import { C10_CH3_QUESTIONS } from './c10_chapter3_data';
import { C10_CH4_QUESTIONS } from './c10_chapter4_data';
import { C10_CH5_QUESTIONS } from './c10_chapter5_data';
import { C10_CH6_QUESTIONS } from './c10_chapter6_data';
import { C10_CH7_QUESTIONS } from './c10_chapter7_data';
import { C10_CH8_QUESTIONS } from './c10_chapter8_data';
import { C10_CH9_QUESTIONS } from './c10_chapter9_data';
import { C10_CH10_QUESTIONS } from './c10_chapter10_data';
import { C10_CH11_QUESTIONS } from './c10_chapter11_data';
import { C10_CH12_QUESTIONS } from './c10_chapter12_data';
import { C10_CH13_QUESTIONS } from './c10_chapter13_data';
import { C10_CH14_QUESTIONS } from './c10_chapter14_data';
import { C10_CH15_QUESTIONS } from './c10_chapter15_data';
import { C12_CH1_QUESTIONS } from './c12_chapter1_data';
import { C12_CH2_QUESTIONS } from './c12_chapter2_data';
import { C12_CH3_QUESTIONS } from './c12_chapter3_data';
import { C12_CH4_QUESTIONS } from './c12_chapter4_data';
import { C12_CH5_QUESTIONS } from './c12_chapter5_data';
import { C12_CH6_QUESTIONS } from './c12_chapter6_data';
import { C12_CH7_QUESTIONS } from './c12_chapter7_data';
import { C12_CH8_QUESTIONS } from './c12_chapter8_data';
import { C12_CH9_QUESTIONS } from './c12_chapter9_data';
import { C12_CH10_QUESTIONS } from './c12_chapter10_data';
import { C12_CH11_QUESTIONS } from './c12_chapter11_data';
import { EL_PHY11_CH1_QUESTIONS } from './el_phy11_chapter1_data';
import { EL_PHY11_CH2_QUESTIONS } from './el_phy11_chapter2_data';
import { EL_PHY11_CH3_QUESTIONS } from './el_phy11_chapter3_data';
import { EL_PHY11_CH4_QUESTIONS } from './el_phy11_chapter4_data';
import { EL_PHY11_CH5_QUESTIONS } from './el_phy11_chapter5_data';
import { EL_PHY11_CH6_QUESTIONS } from './el_phy11_chapter6_data';
import { EL_PHY11_CH7_QUESTIONS } from './el_phy11_chapter7_data';
import { EL_PHY11_CH8_QUESTIONS } from './el_phy11_chapter8_data';
import { EL_PHY11_CH9_QUESTIONS } from './el_phy11_chapter9_data';
import { EL_PHY11_CH10_QUESTIONS } from './el_phy11_chapter10_data';
import { EL_PHY11_CH11_QUESTIONS } from './el_phy11_chapter11_data';
import { EL_PHY11_CH12_QUESTIONS } from './el_phy11_chapter12_data';
import { EL_PHY11_CH13_QUESTIONS } from './el_phy11_chapter13_data';
import { EL_PHY11_CH14_QUESTIONS } from './el_phy11_chapter14_data';
import {
  EL_PHY12_CH1_QUESTIONS,
  EL_PHY12_CH2_QUESTIONS,
  EL_PHY12_CH3_QUESTIONS,
  EL_PHY12_CH4_QUESTIONS,
  EL_PHY12_CH5_QUESTIONS,
  EL_PHY12_CH6_QUESTIONS,
  EL_PHY12_CH7_QUESTIONS,
} from './el_phy12_chapters1_7_data';
import {
  EL_PHY12_CH8_QUESTIONS,
  EL_PHY12_CH9_QUESTIONS,
  EL_PHY12_CH10_QUESTIONS,
  EL_PHY12_CH11_QUESTIONS,
  EL_PHY12_CH12_QUESTIONS,
  EL_PHY12_CH13_QUESTIONS,
  EL_PHY12_CH14_QUESTIONS,
} from './el_phy12_chapters8_14_data';

import { C11_CH1_QUESTIONS } from './c11_chapter1_data';

const RAW_ALL_QUESTIONS: Question[] = [
  ...C9_CH1_QUESTIONS,
  ...C9_CH2_QUESTIONS,
  ...C9_CH3_QUESTIONS,
  ...C9_CH4_QUESTIONS,
  ...C9_CH5_QUESTIONS,
  ...C9_CH6_QUESTIONS,
  ...C9_CH7_QUESTIONS,
  ...C9_CH8_QUESTIONS,
  ...C9_CH9_QUESTIONS,
  ...C9_CH10_QUESTIONS,
  ...C9_CH11_QUESTIONS,
  ...C9_CH12_QUESTIONS,
  ...C9_CH13_QUESTIONS,
  ...C9_CH14_QUESTIONS,
  ...C9_CH15_QUESTIONS,
  ...C9_CH16_QUESTIONS,
  ...C9_CH17_QUESTIONS,
  ...C11_CH1_QUESTIONS,
  ...C11_CH2_QUESTIONS,
  ...C11_CH3_QUESTIONS,
  ...C11_CH4_QUESTIONS,
  ...C11_CH5_QUESTIONS,
  ...C11_CH6_QUESTIONS,
  ...C11_CH7_QUESTIONS,
  ...C11_CH8_QUESTIONS,
  ...C11_CH9_QUESTIONS,
  ...C11_CH10_QUESTIONS,
  ...C11_CH11_QUESTIONS,
  ...C11_CH12_QUESTIONS,
  ...C10_CH1_QUESTIONS,
  ...C10_CH2_QUESTIONS,
  ...C10_CH3_QUESTIONS,
  ...C10_CH4_QUESTIONS,
  ...C10_CH5_QUESTIONS,
  ...C10_CH6_QUESTIONS,
  ...C10_CH7_QUESTIONS,
  ...C10_CH8_QUESTIONS,
  ...C10_CH9_QUESTIONS,
  ...C10_CH10_QUESTIONS,
  ...C10_CH11_QUESTIONS,
  ...C10_CH12_QUESTIONS,
  ...C10_CH13_QUESTIONS,
  ...C10_CH14_QUESTIONS,
  ...C10_CH15_QUESTIONS,
  ...C12_CH1_QUESTIONS,
  ...C12_CH2_QUESTIONS,
  ...C12_CH3_QUESTIONS,
  ...C12_CH4_QUESTIONS,
  ...C12_CH5_QUESTIONS,
  ...C12_CH6_QUESTIONS,
  ...C12_CH7_QUESTIONS,
  ...C12_CH8_QUESTIONS,
  ...C12_CH9_QUESTIONS,
  ...C12_CH10_QUESTIONS,
  ...C12_CH11_QUESTIONS,
  ...EL_PHY11_CH1_QUESTIONS,
  ...EL_PHY11_CH2_QUESTIONS,
  ...EL_PHY11_CH3_QUESTIONS,
  ...EL_PHY11_CH4_QUESTIONS,
  ...EL_PHY11_CH5_QUESTIONS,
  ...EL_PHY11_CH6_QUESTIONS,
  ...EL_PHY11_CH7_QUESTIONS,
  ...EL_PHY11_CH8_QUESTIONS,
  ...EL_PHY11_CH9_QUESTIONS,
  ...EL_PHY11_CH10_QUESTIONS,
  ...EL_PHY11_CH11_QUESTIONS,
  ...EL_PHY11_CH12_QUESTIONS,
  ...EL_PHY11_CH13_QUESTIONS,
  ...EL_PHY11_CH14_QUESTIONS,
  ...EL_PHY12_CH1_QUESTIONS,
  ...EL_PHY12_CH2_QUESTIONS,
  ...EL_PHY12_CH3_QUESTIONS,
  ...EL_PHY12_CH4_QUESTIONS,
  ...EL_PHY12_CH5_QUESTIONS,
  ...EL_PHY12_CH6_QUESTIONS,
  ...EL_PHY12_CH7_QUESTIONS,
  ...EL_PHY12_CH8_QUESTIONS,
  ...EL_PHY12_CH9_QUESTIONS,
  ...EL_PHY12_CH10_QUESTIONS,
  ...EL_PHY12_CH11_QUESTIONS,
  ...EL_PHY12_CH12_QUESTIONS,
  ...EL_PHY12_CH13_QUESTIONS,
  ...EL_PHY12_CH14_QUESTIONS,
  ...CHEMISTRY_11_QUESTIONS,
];

// Explicitly ensure all existing questions are linked to 'Normal' difficulty level
export const ALL_QUESTIONS: Question[] = RAW_ALL_QUESTIONS.map((q) => ({
  ...q,
  difficulty_tier: q.difficulty_tier || 'Normal',
}));
