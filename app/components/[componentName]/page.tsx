import { promises as fs } from "fs";
import { serialize } from "next-mdx-remote/serialize";
import RemoteMdxWrapper from "@/components/Mdx/RemoteMdxWrapper";
import RenderHTMLFiles from "@/components/galsenUiComponents/RenderHTMLFiles";
import H1 from "@/components/Mdx/H1";
import Breadcrumb from "@/components/Navigation/Breadcrumb";
import ComponentSidebar from "@/components/Navigation/ComponentSidebar";
import PrevNextNav from "@/components/Navigation/PrevNextNav";
import TableOfContents from "@/components/Navigation/TableOfContents";
import path from "path";
import { getAllComponents, componentsToNavigationItems } from "@/utils/components";
import { getComponentsNavigation, getPrevNextComponents } from "@/utils/navigation";

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

  try {
    // Récupérer tous les composants pour la navigation
    const allComponents = await getAllComponents();
    const navigationItems = componentsToNavigationItems(allComponents);
    const sortedNavItems = getComponentsNavigation(navigationItems);
    const { prev, next } = getPrevNextComponents(params.componentName, navigationItems);

    // Récupérer le composant actuel
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

    const currentEmoji = mdxSource.frontmatter.emoji as string;
    const currentTitle = mdxSource.frontmatter.title as string;
    const componentsData2 = mdxSource.frontmatter.components;

    return (
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="lg:grid lg:grid-cols-[208px_minmax(0,1fr)] lg:gap-6 max-w-[1600px] mx-auto">
          {/* Sidebar Navigation */}
          <ComponentSidebar
            components={sortedNavItems}
            currentSlug={params.componentName}
          />

          {/* Main Content Area with Table of Contents */}
          <div className="min-w-0 lg:grid lg:grid-cols-[minmax(0,1fr)_224px] lg:gap-6">
            {/* Main Content */}
            <div className="min-w-0 px-4 py-8 lg:py-16">
              <Breadcrumb currentPage={currentTitle} emoji={currentEmoji} />
              
              <RemoteMdxWrapper
                mdxSource={mdxSource}
                mdxScope={mdxScope}
                mdxComponents={{
                  h1: H1,
                  RenderHTMLFiles,
                }}
              />

              <PrevNextNav prev={prev} next={next} />
            </div>

            {/* Table of Contents */}
            <TableOfContents components={componentsData2} />
          </div>
        </div>
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
