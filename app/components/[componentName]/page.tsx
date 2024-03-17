// "use client";

import UIComponentPreview from "@/components/UIComponentPreview";
import ComponentDetails from "@/components/galsenUiComponents/ComponentDetails";
import { getFiles } from "@/utils/getFiles";

import { promises as fs } from 'fs';

type PageProps = {
  params: { componentName: string };
};

export default async function Page({ params }: PageProps) {
  // const filesInTheFolder = getFiles("app")
  let file
  try {
    file = await fs.readdir(process.cwd() + `/public/ui/${params.componentName}/`, 'utf8');
  } catch (error) {
    return <div>Une erreur est survenu {JSON.stringify(error)}</div>
  }

  // console.log({ file });
  return (
    <main className="">
      <section className="px-4 py-16 sm:max-w-7xl sm:mx-auto">
        <h1 className="text-2xl font-bold capitalize">{params.componentName}</h1>
        <p className="text-neutral-500">
          Les boutons sont des composants très utilisés au niveau des pages
          webs.
        </p>

        {/* TODO: expose the component name as a prop */}
        {file.map((file: string) => <UIComponentPreview key={file} category={params.componentName} file={file} />)}

        {/* TODO: remove the `hidden` class */}
        <div className="mt-16 space-y-12 hidden">
          <ComponentDetails title="Bouton Simple" />
          <ComponentDetails title="Bouton Pas Simple" />
        </div>
      </section>
    </main>
  );
}
