
import React from 'react';
import { PawPrintIcon } from './icons/PawPrintIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <PawPrintIcon className="w-6 h-6 text-brand-primary" />
              <span className="font-display text-2xl">PawShop</span>
            </div>
            <p className="text-gray-400 mt-2">© {new Date().getFullYear()} @2025. All Rights Reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Shipping Info</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">FAQs</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
