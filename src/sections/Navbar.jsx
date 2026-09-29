import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, ArrowRight, Sparkles, Phone, ShieldCheck, ChevronRight } from 'lucide-react';
import { NAV_LINKS, BRAND_INFO } from '../data/shoesData';
import { Button } from '../components/Button';
import { useScroll } from '../hooks/useScroll';

export function Navbar({ onOpenOrder, cartCount = 1 }) {
  const { isScrolled } = useScroll(40);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

            {/* Right Action Buttons */}
            <div className="flex items-center space-x-2 sm:space-x-3">
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
        className={`fixed inset-y-0 left-0 w-[84%] max-w-sm bg-[#121117] border-r border-[#c88a36]/30 z-50 lg:hidden transform transition-transform duration-300 ease-out flex flex-col justify-between shadow-[15px_0_50px_rgba(0,0,0,0.85)] ${
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

          {/* Special launch tag inside drawer */}
          <div className="px-5 py-3 bg-[#1e1a24] border-b border-white/5 flex items-center justify-between text-xs">
            <span className="text-[#f8c26c] font-bold tracking-wider uppercase text-[10px]">
              50% Launch Event
            </span>
            <span className="text-emerald-400 font-semibold text-[10px]">
              Free Express Courier
            </span>
          </div>

          {/* Navigation Links List */}
          <nav className="p-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-semibold tracking-wider uppercase text-white/90 hover:text-white hover:bg-[#201d2a] border border-transparent hover:border-[#c88a36]/30 transition-all group"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-[#f8c26c] group-hover:translate-x-0.5 transition-all" />
              </a>
            ))}
          </nav>
        </div>

        {/* Drawer Bottom Actions & Concierge Support */}
        <div className="p-5 border-t border-white/10 bg-[#16141d]/80 space-y-4">
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
    </>
  );
}
