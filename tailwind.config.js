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
      gray: "#f6f6f6",
      darkGray: "#2b2b29",
      black: "#000",
      blue: "#1a0dab",
      white: "#fff",
    },
    extend: {},
  },
  plugins: ["tailwindcss-react-native/babel"],
};
