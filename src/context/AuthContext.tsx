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
import { safeFetchJson } from '../lib/apiHelper';

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
const HAS_SIGNED_UP_KEY = 'math_app_has_signed_up';
const LAST_EMAIL_KEY = 'math_app_last_email';
const REGISTERED_USERS_KEY = 'maths_local_registered_users';

/**
 * Checks whether a student candidate has registered an account on this browser.
 */
export function hasUserSignedUp(): boolean {
  try {
    if (localStorage.getItem(HAS_SIGNED_UP_KEY) === 'true') return true;
    if (localStorage.getItem(LOCAL_USER_KEY)) return true;
    if (localStorage.getItem('mathematics_user_profile')) return true;
    const registered = localStorage.getItem(REGISTERED_USERS_KEY);
    if (registered) {
      const parsed = JSON.parse(registered);
      if (Array.isArray(parsed) && parsed.length > 0) return true;
    }
    if (localStorage.getItem(LAST_EMAIL_KEY)) return true;
  } catch {
    // ignore
  }
  return false;
}

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
        localStorage.setItem(HAS_SIGNED_UP_KEY, 'true');
        if (profile.email) {
          localStorage.setItem(LAST_EMAIL_KEY, profile.email);
        }
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
      const res = await safeFetchJson<{ success?: boolean; user?: UserProfile }>(`/api/auth/profile?${query}`);
      if (res.ok && res.data?.success && res.data?.user) {
        const syncedUser: UserProfile = {
          ...res.data.user,
          history: Array.isArray(res.data.user.history) ? res.data.user.history : [],
        };
        saveProfileCache(syncedUser);
        return syncedUser;
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

    // 1. Check local registered user records
    try {
      const regRaw = localStorage.getItem(REGISTERED_USERS_KEY);
      if (regRaw) {
        const regList = JSON.parse(regRaw);
        if (Array.isArray(regList) && regList.some((u: any) => u.email === cleanEmail)) {
          return { exists: true, available: false, error: 'An account with this email address already exists. Please sign in instead.' };
        }
      }
    } catch {
      // ignore
    }

    // 2. Check server
    try {
      const res = await safeFetchJson<{ exists?: boolean; available?: boolean; error?: string; success?: boolean }>(
        `/api/auth/check-email?email=${encodeURIComponent(cleanEmail)}`
      );
      if (res.ok && res.data?.success) {
        return { exists: Boolean(res.data.exists), available: Boolean(res.data.available) };
      }
      return { exists: false, available: true };
    } catch {
      return { exists: false, available: true };
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
        const srvRes = await safeFetchJson<{ success?: boolean; user?: UserProfile }>(
          `/api/auth/profile?email=${encodeURIComponent(user.email || '')}&uid=${encodeURIComponent(user.uid)}`
        );
        if (srvRes.ok && srvRes.data?.success && srvRes.data?.user) {
          saveProfileCache({
            ...srvRes.data.user,
            history: Array.isArray(srvRes.data.user.history) ? srvRes.data.user.history : [],
          });
          return;
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
            // Verify and sync live with server safely
            if (parsed.email || parsed.uid) {
              const query = parsed.uid ? `uid=${encodeURIComponent(parsed.uid)}` : `email=${encodeURIComponent(parsed.email)}`;
              safeFetchJson<{ success?: boolean; user?: UserProfile }>(`/api/auth/profile?${query}`)
                .then((res) => {
                  if (res.ok && res.data?.success && res.data?.user) {
                    saveProfileCache(res.data.user);
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

  // Email-based Sign Up: Resilient registration supporting Firebase Auth, Firestore, and Server sync
  const signUp = async (email: string, pass: string, displayName: string, classLevel: ClassLevel = 9) => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanName = displayName.trim() || cleanEmail.split('@')[0] || 'Student Candidate';

    if (!cleanEmail || !cleanEmail.includes('@')) {
      throw new Error('Please enter a valid email address.');
    }
    if (!pass || pass.length < 6) {
      throw new Error('Password must be at least 6 characters.');
    }

    // 1. Check local registered user cache for duplicate email
    try {
      const regRaw = localStorage.getItem(REGISTERED_USERS_KEY);
      if (regRaw) {
        const regList = JSON.parse(regRaw);
        if (Array.isArray(regList) && regList.some((u: any) => u.email === cleanEmail)) {
          throw new Error('An account with this email address already exists. Please sign in instead.');
        }
      }
    } catch (err: any) {
      if (err.message && err.message.includes('already exists')) throw err;
    }

    let createdUser: UserProfile | null = null;
    let firebaseUser: FirebaseUser | null = null;

    // 2. Primary: Firebase Authentication Account Creation
    try {
      const cred = await createUserWithEmailAndPassword(auth, cleanEmail, pass);
      if (cred?.user) {
        firebaseUser = cred.user;
        try {
          await updateProfile(cred.user, { displayName: cleanName });
        } catch {
          // ignore
        }
      }
    } catch (fbErr: any) {
      if (fbErr.code === 'auth/email-already-in-use') {
        throw new Error('An account with this email address already exists. Please sign in instead.');
      }
      console.warn('Firebase Auth registration note:', fbErr?.message);
    }

    const uid = firebaseUser?.uid || `usr_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;

    const newUser: UserProfile = {
      uid,
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

    // 3. Server Registration (Graceful fallback if server unavailable or running in static preview)
    try {
      const serverRes = await safeFetchJson<{ success?: boolean; user?: UserProfile; error?: string }>('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: cleanEmail,
          password: pass,
          displayName: cleanName,
          classLevel,
        }),
      });

      if (serverRes.status === 409 || (serverRes.data?.error && serverRes.data.error.includes('already exists'))) {
        throw new Error('An account with this email address already exists. Please sign in instead.');
      }

      if (serverRes.ok && serverRes.data?.success && serverRes.data?.user) {
        createdUser = {
          ...serverRes.data.user,
          history: Array.isArray(serverRes.data.user.history) ? serverRes.data.user.history : [],
        };
      }
    } catch (srvErr: any) {
      if (srvErr.message && srvErr.message.includes('already exists')) {
        throw srvErr;
      }
      console.warn('Server background signup note (using cloud/local sync):', srvErr?.message);
    }

    const finalProfile: UserProfile = createdUser || newUser;

    // 4. Save to Firestore
    if (firebaseUser?.uid) {
      try {
        await setDoc(docRefForUser(firebaseUser.uid), finalProfile, { merge: true });
      } catch (fsErr) {
        console.warn('Firestore user save note:', fsErr);
      }
    }

    // 5. Save in local registered users cache
    try {
      const regRaw = localStorage.getItem(REGISTERED_USERS_KEY);
      const regList = regRaw ? JSON.parse(regRaw) : [];
      if (Array.isArray(regList) && !regList.some((u: any) => u.email === cleanEmail)) {
        regList.push({
          uid: finalProfile.uid,
          email: cleanEmail,
          displayName: cleanName,
          classLevel,
          passHash: btoa(pass),
        });
        localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(regList));
      }
    } catch {
      // ignore
    }

    saveProfileCache(finalProfile);
  };

  // Sign In: Validates with Firebase Auth, Server, and local credentials
  const signIn = async (email: string, pass: string) => {
    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail || !pass) {
      throw new Error('Please enter both your email and password.');
    }

    let loggedInUser: UserProfile | null = null;
    let serverErrorMessage = '';

    // 1. Try Firebase Auth
    let fbUser: any = null;
    try {
      const cred = await signInWithEmailAndPassword(auth, cleanEmail, pass);
      fbUser = cred.user;
    } catch (fbErr: any) {
      console.warn('Firebase Auth sign in note:', fbErr?.code || fbErr?.message);
    }

    // 2. Try Server API
    try {
      const serverRes = await safeFetchJson<{ success?: boolean; user?: UserProfile; error?: string }>('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: cleanEmail,
          password: pass,
        }),
      });

      if (serverRes.ok && serverRes.data?.success && serverRes.data?.user) {
        loggedInUser = serverRes.data.user;
      } else if (serverRes.data?.error) {
        serverErrorMessage = serverRes.data.error;
      }
    } catch (e: any) {
      serverErrorMessage = e?.message || '';
    }

    // 3. If Firebase succeeded, fetch or construct profile
    if (fbUser && !loggedInUser) {
      try {
        const snap = await getDoc(docRefForUser(fbUser.uid));
        if (snap.exists()) {
          loggedInUser = snap.data() as UserProfile;
        } else {
          loggedInUser = {
            uid: fbUser.uid,
            email: cleanEmail,
            displayName: fbUser.displayName || cleanEmail.split('@')[0] || 'Student Candidate',
            classLevel: 9,
            createdAt: Date.now(),
            testsAttempted: 0,
            totalQuestionsAnswered: 0,
            totalCorrect: 0,
            totalWrong: 0,
            accuracy: 0,
            history: [],
          };
          await setDoc(docRefForUser(fbUser.uid), loggedInUser, { merge: true });
        }
      } catch {
        // ignore
      }
    }

    // 4. Fallback: Local registered users cache
    if (!loggedInUser) {
      try {
        const regRaw = localStorage.getItem(REGISTERED_USERS_KEY);
        if (regRaw) {
          const regList = JSON.parse(regRaw);
          if (Array.isArray(regList)) {
            const found = regList.find((u: any) => u.email === cleanEmail);
            if (found && (!found.passHash || found.passHash === btoa(pass))) {
              loggedInUser = {
                uid: found.uid || `usr_${Date.now()}`,
                email: cleanEmail,
                displayName: found.displayName || cleanEmail.split('@')[0] || 'Student Candidate',
                classLevel: found.classLevel || 9,
                createdAt: Date.now(),
                testsAttempted: 0,
                totalQuestionsAnswered: 0,
                totalCorrect: 0,
                totalWrong: 0,
                accuracy: 0,
                history: [],
              };
            }
          }
        }
      } catch {
        // ignore
      }
    }

    if (!loggedInUser) {
      if (serverErrorMessage && serverErrorMessage.toLowerCase().includes('password')) {
        throw new Error('Invalid password. Please check your credentials.');
      }
      throw new Error('No registered account found with this email. Please sign up before signing in.');
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
    const res = await safeFetchJson<{ success?: boolean; error?: string }>('/api/auth/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: cleanEmail }),
    });

    if (!res.ok || !res.data?.success) {
      throw new Error(res.data?.error || res.error || 'No registered account found with this email address.');
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
      const syncRes = await safeFetchJson<{ success?: boolean; user?: UserProfile }>('/api/auth/sync', {
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

      if (syncRes.ok && syncRes.data?.success && syncRes.data?.user) {
        serverUpdatedProfile = {
          ...syncRes.data.user,
          history: Array.isArray(syncRes.data.user.history) ? syncRes.data.user.history : [],
        };
        saveProfileCache(serverUpdatedProfile);
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
      await safeFetchJson('/api/auth/sync', {
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

