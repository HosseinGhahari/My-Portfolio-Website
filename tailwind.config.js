/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily : {
      YekanBakhMedium : ['YekanBakhMedium' , "sans-serif"],
      YekanBakhBold : ['YekanBakhBold' , "sans-serif"],
      PoppinsMedium : ['PoppinsMedium' , "sans-serif"],
      PoppinsSemiBold : ['PoppinsSemiBold' , "sans-serif"]
    },
    extend: {
      colors :{
        "mycolor-background" : "#FCFCFC",
        "mymain-textcolor" : "#2D4356",
        "mysecondary-textcolor" : "#9F9F9F",
        "mycolor-primary" : "#3267E3",
        "mycolor-secondary" : "#00AE59",
        "mycolor-light-secondary" : "#99D5BD",
        "mycolor-light-background" : "#F9F9F9",
      }
    },
    container : {
      center : true,
      padding : {
        DEFAULT : '20px',
        md : "164px"
        
      }
    }
  },
  plugins: [],
}

