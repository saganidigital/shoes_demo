# SHÖSE — Luxury High-Top Footwear & Modern Streetwear

A high-converting, modern luxury sneaker showcase website built with **React**, **Vite**, **Tailwind CSS v4**, and **Lucide React**.

Inspired by retro court silhouettes, featuring full background looping hero video, poster-matched bronze & obsidian color palette, interactive product catalog, cushioned sole anatomy, and direct checkout experience.

---

## 🌟 Key Features

- **Full-Bleed Background Video**: Continuous seamless loop with no controls, no progress bar, and no pause ability.
- **Poster-Derived Color Theme**: Warm bronze (`#3d231a`), rich amber gold (`#c88a36`), and deep obsidian slate (`#121115`) inspired by the master campaign poster.
- **4 Poster Core Pillars**:
  - *Free Delivery* (Global express courier)
  - *Premium Materials* (Hand-finished Italian full-grain leather)
  - *Cushioned Sole* (Ergonomic cloud-impact matrix)
  - *Durable Design* (360° Goodyear welt stitch)
- **High-Conversion Architecture**:
  - Floating 50% OFF promotional badges.
  - Interactive direct checkout modal with size selection and live order status.
  - Flash launch countdown timer.
  - Client reviews & verified trust metrics.
- **Vercel & SPA Ready**: Includes `vercel.json` rewrite configuration for seamless client-side routing.

---

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) (Named imports)
- **Deployment**: Vercel ready (`vercel.json`)

---

## 📂 Project Architecture

```
shoes/
├── public/                  # Static assets & hero video
│   ├── hero-video.mp4
│   └── poster.jpeg
├── src/
│   ├── assets/              # High-res sneaker renders & imagery
│   ├── components/          # Reusable UI (Button, Badge, OrderModal)
│   ├── sections/            # Modular landing blocks (Navbar, Hero, Features, Portfolio, SpecialEdition, Specifications, Testimonials, OrderSection, Footer)
│   ├── hooks/               # Custom hooks (useScroll, useMediaQuery)
│   ├── data/                # Zero-hardcoded data arrays (shoesData.js)
│   ├── App.jsx              # Main application layout
│   └── index.css            # Tailwind CSS & design tokens
├── vercel.json              # Vercel SPA rewrites
└── vite.config.js           # Vite configuration
```

---

## 🛠️ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally
```bash
npm run dev
```

### 3. Production Build
```bash
npm run build
```

---

## 📄 License

MIT © [saganidigital](https://github.com/saganidigital)
