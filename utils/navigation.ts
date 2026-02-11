import { NavigationItem } from "@/types/Component";

export const COMPONENTS_ORDER = [
  "buttons",
  "inputs",
  "selects",
  "switchs",
  "cards",
  "forms",
  "tables",
  "navbars",
  "footers",
];

export function getComponentsNavigation(
  components: NavigationItem[]
): NavigationItem[] {
  return components.sort((a, b) => {
    const indexA = COMPONENTS_ORDER.indexOf(a.slug);
    const indexB = COMPONENTS_ORDER.indexOf(b.slug);
    return indexA - indexB;
  });
}

export function getPrevNextComponents(
  currentSlug: string,
  components: NavigationItem[]
): { prev: NavigationItem | null; next: NavigationItem | null } {
  const sortedComponents = getComponentsNavigation(components);
  const currentIndex = sortedComponents.findIndex(
    (c) => c.slug === currentSlug
  );

  return {
    prev: currentIndex > 0 ? sortedComponents[currentIndex - 1] : null,
    next:
      currentIndex < sortedComponents.length - 1
        ? sortedComponents[currentIndex + 1]
        : null,
  };
}
