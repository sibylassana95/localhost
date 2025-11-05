import { Grid2x2Plus, RotateCcw } from 'lucide-react';

import type { Port } from '../types';
import React from 'react';

interface FavoritePortsProps {
  ports: Port[];
  onAddPortClick: () => void;
  onRemovePort: (portNumber: number) => void;
  onRestoreDefaults: () => void;
}

const PortLink: React.FC<{ port: Port; onRemove: (portNumber: number) => void }> = ({
  port,
  onRemove,
}) => (
  <a
    href={`http://localhost:${port.number}`}
    target="_blank"
    rel="noopener noreferrer"
    className={`card text-white shadow-xl transform transition-transform hover:scale-105 group relative ${
      port.color
    } ${port.isActive ? 'tooltip tooltip-success' : ''}`}
    data-tip={port.isActive ? 'This port is active' : ''}
  >
    {port.isActive !== undefined && port.isActive && (
      <span
        title="This port is active"
        className="status status-success status-lg absolute top-0 right-0"
      ></span>
    )}
    <div className="card-body p-4 flex-row items-center justify-between">
      <div>
        <h3 className="card-title text-2xl font-bold">{port.number}</h3>
        <p className="text-sm opacity-80">{port.description}</p>
      </div>
      <button
        className="btn btn-circle btn-xs btn-ghost opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={(e) => {
          e.preventDefault();
          onRemove(port.number);
        }}
        aria-label={`Remove port ${port.number}`}
      >
        ✕
      </button>
    </div>
  </a>
);

const FavoritePorts: React.FC<FavoritePortsProps> = ({
  ports,
  onAddPortClick,
  onRemovePort,
  onRestoreDefaults,
}) => {
  return (
    <section className="bg-base-100 p-6 rounded-box ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Favorite Ports</h2>
        <div className="flex gap-2">
          <div className="tooltip" data-tip="Restore default ports">
            {' '}
            <button className="btn btn-ghost btn-neutral btn-sm" onClick={onRestoreDefaults}>
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          <div className="tooltip" data-tip="Add a new port">
            <button className="btn btn-primary btn-sm" onClick={onAddPortClick}>
              <Grid2x2Plus className="w-4 h-4" /> Add
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {ports.map((port) => (
          <PortLink key={port.number} port={port} onRemove={onRemovePort} />
        ))}
      </div>
    </section>
  );
};

export default FavoritePorts;
