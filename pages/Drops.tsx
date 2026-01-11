
import React, { useState, useEffect } from 'react';
import { PRODUCTS, DROPS_SCHEDULE } from '../constants';
import ProductCard from '../components/ProductCard';
import { Product, DropInfo } from '../types';
import { Lock, ChevronLeft, ChevronRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Reveal } from '../components/Reveal';


const DropSection: React.FC<{
  dropInfo: DropInfo;
  products: Product[];
}> = ({ dropInfo, products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else if (window.innerWidth < 1280) setItemsPerView(3);
      else setItemsPerView(4);
    };

    // Initial call
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Ensure index remains valid when view changes
  useEffect(() => {
    const maxIndex = Math.max(0, products.length - itemsPerView);
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [itemsPerView, products.length, currentIndex]);

  const isLocked = dropInfo.status === 'upcoming' || dropInfo.status === 'mystery';
  const maxIndex = Math.max(0, products.length - itemsPerView);

  const next = () => setCurrentIndex(i => Math.min(i + 1, maxIndex));
  const prev = () => setCurrentIndex(i => Math.max(i - 1, 0));

  return (
    <Reveal width="100%">
      <section className="border-t border-black dark:border-white pt-12 mb-20">
        {/* Drop Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <h2 className={`text-4xl md:text-6xl font-black uppercase tracking-tighter dark:text-white ${isLocked ? 'blur-[2px] opacity-50' : ''}`}>
                {dropInfo.id}
              </h2>
              {isLocked && <Lock className="w-6 h-6 md:w-8 md:h-8 dark:text-white" />}
            </div>
            <h3 className="text-xl md:text-3xl font-bold uppercase tracking-tight mb-2 dark:text-white">
              {dropInfo.status === 'mystery' ? '???' : dropInfo.title}
            </h3>
            <p className="font-mono text-xs text-gray-500 dark:text-gray-400 tracking-[0.3em] uppercase">
              {dropInfo.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-6 mt-6 md:mt-0">
            <div className="font-mono text-sm text-right">
              {isLocked ? (
                <div className="px-4 py-2 border border-black dark:border-white bg-black dark:bg-white text-white dark:text-black uppercase tracking-widest text-xs">
                  {dropInfo.date ? `Launches ${dropInfo.date}` : 'Top Secret'}
                </div>
              ) : (
                <span className="dark:text-white">{products.length} ITEMS DETECTED</span>
              )}
            </div>

            {/* Controls */}
            {!isLocked && products.length > itemsPerView && (
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  disabled={currentIndex === 0}
                  className="p-3 border border-black dark:border-white disabled:opacity-20 disabled:cursor-not-allowed hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black text-black dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-black"
                  aria-label="Previous items"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={next}
                  disabled={currentIndex === maxIndex}
                  className="p-3 border border-black dark:border-white disabled:opacity-20 disabled:cursor-not-allowed hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black text-black dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-black"
                  aria-label="Next items"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Content Area */}
        {isLocked ? (
          // Locked / Mystery State
          <div className="w-full h-96 bg-gray-100 dark:bg-gray-900 relative overflow-hidden flex items-center justify-center group">
            <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply dark:mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            <div className="text-center z-10 relative">
              <div className="text-9xl font-black opacity-5 select-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap dark:text-white">
                RESTRICTED
              </div>
              <div className="bg-black text-white dark:bg-white dark:text-black px-8 py-4 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <p className="font-mono text-sm tracking-[0.5em] uppercase">
                  {dropInfo.status === 'mystery' ? 'ACCESS DENIED' : 'COMING SOON'}
                </p>
              </div>
              {dropInfo.status === 'mystery' && (
                <p className="mt-8 font-mono text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest blur-sm hover:blur-none transition-all duration-700">
                  Clearance Level 5 Required
                </p>
              )}
            </div>
          </div>
        ) : (
          // Carousel
          <div className="overflow-hidden -mx-5 px-5 py-4">
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {products.map(product => (
                <div
                  key={product.id}
                  className="flex-shrink-0 px-5"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </Reveal>
  );
};

const Drops: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
        <div className="mb-20 text-center relative">
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter opacity-10 select-none pointer-events-none fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 text-black dark:text-white">
            Archives
          </h1>
        </div>

        <div className="relative z-10">
          {DROPS_SCHEDULE.map((dropInfo) => {
            const dropProducts = PRODUCTS.filter(p => p.drop === dropInfo.id);
            return (
              <DropSection
                key={dropInfo.id}
                dropInfo={dropInfo}
                products={dropProducts}
              />
            );
          })}
        </div>
      </div>
    </PageTransition>
  );
};

export default Drops;
