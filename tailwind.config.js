/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'tailwick-primary-dark': 'rgb(19 35 55)',
      'tailwick-background-dark': 'rgb(15 24 36)',
      'tailwick-background-light': 'rgb(241 245 249)',
      'tailwick-primary-light': 'rgb(255 255 255)',
      'tailwick-gray-text': 'rgb(200, 215, 233)',
      'tailwick-black-text': 'rgb(30, 41, 59)',
      'tailwick-white-text': 'rgb(226, 234, 243)',
      'tailwick-blue-text': 'rgb(37, 99, 235)',
      'rocker-background-light': '#f7f7ff',
      'rocker-primary-light': '#fff',
      'rocker-white-text': 'rgb(228, 229, 230)',
      'rocker-primary-dark': '#12181a',
      'rocker-background-dark': '#070d0e',
      'rocker-gray-text': 'rgb(0, 140, 255)',
      'rocker-black-text': '#32393f',
      primary: '#0747A6',
      tertiary: '#e6e9f0',
      textDarkest: '#172b4d',
      textDark: '#42526E',
      textMedium: '#5E6C84',
      textLight: '#8993a4',
      textLink: '#0052cc',
      textLogo: '#DEEBFF',

      backgroundDarkPrimary: '#0747A6',
      backgroundMedium: '#dfe1e6',
      backgroundLight: '#ebecf0',
      backgroundLightest: '#F4F5F7',
      backgroundLightPrimary: '#D2E5FE',
      backgroundLightSuccess: '#E4FCEF',

      borderLightest: '#dfe1e6',
      borderLight: '#C1C7D0',
      borderInputFocus: '#4c9aff'

    },
    boxShadow: {
      'rocker-sm': '0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%)',
      'tailwick-sm': '0 0 #000, 0 0 #000, 0 4px 6px -1px #e2e8f0 , 0 2px 4px -2px #e2e8f0'
    },
    borderRadius: {
      sm: '2px',
      'rocker-sm': '10px',
      'tailwick-sm': '0.375rem'
    },
    fontFamily: {
      'rocker': ['Roboto', 'sans-serif'],
      'tailwick': ['Public Sans', 'sans-serif']
    },
    fontSize: {
      xs: '0.75rem',
      13: '0.8125rem',
      sm: '0.875rem',
      15: '0.9375rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      btn: '14.5px', //added
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem'
    },  
    extend: {},
  },
  plugins: [],
}

