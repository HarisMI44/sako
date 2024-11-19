import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    './components/**/*.{js,ts,jsx,tsx}',
    "./index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui]
}

