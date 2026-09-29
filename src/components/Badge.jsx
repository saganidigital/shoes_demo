import React from 'react';

export function Badge({ children, variant = 'gold', className = '', ...props }) {
  const variantStyles = {
    gold: "bg-[#c88a36]/15 text-[#f8c26c] border border-[#c88a36]/30",
    poster: "bg-[#3e231a] text-[#f8c26c] border border-[#c88a36] shadow-[0_0_15px_rgba(200,138,54,0.3)]",
    discount: "bg-gradient-to-br from-[#c88a36] to-[#8d541a] text-black font-extrabold shadow-lg",
    neutral: "bg-white/10 text-white/90 border border-white/15",
    outline: "bg-transparent text-[#b5ada2] border border-white/20"
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase ${variantStyles[variant] || variantStyles.gold} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

export function PosterDiscountCircle({ percent = "50% OFF", className = "" }) {
  return (
    <div className={`relative flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-[#c88a36] bg-[#221f29]/95 text-center shadow-[0_0_25px_rgba(200,138,54,0.35)] backdrop-blur-md ${className}`}>
      <div className="absolute inset-1 rounded-full border border-[#c88a36]/30 pointer-events-none" />
      <span className="text-lg md:text-xl font-black text-[#f8c26c] tracking-tight leading-none">50%</span>
      <span className="text-[10px] md:text-xs font-bold tracking-widest text-white uppercase mt-0.5">OFF</span>
    </div>
  );
}
