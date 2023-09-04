/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors:{
      effect: "rgba(226, 0, 0, 0.7)",
      text: "white",
      course: "#fff3f3"
    },
    extend: {
      backgroundImage: {
        "hero-section":
          "linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)),url('images/school.jpeg')",
          "cta": "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('images/banner2.jpg')"
      },
      width: {
        'hero': "90%"
      },
      margin:{
        'row': "5%"
      },
      flex:{
        size: "32%", 
        course: "31%"
      },
      minHeight: {
        92: "91.9vh",
      },
      boxShadow: {
        course: "0 0 20px 0px rgba(0, 0, 0, 0.2)"
      },
  },
},
  plugins: [],
};
