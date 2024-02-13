/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    height:{
      "haside":"calc(100vh - 68px)"
    }
  },
  plugins: [],
}

