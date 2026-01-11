
import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Sun, Moon } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { ASSETS } from '../constants';
import { useTheme } from './ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'SHOP', path: '/shop' },
    { name: 'DROPS', path: '/drops' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SOCIALS', path: '/socials' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F9F9F9] dark:bg-[#111111] border-b border-transparent dark:border-gray-800 transition-colors duration-500 ease-in-out">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">

          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white rounded-sm p-1"
              aria-label="Raw Supply Home"
            >
              <img
                src={theme === 'dark' ? ASSETS.logoWhite : ASSETS.logoBlack}
                alt="Raw Supply"
                className="h-8 md:h-10 w-auto object-contain transition-opacity duration-300"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-12 items-center" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs font-mono font-bold tracking-[0.2em] transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white rounded-sm px-1 ${isActive ? 'text-black dark:text-white' : 'text-gray-400 hover:text-black dark:hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-8">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300 relative w-10 h-10 flex items-center justify-center overflow-hidden"
              aria-label="Toggle Dark Mode"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -20, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 20, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  {theme === 'light' ? <Moon size={20} strokeWidth={1.5} /> : <Sun size={20} strokeWidth={1.5} />}
                </motion.div>
              </AnimatePresence>
            </button>

            <button
              className="md:hidden p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white rounded-sm text-black dark:text-white transition-colors duration-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav
          className="md:hidden bg-[#F9F9F9] dark:bg-[#111111] border-t border-gray-200 dark:border-gray-800 absolute w-full h-screen z-40"
          aria-label="Mobile Navigation"
        >
          <div className="px-6 py-12 flex flex-col items-start space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-black uppercase tracking-tighter hover:text-gray-500 text-black dark:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white rounded-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
