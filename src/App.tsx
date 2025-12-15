import {
  DOC_LINK_COLORS,
  DOC_LINKS_STORAGE_KEY,
  INITIAL_DOC_LINKS,
  INITIAL_FAVORITE_PORTS,
  INITIAL_LOCAL_SITES,
  LOCAL_SITES_STORAGE_KEY,
  LOCAL_STORAGE_KEY,
  PORT_COLORS,
  SITE_COLORS,
} from './constants';
import type { DocumentationLink, LocalSite, Port } from './types';
import React, { useCallback, useMemo, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { FaGithub } from 'react-icons/fa';

import AddDocLinkModal from './components/AddDocLinkModal';
import AddPortModal from './components/AddPortModal';
import AddSiteModal from './components/AddSiteModal';
import Clock from './components/Clock';
import CustomPortSection from './components/CustomPortSection';
import FavoritePorts from './components/FavoritePorts';
import DocumentationLinks from './components/DocumentationLinks';
import LocalSites from './components/LocalSites';
import SearchSection from './components/SearchSection';
import ThemeSwitcher from './components/ThemeSwitcher';
import { useLocalStorageItems } from './hooks/useLocalStorageItems';
import { usePortStatus } from './hooks/usePortStatus';

const App: React.FC = () => {
  const {
    items: favoritePorts,
    setItems: setFavoritePorts,
    addItem: addPort,
    removeItem: removePort,
    restoreDefaults: restoreDefaultPorts,
  } = useLocalStorageItems<Port>(LOCAL_STORAGE_KEY, INITIAL_FAVORITE_PORTS, 'number');

  const {
    items: localSites,
    setItems: setLocalSites,
    addItem: addSite,
    removeItem: removeSite,
    restoreDefaults: restoreDefaultSites,
  } = useLocalStorageItems<LocalSite>(LOCAL_SITES_STORAGE_KEY, INITIAL_LOCAL_SITES, 'name');

  const {
    items: docLinks,
    addItem: addDocLink,
    removeItem: removeDocLink,
    restoreDefaults: restoreDefaultDocLinks,
    setItems: setDocLinks,
  } = useLocalStorageItems<DocumentationLink>(DOC_LINKS_STORAGE_KEY, INITIAL_DOC_LINKS, 'name');

  const [isPortModalOpen, setIsPortModalOpen] = useState(false);
  const [isSiteModalOpen, setIsSiteModalOpen] = useState(false);
  const [isDocLinkModalOpen, setIsDocLinkModalOpen] = useState(false);

  const portNumbers = useMemo(() => favoritePorts.map((port) => port.number), [favoritePorts]);

  const { portStatus } = usePortStatus(portNumbers, {
    interval: 30000,
    timeout: 3000,
    enabled: portNumbers.length > 0,
  });

  const portsWithStatus = useMemo(
    () =>
      favoritePorts.map((port) => ({
        ...port,
        isActive: portStatus[port.number],
      })),
    [favoritePorts, portStatus]
  );

  const handleAddPort = useCallback(
    (newPort: Omit<Port, 'color'>) => {
      if (addPort(newPort, PORT_COLORS)) {
        setIsPortModalOpen(false);
      }
    },
    [addPort]
  );

  const handleAddSite = useCallback(
    (newSite: Omit<LocalSite, 'color'>) => {
      if (addSite(newSite, SITE_COLORS)) {
        setIsSiteModalOpen(false);
      }
    },
    [addSite]
  );

  const handleAddDocLink = useCallback(
    (newLink: Omit<DocumentationLink, 'color'>) => {
      if (addDocLink(newLink, DOC_LINK_COLORS)) {
        setIsDocLinkModalOpen(false);
      }
    },
    [addDocLink]
  );

  return (
    <div className="min-h-screen bg-base-200 text-base-content font-sans p-4 sm:p-6 md:p-8">
      <Toaster position="bottom-center" />
      <div className="container mx-auto max-w-4xl">
        <div className="relative mb-8">
          <div className="absolute top-0 right-0 z-10">
            <ThemeSwitcher />
          </div>
          <header className="text-center">
            <Clock />
            <h1 className="text-5xl font-black mt-4 text-primary">localHost</h1>
            <p className="text-xl mt-2 text-base-content/70">Welcome Young Developer!</p>
          </header>
        </div>

        <main className="space-y-12">
          <SearchSection />
          <FavoritePorts
            ports={portsWithStatus}
            setPorts={setFavoritePorts}
            onAddPortClick={() => setIsPortModalOpen(true)}
            onRemovePort={removePort}
            onRestoreDefaults={restoreDefaultPorts}
          />
          <LocalSites
            sites={localSites}
            setSites={setLocalSites}
            onAddSiteClick={() => setIsSiteModalOpen(true)}
            onRemoveSite={removeSite}
            onRestoreDefaults={restoreDefaultSites}
          />
          <DocumentationLinks
            links={docLinks}
            setLinks={setDocLinks}
            onAddLinkClick={() => setIsDocLinkModalOpen(true)}
            onRemoveLink={removeDocLink}
            onRestoreDefaults={restoreDefaultDocLinks}
          />
          <CustomPortSection />
        </main>

        <footer className="text-center mt-12">
          <p className="text-base-content/50">Happy coding!</p>
          <a
            href="https://github.com/Ygryan360/localhost.git"
            rel="noopener noreferrer"
            title="Star on GitHub"
          >
            <FaGithub className="w-6 h-6 mx-auto mt-2 text-base-content/50 hover:text-base-content transition-colors" />
          </a>
        </footer>
      </div>

      <AddPortModal
        isOpen={isPortModalOpen}
        onClose={() => setIsPortModalOpen(false)}
        onAdd={handleAddPort}
      />
      <AddSiteModal
        isOpen={isSiteModalOpen}
        onClose={() => setIsSiteModalOpen(false)}
        onAdd={handleAddSite}
      />
      <AddDocLinkModal
        isOpen={isDocLinkModalOpen}
        onClose={() => setIsDocLinkModalOpen(false)}
        onAdd={handleAddDocLink}
      />
    </div>
  );
};

export default App;
