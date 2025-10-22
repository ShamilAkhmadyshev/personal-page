/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        bubble: { '0%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-2px)' }, '100%': { transform: 'translateY(0)' } }
      },
      animation: { 'bubble-hover': 'bubble .6s ease-in-out' },
    },
  },
  plugins: [],
}
