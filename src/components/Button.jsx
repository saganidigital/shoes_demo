import React from 'react';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  type = 'button',
  onClick,
  disabled = false,
  ariaLabel,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500/50";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs tracking-wider uppercase",
    md: "px-6 py-3 text-sm tracking-wide",
    lg: "px-8 py-4 text-base tracking-wider uppercase font-bold",
    icon: "p-3 rounded-full"
  };

  const variantStyles = {
    primary: "bg-gradient-to-r from-[#d99b43] via-[#c88a36] to-[#b37424] text-[#0f0e12] font-bold shadow-[0_0_25px_rgba(200,138,54,0.35)] hover:shadow-[0_0_35px_rgba(200,138,54,0.6)] hover:brightness-110 border border-[#f5c469]/50",
    secondary: "bg-[#23202b] text-[#ede5da] hover:bg-[#2f2b3a] border border-[#c88a36]/30 hover:border-[#c88a36]/70 shadow-md",
    poster: "bg-[#3e231a] text-[#fbf9f5] border-2 border-[#c88a36] hover:bg-[#522f23] hover:border-[#f5c469] shadow-[0_0_20px_rgba(200,138,54,0.3)]",
    outline: "bg-transparent text-[#ede5da] border border-white/20 hover:border-[#c88a36] hover:bg-[#c88a36]/10",
    ghost: "bg-transparent text-[#b5ada2] hover:text-white hover:bg-white/5",
    danger: "bg-red-500/20 text-red-300 border border-red-500/30 hover:bg-red-500/30"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 mr-2 transition-transform duration-200 group-hover:-translate-x-0.5" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-0.5" />}
    </button>
  );
}
