/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0A1F33',
          900: '#0D2740',
          800: '#12314F',
          700: '#1A4266',
        },
        brand: {
          600: '#1B6FB8',
          500: '#2C82CE',
          400: '#6FC3E8',
        },
        sun: {
          500: '#E8A33D',
          400: '#F0B85C',
        },
        ink: '#101820',
        slate: {
          DEFAULT: '#5B6B7A',
          light: '#8B98A5',
        },
        offwhite: '#F6F8FA',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
