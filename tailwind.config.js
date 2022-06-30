module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    spacing: {
      0: '0px',
      10: '1rem',
    },
    colors: {
      lightBlue: '#64B5F6',
      black: '#000',
      white: '#FFF',
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      xxl: '1780px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          padding: '0 20px',
          '@screen md': {
            margin: '0 auto',
            padding: '0 70px',
          },
          '@screen xxl': {
            maxWidth: '1780px',
            padding: '0',
          },
        },
      })
    },
  ],
}
