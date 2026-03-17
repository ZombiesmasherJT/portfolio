import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

const THEME_KEY = "portfolio-theme";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    // Add a short-lived class so CSS can animate the theme swap.
    root.classList.add("theme-transition");
    // Force style recalc so the class takes effect before variables swap.
    // eslint-disable-next-line no-unused-expressions
    root.offsetHeight;

    root.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);

    const t = window.setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 320);

    return () => window.clearTimeout(t);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
