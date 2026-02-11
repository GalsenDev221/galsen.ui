"use client";

import { useState } from "react";
import { ViewportSize } from "@/types/Component";
import ViewportControls from "./ViewportControls";
import ViewportPreview from "./ViewportPreview";
import CodeBlock from "./CodeBlock";
import { usePreviewDarkMode } from "@/components/context/PreviewDarkModeContext";

const ComponentDetails = ({ 
  code, 
  title, 
  isLoading = false 
}: { 
  title: string; 
  code: string;
  isLoading?: boolean;
}) => {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [viewport, setViewport] = useState<ViewportSize>("full");
  const { darkMode } = usePreviewDarkMode();

  if (isLoading) {
    return (
      <article className="w-full space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="h-8 bg-gray-200 rounded w-48 animate-pulse" />
          <div className="flex gap-2">
            <div className="h-10 bg-gray-200 rounded w-32 animate-pulse" />
            <div className="h-10 bg-gray-200 rounded w-32 animate-pulse" />
          </div>
        </div>
        <div className="w-full h-[500px] rounded-lg bg-gray-100 animate-pulse flex items-center justify-center">
          <svg className="animate-spin h-10 w-10 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      </article>
    );
  }

  return (
    <article className="w-full min-w-0 space-y-6">
      {/* Header with title and controls */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{title}</h2>

        <div className="flex flex-wrap items-center gap-3">
          {/* Tab Toggle */}
          <div className="flex items-center gap-1 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <button
              onClick={() => setTab("preview")}
              type="button"
              className={`
                flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium
                transition-all duration-200
                ${
                  tab === "preview"
                    ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm"
                    : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                }
              `}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <span>Aperçu</span>
            </button>
            <button
              onClick={() => setTab("code")}
              type="button"
              className={`
                flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium
                transition-all duration-200
                ${
                  tab === "code"
                    ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm"
                    : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                }
              `}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              <span>Code</span>
            </button>
          </div>

          {/* Preview Controls */}
          {tab === "preview" && (
            <>
              <ViewportControls
                currentViewport={viewport}
                onViewportChange={setViewport}
              />
            </>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="w-full min-w-0 min-h-[500px] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        {code ? (
          tab === "preview" ? (
            <ViewportPreview code={code} viewport={viewport} darkMode={darkMode} />
          ) : (
            <CodeBlock code={code} language="html" />
          )
        ) : (
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-500">Chargement...</p>
          </div>
        )}
      </div>
    </article>
  );
};

export default ComponentDetails;
