/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,js,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'infojobs-blue': '#167DB7',
        'infojobs-darkblue': '#1972a3',
        'infojobs-orange': '#ff6340',
        'infojobs-gray': '#999999',
        'infojobs-green': '#00a550',
        'infojobs-red': '#e93e40',
        'infojobs-yellow': '#f1c40f'
      },
      maxWidth: {
        'page-max-width': 'var(--page-max-width)'
      }
    }
  },
  plugins: []
}
