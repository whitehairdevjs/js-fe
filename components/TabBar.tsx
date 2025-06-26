"use client";

import { useState } from "react";

interface TabBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function TabBar({ activeTab, onTabChange }: TabBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const tabs = ["main", "myinfo", "career"];

  return (
    <nav className="w-full flex items-center justify-between border-b border-neutral-300 dark:border-green-500 pb-2 mb-4 transition-colors duration-300">
      {/* 로고 & 홈 버튼 */}
      <div
        onClick={() => onTabChange("main")}
        className="cursor-pointer font-dot text-base sm:text-lg lg:text-xl text-black dark:text-green-400 hover:scale-105 transition-transform duration-200 select-none"
      >
        <span className="mr-1 animate-pulse">⚡</span> JS WORLD
      </div>
      
      {/* 데스크탑 탭 */}
      <div className="hidden md:flex space-x-6 font-dot text-black dark:text-green-400">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`hover:underline transition-all ${
              activeTab === tab ? "underline underline-offset-4" : ""
            }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* 모바일 햄버거 메뉴 */}
      <div className="md:hidden relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-black dark:text-green-400 text-xl"
        >
          ☰
        </button>
        {menuOpen && (
          <div className="absolute right-0 mt-2 bg-white dark:bg-black border border-neutral-300 dark:border-green-500 p-2 rounded-md z-50 transition-colors duration-300 shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  onTabChange(tab);
                  setMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-black dark:text-green-400 hover:bg-neutral-200 dark:hover:bg-green-900/30 transition-colors"
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
