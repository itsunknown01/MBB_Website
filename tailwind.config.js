/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    minHeight: {
      92: "91.9vh",
    },
    colors:{
      effect: "rgba(226, 0, 0, 0.7)",
      text: "white"
    },
    extend: {
      backgroundImage: {
        "hero-section":
          "linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)),url('images/school.jpeg')",
      },
      width: {
        'hero': "90%"
      },
      margin:{
        'row': "5%"
      },
      flex:{
        "size": "32%" 
      },
  },
},
  plugins: [],
};
