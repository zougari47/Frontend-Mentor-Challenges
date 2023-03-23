/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,tsx,js,jsx}', './index.html'],
  theme: {
    colors: {
      transparent: 'transparent',
      'light-cyan': 'hsl(193, 38%, 86%)',
      'neon-green': 'hsl(150, 100%, 66%)',
      'grayish-blue': 'hsl(217, 19%, 38%)',
      'dark-grayish-blue': 'hsl(217, 19%, 24%)',
      'dark-blue': 'hsl(218, 23%, 16%)',
      white: 'hsl(0,0%,100%)',
    },
    extend: {},
  },
  plugins: [],
}
