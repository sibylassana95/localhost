import { INITIAL_FAVORITE_PORTS, LOCAL_STORAGE_KEY } from './constants';
import React, { useCallback, useEffect, useState } from 'react';

import AddPortModal from './components/AddPortModal';
import Clock from './components/Clock';
import CustomPortSection from './components/CustomPortSection';
import FavoritePorts from './components/FavoritePorts';
import type { Port } from './types';
import SearchSection from './components/SearchSection';
import ThemeSwitcher from './components/ThemeSwitcher';

const App: React.FC = () => {
  const [favoritePorts, setFavoritePorts] = useState<Port[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    try {
      const storedPorts = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (storedPorts) {
        setFavoritePorts(JSON.parse(storedPorts));
      } else {
        setFavoritePorts(INITIAL_FAVORITE_PORTS);
      }
    } catch (error) {
      console.error('Failed to load ports from local storage', error);
      setFavoritePorts(INITIAL_FAVORITE_PORTS);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favoritePorts));
    } catch (error) {
      console.error('Failed to save ports to local storage', error);
    }
  }, [favoritePorts]);

  const handleAddPort = useCallback(
    (newPort: Omit<Port, 'color'>) => {
      if (favoritePorts.some((p) => p.number === newPort.number)) {
        alert(`Port ${newPort.number} already exists in your favorites.`);
        return;
      }
      const colors = [
        'bg-sky-500',
        'bg-red-500',
        'bg-purple-500',
        'bg-red-700',
        'bg-green-500',
        'bg-gray-500',
        'bg-blue-600',
        'bg-pink-500',
        'bg-indigo-500',
        'bg-teal-500',
      ];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      setFavoritePorts((prevPorts) => [...prevPorts, { ...newPort, color: randomColor }]);
      setIsModalOpen(false);
    },
    [favoritePorts]
  );

  const handleRemovePort = useCallback((portNumber: number) => {
    setFavoritePorts((prevPorts) => prevPorts.filter((p) => p.number !== portNumber));
  }, []);

  const handleRestoreDefaults = useCallback(() => {
    if (
      confirm(
        'Are you sure you want to restore default ports? This will remove all your custom ports.'
      )
    ) {
      setFavoritePorts(INITIAL_FAVORITE_PORTS);
    }
  }, []);

  return (
    <div className="min-h-screen bg-base-200 text-base-content font-sans p-4 sm:p-6 md:p-8">
      <div className="container mx-auto max-w-4xl">
        <div className="relative mb-8">
          <div className="absolute top-0 right-0 z-10">
            <ThemeSwitcher />
          </div>
          <header className="text-center">
            <Clock />
            <h1 className="text-5xl font-bold mt-4 text-primary font-mono">localHost</h1>
            <p className="text-xl mt-2 text-base-content/70">Welcome Young Developer!</p>
          </header>
        </div>

        <main className="space-y-12">
          <SearchSection />
          <FavoritePorts
            ports={favoritePorts}
            onAddPortClick={() => setIsModalOpen(true)}
            onRemovePort={handleRemovePort}
            onRestoreDefaults={handleRestoreDefaults}
          />
          <CustomPortSection />
        </main>

        <footer className="text-center mt-12">
          <p className="text-base-content/50">Happy coding!</p>
        </footer>
      </div>

      <AddPortModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddPort}
      />
    </div>
  );
};

export default App;
