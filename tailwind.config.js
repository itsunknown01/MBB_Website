/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    minHeight: {
      92: "91.9vh",
    },
    extend: {
      backgroundImage: {
        "hero-section":
          "linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)),url('images/school.jpeg')",
      },
      width: {
        'hero': "90%"
      },
  },
},
  plugins: [],
};
