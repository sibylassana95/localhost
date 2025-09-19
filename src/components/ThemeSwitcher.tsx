import { ChevronDown, SwatchBook } from 'lucide-react';
import { useEffect, useState } from 'react';

import { DAISYUI_THEMES } from '../constants';
import React from 'react';

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dracula';
    }
    return 'dracula';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return (
    <div title="Change Theme" className="dropdown dropdown-end">
      <div className="tooltip" data-tip="Change Theme">
        <div
          role="button"
          tabIndex={0}
          className="btn btn-ghost opacity-70 hover:opacity-100 gap-1"
        >
          <SwatchBook className="h-6 w-6" />
          <ChevronDown className="h-6 w-6" />
        </div>
      </div>
      <div
        tabIndex={0}
        className="dropdown-content bg-base-200 text-base-content rounded-box top-px h-[70vh] max-h-96 w-56 overflow-y-auto border border-white/5 shadow-2xl mt-16"
      >
        <div className="grid grid-cols-1 gap-3 p-3">
          {DAISYUI_THEMES.map((themeName) => (
            <button
              key={themeName}
              className="outline-base-content overflow-hidden rounded-lg text-left"
              onClick={() => {
                setTheme(themeName);
              }}
              aria-label={`Set theme to ${themeName}`}
            >
              <div
                data-theme={themeName}
                className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`h-3 w-3 shrink-0 ${
                        theme === themeName ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                    </svg>
                    <div className="flex-grow text-sm font-bold">{themeName}</div>
                    <div
                      className="flex h-full flex-shrink-0 flex-wrap gap-1"
                      data-svelte-h="svelte-1l2kuzr"
                    >
                      <div className="bg-primary w-2 rounded"></div>
                      <div className="bg-secondary w-2 rounded"></div>
                      <div className="bg-accent w-2 rounded"></div>
                      <div className="bg-neutral w-2 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
