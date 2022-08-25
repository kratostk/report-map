module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        GoogleSans: ["GoogleSans", "Kanit"], // default en
        Kanit: ["Kanit"], // target th charecters
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
  darkMode: "class",
};
