/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        slideout: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-500px)' },
        },
      },
      animation: {
        slideout: 'slideout 0.3s ease-out',
      },
    },
  },
  plugins: [],
};
