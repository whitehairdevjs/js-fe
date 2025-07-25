import { FaLaptopCode, FaHeart, FaGlobeAsia, FaEnvelope } from "react-icons/fa";

export default function MainSummary() {
  return (
    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg border border-green-400 dark:border-green-400 border-green-700 bg-white/80 dark:bg-black/60 backdrop-blur-sm rounded-lg p-4 sm:p-5 shadow-[0_0_5px_#00ff99] dark:text-[#33ffcc] text-green-800 font-dot crt transition-all duration-300">
      {/* 타이틀 */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 border-b border-green-500 pb-2 tracking-wide text-center leading-snug break-words text-green-700 dark:text-green-300">
        Summary about me
      </h2>

      {/* 내용 */}
      <ul className="space-y-4 text-sm sm:text-base md:text-lg">
        <li className="flex items-center gap-3 hover:scale-[1.03] transition-transform">
          <FaLaptopCode className="text-base sm:text-lg md:text-xl text-green-600 dark:text-green-400 drop-shadow" />
          <span className="break-words">BackEnd Developer</span>
        </li>
        <li className="flex items-center gap-3 hover:scale-[1.03] transition-transform">
          <FaHeart className="text-base sm:text-lg md:text-xl text-pink-500 dark:text-pink-400 drop-shadow" />
          <span className="break-words">Love BackEnd Coding</span>
        </li>
        <li className="flex items-center gap-3 hover:scale-[1.03] transition-transform">
          <FaGlobeAsia className="text-base sm:text-lg md:text-xl text-cyan-600 dark:text-cyan-400 drop-shadow" />
          <span className="break-words">Based in Seoul, Korea</span>
        </li>
        <li className="flex items-center gap-3 hover:scale-[1.03] transition-transform">
          <FaEnvelope className="text-base sm:text-lg md:text-xl text-yellow-500 dark:text-yellow-400 drop-shadow" />
          <span className="break-all text-[0.85rem] sm:text-base">
            jsuserwork20@gmail.com
          </span>
        </li>
      </ul>

      {/* 하단 테두리 장식 */}
      <div className="relative w-full h-2 mt-6 border-t border-green-500 pt-2">
        {/* 배경 트랙 */}
        <div className="absolute top-0 left-0 w-full h-full bg-green-200 dark:bg-green-900/30 rounded-sm" />

        {/* 게이지 바 */}
        <div className="absolute top-0 left-0 h-full bg-green-500 dark:bg-green-400 rounded-sm animate-gauge z-10 shadow-[0_0_4px_#33ff99]" />

        {/* 도트 or 포인트 */}
        <span className="absolute right-1 bottom-0 w-1 h-1 bg-green-400 dark:bg-green-300 shadow-[0_0_2px_#33ff99]" />
      </div>
    </div>
  );
}