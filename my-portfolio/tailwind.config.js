/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',
        secondary: '#4b5563',
        accent: '#f59e42', // Added accent color
        background: '#f9f9fc', // Optional: background color
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        mono: ['Fira Mono', 'monospace'], // Added mono font
      },
      boxShadow: {
        'card': '0 4px 24px 0 rgba(30, 58, 138, 0.08)', // Custom card shadow
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
