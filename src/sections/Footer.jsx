import React from 'react';
import { ArrowUp, ShieldCheck, Truck, Sparkles, Heart } from 'lucide-react';
import { BRAND_INFO, NAV_LINKS } from '../data/shoesData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b0a0d] border-t border-white/10 text-[#b5ada2] pt-16 pb-12 relative overflow-hidden">
      {/* Subtle bronze glow line */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#c88a36]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#3a2219] to-[#c88a36] flex items-center justify-center border border-[#f8c26c]/40 shadow-sm">
                <span className="text-white font-black text-xs">SH</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-widest text-white font-display">
                  {BRAND_INFO.name}
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#b5ada2]">
                  Footwear
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#b5ada2] leading-relaxed max-w-sm">
              Crafting modern luxury high-top silhouettes inspired by retro hardwood heritage. Engineered with cushioned sole mechanics and Italian calfskin.
            </p>

            <div className="text-xs space-y-1 text-white/80 font-mono">
              <div>Hotline: <span className="text-[#f8c26c]">03XXXXXXXXX / 92+XXXXXXXXXX</span></div>
              <div>Web: <span className="text-white">WWW.YOURWEBSITE.COM</span></div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#f8c26c] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Poster Promises */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">
              Poster Commitments
            </h4>
            <ul className="space-y-2 text-xs text-[#b5ada2]">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c88a36]" />
                <span>Free Worldwide Courier Delivery</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c88a36]" />
                <span>100% Full-Grain Premium Materials</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c88a36]" />
                <span>Proprietary Cushioned Cloud Sole</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c88a36]" />
                <span>360° Reinforced Durable Welt Stitch</span>
              </li>
            </ul>
          </div>

          {/* Back to top & Locations */}
          <div className="lg:col-span-2 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">
                Studios
              </h4>
              <p className="text-xs text-[#b5ada2] leading-relaxed">
                Milan • New York • Tokyo • London
              </p>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top of page"
              className="inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-full bg-[#181622] hover:bg-[#221f2d] border border-white/10 hover:border-[#c88a36] text-xs font-bold text-white transition-all w-fit"
            >
              <span>Back To Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#f8c26c]" />
            </button>
          </div>

        </div>

        {/* Bottom copyright & disclosures */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#b5ada2]/70 gap-4">
          <p>© {new Date().getFullYear()} {BRAND_INFO.name} Footwear Inc. All rights reserved.</p>
          <div className="flex items-center space-x-6 text-[11px]">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Certificate of Authenticity</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
