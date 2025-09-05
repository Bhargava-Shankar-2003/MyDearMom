// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust paths to your source files
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
