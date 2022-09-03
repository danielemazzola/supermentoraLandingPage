/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        beat: 'beat 0.2s ease-in',
        close: 'close 0.2s'
      },

      keyframes: {
        beat: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' }
        },
        close: {
          '100%': { transform: 'scale(1)' },
          '0%': { transform: 'scale(0)' }
        }

      }
    }
  },
  plugins: []
}
