import React, { useState } from 'react';
import { Pet } from '../types';

interface AdminPanelProps {
  isOpen: boolean;
  onAddPet: (petData: Omit<Pet, 'id' | 'description'>) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ isOpen, onAddPet }) => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [type, setType] = useState<'Dog' | 'Cat' | 'Bird' | 'Fish'>('Dog');
  const [price, setPrice] = useState('');
  const [imagePreview, setImagePreview] = useState<string>('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !breed || !price || !imagePreview) {
      alert('Please fill all fields and upload an image.');
      return;
    }
    onAddPet({
      name,
      breed,
      type,
      price: Number(price),
      imageUrl: imagePreview,
    });
    // Reset form
    setName('');
    setBreed('');
    setType('Dog');
    setPrice('');
    setImagePreview('');
    const fileInput = document.getElementById('pet-image-upload') as HTMLInputElement;
    if(fileInput) fileInput.value = '';
  };

  if (!isOpen) return null;

  return (
    <div className="bg-gray-100/80 py-8 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Admin: Add New Pet</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 items-start">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col sm:col-span-2">
                <label htmlFor="pet-name" className="text-sm font-medium text-gray-600 mb-1">Name</label>
                <input
                  id="pet-name"
                  type="text"
                  placeholder="e.g., Buddy"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  required
                />
              </div>
               <div className="flex flex-col">
                 <label htmlFor="pet-breed" className="text-sm font-medium text-gray-600 mb-1">Breed</label>
                <input
                  id="pet-breed"
                  type="text"
                  placeholder="e.g., Golden Retriever"
                  value={breed}
                  onChange={(e) => setBreed(e.target.value)}
                  className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="pet-type" className="text-sm font-medium text-gray-600 mb-1">Type</label>
                <select
                  id="pet-type"
                  value={type}
                  onChange={(e) => setType(e.target.value as any)}
                  className="p-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-brand-primary focus:border-transparent h-[42px]"
                >
                  <option value="Dog">Dog</option>
                  <option value="Cat">Cat</option>
                  <option value="Bird">Bird</option>
                  <option value="Fish">Fish</option>
                </select>
              </div>
              <div className="flex flex-col sm:col-span-2">
                 <label htmlFor="pet-price" className="text-sm font-medium text-gray-600 mb-1">Price ($)</label>
                <input
                  id="pet-price"
                  type="number"
                  placeholder="e.g., 550"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600 mb-1">Pet Image</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  {imagePreview ? (
                     <img src={imagePreview} alt="Pet preview" className="mx-auto h-24 w-24 object-cover rounded-md"/>
                  ) : (
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  <div className="flex text-sm text-gray-600 justify-center">
                    <label htmlFor="pet-image-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-brand-primary hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-brand-primary">
                      <span>Upload a file</span>
                      <input id="pet-image-upload" name="pet-image-upload" type="file" className="sr-only" onChange={handleImageChange} accept="image/*" />
                    </label>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2 flex justify-end">
              <button
                type="submit"
                className="bg-brand-primary text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-colors"
              >
                Add Pet
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;