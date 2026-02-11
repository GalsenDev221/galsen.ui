import Link from "next/link";
import { NavigationItem } from "@/types/Component";

interface PrevNextNavProps {
  prev: NavigationItem | null;
  next: NavigationItem | null;
}

export default function PrevNextNav({ prev, next }: PrevNextNavProps) {
  return (
    <nav className="flex justify-between items-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
      <div className="flex-1">
        {prev && (
          <Link
            href={`/components/${prev.slug}`}
            className="group flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors max-w-xs"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
              <svg
                className="w-5 h-5 text-gray-600 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Précédent</p>
              <p className="font-medium text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <span>{prev.emoji}</span>
                <span>{prev.title}</span>
              </p>
            </div>
          </Link>
        )}
      </div>
      <div className="flex-1 flex justify-end">
        {next && (
          <Link
            href={`/components/${next.slug}`}
            className="group flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors max-w-xs"
          >
            <div className="flex-1 text-right">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Suivant</p>
              <p className="font-medium text-gray-900 dark:text-gray-100 flex items-center justify-end gap-2">
                <span>{next.title}</span>
                <span>{next.emoji}</span>
              </p>
            </div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
              <svg
                className="w-5 h-5 text-gray-600 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
}
