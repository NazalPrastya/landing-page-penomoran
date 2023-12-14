/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mine: {
          font_paragraph: '#49506d',
          blue: '#005267',
          semu_green: '#bfcd8c',
          green: '#94ac3f',
          yellow: '#ffc800',
        },
      },
      container: {
        padding: '36px',
        center: true,
      },
    },
  },
  plugins: [],
};
