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
  자기소개: (
    <>
      <p>
        안녕하세요!! 저는 <strong className="text-green-400">백엔드 개발자 김재성</strong>입니다.
      </p>
      <p className="mt-2">
        새로운 기술을 배우는 걸 즐기며, 포기없는 도전 정신으로 끝까지 개발합니다.
      </p>
      <p className="mt-2">
        유지보수, 가독성을 위한 <span className="text-green-400">클린 코드</span> 개발과 완벽한 비즈니스 적용을 위한 <span className="text-green-400">커뮤니케이션</span>을 중요하게 생각합니다.
      </p>
    </>
  ),

  학력: (
    <ul className="list-disc pl-5 space-y-1">
      <li>학점은행제 컴퓨터공학 졸업</li>
      <li>서울호서전문학교 컴퓨터정보과 졸업</li>          
      <li>재학기간: <span className="text-green-300">2015 ~ 2020</span></li>
    </ul>
  ),

  역량: (
    <ul className="list-none space-y-1">
      <li><strong className="text-green-300">✔ Java / Spring Boot</strong> – 대형 서비스 구축 경험</li>
      <li><strong className="text-green-300">✔ MariaDB / MySQL</strong> – 복잡한 쿼리 튜닝 및 캐싱 경험</li>
      <li><strong className="text-green-300">✔ JWT / RESTful API</strong> – 인증과 API 설계</li>
      <li><strong className="text-green-300">✔ AWS / Jenkins</strong> – 배포 자동화 구축 경험</li>
      <li><strong className="text-green-300">✔ JavaScript / JQuery </strong> – 중간 정도 실력의 Front 지식 탑재</li>
    </ul>
  ),

  취미: (
    <div className="space-y-2">
      <p>🧩  <strong>게임</strong> – 롤플레잉 게임, 콘솔 게임 즐기기</p>    
      <p>🚴 <strong>운동</strong> – 자전거 타기, 가벼운 산책, 헬스, 등산</p>
      <p>🎧 <strong>음악 감상</strong> – 랩, 만화 및 게임 ost 좋아함</p>
      <p>☕ <strong>카페 코딩</strong> – 주변 소음 속 집중력 상승 ⤴</p>
      <p>💻 <strong>사이드 프로젝트</strong> – 포트폴리오, 개인 서비스 제작</p>
    </div>
  )
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