
import React from 'react';
import { Plus, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <article className="group relative flex flex-col h-full">
      {/* Image Container - Clicking goes to details */}
      <Link to={`/product/${product.id}`} className="relative aspect-[3/4] overflow-hidden bg-[#F0F0F0] mb-6 block cursor-pointer">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        
        {/* Inspect Indicator */}
        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 px-2 py-1 backdrop-blur-sm">
           <span className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest">
             <Search size={10} /> Inspect
           </span>
        </div>
      </Link>
      
      {/* Quick Add Button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          onAddToCart(product);
        }}
        className="absolute top-[65%] right-4 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20 bg-black text-white p-3 rounded-full hover:bg-gray-800 shadow-lg"
        aria-label={`Add ${product.name} to cart`}
      >
        <Plus size={18} />
      </button>
      
      <div className="flex flex-col gap-1 flex-grow">
        <div className="flex justify-between items-start gap-4">
          <Link to={`/product/${product.id}`}>
            <h3 className="text-sm font-bold uppercase tracking-tight text-black leading-tight hover:underline">
              {product.name}
            </h3>
          </Link>
          <span className="text-sm font-mono font-medium text-gray-500 whitespace-nowrap">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <p className="text-xs text-gray-400 font-mono leading-relaxed line-clamp-2 mt-1">
          {product.description}
        </p>
      </div>
    </article>
  );
};

export default ProductCard;
