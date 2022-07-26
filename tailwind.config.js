const generateSpacing = () => {
  const spacings = []
  for (let i = 0; i < 32; i += 1) {
    spacings.push(i)
  }
  for (let i = 32; i < 64; i += 2) {
    spacings.push(i)
  }
  for (let i = 64; i <= 128; i += 4) {
    spacings.push(i)
  }
  const spacingObj = {}
  spacings.forEach((i) => {
    spacingObj[i] = `${i / 10}rem`
  })
  return spacingObj
}

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Helvetica Neue', 'sans-serif'],
    },
    fontWeight: {
      400: '400',
      500: '500',
      700: '700',
    },
    spacing: {
      0: '0px',
      10: '1rem',
    },
    colors: {
      lightBlue: '#64B5F6',
      black: '#000',
      white: '#FFF',
      'orange-100': '#F44D2E',
      'blue-100': '#022B3C',
      'green-100': '#03505C',
      'green-90': '#035966',
      'green-50': '#AAF2C6',
      'black-100': '#000',
      'black-70p': 'rgba(0, 0, 0, 0.7)',
      'black-70': '#4D4D4D',
      'black-50': '#808080',
      'black-20': '#CCCCCC',
      'black-10': '#EEEEEE',
      'black-5': '#f2f2f2',
      'red-100': '#F42E2E',
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      xxl: '1780px',
    },
    extend: {
      spacing: {
        ...generateSpacing(),
      },
      width: {
        '3/8': '37.5%',
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.default-grid': {
          // grid grid-cols-4 md:grid-cols-12 gap-x-16
          display: 'grid',
          'grid-template-columns': 'repeat(4, minmax(0, 1fr))',
          'column-gap': '2.4rem',
          '@screen md': {
            'grid-template-columns': 'repeat(8, minmax(0, 1fr))',
          },
          '@screen lg': {
            'grid-template-columns': 'repeat(12, minmax(0, 1fr))',
          },
        },
        '.container': {
          maxWidth: '100%',
          padding: '0 20px',
          '@screen md': {
            margin: '0 auto',
            padding: '0 70px',
          },
          '@screen xl': {
            maxWidth: '1134px',
            padding: '0',
          },
          '@screen xxl': {
            maxWidth: '1680px',
            padding: '0',
          },
        },
      })
    },
  ],
}
