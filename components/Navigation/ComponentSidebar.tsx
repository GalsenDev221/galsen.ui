"use client";

import Link from "next/link";
import { NavigationItem } from "@/types/Component";
import { useState } from "react";

interface ComponentSidebarProps {
  components: NavigationItem[];
  currentSlug: string;
}

export default function ComponentSidebar({
  components,
  currentSlug,
}: ComponentSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-4 left-4 z-50 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        aria-label="Toggle navigation"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-screen lg:h-auto
          w-52 bg-white dark:bg-gray-800 lg:bg-transparent lg:dark:bg-transparent
          border-r border-gray-200 dark:border-gray-700 lg:border-0
          transition-transform duration-300 ease-in-out
          z-40 lg:z-0
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="p-4 lg:p-0">
          <h2 className="text-sm font-semibold text-white bg-blue-500 px-3 py-2 text-center mb-3">
            Composants
          </h2>
          <nav className="space-y-0.5">
            {components.map((component) => {
              const isActive = component.slug === currentSlug;
              return (
                <Link
                  key={component.slug}
                  href={`/components/${component.slug}`}
                  onClick={() => setIsOpen(false)}
                  className={`
                    flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-sm
                    transition-colors duration-150
                    ${
                      isActive
                        ? "bg-blue-50 text-blue-700 font-medium dark:bg-blue-900/30 dark:text-blue-400"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                    }
                  `}
                >
                  <span className="text-base">{component.emoji}</span>
                  <span className="flex-1">{component.title}</span>
                  <span
                    className={`
                      text-xs px-2 py-0.5 rounded-full
                      ${
                        isActive
                          ? "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400"
                          : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400"
                      }
                    `}
                  >
                    {component.count}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
