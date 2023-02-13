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
      fontFamily: { theano: ['Theano Old Style'] },
      fontSize: { xs: '0.875rem', '2xs': '0.75rem' },
      colors: {
        'blue-rb-100': '#f4faff',
        'blue-rb-400': '#e4f2ff',
        'blue-rb-600': '#0080ff',
        'yellow-rb-200': '#faf8f4',
      },
    },
  },
  plugins: [],
};
