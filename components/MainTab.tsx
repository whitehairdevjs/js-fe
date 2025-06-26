"use client";
import { useState } from "react";
import TypingText from "@/components/TypingText";
import MainSummary from "@/components/MainSummary";

export default function MainTab() {
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  return (
    <div className="w-full min-h-[600px] flex flex-col lg:flex-row items-center justify-center px-4 py-10 gap-12 lg:gap-20">
      {/* 왼쪽 텍스트 영역 */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center space-y-6">
        <TypingText
          text="Hello Everyone"
          speed={50}
          className="text-base sm:text-lg text-gray-600 dark:text-gray-300"
          showCursor={false}
          onComplete={() => setShow2(true)}
        />

        {show2 && (
          <TypingText
            text="My Name Is JS Kim."
            speed={60}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 dark:text-green-400"
            showCursor={false}
            onComplete={() => setShow3(true)}
          />
        )}

        {show3 && (
          <TypingText
            text="Welcome to the JS World"
            speed={55}
            className="text-xl sm:text-2xl text-green-500 dark:text-green-300"
            showCursor={true}
          />
        )}
      </div>

      {/* 오른쪽 Summary 박스 */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <MainSummary />
      </div>
    </div>
  );
}