import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { WHATSAPP_NUMBER } from '../constants';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import CheckoutForm from './CheckoutForm';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CustomerDetails {
    name: string;
    mobile: string;
    location: string;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [view, setView] = useState<'cart' | 'checkout'>('cart');
  
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleClose = () => {
    setView('cart'); // Reset view when closing
    onClose();
  };

  const handleConfirmOrder = (details: CustomerDetails) => {
    const petList = cartItems
      .map(item => `- ${item.name} (${item.type}): $${item.price}`)
      .join('\n');

    const message = `
Hello PawShop! I'd like to place an order.

*Pets:*
${petList}

*Total: $${totalPrice}*

*My Details:*
Name: ${details.name}
Mobile: ${details.mobile}
Location: ${details.location}
    `.trim();
      
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Cleanup after order is placed
    clearCart();
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={handleClose}>
      <div 
        className="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-2xl font-bold">
            {view === 'cart' ? 'Your Cart' : 'Checkout Details'}
          </h2>
          <button onClick={handleClose} className="text-2xl">&times;</button>
        </div>

        {view === 'cart' ? (
          <>
            <div className="flex-grow p-5 overflow-y-auto">
              {cartItems.length === 0 ? (
                <p className="text-center text-gray-500 mt-10">Your cart is empty.</p>
              ) : (
                <ul className="space-y-4">
                  {cartItems.map(item => (
                    <li key={item.id} className="flex items-center gap-4">
                      <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-lg"/>
                      <div className="flex-grow">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-gray-500 text-sm">${item.price}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 font-bold text-xl">&times;</button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-5 border-t">
                <div className="flex justify-between font-bold text-xl mb-4">
                  <span>Total:</span>
                  <span>${totalPrice}</span>
                </div>
                <button
                  onClick={() => setView('checkout')}
                  className="w-full bg-[#25D366] text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-opacity-90 transition-colors"
                >
                  <WhatsAppIcon className="w-6 h-6" />
                  Checkout via WhatsApp
                </button>
              </div>
            )}
          </>
        ) : (
          <CheckoutForm 
            onConfirmOrder={handleConfirmOrder} 
            onBack={() => setView('cart')} 
          />
        )}
      </div>
    </div>
  );
};

export default Cart;