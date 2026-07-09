"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "./icons";

export default function ThemeToggle({ full = false }: { full?: boolean }) {
  const [dark, setDark] = useState<boolean | null>(null);

  // Read the current theme once mounted (matches the no-flash script in layout).
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    setDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      aria-pressed={dark ?? false}
      className={`btn-ghost ${full ? "w-full justify-between border border-line" : ""}`}
    >
      {full && <span>{dark ? "Dark mode" : "Light mode"}</span>}
      {/* Render nothing until mounted to avoid a hydration mismatch */}
      {dark === null ? (
        <span className="h-[18px] w-[18px]" />
      ) : dark ? (
        <Sun width={18} height={18} />
      ) : (
        <Moon width={18} height={18} />
      )}
    </button>
  );
}
