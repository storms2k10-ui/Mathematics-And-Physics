import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getFirestore, 
  initializeFirestore, 
  persistentLocalCache, 
  persistentMultipleTabManager 
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase App singleton
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore with specific database ID and long-polling fallback
let firestoreInstance;
const databaseId = firebaseConfig.firestoreDatabaseId || '(default)';

try {
  firestoreInstance = initializeFirestore(app, {
    experimentalAutoDetectLongPolling: true,
    localCache: persistentLocalCache({
      tabManager: persistentMultipleTabManager()
    })
  }, databaseId);
} catch {
  // If already initialized or custom cache fails, retrieve default instance
  firestoreInstance = getFirestore(app, databaseId);
}

export const db = firestoreInstance;

// Initialize Firebase Authentication
export const auth = getAuth(app);

export default app;
