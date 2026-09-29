import React, { useState, useEffect } from 'react';
import { X, Mail, Lock, User, Eye, EyeOff, Sparkles, CheckCircle2, ShieldCheck, ArrowRight, LogIn } from 'lucide-react';
import { Button } from './Button';

export function AuthModal({ isOpen, onClose, onAuthSuccess, initialMode = 'signin' }) {
  const [mode, setMode] = useState(initialMode); // 'signin' | 'signup'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [infoNotice, setInfoNotice] = useState('');

  // Synchronize initial mode when modal opens
  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
      setSuccessMessage('');
      setInfoNotice('');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, initialMode]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDemoSignIn = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const demoUser = {
        name: 'Alex Mercer',
        email: 'alex.mercer@atelier.vip',
        tier: 'Gold VIP Member',
        avatarText: 'AM'
      };
      setSuccessMessage('Welcome back, Alex! Signed in successfully.');
      setTimeout(() => {
        onAuthSuccess(demoUser);
        onClose();
      }, 700);
    }, 400);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setInfoNotice('');

    setTimeout(() => {
      setIsSubmitting(false);
      const displayName = mode === 'signup' && name.trim() ? name.trim() : (email.split('@')[0] || 'Alex Mercer');
      const initials = displayName
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2) || 'VIP';

      const authenticatedUser = {
        name: displayName,
        email: email || 'member@atelier.vip',
        tier: 'VIP Collector',
        avatarText: initials
      };

      setSuccessMessage(mode === 'signin' ? `Welcome back, ${displayName}!` : `Account created! Welcome to the Atelier, ${displayName}.`);

      setTimeout(() => {
        onAuthSuccess(authenticatedUser);
        onClose();
      }, 700);
    }, 500);
  };

  const handleForgotPassword = () => {
    setInfoNotice('Demo notice: A password reset link was dispatched to your email.');
    setTimeout(() => setInfoNotice(''), 4000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
    >
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-md bg-[#16141d] border border-[#c88a36]/35 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.85)] text-[#ede5da] z-10 animate-in zoom-in-95 duration-200">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#1b1824]">
          <div className="flex items-center space-x-2.5">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#3a2219] to-[#c88a36] flex items-center justify-center border border-[#f8c26c]/40 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#f8c26c]" />
            </div>
            <div>
              <h3 id="auth-modal-title" className="text-sm font-bold tracking-wider uppercase text-white font-display">
                {mode === 'signin' ? 'Atelier VIP Sign In' : 'Join VIP Club'}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-1 focus:ring-[#f8c26c]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Toggle: Sign In / Create Account */}
        <div className="grid grid-cols-2 p-1.5 bg-[#121018] border-b border-white/5 text-xs font-semibold">
          <button
            type="button"
            onClick={() => { setMode('signin'); setSuccessMessage(''); }}
            className={`py-2.5 rounded-xl transition-all ${
              mode === 'signin'
                ? 'bg-[#252131] text-[#f8c26c] shadow-sm border border-[#c88a36]/30'
                : 'text-[#b5ada2] hover:text-white'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => { setMode('signup'); setSuccessMessage(''); }}
            className={`py-2.5 rounded-xl transition-all ${
              mode === 'signup'
                ? 'bg-[#252131] text-[#f8c26c] shadow-sm border border-[#c88a36]/30'
                : 'text-[#b5ada2] hover:text-white'
            }`}
          >
            Create Account
          </button>
        </div>

        {/* Notification / Toast inside modal */}
        {infoNotice && (
          <div className="mx-6 mt-4 p-3 rounded-xl bg-[#c88a36]/15 border border-[#c88a36]/40 text-[#f8c26c] text-xs flex items-center gap-2">
            <Sparkles className="w-4 h-4 shrink-0" />
            <span>{infoNotice}</span>
          </div>
        )}

        {/* Form Body */}
        <div className="p-6">
          {successMessage ? (
            <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#c88a36]/20 border-2 border-[#c88a36] flex items-center justify-center text-[#f8c26c]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-bold font-display text-white">Access Granted</h4>
                <p className="text-sm text-[#b5ada2]">{successMessage}</p>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Atelier VIP Session</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Quick 1-Click Demo Login Pill */}
              <button
                type="button"
                onClick={handleDemoSignIn}
                disabled={isSubmitting}
                className="w-full py-2.5 px-4 rounded-2xl bg-gradient-to-r from-[#2f2015] via-[#462d1a] to-[#2f2015] border border-[#c88a36]/50 hover:border-[#f8c26c] text-[#f8c26c] text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all hover:scale-[1.01] shadow-sm group"
              >
                <Sparkles className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform text-[#f8c26c]" />
                <span>Quick 1-Click Demo Login (Alex Mercer • VIP)</span>
              </button>

              <div className="relative flex items-center justify-center my-3">
                <div className="border-t border-white/10 w-full" />
                <span className="bg-[#16141d] px-3 text-[10px] uppercase tracking-widest text-[#b5ada2]">
                  Or enter credentials
                </span>
                <div className="border-t border-white/10 w-full" />
              </div>

              {/* Name field (if creating account) */}
              {mode === 'signup' && (
                <div className="space-y-1.5 animate-in fade-in duration-200">
                  <label className="block text-xs font-semibold text-[#b5ada2]">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#b5ada2] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Mercer"
                      className="w-full bg-[#1e1b27] border border-white/15 focus:border-[#c88a36] focus:ring-1 focus:ring-[#c88a36] rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-white/30 transition-all outline-none"
                    />
                  </div>
                </div>
              )}

              {/* Email field */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#b5ada2]">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#b5ada2] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex.mercer@vip.com"
                    className="w-full bg-[#1e1b27] border border-white/15 focus:border-[#c88a36] focus:ring-1 focus:ring-[#c88a36] rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-white/30 transition-all outline-none"
                  />
                </div>
              </div>

              {/* Password field */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-semibold text-[#b5ada2]">
                    Password
                  </label>
                  {mode === 'signin' && (
                    <button
                      type="button"
                      onClick={handleForgotPassword}
                      className="text-[11px] text-[#f8c26c] hover:underline"
                    >
                      Forgot password?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[#b5ada2] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full bg-[#1e1b27] border border-white/15 focus:border-[#c88a36] focus:ring-1 focus:ring-[#c88a36] rounded-xl pl-10 pr-10 py-2.5 text-xs text-white placeholder-white/30 transition-all outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Checkbox Options */}
              <div className="flex items-center justify-between text-xs pt-1">
                {mode === 'signin' ? (
                  <label className="flex items-center space-x-2 text-[#b5ada2] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded bg-[#1e1b27] border-white/20 text-[#c88a36] focus:ring-[#c88a36] focus:ring-offset-0"
                    />
                    <span>Remember this session</span>
                  </label>
                ) : (
                  <label className="flex items-center space-x-2 text-[#b5ada2] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      className="rounded bg-[#1e1b27] border-white/20 text-[#c88a36] focus:ring-[#c88a36] focus:ring-offset-0"
                    />
                    <span>I agree to Atelier VIP Club perks & terms</span>
                  </label>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={isSubmitting}
                  className="w-full text-xs font-bold tracking-wider uppercase py-3 shadow-lg"
                  icon={ArrowRight}
                >
                  {isSubmitting
                    ? 'Authenticating...'
                    : mode === 'signin'
                    ? 'Sign In to Account'
                    : 'Create VIP Account'}
                </Button>
              </div>

              {/* Secure footer badge */}
              <div className="pt-2 flex items-center justify-center space-x-1.5 text-[11px] text-[#b5ada2]/80">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Simulated Secure 256-Bit SSL Demo Gateway</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
