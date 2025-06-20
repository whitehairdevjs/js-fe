"use client";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="font-dot text-xs md:text-sm px-4 py-2 border border-green-400 text-green-400 hover:bg-green-800 hover:text-white transition"
    >
      {isDark ? "☀ LIGHT MODE" : "🌙 DARK MODE"}
    </button>
  );
}