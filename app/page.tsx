"use client";

import { useEffect, useState } from "react";
import TabBar from "@/components/TabBar";
import TabContent from "@/components/TabContent";
import DarkModeToggle from "@/components/DarkModeToggle";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const PRESS_TEXT = "PRESS START";
const START_TEXT = "⚡ START JS WORLD";

export default function Home() {
  const [phase, setPhase] = useState<"idle" | "erasing" | "typing" | "started">("idle");
  const [pressText, setPressText] = useState(PRESS_TEXT);
  const [startText, setStartText] = useState("");

  const [activeTab, setActiveTab] = useState("main");

  useEffect(() => {
    const handleStart = () => {
      if (phase === "idle") {
        setPhase("erasing");
      }
    };
    window.addEventListener("keydown", handleStart);
    window.addEventListener("click", handleStart);
    return () => {
      window.removeEventListener("keydown", handleStart);
      window.removeEventListener("click", handleStart);
    };
  }, [phase]);

  useEffect(() => {
    if (phase === "erasing" && pressText.length > 0) {
      const timeout = setTimeout(() => {
        setPressText((prev) => prev.slice(0, -1));
      }, 40);
      return () => clearTimeout(timeout);
    } else if (phase === "erasing" && pressText.length === 0) {
      setPhase("typing");
    }
  }, [phase, pressText]);

  useEffect(() => {
    if (phase === "typing" && startText.length < START_TEXT.length) {
      const timeout = setTimeout(() => {
        setStartText((prev) => START_TEXT.slice(0, prev.length + 1));
      }, 40);
      return () => clearTimeout(timeout);
    } else if (phase === "typing" && startText.length === START_TEXT.length) {
      setTimeout(() => setPhase("started"), 500);
    }
  }, [phase, startText]);

  return (
    <>
      <AnimatePresence>
        {phase !== "started" && (
          <motion.div
            className="fixed inset-0 bg-black text-green-400 z-50 flex items-center justify-center font-dot text-1xl md:text-1xl lg:text-3xl crt"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
          >
            {phase === "idle" && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {pressText} ▌
              </motion.span>
            )}

            {phase === "erasing" && (
              <motion.span key="erasing" initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
                {pressText}
              </motion.span>
            )}

            {phase === "typing" && (
              <motion.span key="typing" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {startText}
              </motion.span>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {phase === "started" && (
        <div className="flex flex-col min-h-screen bg-white text-black dark:bg-black dark:text-green-300 transition-colors duration-300">
          <main className="flex-grow retro-background">
            <div className="max-w-8xl mx-auto p-8">
              <div className="flex justify-end mb-4">
                <DarkModeToggle />
              </div>

              {/* ⭐ 상태 기반 탭 컨트롤 */}
              <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
              <TabContent key={activeTab} tab={activeTab} />
            </div>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}