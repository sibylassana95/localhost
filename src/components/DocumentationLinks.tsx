import React from 'react';
import { FaPlus } from 'react-icons/fa';
import type { DocumentationLink } from '../types';
import { SortableList } from './dnd/SortableList';
import { SortableItem } from './dnd/SortableItem';

interface DocumentationLinksProps {
  links: DocumentationLink[];
  setLinks: (links: DocumentationLink[]) => void;
  onAddLinkClick: () => void;
  onRemoveLink: (name: string) => void;
  onRestoreDefaults: () => void;
}

const DocLink: React.FC<{
  link: DocumentationLink;
  onRemove: (name: string) => void;
}> = ({ link, onRemove }) => (
  <a
    href={link.url}
    rel="noopener noreferrer"
    className={`card text-white shadow-xl transform transition-transform hover:scale-105 group ${link.color}`}
  >
    <div className="card-body p-4 flex-row items-center justify-between">
      <div className="gap-4">
        <h3 className="font-bold text-lg">{link.name}</h3>
        <p className="text-sm opacity-80">{link.description}</p>
      </div>
      <button
        className="btn btn-xs btn-circle absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={(e) => {
          e.preventDefault();
          onRemove(link.name);
        }}
      >
        &times;
      </button>
    </div>
  </a>
);

const DocumentationLinks: React.FC<DocumentationLinksProps> = ({
  links,
  setLinks,
  onAddLinkClick,
  onRemoveLink,
  onRestoreDefaults,
}) => {
  return (
    <section className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex justify-between items-center mb-4">
          <h2 className="card-title">Documentation Links</h2>
          <div className="flex gap-2">
            <button className="btn btn-primary btn-sm" onClick={onAddLinkClick}>
              <FaPlus /> Add Link
            </button>
            <button className="btn btn-sm" onClick={onRestoreDefaults}>
              Restore Defaults
            </button>
          </div>
        </div>
        <SortableList items={links} onSortEnd={setLinks} identifierKey="name">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {links.map((link) => (
              <SortableItem key={link.name} id={link.name}>
                <DocLink link={link} onRemove={onRemoveLink} />
              </SortableItem>
            ))}
          </div>
        </SortableList>
      </div>
    </section>
  );
};

export default DocumentationLinks;
