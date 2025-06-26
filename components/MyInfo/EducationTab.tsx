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
    <div className="space-y-5 border-l-2 border-green-500 pl-4">
      {eduItems.map((edu, i) => (
        <motion.div
          key={i}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={listVariants}
          className="relative pl-3"
        >
          <span className="absolute -left-2 top-1 w-2 h-2 bg-green-400 rounded-full" />
          <div className="text-green-300 font-semibold flex justify-between items-center">
            <span>{edu.icon} {edu.school}</span>
            <span className="text-green-500 text-xs">{edu.period}</span>
          </div>
          <div className="text-green-200 text-sm mt-0.5">{edu.major} 전공</div>
        </motion.div>
      ))}
    </div>
  );
}