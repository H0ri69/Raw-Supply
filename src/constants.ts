
import { Product, DropInfo } from './types';

// Asset Imports
import CapBlackFront from './Assets/Cap-Black-Front.png';
import CapBlackBack from './Assets/Cap-Black-Back.png';
import CapGreyFront from './Assets/Cap-Grey-Front.png';
import CapGreyBack from './Assets/Cap-Grey-Back.png';

import HorizontalGreenFront from './Assets/Horizontal-Green-Front.png';
import HorizontalGreenBack from './Assets/Horizontal-Green-Back.png';
import HorizontalGreyFront from './Assets/Horizontal-Grey-Front.png';
import HorizontalGreyBack from './Assets/Horizontal-Grey-Back.png';
import HorizontalOrangeFront from './Assets/Horizontal-Orange-Front.png';
import HorizontalOrangeBack from './Assets/Horizontal-Orange-Back.png';
import HorizontalWhiteFront from './Assets/Horizontal-White-Front.png';
import HorizontalWhiteBack from './Assets/Horizontal-White-Back.png';

import VerticalGreenFront from './Assets/Vertical-Green-Front.png';
import VerticalGreenBack from './Assets/Vertical-Green-Back.png';
import VerticalGreyFront from './Assets/Vertical-Grey-Front.png';
import VerticalGreyBack from './Assets/Vertical-Grey-Back.png';
import VerticalOrangeFront from './Assets/Vertical-Orange-Front.png';
import VerticalOrangeBack from './Assets/Vertical-Orange-Back.png';
import VerticalWhiteFront from './Assets/Vertical-White-Front.png';
import VerticalWhiteBack from './Assets/Vertical-White-Back.png';

import LogoBlack from './Assets/Logo-Black.png';
import LogoWhite from './Assets/Logo-White.png';

// USER ORIGINAL ASSETS (Product Specific) - Keeping these as requested
const LOGO_URL = 'https://files.fm/thumb_show.php?i=6vpzuj4gvz';
const CAP_URL = CapBlackFront;
const HORIZONTAL_TEES_URL = HorizontalWhiteFront;
const VERTICAL_TEES_URL = VerticalWhiteFront;

// RELIABLE UNSPLASH ASSETS
const HERO_URL = 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2500&auto=format&fit=crop'; // Darker, more raw fashion vibe
const TEXTURE_URL = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2500&auto=format&fit=crop'; // Abstract oil/texture

// HOMEPAGE EDITORIAL ASSETS (High Quality for Banners)
const EDITORIAL_MEN_URL = 'https://images.unsplash.com/photo-1517423568366-6975522327c6?q=80&w=1200&auto=format&fit=crop'; // Urban/Industrial men
const EDITORIAL_WOMEN_URL = 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200&auto=format&fit=crop'; // Edgy women portrait
const EDITORIAL_ACCESSORIES_URL = 'https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?q=80&w=1200&auto=format&fit=crop'; // Detail shot

export const ASSETS = {
  logo: LOGO_URL,
  logoBlack: LogoBlack,
  logoWhite: LogoWhite,
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
    name: "HAT 001",
    price: 29.90,
    image: CapBlackFront,
    description: "6-panel dad hat featuring organic distressing and the signature flower embroidery. 100% Cotton. Adjustable strap.",
    category: 'accessories',
    drop: 'DROP 001',
    variants: [
      { color: 'Black', hex: '#111111', front: CapBlackFront, back: CapBlackBack },
      { color: 'Steel', hex: '#63666A', front: CapGreyFront, back: CapGreyBack },
    ],
    accentColor: '#111111'
  },
  {
    id: 2,
    name: "TEE 002",
    price: 29.90,
    image: HorizontalWhiteFront,
    description: "Heavyweight cotton tee with tonal horizontal RAW branding. Boxy fit. Pre-shrunk.",
    category: 'men',
    drop: 'DROP 001',
    variants: [
      { color: 'Ecru', hex: '#f0ecdc', front: HorizontalWhiteFront, back: HorizontalWhiteBack },
      { color: 'Steel', hex: '#4e4e4eff', front: HorizontalGreyFront, back: HorizontalGreyBack },
      { color: 'Coyote', hex: '#cea75d', front: HorizontalOrangeFront, back: HorizontalOrangeBack },
      { color: 'Drab', hex: '#8b8660', front: HorizontalGreenFront, back: HorizontalGreenBack },
    ],
    accentColor: '#cea75d'
  },
  {
    id: 3,
    name: "TEE 001",
    price: 29.90,
    image: VerticalWhiteFront,
    description: "Statement piece featuring vertical architectural branding. Earth tone dye process. 240gsm cotton.",
    category: 'men',
    drop: 'DROP 001',
    variants: [
      { color: 'Frost', hex: '#e9e9ec', front: VerticalWhiteFront, back: VerticalWhiteBack },
      { color: 'Void', hex: '#403f46', front: VerticalGreyFront, back: VerticalGreyBack },
      { color: 'Deep Forest', hex: '#2c3a34', front: VerticalGreenFront, back: VerticalGreenBack },
      { color: 'Umber', hex: '#ad8557', front: VerticalOrangeFront, back: VerticalOrangeBack },
    ],
    accentColor: '#2c3a34'
  }
];

export const SOCIAL_LINKS = [
  { platform: 'Instagram', url: 'https://www.instagram.com/rawspply/', handle: '@rawspply' },
  { platform: 'TikTok', url: 'https://www.tiktok.com/@rawspply', handle: '@rawspply' },
];
