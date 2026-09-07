import React, { useState, useEffect } from 'react';
import { 
  KeyRound, 
  Lock, 
  Mail, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  AlertCircle, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  Loader2, 
  RefreshCw 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface ResetPasswordViewProps {
  onNavigateToLogin: (prefillEmail?: string) => void;
  onNavigateHome: () => void;
}

export const ResetPasswordView: React.FC<ResetPasswordViewProps> = ({
  onNavigateToLogin,
  onNavigateHome,
}) => {
  const { verifyResetCode, confirmResetPassword, resetPassword } = useAuth();

  // URL extracted parameters
  const [oobCode, setOobCode] = useState<string>('');
  const [initialMode, setInitialMode] = useState<string>('');

  // Page state: 'verifying' | 'ready' | 'error' | 'request' | 'success'
  const [stage, setStage] = useState<'verifying' | 'ready' | 'error' | 'request' | 'success'>('request');
  const [errorType, setErrorType] = useState<'expired' | 'invalid' | 'generic'>('generic');
  const [verifiedEmail, setVerifiedEmail] = useState<string>('');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Reset form inputs
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submittingReset, setSubmittingReset] = useState(false);

  // Request form inputs (when no code yet)
  const [requestEmail, setRequestEmail] = useState('');
  const [submittingRequest, setSubmittingRequest] = useState(false);
  const [requestSent, setRequestSent] = useState(false);
  const [manualCodeInput, setManualCodeInput] = useState('');
  const [showManualCodeBox, setShowManualCodeBox] = useState(false);

  // Helper to extract query & hash params reliably
  const extractParams = () => {
    let searchParams = new URLSearchParams(window.location.search);
    let code = searchParams.get('oobCode') || '';
    let mode = searchParams.get('mode') || '';
    let apiKey = searchParams.get('apiKey') || '';
    let lang = searchParams.get('lang') || '';
    let continueUrl = searchParams.get('continueUrl') || '';

    // If not in search, check hash (e.g. #/reset-password?oobCode=... or #oobCode=...)
    if (!code && window.location.hash) {
      const hash = window.location.hash;
      const qIndex = hash.indexOf('?');
      if (qIndex !== -1) {
        const hashParams = new URLSearchParams(hash.substring(qIndex));
        code = hashParams.get('oobCode') || code;
        mode = hashParams.get('mode') || mode;
        apiKey = hashParams.get('apiKey') || apiKey;
        lang = hashParams.get('lang') || lang;
        continueUrl = hashParams.get('continueUrl') || continueUrl;
      }
    }

    return { code, mode, apiKey, lang, continueUrl };
  };

  // Inspect URL on mount and verify code if present
  useEffect(() => {
    const { code, mode } = extractParams();
    setInitialMode(mode);

    if (code) {
      setOobCode(code);
      verifyCode(code);
    } else {
      setStage('request');
    }
  }, []);

  // Verify action code with Firebase
  const verifyCode = async (codeToVerify: string) => {
    setStage('verifying');
    setErrorMessage(null);
    try {
      const email = await verifyResetCode(codeToVerify);
      setVerifiedEmail(email);
      setStage('ready');
    } catch (err: any) {
      console.warn('Reset code verification failed:', err);
      const code = err?.code || '';
      if (code === 'auth/expired-action-code') {
        setErrorType('expired');
        setErrorMessage('This password reset link has expired. Please request a new one.');
      } else if (code === 'auth/invalid-action-code') {
        setErrorType('invalid');
        setErrorMessage('This password reset link is invalid. Please request a new password reset email.');
      } else {
        setErrorType('invalid');
        setErrorMessage(err?.message || 'This password reset link is invalid. Please request a new password reset email.');
      }
      setStage('error');
    }
  };

  // Handle password reset submission
  const handleResetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submittingReset) return;

    setErrorMessage(null);

    // Validation checks
    if (!newPassword) {
      setErrorMessage('Please enter a new password.');
      return;
    }
    if (newPassword.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }
    if (!confirmPassword) {
      setErrorMessage('Please confirm your new password.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match. Please re-enter.');
      return;
    }

    setSubmittingReset(true);
    try {
      await confirmResetPassword(oobCode, newPassword);
      setStage('success');
      setStatusMessage('Your ECAT account password has been changed successfully.');
    } catch (err: any) {
      console.error('Confirm password reset error:', err);
      const code = err?.code || '';
      if (code === 'auth/expired-action-code') {
        setErrorType('expired');
        setErrorMessage('This password reset link has expired. Please request a new one.');
        setStage('error');
      } else if (code === 'auth/invalid-action-code') {
        setErrorType('invalid');
        setErrorMessage('This password reset link is invalid. Please request a new password reset email.');
        setStage('error');
      } else {
        setErrorMessage(err?.message || 'Failed to update password. Please try again.');
      }
    } finally {
      setSubmittingReset(false);
    }
  };

  // Handle requesting a reset link email
  const handleRequestResetLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submittingRequest) return;

    setErrorMessage(null);
    const cleanEmail = requestEmail.trim();

    if (!cleanEmail) {
      setErrorMessage('Please enter your registered email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setSubmittingRequest(true);
    try {
      await resetPassword(cleanEmail);
      setRequestSent(true);
      setStatusMessage('If an account exists for this email address, password reset instructions have been sent.');
    } catch (err: any) {
      console.error('Request reset email error:', err);
      setErrorMessage(err?.message || 'Unable to send password reset email. Please try again.');
    } finally {
      setSubmittingRequest(false);
    }
  };

  // Handle manual code entry
  const handleManualCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = manualCodeInput.trim();
    if (!clean) {
      setErrorMessage('Please enter a valid reset code.');
      return;
    }
    setOobCode(clean);
    verifyCode(clean);
  };

  return (
    <div id="reset-password-page-view" className="py-12 md:py-20 bg-slate-950 text-white min-h-[calc(100vh-80px)] flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        
        {/* Navigation Breadcrumb / Return */}
        <div className="flex items-center justify-between mb-6 px-2">
          <button
            type="button"
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-300 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigateToLogin(verifiedEmail || requestEmail)}
            className="text-xs font-bold text-cyan-400 hover:text-cyan-300 hover:underline transition-colors cursor-pointer"
          >
            Sign In to Account
          </button>
        </div>

        {/* Main Card */}
        <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950/90 text-white rounded-3xl border border-indigo-500/30 shadow-[0_25px_60px_-15px_rgba(79,70,229,0.35)] overflow-hidden relative ring-1 ring-white/10">
          
          {/* Header Banner */}
          <div className="relative p-6 sm:p-8 bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-900/60 border-b border-indigo-500/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-lg shadow-black/20 shrink-0">
                {stage === 'success' ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                ) : stage === 'error' ? (
                  <AlertCircle className="w-6 h-6 text-rose-400" />
                ) : stage === 'ready' ? (
                  <ShieldCheck className="w-6 h-6 text-cyan-300" />
                ) : (
                  <KeyRound className="w-6 h-6 text-amber-300" />
                )}
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white drop-shadow-sm">
                  {stage === 'success'
                    ? 'Password Reset Successful'
                    : stage === 'error'
                    ? errorType === 'expired'
                      ? 'Reset Link Expired'
                      : 'Invalid Reset Link'
                    : stage === 'ready'
                    ? 'Reset Your Password'
                    : stage === 'verifying'
                    ? 'Verifying Reset Link...'
                    : 'Reset Your Password'}
                </h1>
                <p className="mt-1 text-xs sm:text-sm text-slate-300 font-medium">
                  {stage === 'success'
                    ? 'Your ECAT account password has been changed successfully.'
                    : stage === 'error'
                    ? errorType === 'expired'
                      ? 'This password reset link has expired. Please request a new one.'
                      : 'This password reset link is invalid. Please request a new password reset email.'
                    : stage === 'ready'
                    ? verifiedEmail
                      ? `Engineering College Admission Test App • ${verifiedEmail}`
                      : 'Engineering College Admission Test App'
                    : stage === 'verifying'
                    ? 'Validating your security token with Firebase Authentication...'
                    : 'Engineering College Admission Test App'}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            
            {/* Global Error Banner */}
            {errorMessage && (
              <div className="mb-6 p-4 rounded-2xl bg-rose-950/90 border border-rose-500/50 text-rose-200 text-xs font-medium flex items-start gap-3 shadow-md animate-fade-in">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold text-rose-100">{errorMessage}</p>
                </div>
              </div>
            )}

            {/* Global Status / Success Banner */}
            {statusMessage && stage !== 'success' && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-xs font-medium flex items-start gap-3 shadow-md animate-fade-in">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
                <p className="leading-relaxed">{statusMessage}</p>
              </div>
            )}

            {/* STAGE: VERIFYING */}
            {stage === 'verifying' && (
              <div className="py-12 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 animate-spin">
                  <Loader2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white">Validating Security Token</h3>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    Connecting to Firebase Authentication to verify your reset token. This takes just a moment...
                  </p>
                </div>
              </div>
            )}

            {/* STAGE: ERROR (Expired / Invalid Code) */}
            {stage === 'error' && (
              <div className="space-y-6 animate-fade-in">
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-slate-300 text-xs space-y-2">
                  <p className="font-semibold text-white">Common reasons for this notice:</p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-400">
                    <li>The reset link has already been used once.</li>
                    <li>The link has expired for your security.</li>
                    <li>A newer reset link was requested after this one.</li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setStage('request');
                      setErrorMessage(null);
                      setStatusMessage(null);
                    }}
                    className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-amber-600 to-indigo-600 hover:from-amber-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-amber-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Request New Reset Link</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigateToLogin()}
                    className="py-3 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer border border-slate-700"
                  >
                    <span>Back to Login</span>
                  </button>
                </div>
              </div>
            )}

            {/* STAGE: READY - NEW PASSWORD FORM */}
            {stage === 'ready' && (
              <form onSubmit={handleResetSubmit} className="space-y-5 animate-fade-in">
                
                {verifiedEmail && (
                  <div className="p-3 rounded-xl bg-indigo-950/50 border border-indigo-500/30 flex items-center gap-2.5 text-xs text-indigo-200">
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>
                      Account: <strong className="text-white font-semibold">{verifiedEmail}</strong>
                    </span>
                  </div>
                )}

                {/* New Password Field */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    New Password <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-indigo-300 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showNewPassword ? 'text' : 'password'}
                      required
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Minimum 6 characters"
                      disabled={submittingReset}
                      autoComplete="new-password"
                      className="w-full pl-10 pr-12 py-3 rounded-xl border border-indigo-500/30 bg-slate-950/70 text-white text-xs font-medium focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-hidden placeholder:text-slate-500 transition-all disabled:opacity-50"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1 cursor-pointer transition-colors"
                      title={showNewPassword ? 'Hide password' : 'Show password'}
                    >
                      {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-400 pl-1">
                    Must be at least 6 characters.
                  </p>
                </div>

                {/* Confirm New Password Field */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Confirm New Password <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-indigo-300 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Re-enter your new password"
                      disabled={submittingReset}
                      autoComplete="new-password"
                      className="w-full pl-10 pr-12 py-3 rounded-xl border border-indigo-500/30 bg-slate-950/70 text-white text-xs font-medium focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-hidden placeholder:text-slate-500 transition-all disabled:opacity-50"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1 cursor-pointer transition-colors"
                      title={showConfirmPassword ? 'Hide password' : 'Show password'}
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>

                  {confirmPassword && newPassword && (
                    <div className="pt-1 pl-1">
                      {confirmPassword === newPassword ? (
                        <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Passwords match
                        </span>
                      ) : (
                        <span className="text-[11px] font-semibold text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> Passwords do not match
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Submit and Back to Login Buttons */}
                <div className="pt-3 space-y-3">
                  <button
                    type="submit"
                    disabled={submittingReset || !newPassword || !confirmPassword || newPassword !== confirmPassword}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.99]"
                  >
                    {submittingReset ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Resetting Password...</span>
                      </>
                    ) : (
                      <>
                        <ShieldCheck className="w-4 h-4" />
                        <span>Reset Password</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigateToLogin(verifiedEmail)}
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-700/80 bg-slate-800/60 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Login</span>
                  </button>
                </div>

              </form>
            )}

            {/* STAGE: REQUEST LINK (When user opened without code or wants a new link) */}
            {stage === 'request' && (
              <div className="space-y-6 animate-fade-in">
                {!requestSent ? (
                  <form onSubmit={handleRequestResetLink} className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                        Registered Email Address <span className="text-rose-400">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-indigo-300 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          value={requestEmail}
                          onChange={(e) => setRequestEmail(e.target.value)}
                          placeholder="student@example.com"
                          disabled={submittingRequest}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-indigo-500/30 bg-slate-950/70 text-white text-xs font-medium focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-hidden placeholder:text-slate-500 transition-all disabled:opacity-50"
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submittingRequest || !requestEmail.trim()}
                        className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-600 to-indigo-600 hover:from-amber-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-amber-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.99]"
                      >
                        {submittingRequest ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Reset Link</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <div className="pt-4 text-center">
                      <button
                        type="button"
                        onClick={() => onNavigateToLogin(requestEmail)}
                        className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 hover:underline cursor-pointer"
                      >
                        Back to Login
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-5 animate-fade-in">
                    <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-xs space-y-2">
                      <p className="font-bold text-emerald-100 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Email Sent</span>
                      </p>
                      <p className="text-emerald-200/90 leading-relaxed">
                        If an account exists for <strong className="text-white">{requestEmail}</strong>, password reset instructions have been sent. Please check your inbox and spam folder.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => onNavigateToLogin(requestEmail)}
                        className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Return to Login</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setRequestSent(false);
                          setStatusMessage(null);
                        }}
                        className="py-3 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer border border-slate-700"
                      >
                        <span>Send Again</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Manual Code Input Collapsible */}
                <div className="border-t border-slate-800/80 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowManualCodeBox(!showManualCodeBox)}
                    className="text-[11px] text-indigo-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer font-medium"
                  >
                    <span>{showManualCodeBox ? 'Hide manual code input' : 'Already have a reset code from an email? Enter it manually'}</span>
                  </button>

                  {showManualCodeBox && (
                    <form onSubmit={handleManualCodeSubmit} className="mt-3 space-y-3 p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800 animate-fade-in">
                      <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                        Firebase Action Code (oobCode)
                      </label>
                      <input
                        type="text"
                        value={manualCodeInput}
                        onChange={(e) => setManualCodeInput(e.target.value)}
                        placeholder="Paste code from email link here"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-indigo-500/30 bg-slate-950/80 text-white text-xs font-mono focus:ring-2 focus:ring-cyan-500 outline-hidden"
                      />
                      <button
                        type="submit"
                        disabled={!manualCodeInput.trim()}
                        className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-bold text-xs transition-all cursor-pointer"
                      >
                        Verify Code &amp; Continue
                      </button>
                    </form>
                  )}
                </div>

              </div>
            )}

            {/* STAGE: SUCCESS (Password reset confirmed) */}
            {stage === 'success' && (
              <div className="py-6 text-center space-y-6 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl font-black text-white">Password Reset Successful</h2>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Your ECAT account password has been changed successfully.
                  </p>
                </div>

                <div className="pt-4 max-w-xs mx-auto">
                  <button
                    type="button"
                    onClick={() => {
                      // Clean up URL parameters cleanly
                      if (typeof window !== 'undefined' && window.history?.replaceState) {
                        window.history.replaceState({}, '', '/');
                      }
                      onNavigateToLogin(verifiedEmail);
                    }}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <span>Continue to Sign In</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
