import { useState } from "react";
import { FaFolder, FaRegFolderOpen } from "react-icons/fa6";
import RetroConsole from "./RetroConsole";

const tabs = ["자기소개", "학력", "역량", "취미"];

const tabIcons = {
  자기소개: "🙋‍♂️",
  학력: "🎓",
  역량: "🛠️",
  취미: "🎮"
};

const tabContents = {
  자기소개:
    "안녕하세요! 저는 백엔드를 사랑하는 개발자 JS Kim입니다. 새로운 기술을 배우는 걸 즐기며, 클린 코드와 협업을 중요하게 생각합니다.",
  학력: "학점은행제 컴퓨터공학 졸업 (2015 ~ 2020)",
  역량:
    "Java, Spring Boot, MySQL, Redis, JWT, RESTful API, Git, AWS, Jenkins 등 실무 경험이 있습니다.",
  취미:
    "게임, 자전거, 삼겹살 먹기 등..."
};

export default function MyInfoTab() {
  const [activeTab, setActiveTab] = useState("자기소개");

  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-6 md:px-12 py-8">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-6 min-h-[400px] items-stretch">
        {/* 왼쪽 사이드 패널 */}
        <div className="w-full md:w-1/5 bg-black/50 backdrop-blur-md border border-green-500 rounded-lg shadow-[0_0_5px_#00ff99] p-4 text-green-300 flex flex-col">
          <h3 className="text-lg font-bold border-b border-green-400 pb-2 mb-3">📁 My Info</h3>
          <ul className="space-y-3 flex-1">
            {tabs.map((tab) => (
              <li
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2 p-2 cursor-pointer rounded-md transition-colors duration-300 ${
                  activeTab === tab
                    ? "bg-green-400 text-black font-bold"
                    : "hover:bg-green-800/40"
                }`}
              >
                {activeTab === tab ? <FaRegFolderOpen /> : <FaFolder />} {tab}
              </li>
            ))}
          </ul>
        </div>

        {/* 오른쪽 컨텐츠 박스 */}
        <div className="w-full md:w-4/5 bg-black/50 backdrop-blur-md border border-green-500 rounded-lg shadow-[0_0_5px_#00ff99] p-6 text-green-200 leading-relaxed font-dot flex flex-col">
          <h4 className="text-xl font-bold mb-3 border-b border-green-400 pb-2">
            {tabIcons[activeTab]} {activeTab}
          </h4>
          <p className="whitespace-pre-wrap flex-1">{tabContents[activeTab]}</p>
        </div>
      </div>

      {/* 콘솔 */}
      <div className="w-full max-w-7xl mt-6">
        <RetroConsole />
      </div>
    </div>
  );
}