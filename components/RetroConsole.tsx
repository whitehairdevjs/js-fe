// components/RetroConsole.tsx
export default function RetroConsole() {
  return (
    <div className="bg-black text-green-400 font-mono text-sm p-4 mt-6 rounded-md border border-green-700 shadow-[0_0_5px_#00ff99]">
      <div className="mb-2">
        <span className="text-green-300">C:\\Users\\jskim&gt;</span> cd portfolio
      </div>
      <div className="mb-2">
        <span className="text-green-300">C:\\Users\\jskim\\portfolio&gt;</span> run intro
      </div>
      <div className="animate-pulse">
        <span className="text-green-300">[system]</span> Loading profile . . .
      </div>
    </div>
  );
}