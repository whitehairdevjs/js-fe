"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

const careers = [
  {
    logo: "/career/il4u.png",
    company: "아이엘포유",
    period: "2023.09 ~ 2025.01",
    position: "풀스택 개발",
    summary:
      "사내 인력 관리 시스템의 신규 개발 및 유지보수, 현대 오토에버 PMS 프로젝트 연동 인터페이스 개발 참여",
    highlights: [
      "사내 인력 시스템 운영 효율화를 위한 시스템 리팩토링 및 신규 인력 관리 시스템 개발",
      "현대 오토에버 PMS와 외부 협업 도구 API 연동 인터페이스 개발",
      "삼성, 현대, 히타치 등 외부 프로젝트 유지보수"
    ],
    skills: ["Java", "Spring Boot", "JSP", "MyBatis", "MariaDB", "PostgreSQL", "Redis", "JWT", "Vue.js"]
  },
  {
    logo: "/career/retail.png",
    company: "리테일앤인사이트",
    period: "2022.06 ~ 2023.08",
    position: "풀스택 개발",
    summary:
      "유통 특화 ERP 시스템 '토마토 솔루션'의 End-to-End 개발 및 운영",
    highlights: [
      "ERP Back-office 시스템 개발 및 운영 주도",
      "수발주 자동화 모듈 개발",
      "외부 파트너 플랫폼 연동",
      "데이터 기반 통계 시스템 구축"
    ],
    skills: ["Java", "Spring Boot", "JSP", "MyBatis", "Javascript", "JQuery", "MariaDB", "AWS"]
  },
  {
    logo: "/career/wemx.png",
    company: "위맥스테크",
    period: "2021.03 ~ 2022.04",
    position: "소프트웨어 개발",
    summary:
      "키오스크 및 POS 단말 연동 솔루션 개발, 프론트엔드, 백엔드 애플리케이션 설계 및 구현",
    highlights: [
      "Application Service Provider 인터페이스 설계 및 개발",
      "타 POS와 포인트 연동 개발",
      "키오스크 <-> 로봇 바리스타 연동 개발",
      "고객 주문 안내 화면, 주방 주문 표시기 시스템 개발"
    ],
    skills: ["Java", "Javascript", "React", "GCP DB", "AWS"]
  },
  {
    logo: "/career/mates.png",
    company: "메이츠소프트",
    period: "2018.12 ~ 2020.06",
    position: "소프트웨어 개발",
    summary:
      "병원 정보 시스템(HIS) 및 공공의료 시스템 개발 수행",
    highlights: [
      "신규 시스템 구축 및 사용자 교육",
      "문자,알림톡 예약 발송 기능 개발",
      "병원 간 수탁 검사 자동 연동화 프로그램 개발",
      "감염병 자동 신고 시스템 연동"
    ],
    skills: ["C#", "VB", "WinForms", ".NET", "ORACLE", "MySQL"]
  }
];

export default function CareerTab() {
  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-6 md:px-12 py-12">
      <div className="w-full max-w-6xl space-y-10">
        {careers.map((item, idx) => (
          <CRTCard key={idx} item={item} idx={idx} />
        ))}
      </div>
    </div>
  );
}

function CRTCard({ item, idx }: { item: (typeof careers)[0]; idx: number }) {
  const [expanded, setExpanded] = useState(false);
  const visibleSkills = expanded ? item.skills : item.skills.slice(0, 6);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.15 }}
      viewport={{ once: true, amount: 0.2 }}
      className={clsx(
        "relative overflow-hidden",
        "crt-card flex flex-col sm:flex-row items-start gap-4 sm:gap-6",
        "bg-black/50 backdrop-blur-md border border-green-500 rounded-xl p-4 sm:p-6 shadow-[0_0_5px_#00ff99]"
      )}
    >
      {/* CRT 스캔라인 */}
      <div className="absolute inset-0 pointer-events-none z-10 mix-blend-soft-light bg-gradient-to-b from-transparent via-green-500/10 to-transparent" />

      {/* 로고 */}
      <div className="w-16 h-16 min-w-[64px] flex items-center justify-center bg-white rounded-md overflow-hidden z-20">
        <Image
          src={item.logo}
          alt={`${item.company} logo`}
          width={48}
          height={48}
          className="object-contain"
        />
      </div>

      {/* 내용 */}
      <div className="flex-1 text-green-200 z-20">
        <div className="flex items-center gap-1 mb-4">
          <span className="text-sm font-sans text-green-300">(주)</span>
          <h3 className="text-base sm:text-2xl font-bold text-green-400 whitespace-nowrap">
            {item.company}
          </h3>
        </div>
        <div className="text-xs sm:text-sm mb-3 flex flex-wrap items-center gap-1 text-green-300">
          <span className="font-semibold">{item.period}</span>
          <span className="text-green-400">|</span>
          <span>{item.position}</span>
        </div>
        <p className="text-xs sm:text-sm text-green-300 leading-relaxed mb-4">
          {item.summary}
        </p>
        <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm mb-3">
          {item.highlights.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>

        {/* 기술 스택 */}
        <div className="mt-2 flex flex-wrap gap-1 sm:gap-2">
          {visibleSkills.map((skill, i) => (
            <span
              key={i}
              className="bg-green-800 text-green-100 text-[10px] sm:text-xs px-2 py-0.5 rounded-md border border-green-400 shadow-[0_0_2px_#00ff99]"
            >
              {skill}
            </span>
          ))}
          {item.skills.length > 9 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-[10px] sm:text-xs px-2 py-0.5 rounded-md border border-green-400 text-green-300 hover:bg-green-700/50 transition-all"
            >
              {expanded ? "접기.." : "더보기.."}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}