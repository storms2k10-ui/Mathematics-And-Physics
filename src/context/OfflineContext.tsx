import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { offlineSyncService, ConnectionStatus } from '../services/offlineSyncService';
import { LeaderboardEntry, UserTestHistory } from '../types';

interface OfflineContextType {
  isOnline: boolean;
  isOffline: boolean;
  connectionStatus: ConnectionStatus;
  isConnectionStable: boolean;
  isConnectionUnstable: boolean;
  /** 'green' when connection is stable; 'yellow' when unstable or offline */
  indicatorColor: 'green' | 'yellow';
  indicatorBadgeClass: string;
  indicatorDotClass: string;
  statusLabel: string;
  isManualOffline: boolean;
  isSyncing: boolean;
  pendingSyncCount: number;
  lastSyncTime: number | null;
  syncMessage: string | null;
  clearSyncMessage: () => void;
  toggleManualOffline: () => void;
  setManualOffline: (enabled: boolean) => void;
  triggerManualSync: () => Promise<number>;
  queueOfflineAttempt: (
    historyItem: UserTestHistory,
    leaderboardEntry: LeaderboardEntry,
    uid?: string,
    email?: string,
    displayName?: string
  ) => void;
}

const OfflineContext = createContext<OfflineContextType | undefined>(undefined);

export const OfflineProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOnline, setIsOnline] = useState<boolean>(offlineSyncService.isOnline());
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus>(offlineSyncService.getConnectionStatus());
  const [isManualOffline, setIsManualOffline] = useState<boolean>(offlineSyncService.isManualOfflineEnabled());
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [pendingSyncCount, setPendingSyncCount] = useState<number>(offlineSyncService.getPendingCount());
  const [lastSyncTime, setLastSyncTime] = useState<number | null>(offlineSyncService.getLastSyncTime());
  const [syncMessage, setSyncMessage] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = offlineSyncService.subscribe((status) => {
      setIsOnline(status.isOnline);
      setConnectionStatus(status.connectionStatus);
      setIsManualOffline(offlineSyncService.isManualOfflineEnabled());
      setIsSyncing(status.isSyncing);
      setPendingSyncCount(status.pendingCount);
      setLastSyncTime(status.lastSyncTime);
      if (status.message) {
        setSyncMessage(status.message);
      }
    });

    return () => unsubscribe();
  }, []);

  // Auto clear sync message after 6 seconds
  useEffect(() => {
    if (syncMessage) {
      const timer = setTimeout(() => {
        setSyncMessage(null);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [syncMessage]);

  const toggleManualOffline = () => {
    const nextState = !isManualOffline;
    offlineSyncService.setManualOffline(nextState);
    setIsManualOffline(nextState);
    setIsOnline(offlineSyncService.isOnline());
    setConnectionStatus(offlineSyncService.getConnectionStatus());
  };

  const setManualOffline = (enabled: boolean) => {
    offlineSyncService.setManualOffline(enabled);
    setIsManualOffline(enabled);
    setIsOnline(offlineSyncService.isOnline());
    setConnectionStatus(offlineSyncService.getConnectionStatus());
  };

  const triggerManualSync = async (): Promise<number> => {
    if (!navigator.onLine) {
      setSyncMessage('Cannot sync while offline. Please check your internet connection.');
      return 0;
    }
    // Temporarily ensure manual offline is off if user clicks sync now
    if (isManualOffline) {
      offlineSyncService.setManualOffline(false);
      setIsManualOffline(false);
    }
    const result = await offlineSyncService.syncPendingData();
    return result.syncedCount;
  };

  const queueOfflineAttempt = (
    historyItem: UserTestHistory,
    leaderboardEntry: LeaderboardEntry,
    uid?: string,
    email?: string,
    displayName?: string
  ) => {
    offlineSyncService.queueAttempt(historyItem, leaderboardEntry, uid, email, displayName);
    setPendingSyncCount(offlineSyncService.getPendingCount());
  };

  const clearSyncMessage = () => {
    setSyncMessage(null);
  };

  // Connection Indicator logic:
  // When stable -> Green
  // When unstable OR offline / no internet -> Yellow
  const isConnectionStable = isOnline && connectionStatus === 'stable';
  const isConnectionUnstable = isOnline && connectionStatus === 'unstable';
  const isOffline = !isOnline || connectionStatus === 'offline';

  const indicatorColor: 'green' | 'yellow' = isConnectionStable ? 'green' : 'yellow';

  const indicatorDotClass = isConnectionStable
    ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.85)]'
    : 'bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.9)]';

  const indicatorBadgeClass = isConnectionStable
    ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 border-emerald-400/40'
    : 'bg-yellow-500/15 text-yellow-700 dark:text-yellow-300 border-yellow-400/40';

  const statusLabel = isConnectionStable
    ? 'Online (Stable)'
    : isConnectionUnstable
    ? 'Unstable Connection'
    : 'Offline';

  return (
    <OfflineContext.Provider
      value={{
        isOnline,
        isOffline,
        connectionStatus,
        isConnectionStable,
        isConnectionUnstable,
        indicatorColor,
        indicatorBadgeClass,
        indicatorDotClass,
        statusLabel,
        isManualOffline,
        isSyncing,
        pendingSyncCount,
        lastSyncTime,
        syncMessage,
        clearSyncMessage,
        toggleManualOffline,
        setManualOffline,
        triggerManualSync,
        queueOfflineAttempt,
      }}
    >
      {children}
    </OfflineContext.Provider>
  );
};

export const useOffline = () => {
  const context = useContext(OfflineContext);
  if (!context) {
    throw new Error('useOffline must be used within an OfflineProvider');
  }
  return context;
};
