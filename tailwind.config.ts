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
        'hero': 'clamp(40px, 6vw, 70px)',
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
        'globe': 'url(/globe.png)',
      },
      backgroundSize: {
        'contain': 'contain',
        'cover': 'cover',
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
export default config