export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        primaryLight: '#60A5FA',
        primaryDark: '#1E40AF',
        secondary: '#10B981',
        accent: '#F59E0B',
        industrialGray: '#4B5563',
        lightGray: '#F3F4F6'
      },
      fontFamily: {
        sans: ["'Inter'", 'sans-serif']
      }
    }
  },
  plugins: []
};