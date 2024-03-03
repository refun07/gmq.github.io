/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#011F21",
        bluePrimary: "#020617",
        secondary: "#00AAAC",
        secondaryLight: "#22d1ee",
        text: "#444444",
        black: "#000",
        white: "#fff",
        error: "#ff6d39",
        grayCustom: "#F3F4F6",
        cream : "#FAEED1",
      },
    },
  },
  plugins: [],
};
