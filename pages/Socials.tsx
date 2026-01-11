import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';
import PageTransition from '../components/PageTransition';

const Socials: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-24 min-h-screen bg-[#111111] text-[#F9F9F9] flex flex-col items-center justify-center">
        <main className="max-w-4xl w-full px-6 py-12">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-black mb-20 text-center uppercase tracking-tighter leading-[0.85]"
          >
            Connect<br /><span className="text-gray-600">With Us</span>
          </motion.h1>

          <nav className="space-y-4" aria-label="Social Media Links">
            {SOCIAL_LINKS.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-8 border-t border-white/10 hover:bg-white hover:text-black transition-all duration-300 focus:outline-none focus:bg-white focus:text-black focus:ring-2 focus:ring-white rounded-sm"
                  aria-label={`Visit our ${link.platform} page`}
                >
                  <div className="flex items-center gap-8">
                    <span className="font-mono text-xs opacity-40 group-hover:opacity-100 transition-opacity">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-3xl md:text-5xl font-bold uppercase tracking-tight">{link.platform}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="hidden md:block font-mono text-xs tracking-widest opacity-60 group-hover:opacity-100 uppercase">
                      {link.handle}
                    </span>
                    <ArrowUpRight className="transform group-hover:rotate-45 transition-transform duration-300 opacity-60 group-hover:opacity-100" size={28} />
                  </div>
                </a>
              </motion.div>
            ))}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="border-t border-white/10 origin-left"
            />
          </nav>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-24 text-center"
          >
            <p className="font-mono text-xs text-gray-500 tracking-[0.2em] uppercase">
              #RawSupply
            </p>
          </motion.div>
        </main>
      </div>
    </PageTransition>
  );
};

export default Socials;