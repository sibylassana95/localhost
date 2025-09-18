import type { Port, SearchEngineOption } from './types';

import { SearchEngine } from './types';

export const INITIAL_FAVORITE_PORTS: Port[] = [
  { number: 3000, description: 'Next.js / React', color: 'bg-sky-500' },
  { number: 8000, description: 'Laravel / Django', color: 'bg-red-500' },
  { number: 5173, description: 'Vite', color: 'bg-purple-500' },
  { number: 4200, description: 'Angular', color: 'bg-red-700' },
  { number: 8080, description: 'Vue.js / Webpack', color: 'bg-green-500' },
  { number: 5000, description: 'Flask / Express', color: 'bg-gray-500' },
  { number: 9000, description: 'Play Framework', color: 'bg-blue-600' },
  { number: 1313, description: 'Hugo', color: 'bg-pink-500' },
];

export const SEARCH_ENGINES: SearchEngineOption[] = [
  { name: SearchEngine.Google, url: 'https://www.google.com/search?q=' },
  { name: SearchEngine.DuckDuckGo, url: 'https://duckduckgo.com/?q=' },
  { name: SearchEngine.Bing, url: 'https://www.bing.com/search?q=' },
  { name: SearchEngine.Brave, url: 'https://search.brave.com/search?q=' },
];

export const LOCAL_STORAGE_KEY = 'favoritePorts';

export const DAISYUI_THEMES = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
  'dim',
  'nord',
  'sunset',
];
