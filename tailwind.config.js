/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  theme: {
    extend: {
      colors: {
        mainDark: '#283044',
        secondBg: '#F7F7F7',
      }
    },
  },
  plugins: [],
}

