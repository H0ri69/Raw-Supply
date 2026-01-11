
import React from 'react';
import { ASSETS } from '../constants';
import PageTransition from '../components/PageTransition';
import { Reveal } from '../components/Reveal';

const About: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-20 min-h-screen bg-[#F9F9F9]">
        {/* Header */}
        <div className="px-6 py-20 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto text-center">
            <Reveal width="100%">
              <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">
                Fashion Is<br />A Battle
              </h1>
            </Reveal>
            <Reveal width="100%" delay={0.2}>
              <p className="text-xl md:text-2xl font-mono text-gray-500 max-w-2xl mx-auto tracking-tight uppercase">
                Texture is a conflict. Raw is War.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Content Split */}
        <div className="flex flex-col md:flex-row min-h-[80vh]">
          <div className="w-full md:w-1/2 p-12 md:p-24 bg-white flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-100">
            <Reveal>
              <h2 className="text-xs font-mono tracking-[0.3em] uppercase mb-6 text-gray-400">The Strategy</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="text-4xl font-black uppercase tracking-tighter mb-8">Raw As War</h3>
            </Reveal>
            <div className="prose prose-lg text-black space-y-8 font-mono text-sm leading-relaxed max-w-md">
              <Reveal delay={0.2}>
                <p>
                  <span className="font-bold border-b border-black">THE CONCEPT:</span> We view design not as decoration, but as a confrontation. The material fights the cut. The dye fights the fiber.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p>
                  <span className="font-bold border-b border-black">THE PALINDROME:</span> "RAW AS WAR" reads the same forward and backward. It creates a loop of creation and destruction. This cycle is embedded in every garment we produce.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <p>
                  We don't hide the seams. We don't polish the edges. We let the conflict show.
                </p>
              </Reveal>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-black relative overflow-hidden group">
            {/* Texture Image for the 'Conflict' aesthetic */}
            <img
              src={ASSETS.texture}
              alt="Raw Texture"
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2s] grayscale contrast-150"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-12 text-white mix-blend-difference">
              <span className="font-mono text-xs tracking-widest">EST. 2024</span>
              <h4 className="text-6xl font-black uppercase tracking-tighter leading-none opacity-50">
                Texture<br />Is<br />Conflict
              </h4>
            </div>
          </div>
        </div>

        {/* Manifesto Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-200">
          <div className="p-12 border-b md:border-b-0 md:border-r border-gray-200 hover:bg-black hover:text-white transition-colors duration-500 group bg-white h-full flex flex-col justify-between">
            <span className="font-mono text-xs mb-4 block opacity-50">FIG. 01</span>
            <div>
              <h3 className="text-2xl font-black mb-2 uppercase">The Raw</h3>
              <p className="text-sm opacity-70 font-mono">Unprocessed reality. The material in its most honest, violent form.</p>
            </div>
          </div>
          <div className="p-12 border-b md:border-b-0 md:border-r border-gray-200 hover:bg-black hover:text-white transition-colors duration-500 group bg-white h-full flex flex-col justify-between">
            <span className="font-mono text-xs mb-4 block opacity-50">FIG. 02</span>
            <div>
              <h3 className="text-2xl font-black mb-2 uppercase">The Battle</h3>
              <p className="text-sm opacity-70 font-mono">The friction between comfort and structure. The aesthetic of struggle.</p>
            </div>
          </div>
          <div className="p-12 hover:bg-black hover:text-white transition-colors duration-500 group bg-white h-full flex flex-col justify-between">
            <span className="font-mono text-xs mb-4 block opacity-50">FIG. 03</span>
            <div>
              <h3 className="text-2xl font-black mb-2 uppercase">The War</h3>
              <p className="text-sm opacity-70 font-mono">The final product. A garment that has survived the process.</p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;