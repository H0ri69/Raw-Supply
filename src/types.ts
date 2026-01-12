
export interface ProductVariant {
  color: string;
  front: string;
  back: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: 'men' | 'women' | 'accessories';
  drop: string;
  variants?: ProductVariant[];
}

export type CategoryFilter = 'all' | 'men' | 'women' | 'accessories';

export interface CartItem extends Product {
  quantity: number;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface DropInfo {
  id: string;
  title: string;
  subtitle: string;
  status: 'released' | 'upcoming' | 'mystery';
  date?: string;
}
