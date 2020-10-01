module.exports = {
  purge: ['src/**/*.js', 'src/**/*.jsx', 'public/**/*.html'],
  theme: {
    extend: {
      keyframes: {
        loading: {
          '100%': { transform: 'translate(200%)' },
        },
      },
      animation: {
        loading: 'loading 1s ease-in-out alternate infinite',
      },
    },
  },
  variants: {},
  plugins: [],
};
