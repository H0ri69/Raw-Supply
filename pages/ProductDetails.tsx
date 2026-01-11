
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useTheme } from '../components/ThemeContext';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { theme } = useTheme();

  const product = PRODUCTS.find((p) => p.id === Number(id));

  const [currentVariantIndex, setCurrentVariantIndex] = useState(0);
  const [viewSide, setViewSide] = useState<'front' | 'back'>('front');

  // Initialize and React to Theme Changes for default selection
  useEffect(() => {
    if (product?.variants && product.variants.length > 0) {
      let targetIndex = 0;
      if (theme === 'light') {
        const blackIndex = product.variants.findIndex(v => v.color.toLowerCase().includes('black'));
        const greyIndex = product.variants.findIndex(v => v.color.toLowerCase().includes('grey'));
        if (blackIndex !== -1) targetIndex = blackIndex;
        else if (greyIndex !== -1) targetIndex = greyIndex;
      } else {
        const whiteIndex = product.variants.findIndex(v => v.color.toLowerCase().includes('white'));
        if (whiteIndex !== -1) targetIndex = whiteIndex;
      }
      setCurrentVariantIndex(targetIndex);
    }
  }, [theme, product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9F9F9] dark:bg-[#111111] text-black dark:text-white">
        <div className="text-center">
          <h2 className="text-4xl font-black uppercase mb-4">Item Missing</h2>
          <button
            onClick={() => navigate('/shop')}
            className="text-sm font-mono border-b border-black dark:border-white hover:text-gray-500"
          >
            RETURN TO BASE
          </button>
        </div>
      </div>
    );
  }

  const hasVariants = product.variants && product.variants.length > 1;
  const currentVariant = product.variants ? product.variants[currentVariantIndex] : null;
  const currentImage = currentVariant ? currentVariant[viewSide] : product.image;
  const currentVariantColor = currentVariant ? currentVariant.color : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!product.variants) return;
    setCurrentVariantIndex((prev) => (prev === 0 ? product.variants!.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!product.variants) return;
    setCurrentVariantIndex((prev) => (prev === product.variants!.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] dark:bg-[#111111] pt-32 pb-24 px-6 lg:px-12">
      <button
        onClick={() => navigate(-1)}
        className="group flex items-center gap-2 mb-12 text-xs font-mono font-bold tracking-widest uppercase text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition-colors"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Back
      </button>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Image Inspection Area */}
        <div
          className="relative aspect-[3/4] bg-transparent overflow-hidden group"
        >
          {/* Base Image */}
          <img
            src={currentImage}
            alt={product.name}
            className="w-full h-full object-contain p-8"
          />

          {/* View Toggle (Front/Back) */}
          {currentVariant && currentVariant.back && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 bg-white/80 dark:bg-black/80 backdrop-blur-md px-6 py-2 rounded-full z-20 shadow-sm border border-black/5 dark:border-white/5">
              <button
                onClick={() => setViewSide('front')}
                className={`text-[10px] font-mono font-bold tracking-widest uppercase transition-colors ${viewSide === 'front' ? 'text-black dark:text-white' : 'text-gray-400 hover:text-black dark:hover:text-white'}`}
              >
                FRONT
              </button>
              <div className="w-px h-3 bg-gray-300 dark:bg-gray-700 self-center" />
              <button
                onClick={() => setViewSide('back')}
                className={`text-[10px] font-mono font-bold tracking-widest uppercase transition-colors ${viewSide === 'back' ? 'text-black dark:text-white' : 'text-gray-400 hover:text-black dark:hover:text-white'}`}
              >
                BACK
              </button>
            </div>
          )}

          {/* Variant Controls */}
          {hasVariants && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/80 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-black text-black dark:text-white z-20"
                aria-label="Previous Variant"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/80 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-black text-black dark:text-white z-20"
                aria-label="Next Variant"
              >
                <ChevronRight size={24} />
              </button>

              <div className="absolute top-4 right-4 bg-black/70 dark:bg-white/90 text-white dark:text-black text-xs font-mono px-3 py-1 rounded pointer-events-none uppercase tracking-widest z-10">
                {currentVariantColor}
              </div>
            </>
          )}
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <div className="mb-2">
            <span className="inline-block px-2 py-1 border border-black dark:border-white text-black dark:text-white text-[10px] font-mono font-bold uppercase tracking-widest mb-4">
              {product.drop}
            </span>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-4 text-black dark:text-white">
              {product.name}
            </h1>
            <p className="text-2xl font-mono text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-800 pb-8 mb-8">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-2 text-black dark:text-white">Description</h3>
              <p className="font-mono text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
                {product.description}
              </p>
              <p className="font-mono text-xs text-gray-400 dark:text-gray-500 mt-4 leading-relaxed">
                Designed in the Raw Supply studio. Constructed for durability and conflict.
                Imperfections in the fabric are intentional and part of the design philosophy.
              </p>
            </div>

            <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
              <p className="text-center font-mono text-xs text-gray-400 dark:text-gray-600 uppercase tracking-widest">
                Archive Only / Not for Sale
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
