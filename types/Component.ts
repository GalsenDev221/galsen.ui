export interface Seo {
  title: string;
  description: string;
}

export interface Component {
  title: string;
  dark: boolean;
}

export interface GalsenUiComponentGroup {
  title: string;
  emoji: string;
  container: string;
  wrapper: string;
  seo: Seo;
  count: number;
  components: Component[];
  slug: string;
}

export interface NavigationItem {
  title: string;
  slug: string;
  emoji: string;
  count: number;
}

export type ViewportSize = 'mobile' | 'tablet' | 'desktop' | 'full';

export interface ViewportConfig {
  label: string;
  width: string;
  icon: string;
}

export type DarkModeState = 'light' | 'dark';
