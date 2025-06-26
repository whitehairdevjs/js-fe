import "./globals.css";
import { Press_Start_2P } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider"; // 추가!

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
      <body className={`${pressStart.variable} font-dot`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}