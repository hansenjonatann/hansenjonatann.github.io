/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#191970",
        secondary: "#00bfff",
        accsent: "#c0c0c0",
      },
    },
  },
  plugins: [],
};
