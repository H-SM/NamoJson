/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#251601',
        'background': '#fef7ee',
        'primary': '#d19248',
        'secondary': '#acc4c7',
        'accent': '#eab25f',
        'text-dark': '#fef0dc',
        'background-dark': '#130b01',
        'primary-dark': '#b8772e',
        'secondary-dark': '#384f52',
        'accent-dark': '#9e6715',
       },
       fontFamily: { 
        inter: ["Inter", "sans-serif"]
       }
    },    
  },
  plugins: [],
}

