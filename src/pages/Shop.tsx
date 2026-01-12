
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { CategoryFilter } from '../types';
import PageTransition from '../components/PageTransition';
import { Reveal } from '../components/Reveal';

const Shop: React.FC = () => {
  const [filter, setFilter] = useState<CategoryFilter>('all');

  const filteredProducts = filter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === filter);

  const categories: { label: string; value: CategoryFilter }[] = [
    { label: 'All', value: 'all' },
    { label: 'Men', value: 'men' },
    { label: 'Women', value: 'women' },
    { label: 'Accessories', value: 'accessories' },
  ];

  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
        <header className="flex flex-col md:flex-row justify-between items-baseline mb-16 border-b border-gray-200 dark:border-gray-800 pb-8">
          <Reveal>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase mb-4 md:mb-0 text-black dark:text-white">Shop</h1>
          </Reveal>

          {/* Category Filters */}
          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-8">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setFilter(cat.value)}
                  className={`font-mono text-sm tracking-widest uppercase transition-colors hover:text-black dark:hover:text-white focus:outline-none ${filter === cat.value ? 'text-black dark:text-white border-b border-black dark:border-white' : 'text-gray-400 dark:text-gray-500'
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </Reveal>
        </header>

        <section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10"
          aria-label="Product Grid"
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
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
