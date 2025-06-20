"use client";

interface TabContentProps {
  tab: string;
}

export default function TabContent({ tab }: TabContentProps) {
  const renderContent = () => {
    switch (tab) {
      case "main":
        return (
          <div>
            <p className="mb-2">🕹️ 여기는 메인 탭입니다.</p>
            <p>이곳은 여러분을 JS의 세계로 초대하는 첫 화면이에요.</p>
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