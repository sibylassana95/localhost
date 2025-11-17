import { Grid2x2Plus, RotateCcw } from 'lucide-react';
import { SortableItem } from './dnd/SortableItem';
import { SortableList } from './dnd/SortableList';

import type { LocalSite } from '../types';
import React from 'react';

interface LocalSitesProps {
  sites: LocalSite[];
  setSites: (sites: LocalSite[]) => void;
  onAddSiteClick: () => void;
  onRemoveSite: (siteName: string) => void;
  onRestoreDefaults: () => void;
}

const SiteLink: React.FC<{
  site: LocalSite;
  onRemove: (siteName: string) => void;
}> = ({ site, onRemove }) => (
  <a
    href={`http://localhost/${site.path}`}
    target="_blank"
    rel="noopener noreferrer"
    className={`card text-white shadow-xl transform transition-transform hover:scale-105 group ${site.color}`}
  >
    <div className="card-body p-4 flex-row items-center justify-between">
      <div>
        <h3 className="card-title text-lg font-bold">{site.name}</h3>
        <p className="text-xs opacity-80">{site.description}</p>
        <p className="text-xs opacity-60">/{site.path}</p>
      </div>
      <button
        className="btn btn-circle btn-xs btn-ghost opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={(e) => {
          e.preventDefault();
          onRemove(site.name);
        }}
        aria-label={`Remove site ${site.name}`}
      >
        ✕
      </button>
    </div>
  </a>
);

const LocalSites: React.FC<LocalSitesProps> = ({
  sites,
  setSites,
  onAddSiteClick,
  onRemoveSite,
  onRestoreDefaults,
}) => {
  return (
    <section className="bg-base-100 p-6 rounded-box ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Local Sites</h2>
        <div className="flex gap-2">
          <div className="tooltip" data-tip="Restore default sites">
            <button className="btn btn-ghost btn-neutral btn-sm" onClick={onRestoreDefaults}>
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
          <div className="tooltip" data-tip="Add a new site">
            <button className="btn btn-primary btn-sm" onClick={onAddSiteClick}>
              <Grid2x2Plus className="w-4 h-4" /> Add
            </button>
          </div>
        </div>
      </div>
      <SortableList items={sites} onSortEnd={setSites} identifierKey="name">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sites.map((site) => (
            <SortableItem key={site.name} id={site.name}>
              <SiteLink site={site} onRemove={onRemoveSite} />
            </SortableItem>
          ))}
        </div>
      </SortableList>
    </section>
  );
};

export default LocalSites;