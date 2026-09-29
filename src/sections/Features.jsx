import React from 'react';
import { Truck, ShieldCheck, Feather, Sparkles, ArrowUpRight } from 'lucide-react';
import { CORE_FEATURES } from '../data/shoesData';

const iconMap = {
  Truck: Truck,
  ShieldCheck: ShieldCheck,
  Feather: Feather,
  Sparkles: Sparkles
};

export function Features() {
  return (
    <section id="craftsmanship" className="py-24 relative bg-[#0f0e12] overflow-hidden border-t border-b border-white/5">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#c88a36]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#4a2b1f]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#201d29] border border-[#c88a36]/30 text-xs font-bold uppercase tracking-widest text-[#f8c26c]">
            <span>ENGINEERED PERFECTION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
            Built Different. Crafted Without Compromise.
          </h2>
          <p className="text-sm sm:text-base text-[#b5ada2] leading-relaxed">
            Every contour of the SHÖSE architecture reflects months of biomechanical testing and artisanal leatherwork. Directly honoring the four promises of our launch poster.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_FEATURES.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon] || Sparkles;
            return (
              <div
                key={feature.id}
                className="group relative p-8 rounded-3xl bg-[#17151e] border border-white/10 hover:border-[#c88a36]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-lg hover:shadow-[0_15px_30px_rgba(200,138,54,0.15)] flex flex-col justify-between"
              >
                {/* Subtle top indicator line */}
                <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#c88a36]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-5">
                  {/* Icon Box */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2a170f] to-[#17151e] border border-[#c88a36]/40 flex items-center justify-center text-[#f8c26c] shadow-[0_0_20px_rgba(200,138,54,0.2)] group-hover:scale-110 transition-transform">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#c88a36] font-bold">
                      Pillar 0{idx + 1}
                    </span>
                    <h3 className="text-xl font-black text-white font-display uppercase tracking-wide mt-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#f8c26c] mt-0.5">
                      {feature.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#b5ada2] leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="font-semibold text-white/90">{feature.highlight}</span>
                  <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[#c88a36] group-hover:bg-[#c88a36] group-hover:text-black transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
