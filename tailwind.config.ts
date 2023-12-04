import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#ed931c',
        secondary: '#ae6200',
        primaryGrey: '#E5E5E5',
      },
      borderRadius:{
        '1rem': '1rem',
        '2rem': '2rem',
        '3rem': '3rem',
        '4rem': '4rem',
        '6rem': '6rem',
        '8rem': '8rem',
        '10rem': '10rem',
      },
      spacing:{
        '1rem': '1rem',
        '2rem': '2rem',
        '4rem': '4rem',
        '5rem': '5rem',
        '6rem': '6rem',
        '8rem': '8rem',
        '10rem': '10rem',
      }
    },
  },
  plugins: [],
}
export default config
