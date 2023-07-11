/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#0B666A',
          secondary: '#1C1C1C',
          bg: '#000000',
          font: '#FFFFFF',
          heading: '#FFFFFF',
          border: '#333333',
        },
        light: {
          primary: '#00B4D8',
          secondary: '#F0F0F0',
          font: '#000000',
          bg: '#FFFFFF',
          heading: '#000000',
          border: '#CCCCCC',
        },
      },
    },
  },
  plugins: [],
}

