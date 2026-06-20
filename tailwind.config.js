/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        noir: '#08080a', // near-black backdrop
        coal: '#0e0e12', // panel
        slate2: '#16161c', // raised panel
        gold: '#c9a24b', // Continental gold
        gold2: '#e6c878', // bright gold
        teal: '#16e0cf', // neon teal
        crimson: '#e11d2e', // blood / action red
        bone: '#ece6d6', // warm white text
        ash: '#8b8a85', // muted text
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      boxShadow: {
        gold: '0 0 0 1px rgba(201,162,75,0.5), 0 10px 40px -10px rgba(201,162,75,0.25)',
        teal: '0 0 30px -6px rgba(22,224,207,0.45)',
        crimson: '0 0 30px -6px rgba(225,29,46,0.5)',
      },
      keyframes: {
        spincoin: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        flicker: {
          '0%,100%': { opacity: '1' },
          '92%': { opacity: '1' },
          '94%': { opacity: '0.55' },
          '96%': { opacity: '1' },
          '97%': { opacity: '0.7' },
        },
        rain: {
          '0%': { backgroundPosition: '0 0, 0 0' },
          '100%': { backgroundPosition: '0 700px, 0 900px' },
        },
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sweep: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(120%)' },
        },
      },
      animation: {
        spincoin: 'spincoin 6s linear infinite',
        flicker: 'flicker 5s linear infinite',
        rain: 'rain 0.9s linear infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        sweep: 'sweep 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
