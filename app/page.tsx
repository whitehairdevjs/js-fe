"use client";
import { useState } from "react";
import TypingText from "@/components/TypingText";
import TabBar from "@/components/TabBar";
import TabContent from "@/components/TabContent";

export default function Home() {
  const [activeTab, setActiveTab] = useState("main");

  return (
    <main className="min-h-screen bg-black text-green-400 font-mono p-6">
      <TypingText text="안녕하세요, 개발자 JS 입니다!" speed={100} />
      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
      <TabContent tab={activeTab} />
    </main>
  );
}