import { onCLS, onFCP, onINP, onLCP, onTTFB } from 'web-vitals';

/**
 * Developer Insights & Performance Telemetry
 * Runs silently in the background for developer diagnostics.
 * Completely hidden from end-user UI.
 */
export function initDeveloperInsights(): void {
  // Silent developer insights - logs performance telemetry for debugging without affecting UI
  if (typeof window === 'undefined') return;

  const logDevMetric = (metric: { name: string; value: number; rating: string }) => {
    try {
      const isDev = Boolean((import.meta as unknown as { env?: { DEV?: boolean } }).env?.DEV);
      if (isDev) {
        // Developer console telemetry only in development mode
        console.debug(`[Developer Insights] ${metric.name}: ${metric.value.toFixed(2)}ms (${metric.rating})`);
      }
    } catch {
      // ignore
    }
  };

  try {
    onCLS(logDevMetric);
    onFCP(logDevMetric);
    onINP(logDevMetric);
    onLCP(logDevMetric);
    onTTFB(logDevMetric);
  } catch (err) {
    // Fail silently so user experience is never interrupted
  }
}
