/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/designs/Hero.png')",
        'sub-pattern': "url('/designs/Sub.png')",
        'wip-1': "url('/designs/wip-1.png')",
        'stage': "url('/designs/bg-stage.jpg')",
      }, 
      colors: {
        tenjusaiHero: '#F8ECD4',
        tenjusaiGreen: '#34B0A5',
        tenjusaiOrange: '#ED5347',
        tenjusaiBlue: '#3867A2'
      },
      screens: {
        'portrait': {'raw': '(orientation: portrait)'},
        'landscape': {'raw': '(orientation: landscape)'},
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            textStroke: '2px',
            textStrokeColor: theme('colors.black'),
          },
        },
      }),
    },
    animation: {
      "fade-in": "fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
      "fade-in-up": "fade-in-up 0.8s ease-out forwards",
      "fade-in-down": "fade-in-down 0.8s ease-out forwards",
      "fade-in-left": "fade-in-left 0.8s ease-out forwards",
      "fade-in-right": "fade-in-right 0.8s ease-out forwards",
      "underline-reveal": "underline-reveal 1s ease-in-out forwards",
    },
    keyframes: {
        "fade-in": {
            "0%": {
                opacity: "0"
            },
            to: {
                opacity: "1"
            }
        },
        "fade-in-up": {
          "0%": {
              opacity: "0",
              transform: "translateY(100%)"
          },
          to: {
              opacity: "1",
              transform: "translateY(0)"
          },
        },
        "fade-in-down": {
          "0%": {
              opacity: "0",
              transform: "translateY(-100%)"
          },
          to: {
              opacity: "1",
              transform: "translateY(0)"
          }, 
        },
        "fade-in-left": {
          "0%": {
              opacity: "0",
              transform: "translateX(-100%)"
          },
          to: {
              opacity: "1",
              transform: "translateX(0)"
          },
        },
        "fade-in-right": {
          "0%": {
              opacity: "0",
              transform: "translateX(100%)"
          },
          to: {
              opacity: "1", 
              transform: "translateX(0)"
          },
        },
        'underline-reveal': {
          '0%': { 'width': '0%' },
          '100%': { 'width': '100%' },
        },
    }
  },
  darkMode: "class",
  plugins: [
    nextui(),
    require('tailwind-scrollbar-hide'),
    function({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke-width': '1px',
          '-webkit-text-stroke-color': '#000',
        },
        '.text-stroke-white': {
          '-webkit-text-stroke-width': '0.5px',
          '-webkit-text-stroke-color': '#fff',
        },
        '.text-stroke-tenjusaiHero': {
          '-webkit-text-stroke-width': '1px',
          '-webkit-text-stroke-color': '#F8ECD4',
        },
      }

      addUtilities(newUtilities);
    },
  ],
}
