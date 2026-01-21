/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'chariah-orange': '#FF8C69',
        'chariah-burgundy': '#8B3E5E',
        'chariah-coral': '#FF7F50',
        'chariah-cream': '#FFF8DC',
      },
    },
  },
  plugins: [],
}
