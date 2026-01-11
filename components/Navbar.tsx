
import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { ASSETS } from '../constants';

interface NavbarProps {
  cartCount: number;
  toggleCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, toggleCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'SHOP', path: '/shop' },
    { name: 'DROPS', path: '/drops' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SOCIALS', path: '/socials' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F9F9F9] border-b border-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link 
              to="/" 
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-sm p-1"
              aria-label="Raw Supply Home"
            >
              <div className="w-8 h-8 bg-black rounded-full overflow-hidden border border-black group-hover:scale-105 transition-transform duration-300">
                <img src={ASSETS.logo} alt="" className="w-full h-full object-cover opacity-80" />
              </div>
              <span className="font-black text-lg tracking-tighter uppercase">Raw Supply</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-12 items-center" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs font-mono font-bold tracking-[0.2em] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-sm px-1 ${
                    isActive ? 'text-black' : 'text-gray-400 hover:text-black'
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
              onClick={toggleCart} 
              className="relative group p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
              aria-label={`Shopping cart with ${cartCount} items`}
            >
              <ShoppingBag size={20} strokeWidth={1.5} className="group-hover:stroke-[2px] transition-all" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold leading-none text-white bg-black rounded-full transform translate-x-1/4 -translate-y-1/4">
                  {cartCount}
                </span>
              )}
            </button>
            
            <button 
              className="md:hidden p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-sm"
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
          className="md:hidden bg-[#F9F9F9] border-t border-gray-200 absolute w-full h-screen z-40"
          aria-label="Mobile Navigation"
        >
          <div className="px-6 py-12 flex flex-col items-start space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-black uppercase tracking-tighter hover:text-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-sm"
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
