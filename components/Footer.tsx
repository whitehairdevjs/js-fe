import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full mt-12 py-6 px-4 text-neutral-700 dark:text-green-300 text-sm sm:text-base bg-neutral-100 dark:bg-black/50 backdrop-blur-md border-t border-neutral-300 dark:border-green-500 shadow-inner shadow-neutral-300/20 dark:shadow-green-400/10 transition-colors duration-300">
      <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* 좌측 - 카피라이트 */}
        <div className="text-xs sm:text-sm text-neutral-500 dark:text-green-400/80">
          © 2025 JS Kim. All rights reserved.
        </div>

        {/* 우측 - 소셜 아이콘 */}
        <div className="flex gap-6 text-lg sm:text-xl">
          <a
            href="https://github.com/whitehairdevjs"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-black dark:hover:text-green-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/%EC%9E%AC%EC%84%B1-%EA%B9%80-337720371/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-black dark:hover:text-green-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/sorry_gim?igsh=MTllOGRvcTdldjBqbg=="
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-black dark:hover:text-green-400"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}