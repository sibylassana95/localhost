
export interface Port {
  number: number;
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
