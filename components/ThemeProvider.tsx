"use client";

import { useEffect, useState } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {  

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const finalTheme = saved ?? (prefersDark ? "dark" : "light");
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(finalTheme);
  }, []);

  return <>{children}</>;
}