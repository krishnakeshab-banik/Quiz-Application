/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['"Orbitron"', 'sans-serif'],
        'audiowide': ['"Audiowide"', 'sans-serif'],
        'calsans': ['"Cal Sans"', 'sans-serif'],
      },
      colors: {
        'neon-blue': '#00f3ff',
        'neon-red': '#ff0055',
        'neon-green': '#00ff66',
        'dark-bg': '#050718',
        'deep-blue': '#0a0b3b',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { 
            textShadow: '0 0 5px #00f3ff, 0 0 15px #00f3ff' 
          },
          '100%': { 
            textShadow: '0 0 10px #00f3ff, 0 0 30px #00f3ff' 
          },
        },
      },
      boxShadow: {
        'neon-blue': '0 0 5px #00f3ff, 0 0 15px #00f3ff',
        'neon-red': '0 0 5px #ff0055, 0 0 15px #ff0055',
        'neon-green': '0 0 5px #00ff66, 0 0 15px #00ff66',
      },
    },
  },
  plugins: [],
};