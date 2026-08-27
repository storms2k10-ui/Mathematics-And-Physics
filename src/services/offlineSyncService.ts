import { FirestoreLeaderboardService } from './firestoreLeaderboard';
import { safeFetchJson } from '../lib/apiHelper';
import { LeaderboardEntry, UserTestHistory, UserProfile } from '../types';

export type ConnectionStatus = 'stable' | 'unstable' | 'offline';

export interface PendingOfflineAttempt {
  id: string;
  historyItem: UserTestHistory;
  leaderboardEntry: LeaderboardEntry;
  uid?: string;
  email?: string;
  displayName?: string;
  queuedAt: number;
}

const OFFLINE_QUEUE_KEY = 'math_physics_offline_pending_queue';
const OFFLINE_MANUAL_OVERRIDE_KEY = 'math_physics_offline_manual_override';
const OFFLINE_CACHED_PROFILE_KEY = 'math_physics_offline_cached_profile';
const OFFLINE_CACHED_LEADERBOARD_KEY = 'math_physics_offline_cached_leaderboard';
const OFFLINE_LAST_SYNC_KEY = 'math_physics_offline_last_sync_timestamp';

type SyncListener = (status: {
  isOnline: boolean;
  connectionStatus: ConnectionStatus;
  isStable: boolean;
  isUnstable: boolean;
  isOffline: boolean;
  isSyncing: boolean;
  pendingCount: number;
  lastSyncTime: number | null;
  message?: string;
}) => void;

class OfflineSyncManager {
  private isSyncing = false;
  private listeners: Set<SyncListener> = new Set();
  private syncIntervalId: any = null;
  private pingIntervalId: any = null;
  private currentConnectionStatus: ConnectionStatus = 'stable';
  private consecutiveFailures = 0;

  constructor() {
    if (typeof window !== 'undefined') {
      this.currentConnectionStatus = this.computeInitialStatus();

      window.addEventListener('online', this.handleOnlineEvent);
      window.addEventListener('offline', this.handleOfflineEvent);
      window.addEventListener('focus', this.handleFocusEvent);

      // Listen to Network Information API changes if available
      const navConn = (navigator as any)?.connection || (navigator as any)?.mozConnection || (navigator as any)?.webkitConnection;
      if (navConn && typeof navConn.addEventListener === 'function') {
        navConn.addEventListener('change', this.handleNetworkChange);
      }

      // Initial ping check
      this.checkConnectionHealth();

      // Periodic check: ping connection every 10 seconds for real-time stability
      this.pingIntervalId = setInterval(() => {
        this.checkConnectionHealth();
      }, 10000);

      // Periodic check: if online and queue has items, trigger auto-sync
      this.syncIntervalId = setInterval(() => {
        if (this.isOnline() && this.getPendingCount() > 0 && !this.isSyncing) {
          this.syncPendingData().catch(() => {});
        }
      }, 25000);
    }
  }

  private computeInitialStatus(): ConnectionStatus {
    if (typeof window === 'undefined') return 'stable';
    if (this.isManualOfflineEnabled()) return 'offline';
    if (typeof navigator !== 'undefined' && !navigator.onLine) return 'offline';
    return 'stable';
  }

  /**
   * Returns true if browser is online and manual offline override is disabled
   */
  public isOnline(): boolean {
    if (typeof window === 'undefined') return true;
    if (this.isManualOfflineEnabled()) return false;
    return typeof navigator !== 'undefined' ? navigator.onLine : true;
  }

  /**
   * Returns current connection status ('stable' | 'unstable' | 'offline')
   */
  public getConnectionStatus(): ConnectionStatus {
    if (!this.isOnline()) return 'offline';
    return this.currentConnectionStatus;
  }

  /**
   * Returns true if connection is online and stable
   */
  public isConnectionStable(): boolean {
    return this.getConnectionStatus() === 'stable';
  }

  /**
   * Active Ping / Latency Health Check to detect Unstable Connection
   */
  public async checkConnectionHealth(): Promise<ConnectionStatus> {
    if (typeof window === 'undefined') return 'stable';

    if (!this.isOnline()) {
      const prev = this.currentConnectionStatus;
      this.currentConnectionStatus = 'offline';
      if (prev !== 'offline') this.notifyListeners();
      return 'offline';
    }

    // Check Network Information API effective type
    const navConn = (navigator as any)?.connection || (navigator as any)?.mozConnection || (navigator as any)?.webkitConnection;
    if (navConn) {
      if (navConn.effectiveType === 'slow-2g' || navConn.effectiveType === '2g' || (navConn.rtt && navConn.rtt > 800)) {
        const prev = this.currentConnectionStatus;
        this.currentConnectionStatus = 'unstable';
        if (prev !== 'unstable') this.notifyListeners();
        return 'unstable';
      }
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);
    const startTime = performance.now();

    try {
      // Ping health endpoint or favicon to measure real round-trip latency
      const response = await fetch(`/api/health?_t=${Date.now()}`, {
        method: 'GET',
        cache: 'no-store',
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      const latency = performance.now() - startTime;

      if (!response.ok) {
        // Non-200 response -> unstable
        this.consecutiveFailures++;
        this.currentConnectionStatus = this.consecutiveFailures >= 2 ? 'unstable' : this.currentConnectionStatus;
      } else if (latency > 1200) {
        // High latency (>1.2s) -> unstable connection
        this.currentConnectionStatus = 'unstable';
        this.consecutiveFailures = 0;
      } else {
        // Fast & healthy response -> stable connection
        this.currentConnectionStatus = 'stable';
        this.consecutiveFailures = 0;
      }
    } catch (err: any) {
      clearTimeout(timeoutId);
      this.consecutiveFailures++;

      if (typeof navigator !== 'undefined' && !navigator.onLine) {
        this.currentConnectionStatus = 'offline';
      } else {
        // Request failed or aborted -> unstable connection
        this.currentConnectionStatus = 'unstable';
      }
    }

    this.notifyListeners();
    return this.currentConnectionStatus;
  }

  /**
   * Checks if user has manually enabled offline mode
   */
  public isManualOfflineEnabled(): boolean {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem(OFFLINE_MANUAL_OVERRIDE_KEY) === 'true';
  }

  /**
   * Toggles manual offline mode
   */
  public setManualOffline(enabled: boolean): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(OFFLINE_MANUAL_OVERRIDE_KEY, enabled ? 'true' : 'false');
    this.notifyListeners();
    if (!enabled && this.isOnline() && this.getPendingCount() > 0) {
      this.syncPendingData().catch(() => {});
    }
  }

  /**
   * Gets list of pending offline test attempts
   */
  public getPendingQueue(): PendingOfflineAttempt[] {
    if (typeof window === 'undefined') return [];
    try {
      const raw = localStorage.getItem(OFFLINE_QUEUE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  /**
   * Saves updated pending queue to local storage
   */
  private savePendingQueue(queue: PendingOfflineAttempt[]): void {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(OFFLINE_QUEUE_KEY, JSON.stringify(queue));
    } catch (e) {
      console.warn('Failed to save offline queue to storage:', e);
    }
  }

  /**
   * Returns count of queued offline test attempts
   */
  public getPendingCount(): number {
    return this.getPendingQueue().length;
  }

  /**
   * Gets timestamp of last successful sync
   */
  public getLastSyncTime(): number | null {
    if (typeof window === 'undefined') return null;
    const raw = localStorage.getItem(OFFLINE_LAST_SYNC_KEY);
    return raw ? Number(raw) : null;
  }

  /**
   * Updates last sync timestamp
   */
  private updateLastSyncTime(): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(OFFLINE_LAST_SYNC_KEY, String(Date.now()));
  }

  /**
   * Queues an offline test attempt for future synchronization
   */
  public queueAttempt(
    historyItem: UserTestHistory,
    leaderboardEntry: LeaderboardEntry,
    uid?: string,
    email?: string,
    displayName?: string
  ): void {
    const queue = this.getPendingQueue();
    const existingIndex = queue.findIndex((q) => q.historyItem.id === historyItem.id);

    const pendingItem: PendingOfflineAttempt = {
      id: historyItem.id,
      historyItem,
      leaderboardEntry,
      uid,
      email,
      displayName,
      queuedAt: Date.now(),
    };

    if (existingIndex >= 0) {
      queue[existingIndex] = pendingItem;
    } else {
      queue.push(pendingItem);
    }

    this.savePendingQueue(queue);

    // Also update offline cached profile
    this.updateCachedProfileWithAttempt(historyItem);

    this.notifyListeners();

    // If online, immediately try to sync
    if (this.isOnline()) {
      this.syncPendingData().catch(() => {});
    }
  }

  /**
   * Caches the user profile locally so it's always accessible offline
   */
  public cacheUserProfile(profile: UserProfile): void {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(OFFLINE_CACHED_PROFILE_KEY, JSON.stringify(profile));
    } catch (e) {
      console.warn('Failed to cache user profile:', e);
    }
  }

  /**
   * Retrieves cached user profile from local storage
   */
  public getCachedUserProfile(): UserProfile | null {
    if (typeof window === 'undefined') return null;
    try {
      const raw = localStorage.getItem(OFFLINE_CACHED_PROFILE_KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }

  /**
   * Updates local cached profile with a newly completed attempt
   */
  private updateCachedProfileWithAttempt(historyItem: UserTestHistory): void {
    const cached = this.getCachedUserProfile();
    if (!cached) return;

    const baseHistory = Array.isArray(cached.history) ? cached.history : [];
    const filtered = baseHistory.filter((h) => h.id !== historyItem.id);
    const updatedHistory = [historyItem, ...filtered].slice(0, 100);

    const totalQ = updatedHistory.reduce((acc, h) => acc + (Number(h.totalQuestions) || 0), 0);
    const totalC = updatedHistory.reduce((acc, h) => acc + (Number(h.correctCount) || 0), 0);
    const totalS = updatedHistory.reduce((acc, h) => acc + (Number(h.skippedCount) || 0), 0);
    const totalW = Math.max(0, totalQ - totalC - totalS);
    const accPct = (totalC + totalW) > 0 ? Math.round((totalC / (totalC + totalW)) * 100) : (totalQ > 0 ? Math.round((totalC / totalQ) * 100) : 0);

    const updatedProfile: UserProfile = {
      ...cached,
      testsAttempted: updatedHistory.length,
      totalQuestionsAnswered: totalQ,
      totalCorrect: totalC,
      totalWrong: totalW,
      totalSkipped: totalS,
      accuracy: accPct,
      history: updatedHistory,
    };

    this.cacheUserProfile(updatedProfile);
  }

  /**
   * Caches leaderboard entries for offline viewing
   */
  public cacheLeaderboard(entries: LeaderboardEntry[]): void {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(OFFLINE_CACHED_LEADERBOARD_KEY, JSON.stringify(entries.slice(0, 100)));
    } catch (e) {
      console.warn('Failed to cache leaderboard:', e);
    }
  }

  /**
   * Retrieves cached leaderboard entries
   */
  public getCachedLeaderboard(): LeaderboardEntry[] {
    if (typeof window === 'undefined') return [];
    try {
      const raw = localStorage.getItem(OFFLINE_CACHED_LEADERBOARD_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  /**
   * Synchronizes all pending offline test attempts with Firebase Firestore and Server
   */
  public async syncPendingData(): Promise<{ syncedCount: number; errors: number }> {
    if (this.isSyncing) return { syncedCount: 0, errors: 0 };
    if (!this.isOnline()) {
      return { syncedCount: 0, errors: 0 };
    }

    const queue = this.getPendingQueue();
    if (queue.length === 0) {
      return { syncedCount: 0, errors: 0 };
    }

    this.isSyncing = true;
    this.notifyListeners();

    let syncedCount = 0;
    let errors = 0;
    const remainingQueue: PendingOfflineAttempt[] = [];

    for (const item of queue) {
      try {
        // 1. Sync to Firebase Firestore cloud database (both Leaderboard & Test Results)
        await Promise.all([
          FirestoreLeaderboardService.saveEntry(item.leaderboardEntry, item.uid).catch((err) => {
            console.warn('Offline sync: Firestore leaderboard warning:', err);
          }),
          FirestoreLeaderboardService.saveTestResultRecord(item.leaderboardEntry, item.uid).catch((err) => {
            console.warn('Offline sync: Firestore test_results warning:', err);
          }),
        ]);

        // 2. Sync to Node.js / Express Server API endpoint
        await safeFetchJson('/api/auth/sync', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            uid: item.uid,
            email: item.email,
            displayName: item.displayName || item.leaderboardEntry.studentName,
            classLevel: item.historyItem.classLevel,
            historyItem: item.historyItem,
          }),
        }).catch((err) => {
          console.warn('Offline sync: Server API sync warning:', err);
        });

        syncedCount++;
      } catch (err) {
        console.error('Failed to sync item from offline queue:', item.id, err);
        errors++;
        remainingQueue.push(item);
      }
    }

    this.savePendingQueue(remainingQueue);
    this.updateLastSyncTime();
    this.isSyncing = false;

    const message = syncedCount > 0 
      ? `Auto-synced ${syncedCount} offline ${syncedCount === 1 ? 'test' : 'tests'} to Cloud Database & Profile!` 
      : undefined;

    this.notifyListeners(message);

    return { syncedCount, errors };
  }

  /**
   * Event listener callbacks
   */
  private handleOnlineEvent = () => {
    this.checkConnectionHealth().then((status) => {
      if (status === 'stable') {
        this.notifyListeners('Internet reconnected. Connection is stable.');
      } else {
        this.notifyListeners('Internet reconnected, but connection may be unstable.');
      }
      if (this.isOnline() && this.getPendingCount() > 0) {
        this.syncPendingData().catch(() => {});
      }
    });
  };

  private handleOfflineEvent = () => {
    this.currentConnectionStatus = 'offline';
    this.notifyListeners('You are offline. Offline practice mode is active.');
  };

  private handleFocusEvent = () => {
    this.checkConnectionHealth();
  };

  private handleNetworkChange = () => {
    this.checkConnectionHealth();
  };

  /**
   * Subscribe to offline & sync state changes
   */
  public subscribe(listener: SyncListener): () => void {
    this.listeners.add(listener);
    // Initial emission
    const isOnline = this.isOnline();
    const connStatus = this.getConnectionStatus();
    listener({
      isOnline,
      connectionStatus: connStatus,
      isStable: isOnline && connStatus === 'stable',
      isUnstable: isOnline && connStatus === 'unstable',
      isOffline: !isOnline || connStatus === 'offline',
      isSyncing: this.isSyncing,
      pendingCount: this.getPendingCount(),
      lastSyncTime: this.getLastSyncTime(),
    });

    return () => {
      this.listeners.delete(listener);
    };
  }

  private notifyListeners(message?: string): void {
    const isOnline = this.isOnline();
    const connStatus = this.getConnectionStatus();
    const isStable = isOnline && connStatus === 'stable';
    const isUnstable = isOnline && connStatus === 'unstable';
    const isOffline = !isOnline || connStatus === 'offline';

    const status = {
      isOnline,
      connectionStatus: connStatus,
      isStable,
      isUnstable,
      isOffline,
      isSyncing: this.isSyncing,
      pendingCount: this.getPendingCount(),
      lastSyncTime: this.getLastSyncTime(),
      message,
    };
    this.listeners.forEach((listener) => {
      try {
        listener(status);
      } catch (err) {
        console.error('Error in sync listener:', err);
      }
    });
  }

  public destroy(): void {
    if (typeof window !== 'undefined') {
      window.removeEventListener('online', this.handleOnlineEvent);
      window.removeEventListener('offline', this.handleOfflineEvent);
      window.removeEventListener('focus', this.handleFocusEvent);

      const navConn = (navigator as any)?.connection || (navigator as any)?.mozConnection || (navigator as any)?.webkitConnection;
      if (navConn && typeof navConn.removeEventListener === 'function') {
        navConn.removeEventListener('change', this.handleNetworkChange);
      }

      if (this.syncIntervalId) clearInterval(this.syncIntervalId);
      if (this.pingIntervalId) clearInterval(this.pingIntervalId);
    }
  }
}

export const offlineSyncService = new OfflineSyncManager();
