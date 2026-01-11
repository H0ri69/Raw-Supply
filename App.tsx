
import React, { useState, useEffect } from 'react';
import { MemoryRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Drops from './pages/Drops';
import About from './pages/About';
import Socials from './pages/Socials';
import ProductDetails from './pages/ProductDetails';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ShippingReturns from './pages/ShippingReturns';
import { Product, CartItem } from './types';

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
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <ScrollToTop />
      {/* Global Noise Overlay for "Raw" Aesthetic - Adjusted for Light Theme */}
      <div
        className="fixed inset-0 pointer-events-none z-[9999] opacity-30 mix-blend-multiply"
        style={{ backgroundImage: NOISE_SVG }}
      />

      <div className="min-h-screen flex flex-col selection:bg-black selection:text-white bg-[#F9F9F9]">
        <Navbar cartCount={cartCount} toggleCart={() => setIsCartOpen(true)} />

        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cart}
          removeFromCart={removeFromCart}
        />

        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <div key={location.pathname} className="w-full">
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop addToCart={addToCart} />} />
                <Route path="/drops" element={<Drops addToCart={addToCart} />} />
                <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
                <Route path="/about" element={<About />} />
                <Route path="/socials" element={<Socials />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/shipping-returns" element={<ShippingReturns />} />
              </Routes>
            </div>
          </AnimatePresence>
        </main>

        <footer className="bg-black text-white py-12 px-6 border-t border-gray-800">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <h4 className="text-2xl font-black uppercase tracking-tight">Raw Supply</h4>
              <p className="text-gray-400 text-sm mt-2 font-mono">RAW AS WAR</p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 font-mono text-sm text-gray-400">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">PRIVACY POLICY</Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">TERMS OF SERVICE</Link>
              <Link to="/shipping-returns" className="hover:text-white transition-colors">SHIPPING & RETURNS</Link>
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
      <AppContent />
    </Router>
  );
};

export default App;
