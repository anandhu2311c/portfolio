/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-purple': '#8b5cf6',
        'neon-blue': '#6366f1',
      },
    },
  },
  plugins: [],
};