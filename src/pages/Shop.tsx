
import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import PageTransition from '../components/PageTransition';
import { Reveal } from '../components/Reveal';

const Shop: React.FC = () => {

  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
        <header className="mb-16 border-b border-gray-200 dark:border-gray-800 pb-8">
          <Reveal>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase mb-4 text-black dark:text-white">Shop</h1>
          </Reveal>
        </header>

        <section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10"
          aria-label="Product Grid"
        >
          {PRODUCTS.length > 0 ? (
            PRODUCTS.map((product, index) => (
              <Reveal key={product.id} delay={index * 0.1}>
                <ProductCard product={product} />
              </Reveal>
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-gray-400 dark:text-gray-500 font-mono uppercase tracking-widest">
              No items found in this category.
            </div>
          )}
        </section>
      </div>
    </PageTransition>
  );
};

export default Shop;
