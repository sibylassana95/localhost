import type { LocalSite, Port, SearchEngineOption, DocumentationLink } from './types';

import { SearchEngine } from './types';

export const PORT_COLORS = [
  'bg-sky-500',
  'bg-red-500',
  'bg-purple-500',
  'bg-red-700',
  'bg-green-500',
  'bg-gray-500',
  'bg-blue-600',
  'bg-pink-500',
  'bg-indigo-500',
  'bg-teal-500',
];

export const SITE_COLORS = [
  'bg-sky-500',
  'bg-red-500',
  'bg-purple-500',
  'bg-green-500',
  'bg-blue-600',
  'bg-orange-500',
  'bg-teal-500',
  'bg-indigo-500',
  'bg-pink-500',
  'bg-yellow-500',
];

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
export const LOCAL_SITES_STORAGE_KEY = 'localSites';
export const DOC_LINKS_STORAGE_KEY = 'documentationLinks';

export const DOC_LINK_COLORS = [
  'bg-emerald-500',
  'bg-rose-500',
  'bg-amber-500',
  'bg-cyan-500',
  'bg-lime-500',
  'bg-fuchsia-500',
  'bg-stone-500',
];

export const INITIAL_DOC_LINKS: DocumentationLink[] = [
  { name: 'React', url: 'https://react.dev', description: 'The library for web and native user interfaces', color: 'bg-sky-500' },
  { name: 'TypeScript', url: 'https://www.typescriptlang.org/docs/', description: 'JavaScript with syntax for types', color: 'bg-blue-600' },
  { name: 'Tailwind CSS', url: 'https://tailwindcss.com/docs', description: 'A utility-first CSS framework', color: 'bg-teal-500' },
  { name: 'daisyUI', url: 'https://daisyui.com', description: 'The most popular component library for Tailwind CSS', color: 'bg-green-500' },
];

export const INITIAL_LOCAL_SITES: LocalSite[] = [
  { name: 'phpMyAdmin', path: 'phpmyadmin', description: 'Database Admin', color: 'bg-orange-500' },
  { name: 'Dashboard', path: 'dashboard', description: 'XAMPP Dashboard', color: 'bg-blue-500' },
];

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
