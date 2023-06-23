/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/designs/Hero.png')",
        'wip-1': "url('/designs/wip-1.png')",
      },
      colors: {
        tenjusaiHero: '#F8ECD4',
        tenjusaiGreen: '#34B0A5'
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
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
