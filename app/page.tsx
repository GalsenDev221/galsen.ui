import path from "path";
import { promises as fs } from 'fs'
import { serialize } from 'next-mdx-remote/serialize'

import ComponentsGrid from "@/components/ComponentsGrid";
import { GalsenUiComponentGroup } from "@/types/Component";

async function getComponents() {
  const galsenUiComponentsPath = path.join(process.cwd(), "/src/data/components");

  const galsenUiComponentsFiles = await fs.readdir(galsenUiComponentsPath)
  // console.log({ galsenUiComponentsFiles });

  const components = await Promise.all(
    galsenUiComponentsFiles.map(async (file) => {
      const galsenUiComponentPath = path.join(galsenUiComponentsPath, file);
      // console.log({ galsenUiComponentPath });
      const galsenUiComponentMdxContent = await fs.readFile(galsenUiComponentPath, 'utf8');
      const { frontmatter: galsenUiComponentSerializedContent } = await serialize<string, GalsenUiComponentGroup>(galsenUiComponentMdxContent, { parseFrontmatter: true })
      // galsenUiComponentSerializedContent
      // console.log({ galsenUiComponentSerializedContent });
      const galsenUiGroupComponentsCount = Object.values(galsenUiComponentSerializedContent.components).length

      // console.log({ galsenUiComponentSerializedContent, count: galsenUiGroupComponentsCount });


      return { ...galsenUiComponentSerializedContent, count: galsenUiGroupComponentsCount, slug: file.replace("galsen-ui-", "").replace(".mdx", "") };
    })
  )

  // console.log({ components });


  return components as unknown as GalsenUiComponentGroup[];
}

export default async function Home() {
  const components = await getComponents()

// console.log({ components });


  return (
    <main className="">
      <section className="px-4 py-16 space-y-6 text-center">
        <h1 className="mx-auto max-w-2xl text-4xl font-extrabold leading-none sm:text-5xl">
          Découvrez des composants UI époustouflants
        </h1>
        <p className="mx-auto max-w-xl text-neutral-500">
          Explorez notre vaste bibliothèque de composants UI magnifiquement
          conçus pour vous.
        </p>
        <button className="bg-black text-white px-6 py-3 leading-none rounded">
          Explorer
        </button>
      </section>
      <div className="sm:max-w-7xl sm:mx-auto mt-10 px-4">
        <ComponentsGrid componentItems={components} />
      </div>
      {/* <ComponentsList /> */}
    </main>
  );
}
