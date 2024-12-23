/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      'tablet': '640px',
      'cel':{'max':'400px'}
    },
    colors:{
      black: '#013421',
      red:'#a83246'
    },
    extend: {
      colors:{
        'new-blue':'#243C5A',
      },
      spacing:{
        '50':'20rem'
      }
    },
  },
  plugins: [],
}