"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  text?: string;
  speed?: number;
  className?: string;
  showCursor?: boolean;
  onComplete?: () => void;
}

export default function TypingText({
  text = "",
  speed = 100,
  className = "",
  showCursor = true,
  onComplete,
}: TypingTextProps) {
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setIndex(0);
    setDone(false);
    if (!text) return;

    const interval = setInterval(() => {
      setIndex((prev) => {
        const next = prev + 1;
        if (next >= text.length) {
          clearInterval(interval);
          setDone(true); // ✅ 상태 업데이트
          setTimeout(() => onComplete?.(), 0);
        }
        return next;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  const visibleText = text.slice(0, index);
  const shouldShowCursor = !done || showCursor;

  return (
    <p className={`whitespace-pre-wrap font-dot ${className}`}>
      {visibleText}
      {shouldShowCursor && (
        <span className="animate-pulse text-[0.8em] leading-none align-baseline">
          ▌
        </span>
      )}
    </p>
  );
}