import React, { useState, useEffect } from 'react';
import { 
  X, 
  Mail, 
  Lock, 
  User, 
  GraduationCap, 
  ArrowRight, 
  Sparkles, 
  AlertCircle, 
  CheckCircle2, 
  KeyRound,
  LogIn,
  UserPlus
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { ClassLevel } from '../types';
import { MathText } from './MathText';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  initialMode?: 'signin' | 'signup' | 'forgot';
  customTitle?: string;
  customSubtitle?: string;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  initialMode,
  customTitle,
  customSubtitle,
}) => {
  const { signIn, signUp, resetPassword, checkEmailUniqueness } = useAuth();
  
  const [mode, setMode] = useState<'signin' | 'signup' | 'forgot'>(initialMode || 'signin');
  
  // Form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [classLevel, setClassLevel] = useState<ClassLevel>(9);
  
  // State
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [emailCheckStatus, setEmailCheckStatus] = useState<'idle' | 'checking' | 'available' | 'taken'>('idle');

  useEffect(() => {
    if (isOpen) {
      const targetMode = initialMode || 'signin';
      setMode(targetMode);
      setLoading(false);
      setError(null);
      setSuccessMsg(null);
      setEmailCheckStatus('idle');
    }
  }, [isOpen, initialMode]);

  // Check email uniqueness on blur for sign up
  const handleEmailBlur = async () => {
    if (mode !== 'signup' || !email.trim() || !email.includes('@')) {
      return;
    }
    setEmailCheckStatus('checking');
    try {
      const result = await checkEmailUniqueness(email);
      if (result.exists) {
        setEmailCheckStatus('taken');
        setError('An account with this email address already exists. Please sign in instead.');
      } else if (result.available) {
        setEmailCheckStatus('available');
        if (error && error.includes('already exists')) {
          setError(null);
        }
      } else {
        setEmailCheckStatus('idle');
      }
    } catch {
      setEmailCheckStatus('idle');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);
    setLoading(true);

    try {
      if (mode === 'signup') {
        if (!email.trim() || !password || !name.trim()) {
          setError('Please fill in all required fields.');
          setLoading(false);
          return;
        }
        if (password.length < 6) {
          setError('Password must be at least 6 characters.');
          setLoading(false);
          return;
        }

        // Server pre-check for email uniqueness
        const uniqueCheck = await checkEmailUniqueness(email);
        if (uniqueCheck.exists) {
          setEmailCheckStatus('taken');
          setError('An account with this email address already exists. Please sign in instead.');
          setLoading(false);
          return;
        }

        await signUp(email, password, name, classLevel);
        setSuccessMsg('Scholar account created successfully!');
        setLoading(false);
        setTimeout(() => {
          onClose();
          if (onSuccess) onSuccess();
        }, 600);
      } else if (mode === 'signin') {
        if (!email.trim() || !password) {
          setError('Please enter your email and password.');
          setLoading(false);
          return;
        }
        await signIn(email, password);
        setSuccessMsg('Signed in successfully!');
        setLoading(false);
        setTimeout(() => {
          onClose();
          if (onSuccess) onSuccess();
        }, 600);
      } else if (mode === 'forgot') {
        if (!email.trim()) {
          setError('Please enter your registered email address.');
          setLoading(false);
          return;
        }
        await resetPassword(email);
        setSuccessMsg(`Password reset link sent to ${email.trim()}. Please check your inbox.`);
        setLoading(false);
      }
    } catch (err: any) {
      console.error('Auth error:', err);
      let msg = 'Authentication failed. Please try again.';
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential' || err.code === 'auth/invalid-login-credentials') {
        msg = 'Invalid email or password. Please verify credentials.';
      } else if (err.code === 'auth/email-already-in-use' || (err.message && err.message.includes('already exists'))) {
        setEmailCheckStatus('taken');
        msg = 'An account with this email already exists. Please sign in instead.';
      } else if (err.code === 'auth/invalid-email') {
        msg = 'Please enter a valid email address.';
      } else if (err.code === 'auth/weak-password') {
        msg = 'Password is too weak. Please use at least 6 characters.';
      } else if (err.code === 'auth/operation-not-allowed') {
        msg = 'Sign in service is operating in local mode. Please try signing in again.';
      } else if (err.message) {
        msg = err.message;
      }
      setError(msg);
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950/90 text-white rounded-3xl border border-indigo-500/30 shadow-[0_25px_60px_-15px_rgba(79,70,229,0.35)] w-full max-w-md overflow-hidden flex flex-col max-h-[92vh] relative ring-1 ring-white/10">
        
        {/* Dynamic Celestial Mathematical Header Banner */}
        <div className={`p-6 text-white relative overflow-hidden transition-all duration-500 border-b border-white/10 ${
          mode === 'signup'
            ? 'bg-gradient-to-br from-indigo-600 via-purple-600 to-emerald-600'
            : mode === 'forgot'
            ? 'bg-gradient-to-br from-amber-600 via-purple-700 to-indigo-800'
            : 'bg-gradient-to-br from-indigo-700 via-indigo-900 to-cyan-800'
        }`}>
          {/* Glowing background shapes and formula motifs */}
          <div className="absolute -top-10 -right-10 w-36 h-36 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />

          {/* Mathematical Geometry & Formula Symbols Artwork Layer rendered with KaTeX */}
          <div className="absolute inset-0 opacity-25 font-mono text-xs font-black select-none pointer-events-none overflow-hidden flex flex-wrap gap-3 items-center justify-between p-3">
            <span><MathText text="$\sum_{r=1}^n r^2 = \frac{n(n+1)(2n+1)}{6}$" /></span>
            <span><MathText text="$\int_0^\infty e^{-x^2}dx = \frac{\sqrt{\pi}}{2}$" /></span>
            <span><MathText text="$\pi \approx 3.14159$" /></span>
            <span><MathText text="$e^{i\pi}+1=0$" /></span>
            <span><MathText text="$\lim_{x\to 0}\frac{\sin x}{x}=1$" /></span>
            <span><MathText text="$z = a + ib$" /></span>
            <span><MathText text="$\phi = \frac{1+\sqrt{5}}{2}$" /></span>
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-white/80 hover:text-white bg-black/20 hover:bg-black/40 backdrop-blur-sm transition-colors cursor-pointer z-10 border border-white/10"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3.5 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shadow-lg shadow-black/20">
              {mode === 'signup' ? (
                <UserPlus className="w-6 h-6 text-emerald-300" />
              ) : mode === 'forgot' ? (
                <KeyRound className="w-6 h-6 text-amber-300" />
              ) : (
                <LogIn className="w-6 h-6 text-cyan-300" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-wider uppercase bg-white/20 text-cyan-200 border border-white/20 shadow-xs">
                  Mathematics Portal
                </span>
                <span className="text-[11px] text-white/80 font-semibold">
                  {mode === 'signup' ? 'New Scholar' : mode === 'forgot' ? 'Recovery' : 'Scholar Portal'}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white mt-0.5 drop-shadow-sm">
                {customTitle || (mode === 'signup' ? 'Create Scholar Account' : mode === 'forgot' ? 'Reset Password' : 'Sign In to Account')}
              </h2>
            </div>
          </div>

          <p className="mt-2.5 text-xs text-white/90 leading-relaxed relative z-10 max-w-sm font-medium">
            {customSubtitle || (mode === 'signup'
              ? 'Join to record test attempts, track accuracy, practice formulas, and rank on leaderboard.'
              : mode === 'forgot'
              ? 'Enter your email to receive password reset instructions.'
              : 'Sign in to access your practice history, formula repository, and synchronized rankings.')}
          </p>
        </div>

        {/* Tab Switcher with Attractive Gradient Styling */}
        <div className="flex border-b border-white/10 bg-slate-950/80 p-2 gap-2">
          <button
            type="button"
            onClick={() => {
              setMode('signup');
              setError(null);
              setSuccessMsg(null);
            }}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              mode === 'signup'
                ? 'bg-gradient-to-r from-indigo-600 to-emerald-600 text-white shadow-lg shadow-emerald-600/30 border border-emerald-400/30'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Sign Up</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('signin');
              setError(null);
              setSuccessMsg(null);
            }}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              mode === 'signin'
                ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-600/30 border border-cyan-400/30'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>Sign In</span>
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto">
          {error && (
            <div className="p-3.5 rounded-2xl bg-rose-950/90 border border-rose-500/50 text-rose-200 text-xs font-semibold flex flex-col gap-2.5 shadow-md animate-fade-in">
              <div className="flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
                <span className="leading-relaxed">{error}</span>
              </div>
              {mode === 'signin' && (error.toLowerCase().includes('sign up') || error.toLowerCase().includes('no registered account') || error.toLowerCase().includes('not found')) && (
                <div className="pl-6.5 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setMode('signup');
                      setError(null);
                      if (!name && email) {
                        setName(email.split('@')[0]);
                      }
                    }}
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer"
                  >
                    <UserPlus className="w-3.5 h-3.5" />
                    <span>Create Account with {email || 'this email'}</span>
                  </button>
                </div>
              )}
              {mode === 'signup' && (error.toLowerCase().includes('already exists') || error.toLowerCase().includes('sign in')) && (
                <div className="pl-6.5 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setMode('signin');
                      setError(null);
                    }}
                    className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-[11px] transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer"
                  >
                    <LogIn className="w-3.5 h-3.5" />
                    <span>Sign In with {email || 'this email'}</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {successMsg && (
            <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-xs font-semibold flex items-center gap-2 shadow-sm">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Full Name for Sign Up */}
          {mode === 'signup' && (
            <div className="space-y-1">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                Full Name <span className="text-rose-400">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-indigo-300 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Mahtab Ahmed"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-indigo-500/30 bg-slate-950/70 text-white text-xs font-medium focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-hidden placeholder:text-slate-500"
                />
              </div>
            </div>
          )}

          {/* Email Address */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                Email Address <span className="text-rose-400">*</span>
              </label>
              {mode === 'signup' && emailCheckStatus === 'checking' && (
                <span className="text-[10px] font-semibold text-cyan-300 animate-pulse">
                  Checking uniqueness...
                </span>
              )}
              {mode === 'signup' && emailCheckStatus === 'available' && (
                <span className="text-[10px] font-semibold text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Available
                </span>
              )}
              {mode === 'signup' && emailCheckStatus === 'taken' && (
                <span className="text-[10px] font-semibold text-rose-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> Already registered
                </span>
              )}
            </div>
            <div className="relative">
              <Mail className="w-4 h-4 text-indigo-300 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailCheckStatus !== 'idle') setEmailCheckStatus('idle');
                }}
                onBlur={handleEmailBlur}
                placeholder="student@example.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-indigo-500/30 bg-slate-950/70 text-white text-xs font-medium focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-hidden placeholder:text-slate-500"
              />
            </div>
          </div>

          {/* Password (for Sign In & Sign Up) */}
          {mode !== 'forgot' && (
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Password <span className="text-rose-400">*</span>
                </label>
                {mode === 'signin' && (
                  <button
                    type="button"
                    onClick={() => {
                      setMode('forgot');
                      setError(null);
                      setSuccessMsg(null);
                    }}
                    className="text-[11px] font-bold text-cyan-400 hover:text-cyan-300 hover:underline cursor-pointer"
                  >
                    Forgot Password?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-indigo-300 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-indigo-500/30 bg-slate-950/70 text-white text-xs font-medium focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-hidden placeholder:text-slate-500"
                />
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-6 rounded-xl text-white font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 ${
                mode === 'signup'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-emerald-600/30'
                  : mode === 'forgot'
                  ? 'bg-gradient-to-r from-amber-600 to-purple-600 hover:from-amber-500 hover:to-purple-500 shadow-amber-600/30'
                  : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-indigo-600/30'
              }`}
            >
              {loading ? (
                <span>Please wait...</span>
              ) : mode === 'signup' ? (
                <>
                  <span>Create Account &amp; Proceed</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              ) : mode === 'forgot' ? (
                <>
                  <span>Send Reset Email</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>Sign In &amp; Proceed</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          {/* Bottom Switcher */}
          <div className="text-center pt-2 text-xs text-slate-400">
            {mode === 'signin' ? (
              <p>
                Don&apos;t have an account?{' '}
                <button
                  type="button"
                  onClick={() => setMode('signup')}
                  className="font-bold text-cyan-400 hover:text-cyan-300 hover:underline cursor-pointer"
                >
                  Sign Up here
                </button>
              </p>
            ) : mode === 'signup' ? (
              <p>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => setMode('signin')}
                  className="font-bold text-emerald-400 hover:text-emerald-300 hover:underline cursor-pointer"
                >
                  Sign In here
                </button>
              </p>
            ) : (
              <p>
                Remembered your password?{' '}
                <button
                  type="button"
                  onClick={() => setMode('signin')}
                  className="font-bold text-cyan-400 hover:text-cyan-300 hover:underline cursor-pointer"
                >
                  Return to Sign In
                </button>
              </p>
            )}
          </div>
        </form>

      </div>
    </div>
  );
};

