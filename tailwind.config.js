/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        goodShip: {
          '0%': { transform: 'translateX(0) translateY(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateX(-100vw) translateY(0)', opacity: '0' },
        },
        evilShip: {
          '0%': { transform: 'translateX(0) translateY(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateX(100vw) translateY(0)', opacity: '0' },
        },
        explode: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '50%': { transform: 'scale(2)', opacity: '0.8' },
          '100%': { transform: 'scale(3)', opacity: '0' },
        },
      },
      animation: {
        'goodShip': 'goodShip linear infinite',
        'evilShip': 'evilShip linear infinite',
        'explode': 'explode ease-out infinite',
      },
    },
  },
  plugins: [],
};
