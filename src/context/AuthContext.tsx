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
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import { UserProfile, UserTestHistory, ClassLevel } from '../types';

interface AuthContextType {
  currentUser: FirebaseUser | null;
  userProfile: UserProfile | null;
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

const LOCAL_USER_KEY = 'maths_user_profile_cache';

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(() => {
    try {
      const cached = localStorage.getItem(LOCAL_USER_KEY);
      return cached ? JSON.parse(cached) : null;
    } catch {
      return null;
    }
  });
  const [loading, setLoading] = useState(true);

  // Save profile to local storage cache
  const saveProfileCache = (profile: UserProfile | null) => {
    setUserProfile(profile);
    try {
      if (profile) {
        localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(profile));
        localStorage.setItem('maths_student_name', profile.displayName);
      } else {
        localStorage.removeItem(LOCAL_USER_KEY);
      }
    } catch {
      // ignore
    }
  };

  const docRefForUser = (uid: string) => doc(db, 'users', uid);

  // Sync profile live with Express backend
  const syncWithServer = async (): Promise<UserProfile | null> => {
    const active = userProfile;
    if (!active) return null;
    try {
      const query = active.uid ? `uid=${encodeURIComponent(active.uid)}` : `email=${encodeURIComponent(active.email)}`;
      const res = await fetch(`/api/auth/profile?${query}`);
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.user) {
          const syncedUser: UserProfile = {
            ...data.user,
            history: Array.isArray(data.user.history) ? data.user.history : [],
          };
          saveProfileCache(syncedUser);
          return syncedUser;
        }
      }
    } catch (err) {
      console.warn('Server live sync notice:', err);
    }
    return active;
  };

  // Pre-flight check to verify email uniqueness on the server before signup
  const checkEmailUniqueness = async (email: string): Promise<{ exists: boolean; available: boolean; error?: string }> => {
    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail || !cleanEmail.includes('@')) {
      return { exists: false, available: false, error: 'Please enter a valid email address.' };
    }
    try {
      const res = await fetch(`/api/auth/check-email?email=${encodeURIComponent(cleanEmail)}`);
      const data = await res.json();
      if (res.ok && data.success) {
        return { exists: Boolean(data.exists), available: Boolean(data.available) };
      }
      return { exists: false, available: false, error: data.error || 'Server error checking email.' };
    } catch (err: any) {
      return { exists: false, available: false, error: err?.message || 'Network error checking email.' };
    }
  };

  // Configure browser local persistence for Firebase Auth
  useEffect(() => {
    try {
      setPersistence(auth, browserLocalPersistence).catch((err) => {
        console.warn('Auth persistence config:', err);
      });
    } catch (e) {
      console.warn('Auth persistence error:', e);
    }
  }, []);

  // Fetch Firestore profile
  const fetchUserProfile = async (user: FirebaseUser) => {
    try {
      // First try fetching live server user profile
      try {
        const srvRes = await fetch(`/api/auth/profile?email=${encodeURIComponent(user.email || '')}&uid=${encodeURIComponent(user.uid)}`);
        if (srvRes.ok) {
          const srvData = await srvRes.json();
          if (srvData.success && srvData.user) {
            saveProfileCache({
              ...srvData.user,
              history: Array.isArray(srvData.user.history) ? srvData.user.history : [],
            });
            return;
          }
        }
      } catch {
        // Fallback to Firestore
      }

      const docRef = docRefForUser(user.uid);
      const snap = await getDoc(docRef);
      if (snap.exists()) {
        const data = snap.data() as UserProfile;
        const fullProfile: UserProfile = {
          ...data,
          uid: user.uid,
          email: data.email || user.email || '',
          displayName: data.displayName || user.displayName || user.email?.split('@')[0] || 'Student',
          classLevel: data.classLevel || 9,
          history: Array.isArray(data.history) ? data.history : [],
        };
        saveProfileCache(fullProfile);
      } else {
        const newProfile: UserProfile = {
          uid: user.uid,
          email: user.email || '',
          displayName: user.displayName || user.email?.split('@')[0] || 'Student',
          classLevel: 9,
          createdAt: Date.now(),
          testsAttempted: 0,
          totalQuestionsAnswered: 0,
          totalCorrect: 0,
          totalWrong: 0,
          accuracy: 0,
          history: [],
        };
        await setDoc(docRef, newProfile, { merge: true });
        saveProfileCache(newProfile);
      }
    } catch (e) {
      console.warn('Could not fetch Firestore user profile, using fallback:', e);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        await fetchUserProfile(user);
      } else {
        // Check if there is a cached active user session and sync with server live
        try {
          const cached = localStorage.getItem(LOCAL_USER_KEY);
          if (cached) {
            const parsed = JSON.parse(cached);
            setUserProfile(parsed);
            // Verify and sync live with server
            if (parsed.email || parsed.uid) {
              const query = parsed.uid ? `uid=${encodeURIComponent(parsed.uid)}` : `email=${encodeURIComponent(parsed.email)}`;
              fetch(`/api/auth/profile?${query}`)
                .then((r) => r.json())
                .then((data) => {
                  if (data.success && data.user) {
                    saveProfileCache(data.user);
                  }
                })
                .catch(() => {});
            }
          }
        } catch {
          // ignore
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Email-based Sign Up: STRICTLY prevents duplicate signup with same email and validates with server
  const signUp = async (email: string, pass: string, displayName: string, classLevel: ClassLevel = 9) => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanName = displayName.trim() || cleanEmail.split('@')[0] || 'Student Candidate';

    if (!cleanEmail || !cleanEmail.includes('@')) {
      throw new Error('Please enter a valid email address.');
    }
    if (!pass || pass.length < 6) {
      throw new Error('Password must be at least 6 characters.');
    }

    // 1. First: Call server to check duplicate and create server account
    const serverRes = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: cleanEmail,
        password: pass,
        displayName: cleanName,
        classLevel,
      }),
    });

    const serverData = await serverRes.json();
    if (!serverRes.ok || !serverData.success) {
      throw new Error(serverData.error || 'An account with this email already exists. Please sign in instead.');
    }

    const createdServerUser: UserProfile = serverData.user;

    // 2. Also register in Firebase Auth for cloud dual-sync if enabled
    try {
      const cred = await createUserWithEmailAndPassword(auth, cleanEmail, pass);
      if (cred?.user) {
        try {
          await updateProfile(cred.user, { displayName: cleanName });
        } catch {
          // ignore
        }
        try {
          await setDoc(docRefForUser(cred.user.uid), {
            ...createdServerUser,
            uid: cred.user.uid,
          });
        } catch {
          // ignore
        }
      }
    } catch (fbErr: any) {
      console.warn('Firebase Auth registration note:', fbErr?.message);
    }

    saveProfileCache(createdServerUser);
  };

  // Sign In: STRICTLY forbids signing in without an existing signed up account
  const signIn = async (email: string, pass: string) => {
    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail || !pass) {
      throw new Error('Please enter both your email and password.');
    }

    // 1. Verify with Server: checks if user is signed up and verifies password
    let loggedInUser: UserProfile | null = null;
    let serverErrorMessage = '';

    try {
      const serverRes = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: cleanEmail,
          password: pass,
        }),
      });

      const serverData = await serverRes.json();
      if (serverRes.ok && serverData.success && serverData.user) {
        loggedInUser = serverData.user;
      } else {
        serverErrorMessage = serverData.error || '';
      }
    } catch (e: any) {
      serverErrorMessage = e?.message || 'Server connection failed';
    }

    // 2. Sign in to Firebase Auth
    let fbUser: any = null;
    try {
      const cred = await signInWithEmailAndPassword(auth, cleanEmail, pass);
      fbUser = cred.user;
    } catch (fbErr: any) {
      console.warn('Firebase Auth sign in note:', fbErr?.message);
    }

    // 3. If server account wasn't found but Firebase Auth succeeded, auto-sync user to server
    if (!loggedInUser && fbUser) {
      try {
        const syncName = fbUser.displayName || cleanEmail.split('@')[0] || 'Student Candidate';
        const regRes = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: cleanEmail,
            password: pass,
            displayName: syncName,
            classLevel: 9,
          }),
        });
        const regData = await regRes.json();
        if (regData.success && regData.user) {
          loggedInUser = regData.user;
        }
      } catch {
        // ignore
      }
    }

    if (!loggedInUser) {
      throw new Error(serverErrorMessage || 'No registered account found with this email. Please sign up before signing in.');
    }

    saveProfileCache(loggedInUser);
  };

  // Forgot password via Server & Firebase
  const resetPassword = async (email: string) => {
    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail) {
      throw new Error('Please enter your registered email address.');
    }

    // Call server to verify account exists
    const res = await fetch('/api/auth/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: cleanEmail }),
    });

    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.error || 'No registered account found with this email address.');
    }

    try {
      await sendPasswordResetEmail(auth, cleanEmail);
    } catch {
      // Ignore if Firebase operation is in local mode
    }
  };

  // Sign out cleanly
  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
    } catch (e) {
      console.warn('Sign out error:', e);
    }
    saveProfileCache(null);
    setCurrentUser(null);
    setUserProfile(null);
    setLoading(false);
  };

  // Record test attempt into user profile and sync live with server
  const recordTestAttempt = async (historyItem: UserTestHistory) => {
    const current = userProfile;
    const uid = current?.uid || currentUser?.uid || `usr_${Date.now()}`;
    const email = current?.email || currentUser?.email || '';
    const displayName = current?.displayName || currentUser?.displayName || localStorage.getItem('maths_student_name') || 'Student Candidate';

    // 1. Immediately calculate local updated stats for zero-lag UI responsiveness
    const baseHistory = Array.isArray(current?.history) ? current.history : [];
    const filteredHistory = baseHistory.filter((h) => h.id !== historyItem.id);
    const updatedHistory = [historyItem, ...filteredHistory].slice(0, 100);

    const totalQ = updatedHistory.reduce((acc, h) => acc + (Number(h.totalQuestions) || 0), 0);
    const totalC = updatedHistory.reduce((acc, h) => acc + (Number(h.correctCount) || 0), 0);
    const totalW = Math.max(0, totalQ - totalC);
    const accPct = totalQ > 0 ? Math.round((totalC / totalQ) * 100) : 0;

    const locallyUpdatedProfile: UserProfile = {
      uid,
      email,
      displayName,
      classLevel: historyItem.classLevel || current?.classLevel || 9,
      createdAt: current?.createdAt || Date.now(),
      testsAttempted: updatedHistory.length,
      totalQuestionsAnswered: totalQ,
      totalCorrect: totalC,
      totalWrong: totalW,
      accuracy: accPct,
      history: updatedHistory,
    };

    saveProfileCache(locallyUpdatedProfile);

    // 2. Push live sync to server database
    let serverUpdatedProfile: UserProfile = locallyUpdatedProfile;
    try {
      const syncRes = await fetch('/api/auth/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          uid,
          email,
          displayName,
          classLevel: historyItem.classLevel || current?.classLevel || 9,
          historyItem,
        }),
      });

      if (syncRes.ok) {
        const syncData = await syncRes.json();
        if (syncData.success && syncData.user) {
          serverUpdatedProfile = {
            ...syncData.user,
            history: Array.isArray(syncData.user.history) ? syncData.user.history : [],
          };
          saveProfileCache(serverUpdatedProfile);
        }
      }
    } catch (syncErr) {
      console.warn('Server live sync background notice:', syncErr);
    }

    // 3. Dual-sync to Firestore if available
    if (currentUser?.uid) {
      try {
        const userRef = docRefForUser(currentUser.uid);
        await setDoc(userRef, serverUpdatedProfile, { merge: true });
      } catch (err) {
        console.warn('Firestore live sync notice:', err);
      }
    }

    return serverUpdatedProfile;
  };

  const updateUserClass = async (lvl: ClassLevel) => {
    let current = userProfile;
    if (!current) {
      try {
        const cached = localStorage.getItem(LOCAL_USER_KEY);
        if (cached) current = JSON.parse(cached);
      } catch {
        // ignore
      }
    }
    const uid = current?.uid || (currentUser ? currentUser.uid : 'guest_student');
    const email = current?.email || currentUser?.email || 'Local Candidate Session';
    const displayName = current?.displayName || currentUser?.displayName || localStorage.getItem('maths_student_name') || 'Student Candidate';

    const updated: UserProfile = {
      ...(current || {
        uid,
        email,
        displayName,
        createdAt: Date.now(),
        testsAttempted: 0,
        totalQuestionsAnswered: 0,
        totalCorrect: 0,
        totalWrong: 0,
        accuracy: 0,
        history: [],
      }),
      classLevel: lvl,
    };

    saveProfileCache(updated);
    setUserProfile(updated);

    try {
      await fetch('/api/auth/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          uid,
          email,
          classLevel: lvl,
        }),
      });
    } catch {
      // ignore
    }

    if (currentUser?.uid) {
      try {
        await updateDoc(docRefForUser(currentUser.uid), { classLevel: lvl });
      } catch {
        // ignore
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        userProfile,
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

