import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { offlineSyncService } from '../services/offlineSyncService';
import { LeaderboardEntry, UserTestHistory } from '../types';

interface OfflineContextType {
  isOnline: boolean;
  isOffline: boolean;
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
  const [isManualOffline, setIsManualOffline] = useState<boolean>(offlineSyncService.isManualOfflineEnabled());
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [pendingSyncCount, setPendingSyncCount] = useState<number>(offlineSyncService.getPendingCount());
  const [lastSyncTime, setLastSyncTime] = useState<number | null>(offlineSyncService.getLastSyncTime());
  const [syncMessage, setSyncMessage] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = offlineSyncService.subscribe((status) => {
      setIsOnline(status.isOnline);
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
  };

  const setManualOffline = (enabled: boolean) => {
    offlineSyncService.setManualOffline(enabled);
    setIsManualOffline(enabled);
    setIsOnline(offlineSyncService.isOnline());
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

  return (
    <OfflineContext.Provider
      value={{
        isOnline,
        isOffline: !isOnline,
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
