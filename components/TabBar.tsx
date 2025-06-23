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
    <nav className="w-full flex items-center justify-between border-b border-green-500 pb-2 mb-4">
      <div className="text-green-400 font-dot text-xl">⚡ JS WORLD</div>

      {/* 데스크탑 탭 */}
      <div className="hidden md:flex space-x-6 font-dot text-green-400">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`hover:underline ${
              activeTab === tab ? "underline underline-offset-4" : ""
            }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* 모바일 햄버거 */}
      <div className="md:hidden relative">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-green-400 text-xl">
          ☰
        </button>
        {menuOpen && (
          <div className="absolute right-0 mt-2 bg-black border border-green-500 p-2 rounded-md z-50">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  onTabChange(tab);
                  setMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-green-400 hover:bg-green-900/30"
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