"use client";

import MyInfoTab from "@/components/MyInfoTab";
import MainTab from "@/components/MainTab";
import CareerTab from "@/components/CareerTab";

interface TabContentProps {
  tab: string;
}

export default function TabContent({ tab }: TabContentProps) {
  const renderContent = () => {
    switch (tab) {
      case "main":
        return (
          <MainTab />
        );
      case "myinfo":
        return (
          <MyInfoTab />
        );
      case "career":
        return (
          <CareerTab />
        );
      default:
        return <p>탭을 선택해주세요.</p>;
    }
  };

  return <div className="bg-green-900/10 p-4 rounded-lg">{renderContent()}</div>;
}