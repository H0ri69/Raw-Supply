
import React, { useState, useEffect } from 'react';
import { Search, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useTheme } from './ThemeContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { theme } = useTheme();
  const [currentVariantIndex, setCurrentVariantIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);

  // Initialize and React to Theme Changes for default selection
  useEffect(() => {
    if (product.variants && product.variants.length > 0) {
      let targetIndex = 0;

      // "Default tshirt as the opposite of the theme"
      // Light Theme -> Want Black or Grey (Darker)
      // Dark Theme -> Want White (Lighter)
      if (product.name === 'TEE 001') {
        const frostIndex = product.variants.findIndex(v => v.color.toLowerCase().includes('frost'));
        if (frostIndex !== -1) targetIndex = frostIndex;
      } else if (theme === 'light') {
        const darkIndex = product.variants.findIndex(v =>
          ['black', 'grey', 'shadow', 'steel', 'void', 'drab'].some(c => v.color.toLowerCase().includes(c))
        );
        if (darkIndex !== -1) targetIndex = darkIndex;
      } else {
        const lightIndex = product.variants.findIndex(v =>
          ['white', 'bone', 'concrete', 'ecru', 'frost'].some(c => v.color.toLowerCase().includes(c))
        );
        if (lightIndex !== -1) targetIndex = lightIndex;
      }

      setCurrentVariantIndex(targetIndex);
    }
  }, [theme, product.variants]);

  const hasVariants = product.variants && product.variants.length > 1;
  const currentVariant = product.variants ? product.variants[currentVariantIndex] : null;

  // Determine Image Source - now based on explicit showBack state
  const imageSrc = currentVariant
    ? (showBack && currentVariant.back ? currentVariant.back : currentVariant.front)
    : product.image;

  const hasBackImage = currentVariant && currentVariant.back;

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!product.variants) return;
    setCurrentVariantIndex((prev) => (prev === 0 ? product.variants!.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!product.variants) return;
    setCurrentVariantIndex((prev) => (prev === product.variants!.length - 1 ? 0 : prev + 1));
  };

  const toggleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowBack(!showBack);
  };

  return (
    <article className="group relative flex flex-col h-full">
      {/* Image Container */}
      <div
        className="relative aspect-[3/4] overflow-hidden bg-transparent mb-6 block"
      >
        <Link to={`/product/${product.id}`} className="block h-full w-full cursor-pointer">
          <img
            src={imageSrc}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-contain object-center transition-transform duration-700 ease-in-out group-hover:scale-105 p-4"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors duration-300" />

          {/* Inspect Indicator */}
          <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 px-2 py-1 backdrop-blur-sm pointer-events-none">
            <span className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-black">
              <Search size={10} /> Inspect
            </span>
          </div>
        </Link>

        {/* Show Back Button */}
        {hasBackImage && (
          <button
            onClick={toggleBack}
            className="absolute top-4 right-4 bg-white/90 dark:bg-black/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-black text-black dark:text-white z-10"
            aria-label={showBack ? "Show Front" : "Show Back"}
            title={showBack ? "Show Front" : "Show Back"}
          >
            <RotateCcw size={14} />
          </button>
        )}

        {/* Variant Cycling Controls */}
        {hasVariants && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-black text-black dark:text-white"
              aria-label="Previous Color"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-black text-black dark:text-white"
              aria-label="Next Color"
            >
              <ChevronRight size={16} />
            </button>

            {/* Variant Label Toast */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 dark:bg-white/90 text-white dark:text-black text-[10px] font-mono px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-widest">
              {currentVariant?.color}
            </div>
          </>
        )}
      </div>

      <div className="flex flex-col gap-1 flex-grow">
        <div className="flex justify-between items-start gap-4">
          <Link to={`/product/${product.id}`}>
            <h3 className="text-sm font-bold uppercase tracking-tight text-black dark:text-white leading-tight flex items-center gap-2 group-hover:underline decoration-2" style={{ textDecorationColor: product.accentColor }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: product.accentColor }} />
              {product.name}
            </h3>
          </Link>
          <span className="text-sm font-mono font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-500 font-mono leading-relaxed line-clamp-2 mt-1">
          {product.description}
        </p>
      </div>
    </article>
  );
};

export default ProductCard;
