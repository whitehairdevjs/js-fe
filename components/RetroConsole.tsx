import { useEffect, useState } from "react";

const commands = [
  "init dev-environment --profile=fullstack",
  "verify toolchain --components=java,spring,db,cloud",
  "sync repository --target=origin/main",
  "build project --mode=production",
  "deploy pipeline --provider=jenkins",
  "[log] ✅ 테스트 자동화 완료",
  "[log] ✅ 배포 완료 to AWS EC2",
  "[system] 👨‍💻 JSKIM의 포트폴리오 시스템이 성공적으로 기동되었습니다",
  "[notice] 💡 개발자는 코드로 세상을 바꾼다. 이제 코딩을 한번 시작해볼까요?",
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

    const prompt = commands[currentIndex];
    let charIndex = 0;

    const interval = setInterval(() => {
      setTypingLine(prompt.slice(0, charIndex + 1));
      charIndex++;
      if (charIndex === prompt.length) {
        clearInterval(interval);
        setVisibleLines(lines => [...lines, prompt]);
        setTypingLine("");
        setCurrentIndex(idx => idx + 1);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="bg-neutral-100 dark:bg-black text-neutral-800 dark:text-green-400 font-mono text-sm p-4 mt-6 rounded-md border border-neutral-300 dark:border-green-700 shadow-md dark:shadow-[0_0_5px_#00ff99] transition-colors duration-300">
      {visibleLines.map((line, i) => (
        <div key={i} className="mb-1">
          <span className="text-green-600 dark:text-green-300">
            C:\\JSWorld{line.startsWith("[") ? "" : ">"}
          </span>{" "}
          {line}
        </div>
      ))}

      {typingLine && (
        <div>
          <span className="text-green-600 dark:text-green-300">
            C:\\JSWorld{typingLine.startsWith("[") ? "" : ">"}
          </span>{" "}
          {typingLine}
        </div>
      )}

      {!typingLine && currentIndex >= commands.length && (
        <div>
          <span className="text-green-600 dark:text-green-300">C:\JSWorld&gt;</span>
          {cursorVisible && (
            <span className="inline-block w-2 bg-green-400 ml-1">&nbsp;</span>
          )}
        </div>
      )}
    </div>
  );
}