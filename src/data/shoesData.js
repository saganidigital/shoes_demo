export const BRAND_INFO = {
  name: "SHÖSE",
  tagline: "Pick The Best Shoe",
  subTagline: "Handcrafted Luxury Footwear & Iconic Retro Court Silhouettes",
  established: "2024",
  phone: "+1 (800) 942-7467",
  intlPhone: "+92 300 1234567",
  email: "concierge@shosefootwear.com",
  location: "Milan • New York • Tokyo",
  promoBanner: "SPECIAL LAUNCH EVENT — 50% OFF STOREWIDE + COMPLIMENTARY EXPRESS DELIVERY"
};

export const NAV_LINKS = [
  { name: "Collection", href: "#collection" },
  { name: "Craftsmanship", href: "#craftsmanship" },
  { name: "The Poster Cut", href: "#special-edition" },
  { name: "Specifications", href: "#specs" },
  { name: "Reviews", href: "#reviews" },
  { name: "Order Now", href: "#order-now" },
];

export const CORE_FEATURES = [
  {
    id: "free-delivery",
    title: "FREE DELIVERY",
    subtitle: "Complimentary Global Shipping",
    description: "Insured express air freight with end-to-end tracking right to your doorstep within 3-5 business days.",
    icon: "Truck",
    highlight: "100% Free worldwide"
  },
  {
    id: "premium-materials",
    title: "PREMIUM MATERIALS",
    subtitle: "Full-Grain Italian Leather",
    description: "Tanned to perfection using eco-friendly vegetable oils, delivering a butter-soft hand feel that patinas gracefully over time.",
    icon: "ShieldCheck",
    highlight: "Top-tier calfskin"
  },
  {
    id: "cushioned-sole",
    title: "CUSHIONED SOLE",
    subtitle: "Ergonomic Cloud-Stride",
    description: "Multi-layered memory foam insole combined with encapsulated air shock cells for unrivaled all-day joint support.",
    icon: "Feather",
    highlight: "24-Hour wearability"
  },
  {
    id: "durable-design",
    title: "DURABLE DESIGN",
    subtitle: "Engineered For Longevity",
    description: "Reinforced 360-degree perimeter welt stitching and high-abrasion non-marking vulcanized rubber outsoles.",
    icon: "Sparkles",
    highlight: "Built to outlast"
  }
];

export const PRODUCTS = [
  {
    id: "shose-retro-og",
    name: "SHÖSE Retro High OG 'Panda Obsidian'",
    badge: "POSTER HERO EDITION",
    discountBadge: "50% OFF",
    originalPrice: 320,
    price: 160,
    rating: 4.98,
    reviewsCount: 428,
    colorway: "Black / Chalk White / Obsidian",
    image: "/sneaker-bw.jpg",
    description: "The timeless silhouette featured on our master showcase. Precision-cut monochrome leather panels with aerodynamic collar support and padded ankle wrap.",
    sizes: [7, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    isFeatured: true,
    tags: ["Best Seller", "Limited Run", "Retro Court"]
  },
  {
    id: "shose-mocha-bronze",
    name: "SHÖSE Heritage High 'Mocha Bronze'",
    badge: "SIGNATURE BRONZE",
    discountBadge: "50% OFF",
    originalPrice: 340,
    price: 170,
    rating: 4.95,
    reviewsCount: 312,
    colorway: "Dark Mocha Suede / Warm Bronze / Sail",
    image: "/sneaker-mocha.jpg",
    description: "Warm bronze full-grain leather paired with ultra-rich espresso suede. Hand-burnished accents mirroring the warm poster colorway.",
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 11, 12],
    isFeatured: true,
    tags: ["Warm Palette", "Suede Finish", "Luxury Leather"]
  },
  {
    id: "shose-obsidian-gold",
    name: "SHÖSE Midnight High 'Sovereign Noir'",
    badge: "EXCLUSIVE DROP",
    discountBadge: "50% OFF",
    originalPrice: 360,
    price: 180,
    rating: 5.0,
    reviewsCount: 189,
    colorway: "Midnight Black / Matte Suede / Brushed Gold",
    image: "/sneaker-black-gold.jpg",
    description: "Triple-black textured pebble grain leather accented with solid brushed gold eyelets and stealth black sole unit. For discerning night riders.",
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 12, 13],
    isFeatured: true,
    tags: ["Gold Eyelets", "Pebble Grain", "Stealth Finish"]
  }
];

export const TECHNICAL_SPECS = [
  { label: "Upper Composition", value: "Full-Grain Calf Leather & Velour Suede" },
  { label: "Insole Tech", value: "Dual-Density Ergonomic Ortho-Flex" },
  { label: "Midsole Matrix", value: "Pressurized EVA Air Pocket Core" },
  { label: "Outsole Compound", value: "High-Traction Vulcanized Gum Rubber" },
  { label: "Hardware Accents", value: "Brushed Solid Brass & Bronze Eyelets" },
  { label: "Weight (Size 10)", value: "410 grams per shoe" },
  { label: "Origin", value: "Artisan Handcrafted in Italy & Portugal" },
  { label: "Warranty", value: "2-Year Craftsmanship Guarantee" }
];

export const REVIEWS = [
  {
    id: 1,
    name: "Marcus Sterling",
    role: "Verified Collector • Los Angeles",
    rating: 5,
    title: "The build quality blew my expectations away",
    comment: "I own dozens of hype retro high-tops, but the leather texture and cushioning on this SHÖSE pair are on a completely different luxury level. Wore them for 10 hours straight on day one with zero fatigue.",
    shoeModel: "Retro High OG 'Panda Obsidian'",
    date: "2 days ago"
  },
  {
    id: 2,
    name: "Elena Rostova",
    role: "Fashion Stylist • New York",
    rating: 5,
    title: "The bronze and mocha tones are immaculate",
    comment: "The color harmonizes with everything in modern streetwear and smart-casual menswear/womenswear. The rich bronze leather trims look even better in natural sunlight.",
    shoeModel: "Heritage High 'Mocha Bronze'",
    date: "1 week ago"
  },
  {
    id: 3,
    name: "David Chen",
    role: "Footwear Designer • London",
    rating: 5,
    title: "Engineering and silhouette are spot on",
    comment: "The ankle collar proportions, toe box perforations, and vulcanized outsole grip show extraordinary attention to detail. 50% discount made it an absolute no-brainer purchase.",
    shoeModel: "Midnight High 'Sovereign Noir'",
    date: "2 weeks ago"
  }
];

export const FAQ_ITEMS = [
  {
    question: "How do SHÖSE sneakers fit? Should I size up or down?",
    answer: "Our sneakers fit true-to-size (TTS) with an ergonomic toe box designed for natural foot expansion. If you usually take a half size or have wider feet, we recommend ordering half a size up."
  },
  {
    question: "What is included with the 50% OFF launch promotion?",
    answer: "Every order during this promotional event includes 50% off MSRP, 2 pairs of premium waxed cotton laces (tonal and contrast gold/bronze), a custom magnetic hard-box, luxury canvas dust bags, and free worldwide express delivery."
  },
  {
    question: "How does the Cushioned Sole technology work?",
    answer: "Our proprietary sole integrates a dual-density memory foam footbed with an encapsulated heel air pad. It absorbs 40% more ground impact than standard retro cup soles while providing responsive energy return."
  },
  {
    question: "What is your return and exchange policy?",
    answer: "We offer hassle-free 30-day worldwide returns and exchanges. Shoes must be in unworn, original condition with security tags attached. Return shipping labels are pre-paid by us."
  }
];
