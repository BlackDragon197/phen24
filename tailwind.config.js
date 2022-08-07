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
      '50': '50%',
      '10': '10px'
    },
    boxShadow:{
      "1": 'box-shadow: 0px 3.6213px 24.4438px rgba(0, 0, 0, 0.25);'
    },
    
    extend: {
      fontSize:{
        '2xs': '10px',
        '3xs': '7px',
      },
      flexGrow: {
        '2': 2
      },
      colors:{
        'br-orange' : 'rgb(255, 153, 0)',
        'br-blue': 'rgb(38, 170, 224)',
        'tx-violet': 'rgba(105, 61, 144, 1)'
      },
      borderWidth:{
        '2': '2px',
        '3': '3px',
        '5': '5px',
        '20rem': '20rem',
        '100': '100vw'
      },
      width:{
        '150': '150px',
        '1/3': '33%',
        '1/6': '16.6%'
      },
      height:{
        '150': '150px'
      },
      skew: {
        '15': '15deg',
      },
      backgroundImage:{
        'heading-bg': 'linear-gradient(180deg, #EEEFF3 61.98%, rgba(238, 239, 243, 0) 100%);',
        'violet-section-bg' :'linear-gradient(180deg, rgba(0, 0, 0, 0) 9.96%, #000000 40.44%);',
        'all-day': 'linear-gradient(180deg, #FF9900 0%, #EA552E 100%);',
        'all-night': 'linear-gradient(180deg, #26AAE0 0%, #693D90 64.06%);',
        'formula-day': 'linear-gradient(180deg, #EA552E 19.48%, #FF9900 78.45%);',
        'table-rect': 'linear-gradient(180deg, #FF9900 0%, #FD1111 100%);',
        'expect': 'linear-gradient(180deg, #FD1111 0%, #FF9900 100%);'
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
