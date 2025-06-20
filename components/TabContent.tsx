"use client";

import { useState } from "react";
import TypingText from "@/components/TypingText";

interface TabContentProps {
  tab: string;
}

export default function TabContent({ tab }: TabContentProps) {
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const renderContent = () => {
    switch (tab) {
      case "main":
        return (
           <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-3">
            <TypingText
              text="Hello Everyone"
              speed={50}
              className="text-sm text-gray-400 dark:text-gray-700"
              showCursor={false}
              onComplete={() => setShow2(true)} // ← 다음 줄 표시
            />

            {show2 && (
              <TypingText
                text="My Name Is JS Kim."
                speed={60}
                className="text-3xl font-bold text-green-400 dark:text-green-700"
                showCursor={false}
                onComplete={() => setShow3(true)}
              />
            )}

            {show3 && (
              <TypingText
                text="Welcome to the JS World"
                speed={55}
                className="text-xl text-green-300 dark:text-green-600"
                showCursor={true}
              />
            )}
          </div>
        );
      case "myinfo":
        return (
          <div>
            <p className="mb-2">👾 자기소개 탭입니다.</p>
            <p>안녕하세요! 저는 도트를 사랑하는 프론트엔드 개발자 JS입니다.</p>
          </div>
        );
      case "career":
        return (
          <div>
            <p className="mb-2">🧠 경력 탭입니다.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>2020 ~ 현재: JS Corp 프론트엔드 엔지니어</li>
              <li>React, Next.js, Tailwind, 도트감성 전문</li>
            </ul>
          </div>
        );
      default:
        return <p>탭을 선택해주세요.</p>;
    }
  };

  return <div className="bg-green-900/10 p-4 rounded-lg">{renderContent()}</div>;
}