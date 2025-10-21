import React, { useState } from 'react';

interface CheckoutFormProps {
  onConfirmOrder: (details: { name: string; mobile: string; location: string; }) => void;
  onBack: () => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onConfirmOrder, onBack }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !mobile.trim() || !location.trim()) {
      setError('Please fill out all fields.');
      return;
    }
    setError('');
    onConfirmOrder({ name, mobile, location });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col h-full">
      <div className="p-5 overflow-y-auto flex-grow">
        <p className="text-gray-600 mb-6">Please provide your details for the order.</p>
        <div className="space-y-4">
          <div>
            <label htmlFor="customer-name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="customer-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="customer-mobile" className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              id="customer-mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              placeholder="Enter your mobile number"
              required
            />
          </div>
          <div>
            <label htmlFor="customer-location" className="block text-sm font-medium text-gray-700 mb-1">
              Current Location
            </label>
            <input
              type="text"
              id="customer-location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              placeholder="e.g., City, State"
              required
            />
          </div>
        </div>
        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
      </div>
      <div className="p-5 border-t mt-auto">
        <button
          type="submit"
          className="w-full bg-brand-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-opacity-90 transition-colors mb-2"
        >
          Confirm Order
        </button>
        <button
          type="button"
          onClick={onBack}
          className="w-full bg-gray-200 text-gray-700 font-bold py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Back to Cart
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
