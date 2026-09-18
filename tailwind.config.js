/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Neutral greys to match the charcoal in the logo
        gray: colors.neutral,
        // NookFM brand orange (logo #FF6407)
        primary: {
          50: '#fff5ed',
          100: '#ffe6d3',
          200: '#ffc8a3',
          300: '#ffa266',
          400: '#ff8033',
          500: '#ff6407',
          600: '#e65400',
          700: '#bf4400',
          800: '#983808',
          900: '#7a300c',
        },
        // NookFM charcoal (logo "FM" #181818)
        secondary: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#5f5f5f',
          600: '#454545',
          700: '#333333',
          800: '#242424',
          900: '#181818',
        },
        // Warm amber highlight
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // Deep burnt orange (replaces the old purple rotation colour)
        purple: {
          50: '#fdf3ef',
          100: '#fbe3d9',
          200: '#f5c2ae',
          300: '#ee9a7b',
          400: '#e5704a',
          500: '#d9531f',
          600: '#b84216',
          700: '#933515',
          800: '#772d17',
          900: '#622816',
        },
      },
    },
  },
  plugins: [],
}

