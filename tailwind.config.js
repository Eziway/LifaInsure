/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lifa: {
          navy: '#0f2b5c',
          darkNavy: '#07152b',
          lightNavy: '#1a3d7c',
          gold: '#c5a059',
          goldLight: '#e2ca8d',
          red: '#d9231d',
          redDark: '#b51b16',
          bgLight: '#f8fafc',
          slate: '#475569',
          muted: '#64748b'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(15, 43, 92, 0.08)',
        'card': '0 10px 30px -5px rgba(15, 43, 92, 0.05), 0 4px 6px -2px rgba(15, 43, 92, 0.03)',
        'card-hover': '0 20px 40px -15px rgba(15, 43, 92, 0.15), 0 8px 12px -4px rgba(15, 43, 92, 0.08)',
        'cta': '0 10px 25px -5px rgba(217, 35, 29, 0.4)',
      }
    },
  },
  plugins: [],
}
