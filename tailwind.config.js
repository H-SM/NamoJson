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
       },
       fontFamily: { 
        inter: ["Inter", "sans-serif"]
       }
    },    
  },
  plugins: [],
}

