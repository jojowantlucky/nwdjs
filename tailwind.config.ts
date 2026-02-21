import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e86c6c',
          hover:   '#e14040',
          light:   '#f6c4c4',
        },
        dark:         '#4a4a4a',
        muted:        '#9b9b9b',
        'light-gray': '#f4f4f4',
      },
      fontFamily: {
        sans:       ['Montserrat', 'sans-serif'],
        decorative: ['"Dancing Script"', 'cursive'],
        script:     ['"Shadows Into Light"', 'cursive'],
      },
      letterSpacing: {
        brand:      '3px',
        'brand-sm': '2px',
      },
    },
  },
  plugins: [],
}

export default config
