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
        brandPurple: "#371f3b",
        brandLime: "#D2DD67",
        brandCream: "#FAFFCF",
        brandPink: "#F3E9FE",
      },
      fontFamily: {
        righteous: ["var(--font-righteous)"],
        roboto: ["var(--font-roboto)"],
        garamond: ["var(--font-garamond)"],
      },
      boxShadow: {
        btn: "2px 4px 0 0",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
