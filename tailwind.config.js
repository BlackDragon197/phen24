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
    backgroundPosition: {
      '70': '70%'
    },
    
    height:{
      '150': '150px'
    },
    width:{
      '150': '150px'
    },
    maxWidth:{
      '1410': '1410px',
      '380': '380px',
      '740': '740px',
      'fit': 'fit-content'
    },
    minHeight:{
      '300': '300px',
      '740': '740px'
    },
    minWidth:{
      '380': '380px',
      '740': '740px'
    },
    borderRadius:{
      'rounded-3': '3px',
      '20': '30px',
      '50': '50%'
    },
    boxShadow:{
      "1": 'box-shadow: 0px 3.6213px 24.4438px rgba(0, 0, 0, 0.25);'
    },
    borderWidth:{
      '2': '2px',
      '3': '3px',
      '5': '5px'
    },
    extend: {
      skew: {
        '15': '15deg',
      },
      backgroundImage:{
        'heading-bg': 'linear-gradient(180deg, #EEEFF3 61.98%, rgba(238, 239, 243, 0) 100%);',
        'violet-section-bg' :'linear-gradient(180deg, rgba(0, 0, 0, 0) 9.96%, #000000 40.44%);',
        'all-day': 'linear-gradient(180deg, #FF9900 0%, #EA552E 100%);',
        'all-night': 'linear-gradient(180deg, #26AAE0 0%, #693D90 64.06%);',
      },
      spacing:{
        'reviews': '75px'
      },
    },
    screens: {
      'xs': '375px',
      'sm': '768px',
      'md': '1024px',
      'lg': '1440px',
    },

  },
  plugins: [],
}
