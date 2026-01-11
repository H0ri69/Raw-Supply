import React, { useEffect, useRef } from 'react';
import { X, Trash2, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  removeFromCart: (id: number) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, cartItems, removeFromCart }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Trap focus or handle escape key (Simplified for this iteration)
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      // Disable body scroll
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] overflow-hidden" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="cart-title"
    >
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
        aria-hidden="true"
      />
      
      <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-0 sm:pl-10">
        <aside 
          ref={drawerRef}
          className="pointer-events-auto w-screen max-w-md transform transition-transform duration-500 ease-in-out bg-white flex flex-col h-full border-l border-gray-100"
        >
          
          <header className="flex items-center justify-between px-8 py-8 border-b border-gray-100 bg-white">
            <h2 id="cart-title" className="text-lg font-black tracking-tighter uppercase">Cart ({cartItems.length})</h2>
            <button 
              onClick={onClose} 
              className="p-2 -mr-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-black"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </header>

          <div className="flex-1 overflow-y-auto px-8 py-6">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center space-y-6 text-center opacity-50">
                <p className="font-mono text-sm">YOUR BAG IS EMPTY</p>
                <button 
                  onClick={onClose} 
                  className="text-xs font-bold border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all focus:outline-none focus:ring-2 focus:ring-black rounded-sm"
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            ) : (
              <ul className="space-y-10">
                {cartItems.map((item) => (
                  <li key={`${item.id}-${Math.random()}`} className="flex py-2">
                    <div className="h-24 w-20 flex-shrink-0 overflow-hidden bg-gray-100">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="h-full w-full object-cover object-center grayscale" 
                      />
                    </div>
                    <div className="ml-6 flex flex-1 flex-col justify-between">
                      <div>
                        <div className="flex justify-between text-sm font-bold uppercase tracking-tight text-black">
                          <h3>{item.name}</h3>
                          <p className="ml-4 font-mono font-normal text-gray-500">${item.price.toFixed(2)}</p>
                        </div>
                        <p className="mt-1 text-xs text-gray-400 font-mono">{item.category}</p>
                      </div>
                      <div className="flex items-center justify-between text-xs font-mono">
                        <p className="text-gray-500">QTY {item.quantity}</p>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="font-medium text-black hover:text-red-600 transition-colors focus:outline-none focus:underline"
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          REMOVE
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {cartItems.length > 0 && (
            <footer className="border-t border-gray-100 px-8 py-8 bg-[#FAFAFA]">
              <div className="flex justify-between text-sm font-medium text-black mb-4">
                <p className="uppercase tracking-widest font-bold">Subtotal</p>
                <p className="font-mono">${subtotal.toFixed(2)}</p>
              </div>
              <p className="mt-1 text-[10px] text-gray-400 font-mono mb-8 uppercase">Shipping and taxes calculated at checkout.</p>
              <button
                className="group w-full flex items-center justify-between bg-black px-6 py-5 text-sm font-bold text-white uppercase tracking-widest hover:bg-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                <span>Checkout</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </footer>
          )}
        </aside>
      </div>
    </div>
  );
};

export default CartDrawer;