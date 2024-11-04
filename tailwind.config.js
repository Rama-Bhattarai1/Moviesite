/** @type {import('tailwindcss').Config} */
module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
      primary:"#22d3ee",
      secondary:"#3f3f46",
      teritory:"#737373",
      // teritory:"#171717",
   black:"#171717",
    lightred:"#fca5a5",
    red:"#ef4444",
    ston:"#d6d3d1",
    lightblack:"#52525b",
    yellow:"#fbbf24",
    green:"#22c55e",
  //  ston:"#292524",
  ston:"#292524",
   stonlight:"#171717",
   stons:"#44403c",
    zinc:"#27272a"
    },
  },
  container:{
    center:"true",
    padding:{
      DEFAULT:'1rem',
      sm:'2rem',
      lg:'4rem',
      xl:'6.25rem',
    }
  }
},
  plugins: [ require('tailwind-scrollbar'),],
}