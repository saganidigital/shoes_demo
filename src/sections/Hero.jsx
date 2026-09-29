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
      detail: "Global Air Express",
      icon: Truck
    },
    {
      title: "Premium Materials",
      detail: "Italian Full-Grain Leather",
      icon: ShieldCheck
    },
    {
      title: "Cushioned Sole",
      detail: "Ergonomic Cloud Matrix",
      icon: Feather
    },
    {
      title: "Durable Design",
      detail: "360° Reinforced Welt",
      icon: Sparkles
    }
  ];

  return (
    <section 
      aria-label="Hero Showcase" 
      className="relative min-h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-[#0d0c10]"
    >
      {/* ========================================================================= */}
      {/* 1. RESPONSIVE BACKGROUND VIDEO: SHRINKS ON MOBILE, EXPANDS ON DESKTOP      */}
      {/* ========================================================================= */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0 flex items-center justify-center"
        aria-hidden="true"
      >
        {/* Fallback Poster: Responsive Object Fit */}
        <img
          src="/poster.jpeg"
          alt="SHÖSE Luxury Footwear Poster Fallback"
          className={`absolute inset-0 w-full h-full object-cover object-center md:object-center 2xl:object-cover transition-opacity duration-1000 ease-out ${
            isVideoLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Video: Scaled proportionally on mobile, expanded fully on desktop/ultrawide */}
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
          className={`w-full h-full object-cover object-center md:object-center 2xl:scale-105 transition-all duration-1000 ease-out will-change-transform ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* ======================================================================= */}
        {/* 2. ADAPTIVE GRADIENT SCRIM (SCALED FOR ALL VIEWPORTS)                   */}
        {/* ======================================================================= */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d11] via-[#0e0d11]/55 to-[#0e0d11]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.25)_0%,rgba(14,13,18,0.72)_65%,#0e0d11_100%)]" />
        <div className="absolute inset-x-0 top-0 h-28 sm:h-36 md:h-44 bg-gradient-to-b from-[#0e0d11] via-[#0e0d11]/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 sm:h-40 md:h-48 bg-gradient-to-t from-[#0f0e12] via-[#0f0e12]/75 to-transparent" />
      </div>

      {/* ========================================================================= */}
      {/* 3. FLUID RESPONSIVE EDITORIAL FOREGROUND CONTENT                           */}
      {/* ========================================================================= */}
      <div className="relative max-w-7xl 2xl:max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 pt-28 xs:pt-32 sm:pt-36 md:pt-44 flex-1 flex flex-col justify-center items-center text-center">
        
        {/* Editorial Sub-Kicker: Responsive font & padding */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/[0.05] border border-white/15 backdrop-blur-md mb-4 sm:mb-6 animate-in fade-in duration-700">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f8c26c]" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] font-semibold text-[#f8c26c] font-mono">
            Atelier Collection • Autumn / Winter 2026
          </span>
        </div>

        {/* Main Headline: Scales gracefully from 32px on small phones to 130px on 2K/4K */}
        <div className="space-y-3 sm:space-y-4 max-w-4xl 2xl:max-w-5xl mx-auto">
          <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-black uppercase tracking-tight text-white font-display leading-[0.96] drop-shadow-2xl">
            PRECISION IN MOTION
          </h1>

          <p className="text-xs xs:text-sm sm:text-base md:text-lg 2xl:text-xl text-[#ede5da]/80 max-w-xs xs:max-w-md sm:max-w-2xl 2xl:max-w-3xl mx-auto font-light leading-relaxed">
            Handcrafted Italian full-grain calfskin unified with our proprietary ergonomic cloud-cushioning. An iconic silhouette born from hardwood heritage and elevated for modern streetwear.
          </p>
        </div>

        {/* Conversion Action Buttons: Stack on mobile, inline on tablet+ */}
        <div className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 pt-6 sm:pt-8 w-full max-w-xs xs:max-w-md">
          <Button
            variant="primary"
            size="md"
            onClick={() => onOpenOrder()}
            className="w-full xs:w-auto shadow-[0_0_30px_rgba(200,138,54,0.4)] sm:px-8 sm:py-4"
            icon={ArrowRight}
          >
            <span>Shop The Collection</span>
            <span className="ml-2 text-[10px] bg-black/40 text-[#f8c26c] px-2 py-0.5 rounded-full border border-[#f8c26c]/30 font-bold">
              50% OFF
            </span>
          </Button>

          <a
            href="#craftsmanship"
            className="w-full xs:w-auto inline-flex items-center justify-center px-6 py-3 sm:px-7 sm:py-4 text-xs font-bold uppercase tracking-widest rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/15 hover:border-white/30 backdrop-blur-md transition-all text-center"
          >
            Explore Craftsmanship
          </a>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 4. FROSTED GLASS FEATURE PILLARS: 2x2 ON MOBILE, 4-COL ON DESKTOP        */}
      {/* ========================================================================= */}
      <div className="relative max-w-7xl 2xl:max-w-[1500px] mx-auto px-3 sm:px-6 lg:px-8 w-full z-10 pb-8 sm:pb-12 md:pb-16 pt-8 sm:pt-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3.5 2xl:gap-5">
          {corePillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.title}
                className="flex items-center space-x-2 sm:space-x-3.5 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl backdrop-blur-md bg-white/[0.04] border border-white/10 hover:border-[#c88a36]/40 hover:bg-white/[0.07] transition-all duration-300 text-left group"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0 text-[#f8c26c] group-hover:bg-[#c88a36]/20 transition-colors">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[11px] sm:text-xs font-bold tracking-wider text-white uppercase font-display block truncate group-hover:text-[#f8c26c] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-[#b5ada2] block truncate">
                    {pillar.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 5. ACCESSIBLE PLAY / PAUSE MOTION TOGGLE (POSITIONED SAFELY ON ALL SCREENS) */}
      {/* ========================================================================= */}
      <div className="absolute bottom-20 lg:bottom-6 right-3 sm:right-6 z-20">
        <button
          type="button"
          onClick={togglePlayPause}
          aria-label={isPlaying ? "Pause background video animation" : "Play background video animation"}
          title={isPlaying ? "Pause background animation" : "Play background animation"}
          className="flex items-center space-x-1.5 sm:space-x-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full backdrop-blur-md bg-black/60 hover:bg-black/80 border border-white/15 hover:border-white/30 text-white/80 hover:text-white text-xs transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-[#f8c26c]/50"
        >
          {isPlaying ? (
            <>
              <Pause className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#f8c26c]" />
              <span className="hidden sm:inline text-[10px] uppercase font-mono tracking-wider">Pause</span>
            </>
          ) : (
            <>
              <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#f8c26c]" />
              <span className="hidden sm:inline text-[10px] uppercase font-mono tracking-wider">Play</span>
            </>
          )}
        </button>
      </div>

    </section>
  );
}
