import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ArrowRight, Play, Pause, Truck, ShieldCheck, Feather, Sparkles } from 'lucide-react';
import { Button } from '../components/Button';

export function Hero({ onOpenOrder }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Check for prefers-reduced-motion & low-bandwidth conditions
  useEffect(() => {
    // 1. Accessibility: prefers-reduced-motion media query
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = (e) => {
      setIsReducedMotion(e.matches);
      if (e.matches) {
        setIsPlaying(false);
        if (videoRef.current) videoRef.current.pause();
      }
    };

    if (motionQuery.matches) {
      setIsReducedMotion(true);
      setIsPlaying(false);
    }
    motionQuery.addEventListener('change', handleMotionChange);

    // 2. Data Saver check
    const isSaveData = navigator.connection?.saveData === true;
    if (isSaveData) {
      setIsPlaying(false);
    }

    return () => motionQuery.removeEventListener('change', handleMotionChange);
  }, []);

  // Safe playback trigger handling browser autoplay & battery-saver constraints
  useEffect(() => {
    if (!videoRef.current) return;

    if (isPlaying && !isReducedMotion) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          // Autoplay policy or low-power mode prevention: fallback gracefully
          console.warn('Autoplay inhibited or paused by battery/system preference:', err);
          setIsPlaying(false);
        });
      }
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying, isReducedMotion]);

  // Handle play/pause user toggle
  const togglePlayPause = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  // Video loaded data handler for smooth fade-in
  const handleVideoLoaded = useCallback(() => {
    setIsVideoLoaded(true);
  }, []);

  const corePillars = [
    {
      title: "Free Delivery",
      detail: "Worldwide Express Courier",
      icon: Truck
    },
    {
      title: "Premium Materials",
      detail: "Italian Full-Grain Leather",
      icon: ShieldCheck
    },
    {
      title: "Cushioned Sole",
      detail: "Ergonomic Cloud-Stride Matrix",
      icon: Feather
    },
    {
      title: "Durable Design",
      detail: "360° Reinforced Welt Stitch",
      icon: Sparkles
    }
  ];

  return (
    <section 
      aria-label="Hero Showcase" 
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0d0c10]"
    >
      {/* ========================================================================= */}
      {/* 1. ROBUST LOOPING BACKGROUND VIDEO & FALLBACK POSTER LAYER               */}
      {/* ========================================================================= */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        {/* High-Resolution First-Frame Fallback Poster */}
        <img
          src="/poster.jpeg"
          alt="SHÖSE Luxury Footwear Poster Fallback"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-out ${
            isVideoLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Seamless Looping Video Backdrop */}
        <video
          ref={videoRef}
          src="/hero-video.mp4"
          poster="/poster.jpeg"
          autoPlay={!isReducedMotion}
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={handleVideoLoaded}
          onCanPlayThrough={handleVideoLoaded}
          disablePictureInPicture
          disableRemotePlayback
          controls={false}
          className={`w-full h-full object-cover transition-opacity duration-1000 ease-out ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* ======================================================================= */}
        {/* 2. ADAPTIVE DARK SCRIM OVERLAYS (GUARANTEED WCAG AA CONTRAST)            */}
        {/* ======================================================================= */}
        {/* Primary directional dark gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d11] via-[#0e0d11]/60 to-[#0e0d11]/75" />

        {/* Subtle radial vignette focusing on center editorial content */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.3)_0%,rgba(14,13,18,0.72)_60%,#0e0d11_100%)]" />

        {/* Top gradient to preserve pristine navbar contrast */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0e0d11] via-[#0e0d11]/80 to-transparent" />

        {/* Bottom smooth bleed into features section */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0f0e12] via-[#0f0e12]/70 to-transparent" />
      </div>

      {/* ========================================================================= */}
      {/* 3. REFINED LUXURY EDITORIAL FOREGROUND CONTENT                            */}
      {/* ========================================================================= */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 pt-36 sm:pt-40 md:pt-44 flex-1 flex flex-col justify-center items-center text-center">
        
        {/* Editorial Sub-Kicker */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/15 backdrop-blur-md mb-6 animate-in fade-in duration-700">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f8c26c]" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] font-semibold text-[#f8c26c] font-mono">
            Atelier Collection • Autumn / Winter 2026
          </span>
        </div>

        {/* Main Headline: Clean Editorial Typography */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white font-display leading-[0.95] drop-shadow-2xl">
            PRECISION IN MOTION
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#ede5da]/80 max-w-2xl mx-auto font-light leading-relaxed">
            Handcrafted Italian full-grain calfskin unified with our proprietary ergonomic cloud-cushioning. An iconic silhouette born from hardwood heritage and elevated for modern streetwear.
          </p>
        </div>

        {/* Conversion Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 w-full max-w-md">
          <Button
            variant="primary"
            size="lg"
            onClick={() => onOpenOrder()}
            className="w-full sm:w-auto shadow-[0_0_30px_rgba(200,138,54,0.4)]"
            icon={ArrowRight}
          >
            <span>Shop The Collection</span>
            <span className="ml-2 text-[10px] bg-black/40 text-[#f8c26c] px-2 py-0.5 rounded-full border border-[#f8c26c]/30 font-bold">
              50% OFF
            </span>
          </Button>

          <a
            href="#craftsmanship"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 text-xs font-bold uppercase tracking-widest rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/15 hover:border-white/30 backdrop-blur-md transition-all text-center"
          >
            Explore Craftsmanship
          </a>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 4. FROSTED GLASS FEATURE PILLARS (DE-CLUTTERED & UNOBTRUSIVE)              */}
      {/* ========================================================================= */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 pb-16 pt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {corePillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.title}
                className="flex items-center space-x-3.5 p-3.5 rounded-2xl backdrop-blur-md bg-white/[0.04] border border-white/10 hover:border-[#c88a36]/40 hover:bg-white/[0.07] transition-all duration-300 text-left group"
              >
                <div className="w-8 h-8 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0 text-[#f8c26c] group-hover:bg-[#c88a36]/20 transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold tracking-wider text-white uppercase font-display block group-hover:text-[#f8c26c] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-[11px] text-[#b5ada2] block">
                    {pillar.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 5. ACCESSIBLE PLAY / PAUSE MOTION TOGGLE (WCAG 2.2.2 COMPLIANT)           */}
      {/* ========================================================================= */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20">
        <button
          type="button"
          onClick={togglePlayPause}
          aria-label={isPlaying ? "Pause background video animation" : "Play background video animation"}
          title={isPlaying ? "Pause background animation" : "Play background animation"}
          className="flex items-center space-x-2 px-3 py-1.5 rounded-full backdrop-blur-md bg-black/60 hover:bg-black/80 border border-white/15 hover:border-white/30 text-white/80 hover:text-white text-xs transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-[#f8c26c]/50"
        >
          {isPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5 text-[#f8c26c]" />
              <span className="hidden sm:inline text-[10px] uppercase font-mono tracking-wider">Pause</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 text-[#f8c26c]" />
              <span className="hidden sm:inline text-[10px] uppercase font-mono tracking-wider">Play</span>
            </>
          )}
        </button>
      </div>

    </section>
  );
}
