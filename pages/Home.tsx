
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ASSETS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="w-full bg-[#F9F9F9]">
      {/* Hero Section */}
      <section className="relative h-screen w-full bg-[#F9F9F9] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        
        {/* Floating Motto Background */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-[0.03]">
           <span className="text-[40vw] font-black uppercase whitespace-nowrap">Raw As War</span>
        </div>

        <div className="relative z-10 flex flex-col items-center max-w-7xl mx-auto">
          <p className="text-xs font-mono tracking-[0.5em] uppercase text-black mb-6">
            Fashion Is A Battle
          </p>
          <h1 className="text-[16vw] lg:text-[14rem] font-black tracking-tighter leading-[0.8] mb-8 text-black uppercase select-none">
            Raw<br/>Supply
          </h1>
          <p className="text-xs lg:text-sm font-mono tracking-[0.4em] uppercase text-gray-500 mb-12">
            Texture Is A Conflict
          </p>
        </div>
        
        <Link 
          to="/shop" 
          className="group relative z-20 flex items-center gap-6 text-black px-10 py-4 font-mono text-sm tracking-widest uppercase border border-black hover:bg-black hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black rounded-sm"
        >
          Enter Shop
          <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
        </Link>
      </section>

      {/* Philosophy / Manifesto Banner */}
      <section className="relative py-32 px-6 lg:px-12 bg-black text-white overflow-hidden" aria-labelledby="philosophy-heading">
        {/* Background Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          style={{ backgroundImage: `url(${ASSETS.texture})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
          <h2 id="philosophy-heading" className="sr-only">Our Philosophy</h2>
          <div className="flex justify-center items-center gap-4">
            <span className="h-px w-12 bg-white/50"></span>
            <span className="text-[10px] font-mono tracking-[0.3em] text-white/70 uppercase">
              The Doctrine
            </span>
            <span className="h-px w-12 bg-white/50"></span>
          </div>
          <p className="text-3xl lg:text-6xl font-black leading-tight uppercase tracking-tight">
            "Fashion is a battle.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">Texture is a conflict.</span><br/>
            Raw as War."
          </p>
        </div>
      </section>

      {/* Featured Categories Grid - Uses Editorial Assets for better visual impact */}
      <section className="bg-[#F9F9F9] text-black" aria-label="Featured Categories">
        <div className="grid grid-cols-1 lg:grid-cols-3 min-h-screen">
          
          {/* Vertical Tee / Conflict (Men) */}
          <Link 
            to="/shop" 
            className="relative group overflow-hidden border-b lg:border-b-0 lg:border-r border-gray-200 min-h-[50vh] lg:min-h-full focus:outline-none focus:ring-inset focus:ring-2 focus:ring-black"
            aria-label="Shop Men's Collection"
          >
             <div className="absolute inset-0 bg-gray-100 group-hover:bg-white transition-all duration-700 z-10" />
             <img 
              src={ASSETS.editorialMen} 
              alt=""
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] mix-blend-multiply opacity-80 contrast-125 grayscale" 
             />
             <div className="absolute top-8 left-8 z-20 pointer-events-none">
               <span className="font-mono text-xs text-black mb-2 block border border-black inline-block px-2 py-1">01 / CONFLICT</span>
               {/* Text is always visible but gets darker on hover */}
               <h3 className="text-4xl font-black uppercase tracking-tighter text-black/70 group-hover:text-black transition-colors duration-500 mt-2">
                 Men's<br/>Archive
               </h3>
             </div>
             <div className="absolute bottom-8 right-8 z-20 pointer-events-none">
               <ArrowRight className="text-black w-8 h-8 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
             </div>
          </Link>

          {/* Cap / Armor (Accessories) */}
          <Link 
            to="/shop" 
            className="relative group overflow-hidden border-b lg:border-b-0 lg:border-r border-gray-200 min-h-[50vh] lg:min-h-full focus:outline-none focus:ring-inset focus:ring-2 focus:ring-black"
            aria-label="Shop Accessories"
          >
             <div className="absolute inset-0 bg-gray-100 group-hover:bg-white transition-all duration-700 z-10" />
             <img 
              src={ASSETS.editorialAccessories} 
              alt="" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] mix-blend-multiply opacity-80 contrast-125 grayscale" 
             />
             <div className="absolute top-8 left-8 z-20 pointer-events-none">
               <span className="font-mono text-xs text-black mb-2 block border border-black inline-block px-2 py-1">02 / ARMOR</span>
               <h3 className="text-4xl font-black uppercase tracking-tighter text-black/70 group-hover:text-black transition-colors duration-500 delay-75 mt-2">
                 Object<br/>& Gear
               </h3>
             </div>
             <div className="absolute bottom-8 right-8 z-20 pointer-events-none">
               <ArrowRight className="text-black w-8 h-8 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
             </div>
          </Link>

          {/* Essentials / Uniform (Women) */}
          <Link 
            to="/shop" 
            className="relative group overflow-hidden min-h-[50vh] lg:min-h-full focus:outline-none focus:ring-inset focus:ring-2 focus:ring-black"
            aria-label="Shop Women's Collection"
          >
             <div className="absolute inset-0 bg-gray-100 group-hover:bg-white transition-all duration-700 z-10" />
             <img 
              src={ASSETS.editorialWomen} 
              alt="" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] mix-blend-multiply opacity-80 contrast-125 grayscale" 
             />
             <div className="absolute top-8 left-8 z-20 pointer-events-none">
               <span className="font-mono text-xs text-black mb-2 block border border-black inline-block px-2 py-1">03 / UNIFORM</span>
               <h3 className="text-4xl font-black uppercase tracking-tighter text-black/70 group-hover:text-black transition-colors duration-500 delay-150 mt-2">
                 Women's<br/>Corps
               </h3>
             </div>
             <div className="absolute bottom-8 right-8 z-20 pointer-events-none">
               <ArrowRight className="text-black w-8 h-8 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
             </div>
          </Link>

        </div>
      </section>

      {/* Lookbook Call to Action */}
      <section className="py-32 bg-white border-t border-gray-100">
         <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
               <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                 Ready<br/>For<br/>War.
               </h2>
               <p className="text-gray-600 font-mono text-sm leading-relaxed mb-10 max-w-md">
                 Every thread is a strategy. Every stitch is a tactic. 
                 <br/><br/>
                 "Raw As War" isn't just a saying; it is the fundamental law of our design process. 
                 We create uniforms for the daily battle of expression.
               </p>
               <Link 
                to="/about" 
                className="inline-flex items-center gap-2 text-black font-bold uppercase tracking-widest text-xs border-b-2 border-black pb-1 hover:bg-black hover:text-white hover:px-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black rounded-sm"
               >
                 View The Manifesto
               </Link>
            </div>
            <div className="order-1 md:order-2 relative aspect-[3/4] overflow-hidden bg-gray-100">
               {/* Using texture image as a "Raw" artistic element */}
               <img 
                 src={ASSETS.texture} 
                 alt="Fabric Texture" 
                 className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-1000 contrast-125"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/80 font-black text-6xl uppercase mix-blend-difference tracking-tighter opacity-50 rotate-90 md:rotate-0">
                    Raw As War
                  </span>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;
