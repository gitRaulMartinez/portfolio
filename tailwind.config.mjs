/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'selector',
	theme: {
    extend: {
      colors: {
        'dot-light': '#e2e8f0',
        'dot-dark': '#334155',
      },
      screens: {
        lg835: '835px',
      },
      fontSize: {
        xxs: '0.625rem',
      },
    },
  },
	plugins: [],
}
