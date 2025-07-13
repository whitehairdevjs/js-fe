'use client';

import { useState, useRef } from 'react';

export default function HiddenButton() {
  const [clickCount, setClickCount] = useState(0);
  const resetTimer = useRef<NodeJS.Timeout | null>(null);

  const handleClick = () => {
    const nextCount = clickCount + 1;
    setClickCount(nextCount);

    if (nextCount === 5) {
        alert('로그인 페이지 구현 예정');
    }

    resetTimer.current = setTimeout(() => {
        setClickCount(0);
    }, 2000);
  };

  return (
    <div className="fixed top-2 left-2 flex items-center space-x-1 z-50">
        <button
            onClick={handleClick}
            className="fixed top-2 left-2 w-5 h-5 opacity-5 hover:opacity-40 transition-opacity z-50 cursor-default"
            aria-label="hidden-button"
        >
        </button> 

        {/* <span className="text-xs text-green-500 opacity-20 hover:opacity-70 transition-opacity select-none">
            {clickCount}
        </span> */}
    </div>
  );
}