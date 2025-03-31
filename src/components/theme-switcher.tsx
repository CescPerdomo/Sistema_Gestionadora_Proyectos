"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"; // Importamos los íconos de Lucide

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; 
  }

  return (
    <div className="flex items-center space-x-2">
      <button
        className={`p-2 rounded-full ${theme === "light" ? "bg-yellow-100" : ""}`}
        onClick={() => setTheme("light")}
      >
        <Sun className="w-6 h-6 text-yellow-500" />
      </button>
      <button
        className={`p-2 rounded-full ${theme === "dark" ? "bg-slate-800" : ""}`}
        onClick={() => setTheme("dark")}
      >
        <Moon className="w-6 h-6 text-gray-600 dark:text-gray-100" />
      </button>
     
    </div>
  );
};
