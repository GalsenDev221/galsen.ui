import Link from "next/link";

interface BreadcrumbProps {
  currentPage: string;
  emoji?: string;
}

export default function Breadcrumb({ currentPage, emoji }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm mb-6" aria-label="Breadcrumb">
      <Link
        href="/"
        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
      >
        Accueil
      </Link>
      <span className="text-gray-400 dark:text-gray-500">/</span>
      <span className="text-gray-400 dark:text-gray-500">Composants</span>
      <span className="text-gray-400 dark:text-gray-500">/</span>
      <span className="text-gray-900 dark:text-gray-100 font-medium flex items-center gap-2">
        {emoji && <span>{emoji}</span>}
        {currentPage}
      </span>
    </nav>
  );
}
