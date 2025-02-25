"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Empêcher le rendu côté serveur pour éviter l'erreur d'hydratation
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex items-center justify-center p-4">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={isDark}
          onChange={() => setTheme(isDark ? "light" : "dark")}
          className="sr-only peer"
          aria-label="Toggle Dark Mode"
        />
        <div
          className="w-11 h-6 bg-gray-300 dark:bg-gray-700 rounded-full 
          peer-checked:bg-black peer-focus:ring-2 peer-focus:ring-blue-500
          dark:peer-focus:ring-blue-300 relative transition-colors"
        >
          <div
            className={`absolute top-1 w-4 h-4 bg-white dark:bg-gray-200 rounded-full 
            transition-all duration-300 ${isDark ? "right-1" : "left-1"}`}
          ></div>
        </div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {isDark ? "Dark" : "Light"}
        </span>
      </label>
    </div>
  );
}
