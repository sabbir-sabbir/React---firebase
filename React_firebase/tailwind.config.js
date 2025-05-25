/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        audiowide: ['"Audiowide"', "sans-serif"],
        stardos: ['"Stardos Stencil"', "sans-serif"],
        ubuntu: ['"Ubuntu"', "sans-serif"],
        nabla: ['"Nabla"', "sans-serif"],
        saira: ['"Saira Stencil One"', "sans-serif"],
        rubik: ['"Rubik"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
