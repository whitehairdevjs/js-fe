import { motion } from "framer-motion";
import { introVariants } from "./animation";

const introItems = [
  {
    icon: "🙋‍♂️",
    text: (
      <>
        안녕하세요! 저는{" "}
        <strong className="text-black dark:text-green-400 font-bold">
          백엔드 개발자 김재성
        </strong>
        입니다.
      </>
    ),
  },
  {
    icon: "🚀",
    text: <>새로운 기술을 배우는 걸 즐기며, 포기없는 도전 정신으로 끝까지 개발합니다.</>,
  },
  {
    icon: "🧠",
    text: (
      <>
        유지보수, 가독성을 위한{" "}
        <span className="text-black dark:text-green-300 font-semibold">클린 코드</span>와{" "}
        <span className="text-black dark:text-green-300 font-semibold">커뮤니케이션</span>
        을 중요하게 생각합니다.
      </>
    ),
  },
];

export default function IntroTab() {
  return (
    <div className="space-y-4 text-sm sm:text-base leading-relaxed text-black dark:text-green-200 transition-colors duration-300">
      {introItems.map((item, i) => (
        <motion.p
          key={i}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={introVariants}
          className="flex items-start gap-2"
        >
          <span className="text-lg">{item.icon}</span>
          <span>{item.text}</span>
        </motion.p>
      ))}
    </div>
  );
}