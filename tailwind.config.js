/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#071225',
        muted: '#4b5568',
        primary: '#352fe8',
        accent: '#03a66a',
        canvas: '#f7f8fd',
      },
      boxShadow: {
        portrait: '0 26px 55px rgba(30, 41, 59, 0.25)',
        card: '0 1px 0 rgba(15, 23, 42, 0.02)',
      },
    },
  },
  plugins: [],
};
