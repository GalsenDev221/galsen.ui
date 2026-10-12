"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { DarkModeState } from "@/types/Component";

interface PreviewDarkModeContextType {
  darkMode: DarkModeState;
  toggleDarkMode: () => void;
}

const PreviewDarkModeContext = createContext<PreviewDarkModeContextType>({
  darkMode: "light",
  toggleDarkMode: () => {},
});

export function PreviewDarkModeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState<DarkModeState>("light");

  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <PreviewDarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </PreviewDarkModeContext.Provider>
  );
}

export function usePreviewDarkMode() {
  return useContext(PreviewDarkModeContext);
}
