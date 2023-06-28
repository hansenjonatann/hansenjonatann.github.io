/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#141b41",
        secondary: "#a5d8ff",
        accsent: "#eef2e6",
      },
    },
  },
  plugins: [],
};
