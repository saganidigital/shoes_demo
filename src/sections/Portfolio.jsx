import React, { useState } from 'react';
import { Star, ShoppingBag, Eye, Check, Sparkles, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/shoesData';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';

export function Portfolio({ onSelectProduct }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { label: "All Editions", value: "all" },
    { label: "Poster Hero", value: "Poster Hero" },
    { label: "Bronze & Mocha", value: "Warm Palette" },
    { label: "Stealth Noir", value: "Gold Eyelets" }
  ];

  const filteredProducts = activeFilter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.tags.includes(activeFilter) || p.badge.includes(activeFilter));

  return (
    <section id="collection" className="py-24 relative bg-[#121115] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#c88a36]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#201d29] border border-[#c88a36]/30 text-xs font-bold uppercase tracking-widest text-[#f8c26c]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE 2026 ARCHIVE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
              Featured Retro Court Lineup
            </h2>
            <p className="text-sm sm:text-base text-[#b5ada2]">
              Precision stitched high-top sneakers rendered with the signature bronze, mocha, and chalk silhouette. All eligible for the 50% launch reduction.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map(filter => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${
                  activeFilter === filter.value
                    ? 'bg-[#c88a36] text-black shadow-[0_0_15px_rgba(200,138,54,0.4)]'
                    : 'bg-[#1b1923] text-white/70 border border-white/10 hover:border-white/20'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-3xl bg-[#17151e] border border-white/10 hover:border-[#c88a36]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            >
              {/* Top Tags & Discount Pill */}
              <div className="absolute top-4 inset-x-4 z-10 flex items-center justify-between pointer-events-none">
                <Badge variant="poster">
                  {product.badge}
                </Badge>
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#3a2219] to-[#c88a36] border border-[#f8c26c] flex flex-col items-center justify-center text-white shadow-lg">
                  <span className="text-[11px] font-black leading-none text-[#f8c26c]">50%</span>
                  <span className="text-[8px] font-bold tracking-tighter uppercase leading-none">OFF</span>
                </div>
              </div>

              {/* Product Image Frame */}
              <div className="relative aspect-square w-full bg-gradient-to-b from-[#1c1a24] to-[#121116] overflow-hidden p-6 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transform group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-500 ease-out"
                />

                {/* Hover overlay quick action */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="px-5 py-2.5 rounded-full bg-[#c88a36] text-black font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-[#f8c26c] transition-colors flex items-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Quick Order
                  </button>
                </div>
              </div>

              {/* Product Details Card Footer */}
              <div className="p-6 space-y-4 bg-[#181621] border-t border-white/5">
                
                {/* Rating & Reviews */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-1 text-[#f8c26c]">
                    <Star className="w-4 h-4 fill-[#f8c26c]" />
                    <span className="font-bold text-white ml-1">{product.rating}</span>
                    <span className="text-[#b5ada2]">({product.reviewsCount} verified reviews)</span>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-semibold bg-emerald-950/50 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                    In Stock
                  </span>
                </div>

                {/* Title & Colorway */}
                <div>
                  <h3 className="text-xl font-black text-white font-display group-hover:text-[#f8c26c] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#b5ada2] mt-0.5">
                    {product.colorway}
                  </p>
                </div>

                <p className="text-xs text-white/70 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>

                {/* Pricing & Order CTA */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex flex-col">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl font-black text-[#f8c26c] font-display">
                        ${product.price}
                      </span>
                      <span className="text-xs line-through text-white/40">
                        ${product.originalPrice}
                      </span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-medium">
                      Free Worldwide Shipping
                    </span>
                  </div>

                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => onSelectProduct(product)}
                    icon={ArrowRight}
                  >
                    Select Size
                  </Button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
