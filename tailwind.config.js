/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EEEEEE",
      },
    },
    fontFamily: {
      serif: ["Noto Serif JP"],
      copyright: ["Sawarabi Mincho"],
    },
  },
  plugins: [],
};
