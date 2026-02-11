"use client";

import { HomePath, ComponentsPath } from "@/routes";
import Link from "next/link";
import Logo from "./Logo";
import { usePreviewDarkMode } from "@/components/context/PreviewDarkModeContext";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = usePreviewDarkMode();

  return (
    <header className="py-5 dark:bg-gray-900">
      <nav className="px-4 flex items-center justify-between sm:max-w-7xl sm:mx-auto">
        <Link href={HomePath}>
          <Logo />
        </Link>

        <ul className="inline-flex items-center gap-3">
          <li>
            <Link href={HomePath} className="dark:text-gray-200">Accueil</Link>
          </li>
          <li>
            <Link href={ComponentsPath} className="dark:text-gray-200">Components</Link>
          </li>
          <li>
            <button
              onClick={toggleDarkMode}
              className={`
                flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium
                transition-all duration-200
                ${darkMode === "dark"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }
              `}
              title="Toggle preview dark mode"
            >
              {darkMode === "dark" ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
              <span className="hidden sm:inline">
                {darkMode === "dark" ? "Clair" : "Sombre"}
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
