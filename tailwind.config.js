/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        choco: { "base": "#482c21", dark: "#261813", milk: "#633E2F" },
        rosy: "#a73e2b",
        mustard: "#d07e0e",
        cream: "#e9deb0",
        avocado: "#2f615e",
      },
    },
  },
  plugins: [],
};
