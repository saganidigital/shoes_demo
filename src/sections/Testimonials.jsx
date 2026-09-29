import React from 'react';
import { Star, Quote, ShieldCheck, ThumbsUp } from 'lucide-react';
import { REVIEWS } from '../data/shoesData';

export function Testimonials() {
  return (
    <section id="reviews" className="py-16 sm:py-24 relative bg-[#0f0e12] overflow-hidden border-t border-b border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#c88a36]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#201d29] border border-[#c88a36]/30 text-xs font-bold uppercase tracking-widest text-[#f8c26c]">
            <Quote className="w-3.5 h-3.5" />
            <span>COLLECTOR DISPATCHES</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
            Loved By Tastemakers Worldwide
          </h2>
          <p className="text-xs sm:text-base text-[#b5ada2]">
            Over 1,200 pairs delivered across 24 countries. Read authentic impressions from early owners of our limited run.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#17151e] border border-white/10 hover:border-[#c88a36]/50 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div className="space-y-4">
                {/* 5-Star Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-[#f8c26c]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#f8c26c]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-[#b5ada2]">{review.date}</span>
                </div>

                <h3 className="text-lg font-bold text-white font-display group-hover:text-[#f8c26c] transition-colors">
                  "{review.title}"
                </h3>

                <p className="text-xs sm:text-sm text-[#b5ada2] leading-relaxed">
                  {review.comment}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#3a2219] to-[#c88a36] flex items-center justify-center text-xs font-bold text-white">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{review.name}</h4>
                      <p className="text-[10px] text-[#b5ada2]">{review.role}</p>
                    </div>
                  </div>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" title="Verified Purchase" />
                </div>

                <div className="text-[11px] text-[#c88a36] font-mono">
                  Purchased: {review.shoeModel}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Review Trust Bar */}
        <div className="mt-16 p-6 rounded-3xl bg-[#181622] border border-[#c88a36]/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center space-x-4">
            <div className="text-3xl sm:text-4xl font-black text-[#f8c26c] font-display">
              4.97 / 5.0
            </div>
            <div>
              <div className="flex items-center space-x-1 text-[#f8c26c]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#f8c26c]" />
                ))}
              </div>
              <p className="text-xs text-[#b5ada2] mt-0.5">Average Customer Rating from 1,240+ verified deliveries</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-xs font-bold text-white bg-[#201d2a] px-4 py-2 rounded-full border border-white/10">
            <ThumbsUp className="w-4 h-4 text-[#f8c26c]" />
            <span>99.4% Recommendation Rate</span>
          </div>
        </div>

      </div>
    </section>
  );
}
