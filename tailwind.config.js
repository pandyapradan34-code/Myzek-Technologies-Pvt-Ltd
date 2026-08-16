/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'myzek-primary': '#0B1B2B',
        'myzek-accent-blue': '#1E6FD9',
        'myzek-accent-orange': '#E8873A',
        'myzek-muted': '#6B7280',
      },
      fontFamily: {
        'saira': ['"Saira Semi Condensed"', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
