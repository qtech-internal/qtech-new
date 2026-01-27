import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'pp-neue': ['PP Neue Montreal', 'Inter', 'sans-serif'],
      },
      fontSize: {
        '60': '60px',
        '80': '80px',
<<<<<<< HEAD
        'hero': 'clamp(40px, 6vw, 70px)',
=======
        'hero': 'clamp(41px, 6vw, 70px)',
>>>>>>> 09ff300413203e0271401640dbdb5d3d3415655f
      },
      lineHeight: {
        '54': '54px',
        '84': '84px',
        'tight-hero': '1.05',
      },
      letterSpacing: {
        'tight-1': '-0.01em',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero': 'url(/hero.png)',
<<<<<<< HEAD
        'globe': 'url(/globe.png)',
=======
        'globe': 'url(/globe.gif)',
>>>>>>> 09ff300413203e0271401640dbdb5d3d3415655f
      },
      backgroundSize: {
        'contain': 'contain',
        'cover': 'cover',
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
<<<<<<< HEAD
=======
        'scroll': 'scroll 20s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
>>>>>>> 09ff300413203e0271401640dbdb5d3d3415655f
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
<<<<<<< HEAD
  plugins: [],
=======
   plugins: [
    function({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      })
    }
  ]
  
>>>>>>> 09ff300413203e0271401640dbdb5d3d3415655f
}
export default config