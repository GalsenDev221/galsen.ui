"use client";

import { useEffect, useState } from "react";
import { Component } from "@/types/Component";

interface TableOfContentsProps {
  components: Record<number, Component>;
}

export default function TableOfContents({ components }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -35% 0px",
      }
    );

    // Observer tous les composants
    Object.keys(components).forEach((key) => {
      const element = document.getElementById(`component-${key}`);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [components]);

  const componentEntries = Object.entries(components);

  // Ne pas afficher si moins de 2 composants
  if (componentEntries.length < 2) {
    return null;
  }

  return (
    <aside className="hidden lg:block sticky top-8 w-56 self-start">
      <div className="bg-white dark:bg-gray-800/80 rounded-lg border border-gray-200 dark:border-gray-600 p-4 shadow-sm dark:shadow-gray-900/50">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
          Sur cette page
        </h3>
        <nav className="space-y-2">
          {componentEntries.map(([key, component]) => {
            const id = `component-${key}`;
            const isActive = activeId === id;
            return (
              <a
                key={key}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(id)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className={`
                  block text-sm px-3 py-1.5 rounded-md transition-colors
                  ${
                    isActive
                      ? "bg-blue-50 text-blue-700 font-medium dark:bg-blue-500/20 dark:text-blue-300"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700/70"
                  }
                `}
              >
                {component.title}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
