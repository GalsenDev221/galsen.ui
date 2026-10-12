"use client";

import { useState } from "react";
import { ViewportSize, ViewportConfig } from "@/types/Component";

interface ViewportControlsProps {
  currentViewport: ViewportSize;
  onViewportChange: (viewport: ViewportSize) => void;
}

const VIEWPORT_CONFIGS: Record<ViewportSize, ViewportConfig> = {
  mobile: { label: "Mobile", width: "375px", icon: "📱" },
  tablet: { label: "Tablet", width: "768px", icon: "📱" },
  desktop: { label: "Desktop", width: "960px", icon: "💻" },
  full: { label: "Full", width: "100%", icon: "🖥️" },
};

export default function ViewportControls({
  currentViewport,
  onViewportChange,
}: ViewportControlsProps) {
  return (
    <div className="flex items-center gap-2">
      {(Object.keys(VIEWPORT_CONFIGS) as ViewportSize[]).map((viewport) => {
        const config = VIEWPORT_CONFIGS[viewport];
        const isActive = currentViewport === viewport;
        return (
          <button
            key={viewport}
            onClick={() => onViewportChange(viewport)}
            className={`
              flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium
              transition-all duration-200
              ${
                isActive
                  ? "bg-blue-500 text-white shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              }
            `}
            title={config.width}
          >
            <span className="text-base">{config.icon}</span>
            <span className="hidden sm:inline">{config.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export { VIEWPORT_CONFIGS };
export type { ViewportControlsProps };
