/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#f97316',
          pink: '#ec4899',
          violet: '#8b5cf6',
        },
      },
      backgroundImage: {
        // single source of truth for the brand gradient (orange -> pink -> violet)
        'brand-gradient': 'linear-gradient(90deg, #f97316 0%, #ec4899 55%, #8b5cf6 100%)',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
  },
}
