module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    aspectRatio: {
      'none': 0,
      '1/1': 1,
      '3/2': [3, 2],
      '2/3': [2, 3],
      '4/3': [4, 3],
      '3/4': [3, 4],
      '16/9': [16, 9],
      '9/16': [9, 16],
    },
    extend: {
      colors: {
        clear: '#00000000' 
      },
      height: {
        sm: '8rem',
        md: '16rem',
        lg: '24rem',
        xl: '48rem',
        '2xl': '64rem',
        '3xl': '120rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-aspect-ratio'),
  ],
}
