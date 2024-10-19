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
