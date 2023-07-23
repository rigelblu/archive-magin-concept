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
        'blue-rb-500': '#a7d9ff',
        'blue-rb-600': '#0080ff',
        'blue-rb-700': '#0054a8',
        'blue-rb-800': '#0e4f8f',
        'blue-rb-900': '#104070',
        'ivory-100': '#faf8f4',
        'ivory-200': '#f8f1e3',
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
        'sm-min-h': { raw: '(min-height: 480px)' },
        'md-min-h': { raw: '(min-height: 600px)' },
        'lg-min-h': { raw: '(min-height: 768px)' },
        'xl-min-h': { raw: '(min-height: 1024px)' },

        'sm-max-h': { raw: '(max-height: 480px)' },
        'md-max-h': { raw: '(max-height: 600px)' },
        'lg-max-h': { raw: '(max-height: 768px)' },
        'xl-max-h': { raw: '(max-height: 1024px)' },

        // FIXME: can't use min/max height due to nav/status bar ios and android devices
        // iPhone
        'iphone-se-min-h': { raw: '(min-height: 568px)' },
        'iphone-8-min-h': { raw: '(min-height: 667px)' },
        'iphone-8-plus-min-h': { raw: '(min-height: 736px)' },

        'iphone-se-max-h': { raw: '(max-height: 568px)' },
        'iphone-8-max-h': { raw: '(max-height: 667px)' },
        'iphone-8-plus-max-h': { raw: '(max-height: 736px)' },

        'iphone-11-min-h': { raw: '(min-height: 896px)' },
        'iphone-11-pro-min-h': { raw: '(min-height: 812px)' },
        'iphone-11-promax-min-h': { raw: '(min-height: 896px)' },

        'iphone-11-max-h': { raw: '(max-height: 896px)' },
        'iphone-11-pro-max-h': { raw: '(max-height: 812px)' },
        'iphone-11-promax-max-h': { raw: '(max-height: 896px)' },

        'iphone-12-min-h': { raw: '(min-height: 844px)' },
        'iphone-12-pro-min-h': { raw: '(min-height: 926px)' },
        'iphone-12-mini-min-h': { raw: '(min-height: 780px)' },

        'iphone-12-max-h': { raw: '(max-height: 844px)' },
        'iphone-12-pro-max-h': { raw: '(max-height: 926px)' },
        'iphone-12-mini-max-h': { raw: '(max-height: 780px)' },

        // iPad
        'ipad-mini-min-h': { raw: '(min-height: 768px)' },
        'ipad-pro-min-h': { raw: '(min-height: 834px)' },
        // ipad air is same as mini

        'ipad-mini-max-h': { raw: '(max-height: 768px)' },
        'ipad-pro-max-h': { raw: '(max-height: 834px)' },

        // Android
        'pixel-5-min-h': { raw: '(min-height: 851px)' },
        'galaxy-a-min-h': { raw: '(min-height: 914px)' },
        'galaxy-8plus-min-h': { raw: '(min-height: 740px)' },
        'galaxy-s20-ultra-min-h': { raw: '(min-height: 915px)' },

        'pixel-5-max-h': { raw: '(max-height: 851px)' },
        'galaxy-a-max-h': { raw: '(max-height: 914px)' },
        'galaxy-8plus-max-h': { raw: '(max-height: 740px)' },
        'galaxy-s20-ultra-max-h': { raw: '(max-height: 915px)' },
      },
    },
  },
  plugins: [],
};
