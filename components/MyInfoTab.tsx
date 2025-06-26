import { useState } from "react";
import { FaFolder, FaRegFolderOpen } from "react-icons/fa6";
import RetroConsole from "./RetroConsole";
import IntroTab from "./MyInfo/IntroTab";
import EducationTab from "./MyInfo/EducationTab";
import SkillTab from "./MyInfo/SkillTab";
import HobbyTab from "./MyInfo/HobbyTab";

const tabs = ["자기소개", "학력", "역량", "취미"];

const tabIcons = {
  자기소개: "🙋‍♂️",
  학력: "🎓",
  역량: "🛠️",
  취미: "🎮"
};

const tabContents = {
  자기소개: <IntroTab />,
  학력: <EducationTab />,
  역량: <SkillTab />,
  취미: <HobbyTab />,
};

export default function MyInfoTab() {
  const [activeTab, setActiveTab] = useState("자기소개");

  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-6 md:px-12 py-8">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-6 min-h-[400px] items-stretch">
        {/* 왼쪽 사이드 패널 */}
        <div className="w-full md:w-1/5 bg-white dark:bg-black/50 backdrop-blur-md border border-neutral-300 dark:border-green-500 rounded-lg shadow-inner dark:shadow-[0_0_5px_#00ff99] p-4 text-black dark:text-green-300 flex flex-col transition-colors duration-300">
          <h3 className="text-lg font-bold border-b border-neutral-300 dark:border-green-400 pb-2 mb-3">
            📁 My Info
          </h3>
          <ul className="space-y-3 flex-1">
            {tabs.map((tab) => (
              <li
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2 p-2 cursor-pointer rounded-md transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-green-400 text-black font-bold"
                    : "hover:bg-neutral-200 dark:hover:bg-green-800/40"
                }`}
              >
                {activeTab === tab ? <FaRegFolderOpen /> : <FaFolder />} {tab}
              </li>
            ))}
          </ul>
        </div>

        {/* 오른쪽 컨텐츠 박스 */}
        <div className="w-full md:w-4/5 bg-white dark:bg-black/50 backdrop-blur-md border border-neutral-300 dark:border-green-500 rounded-lg shadow-inner dark:shadow-[0_0_5px_#00ff99] p-6 text-black dark:text-green-200 leading-relaxed font-dot flex flex-col transition-colors duration-300">
          <h4 className="text-xl font-bold mb-3 border-b border-neutral-300 dark:border-green-400 pb-2">
            {tabIcons[activeTab]} {activeTab}
          </h4>
          <div className="flex-1 space-y-2">{tabContents[activeTab]}</div>
        </div>
      </div>

      {/* 콘솔 */}
      <div className="w-full max-w-7xl mt-6">
        <RetroConsole />
      </div>
    </div>
  );
}