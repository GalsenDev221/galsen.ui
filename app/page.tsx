import path from "path";
import { promises as fs } from "fs";
import { serialize } from "next-mdx-remote/serialize";

import ComponentsGrid from "@/components/ComponentsGrid";
import { GalsenUiComponentGroup } from "@/types/Component";

async function getComponents() {
  const galsenUiComponentsPath = path.join(
    process.cwd(),
    "/src/data/components"
  );

  const galsenUiComponentsFiles = await fs.readdir(galsenUiComponentsPath);

  const components = await Promise.all(
    galsenUiComponentsFiles.map(async (file) => {
      const galsenUiComponentPath = path.join(galsenUiComponentsPath, file);

      const galsenUiComponentMdxContent = await fs.readFile(
        galsenUiComponentPath,
        "utf8"
      );
      const { frontmatter: galsenUiComponentSerializedContent } =
        await serialize<string, GalsenUiComponentGroup>(
          galsenUiComponentMdxContent,
          { parseFrontmatter: true }
        );

      const galsenUiGroupComponentsCount = Object.values(
        galsenUiComponentSerializedContent.components
      ).length;

      return {
        ...galsenUiComponentSerializedContent,
        count: galsenUiGroupComponentsCount,
        slug: file.replace("galsen-ui-", "").replace(".mdx", ""),
      };
    })
  );

  return components as unknown as GalsenUiComponentGroup[];
}

export default async function Home() {
  const components = await getComponents();

  return (
    <main className="">
      <section className="px-4 py-16 space-y-6 text-center">
        <h1 className="mx-auto text-blue-700 max-w-2xl text-4xl font-extrabold leading-none sm:text-5xl">
          Découvrez Galsen UI !
        </h1>
        <p className="mx-auto max-w-xl text-neutral-500">
          Une bibliothèque de composants réutilisables basée sur Tailwind (CSS
          pur bientôt disponible) et conçue pour accélérer le développement
          d&apos;interfaces modernes.
        </p>
      </section>

      <div className="sm:max-w-7xl sm:mx-auto mt-10 px-4">
        <ComponentsGrid componentItems={components} />
      </div>
    </main>
  );
}
