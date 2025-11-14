import React, { useState } from 'react';
import type { DocumentationLink } from '../types';

interface AddDocLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (link: Omit<DocumentationLink, 'color'>) => void;
}

const AddDocLinkModal: React.FC<AddDocLinkModalProps> = ({ isOpen, onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !url || !description) {
      alert('Please fill all fields.');
      return;
    }
    onAdd({ name, url, description });
    setName('');
    setUrl('');
    setDescription('');
  };

  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Add New Documentation Link</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="e.g., React Docs"
              className="input input-bordered"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">URL</span>
            </label>
            <input
              type="url"
              placeholder="https://react.dev"
              className="input input-bordered"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              placeholder="Official React documentation"
              className="input input-bordered"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="modal-action">
            <button type="button" className="btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDocLinkModal;
