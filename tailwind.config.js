/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
        colors: {
          'text-default': '#676562',
          'text-hover': '#35332F',
          'text-selected': '#35332F',

          'button-background': '#EAE8E3'


        }
      },
  },
  plugins: [],
}

