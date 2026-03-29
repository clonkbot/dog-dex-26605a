import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DogCard } from './components/DogCard';
import { DogModal } from './components/DogModal';
import { SearchBar } from './components/SearchBar';
import { FilterTabs } from './components/FilterTabs';
import { Dog, dogBreeds } from './data/dogs';
import './styles.css';

function App() {
  const [selectedDog, setSelectedDog] = useState<Dog | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [discoveredDogs, setDiscoveredDogs] = useState<Set<number>>(new Set([1, 2, 3]));

  const filteredDogs = useMemo(() => {
    return dogBreeds.filter((dog) => {
      const matchesSearch = dog.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dog.origin.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = activeFilter === 'all' || dog.category === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  const handleDiscover = (dogId: number) => {
    setDiscoveredDogs((prev) => new Set([...prev, dogId]));
  };

  return (
    <div className="min-h-screen bg-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-paw-pattern"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 pt-6 pb-4 md:pt-10 md:pb-6 px-4 md:px-8">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "backOut" }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 md:gap-4">
              <motion.div
                className="w-12 h-12 md:w-16 md:h-16 bg-amber-500 rounded-2xl flex items-center justify-center shadow-chunky"
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-2xl md:text-3xl">🐕</span>
              </motion.div>
              <div>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-brown-900 tracking-tight">
                  DogDex
                </h1>
                <p className="text-brown-600 font-body text-xs md:text-sm">
                  Discover every breed in the world
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-amber-100 px-3 py-2 md:px-4 md:py-2 rounded-xl border-2 border-amber-200">
              <span className="text-amber-600 font-bold text-sm md:text-base">{discoveredDogs.size}</span>
              <span className="text-brown-600 text-xs md:text-sm">/</span>
              <span className="text-brown-400 text-xs md:text-sm">{dogBreeds.length} discovered</span>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Search and Filters */}
      <section className="relative z-10 px-4 md:px-8 mb-6 md:mb-8">
        <div className="max-w-6xl mx-auto space-y-4">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <FilterTabs active={activeFilter} onChange={setActiveFilter} />
        </div>
      </section>

      {/* Dog Grid */}
      <main className="relative z-10 px-4 md:px-8 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredDogs.map((dog, index) => (
                <motion.div
                  key={dog.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                    layout: { duration: 0.3 }
                  }}
                >
                  <DogCard
                    dog={dog}
                    isDiscovered={discoveredDogs.has(dog.id)}
                    onSelect={() => setSelectedDog(dog)}
                    onDiscover={() => handleDiscover(dog.id)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredDogs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 md:py-20"
            >
              <span className="text-5xl md:text-6xl mb-4 block">🔍</span>
              <p className="text-brown-600 font-body text-base md:text-lg">No dogs found matching your search</p>
              <p className="text-brown-400 font-body text-sm mt-2">Try a different breed or category</p>
            </motion.div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-10 py-3 md:py-4 bg-gradient-to-t from-cream via-cream to-transparent">
        <p className="text-center text-brown-400 text-xs font-body">
          Requested by @web-user · Built by @clonkbot
        </p>
      </footer>

      {/* Modal */}
      <AnimatePresence>
        {selectedDog && (
          <DogModal
            dog={selectedDog}
            onClose={() => setSelectedDog(null)}
            isDiscovered={discoveredDogs.has(selectedDog.id)}
            onDiscover={() => handleDiscover(selectedDog.id)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
