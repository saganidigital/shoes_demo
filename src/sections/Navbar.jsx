import React, { useState } from 'react';
import { Menu, X, ShoppingBag, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { NAV_LINKS, BRAND_INFO } from '../data/shoesData';
import { Button } from '../components/Button';
import { useScroll } from '../hooks/useScroll';

export function Navbar({ onOpenOrder, cartCount = 1 }) {
  const { isScrolled } = useScroll(40);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top micro announcement bar mirroring poster promotional tagline */}
      <div className="bg-gradient-to-r from-[#2a170f] via-[#482a20] to-[#2a170f] border-b border-[#c88a36]/30 text-white text-[11px] md:text-xs py-1.5 px-4 text-center font-medium tracking-wider flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#f8c26c] animate-spin" style={{ animationDuration: '6s' }} />
        <span>{BRAND_INFO.promoBanner}</span>
        <span className="hidden sm:inline text-[#f8c26c] font-bold underline cursor-pointer" onClick={() => onOpenOrder()}>
          CLAIM OFFER →
        </span>
      </div>

      {/* Main navigation container */}
      <div className={`px-3 sm:px-8 max-w-7xl 2xl:max-w-[1500px] mx-auto transition-all duration-300 ${
        isScrolled ? 'py-2 sm:py-2.5' : 'py-3 sm:py-4'
      }`}>
        <nav className={`flex items-center justify-between px-5 py-3 rounded-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#15131b]/85 backdrop-blur-xl border border-[#c88a36]/25 shadow-[0_10px_30px_rgba(0,0,0,0.6)]' 
            : 'bg-[#15131b]/60 backdrop-blur-md border border-white/10'
        }`}>
          {/* Brand Logo */}
          <a href="#" className="flex items-center space-x-2.5 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#3a2219] to-[#c88a36] flex items-center justify-center border border-[#f8c26c]/40 shadow-[0_0_15px_rgba(200,138,54,0.4)] group-hover:scale-105 transition-transform">
              <span className="text-white font-black text-xs tracking-tighter">SH</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-widest text-white font-display leading-tight group-hover:text-[#f8c26c] transition-colors">
                {BRAND_INFO.name}
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#b5ada2]">
                Footwear
              </span>
            </div>
          </a>

          {/* Desktop Links */}
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
          <div className="flex items-center space-x-3">
            <button
              onClick={() => onOpenOrder()}
              aria-label="View Cart"
              className="relative p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[#ede5da] transition-all"
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

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-4 top-28 bg-[#181620]/95 backdrop-blur-2xl border border-[#c88a36]/30 rounded-3xl p-6 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold tracking-wider uppercase text-white/90 hover:text-[#f8c26c] py-2 border-b border-white/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <Button
                variant="primary"
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrder();
                }}
              >
                Claim 50% Off & Order
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
