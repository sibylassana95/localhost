import React from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from '@dnd-kit/sortable';

interface SortableListProps<T> {
  items: T[];
  onSortEnd: (items: T[]) => void;
  children: React.ReactNode;
  identifierKey: keyof T;
}

export function SortableList<T extends { [key: string]: any }>({
  items,
  onSortEnd,
  children,
  identifierKey,
}: SortableListProps<T>) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item[identifierKey] === active.id);
      const newIndex = items.findIndex((item) => item[identifierKey] === over.id);
      onSortEnd(arrayMove(items, oldIndex, newIndex));
    }
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items.map((item) => item[identifierKey])} strategy={rectSortingStrategy}>
        {children}
      </SortableContext>
    </DndContext>
  );
}
