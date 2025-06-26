import { motion } from "framer-motion";
import { listVariants } from "./animation";

const hobbyItems = [
  { icon: "🧩", title: "게임", desc: "롤플레잉 게임, 콘솔 게임 즐기기" },
  { icon: "🚴", title: "운동", desc: "자전거 타기, 가벼운 산책, 헬스, 등산" },
  { icon: "🎧", title: "음악 감상", desc: "랩, 만화 및 게임 ost 좋아함" },
  { icon: "☕", title: "카페 코딩", desc: "주변 소음 속 집중력 상승 ⤴" },
  { icon: "💻", title: "사이드 프로젝트", desc: "포트폴리오, 개인 서비스 제작" },
];

export default function HobbyTab() {
  return (
    <ul className="space-y-4 text-sm sm:text-base">
      {hobbyItems.map((hobby, i) => (
        <motion.li
          key={i}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={listVariants}
          className="flex items-start gap-3"
        >
          <span className="text-lg">{hobby.icon}</span>
          <div>
            <p className="font-semibold text-neutral-700 dark:text-green-300 transition-colors">{hobby.title}</p>
            <p className="text-neutral-600 dark:text-green-200 text-sm transition-colors">{hobby.desc}</p>
          </div>
        </motion.li>
      ))}
    </ul>
  );
}