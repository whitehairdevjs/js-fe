"use client";

interface TabBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = ["main", "myinfo", "career"];

export default function TabBar({ activeTab, onTabChange }: TabBarProps) {
  return (
    <div className="flex space-x-4 mb-6 border-b border-green-700 pb-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-4 py-2 text-sm md:text-base font-bold uppercase tracking-widest transition 
            ${
              activeTab === tab
                ? "text-green-400 border-b-2 border-green-400"
                : "text-green-600 hover:text-green-400"
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}