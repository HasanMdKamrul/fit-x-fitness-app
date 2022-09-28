/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#aaf274",
        
"secondary": "#83efb0",
        
"accent": "#81c5ef",
        
"neutral": "#272541",
        
"base-100": "#34383D",
        
"info": "#72C3E3",
        
"success": "#19D27B",
        
"warning": "#CD8D04",
        
"error": "#F46143",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}