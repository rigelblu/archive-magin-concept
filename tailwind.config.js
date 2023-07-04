/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontSize: {
      '2xs': '0.75rem',
      xs: '0.875rem',
      sm: '1rem',
      base: '1.125rem',
      lg: '1.625rem',
      xl: '2rem',
      '2xl': '2.5rem',
      '3xl': '3rem',
      '4xl': '5.5rem',
      '5xl': '7rem',
    },

    extend: {
      animation: {
        fadeIn: 'fadeIn ease-in 1s',
        delayFadeIn: 'fadeIn ease-in 4s',
      },
      colors: {
        'blue-rb-100': '#f4faff',
        'blue-rb-400': '#e4f2ff',
        'blue-rb-600': '#0080ff',
        'yellow-rb-200': '#faf8f4',
      },
      fontFamily: { theano: ['Theano Old Style'] },
      fontSize: { xs: '0.875rem', '2xs': '0.75rem' },
      keyframes: {
        delayFadeIn: {
          '0%': { opacity: 0 },
          '6%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      screens: {
        // Desktop
        'sm-h': { raw: '(max-height: 480px)' },
        'md-h': { raw: '(max-height: 600px)' },
        'lg-h': { raw: '(max-height: 768px)' },
        'xl-h': { raw: '(max-height: 1024px)' },

        // iPhone
        'iphone-se': { raw: '(max-height: 667px)' },

        'iphone-11': { raw: '(max-height: 896px)' },
        'iphone-11-pro': { raw: '(max-height: 812px)' },
        'iphone-11-pro-max': { raw: '(max-height: 896px)' },

        'iphone-12': { raw: '(max-height: 844px)' },
        'iphone-12-pro': { raw: '(max-height: 926px)' },
        'iphone-12-mini': { raw: '(max-height: 780px)' },

        // iPad
        'ipad-mini': { raw: '(max-height: 1024x)' },
        'ipad-air': { raw: '(max-height: 1180px)' },
        'ipad-pro': { raw: '(max-height: 1366px)' },

        // Android
        'pixel-5': { raw: '(max-height: 851px)' },
        'galaxy-a': { raw: '(max-height: 914px)' },
        'galaxy-8plus': { raw: '(max-height: 740px)' },
        'galaxy-s20-ultra': { raw: '(max-height: 915px)' },
      },
    },
  },
  plugins: [],
};
