import React from 'react';
import { Pet } from '../types';
import { useCart } from '../context/CartContext';
import { CartIcon } from './icons/CartIcon';

interface PetCardProps {
  pet: Pet;
  removePet: (petId: number) => void;
  isAdminMode: boolean;
  onPetClick: (pet: Pet) => void;
}

const PetCard: React.FC<PetCardProps> = ({ pet, removePet, isAdminMode, onPetClick }) => {
  const { addToCart, cartItems } = useCart();
  const isInCart = cartItems.some(item => item.id === pet.id);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group relative">
       {isAdminMode && (
        <button
          onClick={() => removePet(pet.id)}
          className="absolute top-2 left-2 z-10 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors shadow-lg"
          aria-label={`Remove ${pet.name}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      )}
      <div className="relative">
        <button 
          onClick={() => onPetClick(pet)} 
          className="aspect-square w-full block"
          aria-label={`View details for ${pet.name}`}
        >
          <img 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
            src={pet.imageUrl} 
            alt={pet.name} 
          />
        </button>
        <div className="absolute top-2 right-2 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full pointer-events-none">
          {pet.type}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-2xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors">{pet.name}</h3>
        <p className="text-gray-500 mt-1">{pet.breed}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-2xl font-semibold text-brand-primary">${pet.price}</p>
          <button 
            onClick={() => !isInCart && addToCart(pet)}
            disabled={isInCart}
            className={`flex items-center gap-2 font-bold py-2 px-4 rounded-full transition-colors ${
              isInCart 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-brand-green text-white hover:bg-opacity-90'
            }`}
          >
            <CartIcon className="w-5 h-5"/>
            {isInCart ? 'Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetCard;