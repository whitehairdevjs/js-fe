import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const commands = [
  { prompt: "cd portfolio", delay: 0 },
  { prompt: "run intro", delay: 1000 },
  { prompt: "[system] Loading profile . . .", delay: 2200, isSystem: true },
];

export default function RetroConsole() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [typingLine, setTypingLine] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const blink = setInterval(() => setCursorVisible(v => !v), 500);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    if (currentIndex >= commands.length) return;

    const { prompt, delay } = commands[currentIndex];

    // const timeout = setTimeout(() => {
    //   let charIndex = 0;
    //   const interval = setInterval(() => {
    //     setTypingLine(prompt.slice(0, charIndex + 1));
    //     charIndex++;
    //     if (charIndex === prompt.length) {
    //       clearInterval(interval);
    //       setVisibleLines(lines => [...lines, prompt]);
    //       setTypingLine("");
    //       setCurrentIndex(idx => idx + 1);
    //     }
    //   }, 40);
    // }, delay);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div className="bg-black text-green-400 font-mono text-sm p-4 mt-6 rounded-md border border-green-700 shadow-[0_0_5px_#00ff99]">
      {visibleLines.map((line, i) => (
        <div key={i} className="mb-1">
          <span className="text-green-300">
            C:\\Users\\jskim{line.startsWith("[") ? "" : currentIndex > i ? ">" : ""}
          </span>{" "}
          {line}
        </div>
      ))}

      {typingLine && (
        <div>
          <span className="text-green-300">
            C:\\Users\\jskim{typingLine.startsWith("[") ? "" : ">"}
          </span>{" "}
          {typingLine}
          {cursorVisible && <span className="inline-block w-2 bg-green-400 ml-1 animate-pulse">&nbsp;</span>}
        </div>
      )}
    </div>
  );
}