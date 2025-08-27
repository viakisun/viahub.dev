/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        golden: '#FFB800',
        cyan: '#00BCD4',
        'dark-bg-primary': '#0D1117',
        'dark-bg-secondary': '#161B22',
        'dark-text-primary': '#F0F6FC',
        'dark-text-secondary': '#7D8590',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
