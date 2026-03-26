export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#B38E3F', // Golden Brown
        primaryLight: '#8B6B2F', // Darker golden for hover
        primaryDark: '#3D2616', // Deep Espresso
        secondary: '#9D9D9C', // Industrial Grey
        accent: '#B38E3F', // Same as primary for consistency
        industrialGray: '#9D9D9C',
        lightGray: '#F3F4F6',
        espresso: '#3D2616' // Deep Espresso
      },
      fontFamily: {
        sans: ["'Inter'", 'sans-serif']
      }
    }
  },
  plugins: []
};