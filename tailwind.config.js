/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./src/pages/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"var(--primary)",
        "black":"var(--black)",
        "dark-gray":"var(--dark-gray)",
        "regular-gray":"var(--regular-gray)",
        "light-gray":"var(--light-gray)",
        "white":"var(--white)",
        "blue":"var(--blue)",
      },
    },
  },
  plugins: [],
}

