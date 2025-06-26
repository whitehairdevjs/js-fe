import { motion } from "framer-motion";
import { listVariants } from "./animation";

const eduItems = [
  {
    icon: "🎓",
    school: "서울호서전문학교",
    major: "컴퓨터정보과",
    period: "2015 ~ 2019",
  },
  {
    icon: "📘",
    school: "학점은행제",
    major: "컴퓨터공학",
    period: "2019 ~ 2020",
  },
];

export default function EducationTab() {
  return (
    <div className="space-y-6 border-l-2 border-neutral-300 dark:border-green-500 pl-4 transition-colors duration-300">
      {eduItems.map((edu, i) => (
        <motion.div
          key={i}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={listVariants}
          className="relative pl-3"
        >
          <span className="absolute -left-2 top-2 w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full" />

          {/* 상단 줄: 아이콘 + 학교명 / 연도 */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 text-neutral-700 dark:text-green-300 font-semibold">
            <span className="break-words">{edu.icon} {edu.school}</span>
            <span className="text-sm text-neutral-500 dark:text-green-500">{edu.period}</span>
          </div>

          {/* 전공 표시 */}
          <div className="text-sm mt-1 text-neutral-600 dark:text-green-200 leading-relaxed">
            {edu.major} 전공
          </div>
        </motion.div>
      ))}
    </div>
  );
}