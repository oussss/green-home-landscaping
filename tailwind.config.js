/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
        'display': ['Space Grotesk', 'sans-serif'],
        'heading': ['Space Grotesk', 'sans-serif'],
        'body': ['DM Sans', 'sans-serif'],
        'nav': ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: '#1A1A1A',
        secondary: '#333333',
        accent: '#ffb3ba',
        light: '#F8F9FA',
      },
      spacing: {
        '11': '2.75rem',
        '15': '3.75rem',
      },
      scale: {
        '103': '1.03',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
      backdropBlur: {
        'md': '12px',
      },
      letterSpacing: {
        'tighter': '-0.02em',
        'tight': '-0.01em',
        'wide': '0.01em',
      },
    },
  },
  plugins: [],
};
