import React from 'react';
import { useCart } from '../context/CartContext';
import { PawPrintIcon } from './icons/PawPrintIcon';
import { CartIcon } from './icons/CartIcon';

interface HeaderProps {
  onHomeClick: () => void;
  onPetsClick: () => void;
  onContactClick: () => void;
  onCartClick: () => void;
  onAdminClick: () => void;
  isAdminMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick, onPetsClick, onContactClick, onCartClick, onAdminClick, isAdminMode }) => {
  const { cartItems } = useCart();

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-40 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={onHomeClick}
          >
            <PawPrintIcon className="w-8 h-8 text-brand-primary" />
            <span className="font-display text-3xl text-brand-dark">PawShop</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={onHomeClick} className="text-gray-600 hover:text-brand-primary transition-colors text-lg font-medium">Home</button>
            <button onClick={onPetsClick} className="text-gray-600 hover:text-brand-primary transition-colors text-lg font-medium">Pets</button>
            <button onClick={onContactClick} className="text-gray-600 hover:text-brand-primary transition-colors text-lg font-medium">Contact</button>
          </nav>
          <div className="flex items-center gap-2">
            <button 
              onClick={onAdminClick} 
              className={`transition-colors p-2 text-sm font-semibold rounded-md ${
                isAdminMode 
                ? 'bg-red-500 text-white hover:bg-red-600' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {isAdminMode ? 'Logout' : 'Admin'}
            </button>
            <button onClick={onCartClick} className="relative text-gray-600 hover:text-brand-primary transition-colors p-2">
              <CartIcon className="w-7 h-7" />
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-brand-primary text-white text-xs flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;