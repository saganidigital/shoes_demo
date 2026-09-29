import React, { useState } from 'react';
import { ChevronDown, Check, ShieldCheck, Cpu, Layers, Sparkles } from 'lucide-react';
import { TECHNICAL_SPECS, FAQ_ITEMS } from '../data/shoesData';

export function Specifications() {
  const [openFaq, setOpenFaq] = useState(0);

  const anatomyPillars = [
    {
      title: "Anatomic Heel Cradle",
      desc: "Deep cupped heel counter stabilizes the calcaneus bone, preventing micro-pronation and fatigue during prolonged city walking."
    },
    {
      title: "Pressurized Air Shock Matrix",
      desc: "Sub-midsole pneumatic chamber absorbs up to 48% of kinetic ground strike, channeling smooth forward propulsion."
    },
    {
      title: "Orthopedic Dual-Density Foam",
      desc: "High-rebound polyurethane open-cell foam contours to individual foot arches while maintaining thermal breathability."
    },
    {
      title: "Diamond Herringbone Grip",
      desc: "Non-marking vulcanized rubber outsole compound designed for multi-surface traction on wet pavement and polished floors."
    }
  ];

  return (
    <section id="specs" className="py-16 sm:py-24 relative bg-[#121115] overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-[#c88a36]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#201d29] border border-[#c88a36]/30 text-xs font-bold uppercase tracking-widest text-[#f8c26c]">
            <Cpu className="w-3.5 h-3.5" />
            <span>LAB GRADE PERFORMANCE</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
            Anatomy of the Cushioned Sole
          </h2>
          <p className="text-xs sm:text-base text-[#b5ada2]">
            Discover why our signature high-top doesn't just look legendary — it delivers all-day cloud-like comfort that outclasses conventional cup soles.
          </p>
        </div>

        {/* Anatomy Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {anatomyPillars.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#17151e] border border-white/10 hover:border-[#c88a36]/50 transition-all duration-300 space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#f8c26c] font-bold">TECH 0{idx + 1}</span>
                <Layers className="w-4 h-4 text-[#c88a36]" />
              </div>
              <h3 className="text-lg font-bold text-white font-display group-hover:text-[#f8c26c] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#b5ada2] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Specs Table & FAQ Accordion Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Technical Specs Table */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white font-display uppercase tracking-wide">
                Build & Material Metrics
              </h3>
              <p className="text-xs sm:text-sm text-[#b5ada2]">
                Every component is verified against international footwear durability protocols.
              </p>
            </div>

            <div className="rounded-3xl bg-[#181621] border border-white/10 overflow-hidden divide-y divide-white/5">
              {TECHNICAL_SPECS.map((spec, index) => (
                <div key={index} className="flex justify-between items-center px-6 py-4 text-xs sm:text-sm hover:bg-white/[0.02] transition-colors">
                  <span className="text-[#b5ada2] font-medium">{spec.label}</span>
                  <span className="text-white font-bold text-right ml-4">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Interactive FAQ Accordion */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white font-display uppercase tracking-wide">
                Frequently Asked Questions
              </h3>
              <p className="text-xs sm:text-sm text-[#b5ada2]">
                Everything you need to know about sizing, promotional delivery, and guarantees.
              </p>
            </div>

            <div className="space-y-3">
              {FAQ_ITEMS.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl bg-[#181621] border border-white/10 overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      className="w-full px-6 py-4.5 text-left flex justify-between items-center gap-4 hover:bg-white/[0.02] transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm font-bold text-white font-display">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#c88a36] shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#b5ada2] leading-relaxed border-t border-white/5 bg-[#14121a]/60 animate-in fade-in duration-200">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
