// "use client";
import { promises as fs } from "fs";
import { serialize } from "next-mdx-remote/serialize";
import RemoteMdxWrapper from "@/components/Mdx/RemoteMdxWrapper";
import RenderHTMLFiles from "@/components/galsenUiComponents/RenderHTMLFiles";
import H1 from "@/components/Mdx/H1";
// import ErrorMessage from "@/components/Error/ErrorMessage";
import Link from "next/link";

type PageProps = {
  params: { componentName: string };
};

// TODO: I'll be back to refactor: Because components should not handle logic
export default async function Page({ params }: PageProps) {
  // <ErrorMessage message="Veuillez vérifier si cette catégorie de composants existe." />

  // <ErrorMessage
  // title="Erreur de connexion"
  // message="Impossible de se connecter au serveur. Veuillez réessayer."
  //   dismissible
  //   onDismiss={() => console.log('Message fermé')}
  //   className="my-8"
  // />

  // TODO: recuperer les titres et description de chaque composant
  const componentsData = await fs.readFile(
    process.cwd() +
      `/src/data/components/galsen-ui-${params.componentName}.mdx`,
    "utf8"
  );
  const mdxSource = await serialize(componentsData, { parseFrontmatter: true });

  const componentHTMLFiles = await fs.readdir(
    process.cwd() + `/public/components/${params.componentName}`,
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
}
