
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS } from '../constants';
import { useTheme } from '../components/ThemeContext';
import SizeChart from '../components/SizeChart';


// Neutral background options per theme
const NEUTRAL_BACKGROUNDS = {
  light: [
    { name: 'Default', value: 'transparent' },
    { name: 'Light Grey', value: '#E5E5E5' },
    { name: 'Mid Grey', value: '#9CA3AF' },
  ],
  dark: [
    { name: 'Default', value: 'transparent' },
    { name: 'Dark Grey', value: '#374151' },
    { name: 'Mid Grey', value: '#6B7280' },
  ],
};

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { theme } = useTheme();

  const product = PRODUCTS.find((p) => p.id === Number(id));

  const [currentVariantIndex, setCurrentVariantIndex] = useState(0);
  const [viewSide, setViewSide] = useState<'front' | 'back'>('front');
  const [inspectionBg, setInspectionBg] = useState('transparent');
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  // Initialize and React to Theme Changes for default selection
  useEffect(() => {
    if (product?.variants && product.variants.length > 0) {
      let targetIndex = 0;
      if (theme === 'light') {
        const darkIndex = product.variants.findIndex(v =>
          ['black', 'grey', 'shadow', 'steel'].some(c => v.color.toLowerCase().includes(c))
        );
        if (darkIndex !== -1) targetIndex = darkIndex;
      } else {
        const lightIndex = product.variants.findIndex(v =>
          ['white', 'bone', 'concrete'].some(c => v.color.toLowerCase().includes(c))
        );
        if (lightIndex !== -1) targetIndex = lightIndex;
      }
      setCurrentVariantIndex((prev) => (prev !== targetIndex ? targetIndex : prev));
    }
    // Reset background when theme changes
    setInspectionBg((prev) => (prev !== 'transparent' ? 'transparent' : prev));
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

  const backgroundOptions = theme === 'light' ? NEUTRAL_BACKGROUNDS.light : NEUTRAL_BACKGROUNDS.dark;

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
    <div
      className="min-h-screen bg-[#F9F9F9] dark:bg-[#111111] pt-32 pb-24 px-6 lg:px-12 transition-colors duration-500"
      style={{
        backgroundImage: theme === 'dark'
          ? `radial-gradient(circle at 20% 30%, ${product.accentColor}15 0%, transparent 50%)`
          : `radial-gradient(circle at 20% 30%, ${product.accentColor}08 0%, transparent 50%)`
      }}
    >
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
          className="relative aspect-[3/4] overflow-hidden group rounded-lg transition-colors duration-300"
          style={{ backgroundColor: inspectionBg }}
        >
          {/* Background Selector */}
          <div className="absolute top-4 left-4 flex gap-2 z-20">
            {backgroundOptions.map((bg) => (
              <button
                key={bg.name}
                onClick={() => setInspectionBg(bg.value)}
                className={`w-6 h-6 rounded-full border-2 transition-all ${inspectionBg === bg.value
                  ? 'border-black dark:border-white scale-110'
                  : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                  }`}
                style={{
                  backgroundColor: bg.value === 'transparent'
                    ? (theme === 'light' ? '#F9F9F9' : '#111111')
                    : bg.value
                }}
                title={bg.name}
                aria-label={`Set background to ${bg.name}`}
              />
            ))}
          </div>

          {/* Base Image */}
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={currentImage}
              alt={product.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsZoomOpen(true)}
              className="w-full h-full object-contain p-8 absolute inset-0 cursor-zoom-in"
            />
          </AnimatePresence>

          {/* Zoom Hint */}
          <div className="absolute bottom-6 right-6 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/5 dark:bg-white/10 backdrop-blur-sm p-2 rounded-full text-black dark:text-white">
            <ZoomIn size={20} />
          </div>

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
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/80 p-3 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-black text-black dark:text-white z-20"
                aria-label="Previous Variant"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/80 p-3 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-black text-black dark:text-white z-20"
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
            <span
              className="inline-block px-2 py-1 border text-[10px] font-mono font-bold uppercase tracking-widest mb-4 transition-colors"
              style={{ borderColor: product.accentColor, color: product.accentColor }}
            >
              {product.drop}
            </span>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-4 text-black dark:text-white">
              {product.name}
            </h1>
            <p className="text-2xl font-mono text-gray-500 dark:text-gray-400 pb-6 mb-6">
              ${product.price.toFixed(2)}
            </p>

            {/* Color Swatches */}
            {product.variants && product.variants.length > 1 && (
              <div className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-8">
                <h3 className="text-xs font-bold uppercase tracking-widest mb-3 text-black dark:text-white">Color</h3>
                <div className="flex gap-3">
                  {product.variants.map((variant, index) => {
                    const isSelected = currentVariantIndex === index;

                    return (
                      <button
                        key={variant.color}
                        onClick={() => setCurrentVariantIndex(index)}
                        className={`w-8 h-8 rounded-full border-2 transition-all relative ${isSelected
                          ? 'scale-110 ring-2 ring-offset-2 dark:ring-offset-[#111111]'
                          : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 hover:scale-105'
                          }`}
                        style={{
                          backgroundColor: variant.hex,
                          boxShadow: isSelected ? `0 0 15px ${variant.hex}50` : 'none',
                          borderColor: isSelected ? product.accentColor : 'transparent',
                          '--tw-ring-color': isSelected ? product.accentColor : 'transparent'
                        } as React.CSSProperties}
                        title={variant.color}
                        aria-label={`Select ${variant.color}`}
                        aria-pressed={isSelected}
                      />
                    );
                  })}
                </div>
                <p className="text-xs font-mono text-gray-500 dark:text-gray-400 mt-2 uppercase tracking-wide">
                  {currentVariantColor}
                </p>
              </div>
            )}
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
              {(product.name === 'TEE 001' || product.name === 'TEE 002') && (
                <SizeChart productType={product.name} />
              )}

              <p className="text-center font-mono text-xs text-gray-400 dark:text-gray-600 uppercase tracking-widest mt-8">
                Preview Only / Not for Sale Yet
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Zoom Modal */}
      <AnimatePresence>
        {isZoomOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#F9F9F9]/95 dark:bg-[#111111]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
            onClick={() => setIsZoomOpen(false)}
          >
            <button
              onClick={() => setIsZoomOpen(false)}
              className="absolute top-6 right-6 p-2 bg-black dark:bg-white text-white dark:text-black rounded-full hover:scale-110 transition-transform z-50"
              aria-label="Close Zoom"
            >
              <X size={24} />
            </button>
            <motion.img
              key={currentImage + '-zoom'}
              src={currentImage}
              alt={product.name}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="max-w-full max-h-full object-contain shadow-2xl pointer-events-none select-none"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Modal Controls */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Variant Navigation */}
              {hasVariants && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-6 top-1/2 -translate-y-1/2 p-4 text-black hover:text-gray-600 dark:text-white dark:hover:text-gray-300 transition-colors pointer-events-auto"
                    aria-label="Previous Variant"
                  >
                    <ChevronLeft size={48} strokeWidth={1} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-6 top-1/2 -translate-y-1/2 p-4 text-black hover:text-gray-600 dark:text-white dark:hover:text-gray-300 transition-colors pointer-events-auto"
                    aria-label="Next Variant"
                  >
                    <ChevronRight size={48} strokeWidth={1} />
                  </button>
                </>
              )}

              {/* View Side Toggle */}
              {currentVariant && currentVariant.back && (
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-6 pointer-events-auto">
                  <button
                    onClick={(e) => { e.stopPropagation(); setViewSide('front'); }}
                    className={`text-sm font-mono font-bold tracking-widest uppercase transition-colors ${viewSide === 'front' ? 'text-black dark:text-white border-b border-black dark:border-white' : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'}`}
                  >
                    FRONT
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); setViewSide('back'); }}
                    className={`text-sm font-mono font-bold tracking-widest uppercase transition-colors ${viewSide === 'back' ? 'text-black dark:text-white border-b border-black dark:border-white' : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'}`}
                  >
                    BACK
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductDetails;
