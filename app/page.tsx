"use client";

import { useEffect, useState } from "react";
import TabBar from "@/components/TabBar";
import TabContent from "@/components/TabContent";
import DarkModeToggle from "@/components/DarkModeToggle";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [activeTab, setActiveTab] = useState("main");
  const [started, setStarted] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      if (!started) {
        setLeaving(true);
        setTimeout(() => setStarted(true), 800); // 애니메이션 후 전환
      }
    };
    window.addEventListener("keydown", handleStart);
    window.addEventListener("click", handleStart);
    return () => {
      window.removeEventListener("keydown", handleStart);
      window.removeEventListener("click", handleStart);
    };
  }, [started]);

  return (
    <>
      <AnimatePresence>
        {!started && (
          <motion.div className="fixed inset-0 min-h-screen h-screen bg-black z-50 crt">
            <div className="flex items-center justify-center w-full h-full crt-flicker crt-shake overflow-hidden">
              <motion.span
                initial={{ opacity: 1, scale: 1, rotate: 0 }}
                animate={leaving ? {
                  opacity: 0,
                  scale: 4,
                  rotate: 360,
                  y: -200,
                  x: 100
                } : {}}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="text-green-400 font-dot text-xl md:text-2xl animate-pulse"
              >
                PRESS START ▌
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {started && (
        <main className="relative min-h-screen p-6 bg-black text-green-400 dark:bg-white dark:text-black transition-colors">
          <div className="flex justify-end mb-4">
            <DarkModeToggle />
          </div>
          <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
          <TabContent key={activeTab} tab={activeTab} />
        </main>
      )}
    </>
  );
}
