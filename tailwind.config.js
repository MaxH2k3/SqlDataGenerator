/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#212529',
        secondary: '#13c56b',
        thrid: '#878a99'
      },
      height: {
        mainContent: '700px',
        codePreview: '96%'
      },
      backgroundColor: {
        primary: '#ffffff',
        secondary: '#865ce2',
        third: '#50c3e6',
        fourth: '#f3f6f9'
      }
    }
  },
  plugins: []
}
