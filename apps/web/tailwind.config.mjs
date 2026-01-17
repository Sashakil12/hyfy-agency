/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#050505',
        charcoal: '#0F1210',
        lime: '#88FF66',
        amber: '#F2994A',
        slate: '#828282',
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        glass: '16px',
        'glass-lg': '24px',
      },
      boxShadow: {
        'glow-lime': '0px 0px 15px rgba(136, 255, 102, 0.4)',
        'glow-lime-intense': '0px 0px 25px rgba(136, 255, 102, 0.6)',
      },
      animation: {
        'breathing-pulse': 'breathing 3s ease-in-out infinite',
      },
      keyframes: {
        breathing: {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
