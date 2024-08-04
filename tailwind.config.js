/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#f2f4f3',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),
    
  ],
}

