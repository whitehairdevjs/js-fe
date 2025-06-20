"use client";
import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  speed?: number; // 글자 하나 출력에 걸리는 시간 (ms)
}

export default function TypingText({ text, speed = 100 }: TypingTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <h1 className="text-2xl md:text-3xl font-dot mb-6 whitespace-pre-wrap">
      {displayed}
      <span className="animate-pulse">▌</span>
    </h1>
  );
}