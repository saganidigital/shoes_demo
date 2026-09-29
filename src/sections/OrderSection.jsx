import React, { useState, useEffect } from 'react';
import { ShoppingBag, Truck, ShieldCheck, Clock, Sparkles, Phone, Mail, MapPin, Check } from 'lucide-react';
import { PRODUCTS, BRAND_INFO } from '../data/shoesData';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';

export function OrderSection({ onOpenOrder }) {
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [selectedSize, setSelectedSize] = useState(9.5);
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 28, seconds: 45 });
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  // 50% Off Launch Countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setEmailSubscribed(true);
      setTimeout(() => setEmailSubscribed(false), 4000);
      setNewsletterEmail('');
    }
  };

  return (
    <section id="order-now" className="py-16 sm:py-24 relative bg-[#121115] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[#c88a36]/15 via-[#4a2b1f]/20 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Card Frame */}
        <div className="rounded-2xl sm:rounded-[2.5rem] bg-gradient-to-b from-[#1c1924] to-[#14121a] border-2 border-[#c88a36]/40 p-5 sm:p-10 lg:p-16 shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_50px_rgba(200,138,54,0.2)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#3d231a] border border-[#c88a36] text-xs font-bold uppercase tracking-widest text-[#f8c26c]">
                  <Clock className="w-3.5 h-3.5 text-[#f8c26c]" />
                  <span>SPECIAL 50% OFF FLASH ALLOCATION</span>
                </div>

                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight uppercase">
                  DON'T MISS THE <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f8c26c] via-[#c88a36] to-[#8d541a]">POSTER RUN</span>
                </h2>

                <p className="text-sm sm:text-base text-[#b5ada2] max-w-xl">
                  Complimentary worldwide express shipping is included on all launch orders. Secure your size now before our seasonal batch is completely allocated.
                </p>
              </div>

              {/* Urgency Countdown Timer */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#14121a]/90 border border-white/10 max-w-md space-y-2">
                <div className="flex justify-between items-center text-xs text-[#b5ada2] font-semibold uppercase tracking-wider">
                  <span>Launch Event Ends In:</span>
                  <span className="text-[#f8c26c] font-bold">Limited Quantities</span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-2.5 rounded-xl bg-[#201d29] border border-white/5">
                    <span className="block text-2xl font-black text-white font-mono">{String(timeLeft.hours).padStart(2, '0')}</span>
                    <span className="text-[10px] uppercase text-[#b5ada2]">Hours</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#201d29] border border-white/5">
                    <span className="block text-2xl font-black text-white font-mono">{String(timeLeft.minutes).padStart(2, '0')}</span>
                    <span className="text-[10px] uppercase text-[#b5ada2]">Minutes</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#201d29] border border-white/5">
                    <span className="block text-2xl font-black text-[#f8c26c] font-mono">{String(timeLeft.seconds).padStart(2, '0')}</span>
                    <span className="text-[10px] uppercase text-[#b5ada2]">Seconds</span>
                  </div>
                </div>
              </div>

              {/* Direct Concierge Hotline Info from Poster */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#191722] border border-white/10 space-y-1">
                  <div className="flex items-center space-x-2 text-xs text-[#b5ada2]">
                    <Phone className="w-3.5 h-3.5 text-[#f8c26c]" />
                    <span className="uppercase font-bold tracking-wider">Order By Hotline</span>
                  </div>
                  <div className="text-sm font-bold text-white font-mono">
                    03XXXXXXXXX / 92+XXXXXXXXXX
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#191722] border border-white/10 space-y-1">
                  <div className="flex items-center space-x-2 text-xs text-[#b5ada2]">
                    <Mail className="w-3.5 h-3.5 text-[#f8c26c]" />
                    <span className="uppercase font-bold tracking-wider">Concierge Email</span>
                  </div>
                  <div className="text-sm font-bold text-white font-mono">
                    {BRAND_INFO.email}
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Quick Selection & Instant Buy Card */}
            <div className="lg:col-span-5 bg-[#17151f] rounded-3xl p-6 sm:p-8 border border-[#c88a36]/30 shadow-2xl space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#f8c26c]">
                  Select Model
                </span>
                <span className="text-xs text-emerald-400 font-bold">
                  Free Express Delivery
                </span>
              </div>

              {/* Model Selector Tabs */}
              <div className="grid grid-cols-3 gap-2">
                {PRODUCTS.map(shoe => (
                  <button
                    key={shoe.id}
                    onClick={() => setSelectedProduct(shoe)}
                    className={`p-2 rounded-xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                      selectedProduct.id === shoe.id
                        ? 'border-[#c88a36] bg-[#2a170f] shadow-[0_0_15px_rgba(200,138,54,0.3)]'
                        : 'border-white/10 bg-[#121116] hover:border-white/20'
                    }`}
                  >
                    <img src={shoe.image} alt={shoe.name} className="w-12 h-12 object-contain" />
                    <span className="text-[10px] font-bold text-white truncate max-w-[80px]">
                      {shoe.name.split("'")[1] || shoe.name}
                    </span>
                  </button>
                ))}
              </div>

              {/* Selected Shoe Summary */}
              <div className="p-4 rounded-2xl bg-[#121116] border border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{selectedProduct.name}</h4>
                  <p className="text-xs text-[#b5ada2]">{selectedProduct.colorway}</p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-black text-[#f8c26c] font-display">${selectedProduct.price}</div>
                  <div className="text-xs line-through text-white/40">${selectedProduct.originalPrice}</div>
                </div>
              </div>

              {/* Size Selector */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#b5ada2]">
                  Select US Size:
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {(selectedProduct.sizes || [8, 8.5, 9, 9.5, 10, 10.5, 11, 12]).slice(0, 8).map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                        selectedSize === size
                          ? 'bg-[#c88a36] text-black border-[#f8c26c] shadow-md'
                          : 'bg-[#1b1923] text-white/70 border-white/10 hover:border-[#c88a36]/50'
                      }`}
                    >
                      US {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Big Direct Buy Button */}
              <Button
                variant="primary"
                size="lg"
                onClick={() => onOpenOrder(selectedProduct, selectedSize)}
                className="w-full text-base"
                icon={ShoppingBag}
              >
                Instant Order — ${selectedProduct.price} USD
              </Button>

              <div className="flex items-center justify-center space-x-4 text-[11px] text-[#b5ada2] pt-1">
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-[#f8c26c]" /> Cash on Delivery Available
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-[#f8c26c]" /> 30-Day Free Returns
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Newsletter VIP Club Box */}
        <div className="mt-16 max-w-3xl mx-auto text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
            Join the SHÖSE Footwear Private Circle
          </h3>
          <p className="text-xs sm:text-sm text-[#b5ada2]">
            Receive secret drop dates, private archive releases, and members-only restock notifications.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your VIP email address"
              className="flex-1 px-5 py-3 rounded-full bg-[#181622] border border-white/15 focus:border-[#c88a36] focus:outline-none text-sm text-white placeholder-white/40"
            />
            <Button type="submit" variant="secondary" size="md">
              {emailSubscribed ? "Subscribed!" : "Join Circle"}
            </Button>
          </form>
          {emailSubscribed && (
            <p className="text-xs text-emerald-400 font-semibold animate-in fade-in">
              ✓ Welcome to the inner circle! Check your inbox for your 10% welcome bonus.
            </p>
          )}
        </div>

      </div>
    </section>
  );
}
