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

    },
    boxShadow: {
      'rocker-sm': '0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%)',
      'tailwick-sm': '0 0 #000, 0 0 #000, 0 4px 6px -1px #e2e8f0 , 0 2px 4px -2px #e2e8f0'
    },
    borderRadius: {
      'rocker-sm': '10px',
      'tailwick-sm': '0.375rem'
    },
    extend: {},
  },
  plugins: [],
}

