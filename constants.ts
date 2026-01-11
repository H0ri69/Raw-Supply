
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
  { id: 'DROP 002', title: 'Void Walker', subtitle: 'Into The Abyss', status: 'upcoming', date: 'TBD' },
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
  }
];

export const SOCIAL_LINKS = [
  { platform: 'Instagram', url: 'https://www.instagram.com/rawspply/', handle: '@rawspply' },
  { platform: 'TikTok', url: 'https://www.tiktok.com/@rawspply', handle: '@rawspply' },
];
