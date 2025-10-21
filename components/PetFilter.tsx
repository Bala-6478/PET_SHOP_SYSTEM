import React from 'react';
import { Pet } from '../types';

type FilterType = 'All' | Pet['type'];
const FILTERS: FilterType[] = ['All', 'Dog', 'Cat', 'Bird', 'Fish'];

interface PetFilterProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const PetFilter: React.FC<PetFilterProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-4 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base font-semibold rounded-full transition-all duration-200 ${
            activeFilter === filter
              ? 'bg-brand-primary text-white shadow-md scale-105'
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default PetFilter;