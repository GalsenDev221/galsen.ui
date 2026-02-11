import path from "path";
import { promises as fs } from "fs";
import { serialize } from "next-mdx-remote/serialize";
import { GalsenUiComponentGroup, NavigationItem } from "@/types/Component";

export async function getAllComponents(): Promise<GalsenUiComponentGroup[]> {
  const galsenUiComponentsPath = path.join(
    process.cwd(),
    "public",
    "data",
    "components"
  );

  const galsenUiComponentsFiles = await fs.readdir(galsenUiComponentsPath);

  const components = await Promise.all(
    galsenUiComponentsFiles.map(async (file) => {
      const galsenUiComponentPath = path.join(galsenUiComponentsPath, file);

      try {
        const galsenUiComponentMdxContent = await fs.readFile(
          galsenUiComponentPath,
          "utf8"
        );
        const { frontmatter: galsenUiComponentSerializedContent } =
          await serialize<string, GalsenUiComponentGroup>(
            galsenUiComponentMdxContent,
            {
              parseFrontmatter: true,
            }
          );

        const galsenUiGroupComponentsCount = Object.values(
          galsenUiComponentSerializedContent.components
        ).length;

        return {
          ...galsenUiComponentSerializedContent,
          count: galsenUiGroupComponentsCount,
          slug: file.replace("galsen-ui-", "").replace(".mdx", ""),
        };
      } catch (error) {
        console.error(`Erreur lors de la lecture du fichier ${file}:`, error);
        return null;
      }
    })
  );

  return components.filter(Boolean) as GalsenUiComponentGroup[];
}

export function componentsToNavigationItems(
  components: GalsenUiComponentGroup[]
): NavigationItem[] {
  return components.map((component) => ({
    title: component.title,
    slug: component.slug,
    emoji: component.emoji,
    count: component.count,
  }));
}
