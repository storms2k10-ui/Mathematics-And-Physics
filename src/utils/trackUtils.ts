import { ClassLevel } from '../types';

export type SubjectTrack = 'Elementary Mathematics' | 'Chemistry' | 'Elementary Physics' | 'Pre Calculas' | string;

/**
 * Normalizes any quiz/test/history record to its exact subject track and class level,
 * ensuring no cross-subject or cross-class data mixing occurs.
 */
export function normalizeTrackAndClass(record: {
  id?: string;
  chapterId?: string;
  chapterName?: string;
  track?: string;
  classLevel?: number | string;
  subject?: string;
}): { track: string; classLevel: ClassLevel } {
  const chapterId = (record.chapterId || '').toLowerCase().trim();
  const chapterName = (record.chapterName || '').toLowerCase().trim();
  const rawTrack = (record.track || record.subject || '').trim();

  let classLevel: ClassLevel = 9;
  const numClass = Number(record.classLevel);
  if ([9, 10, 11, 12].includes(numClass)) {
    classLevel = numClass as ClassLevel;
  }

  // 1. Precise Chapter ID identification
  if (chapterId.startsWith('chem') || chapterId.includes('chem')) {
    const matchedClass = chapterId.match(/chem(\d+)/)?.[1];
    if (matchedClass && [9, 10, 11, 12].includes(Number(matchedClass))) {
      classLevel = Number(matchedClass) as ClassLevel;
    } else if (!record.classLevel) {
      classLevel = 11;
    }
    return { track: 'Chemistry', classLevel };
  }

  if (chapterId.startsWith('el-phy') || chapterId.startsWith('phy') || chapterId.includes('physics')) {
    const matchedClass = chapterId.match(/(?:el-phy|phy)(\d+)/)?.[1];
    if (matchedClass && [9, 10, 11, 12].includes(Number(matchedClass))) {
      classLevel = Number(matchedClass) as ClassLevel;
    } else if (!record.classLevel) {
      classLevel = 11;
    }
    return { track: 'Elementary Physics', classLevel };
  }

  if (chapterId.startsWith('pre-calc') || chapterId.startsWith('precalc')) {
    return { track: 'Pre Calculas', classLevel: (classLevel === 9 ? 11 : classLevel) };
  }

  if (chapterId.startsWith('c9-')) return { track: 'Elementary Mathematics', classLevel: 9 };
  if (chapterId.startsWith('c10-')) return { track: 'Elementary Mathematics', classLevel: 10 };
  if (chapterId.startsWith('c11-')) return { track: 'Elementary Mathematics', classLevel: 11 };
  if (chapterId.startsWith('c12-')) return { track: 'Elementary Mathematics', classLevel: 12 };

  // 2. Keyword identification from chapter name or explicit rawTrack
  if (
    rawTrack.toLowerCase() === 'chemistry' ||
    chapterName.includes('stoichiometry') ||
    chapterName.includes('atomic structure') ||
    chapterName.includes('chemical bonding') ||
    chapterName.includes('thermochemistry') ||
    chapterName.includes('electrochemistry') ||
    chapterName.includes('gases') ||
    chapterName.includes('liquids & solids') ||
    chapterName.includes('solutions') ||
    chapterName.includes('macromolecules')
  ) {
    return { track: 'Chemistry', classLevel: classLevel || 11 };
  }

  if (
    rawTrack.toLowerCase().includes('physic') ||
    chapterName.includes('physics and measurements') ||
    chapterName.includes('vectors and equilibrium') ||
    chapterName.includes('motion and force') ||
    chapterName.includes('work and energy') ||
    chapterName.includes('circular motion') ||
    chapterName.includes('fluid dynamics') ||
    chapterName.includes('oscillations') ||
    chapterName.includes('waves') ||
    chapterName.includes('physical optics') ||
    chapterName.includes('thermodynamics')
  ) {
    return { track: 'Elementary Physics', classLevel: classLevel || 11 };
  }

  if (
    rawTrack.toLowerCase().includes('calculas') ||
    rawTrack.toLowerCase().includes('calculus') ||
    chapterName.includes('pre calculas') ||
    chapterName.includes('pre calculus')
  ) {
    return { track: 'Pre Calculas', classLevel: classLevel || 11 };
  }

  if (rawTrack && rawTrack !== 'Elementary Mathematics') {
    return { track: rawTrack, classLevel };
  }

  return { track: 'Elementary Mathematics', classLevel };
}
