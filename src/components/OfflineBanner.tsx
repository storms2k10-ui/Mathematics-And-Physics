import React, { useState } from 'react';
import { 
  WifiOff, 
  Wifi, 
  RefreshCw, 
  CheckCircle, 
  CloudOff, 
  Cloud, 
  X, 
  AlertTriangle,
  Zap,
  ArrowRight,
  Database
} from 'lucide-react';
import { useOffline } from '../context/OfflineContext';

export const OfflineBanner: React.FC = () => {
  const { 
    isOnline, 
    isOffline, 
    isManualOffline, 
    isSyncing, 
    pendingSyncCount, 
    syncMessage, 
    clearSyncMessage,
    toggleManualOffline,
    triggerManualSync 
  } = useOffline();

  const [isDismissed, setIsDismissed] = useState(false);
  const [manualSyncing, setManualSyncing] = useState(false);

  const handleSyncClick = async () => {
    setManualSyncing(true);
    try {
      await triggerManualSync();
    } finally {
      setManualSyncing(false);
    }
  };

  return (
    <>
      {/* 1. AUTO-SYNC SUCCESS / STATUS FLOATING TOAST NOTIFICATION */}
      {syncMessage && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="p-4 rounded-2xl bg-indigo-900/95 text-white border border-indigo-500/50 shadow-2xl backdrop-blur-md flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-indigo-500/30 border border-indigo-400/40 flex items-center justify-center shrink-0">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-xs font-semibold leading-snug">
                {syncMessage}
              </p>
            </div>
            <button
              onClick={clearSyncMessage}
              className="p-1 rounded-lg hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer shrink-0"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* 2. TOP OFFLINE MODE BANNER (Rendered when offline or forced offline) */}
      {isOffline && !isDismissed && (
        <aside
          id="global-offline-banner"
          aria-label="Offline Mode Notification"
          className="bg-gradient-to-r from-amber-600 via-amber-700 to-orange-700 text-white px-4 py-2.5 shadow-md relative z-30 transition-all border-b border-amber-500/40"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs">
            <div className="flex items-center gap-2.5 text-center sm:text-left">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 animate-pulse">
                <WifiOff className="w-3.5 h-3.5 text-amber-200" />
              </div>
              <div>
                <span className="font-bold tracking-wide">
                  {isManualOffline ? 'Offline Mode Active (Manual)' : 'You are currently offline'}
                </span>
                <span className="opacity-90 hidden sm:inline ml-1.5">
                  — Full curriculum questions, definitions & formulas are available. All test results are stored locally and will auto-sync when online.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {pendingSyncCount > 0 && (
                <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white font-bold text-[11px] flex items-center gap-1 border border-white/20">
                  <Database className="w-3 h-3 text-amber-200" />
                  <span>{pendingSyncCount} {pendingSyncCount === 1 ? 'result' : 'results'} cached</span>
                </span>
              )}

              {/* Sync Now button (works if browser is actually online) */}
              {navigator.onLine && (
                <button
                  onClick={handleSyncClick}
                  disabled={isSyncing || manualSyncing}
                  className="px-2.5 py-1 rounded-lg bg-white text-amber-900 font-bold hover:bg-amber-50 transition-all flex items-center gap-1 shadow-xs cursor-pointer disabled:opacity-50 text-[11px]"
                >
                  <RefreshCw className={`w-3 h-3 ${isSyncing || manualSyncing ? 'animate-spin' : ''}`} />
                  <span>{isSyncing || manualSyncing ? 'Syncing...' : 'Sync Now'}</span>
                </button>
              )}

              {/* Toggle manual offline */}
              {isManualOffline && (
                <button
                  onClick={toggleManualOffline}
                  className="px-2.5 py-1 rounded-lg bg-amber-900/60 hover:bg-amber-900/80 text-white font-semibold transition-all text-[11px] cursor-pointer border border-amber-400/40"
                >
                  Go Online
                </button>
              )}

              <button
                onClick={() => setIsDismissed(true)}
                className="p-1 rounded-md hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
                title="Dismiss Banner"
                aria-label="Dismiss banner"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* 3. SYNCING INDICATOR (When actively uploading pending records) */}
      {isSyncing && !isOffline && (
        <aside
          aria-label="Syncing Data Status"
          className="bg-indigo-600 text-white px-4 py-1.5 shadow-sm text-center text-xs font-semibold flex items-center justify-center gap-2 animate-in fade-in"
        >
          <RefreshCw className="w-3.5 h-3.5 animate-spin text-indigo-200" />
          <span>Synchronizing cached offline test attempts with Firebase Cloud Database...</span>
        </aside>
      )}
    </>
  );
};
