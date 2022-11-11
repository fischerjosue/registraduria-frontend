/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "sans-serif"],
        publicsans: ['"Public Sans"', "sans-serif"],
        poppins: ["poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
