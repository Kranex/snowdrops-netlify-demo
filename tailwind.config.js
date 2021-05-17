module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
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
  plugins: [],
}
