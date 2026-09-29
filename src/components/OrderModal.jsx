import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Truck, Sparkles, ShoppingBag } from 'lucide-react';
import { Button } from './Button';
import { Badge } from './Badge';

export function OrderModal({ isOpen, onClose, product, initialSize = 9 }) {
  const [selectedSize, setSelectedSize] = useState(initialSize);
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen || !product) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  const totalPrice = product.price * quantity;
  const originalTotal = product.originalPrice * quantity;
  const savings = originalTotal - totalPrice;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#17151d] border border-[#c88a36]/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] text-[#ede5da] max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-modal-title"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#1c1924]">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c88a36] animate-pulse" />
            <h3 id="order-modal-title" className="text-sm md:text-base font-bold tracking-wider uppercase text-white font-display">
              {isSubmitted ? "Order Confirmed" : "Direct Order — Special Edition"}
            </h3>
          </div>
          <button
            onClick={resetAndClose}
            aria-label="Close modal"
            className="p-1.5 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-6 space-y-6">
          {isSubmitted ? (
            <div className="py-10 text-center space-y-5 animate-in zoom-in-95 duration-300">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#c88a36]/20 border-2 border-[#c88a36] flex items-center justify-center text-[#f8c26c]">
                <CheckCircle className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl md:text-3xl font-bold font-display text-white">
                  Order Successfully Placed!
                </h4>
                <p className="text-sm text-[#b5ada2] max-w-md mx-auto">
                  Thank you, <span className="text-white font-medium">{formData.name || 'Valued Client'}</span>. Your VIP priority allocation for the <span className="text-[#f8c26c]">{product.name}</span> (Size {selectedSize} US) has been reserved.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#201e28] border border-white/10 max-w-sm mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between text-[#b5ada2]">
                  <span>Total Paid (Cash on Delivery / Card):</span>
                  <span className="font-bold text-[#f8c26c]">${totalPrice} USD</span>
                </div>
                <div className="flex justify-between text-[#b5ada2]">
                  <span>Shipping:</span>
                  <span className="text-emerald-400 font-semibold">FREE Express Courier</span>
                </div>
                <div className="flex justify-between text-[#b5ada2]">
                  <span>Estimated Delivery:</span>
                  <span className="text-white">3 – 5 Business Days</span>
                </div>
              </div>

              <div className="pt-2">
                <Button variant="primary" onClick={resetAndClose}>
                  Continue Browsing
                </Button>
              </div>
            </div>
          ) : (
            <>
              {/* Product preview banner */}
              <div className="flex flex-col sm:flex-row items-center gap-5 p-4 rounded-2xl bg-[#201e29] border border-[#c88a36]/20">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden bg-[#121115] shrink-0 border border-white/10">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-1 left-1 bg-[#c88a36] text-black text-[10px] font-black px-1.5 py-0.5 rounded">
                    50% OFF
                  </span>
                </div>

                <div className="space-y-1.5 text-center sm:text-left flex-1">
                  <Badge variant="poster">{product.badge || "LIMITED EDITION"}</Badge>
                  <h4 className="text-lg font-bold text-white font-display">{product.name}</h4>
                  <p className="text-xs text-[#b5ada2]">{product.colorway}</p>
                  <div className="flex items-center justify-center sm:justify-start gap-2 pt-1">
                    <span className="text-2xl font-black text-[#f8c26c]">${totalPrice}</span>
                    <span className="text-sm line-through text-white/40">${originalTotal}</span>
                    <span className="text-xs text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                      Save ${savings}
                    </span>
                  </div>
                </div>
              </div>

              {/* Shoe Size Selector */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold uppercase tracking-wider text-[#b5ada2]">Select US Mens / Unisex Size:</span>
                  <span className="text-[#f8c26c]">True to size fit</span>
                </div>
                <div className="grid grid-cols-5 sm:grid-cols-8 gap-2">
                  {(product.sizes || [7, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12]).map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                        selectedSize === size
                          ? 'bg-[#c88a36] text-black border-[#f8c26c] shadow-[0_0_15px_rgba(200,138,54,0.4)]'
                          : 'bg-[#201e28] text-white/80 border-white/10 hover:border-[#c88a36]/50'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Checkout Form */}
              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#b5ada2] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alexander Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#121115] border border-white/15 focus:border-[#c88a36] focus:outline-none text-sm text-white placeholder-white/30"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#b5ada2] mb-1">
                      Phone Number (For Courier) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 019-2834"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#121115] border border-white/15 focus:border-[#c88a36] focus:outline-none text-sm text-white placeholder-white/30"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#b5ada2] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#121115] border border-white/15 focus:border-[#c88a36] focus:outline-none text-sm text-white placeholder-white/30"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#b5ada2] mb-1">
                      City & Postal Code *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="New York, NY 10001"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#121115] border border-white/15 focus:border-[#c88a36] focus:outline-none text-sm text-white placeholder-white/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#b5ada2] mb-1">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Apartment, suite, street address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#121115] border border-white/15 focus:border-[#c88a36] focus:outline-none text-sm text-white placeholder-white/30"
                  />
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-2 py-2 border-y border-white/10 text-[11px] text-[#b5ada2]">
                  <div className="flex items-center gap-1.5 justify-center">
                    <Truck className="w-3.5 h-3.5 text-[#f8c26c]" />
                    <span>Free Delivery</span>
                  </div>
                  <div className="flex items-center gap-1.5 justify-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#f8c26c]" />
                    <span>2-Yr Warranty</span>
                  </div>
                  <div className="flex items-center gap-1.5 justify-center">
                    <Sparkles className="w-3.5 h-3.5 text-[#f8c26c]" />
                    <span>100% Authentic</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                    icon={ShoppingBag}
                  >
                    {isSubmitting ? "Securing Allocation..." : `Confirm Order — $${totalPrice} USD (Free Express)`}
                  </Button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
