import "./globals.css";
import { Press_Start_2P } from "next/font/google";

// Google Fonts 도트 스타일 폰트 로드
const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-press-start",
});

export const metadata = {
  title: "🐖JS WORLD🐖",
  description: "Press Start!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${pressStart.variable} font-dot bg-black text-green-400 dark:bg-white dark:text-black`}>
        {children}
      </body>
    </html>
  );
}