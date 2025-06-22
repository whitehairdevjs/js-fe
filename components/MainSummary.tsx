import { FaLaptopCode, FaHeart, FaGlobeAsia, FaEnvelope } from "react-icons/fa";

export default function MainSummaryBox() {
  return (
    <div className="border border-green-400 dark:border-green-600 p-4 rounded-md text-green-400 dark:text-green-600 shadow-lg relative crt">
      {/* 타이틀 */}
      <h2 className="text-xl font-bold mb-3 border-b border-green-500 pb-1 dark:text-green-600">
        Summary about me
      </h2>

      {/* 내용 */}
      <ul className="space-y-3">
        <li className="flex items-center gap-2">
          <FaLaptopCode className="text-lg" />
          <span>BackEnd Developer</span>
        </li>
        <li className="flex items-center gap-2">
          <FaHeart className="text-lg" />
          <span>Love BackEnd Coding</span>
        </li>
        <li className="flex items-center gap-2">
          <FaGlobeAsia className="text-lg" />
          <span>Based in Seoul, Korea</span>
        </li>
        <li className="flex items-center gap-2">
          <FaEnvelope className="text-lg" />
          <span>Mail: jsuserwork20@gmail.com</span>
        </li>
      </ul>

      {/* 하단 테두리 장식 */}
      <div className="mt-4 border-t border-green-500 pt-2 text-xs flex items-center justify-between">
        <span className="w-1/3 h-2 bg-green-400 dark:bg-green-600 animate-pulse" />
        <span className="w-1 h-1 bg-green-400 dark:bg-green-600" />
      </div>
    </div>
  );
}
