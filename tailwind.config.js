/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dot: ['var(--font-press-start)', 'monospace'],
      },
      keyframes: {
        gauge: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        }
      },
      animation: {
        gauge: 'gauge 4s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
      boxShadow: {
        'crt-glow': '0 0 6px #33ff99',
      },
    },
  },
  plugins: [],
}