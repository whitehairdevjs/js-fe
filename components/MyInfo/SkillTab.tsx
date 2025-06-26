import { motion } from "framer-motion";
import { listVariants } from "./animation";

const skillItems = [
  { icon: "🧰", stack: "Java / Spring Boot", desc: "대형 서비스 구축 경험" },
  { icon: "🛢", stack: "MariaDB / PostgreSQL", desc: "복잡한 쿼리 튜닝 및 캐싱 경험" },
  { icon: "🔐", stack: "JWT / RESTful API", desc: "인증과 API 설계" },
  { icon: "🚀", stack: "AWS / Jenkins", desc: "배포 자동화 구축 경험" },
  { icon: "🎨", stack: "JavaScript / JQuery", desc: "중간 정도 실력의 Front 지식 탑재" },
];

export default function SkillTab() {
  return (
    <ul className="space-y-3 text-sm sm:text-base transition-colors duration-300">
      {skillItems.map((item, i) => (
        <motion.li
          key={i}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={listVariants}
          className="flex items-start gap-3"
        >
          <span className="text-lg">{item.icon}</span>
          <div>
            <p className="text-black dark:text-green-300 font-bold">{item.stack}</p>
            <p className="text-neutral-700 dark:text-green-200 text-sm">{item.desc}</p>
          </div>
        </motion.li>
      ))}
    </ul>
  );
}