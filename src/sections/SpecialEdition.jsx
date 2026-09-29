import React from 'react';
import { Phone, Globe, Sparkles, CheckCircle2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { PosterDiscountCircle } from '../components/Badge';
import { BRAND_INFO, PRODUCTS } from '../data/shoesData';

export function SpecialEdition({ onOpenOrder }) {
  const heroShoe = PRODUCTS[0];

  return (
    <section id="special-edition" className="py-16 sm:py-24 relative bg-[#0f0e12] overflow-hidden border-t border-b border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#c88a36]/15 via-[#3d231a]/25 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Pill */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#201d29] border border-[#c88a36]/40 text-xs font-bold uppercase tracking-widest text-[#f8c26c] shadow-[0_0_15px_rgba(200,138,54,0.2)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ORIGINAL POSTER SHOWCASE</span>
          </div>
        </div>

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight uppercase">
            SPECIAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f8c26c] via-[#c88a36] to-[#8d541a]">SHÖSE</span> EDITION
          </h2>
          <p className="text-xs sm:text-base text-[#b5ada2]">
            Derived directly from the iconic billboard campaign. Engineered with hand-finished leather, contrasting chalk-white collars, and the iconic cushioned sole.
          </p>
        </div>

        {/* Split Grid: Poster Artwork on Left, Interactive Specs & Ordering on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Poster Artwork Frame with realistic shadow & floating discount badge */}
          <div className="lg:col-span-6 relative flex justify-center">
            
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden border-2 border-[#c88a36]/40 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(200,138,54,0.25)] bg-[#17151e] group">
              <img
                src="/poster.jpeg"
                alt="Official SHÖSE Special Edition Launch Poster"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Seamless warm vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              {/* Interactive badge in corner */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-[#14121a]/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#f8c26c] font-bold">Campaign Asset</span>
                  <p className="text-xs font-semibold text-white">Original Poster Reference Artwork</p>
                </div>
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-1 rounded-full border border-emerald-500/30">
                  Verified Heritage
                </span>
              </div>
            </div>

            {/* Floating 50% OFF Badge */}
            <div className="absolute -top-5 -right-3 z-20">
              <PosterDiscountCircle percent="50% OFF" />
            </div>

          </div>

          {/* Right: Technical Highlights & Direct Hotline Ordering */}
          <div className="lg:col-span-6 space-y-8">
            
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-[#3d231a] border border-[#c88a36] text-[11px] font-bold uppercase tracking-wider text-[#f8c26c]">
                Launch Privilege Package
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                Claim Your Poster Edition Before Stock Runs Out
              </h3>
              <p className="text-sm text-[#b5ada2] leading-relaxed">
                The SHÖSE launch campaign unlocks rare VIP privileges for early adopters. Every pair ships in our signature collector's trunk with authenticity certificates.
              </p>
            </div>

            {/* Perks List */}
            <div className="space-y-3">
              {[
                { title: "Direct from the Workshop", desc: "No middleman markup — handcrafted directly by Master Cobblers" },
                { title: "Full 50% Launch Markdown", desc: "Promotional rate locked in at $160 USD (MSRP $320 USD)" },
                { title: "Priority Worldwide Air Express", desc: "Delivered in 3 to 5 business days with tracked courier service" },
                { title: "Dual Lacing Systems Included", desc: "Includes both Pitch Black and Signature Bronze woven laces" }
              ].map((perk, i) => (
                <div key={i} className="flex items-start space-x-3 p-3.5 rounded-2xl bg-[#181621] border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-[#f8c26c] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">{perk.title}</h4>
                    <p className="text-xs text-[#b5ada2] mt-0.5">{perk.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Order Actions */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#2a170f] via-[#1b1923] to-[#14121a] border border-[#c88a36]/40 space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#b5ada2]">Limited Release Price</div>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-black text-[#f8c26c] font-display">$160 USD</span>
                    <span className="text-sm line-through text-white/40">$320 USD</span>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="md"
                  onClick={() => onOpenOrder(heroShoe)}
                  icon={ArrowRight}
                >
                  Order Poster Edition
                </Button>
              </div>

              {/* Poster Contact Details Bar */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-[#b5ada2] gap-3">
                <div className="flex items-center space-x-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#f8c26c]" />
                  <span>VIP Hotline: <strong className="text-white font-mono">{BRAND_INFO.intlPhone}</strong></span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#f8c26c]" />
                  <span className="font-mono text-white/80">WWW.SHOSEFOOTWEAR.COM</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
