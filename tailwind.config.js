/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        forvi: {
          navy: {
            950: '#000A18',
            900: '#001332',
            850: '#031B45',
            800: '#07234E',
            700: '#0D356F',
            600: '#14468F',
          },
          blue: {
            600: '#005ED6',
            500: '#027AF1',
            400: '#2892FA',
            300: '#67B4FC',
            200: '#A9D6FE',
            100: '#E0F0FE',
          },
          cyan: {
            500: '#059DFC',
            400: '#00BFFF',
            300: '#52D4FF',
            200: '#9CE6FF',
            100: '#E5F8FF',
          },
          dark: '#020C1F',
          surface: '#051636',
          card: '#081D45',
          border: 'rgba(2, 122, 241, 0.2)',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 20%, rgba(2, 122, 241, 0.18) 0%, rgba(5, 157, 252, 0.06) 40%, transparent 70%)',
        'grid-pattern': "radial-gradient(circle, rgba(2, 122, 241, 0.12) 1px, transparent 1px)",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(2, 122, 241, 0.25)',
        'glow-md': '0 0 25px -4px rgba(2, 122, 241, 0.35)',
        'glow-lg': '0 0 40px -6px rgba(5, 157, 252, 0.45)',
        'card-dark': '0 10px 30px -10px rgba(0, 8, 24, 0.7), 0 0 0 1px rgba(2, 122, 241, 0.15)',
        'card-hover': '0 20px 40px -12px rgba(2, 122, 241, 0.25), 0 0 0 1px rgba(5, 157, 252, 0.4)',
      },
    },
  },
  plugins: [],
}
