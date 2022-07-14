const defaultTheme = require( 'tailwindcss/defaultTheme' )

module.exports = {
  content: [ 
    './src/**/*.{html,js}',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: [ '\'Chakra Petch\'', defaultTheme.fontFamily.sans ],
      mono: [ '\'Red Hat Mono\'', defaultTheme.fontFamily.mono ]
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
      
        black: {
          lighten: '#242320',
          DEFAULT: '#1a1916',
        },
        white: {
          lighten: '#e6e6e6',
          DEFAULT: '#e4e4e4',
          darken: '#cdcdcd',
          darkest: '#ababab'
        },
        placeholder: '#b2b2b2',
      
        safety: {
          DEFAULT: '#49a24c'
        },
        message: '#2563EB',
        danger: {
          DEFAULT: '#fd9726',
        },
      
        primary: {
          darkest: '#8c1313',
          darken: '#c41d1e',
          DEFAULT: '#d12525',
          lighten: '#d32625',
        },
      },
    },
  },
  
  plugins: [
    require( '@tailwindcss/forms' ),
    require( '@tailwindcss/line-clamp' ),
  ],
}