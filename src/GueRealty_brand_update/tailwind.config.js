module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        // GUE Realty brand
        'brand-navy':  '#1A2B5E',
        'brand-green': '#1A7A3C',
        'brand-red':   '#CC2020',
        'brand-gold':  '#D4A017',
        primary: {
          50:  '#EDF0F7',
          100: '#C7D0E8',
          500: '#1A2B5E',
          600: '#0F1A3A',
          900: '#060D1C',
        },
        secondary: {
          500: '#1A7A3C',
          600: '#125A2C',
        },
        border: 'rgb(var(--border))',
      },
      fontFamily: {
        sans: ['Syne', 'Inter', 'Arial', 'Helvetica', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
