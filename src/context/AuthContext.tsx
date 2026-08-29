import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  User as FirebaseUser,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut as firebaseSignOut,
  updateProfile,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence
} from 'firebase/auth';
import { 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  collection, 
  query, 
  where, 
  getDocs, 
  limit,
  serverTimestamp 
} from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import { UserProfile, UserTestHistory, ClassLevel, LeaderboardEntry } from '../types';
import { FirestoreLeaderboardService } from '../services/firestoreLeaderboard';
import { safeFetchJson } from '../lib/apiHelper';
import { offlineSyncService } from '../services/offlineSyncService';

interface AuthContextType {
  currentUser: FirebaseUser | null;
  userProfile: UserProfile | null;
  isAuthenticated: boolean;
  loading: boolean;
  checkEmailUniqueness: (email: string) => Promise<{ exists: boolean; available: boolean; error?: string }>;
  signUp: (email: string, pass: string, displayName: string, classLevel: ClassLevel) => Promise<void>;
  signIn: (email: string, pass: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  signOut: () => Promise<void>;
  recordTestAttempt: (historyItem: UserTestHistory) => Promise<UserProfile>;
  updateUserClass: (lvl: ClassLevel) => Promise<void>;
  syncWithServer: () => Promise<UserProfile | null>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // Configure browser local persistence for Firebase Auth
  useEffect(() => {
    try {
      setPersistence(auth, browserLocalPersistence).catch((err) => {
        console.warn('Firebase Auth persistence setup note:', err);
      });
    } catch (e) {
      console.warn('Firebase Auth persistence error:', e);
    }
  }, []);

  const docRefForUser = (uid: string) => doc(db, 'users', uid);

  // Authoritative check on Firebase Cloud Firestore for email uniqueness
  const checkEmailUniqueness = async (email: string): Promise<{ exists: boolean; available: boolean; error?: string }> => {
    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail || !cleanEmail.includes('@')) {
      return { exists: false, available: false, error: 'Please enter a valid email address.' };
    }

    try {
      // 1. Authoritative check against Firestore 'users' cloud collection
      const q = query(collection(db, 'users'), where('email', '==', cleanEmail), limit(1));
      const snap = await getDocs(q);
      if (!snap.empty) {
        return { exists: true, available: false, error: 'An account with this email address already exists. Please sign in instead.' };
      }

      // 2. Also check server endpoint
      const res = await safeFetchJson<{ exists?: boolean; available?: boolean; error?: string; success?: boolean }>(
        `/api/auth/check-email?email=${encodeURIComponent(cleanEmail)}`
      );
      if (res.ok && res.data?.success && res.data.exists) {
        return { exists: true, available: false, error: 'An account with this email address already exists. Please sign in instead.' };
      }

      return { exists: false, available: true };
    } catch {
      return { exists: false, available: true };
    }
  };

  // Authoritative fetch of user profile and history from Cloud Firestore with offline fallback
  const fetchCloudUserProfile = async (user: FirebaseUser): Promise<UserProfile> => {
    try {
      const userRef = docRefForUser(user.uid);
      const [userSnap, cloudHistory] = await Promise.all([
        getDoc(userRef).catch(() => null),
        FirestoreLeaderboardService.fetchUserTestHistory(user.uid).catch(() => [] as UserTestHistory[]),
      ]);

      if (userSnap && userSnap.exists()) {
        const data = userSnap.data() as Partial<UserProfile>;
        
        // Merge history from cloud test_results and user doc with strict deduplication
        const historyMap = new Map<string, UserTestHistory>();
        
        if (Array.isArray(data.history)) {
          data.history.forEach((h) => {
            if (h && h.id) {
              historyMap.set(h.id, h);
            }
          });
        }
        if (Array.isArray(cloudHistory)) {
          cloudHistory.forEach((h) => {
            if (h && h.id) {
              historyMap.set(h.id, h);
            }
          });
        }

        // Deduplicate any close duplicates by (chapterId + classLevel + track + timestamp rounded to 5s)
        const seenSignatures = new Set<string>();
        const combinedHistory: UserTestHistory[] = [];
        
        const sortedRaw = Array.from(historyMap.values()).sort((a, b) => (Number(b.timestamp) || 0) - (Number(a.timestamp) || 0));
        for (const item of sortedRaw) {
          const approxTime = Math.floor((Number(item.timestamp) || 0) / 5000);
          const sig = `${item.chapterId}_${item.classLevel}_${item.track || 'gen'}_${item.scorePercentage}_${approxTime}`;
          if (!seenSignatures.has(sig)) {
            seenSignatures.add(sig);
            combinedHistory.push(item);
          }
        }

        const totalQ = combinedHistory.reduce((acc, h) => acc + (Number(h.totalQuestions) || 0), 0);
        const totalC = combinedHistory.reduce((acc, h) => acc + (Number(h.correctCount) || 0), 0);
        const totalS = combinedHistory.reduce((acc, h) => acc + (Number(h.skippedCount) || 0), 0);
        const totalW = Math.max(0, totalQ - totalC - totalS);
        const accPct = (totalC + totalW) > 0 ? Math.round((totalC / (totalC + totalW)) * 100) : (totalQ > 0 ? Math.round((totalC / totalQ) * 100) : 0);

        const profile: UserProfile = {
          uid: user.uid,
          email: user.email || data.email || '',
          displayName: data.displayName || user.displayName || user.email?.split('@')[0] || 'Student Candidate',
          classLevel: (data.classLevel as ClassLevel) || 9,
          createdAt: typeof data.createdAt === 'number' ? data.createdAt : Date.now(),
          testsAttempted: combinedHistory.length,
          totalQuestionsAnswered: totalQ,
          totalCorrect: totalC,
          totalWrong: totalW,
          totalSkipped: totalS,
          accuracy: accPct,
          history: combinedHistory,
        };

        setUserProfile(profile);
        offlineSyncService.cacheUserProfile(profile);
        return profile;
      } else {
        // Check offline cache first if cloud doc didn't respond
        const cached = offlineSyncService.getCachedUserProfile();
        if (cached && cached.uid === user.uid) {
          setUserProfile(cached);
          return cached;
        }

        // Create initial cloud user profile in Firestore
        const cleanName = user.displayName || user.email?.split('@')[0] || 'Student Candidate';
        const newProfile: UserProfile = {
          uid: user.uid,
          email: user.email || '',
          displayName: cleanName,
          classLevel: 9,
          createdAt: Date.now(),
          testsAttempted: 0,
          totalQuestionsAnswered: 0,
          totalCorrect: 0,
          totalWrong: 0,
          accuracy: 0,
          history: [],
        };

        try {
          await setDoc(userRef, {
            ...newProfile,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          }, { merge: true });
        } catch (e) {
          console.warn('Could not write initial profile to cloud (offline):', e);
        }

        setUserProfile(newProfile);
        offlineSyncService.cacheUserProfile(newProfile);
        return newProfile;
      }
    } catch (error) {
      console.error('Failed to load user profile from Firestore, using offline fallback:', error);
      const cached = offlineSyncService.getCachedUserProfile();
      if (cached) {
        setUserProfile(cached);
        return cached;
      }

      const fallback: UserProfile = {
        uid: user.uid,
        email: user.email || '',
        displayName: user.displayName || 'Student Candidate',
        classLevel: 9,
        createdAt: Date.now(),
        testsAttempted: 0,
        totalQuestionsAnswered: 0,
        totalCorrect: 0,
        totalWrong: 0,
        accuracy: 0,
        history: [],
      };
      setUserProfile(fallback);
      offlineSyncService.cacheUserProfile(fallback);
      return fallback;
    }
  };

  // Listen to Firebase Auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        await fetchCloudUserProfile(user);
      } else {
        setUserProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Synchronize profile on demand with Cloud Firestore
  const syncWithServer = async (): Promise<UserProfile | null> => {
    if (!currentUser) return null;
    return await fetchCloudUserProfile(currentUser);
  };

  // Sign Up with Firebase Authentication & Cloud Firestore
  const signUp = async (email: string, pass: string, displayName: string, classLevel: ClassLevel = 9) => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanName = displayName.trim() || cleanEmail.split('@')[0] || 'Student Candidate';

    if (!cleanEmail || !cleanEmail.includes('@')) {
      throw new Error('Please enter a valid email address.');
    }
    if (!pass || pass.length < 6) {
      throw new Error('Password must be at least 6 characters.');
    }

    // 1. Authoritative check for existing account
    const uniqueness = await checkEmailUniqueness(cleanEmail);
    if (uniqueness.exists) {
      throw new Error('An account with this email address already exists. Please sign in instead.');
    }

    try {
      // 2. Authoritative creation in Firebase Authentication
      const cred = await createUserWithEmailAndPassword(auth, cleanEmail, pass);
      const firebaseUser = cred.user;

      try {
        await updateProfile(firebaseUser, { displayName: cleanName });
      } catch {
        // ignore profile update warning
      }

      // 3. Save profile document permanently to Cloud Firestore
      const newProfile: UserProfile = {
        uid: firebaseUser.uid,
        email: cleanEmail,
        displayName: cleanName,
        classLevel,
        createdAt: Date.now(),
        testsAttempted: 0,
        totalQuestionsAnswered: 0,
        totalCorrect: 0,
        totalWrong: 0,
        accuracy: 0,
        history: [],
      };

      const userDocRef = docRefForUser(firebaseUser.uid);
      await setDoc(userDocRef, {
        ...newProfile,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      }, { merge: true });

      // 4. Background sync with server
      safeFetchJson('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          uid: firebaseUser.uid,
          email: cleanEmail,
          password: pass,
          displayName: cleanName,
          classLevel,
        }),
      }).catch(() => {});

      setUserProfile(newProfile);
      setCurrentUser(firebaseUser);
    } catch (fbErr: any) {
      const code = fbErr?.code || '';
      if (code === 'auth/operation-not-allowed') {
        throw new Error('Email/Password sign-in is not enabled in your Firebase project. Please enable "Email/Password" in Firebase Console under Authentication > Sign-in method.');
      }
      if (code === 'auth/email-already-in-use') {
        throw new Error('An account with this email address already exists. Please sign in instead.');
      }
      if (code === 'auth/weak-password') {
        throw new Error('Password should be at least 6 characters.');
      }
      if (code === 'auth/invalid-email') {
        throw new Error('Please enter a valid email address.');
      }
      if (code === 'auth/network-request-failed') {
        throw new Error('Network error. Please check your internet connection and try again.');
      }
      throw new Error(fbErr.message || 'Failed to create account. Please try again.');
    }
  };

  // Sign In with Firebase Authentication & Cloud Firestore
  const signIn = async (email: string, pass: string) => {
    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail || !pass) {
      throw new Error('Please enter both your email and password.');
    }

    try {
      // 1. Authoritative authentication via Firebase Auth
      const cred = await signInWithEmailAndPassword(auth, cleanEmail, pass);
      setCurrentUser(cred.user);

      // 2. Fetch full profile and test history from Cloud Firestore
      await fetchCloudUserProfile(cred.user);

      // 3. Background notify server
      safeFetchJson('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cleanEmail, password: pass }),
      }).catch(() => {});
    } catch (fbErr: any) {
      const code = fbErr?.code || '';
      if (code === 'auth/operation-not-allowed') {
        throw new Error('Email/Password sign-in is not enabled in your Firebase project. Please enable "Email/Password" in Firebase Console under Authentication > Sign-in method.');
      }
      if (
        code === 'auth/user-not-found' || 
        code === 'auth/invalid-credential' || 
        code === 'auth/wrong-password' ||
        code === 'auth/invalid-login-credentials'
      ) {
        throw new Error('Invalid email or password. Please verify your credentials or sign up.');
      }
      if (code === 'auth/invalid-email') {
        throw new Error('Please enter a valid email address.');
      }
      if (code === 'auth/too-many-requests') {
        throw new Error('Too many failed attempts. Please try again in a few minutes or reset your password.');
      }
      if (code === 'auth/network-request-failed') {
        throw new Error('Network error. Please check your internet connection and try again.');
      }
      throw new Error(fbErr.message || 'Failed to sign in. Please check your credentials.');
    }
  };

  // Send Password Reset Email via Firebase Authentication
  const resetPassword = async (email: string) => {
    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail) {
      throw new Error('Please enter your registered email address.');
    }

    try {
      await sendPasswordResetEmail(auth, cleanEmail);
    } catch (err: any) {
      const code = err?.code || '';
      if (code === 'auth/operation-not-allowed') {
        throw new Error('Password reset is not enabled in your Firebase project. Please enable "Email/Password" in Firebase Console under Authentication > Sign-in method.');
      }
      if (code === 'auth/user-not-found') {
        throw new Error('No registered account found with this email address.');
      }
      if (code === 'auth/invalid-email') {
        throw new Error('Please enter a valid email address.');
      }
      if (code === 'auth/network-request-failed') {
        throw new Error('Network error. Please check your internet connection and try again.');
      }
      throw new Error(err.message || 'Failed to send password reset email.');
    }
  };

  // Sign out cleanly from Firebase Auth and clear memory state
  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
    } catch (e) {
      console.warn('Firebase Auth sign out notice:', e);
    }
    setCurrentUser(null);
    setUserProfile(null);
    setLoading(false);
  };

  // Record a completed test result directly to Cloud Firestore with automatic offline fallback
  const recordTestAttempt = async (historyItem: UserTestHistory): Promise<UserProfile> => {
    const current = userProfile;
    const uid = currentUser?.uid || current?.uid || `usr_${Date.now()}`;
    const email = currentUser?.email || current?.email || '';
    const displayName = current?.displayName || currentUser?.displayName || 'Student Candidate';

    const leaderboardEntryRecord: LeaderboardEntry = {
      id: historyItem.id,
      studentName: displayName,
      classLevel: historyItem.classLevel,
      chapterId: historyItem.chapterId,
      chapterName: historyItem.chapterName,
      mode: 'practice',
      track: historyItem.track,
      correctCount: historyItem.correctCount,
      totalQuestions: historyItem.totalQuestions,
      skippedCount: historyItem.skippedCount || 0,
      scorePercentage: historyItem.scorePercentage,
      timeSpentSeconds: historyItem.timeSpentSeconds,
      formattedTime: historyItem.formattedTime,
      timestamp: historyItem.timestamp,
      formattedDate: historyItem.formattedDate,
    };

    // 1. Calculate updated aggregate profile immediately
    const baseHistory = Array.isArray(current?.history) ? current.history : [];
    const filteredHistory = baseHistory.filter((h) => h.id !== historyItem.id);
    const updatedHistory = [historyItem, ...filteredHistory].slice(0, 100);

    const totalQ = updatedHistory.reduce((acc, h) => acc + (Number(h.totalQuestions) || 0), 0);
    const totalC = updatedHistory.reduce((acc, h) => acc + (Number(h.correctCount) || 0), 0);
    const totalS = updatedHistory.reduce((acc, h) => acc + (Number(h.skippedCount) || 0), 0);
    const totalW = Math.max(0, totalQ - totalC - totalS);
    const accPct = (totalC + totalW) > 0 ? Math.round((totalC / (totalC + totalW)) * 100) : (totalQ > 0 ? Math.round((totalC / totalQ) * 100) : 0);

    const updatedProfile: UserProfile = {
      uid,
      email,
      displayName,
      classLevel: historyItem.classLevel || current?.classLevel || 9,
      createdAt: current?.createdAt || Date.now(),
      testsAttempted: updatedHistory.length,
      totalQuestionsAnswered: totalQ,
      totalCorrect: totalC,
      totalWrong: totalW,
      totalSkipped: totalS,
      accuracy: accPct,
      history: updatedHistory,
    };

    // Cache updated profile locally in offline storage
    setUserProfile(updatedProfile);
    offlineSyncService.cacheUserProfile(updatedProfile);

    // If offline, queue for auto-sync as soon as user is online
    if (!offlineSyncService.isOnline()) {
      offlineSyncService.queueAttempt(historyItem, leaderboardEntryRecord, uid, email, displayName);
      return updatedProfile;
    }

    // 2. If online, save to Firestore & Server; if any fail, queue for auto-sync
    try {
      await Promise.all([
        FirestoreLeaderboardService.saveTestResultRecord(leaderboardEntryRecord, uid).catch((e) => {
          console.warn('Firestore test_results write failed, queueing offline:', e);
          offlineSyncService.queueAttempt(historyItem, leaderboardEntryRecord, uid, email, displayName);
        }),
        FirestoreLeaderboardService.saveEntry(leaderboardEntryRecord, uid).catch((e) => {
          console.warn('Firestore leaderboard write failed, queueing offline:', e);
        }),
      ]);

      // 3. Update Cloud Firestore 'users/{uid}' document
      if (currentUser?.uid) {
        try {
          const userRef = docRefForUser(currentUser.uid);
          await setDoc(userRef, {
            testsAttempted: updatedProfile.testsAttempted,
            totalQuestionsAnswered: updatedProfile.totalQuestionsAnswered,
            totalCorrect: updatedProfile.totalCorrect,
            totalWrong: updatedProfile.totalWrong,
            totalSkipped: updatedProfile.totalSkipped,
            accuracy: updatedProfile.accuracy,
            classLevel: updatedProfile.classLevel,
            updatedAt: serverTimestamp(),
            history: updatedHistory,
          }, { merge: true });
        } catch (err) {
          console.warn('Firestore user profile doc update notice (cached locally):', err);
        }
      }

      // 4. Background broadcast to server
      safeFetchJson('/api/auth/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          uid,
          email,
          displayName,
          classLevel: historyItem.classLevel || current?.classLevel || 9,
          historyItem,
        }),
      }).catch(() => {});
    } catch (e) {
      console.warn('Network sync exception, queueing attempt for auto-sync:', e);
      offlineSyncService.queueAttempt(historyItem, leaderboardEntryRecord, uid, email, displayName);
    }

    return updatedProfile;
  };

  // Update student class in Cloud Firestore
  const updateUserClass = async (lvl: ClassLevel) => {
    if (!currentUser) return;
    
    if (userProfile) {
      setUserProfile({
        ...userProfile,
        classLevel: lvl,
      });
    }

    try {
      const userRef = docRefForUser(currentUser.uid);
      await updateDoc(userRef, {
        classLevel: lvl,
        updatedAt: serverTimestamp(),
      });
    } catch (err) {
      console.error('Failed to update class in Firestore:', err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        userProfile,
        isAuthenticated: Boolean(currentUser || (userProfile && userProfile.email && userProfile.email.includes('@'))),
        loading,
        checkEmailUniqueness,
        signUp,
        signIn,
        resetPassword,
        signOut,
        recordTestAttempt,
        updateUserClass,
        syncWithServer,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
