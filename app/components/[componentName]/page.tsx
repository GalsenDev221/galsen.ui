// "use client";

import ErrorMessage from "@/components/Error/ErrorMessage";
import UIComponentPreview from "@/components/UIComponentPreview";
import ComponentDetails from "@/components/galsenUiComponents/ComponentDetails";

import { promises as fs } from 'fs';

type PageProps = {
  params: { componentName: string };
};

// TODO: I'll be back to refactor: Because components should not handle logic
export default async function Page({ params }: PageProps) {
  /**
   * Read all the files located inside "componentName" folder
   * 
   * For example, "componentName" can be "forms" folder located inside public/ui
   */
  let files
  try {
    files = await fs.readdir(process.cwd() + `/public/ui/${params.componentName}/`, 'utf8');
  } catch (error) {
    return <ErrorMessage message="Veuillez verifier si cette catégorie de composants existe" />
  }

  // Get only html files so that we can display the code
  const htmlFiles = files.filter(file => file.endsWith(".html"))

  // The description of each component is located in a file with ".txt" extension
  const componentDescriptionFile = files.find(file => file.endsWith(".txt"))

  // Now we can read the content inside the component description file
  const componentDescription = await fs.readFile(process.cwd() + `/public/ui/${params.componentName}/${componentDescriptionFile}`, 'utf8')

  return (
    <main className="">
      <section className="px-4 py-16 sm:max-w-7xl sm:mx-auto">
        <h1 className="text-2xl font-bold capitalize">{params.componentName}</h1>
        <p className="text-neutral-500">
          {componentDescription}
        </p>

        {/* TODO: expose the component name as a prop */}
        {
          htmlFiles.length ?
            htmlFiles
              .map((file: string) => <UIComponentPreview key={file} category={params.componentName} file={file} />) :
            <p>Empty</p>
        }

        {/* TODO: remove the `hidden` class */}
        <div className="mt-16 space-y-12 hidden">
          <ComponentDetails title="Bouton Simple" />
          <ComponentDetails title="Bouton Pas Simple" />
        </div>
      </section>
    </main>
  );
}
