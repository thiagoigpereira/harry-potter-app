/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gryffindor: "#7B1E1E",
        slytherin: "#1B4D3E",
        hufflepuff: "#D4AF37",
        ravenclaw: "#2C2C54",
        parchment: "#FAF3E0",
        darkMagic: "#121212",
      },
      fontFamily: {
        harry: ["Cinzel", "serif"],
        body: ["Merriweather", "serif"],
      },
      boxShadow: {
        magic: "0 0 15px rgba(255, 223, 88, 0.8)",
      },
    },
  },
  plugins: [],
};

module.exports = config;
