/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        gray100: '#f2f2f2',
        gray200: '#d9d9d9',
        gray300: '#808080',
        gray400: '#333333',
        gray500: '#262626',
        gray600: '#1a1a1a',
        gray700: '#0d0d0d',

        purple: '#8284fa',
        purpledark: '#5e60ce',

        blue: '#4ea8d3',
        bluedark: '#1e6f9f',

        danger: '#e25858',
      }
    },
  },
  plugins: [],
}

