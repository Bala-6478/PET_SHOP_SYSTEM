
import React from 'react';

const ShieldCheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a12.02 12.02 0 009 2.944a12.02 12.02 0 009-2.944a12.02 12.02 0 00-2.382-9.049z" />
    </svg>
);

const TruckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8l2-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h2a1 1 0 001-1V7a1 1 0 00-1-1h-2" />
    </svg>
);

const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
);

const TrustBadges: React.FC = () => {
  return (
    <div className="bg-orange-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <ShieldCheckIcon />
            <h3 className="mt-2 text-lg font-semibold text-brand-dark">Quality Assurance</h3>
            <p className="text-gray-600">Every pet is healthy, happy, and ready for a new home.</p>
          </div>
          <div className="flex flex-col items-center">
            <TruckIcon />
            <h3 className="mt-2 text-lg font-semibold text-brand-dark">Safe Delivery</h3>
            <p className="text-gray-600">We ensure a safe and comfortable journey for your new friend.</p>
          </div>
          <div className="flex flex-col items-center">
            <HeartIcon />
            <h3 className="mt-2 text-lg font-semibold text-brand-dark">Lifetime Support</h3>
            <p className="text-gray-600">Our team is always here to help you with your pet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
