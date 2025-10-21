import React, { useState, useRef, RefObject, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PetListings from './components/PetListings';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import TrustBadges from './components/TrustBadges';
import AdminPanel from './components/AdminPanel';
import PasswordPrompt from './components/PasswordPrompt';
import PetFilter from './components/PetFilter';
import SearchBar from './components/SearchBar';
import { Pet } from './types';
import { PETS_DATA } from './constants';
import PetDetailModal from './components/PetDetailModal';

const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isPasswordPromptOpen, setIsPasswordPromptOpen] = useState(false);
  const [pets, setPets] = useState<Pet[]>(PETS_DATA);
  const [activeFilter, setActiveFilter] = useState<'All' | Pet['type']>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);

  const homeRef = useRef<HTMLDivElement>(null);
  const petsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addPet = (petData: Omit<Pet, 'id' | 'description'>) => {
    const newPet: Pet = {
      ...petData,
      id: Date.now(),
      description: 'A newly added friend, full of love and ready for a new home! Contact us for more details about their personality and needs.',
    };
    setPets(currentPets => [newPet, ...currentPets]);
  };

  const removePet = (petId: number) => {
    setPets(currentPets => currentPets.filter(pet => pet.id !== petId));
  };
  
  const handleAdminClick = () => {
    if (isAdminMode) {
      setIsAdminMode(false);
    } else {
      setIsPasswordPromptOpen(true);
    }
  };
  
  const handlePasswordSuccess = () => {
    setIsAdminMode(true);
    setIsPasswordPromptOpen(false);
  };

  const handlePetCardClick = (pet: Pet) => {
    setSelectedPet(pet);
  };

  const handleCloseDetailModal = () => {
    setSelectedPet(null);
  };
  
  const filteredPets = useMemo(() => {
    let petsToFilter = pets;

    // Apply type filter
    if (activeFilter !== 'All') {
      petsToFilter = petsToFilter.filter(pet => pet.type === activeFilter);
    }

    // Apply search query filter
    if (searchQuery.trim() !== '') {
      petsToFilter = petsToFilter.filter(pet => 
        pet.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return petsToFilter;
  }, [pets, activeFilter, searchQuery]);

  return (
    <CartProvider>
      <div className="bg-orange-50/50 text-brand-dark font-sans">
        <Header 
          onHomeClick={() => scrollToSection(homeRef)} 
          onPetsClick={() => scrollToSection(petsRef)} 
          onContactClick={() => scrollToSection(contactRef)} 
          onCartClick={() => setIsCartOpen(true)}
          onAdminClick={handleAdminClick}
          isAdminMode={isAdminMode}
        />
        <main>
          <div ref={homeRef}>
            <Hero onShopNowClick={() => scrollToSection(petsRef)} />
          </div>
          <TrustBadges />
          <AdminPanel isOpen={isAdminMode} onAddPet={addPet} />
          <div ref={petsRef}>
            <section className="py-16 sm:py-24 bg-white">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark">Meet Our Friends</h2>
                  <p className="mt-4 text-lg text-gray-600">Ready to bring joy into your home!</p>
                </div>
                
                <div className="mb-12 space-y-6">
                  <PetFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />
                  <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
                </div>
                
                <PetListings 
                  pets={filteredPets} 
                  removePet={removePet} 
                  isAdminMode={isAdminMode}
                  onPetClick={handlePetCardClick}
                />
              </div>
            </section>
          </div>
          <div ref={contactRef}>
            <Contact />
          </div>
        </main>
        <Footer />
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <PasswordPrompt 
          isOpen={isPasswordPromptOpen}
          onClose={() => setIsPasswordPromptOpen(false)}
          onSuccess={handlePasswordSuccess}
        />
        <PetDetailModal 
          pet={selectedPet}
          isOpen={!!selectedPet}
          onClose={handleCloseDetailModal}
        />
      </div>
    </CartProvider>
  );
};

export default App;