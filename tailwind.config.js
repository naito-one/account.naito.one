const _ = require('lodash')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    transitionDurations: {
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      400: '400ms',
      1: '1s',
    },
    transitionProperties: {
      'transform': 'transform',
      'opacity': 'opacity',
      'padding': 'padding',
      'padding-top': 'padding-top',
      'border-color': 'border-color',
      'border-radius': 'border-radius',
      'background': 'background',
      'color': 'color',
    },
    colorVariations: {
      none: 0,
      2: 2,
      5: 5,
      10: 10,
    },
    extend: {
      colors: {
        'gray': {
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          850: '#2C2C2C',
          900: '#212121',
          1000: '#181818',
          darken: '#21212155',
        },
        'naito-pink': {
          100: '#DA91C9',
          200: '#BD62C5',
        },
        'naito-green': {
          100: '#459090',
          200: '#326562',
        },
        'naito-yellow': {
          100: '#fded86',
          200: '#fad65e',
        },
        'naito-blue': {
          100: '#4A90CF',
          200: '#45799E',
          300: '#3C6285',
        },
      },
      spacing: {
        112: '28rem',
        128: '32rem',
        144: '36rem',
      },
      fontFamily: {
        content: ['Raleway', 'sans-serif'],
        heading: ['Staatliches', 'sans-serif'],
      },
      borderWidth: {
        6: '6px',
      },
      lineHeight: {
        12: '3rem',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
    },
  },
  plugins: [
    /**
     * Transition plugin
     */
    function ({ addUtilities, addComponents, e, prefix, config }) {
      const utilities = _.map(
        config('theme.transitionProperties'),
        (propertyValue, propertyName) => {
          const out = {}

          _.forEach(
            config('theme.transitionDurations'),
            (durationValue, durationName) => {
              out[`.${e(`transition-${propertyName}`)}-${durationName}`] = {
                transition: `${propertyValue} ${durationValue} ease-in-out`,
              }
            }
          )

          return out
        }
      )

      addUtilities(utilities)
    },
    /**
     * Lighten & Darken utility
     */
    function ({ addUtilities, addComponents, e, prefix, config }) {
      const utilities = _.map(
        config('theme.colorVariations'),
        (variationValue, variationName) => {
          return {
            [`.${e(`lighten-${variationName}`)}`]: {
              filter: `brightness(${100 + variationValue}%)`,
            },
            [`.${e(`darken-${variationName}`)}`]: {
              filter: `brightness(${100 - variationValue}%)`,
            },
          }
        }
      )

      addUtilities(utilities, {
        variants: ['active', 'hover', 'dark'],
      })
    },
  ],
}
