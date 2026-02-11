"use client";

import { ViewportSize, DarkModeState } from "@/types/Component";
import { VIEWPORT_CONFIGS } from "./ViewportControls";
import { componentPreviewHtml } from "@/utils/transformers";

interface ViewportPreviewProps {
  code: string;
  viewport: ViewportSize;
  darkMode: DarkModeState;
}

export default function ViewportPreview({
  code,
  viewport,
  darkMode,
}: ViewportPreviewProps) {
  const viewportWidth = VIEWPORT_CONFIGS[viewport].width;
  const isDark = darkMode === "dark";

  return (
    <div
      className={`
        w-full h-full p-6 rounded-lg overflow-x-auto
        transition-colors duration-200
        ${isDark ? "bg-gray-900" : "bg-gray-100"}
      `}
    >
      <div
        className="h-full mx-auto transition-all duration-300 ease-in-out"
        style={{
          width: viewportWidth === "100%" ? "100%" : `min(${viewportWidth}, 100%)`,
        }}
      >
        <iframe
          className={`
            w-full h-full rounded-lg shadow-sm
            ${isDark ? "ring-1 ring-gray-700" : ""}
          `}
          srcDoc={componentPreviewHtml(code, 'relative', isDark)}
        />
      </div>
    </div>
  );
}
