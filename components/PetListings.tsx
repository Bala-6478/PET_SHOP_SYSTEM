import React from 'react';
import PetCard from './PetCard';
import { Pet } from '../types';

interface PetListingsProps {
  pets: Pet[];
  removePet: (petId: number) => void;
  isAdminMode: boolean;
  onPetClick: (pet: Pet) => void;
}

const PetListings: React.FC<PetListingsProps> = ({ pets, removePet, isAdminMode, onPetClick }) => {
  if (pets.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-xl text-gray-500">No pets match the current filter.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {pets.map((pet) => (
        <PetCard 
          key={pet.id} 
          pet={pet} 
          removePet={removePet} 
          isAdminMode={isAdminMode}
          onPetClick={onPetClick}
        />
      ))}
    </div>
  );
};

export default PetListings;