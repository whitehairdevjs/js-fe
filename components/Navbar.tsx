import { useState } from "react";
import { Menu, X } from "lucide-react"; // 햄버거/닫기 아이콘

interface NavbarProps {
  setTab: (tab: string) => void;
}

export default function Navbar({ setTab }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const navItems = ["main", "myinfo", "career"];

  return (
    <nav className="w-full px-4 py-3 flex items-center justify-between border-b border-green-500">
      <div className="font-bold text-green-400 text-xl">JS Portfolio</div>

      {/* PC 메뉴 */}
      <div className="hidden md:flex space-x-6 text-green-400 font-mono text-lg">
        {navItems.map((item) => (
          <button key={item} onClick={() => setTab(item)}>{item.toUpperCase()}</button>
        ))}
      </div>

      {/* 모바일 햄버거 */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)}>
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {open && (
        <div className="absolute top-14 right-4 bg-black border border-green-500 p-2 rounded-lg z-50">
          {navItems.map((item) => (
            <button key={item} onClick={() => {
              setTab(item);
              setOpen(false);
            }} className="block w-full text-left text-green-300 hover:underline">
              {item.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}