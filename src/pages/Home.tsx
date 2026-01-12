
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ASSETS } from '../constants';
import PageTransition from '../components/PageTransition';
import { Reveal } from '../components/Reveal';

const Home: React.FC = () => {
  return (
    <PageTransition>
      <div className="w-full bg-[#F9F9F9] dark:bg-[#111111]">
        {/* Hero Section */}
        <section className="relative h-screen w-full bg-[#F9F9F9] dark:bg-[#111111] flex flex-col items-center justify-center text-center px-4 overflow-hidden">

          {/* Floating Motto Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.03 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none"
          >
            <span className="text-[40vw] font-black uppercase whitespace-nowrap text-black dark:text-white text-center w-full">Raw As War</span>
          </motion.div>

          <div className="relative z-10 flex flex-col items-center max-w-7xl mx-auto">
            <motion.p
              initial={{ opacity: 0.01, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xs font-mono tracking-[0.5em] uppercase text-black dark:text-white mb-6"
            >
              Fashion Is A Battle
            </motion.p>

            <h1 className="text-[16vw] lg:text-[14rem] font-black tracking-tighter leading-[0.8] mb-8 text-black dark:text-white uppercase select-none overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="block"
              >
                Raw
              </motion.span>
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="block"
              >
                Supply
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xs lg:text-sm font-mono tracking-[0.4em] uppercase text-gray-500 dark:text-gray-400 mb-12"
            >
              Texture Is A Conflict
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link
              to="/shop"
              className="group relative z-20 flex items-center gap-6 text-black dark:text-white px-10 py-4 font-mono text-sm tracking-widest uppercase border border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black rounded-sm"
            >
              Enter Shop
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </section>

        {/* Philosophy / Manifesto Banner */}
        <section className="relative py-32 px-6 lg:px-12 bg-black text-white dark:bg-[#F0F0F0] dark:text-black overflow-hidden" aria-labelledby="philosophy-heading">
          {/* Background Texture Overlay */}
          <div
            className="absolute inset-0 opacity-40 mix-blend-overlay dark:opacity-10 dark:mix-blend-multiply"
            style={{ backgroundImage: `url(${ASSETS.texture})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          />

          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
            <h2 id="philosophy-heading" className="sr-only">Our Philosophy</h2>
            <Reveal width="100%">
              <div className="flex justify-center items-center gap-4">
                <span className="h-px w-12 bg-white/50 dark:bg-black/50"></span>
                <span className="text-[10px] font-mono tracking-[0.3em] text-white/70 dark:text-black/70 uppercase">
                  The Doctrine
                </span>
                <span className="h-px w-12 bg-white/50 dark:bg-black/50"></span>
              </div>
            </Reveal>

            <Reveal>
              <p className="text-3xl lg:text-6xl font-black leading-tight uppercase tracking-tight">
                "Fashion is a battle.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white dark:from-gray-600 dark:to-black">Texture is a conflict.</span><br />
                Raw as War."
              </p>
            </Reveal>
          </div>
        </section>

        {/* Lookbook Call to Action */}
        <section className="py-32 bg-white dark:bg-black border-t border-gray-100 dark:border-gray-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <Reveal width="100%">
                <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9] text-black dark:text-white">
                  Ready<br />For<br />War.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-gray-600 dark:text-gray-400 font-mono text-sm leading-relaxed mb-10 max-w-md">
                  Every thread is a strategy. Every stitch is a tactic.
                  <br /><br />
                  "Raw As War" isn't just a saying; it is the fundamental law of our design process.
                  We create uniforms for the daily battle of expression.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-black dark:text-white font-bold uppercase tracking-widest text-xs border-b-2 border-black dark:border-white pb-1 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:px-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black rounded-sm"
                >
                  View The Manifesto
                </Link>
              </Reveal>
            </div>
            <div className="order-1 md:order-2 relative aspect-[3/4] overflow-hidden bg-gray-100 dark:bg-gray-900">
              {/* Using texture image as a "Raw" artistic element */}
              <motion.img
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={ASSETS.texture}
                alt="Fabric Texture"
                className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-1000 contrast-125 dark:invert"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/80 font-black text-6xl uppercase mix-blend-difference tracking-tighter opacity-50 text-center">
                  Raw As War
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
