
import React from 'react';

interface HeroProps {
  onShopNowClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopNowClick }) => {
  return (
    <section className="bg-brand-orange/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-dark tracking-tight leading-tight">
            Find Your New <span className="text-brand-primary">Best Friend</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
            Welcome to PawShop, where loving pets find their forever homes. Explore our family of happy and healthy companions.
          </p>
          <div className="mt-8">
            <button 
              onClick={onShopNowClick}
              className="bg-brand-primary text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
            >
              Browse Pets
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
