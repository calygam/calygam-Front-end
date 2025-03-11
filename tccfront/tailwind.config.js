/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
        jersey: ['Jersey 20', 'serif']
      },
      colors:{
        'red-clean-type':'#E62727',
        'red-button-send-feedback':'#C1121F',
        "trail-info-action":"#657ED4",
        
        "rank-achiviment-bronze-one-first":"#D58936",
        "rank-achiviment-bronze-one-second":"#A44200",
        'pending-leasson':'#4DD070',
         'second-pending-leasson':'#34A853',
         'send-response-question-1':'#4DD070',
         'send-response-question-2':'#34A853',
         'home-clean-yellow':"#FBBC05"
      },
      backgroundImage:{
        'dec-angle':'url("./src/assets/img/decAngle.png")',
        'mobile-login-desert':'url("./src/assets/img/mobile-login-desert.jpg")',
         'desktop-login-desert':'url("./src/assets/img/desktop-login-desert.jpg")',

      }
    },
  },

  plugins: [],
}

