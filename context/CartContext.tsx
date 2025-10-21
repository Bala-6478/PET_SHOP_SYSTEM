
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Pet } from '../types';

interface CartContextType {
  cartItems: Pet[];
  addToCart: (pet: Pet) => void;
  removeFromCart: (petId: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Pet[]>([]);

  const addToCart = (pet: Pet) => {
    setCartItems(prevItems => {
      if (prevItems.find(item => item.id === pet.id)) {
        return prevItems; // Prevent duplicates
      }
      return [...prevItems, pet];
    });
  };

  const removeFromCart = (petId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== petId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
