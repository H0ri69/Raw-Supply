
import React, { useState, useEffect } from 'react';
import { MemoryRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Drops from './pages/Drops';
import About from './pages/About';
import Socials from './pages/Socials';
import ProductDetails from './pages/ProductDetails';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ShippingReturns from './pages/ShippingReturns';
import { Product } from './types';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Simple noise SVG data URI for the raw texture effect
const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`;

const AppContent: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      {/* Global Noise Overlay for "Raw" Aesthetic - Adjusted for Light Theme */}
      <div
        className="fixed inset-0 pointer-events-none z-[9999] opacity-30 mix-blend-multiply"
        style={{ backgroundImage: NOISE_SVG }}
      />

      <div className="min-h-screen flex flex-col selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black bg-[#F9F9F9] dark:bg-[#111111] transition-colors duration-500 ease-in-out">
        <Navbar />

        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <div key={location.pathname} className="w-full">
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/drops" element={<Drops />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/socials" element={<Socials />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/shipping-returns" element={<ShippingReturns />} />
              </Routes>
            </div>
          </AnimatePresence>
        </main>

        <footer className="bg-black text-white dark:bg-[#F9F9F9] dark:text-black py-12 px-6 border-t border-gray-800 dark:border-gray-200 transition-colors duration-500 ease-in-out">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <h4 className="text-2xl font-black uppercase tracking-tight">Raw Supply</h4>
              <p className="text-gray-400 dark:text-gray-600 text-sm mt-2 font-mono">RAW AS WAR</p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 font-mono text-sm text-gray-400 dark:text-gray-600">
              <Link to="/privacy-policy" className="hover:text-white dark:hover:text-black transition-colors">PRIVACY POLICY</Link>
              <Link to="/terms-of-service" className="hover:text-white dark:hover:text-black transition-colors">TERMS OF SERVICE</Link>
              <Link to="/shipping-returns" className="hover:text-white dark:hover:text-black transition-colors">SHIPPING & RETURNS</Link>
            </div>
            <div className="text-gray-500 text-xs font-mono">
              © 2026 RAW SUPPLY.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Router>
  );
};

export default App;
