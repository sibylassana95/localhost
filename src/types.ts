export interface Port {
  number: number;
  description: string;
  color: string;
  isActive?: boolean;
}

export interface LocalSite {
  name: string;
  path: string;
  description: string;
  color: string;
}

export enum SearchEngine {
  Google = 'Google',
  DuckDuckGo = 'DuckDuckGo',
  Bing = 'Bing',
  Brave = 'Brave',
}

export interface SearchEngineOption {
  name: SearchEngine;
  url: string;
}

export interface DocumentationLink {
  name: string;
  url: string;
  description: string;
  color: string;
}
