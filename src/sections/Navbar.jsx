import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, ArrowRight, Sparkles, Phone, ShieldCheck, ChevronRight, LogIn, LogOut, User, ChevronDown } from 'lucide-react';
import { NAV_LINKS, BRAND_INFO } from '../data/shoesData';
import { Button } from '../components/Button';
import { AuthModal } from '../components/AuthModal';
import { useScroll } from '../hooks/useScroll';

export function Navbar({ onOpenOrder, cartCount = 1 }) {
  const { isScrolled } = useScroll(40);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('signin'); // 'signin' | 'signup'
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Initial user state from localStorage or demo fallback
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('atelier_vip_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Display temporary floating notification
  const triggerToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage('');
    }, 3500);
  };

  const handleOpenAuth = (mode = 'signin') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
    setUserDropdownOpen(false);
  };

  const handleAuthSuccess = (authenticatedUser) => {
    setUser(authenticatedUser);
    try {
      localStorage.setItem('atelier_vip_user', JSON.stringify(authenticatedUser));
    } catch (e) {
      console.error(e);
    }
    triggerToast(`Welcome to Atelier, ${authenticatedUser.name}!`);
  };

  const handleSignOut = () => {
    setUser(null);
    setUserDropdownOpen(false);
    try {
      localStorage.removeItem('atelier_vip_user');
    } catch (e) {
      console.error(e);
    }
    triggerToast('Signed out successfully.');
  };

  // Lock body scroll when mobile menu drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Floating Status Notification Toast */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed top-14 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-full bg-[#1b1824]/95 border border-[#c88a36]/50 shadow-[0_10px_35px_rgba(0,0,0,0.85)] text-xs text-[#ede5da] flex items-center space-x-2 backdrop-blur-xl animate-in fade-in slide-in-from-top-3 duration-200"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#f8c26c] shrink-0" />
          <span className="font-medium tracking-wide">{toastMessage}</span>
        </div>
      )}

      <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
        {/* Top micro announcement bar */}
        <div className="bg-gradient-to-r from-[#2a170f] via-[#482a20] to-[#2a170f] border-b border-[#c88a36]/30 text-white text-[10px] sm:text-xs py-1.5 px-3 sm:px-4 text-center font-medium tracking-wider flex items-center justify-center gap-1.5 sm:gap-2">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#f8c26c] shrink-0 animate-spin" style={{ animationDuration: '6s' }} />
          <span className="truncate">{BRAND_INFO.promoBanner}</span>
          <span
            className="hidden sm:inline text-[#f8c26c] font-bold underline cursor-pointer shrink-0 ml-1"
            onClick={() => onOpenOrder()}
          >
            CLAIM OFFER →
          </span>
        </div>

        {/* Main navigation container */}
        <div className={`px-3 sm:px-8 max-w-7xl 2xl:max-w-[1500px] mx-auto transition-all duration-300 ${
          isScrolled ? 'py-2 sm:py-2.5' : 'py-3 sm:py-4'
        }`}>
          <nav className={`flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
            isScrolled
              ? 'bg-[#15131b]/85 backdrop-blur-xl border border-[#c88a36]/25 shadow-[0_10px_30px_rgba(0,0,0,0.6)]'
              : 'bg-[#15131b]/60 backdrop-blur-md border border-white/10'
          }`}>

            {/* Left Section: Mobile Menu Trigger (on mobile) & Brand Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Hamburger Button on the LEFT for mobile screens */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                className="lg:hidden p-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#f8c26c]/50"
              >
                <Menu className="w-5 h-5 text-white" />
              </button>

              {/* Brand Logo */}
              <a href="#" className="flex items-center space-x-2.5 group">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-[#3a2219] to-[#c88a36] flex items-center justify-center border border-[#f8c26c]/40 shadow-[0_0_15px_rgba(200,138,54,0.4)] group-hover:scale-105 transition-transform">
                  <span className="text-white font-black text-xs tracking-tighter">SH</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl font-black tracking-widest text-white font-display leading-tight group-hover:text-[#f8c26c] transition-colors">
                    {BRAND_INFO.name}
                  </span>
                  <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-[#b5ada2]">
                    Footwear
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-7">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs uppercase tracking-widest text-[#ede5da]/80 hover:text-[#f8c26c] transition-colors font-medium relative group py-1"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#c88a36] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Right Action Buttons: Auth Buttons, Cart, & Order */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              
              {/* AUTHENTICATION SECTION (DESKTOP) */}
              {!user ? (
                /* Sign In Button when Signed Out */
                <button
                  type="button"
                  onClick={() => handleOpenAuth('signin')}
                  aria-label="Sign In"
                  className="hidden md:inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#c88a36]/60 text-[#ede5da] hover:text-[#f8c26c] transition-all text-xs font-semibold"
                >
                  <LogIn className="w-3.5 h-3.5 text-[#f8c26c]" />
                  <span>Sign In</span>
                </button>
              ) : (
                /* User Menu & Sign Out when Signed In */
                <div className="hidden md:flex items-center space-x-2">
                  {/* User Profile Pill & Dropdown */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                      aria-expanded={userDropdownOpen}
                      aria-label="User account menu"
                      className="flex items-center space-x-2 py-1 px-2.5 rounded-full bg-[#1e1a27] hover:bg-[#272333] border border-[#c88a36]/40 hover:border-[#f8c26c] transition-all text-left"
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#3a2219] to-[#c88a36] text-white text-[10px] font-black flex items-center justify-center border border-[#f8c26c]/40">
                        {user.avatarText || 'AM'}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-white truncate max-w-[85px] leading-tight">
                          {user.name}
                        </span>
                        <span className="text-[9px] text-[#f8c26c] leading-none">VIP Member</span>
                      </div>
                      <ChevronDown className={`w-3 h-3 text-[#b5ada2] transition-transform duration-200 ${userDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Desktop Dropdown Popover */}
                    {userDropdownOpen && (
                      <>
                        <div
                          className="fixed inset-0 z-30"
                          onClick={() => setUserDropdownOpen(false)}
                          aria-hidden="true"
                        />
                        <div className="absolute right-0 mt-2 w-60 bg-[#16141e] border border-[#c88a36]/40 rounded-2xl p-3.5 shadow-[0_15px_40px_rgba(0,0,0,0.85)] z-40 text-xs space-y-3 animate-in fade-in zoom-in-95 duration-150">
                          <div className="pb-2.5 border-b border-white/10">
                            <p className="font-bold text-white truncate text-sm">{user.name}</p>
                            <p className="text-[11px] text-[#b5ada2] truncate">{user.email}</p>
                            <div className="mt-1.5 flex items-center gap-1.5">
                              <span className="px-2 py-0.5 rounded-full bg-[#c88a36]/20 text-[#f8c26c] text-[10px] font-bold border border-[#c88a36]/35">
                                {user.tier || 'Gold VIP Tier'}
                              </span>
                              <span className="text-[10px] text-emerald-400 font-medium">● Active</span>
                            </div>
                          </div>

                          <div className="space-y-1 text-[#b5ada2] text-[11px]">
                            <div className="flex justify-between py-1 px-2 rounded-lg bg-white/5">
                              <span>Perks:</span>
                              <span className="text-white font-medium">Free Express Air Freight</span>
                            </div>
                            <div className="flex justify-between py-1 px-2 rounded-lg bg-white/5">
                              <span>Exclusive Access:</span>
                              <span className="text-[#f8c26c] font-medium">Private Drops</span>
                            </div>
                          </div>

                          <div className="pt-1 border-t border-white/10">
                            <button
                              type="button"
                              onClick={handleSignOut}
                              className="w-full flex items-center justify-center space-x-2 px-3 py-2 rounded-xl text-rose-300 hover:text-white bg-rose-500/10 hover:bg-rose-500/25 border border-rose-500/25 transition-all font-semibold"
                            >
                              <LogOut className="w-3.5 h-3.5 text-rose-400" />
                              <span>Sign Out</span>
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Direct 1-Click Sign Out Button on Desktop */}
                  <button
                    type="button"
                    onClick={handleSignOut}
                    aria-label="Sign Out"
                    title="Sign Out of Atelier"
                    className="hidden xl:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-rose-500/15 border border-white/10 hover:border-rose-500/40 text-[#b5ada2] hover:text-rose-300 transition-all text-xs font-semibold"
                  >
                    <LogOut className="w-3.5 h-3.5 text-rose-400" />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}

              {/* Mobile Auth Button (triggers modal or drawer) */}
              <button
                type="button"
                onClick={() => {
                  if (user) {
                    setMobileMenuOpen(true);
                  } else {
                    handleOpenAuth('signin');
                  }
                }}
                aria-label={user ? `Account (${user.name})` : "Sign In"}
                className="md:hidden p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[#ede5da]"
              >
                {user ? (
                  <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-[#3a2219] to-[#c88a36] text-[9px] font-bold text-white flex items-center justify-center">
                    {user.avatarText || 'U'}
                  </div>
                ) : (
                  <LogIn className="w-4 h-4 text-[#f8c26c]" />
                )}
              </button>

              {/* Cart Button */}
              <button
                onClick={() => onOpenOrder()}
                aria-label="View Cart"
                className="relative p-2 sm:p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[#ede5da] transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#c88a36] text-black text-[10px] font-black rounded-full flex items-center justify-center shadow-sm">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Order Now Button */}
              <Button
                variant="primary"
                size="sm"
                onClick={() => onOpenOrder()}
                className="hidden sm:inline-flex"
                icon={ArrowRight}
              >
                Order Now
              </Button>
            </div>

          </nav>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* SEAMLESS LUXURY MOBILE DRAWER: SLIDES IN FROM THE LEFT                    */}
      {/* ========================================================================= */}
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-md z-50 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-out Left Drawer */}
      <aside
        className={`fixed inset-y-0 left-0 w-[86%] max-w-sm bg-[#121117] border-r border-[#c88a36]/30 z-50 lg:hidden transform transition-transform duration-300 ease-out flex flex-col justify-between shadow-[15px_0_50px_rgba(0,0,0,0.85)] ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        {/* Top Drawer Header with Brand & Close Button */}
        <div>
          <div className="flex items-center justify-between p-5 border-b border-white/10 bg-[#16141d]">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#3a2219] to-[#c88a36] flex items-center justify-center border border-[#f8c26c]/40 shadow-sm">
                <span className="text-white font-black text-xs">SH</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-widest text-white font-display">
                  {BRAND_INFO.name}
                </span>
                <span className="text-[8px] uppercase tracking-[0.2em] text-[#b5ada2]">
                  Atelier Showcase
                </span>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation menu"
              className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* User Account / VIP Status Section in Drawer */}
          {user ? (
            <div className="p-4 mx-4 mt-4 rounded-2xl bg-[#1a1724] border border-[#c88a36]/35 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#3a2219] to-[#c88a36] text-white font-bold flex items-center justify-center border border-[#f8c26c]/40 text-sm shadow-sm">
                  {user.avatarText || 'AM'}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-white truncate">{user.name}</div>
                  <div className="text-[10px] text-[#f8c26c] font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{user.tier || 'Gold VIP Member'}</span>
                  </div>
                  <div className="text-[10px] text-[#b5ada2] truncate">{user.email}</div>
                </div>
              </div>

              {/* Sign Out Button inside Mobile Drawer */}
              <button
                type="button"
                onClick={() => {
                  handleSignOut();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2 px-3 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </button>
            </div>
          ) : (
            <div className="p-4 mx-4 mt-4 rounded-2xl bg-[#1a1724] border border-[#c88a36]/25 space-y-2.5">
              <div className="flex items-center space-x-2 text-xs text-[#f8c26c] font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Atelier VIP Club Access</span>
              </div>
              <p className="text-[11px] text-[#b5ada2]">
                Sign in to manage reserved allocations and expedited shipping.
              </p>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleOpenAuth('signin');
                  }}
                  className="py-2 px-3 rounded-xl bg-gradient-to-r from-[#d99b43] to-[#c88a36] text-black text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Sign In</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleOpenAuth('signup');
                  }}
                  className="py-2 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold flex items-center justify-center border border-white/15"
                >
                  Join VIP
                </button>
              </div>
            </div>
          )}

          {/* Navigation Links List */}
          <nav className="p-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-semibold tracking-wider uppercase text-white/90 hover:text-white hover:bg-[#201d2a] border border-transparent hover:border-[#c88a36]/30 transition-all group"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-[#f8c26c] group-hover:translate-x-0.5 transition-all" />
              </a>
            ))}
          </nav>
        </div>

        {/* Drawer Bottom Actions & Concierge Support */}
        <div className="p-5 border-t border-white/10 bg-[#16141d]/80 space-y-3">
          <Button
            variant="primary"
            size="md"
            className="w-full text-sm font-bold"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenOrder();
            }}
            icon={ArrowRight}
          >
            Order Now — 50% Off
          </Button>

          <div className="pt-2 text-xs space-y-1 text-[#b5ada2] border-t border-white/5">
            <div className="flex items-center space-x-1.5 text-white/80">
              <Phone className="w-3.5 h-3.5 text-[#f8c26c]" />
              <span className="font-mono text-[11px]">{BRAND_INFO.intlPhone}</span>
            </div>
            <p className="text-[10px] text-[#b5ada2]">
              Concierge assistance available 24/7
            </p>
          </div>
        </div>
      </aside>

      {/* Interactive Auth Modal (Sign In / Sign Up Form) */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onAuthSuccess={handleAuthSuccess}
        initialMode={authMode}
      />
    </>
  );
}
