"use client";
import { useState } from "react";
import TypingText from "@/components/TypingText";
import TabBar from "@/components/TabBar";
import TabContent from "@/components/TabContent";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function Home() {
  const [activeTab, setActiveTab] = useState("main");

  return (
    <main className="min-h-screen p-6 bg-black text-green-400 dark:bg-white dark:text-black transition-colors">
      <div className="flex justify-end mb-4">
        <DarkModeToggle />
      </div>
      <TypingText text="안녕하세요, 개발자 JS 입니다!" speed={100} />
      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
      <TabContent tab={activeTab} />
    </main>
  );
}