/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#ffd787",
        
"secondary": "#18ad01",
        
"accent": "#a2d31b",
        
"neutral": "#19252E",
        
"base-100": "#F7F7F8",
        
"info": "#4491E4",
        
"success": "#5DEAA8",
        
"warning": "#EC8A13",
        
"error": "#E44E6C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
