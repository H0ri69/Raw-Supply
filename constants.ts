
import { Product, DropInfo } from './types';

// USER ORIGINAL ASSETS (Product Specific) - Keeping these as requested
const LOGO_URL = 'https://files.fm/thumb_show.php?i=6vpzuj4gvz'; 
const CAP_URL = 'https://files.fm/thumb_show.php?i=vybja3meak';
const HORIZONTAL_TEES_URL = 'https://files.fm/thumb_show.php?i=q6h5dt9wvd';
const VERTICAL_TEES_URL = 'https://files.fm/thumb_show.php?i=ddtb6tyrtt';

// RELIABLE UNSPLASH ASSETS
const HERO_URL = 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2500&auto=format&fit=crop'; // Darker, more raw fashion vibe
const TEXTURE_URL = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2500&auto=format&fit=crop'; // Abstract oil/texture

// HOMEPAGE EDITORIAL ASSETS (High Quality for Banners)
const EDITORIAL_MEN_URL = 'https://images.unsplash.com/photo-1517423568366-6975522327c6?q=80&w=1200&auto=format&fit=crop'; // Urban/Industrial men
const EDITORIAL_WOMEN_URL = 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200&auto=format&fit=crop'; // Edgy women portrait
const EDITORIAL_ACCESSORIES_URL = 'https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?q=80&w=1200&auto=format&fit=crop'; // Detail shot

export const ASSETS = {
  logo: LOGO_URL,
  hero: HERO_URL,
  cap: CAP_URL,
  teeHorizontal: HORIZONTAL_TEES_URL,
  teeVertical: VERTICAL_TEES_URL,
  texture: TEXTURE_URL,
  editorialMen: EDITORIAL_MEN_URL,
  editorialWomen: EDITORIAL_WOMEN_URL,
  editorialAccessories: EDITORIAL_ACCESSORIES_URL,
};

export const DROPS_SCHEDULE: DropInfo[] = [
  { id: 'DROP 001', title: 'The Foundation', subtitle: 'Origins of Conflict', status: 'released' },
  { id: 'DROP 002', title: 'Conflict & Comfort', subtitle: 'Tactical Leisure', status: 'released' },
  { id: 'DROP 003', title: 'Static Noise', subtitle: 'Distortion of Form', status: 'released' },
  { id: 'DROP 004', title: 'Urban Decay', subtitle: 'Concrete Erosion', status: 'released' },
  { id: 'DROP 005', title: 'Void Walker', subtitle: 'Into The Abyss', status: 'upcoming', date: '10.24.2024' },
  { id: 'CLASSIFIED', title: 'PROJECT: OMEGA', subtitle: 'Unknown Entity', status: 'mystery', date: 'TBD' },
];

export const PRODUCTS: Product[] = [
  // DROP 001 - The Foundation
  {
    id: 1,
    name: "RAW DISTRESSED CAP",
    price: 35.00,
    image: CAP_URL,
    description: "6-panel dad hat featuring organic distressing and the signature flower embroidery. 100% Cotton. Adjustable strap.",
    category: 'accessories',
    drop: 'DROP 001'
  },
  {
    id: 2,
    name: "ESSENTIAL HORIZONTAL TEE",
    price: 45.00,
    image: HORIZONTAL_TEES_URL,
    description: "Heavyweight cotton tee with tonal horizontal RAW branding. Boxy fit. Pre-shrunk.",
    category: 'men',
    drop: 'DROP 001'
  },
  {
    id: 3,
    name: "VERTICAL ARCHITECT TEE",
    price: 45.00,
    image: VERTICAL_TEES_URL,
    description: "Statement piece featuring vertical architectural branding. Earth tone dye process. 240gsm cotton.",
    category: 'men',
    drop: 'DROP 001'
  },
  {
    id: 101,
    name: "FOUNDATION SOCKS",
    price: 18.00,
    image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?q=80&w=1000&auto=format&fit=crop',
    description: "Ribbed crew socks with subtle branding. Reinforced heel and toe for durability in the field.",
    category: 'accessories',
    drop: 'DROP 001'
  },

  // DROP 002 - Conflict & Comfort
  {
    id: 4,
    name: "RAW CROP TEE",
    price: 40.00,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop', // Updated stable link
    description: "Women's cropped silhouette. Raw hem finish. Soft washed cotton.",
    category: 'women',
    drop: 'DROP 002'
  },
  {
    id: 5,
    name: "BATTLE HOODIE - NOIR",
    price: 85.00,
    image: 'https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?q=80&w=1000&auto=format&fit=crop', // Updated stable link (black hoodie)
    description: "Oversized fit hoodie with distressed cuffs. Heavy French Terry. Kangaroo pocket.",
    category: 'men',
    drop: 'DROP 002'
  },
  {
    id: 6,
    name: "CANVAS TOTE - WAR",
    price: 25.00,
    image: 'https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?q=80&w=1000&auto=format&fit=crop', // Updated stable link
    description: "Heavy canvas tote bag with 'Raw as War' stencil print. Durable straps.",
    category: 'accessories',
    drop: 'DROP 002'
  },
  {
    id: 102,
    name: "TACTICAL VEST - OLIVE",
    price: 150.00,
    image: 'https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1000&auto=format&fit=crop', 
    description: "Multi-pocket utility vest. Nylon construction with mesh lining. Layering piece.",
    category: 'men',
    drop: 'DROP 002'
  },

  // DROP 003 - Static Noise
  {
    id: 7,
    name: "STATIC KNIT SWEATER",
    price: 95.00,
    image: 'https://images.unsplash.com/photo-1624835567150-b052f3d5d727?q=80&w=1000&auto=format&fit=crop', // Grey texture
    description: "Mohair blend oversized sweater in static grey. Dropped shoulders for a relaxed silhouette.",
    category: 'men',
    drop: 'DROP 003'
  },
  {
    id: 8,
    name: "ARMORED DENIM JACKET",
    price: 120.00,
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1000&auto=format&fit=crop',
    description: "Vintage wash denim with reinforced paneling. Strategic distressing at elbows and collar.",
    category: 'men',
    drop: 'DROP 003'
  },
  {
    id: 9,
    name: "INDUSTRIAL CHAIN LINK",
    price: 55.00,
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1000&auto=format&fit=crop',
    description: "Stainless steel chunky chain. Industrial clasp mechanism. Anti-tarnish coating.",
    category: 'accessories',
    drop: 'DROP 003'
  },
  {
    id: 103,
    name: "NOISE OVERSIZED SHIRT",
    price: 65.00,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1000&auto=format&fit=crop',
    description: "Button-up shirt with static noise digital print. Viscose blend for drape.",
    category: 'women',
    drop: 'DROP 003'
  },

  // DROP 004 - Urban Decay
  {
    id: 10,
    name: "TACTICAL CARGO PANT",
    price: 110.00,
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1000&auto=format&fit=crop',
    description: "Multi-pocket cargo pants in eroded black. Relaxed fit with drawstring cuffs.",
    category: 'men',
    drop: 'DROP 004'
  },
  {
    id: 11,
    name: "ASYMMETRIC RAW DRESS",
    price: 85.00,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop',
    description: "Black midi dress with asymmetric hem and raw edge seams. Form fitting.",
    category: 'women',
    drop: 'DROP 004'
  },
  {
    id: 12,
    name: "DOCKER BEANIE - RUST",
    price: 30.00,
    image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=1000&auto=format&fit=crop',
    description: "Ribbed knit fisherman beanie. One size fits most. Rust colorway.",
    category: 'accessories',
    drop: 'DROP 004'
  },
  {
    id: 104,
    name: "DECAY LEATHER BOOTS",
    price: 220.00,
    image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=1000&auto=format&fit=crop',
    description: "Combat boots with distressed leather finish. Chunky rubber sole.",
    category: 'accessories',
    drop: 'DROP 004'
  }
];

export const SOCIAL_LINKS = [
  { platform: 'Instagram', url: '#', handle: '@rawsupply' },
  { platform: 'Twitter', url: '#', handle: '@rawsupply_official' },
  { platform: 'TikTok', url: '#', handle: '@raw.supply' },
  { platform: 'Pinterest', url: '#', handle: 'RawMoodboard' },
];
