module.exports = {
  content: [
    "./app.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/**/**/*.{js,jsx,ts,tsx}",
    "./components/**/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    colors: {
      primary: "#f8aa06",
      primaryShade: "#fef7e6",
      bg_gray: "#f6f6f6",
      black: "#000",
    },
    extend: {},
  },
  plugins: ["tailwindcss-react-native/babel"],
};
