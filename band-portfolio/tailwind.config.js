/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: {
      // Custom colors
      transparent: 'transparent',
      current: 'currentColor',
      // 'white': 'rgba(243 ,247 ,248 ,0.95)',
      // 'background': 'rgba(5, 19, 24, 0.95)',
      // 'primary': 'rgba(23,97,120,0.95)',
      // 'secondary': 'rgba(103, 131, 140, 0.95)',
      // 'accent': 'rgba(185, 208, 214, 0.95)',
      'white': 'rgba(243 ,247 ,248 ,0.95)',
      'background': 'rgba(5, 19, 24, 0.95)',
      'primary': 'rgba(23,97,120,0.95)',
      'secondary': 'rgba(103, 131, 140, 0.95)',
      'accent': 'rgba(185, 208, 214, 0.95)',
    }
  },
  plugins: [],
}

