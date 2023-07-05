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
        'sm-h': { raw: '(min-height: 480px)' },
        'md-h': { raw: '(min-height: 600px)' },
        'lg-h': { raw: '(min-height: 768px)' },
        'xl-h': { raw: '(min-height: 1024px)' },

        // iPhone
        'iphone-se': { raw: '(min-height: 568px)' },
        'iphone-8': { raw: '(min-height: 667px)' },
        'iphone-8-plus': { raw: '(min-height: 736px)' },

        'iphone-11': { raw: '(min-height: 896px)' },
        'iphone-11-pro': { raw: '(min-height: 812px)' },
        'iphone-11-pro-max': { raw: '(min-height: 896px)' },

        'iphone-12': { raw: '(min-height: 844px)' },
        'iphone-12-pro': { raw: '(min-height: 926px)' },
        'iphone-12-mini': { raw: '(min-height: 780px)' },

        // iPad
        'ipad-mini': { raw: '(min-height: 768px)' },
        'ipad-pro': { raw: '(min-height: 834px)' },
        // ipad air is same as mini

        // Android
        'pixel-5': { raw: '(min-height: 851px)' },
        'galaxy-a': { raw: '(min-height: 914px)' },
        'galaxy-8plus': { raw: '(min-height: 740px)' },
        'galaxy-s20-ultra': { raw: '(min-height: 915px)' },
      },
    },
  },
  plugins: [],
};
