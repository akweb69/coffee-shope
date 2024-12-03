/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bg11: "url('/src/assets/images/more/15.jpg')",
        bgFooter: "url('/src/assets/images/more/13.jpg')",
        bgBanner: "url('/src/assets/images/more/3.png')",
        bgAddCoffee: "url('/src/assets/images/more/11.png')",
        bgCardContainer: "url('/src/assets/images/more/1.png')",
      },
      fontFamily: {
        rancho: ("Rancho", "cursive"),
        poppins: ("Poppins", "sans-serif"),
      },
    },
  },
  plugins: [require("daisyui")],
};
