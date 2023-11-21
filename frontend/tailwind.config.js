/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#101010",
        inputColor: "#1E1E1E",
      },
    },
  },
  plugins: [],
};
