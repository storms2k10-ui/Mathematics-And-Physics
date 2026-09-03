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
const LEADERBOARD_ARCHIVE_FILE = path.join(DATA_DIR, 'leaderboard_archive.json');
const USERS_FILE = path.join(DATA_DIR, 'users.json');

// Interface for Leaderboard records
interface LeaderboardEntry {
  id: string;
  uid?: string;
  email?: string;
  studentName: string;
  classLevel: number;
  section?: string;
  chapterId?: string;
  chapterName: string;
  mode?: 'practice' | 'exam';
  track?: string;
  difficultyTier?: 'Normal' | 'Advanced' | string;
  correctCount: number;
  totalQuestions: number;
  skippedCount?: number;
  scorePercentage: number;
  timeSpentSeconds: number;
  formattedTime: string;
  timestamp: number;
  formattedDate: string;
  monthKey?: string;
}

// Interface for Server User Test History Item
interface ServerTestHistoryItem {
  id: string;
  chapterId?: string;
  chapterName: string;
  classLevel: number;
  track?: string;
  difficultyTier?: 'Normal' | 'Advanced' | string;
  correctCount: number;
  totalQuestions: number;
  skippedCount?: number;
  scorePercentage: number;
  timeSpentSeconds: number;
  formattedTime: string;
  timestamp: number;
  formattedDate: string;
  monthKey?: string;
}

// Interface for Monthly Progress Summary
interface MonthlyProgressSummary {
  monthKey: string;
  monthName: string;
  testsAttempted: number;
  totalQuestions: number;
  totalCorrect: number;
  totalWrong: number;
  totalSkipped: number;
  accuracy: number;
  history: ServerTestHistoryItem[];
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
  totalSkipped?: number;
  accuracy: number;
  history: ServerTestHistoryItem[];
  lastActive: number;
}

// =========================================================================
// MONTHLY UTILITIES & SCHEDULER HELPERS
// =========================================================================

function getMonthKey(timestamp?: number | string | Date): string {
  const d = timestamp ? new Date(timestamp) : new Date();
  if (isNaN(d.getTime())) {
    const fallback = new Date();
    return `${fallback.getFullYear()}-${String(fallback.getMonth() + 1).padStart(2, '0')}`;
  }
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}`;
}

function getCurrentMonthKey(): string {
  return getMonthKey();
}

function getPreviousMonthKey(referenceDate = new Date()): string {
  const d = new Date(referenceDate.getFullYear(), referenceDate.getMonth() - 1, 1);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}`;
}

function formatMonthName(monthKey: string): string {
  if (!monthKey || !monthKey.includes('-')) return 'Current Month';
  try {
    const [yearStr, monthStr] = monthKey.split('-');
    const year = parseInt(yearStr, 10);
    const month = parseInt(monthStr, 10) - 1;
    const d = new Date(year, month, 1);
    return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  } catch {
    return monthKey;
  }
}

function calculateMonthSummary(history: ServerTestHistoryItem[], targetMonthKey: string): MonthlyProgressSummary {
  const monthItems = (history || []).filter((h) => {
    const itemMonth = h.monthKey || getMonthKey(h.timestamp);
    return itemMonth === targetMonthKey;
  });

  const totalQuestions = monthItems.reduce((acc, h) => acc + (Number(h.totalQuestions) || 0), 0);
  const totalCorrect = monthItems.reduce((acc, h) => acc + (Number(h.correctCount) || 0), 0);
  const totalSkipped = monthItems.reduce((acc, h) => acc + (Number(h.skippedCount) || 0), 0);
  const totalWrong = Math.max(0, totalQuestions - totalCorrect - totalSkipped);
  const attemptedQuestions = totalCorrect + totalWrong;
  const accuracy = attemptedQuestions > 0 
    ? Math.round((totalCorrect / attemptedQuestions) * 100) 
    : (totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0);

  return {
    monthKey: targetMonthKey,
    monthName: formatMonthName(targetMonthKey),
    testsAttempted: monthItems.length,
    totalQuestions,
    totalCorrect,
    totalWrong,
    totalSkipped,
    accuracy,
    history: monthItems.sort((a, b) => (Number(b.timestamp) || 0) - (Number(a.timestamp) || 0)),
  };
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
    if (!fs.existsSync(LEADERBOARD_ARCHIVE_FILE)) {
      fs.writeFileSync(LEADERBOARD_ARCHIVE_FILE, JSON.stringify({}, null, 2), 'utf-8');
    }
    if (!fs.existsSync(USERS_FILE)) {
      fs.writeFileSync(USERS_FILE, JSON.stringify([], null, 2), 'utf-8');
    }
  } catch (err) {
    console.error('Data directory initialization error:', err);
  }
}

function loadArchiveFromFile(): Record<string, LeaderboardEntry[]> {
  try {
    ensureDataFiles();
    if (fs.existsSync(LEADERBOARD_ARCHIVE_FILE)) {
      const content = fs.readFileSync(LEADERBOARD_ARCHIVE_FILE, 'utf-8');
      const parsed = JSON.parse(content);
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
        return parsed;
      }
    }
  } catch (err) {
    console.error('Failed to read leaderboard archive file from disk:', err);
  }
  return {};
}

function saveArchiveToFile(archive: Record<string, LeaderboardEntry[]>): void {
  try {
    ensureDataFiles();
    fs.writeFileSync(LEADERBOARD_ARCHIVE_FILE, JSON.stringify(archive, null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed to save leaderboard archive file to disk:', err);
  }
}

/**
 * Automatically archives previous months' data from active leaderboard
 * and keeps only the current month's entries active.
 */
function processMonthlyLeaderboardRollover(): {
  currentMonth: string;
  archivedMonths: string[];
  archivedCount: number;
  activeCount: number;
} {
  const currentMonth = getCurrentMonthKey();
  const allEntries = loadLeaderboardFromFile();
  const currentMonthEntries: LeaderboardEntry[] = [];
  const olderEntriesByMonth: Record<string, LeaderboardEntry[]> = {};
  let archivedCount = 0;

  for (const entry of allEntries) {
    const entryMonth = entry.monthKey || getMonthKey(entry.timestamp);
    if (entryMonth === currentMonth) {
      currentMonthEntries.push({
        ...entry,
        monthKey: currentMonth,
      });
    } else {
      if (!olderEntriesByMonth[entryMonth]) {
        olderEntriesByMonth[entryMonth] = [];
      }
      olderEntriesByMonth[entryMonth].push(entry);
      archivedCount++;
    }
  }

  const olderMonthKeys = Object.keys(olderEntriesByMonth);
  if (olderMonthKeys.length > 0) {
    const archive = loadArchiveFromFile();
    for (const m of olderMonthKeys) {
      if (!archive[m]) {
        archive[m] = [];
      }
      const existingIds = new Set(archive[m].map((e) => e.id));
      for (const item of olderEntriesByMonth[m]) {
        if (!existingIds.has(item.id)) {
          archive[m].push(item);
          existingIds.add(item.id);
        }
      }
    }
    saveArchiveToFile(archive);
    saveLeaderboardToFile(currentMonthEntries);
    console.log(`[Monthly Rollover] Archived ${archivedCount} entries from previous months (${olderMonthKeys.join(', ')}). Active current month (${currentMonth}) entries: ${currentMonthEntries.length}`);
  }

  return {
    currentMonth,
    archivedMonths: olderMonthKeys,
    archivedCount,
    activeCount: currentMonthEntries.length,
  };
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

// POST /api/auth/signin - Authenticates and synchronizes candidate account with live server
app.post('/api/auth/signin', (req, res) => {
  try {
    const { email, password, uid, displayName, classLevel } = req.body;
    const cleanEmail = String(email || '').trim().toLowerCase();
    const cleanPassword = String(password || '');

    if (!cleanEmail || !cleanPassword) {
      res.status(400).json({ success: false, error: 'Please enter both email and password.' });
      return;
    }

    const users = loadUsersFromFile();

    const userIndex = users.findIndex((u) => u.email === cleanEmail);
    if (userIndex === -1) {
      res.status(404).json({
        success: false,
        error: 'No registered account found with this email. Please create an account to get started.'
      });
      return;
    }

    const user = users[userIndex];

    // Password verification with UID match tolerance for federated/synced users
    const isPasswordValid = verifyPassword(cleanPassword, user.passwordHash);
    const isUidMatch = uid && user.uid === uid;

    if (!isPasswordValid && !isUidMatch) {
      res.status(401).json({
        success: false,
        error: 'Incorrect password. Please verify your credentials and try again.'
      });
      return;
    }

    // Update last active and sync UID
    user.lastActive = Date.now();
    if (uid && user.uid !== uid) {
      user.uid = uid;
    }
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
      currentMonth: calculateMonthSummary(user.history, getCurrentMonthKey()),
      previousMonth: calculateMonthSummary(user.history, getPreviousMonthKey()),
      currentMonthProgress: calculateMonthSummary(user.history, getCurrentMonthKey()),
      previousMonthProgress: calculateMonthSummary(user.history, getPreviousMonthKey()),
      serverSynced: true,
      timestamp: Date.now(),
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err?.message || 'Server error fetching user profile.' });
  }
});

// GET /api/auth/monthly-progress - Authoritative server calculation of current and previous month progress
app.get('/api/auth/monthly-progress', (req, res) => {
  try {
    const { uid, email } = req.query;
    const users = loadUsersFromFile();

    let user: ServerUser | undefined;
    if (uid) {
      user = users.find((u) => u.uid === uid);
    } else if (email) {
      user = users.find((u) => u.email === String(email).trim().toLowerCase());
    }

    const currentMonthKey = getCurrentMonthKey();
    const previousMonthKey = getPreviousMonthKey();

    if (!user) {
      res.json({
        success: true,
        currentMonth: calculateMonthSummary([], currentMonthKey),
        previousMonth: calculateMonthSummary([], previousMonthKey),
        currentMonthProgress: calculateMonthSummary([], currentMonthKey),
        previousMonthProgress: calculateMonthSummary([], previousMonthKey),
        serverSynced: true,
      });
      return;
    }

    const currentMonth = calculateMonthSummary(user.history, currentMonthKey);
    const previousMonth = calculateMonthSummary(user.history, previousMonthKey);

    res.json({
      success: true,
      currentMonth,
      previousMonth,
      currentMonthProgress: currentMonth,
      previousMonthProgress: previousMonth,
      serverSynced: true,
      timestamp: Date.now(),
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err?.message || 'Failed to fetch monthly progress' });
  }
});

// POST /api/auth/sync - Live synchronization of test attempts and profile analytics with monthly segregation
app.post('/api/auth/sync', (req, res) => {
  try {
    const { uid, email, historyItem, classLevel, displayName } = req.body;
    const cleanEmail = email ? String(email).trim().toLowerCase() : '';
    const users = loadUsersFromFile();

    // Ensure historyItem is tagged with monthKey
    if (historyItem) {
      historyItem.monthKey = historyItem.monthKey || getMonthKey(historyItem.timestamp || Date.now());
    }

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

      const currentMonthKey = getCurrentMonthKey();
      const previousMonthKey = getPreviousMonthKey();

      res.json({
        success: true,
        user: sanitizeUser(guestUser),
        currentMonth: calculateMonthSummary(guestUser.history, currentMonthKey),
        previousMonth: calculateMonthSummary(guestUser.history, previousMonthKey),
        currentMonthProgress: calculateMonthSummary(guestUser.history, currentMonthKey),
        previousMonthProgress: calculateMonthSummary(guestUser.history, previousMonthKey),
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
      const totalS = updatedHistory.reduce((acc, h) => acc + (Number(h.skippedCount) || 0), 0);
      const totalW = Math.max(0, totalQ - totalC - totalS);
      const accPct = (totalC + totalW) > 0 ? Math.round((totalC / (totalC + totalW)) * 100) : (totalQ > 0 ? Math.round((totalC / totalQ) * 100) : 0);

      user.history = updatedHistory;
      user.testsAttempted = updatedHistory.length;
      user.totalQuestionsAnswered = totalQ;
      user.totalCorrect = totalC;
      user.totalWrong = totalW;
      user.totalSkipped = totalS;
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

    const currentMonthKey = getCurrentMonthKey();
    const previousMonthKey = getPreviousMonthKey();

    res.json({
      success: true,
      user: sanitizeUser(user),
      currentMonth: calculateMonthSummary(user.history, currentMonthKey),
      previousMonth: calculateMonthSummary(user.history, previousMonthKey),
      currentMonthProgress: calculateMonthSummary(user.history, currentMonthKey),
      previousMonthProgress: calculateMonthSummary(user.history, previousMonthKey),
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
// LEADERBOARD ROUTES WITH MONTHLY REFRESH & ARCHIVING
// ==========================================

// GET Leaderboard from Server (Strictly filtered by month; excludes previous month data from view)
app.get('/api/leaderboard', (req, res) => {
  try {
    const { classLevel, mode, track, month } = req.query;
    
    // Automatically perform rollover of previous month data to archive
    const rollover = processMonthlyLeaderboardRollover();
    const targetMonth = typeof month === 'string' && month ? month : rollover.currentMonth;

    let entries: LeaderboardEntry[] = [];
    if (targetMonth === rollover.currentMonth) {
      entries = loadLeaderboardFromFile();
    } else {
      const archive = loadArchiveFromFile();
      entries = archive[targetMonth] || [];
    }

    // Strictly ensure only entries from targetMonth are in the ranking view
    let filtered = entries.filter((entry) => {
      const entryMonth = entry.monthKey || getMonthKey(entry.timestamp);
      return entryMonth === targetMonth;
    });

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
      month: targetMonth,
      monthName: formatMonthName(targetMonth),
      currentMonth: rollover.currentMonth,
      previousMonth: getPreviousMonthKey(),
      entries: filtered,
      total: filtered.length,
      serverSynced: true,
      timestamp: Date.now(),
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err?.message || 'Server error loading leaderboard' });
  }
});

// POST New Academic Ranking Entry to Server (with month partition)
app.post('/api/leaderboard', (req, res) => {
  try {
    const newEntry = req.body as Partial<LeaderboardEntry>;

    if (!newEntry.studentName || typeof newEntry.scorePercentage !== 'number') {
      res.status(400).json({ success: false, error: 'Invalid ranking data format' });
      return;
    }

    // Rollover any older month entries first
    processMonthlyLeaderboardRollover();

    const timestamp = Number(newEntry.timestamp) || Date.now();
    const currentMonth = getCurrentMonthKey();
    const entryMonth = newEntry.monthKey || getMonthKey(timestamp);

    const validatedEntry: LeaderboardEntry = {
      id: newEntry.id || `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      uid: newEntry.uid,
      email: newEntry.email,
      studentName: String(newEntry.studentName).trim().substring(0, 80),
      classLevel: Number(newEntry.classLevel) || 9,
      section: newEntry.section ? String(newEntry.section).trim().substring(0, 80) : 'Standard',
      chapterId: newEntry.chapterId || 'general_quiz',
      chapterName: newEntry.chapterName ? String(newEntry.chapterName).trim().substring(0, 100) : 'Mathematics',
      mode: newEntry.mode || 'practice',
      track: newEntry.track ? String(newEntry.track).trim() : 'Elementary Mathematics',
      difficultyTier: newEntry.difficultyTier || (newEntry.chapterName && newEntry.chapterName.toLowerCase().includes('advanced') ? 'Advanced' : 'Normal'),
      correctCount: Number(newEntry.correctCount) || 0,
      totalQuestions: Number(newEntry.totalQuestions) || 1,
      skippedCount: Number(newEntry.skippedCount) || 0,
      scorePercentage: Math.max(0, Math.min(100, Number(newEntry.scorePercentage))),
      timeSpentSeconds: Number(newEntry.timeSpentSeconds) || 0,
      formattedTime: newEntry.formattedTime || `${newEntry.timeSpentSeconds || 0}s`,
      timestamp,
      formattedDate: newEntry.formattedDate || 'Just now',
      monthKey: entryMonth,
    };

    // If entry belongs to a previous month, store directly in archive so it doesn't pollute active view
    if (entryMonth !== currentMonth) {
      const archive = loadArchiveFromFile();
      if (!archive[entryMonth]) {
        archive[entryMonth] = [];
      }
      archive[entryMonth].unshift(validatedEntry);
      saveArchiveToFile(archive);

      res.json({
        success: true,
        entry: validatedEntry,
        serverSynced: true,
        archived: true,
        month: entryMonth,
      });
      return;
    }

    let entries = loadLeaderboardFromFile();

    // Store submission in active leaderboard
    const existingIndex = entries.findIndex((e) => e.id === validatedEntry.id);
    if (existingIndex !== -1) {
      entries[existingIndex] = validatedEntry;
    } else {
      entries.unshift(validatedEntry);
    }

    if (entries.length > 5000) {
      entries = entries.slice(0, 5000);
    }

    saveLeaderboardToFile(entries);

    res.json({
      success: true,
      entry: validatedEntry,
      serverSynced: true,
      month: currentMonth,
      totalEntries: entries.length,
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err?.message || 'Server sync failure' });
  }
});

// Refresh Leaderboard: Deletes/archives previous month data from view ranking/leaderboard and syncs new month data
app.post('/api/leaderboard/refresh', (_req, res) => {
  try {
    // 1. Rollover and archive any entries from previous months
    const rollover = processMonthlyLeaderboardRollover();
    const currentMonth = rollover.currentMonth;

    // 2. Re-sync current month test attempts from verified user profiles in users.json
    const users = loadUsersFromFile();
    const activeLeaderboard = loadLeaderboardFromFile();
    const existingIds = new Set(activeLeaderboard.map((e) => e.id));
    const currentMonthEntries: LeaderboardEntry[] = [...activeLeaderboard];

    for (const u of users) {
      if (Array.isArray(u.history) && u.history.length > 0) {
        for (const h of u.history) {
          const itemMonth = h.monthKey || getMonthKey(h.timestamp);
          // Only add entries belonging to the CURRENT month!
          if (itemMonth === currentMonth && !existingIds.has(h.id)) {
            currentMonthEntries.push({
              id: h.id,
              uid: u.uid,
              email: u.email,
              studentName: u.displayName || 'Candidate',
              classLevel: Number(h.classLevel) || Number(u.classLevel) || 9,
              section: 'Standard',
              chapterId: h.chapterId || 'general',
              chapterName: h.chapterName || 'Mathematics Test',
              mode: 'practice',
              track: h.track || 'Elementary Mathematics',
              difficultyTier: h.difficultyTier || (h.chapterName && h.chapterName.toLowerCase().includes('advanced') ? 'Advanced' : 'Normal'),
              correctCount: Number(h.correctCount) || 0,
              totalQuestions: Number(h.totalQuestions) || 1,
              skippedCount: Number(h.skippedCount) || 0,
              scorePercentage: Number(h.scorePercentage) || 0,
              timeSpentSeconds: Number(h.timeSpentSeconds) || 0,
              formattedTime: h.formattedTime || '0m 00s',
              timestamp: Number(h.timestamp) || Date.now(),
              formattedDate: h.formattedDate || 'Recent',
              monthKey: currentMonth,
            });
            existingIds.add(h.id);
          }
        }
      }
    }

    // Guarantee that ONLY current month data remains in active leaderboard
    const cleanedActive = currentMonthEntries.filter((e) => {
      const m = e.monthKey || getMonthKey(e.timestamp);
      return m === currentMonth;
    });

    saveLeaderboardToFile(cleanedActive);

    res.json({
      success: true,
      message: `Leaderboard refreshed for ${formatMonthName(currentMonth)}. Previous month data is archived and new month rankings are active.`,
      currentMonth,
      monthName: formatMonthName(currentMonth),
      totalEntries: cleanedActive.length,
      entries: cleanedActive,
      archivedMonths: rollover.archivedMonths,
      timestamp: Date.now(),
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err?.message || 'Failed to refresh ranking history' });
  }
});

// GET /api/leaderboard/archive - Retrieve archived previous month rankings
app.get('/api/leaderboard/archive', (req, res) => {
  try {
    const { month } = req.query;
    const archive = loadArchiveFromFile();
    const availableMonths = Object.keys(archive).sort().reverse();
    const targetMonth = typeof month === 'string' && month ? month : (availableMonths[0] || getPreviousMonthKey());
    const entries = archive[targetMonth] || [];

    res.json({
      success: true,
      month: targetMonth,
      monthName: formatMonthName(targetMonth),
      availableMonths,
      entries,
      total: entries.length,
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err?.message || 'Failed to load archive' });
  }
});

// Reset Leaderboard (Clears active current month rankings while keeping all user profiles preserved)
app.post('/api/leaderboard/reset', (_req, res) => {
  saveLeaderboardToFile([]);
  res.json({ success: true, message: 'Current month leaderboard reset on server. User profile history remains preserved.', entries: [] });
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


