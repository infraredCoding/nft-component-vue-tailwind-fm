module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'mobile': '375px',
        'desktop': '1440px'
      },
      colors: {
        'softBlue': '#8bacda',
        'cyan': '#00fff7',
        'line': '#2f415b',

        'bg': {
          'main': '#0d192b',
          'card': '#14253d'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
