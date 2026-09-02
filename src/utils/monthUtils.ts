import { UserTestHistory, MonthlyProgressSummary } from '../types';

/**
 * Returns month key in format 'YYYY-MM' (e.g. '2026-09')
 */
export function getMonthKey(timestamp?: number | string | Date): string {
  const d = timestamp ? new Date(timestamp) : new Date();
  if (isNaN(d.getTime())) {
    const fallback = new Date();
    return `${fallback.getFullYear()}-${String(fallback.getMonth() + 1).padStart(2, '0')}`;
  }
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}`;
}

/**
 * Returns current month key in format 'YYYY-MM'
 */
export function getCurrentMonthKey(): string {
  return getMonthKey();
}

/**
 * Returns previous calendar month key in format 'YYYY-MM'
 */
export function getPreviousMonthKey(referenceDate = new Date()): string {
  const d = new Date(referenceDate.getFullYear(), referenceDate.getMonth() - 1, 1);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}`;
}

/**
 * Formats 'YYYY-MM' into a user-friendly month name, e.g. 'September 2026'
 */
export function formatMonthName(monthKey: string): string {
  if (!monthKey || !monthKey.includes('-')) return 'Current Month';
  try {
    const [yearStr, monthStr] = monthKey.split('-');
    const year = parseInt(yearStr, 10);
    const month = parseInt(monthStr, 10) - 1;
    const d = new Date(year, month, 1);
    return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  } catch {
    return monthKey;
  }
}

/**
 * Checks if a timestamp belongs to the current calendar month
 */
export function isCurrentMonth(timestamp?: number): boolean {
  if (!timestamp) return true; // Default to true if missing timestamp
  return getMonthKey(timestamp) === getCurrentMonthKey();
}

/**
 * Checks if a timestamp belongs to the previous calendar month
 */
export function isPreviousMonth(timestamp?: number): boolean {
  if (!timestamp) return false;
  return getMonthKey(timestamp) === getPreviousMonthKey();
}

/**
 * Computes MonthlyProgressSummary from an array of test attempts
 */
export function calculateMonthSummary(
  history: UserTestHistory[],
  targetMonthKey: string
): MonthlyProgressSummary {
  const monthItems = history.filter((h) => {
    const itemMonth = h.monthKey || getMonthKey(h.timestamp);
    return itemMonth === targetMonthKey;
  });

  const totalQuestions = monthItems.reduce((acc, h) => acc + (Number(h.totalQuestions) || 0), 0);
  const totalCorrect = monthItems.reduce((acc, h) => acc + (Number(h.correctCount) || 0), 0);
  const totalSkipped = monthItems.reduce((acc, h) => acc + (Number(h.skippedCount) || 0), 0);
  const totalWrong = Math.max(0, totalQuestions - totalCorrect - totalSkipped);
  const attemptedQuestions = totalCorrect + totalWrong;
  const accuracy = attemptedQuestions > 0 
    ? Math.round((totalCorrect / attemptedQuestions) * 100) 
    : (totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0);

  return {
    monthKey: targetMonthKey,
    monthName: formatMonthName(targetMonthKey),
    testsAttempted: monthItems.length,
    totalQuestions,
    totalCorrect,
    totalWrong,
    totalSkipped,
    accuracy,
    history: monthItems.sort((a, b) => (Number(b.timestamp) || 0) - (Number(a.timestamp) || 0)),
  };
}
