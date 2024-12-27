import { promises as fs } from "fs";
import { serialize } from "next-mdx-remote/serialize";
import RemoteMdxWrapper from "@/components/Mdx/RemoteMdxWrapper";
import RenderHTMLFiles from "@/components/galsenUiComponents/RenderHTMLFiles";
import H1 from "@/components/Mdx/H1";
import Link from "next/link";
import path from "path";

type PageProps = {
  params: { componentName: string };
};

export default async function Page({ params }: PageProps) {
  const componentMdxPath = path.join(
    process.cwd(),
    "public",
    "data",
    "components",
    `galsen-ui-${params.componentName}.mdx`
  );

  // TODO: Need refactor: Implemented error handling but it should be optimized
  try {
    const componentsData = await fs.readFile(componentMdxPath, "utf8");
    const mdxSource = await serialize(componentsData, {
      parseFrontmatter: true,
    });

    const componentHTMLFiles = await fs.readdir(
      path.join(process.cwd(), "public", "components", params.componentName),
      "utf8"
    );

    const mdxScope = {
      files: componentHTMLFiles,
      componentSlug: params.componentName,
      components: mdxSource.frontmatter.components,
    };

    return (
      <main className="">
        <section className="px-4 py-16 sm:max-w-7xl sm:mx-auto">
          <Link href="/" passHref>
            <button className="py-2 px-4 mb-3 bg-blue-500 text-white rounded hover:bg-blue-600">
              Retour
            </button>
          </Link>
          <RemoteMdxWrapper
            mdxSource={mdxSource}
            mdxScope={mdxScope}
            mdxComponents={{
              h1: H1,
              RenderHTMLFiles,
            }}
          />
        </section>
      </main>
    );
  } catch (error) {
    console.error(
      `Erreur lors de la lecture du fichier MDX pour ${params.componentName}:`,
      error
    );
    return (
      <main>
        <section className="px-4 py-16 text-center">
          <h1 className="text-4xl font-extrabold text-red-600">
            Erreur de chargement
          </h1>
          <p>
            Le composant spécifié est introuvable ou une erreur s&apos;est
            produite.
          </p>
        </section>
      </main>
    );
  }
}
