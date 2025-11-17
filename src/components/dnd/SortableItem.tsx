import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface SortableItemProps {
  children: React.ReactNode | ((isDragging: boolean) => React.ReactNode);
  id: string | number;
}

export const SortableItem: React.FC<SortableItemProps> = ({ children, id }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {typeof children === 'function' ? children(isDragging) : children}
    </div>
  );
};
