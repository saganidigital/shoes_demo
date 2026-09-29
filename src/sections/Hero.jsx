import React, { useRef, useEffect } from 'react';
import { ArrowRight, Sparkles, Check, Shield, Truck, Flame } from 'lucide-react';
import { Button } from '../components/Button';
import { PosterDiscountCircle } from '../components/Badge';

export function Hero({ onOpenOrder }) {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video plays continuously even if browser attempts to suspend
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Autoplay check:", err);
      });
    }
  }, []);

  const posterBullets = [
    { title: "FREE DELIVERY", desc: "Complimentary Global Courier" },
    { title: "PREMIUM MATERIALS", desc: "Italian Full-Grain Leather" },
    { title: "CUSHIONED SOLE", desc: "Ergonomic Cloud-Impact Matrix" },
    { title: "DURABLE DESIGN", desc: "Reinforced 360° Welt Stitch" }
  ];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#121115]">
      
      {/* ========================================================================= */}
      {/* FULL BACKGROUND VIDEO: Runs in infinite loop, no play/pause, no controls   */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none select-none">
        <video
          ref={videoRef}
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          controls={false}
          aria-label="SHÖSE signature high-top footwear cinematic showcase video playing on continuous background loop"
          className="w-full h-full object-cover scale-105 pointer-events-none select-none filter brightness-[0.75] contrast-[1.08]"
        />

        {/* Poster-inspired Vignette & Color Gradients Overlay */}
        {/* 1. Deep charcoal & warm bronze radial spotlight */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,138,54,0.12)_0%,rgba(18,17,21,0.65)_50%,rgba(18,17,21,0.92)_100%)]" />

        {/* 2. Top-down subtle darkening for clean navbar contrast */}
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#121115] via-[#121115]/80 to-transparent" />

        {/* 3. Bottom seamless fade merging into next section */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0f0e12] via-[#0f0e12]/80 to-transparent" />

        {/* 4. Subtle bronze glow accent orbs */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#c88a36]/15 rounded-full blur-[140px]" />
      </div>

      {/* ========================================================================= */}
      {/* HERO FOREGROUND CONTENT                                                   */}
      {/* ========================================================================= */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 pt-32 pb-24 flex flex-col items-center text-center">
        
        {/* Floating Poster 50% OFF Badge (Top Right of Content on Desktop) */}
        <div className="absolute top-28 right-4 sm:right-12 hidden md:block z-20 animate-bounce" style={{ animationDuration: '4s' }}>
          <PosterDiscountCircle percent="50% OFF" />
        </div>

        {/* Top Micro Status Pill */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#1b1923]/90 border border-[#c88a36]/40 backdrop-blur-xl shadow-[0_0_20px_rgba(200,138,54,0.25)] mb-6 animate-in fade-in duration-500">
          <span className="w-2 h-2 rounded-full bg-[#f8c26c] animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#f8c26c]">
            Official Poster Showcase • Special Edition
          </span>
          <span className="text-xs font-bold text-white/50">•</span>
          <span className="text-xs font-semibold text-white/90">50% Off Launch</span>
        </div>

        {/* Main Poster Typography */}
        <div className="space-y-3 max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-[0.3em] text-[#d5cec4] font-display">
            PICK THE BEST
          </h2>
          
          <div className="relative inline-block">
            <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] font-black uppercase tracking-tight text-white font-display leading-[0.88] drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
              SH<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f8c26c] via-[#c88a36] to-[#8d541a]">Ö</span>SE
            </h1>
            {/* Ambient gold glow behind title */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#f8c26c]/20 via-[#c88a36]/30 to-transparent blur-3xl -z-10 pointer-events-none" />
          </div>

          <p className="text-base sm:text-lg md:text-xl text-[#ede5da]/90 max-w-2xl mx-auto font-light leading-relaxed pt-3 text-shadow-sm">
            Handcrafted luxury high-top silhouettes engineered with Italian full-grain calfskin and our proprietary cushioned cloud impact sole.
          </p>
        </div>

        {/* Mobile 50% Off Badge */}
        <div className="md:hidden my-6">
          <PosterDiscountCircle percent="50% OFF" />
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 w-full max-w-md">
          <Button
            variant="primary"
            size="lg"
            onClick={() => onOpenOrder()}
            className="w-full sm:w-auto shadow-[0_0_35px_rgba(200,138,54,0.5)] text-base"
            icon={ArrowRight}
          >
            Shop Now — 50% Off
          </Button>

          <a
            href="#collection"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-full bg-[#1b1923]/80 hover:bg-[#282433] text-[#ede5da] border border-white/20 hover:border-[#c88a36]/60 backdrop-blur-md transition-all text-center"
          >
            Explore Collection
          </a>
        </div>

        {/* 4 Poster Feature Pillars in Glassmorphic Horizontal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 w-full max-w-6xl mt-14">
          {posterBullets.map((bullet) => (
            <div 
              key={bullet.title}
              className="flex items-center space-x-3 p-3.5 rounded-2xl bg-[#17151e]/85 hover:bg-[#201d29]/95 border border-[#c88a36]/30 hover:border-[#f8c26c]/60 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-1 text-left group"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3d231a] to-[#c88a36] border border-[#f8c26c]/50 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(200,138,54,0.3)]">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-black tracking-wider text-white uppercase font-display block group-hover:text-[#f8c26c] transition-colors">
                  {bullet.title}
                </span>
                <span className="text-[11px] text-[#b5ada2] block">
                  {bullet.desc}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust & Live Status Strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-10 text-xs text-[#b5ada2]">
          <div className="flex items-center space-x-2">
            <Truck className="w-4 h-4 text-[#f8c26c]" />
            <span>Complimentary Global Express</span>
          </div>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/20" />
          <div className="flex items-center space-x-2">
            <Flame className="w-4 h-4 text-[#f8c26c]" />
            <span className="text-white font-medium">Limited Run: <strong className="text-[#f8c26c]">42 Pairs Remaining</strong></span>
          </div>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/20" />
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-[#f8c26c]" />
            <span>2-Year Craftsmanship Guarantee</span>
          </div>
        </div>

      </div>

    </section>
  );
}
