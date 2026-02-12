import ComponentsGrid from "@/components/ComponentsGrid";
import { getAllComponents } from "@/utils/components";

export default async function Home() {
  const components = await getAllComponents();

  return (
    <main className="">
      <section className="px-4 py-16 space-y-6 text-center">
        <h1 className="mx-auto text-blue-700 dark:text-blue-400 max-w-2xl text-4xl font-extrabold leading-none sm:text-5xl">
          Découvrez Galsen UI !
        </h1>
        <p className="mx-auto max-w-xl text-neutral-500 dark:text-gray-400">
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
