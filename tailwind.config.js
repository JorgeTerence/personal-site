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
        choco: { base: "#482c21", dark: "#261813", milk: "#633E2F" },
        rosy: { base: "#a73e2b", bloom: "#C24627", shadow: "#872E1E" },
        mustard: { base: "#d07e0e", dijon: "#A66A16", "with-mayo": "#E09B2B" },
        cream: { base: "#e9deb0", vanilla: "#C2BB9B", chantilly: "#DBD4AF" },
        avocado: { base: "#2f615e", guaca: "#356E6A", mature: "#224745" },
      },
    },
  },
  plugins: [],
};
