import { EB_Garamond } from 'next/font/google'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      // DEFAULT VALUES 
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#fc8c60',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },

    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        //COLORS DEFINED BY PATO BOTTOS FOR THIS PORTFOLIO
        //BACKGROUND
        'royal': '#63365c',
        'lime': '#376147',

        //HEADINGS
        'title-gray': '#e2e8f0',

        //ORDINARY TEXT
        'pale-lavender': '#9a8fa7',
        'light-blue': '#A3B4CC',

        //NAVBAR
        'slate-blue': '#6a7f99',

        //OTHERS
        'white': '#ffffff',
        'light-gray': '#b0b0b0',
        'cream': '#f5f5f5',
        'dusty-rose': '#c18896',
        'light-taupe': '#d4c2b5',
        'charcoal-gray': '#333333',
        'pills': '#565c58',
        'pills_bis': '#7f6794',
      },
      fontFamily: {
        serif: ['EB_Garamond', 'Alegreya', 'Merriweather', 'serif'],
        sans: ['Roboto', 'sans-serif'],
        libre: ['Libre Baskerville', 'serif'],
        merriweather: ['Merriweather', 'serif'],
        bodoni: ['Libre Bodoni', 'serif'],
        garamond: ['EB_Garamond', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
    variants: {
      extend: {
        scale: ["group-hover"]
      },
    },
  }
  ,
  plugins: [],
}
export default config