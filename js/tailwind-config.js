tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        fantasy: ['Patrick Hand', 'cursive'],
        titan: ['Titan One', 'cursive']
      },
      colors: {
        ginger: {
          100: '#FFF8E1',
          300: '#FFECB3',
          500: '#FFC107',
          600: '#FFB300',
          800: '#FF6F00',
          900: '#BF360C',
          950: '#451a03'
        },
        leaf: {
          500: '#4CAF50',
          700: '#2E7D32'
        }
      },
      boxShadow: {
        bento:
          '0 4px 20px -2px rgba(0, 0, 0, 0.1), 0 2px 10px -2px rgba(0, 0, 0, 0.05)'
      }
    }
  }
};
