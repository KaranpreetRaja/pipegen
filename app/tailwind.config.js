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
        'file-upload-modal': '700px',
        'files-section': '450px'
      },
    },
  },
  plugins: [],
}

