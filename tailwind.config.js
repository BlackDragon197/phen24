/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './config/*.json',
    './layout/*.liquid',
    './assets/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './templates/*.json',
    './templates/customers/*.liquid',
  ],
  theme: {
    fontFamily:{

    },
    maxWidth:{
      '1410': '1410px',
      '380': '380px',
      '740': '740px',
      'fit': 'fit-content'
    },
    minWidth:{
      '380': '380px',
      '740': '740px'
    },
    borderRadius:{
      'rounded-3': '3px',
      '20': '30px'
    },
    boxShadow:{
      "1": 'box-shadow: 0px 3.6213px 24.4438px rgba(0, 0, 0, 0.25);'
    },
    borderWidth:{
      '3': '3px'
    },
    extend: {
      skew: {
        '15': '15deg',
      },
      backgroundImage:{
        'heading-bg': 'linear-gradient(180deg, #EEEFF3 61.98%, rgba(238, 239, 243, 0) 100%);',
      }
      
    },
    screens: {
      'xs': '375px',
      'sm': '768px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1440px',
    },

  },
  plugins: [],
}
