/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'honeydue-shade': '#fcfefc',
      },
      height: {
        'file-upload-modal': '550px',
        'files-section': '250px',
      },
      width: {
        'pipeline': '500px'
      }
    },
  },
  plugins: [],
}

