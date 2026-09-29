import React, { useState } from 'react';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { Features } from './sections/Features';
import { Portfolio } from './sections/Portfolio';
import { SpecialEdition } from './sections/SpecialEdition';
import { Specifications } from './sections/Specifications';
import { Testimonials } from './sections/Testimonials';
import { OrderSection } from './sections/OrderSection';
import { Footer } from './sections/Footer';
import { OrderModal } from './components/OrderModal';
import { PRODUCTS } from './data/shoesData';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export default function App() {
  const [selectedProductForOrder, setSelectedProductForOrder] = useState(null);
  const [selectedSizeForOrder, setSelectedSizeForOrder] = useState(9.5);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const handleOpenOrder = (product = PRODUCTS[0], size = 9.5) => {
    setSelectedProductForOrder(product);
    setSelectedSizeForOrder(size);
    setIsOrderModalOpen(true);
  };

  const handleCloseOrder = () => {
    setIsOrderModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#121115] text-[#ede5da] flex flex-col selection:bg-[#c88a36] selection:text-black font-sans relative">
      {/* Top Fixed Navigation */}
      <Navbar onOpenOrder={handleOpenOrder} />

      {/* Main Content Layout */}
      <main className="flex-1">
        {/* 1. Hero Section with Looping Non-Pausable Video without Controls */}
        <Hero onOpenOrder={handleOpenOrder} />

        {/* 2. Core Features (Free Delivery, Premium Materials, Cushioned Sole, Durable Design) */}
        <Features />

        {/* 3. Product Portfolio / Retro High-Top Lineup */}
        <Portfolio onSelectProduct={(prod) => handleOpenOrder(prod)} />

        {/* 4. Special Edition Poster Showcase & Breakdown */}
        <SpecialEdition onOpenOrder={(prod) => handleOpenOrder(prod || PRODUCTS[0])} />

        {/* 5. Cushioned Sole Specifications, Lab Metrics & FAQs */}
        <Specifications />

        {/* 6. Testimonials & Client Reviews */}
        <Testimonials />

        {/* 7. Interactive Order Section with Urgency Countdown */}
        <OrderSection onOpenOrder={handleOpenOrder} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Quick Order Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={handleCloseOrder}
        product={selectedProductForOrder || PRODUCTS[0]}
        initialSize={selectedSizeForOrder}
      />

      {/* Floating Bottom Quick Action on Mobile */}
      <aside aria-label="Quick order toolbar" className="lg:hidden fixed bottom-4 inset-x-4 z-30 flex items-center justify-between p-3 rounded-full bg-[#181622]/95 backdrop-blur-xl border border-[#c88a36]/40 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
        <div className="flex items-center space-x-2 pl-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <div className="text-left">
            <div className="text-[10px] uppercase font-bold text-[#f8c26c] leading-none">50% Off Event</div>
            <div className="text-xs font-bold text-white">$160 USD • Free Air Freight</div>
          </div>
        </div>
        <button
          onClick={() => handleOpenOrder()}
          className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#d99b43] to-[#c88a36] text-black font-extrabold text-xs tracking-wider uppercase shadow-md flex items-center gap-1.5"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Order Now
        </button>
      </aside>
    </div>
  );
}
