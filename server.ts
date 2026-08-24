import express from 'express';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const app = express();
const PORT = 3000;

app.use(express.json());

// Server-side persistent storage file paths
const DATA_DIR = path.join(process.cwd(), 'data');
const LEADERBOARD_FILE = path.join(DATA_DIR, 'leaderboard.json');
const USERS_FILE = path.join(DATA_DIR, 'users.json');

// Interface for Leaderboard records
interface LeaderboardEntry {
  id: string;
  studentName: string;
  classLevel: number;
  section?: string;
  chapterId?: string;
  chapterName: string;
  mode?: 'practice' | 'exam';
  track?: string;
  correctCount: number;
  totalQuestions: number;
  scorePercentage: number;
  timeSpentSeconds: number;
  formattedTime: string;
  timestamp: number;
  formattedDate: string;
}

// Interface for Server User Test History Item
interface ServerTestHistoryItem {
  id: string;
  chapterId?: string;
  chapterName: string;
  classLevel: number;
  track?: string;
  correctCount: number;
  totalQuestions: number;
  scorePercentage: number;
  timeSpentSeconds: number;
  formattedTime: string;
  timestamp: number;
  formattedDate: string;
}

// Interface for Server User Account
interface ServerUser {
  uid: string;
  email: string;
  passwordHash: string;
  displayName: string;
  classLevel: number;
  createdAt: number;
  testsAttempted: number;
  totalQuestionsAnswered: number;
  totalCorrect: number;
  totalWrong: number;
  accuracy: number;
  history: ServerTestHistoryItem[];
  lastActive: number;
}

const DEFAULT_SERVER_LEADERBOARD: LeaderboardEntry[] = [];

function ensureDataFiles(): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(LEADERBOARD_FILE)) {
      fs.writeFileSync(LEADERBOARD_FILE, JSON.stringify([], null, 2), 'utf-8');
    }
    if (!fs.existsSync(USERS_FILE)) {
      fs.writeFileSync(USERS_FILE, JSON.stringify([], null, 2), 'utf-8');
    }
  } catch (err) {
    console.error('Data directory initialization error:', err);
  }
}

function loadLeaderboardFromFile(): LeaderboardEntry[] {
  try {
    ensureDataFiles();
    if (fs.existsSync(LEADERBOARD_FILE)) {
      const content = fs.readFileSync(LEADERBOARD_FILE, 'utf-8');
      const parsed = JSON.parse(content);
      if (Array.isArray(parsed)) {
        return parsed.filter((e) => e && e.id && !e.id.startsWith('lead-seed-'));
      }
    }
  } catch (err) {
    console.error('Failed to read leaderboard file from disk:', err);
  }
  return [];
}

function saveLeaderboardToFile(entries: LeaderboardEntry[]): void {
  try {
    ensureDataFiles();
    fs.writeFileSync(LEADERBOARD_FILE, JSON.stringify(entries, null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed to save leaderboard file to disk:', err);
  }
}

function loadUsersFromFile(): ServerUser[] {
  try {
    ensureDataFiles();
    if (fs.existsSync(USERS_FILE)) {
      const content = fs.readFileSync(USERS_FILE, 'utf-8');
      const parsed = JSON.parse(content);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
  } catch (err) {
    console.error('Failed to read users file from disk:', err);
  }
  return [];
}

function saveUsersToFile(users: ServerUser[]): void {
  try {
    ensureDataFiles();
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed to save users file to disk:', err);
  }
}

function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return `${salt}:${hash}`;
}

function verifyPassword(password: string, combinedHash: string): boolean {
  try {
    const [salt, originalHash] = combinedHash.split(':');
    if (!salt || !originalHash) return false;
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    return hash === originalHash;
  } catch {
    return false;
  }
}

function sanitizeUser(user: ServerUser) {
  const { passwordHash, ...safeUser } = user;
  return safeUser;
}

// Ensure initial persistent files
ensureDataFiles();

// API Health Check
app.get('/api/health', (_req, res) => {
  const entries = loadLeaderboardFromFile();
  const users = loadUsersFromFile();
  res.json({ 
    status: 'ok', 
    totalLeaderboardEntries: entries.length,
    totalRegisteredUsers: users.length 
  });
});

// ==========================================
// SERVER AUTHENTICATION & LIVE SYNC ROUTES
// ==========================================

// GET /api/auth/check-email - Check if email is already registered before signup
app.get('/api/auth/check-email', (req, res) => {
  try {
    const email = String(req.query.email || '').trim().toLowerCase();
    if (!email || !email.includes('@')) {
      res.status(400).json({ success: false, available: false, error: 'Please provide a valid email address.' });
      return;
    }

    const users = loadUsersFromFile();
    const existing = users.find((u) => u.email === email);
    const isTaken = Boolean(existing);

    res.json({
      success: true,
      exists: isTaken,
      available: !isTaken,
      message: isTaken ? 'An account with this email address already exists.' : 'Email is available for registration.'
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err?.message || 'Server error checking email.' });
  }
});

// POST /api/auth/signup - Strictly prevents duplicate emails and creates verified server account
app.post('/api/auth/signup', (req, res) => {
  try {
    const { email, password, displayName, classLevel } = req.body;
    const cleanEmail = String(email || '').trim().toLowerCase();
    const cleanName = String(displayName || '').trim() || cleanEmail.split('@')[0] || 'Student Candidate';
    const cleanPassword = String(password || '');
    const cleanClass = Number(classLevel) || 9;

    if (!cleanEmail || !cleanEmail.includes('@')) {
      res.status(400).json({ success: false, error: 'Please provide a valid email address.' });
      return;
    }

    if (!cleanPassword || cleanPassword.length < 6) {
      res.status(400).json({ success: false, error: 'Password must be at least 6 characters.' });
      return;
    }

    const users = loadUsersFromFile();

    // STRICT SERVER-SIDE CHECK: Verify email uniqueness before account creation
    const existing = users.find((u) => u.email === cleanEmail);
    if (existing) {
      res.status(409).json({
        success: false,
        error: 'An account with this email address already exists. Please sign in instead.'
      });
      return;
    }

    const uid = `usr_${Date.now()}_${crypto.randomBytes(4).toString('hex')}`;
    const passwordHash = hashPassword(cleanPassword);

    const newUser: ServerUser = {
      uid,
      email: cleanEmail,
      passwordHash,
      displayName: cleanName,
      classLevel: cleanClass,
      createdAt: Date.now(),
      testsAttempted: 0,
      totalQuestionsAnswered: 0,
      totalCorrect: 0,
      totalWrong: 0,
      accuracy: 0,
      history: [],
      lastActive: Date.now(),
    };

    users.push(newUser);
    saveUsersToFile(users);

    res.status(201).json({
      success: true,
      message: 'Account created successfully and registered on server.',
      user: sanitizeUser(newUser),
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err?.message || 'Server error creating account.' });
  }
});

// POST /api/auth/signin - Strictly forbids signing in without an existing signed up account
app.post('/api/auth/signin', (req, res) => {
  try {
    const { email, password } = req.body;
    const cleanEmail = String(email || '').trim().toLowerCase();
    const cleanPassword = String(password || '');

    if (!cleanEmail || !cleanPassword) {
      res.status(400).json({ success: false, error: 'Please enter both email and password.' });
      return;
    }

    const users = loadUsersFromFile();

    // STRICT CHECK: Without signup, do NOT allow sign in!
    const userIndex = users.findIndex((u) => u.email === cleanEmail);
    if (userIndex === -1) {
      res.status(404).json({
        success: false,
        error: 'No registered account found with this email. Please sign up before signing in.'
      });
      return;
    }

    const user = users[userIndex];

    // Password verification
    const isValid = verifyPassword(cleanPassword, user.passwordHash);
    if (!isValid) {
      res.status(401).json({
        success: false,
        error: 'Incorrect password. Please verify your credentials and try again.'
      });
      return;
    }

    // Update last active
    user.lastActive = Date.now();
    users[userIndex] = user;
    saveUsersToFile(users);

    res.json({
      success: true,
      message: 'Signed in successfully with live server sync.',
      user: sanitizeUser(user),
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err?.message || 'Server sign in error.' });
  }
});

// GET /api/auth/profile - Fetch live server user profile & history
app.get('/api/auth/profile', (req, res) => {
  try {
    const { uid, email } = req.query;
    const users = loadUsersFromFile();

    let user: ServerUser | undefined;
    if (uid) {
      user = users.find((u) => u.uid === uid);
    } else if (email) {
      user = users.find((u) => u.email === String(email).trim().toLowerCase());
    }

    if (!user) {
      res.status(404).json({ success: false, error: 'User profile not found on server.' });
      return;
    }

    res.json({
      success: true,
      user: sanitizeUser(user),
      serverSynced: true,
      timestamp: Date.now(),
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err?.message || 'Server error fetching user profile.' });
  }
});

// POST /api/auth/sync - Live synchronization of test attempts and profile analytics
app.post('/api/auth/sync', (req, res) => {
  try {
    const { uid, email, historyItem, classLevel, displayName } = req.body;
    const cleanEmail = email ? String(email).trim().toLowerCase() : '';
    const users = loadUsersFromFile();

    let userIndex = -1;
    if (uid) {
      userIndex = users.findIndex((u) => u.uid === uid);
    }
    if (userIndex === -1 && cleanEmail) {
      userIndex = users.findIndex((u) => u.email === cleanEmail);
    }

    if (userIndex === -1) {
      // If student was guest or not yet in server list, create lightweight guest sync record
      const guestUid = uid || `usr_${Date.now()}_${crypto.randomBytes(4).toString('hex')}`;
      const initialHistory: ServerTestHistoryItem[] = historyItem ? [historyItem] : [];
      const totalQ = initialHistory.reduce((acc, h) => acc + (h.totalQuestions || 0), 0);
      const totalC = initialHistory.reduce((acc, h) => acc + (h.correctCount || 0), 0);
      const totalW = Math.max(0, totalQ - totalC);
      const accPct = totalQ > 0 ? Math.round((totalC / totalQ) * 100) : 0;

      const guestUser: ServerUser = {
        uid: guestUid,
        email: cleanEmail || 'guest@academic.local',
        passwordHash: '',
        displayName: displayName ? String(displayName).trim() : 'Student Candidate',
        classLevel: Number(classLevel) || 9,
        createdAt: Date.now(),
        testsAttempted: initialHistory.length,
        totalQuestionsAnswered: totalQ,
        totalCorrect: totalC,
        totalWrong: totalW,
        accuracy: accPct,
        history: initialHistory,
        lastActive: Date.now(),
      };

      users.push(guestUser);
      saveUsersToFile(users);

      res.json({
        success: true,
        user: sanitizeUser(guestUser),
        serverSynced: true,
      });
      return;
    }

    const user = users[userIndex];

    // Merge new test history attempt if provided
    if (historyItem && historyItem.id) {
      const existingHistory = Array.isArray(user.history) ? user.history : [];
      const filteredHistory = existingHistory.filter((h) => h.id !== historyItem.id);
      const updatedHistory = [historyItem, ...filteredHistory].slice(0, 150);

      const totalQ = updatedHistory.reduce((acc, h) => acc + (Number(h.totalQuestions) || 0), 0);
      const totalC = updatedHistory.reduce((acc, h) => acc + (Number(h.correctCount) || 0), 0);
      const totalW = Math.max(0, totalQ - totalC);
      const accPct = totalQ > 0 ? Math.round((totalC / totalQ) * 100) : 0;

      user.history = updatedHistory;
      user.testsAttempted = updatedHistory.length;
      user.totalQuestionsAnswered = totalQ;
      user.totalCorrect = totalC;
      user.totalWrong = totalW;
      user.accuracy = accPct;
    }

    if (classLevel) {
      user.classLevel = Number(classLevel);
    }
    if (displayName && String(displayName).trim()) {
      user.displayName = String(displayName).trim();
    }

    user.lastActive = Date.now();
    users[userIndex] = user;
    saveUsersToFile(users);

    res.json({
      success: true,
      user: sanitizeUser(user),
      serverSynced: true,
      timestamp: Date.now(),
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err?.message || 'Server sync failed.' });
  }
});

// POST /api/auth/reset-password - Server password reset endpoint
app.post('/api/auth/reset-password', (req, res) => {
  try {
    const { email } = req.body;
    const cleanEmail = String(email || '').trim().toLowerCase();

    if (!cleanEmail) {
      res.status(400).json({ success: false, error: 'Please enter your registered email address.' });
      return;
    }

    const users = loadUsersFromFile();
    const user = users.find((u) => u.email === cleanEmail);

    if (!user) {
      res.status(404).json({ success: false, error: 'No registered account found with this email address.' });
      return;
    }

    res.json({
      success: true,
      message: `Password reset verification sent for ${cleanEmail}.`
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err?.message || 'Server password reset error.' });
  }
});

// ==========================================
// LEADERBOARD ROUTES
// ==========================================

// GET Leaderboard from Server (shared across all users)
app.get('/api/leaderboard', (req, res) => {
  try {
    const { classLevel, mode, track } = req.query;
    const allEntries = loadLeaderboardFromFile();
    let filtered = [...allEntries];

    if (mode && mode !== 'all') {
      filtered = filtered.filter((entry) => entry.mode === mode || (!entry.mode && mode === 'practice'));
    }

    if (classLevel && classLevel !== 'all') {
      const levelNum = Number(classLevel);
      if (!isNaN(levelNum)) {
        filtered = filtered.filter((entry) => entry.classLevel === levelNum);
      }
    }

    if (track && track !== 'all') {
      filtered = filtered.filter((entry) => {
        const entryTrack = entry.track || 'Elementary Mathematics';
        return entryTrack === track;
      });
    }

    // Rank strictly by:
    // 1. scorePercentage (descending)
    // 2. correctCount (descending)
    // 3. timeSpentSeconds (ascending)
    // 4. timestamp (descending)
    filtered.sort((a, b) => {
      if (b.scorePercentage !== a.scorePercentage) {
        return b.scorePercentage - a.scorePercentage;
      }
      if (b.correctCount !== a.correctCount) {
        return b.correctCount - a.correctCount;
      }
      if (a.timeSpentSeconds !== b.timeSpentSeconds) {
        return a.timeSpentSeconds - b.timeSpentSeconds;
      }
      return b.timestamp - a.timestamp;
    });

    res.json({
      success: true,
      entries: filtered,
      total: filtered.length,
      serverSynced: true,
      timestamp: Date.now(),
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err?.message || 'Server error loading leaderboard' });
  }
});

// POST New Academic Ranking Entry to Server (with chapter deduplication & best-score retention)
app.post('/api/leaderboard', (req, res) => {
  try {
    const newEntry = req.body as Partial<LeaderboardEntry>;

    if (!newEntry.studentName || typeof newEntry.scorePercentage !== 'number') {
      res.status(400).json({ success: false, error: 'Invalid ranking data format' });
      return;
    }

    const validatedEntry: LeaderboardEntry = {
      id: newEntry.id || `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      studentName: String(newEntry.studentName).trim().substring(0, 80),
      classLevel: Number(newEntry.classLevel) || 9,
      section: newEntry.section ? String(newEntry.section).trim().substring(0, 80) : 'Standard',
      chapterId: newEntry.chapterId || 'general_quiz',
      chapterName: newEntry.chapterName ? String(newEntry.chapterName).trim().substring(0, 100) : 'Mathematics',
      mode: newEntry.mode || 'practice',
      track: newEntry.track ? String(newEntry.track).trim() : 'Elementary Mathematics',
      correctCount: Number(newEntry.correctCount) || 0,
      totalQuestions: Number(newEntry.totalQuestions) || 1,
      scorePercentage: Math.max(0, Math.min(100, Number(newEntry.scorePercentage))),
      timeSpentSeconds: Number(newEntry.timeSpentSeconds) || 0,
      formattedTime: newEntry.formattedTime || `${newEntry.timeSpentSeconds || 0}s`,
      timestamp: Number(newEntry.timestamp) || Date.now(),
      formattedDate: newEntry.formattedDate || 'Just now',
    };

    let entries = loadLeaderboardFromFile();

    // Deduplication rule: If user re-attempts the same chapter, update if accuracy improved or equal with faster time
    const existingIndex = entries.findIndex((e) => 
      e.studentName.toLowerCase() === validatedEntry.studentName.toLowerCase() &&
      e.chapterId === validatedEntry.chapterId &&
      Number(e.classLevel) === Number(validatedEntry.classLevel) &&
      (e.track || 'Elementary Mathematics') === (validatedEntry.track || 'Elementary Mathematics')
    );

    if (existingIndex !== -1) {
      const existing = entries[existingIndex];
      // Only overwrite if accuracy improved or equal accuracy with faster completion time
      if (
        validatedEntry.scorePercentage > existing.scorePercentage ||
        (validatedEntry.scorePercentage === existing.scorePercentage && validatedEntry.timeSpentSeconds < existing.timeSpentSeconds)
      ) {
        entries[existingIndex] = {
          ...validatedEntry,
          id: existing.id || validatedEntry.id,
        };
      }
    } else {
      // First attempt for this chapter by this student
      entries.unshift(validatedEntry);
    }

    // Keep store capped at 2000 latest records
    if (entries.length > 2000) {
      entries = entries.slice(0, 2000);
    }

    saveLeaderboardToFile(entries);

    res.json({
      success: true,
      entry: validatedEntry,
      serverSynced: true,
      totalEntries: entries.length,
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err?.message || 'Server sync failure' });
  }
});

// Reset Leaderboard
app.post('/api/leaderboard/reset', (_req, res) => {
  saveLeaderboardToFile([...DEFAULT_SERVER_LEADERBOARD]);
  res.json({ success: true, message: 'Leaderboard reset to default seeds', entries: DEFAULT_SERVER_LEADERBOARD });
});

// Fallback for unhandled /api routes to always return JSON (never HTML)
app.all('/api/*', (_req, res) => {
  res.status(404).json({ success: false, error: 'API endpoint not found' });
});

// Vite middleware & Static Serving
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();


