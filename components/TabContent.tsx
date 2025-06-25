"use client";

import MyInfoTab from "@/components/MyInfoTab";
import MainTab from "@/components/MainTab";

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
          <div>
            <p className="mb-2">🧠 경력 탭입니다.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>2020 ~ 현재: JS Corp 백엔드 엔지니어</li>
              <li>JAVA, SPRING 전문</li>
            </ul>
          </div>
        );
      default:
        return <p>탭을 선택해주세요.</p>;
    }
  };

  return <div className="bg-green-900/10 p-4 rounded-lg">{renderContent()}</div>;
}