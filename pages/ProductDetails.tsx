
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PRODUCTS } from '../constants';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = PRODUCTS.find((p) => p.id === Number(id));
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9F9F9]">
        <div className="text-center">
          <h2 className="text-4xl font-black uppercase mb-4">Item Missing</h2>
          <button
            onClick={() => navigate('/shop')}
            className="text-sm font-mono border-b border-black hover:text-gray-500"
          >
            RETURN TO BASE
          </button>
        </div>
      </div>
    );
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
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
          className="relative aspect-[3/4] bg-gray-100 dark:bg-gray-900 overflow-hidden cursor-zoom-in group border border-gray-200 dark:border-gray-800"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onMouseMove={handleMouseMove}
        >
          {/* Base Image */}
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-300 ${isHovering ? 'opacity-0' : 'opacity-100'}`}
          />

          {/* Zoomed Image Overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `url(${product.image})`,
              backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
              backgroundSize: '250%',
              opacity: isHovering ? 1 : 0,
            }}
          />

          <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur px-3 py-1 pointer-events-none">
            <span className="text-[10px] font-mono tracking-widest uppercase">
              {isHovering ? 'INSPECTING MATERIAL' : 'HOVER TO INSPECT'}
            </span>
          </div>
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
