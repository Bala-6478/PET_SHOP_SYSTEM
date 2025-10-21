import React from 'react';
import { Pet } from '../types';
import { useCart } from '../context/CartContext';
import { CartIcon } from './icons/CartIcon';

interface PetDetailModalProps {
  pet: Pet | null;
  isOpen: boolean;
  onClose: () => void;
}

const PetDetailModal: React.FC<PetDetailModalProps> = ({ pet, isOpen, onClose }) => {
  const { addToCart, cartItems } = useCart();

  if (!isOpen || !pet) return null;

  const isInCart = cartItems.some(item => item.id === pet.id);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4" 
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="md:w-1/2 w-full h-64 md:h-auto">
          <img 
            src={pet.imageUrl} 
            alt={pet.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 w-full flex flex-col p-6 md:p-8">
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">{pet.name}</h2>
                    <p className="text-gray-500 mt-1 text-lg">{pet.breed}</p>
                </div>
                <button onClick={onClose} className="text-3xl font-light text-gray-500 hover:text-gray-800">&times;</button>
            </div>
            <div className="flex-grow overflow-y-auto my-6 pr-2">
                <p className="text-gray-700 leading-relaxed">
                    {pet.description}
                </p>
            </div>
            <div className="flex justify-between items-center mt-auto pt-4 border-t">
                <p className="text-3xl font-bold text-brand-primary">${pet.price}</p>
                <button 
                    onClick={() => !isInCart && addToCart(pet)}
                    disabled={isInCart}
                    className={`flex items-center gap-2 font-bold py-3 px-6 rounded-full transition-colors text-lg ${
                    isInCart 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-brand-green text-white hover:bg-opacity-90'
                    }`}
                >
                    <CartIcon className="w-6 h-6"/>
                    {isInCart ? 'Added to Cart' : 'Add to Cart'}
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetailModal;