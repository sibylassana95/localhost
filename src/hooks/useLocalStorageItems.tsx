import { useCallback, useEffect, useState } from 'react';

import toast from 'react-hot-toast';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Item = Record<string, any> & { color: string };

export function useLocalStorageItems<T extends Item>(
  storageKey: string,
  initialItems: T[],
  identifierKey: keyof Omit<T, 'color'>
) {
  const [items, setItems] = useState<T[]>(() => {
    try {
      const storedItems = localStorage.getItem(storageKey);
      return storedItems ? JSON.parse(storedItems) : initialItems;
    } catch (error) {
      console.error(`Failed to load items from local storage for key "${storageKey}"`, error);
      toast.error('Failed to load data from local storage.');
      return initialItems;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(items));
    } catch (error) {
      console.error(`Failed to save items to local storage for key "${storageKey}"`, error);
      toast.error('Failed to save data to local storage.');
    }
  }, [items, storageKey]);

  const addItem = useCallback(
    (newItem: Omit<T, 'color'>, colors: string[]): boolean => {
      const identifierValue = newItem[identifierKey];
      if (items.some((item) => item[identifierKey] === identifierValue)) {
        toast.error(
          `Item with ${String(identifierKey)} "${String(identifierValue)}" already exists.`
        );
        return false;
      }

      const lastColor = items.length > 0 ? items[items.length - 1].color : undefined;
      const availableColors = colors.filter((c) => c !== lastColor);
      const randomColor = availableColors[Math.floor(Math.random() * availableColors.length)];

      setItems((prevItems) => {
        const updatedItems = [...prevItems, { ...newItem, color: randomColor } as T];
        toast.success('Item added successfully!');
        return updatedItems;
      });
      return true;
    },
    [items, identifierKey]
  );

  const removeItem = useCallback(
    (identifierValue: T[keyof Omit<T, 'color'>]) => {
      setItems((prevItems) => {
        const updatedItems = prevItems.filter((item) => item[identifierKey] !== identifierValue);
        toast.success('Item removed successfully!');
        return updatedItems;
      });
    },
    [identifierKey]
  );

  const restoreDefaults = useCallback(() => {
    toast(
      (t) => (
        <span>
          Are you sure you want to restore defaults?
          <div className="flex gap-2 mt-2">
            <button
              className="btn btn-sm btn-primary"
              onClick={() => {
                setItems(initialItems);
                toast.dismiss(t.id);
                toast.success('Restored default items!');
              }}
            >
              Yes
            </button>
            <button className="btn btn-sm" onClick={() => toast.dismiss(t.id)}>
              No
            </button>
          </div>
        </span>
      ),
      {
        duration: 6000,
      }
    );
  }, [initialItems, setItems]);

  return { items, setItems, addItem, removeItem, restoreDefaults };
}
