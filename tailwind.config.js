/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "background-top" : "#FAF9FE",
        "nav-menu" : "#3936D5",
        "menu-arrow" : "#BCB0DD",
        "button-blue" : "#EAEAFF",
        "menu-hover" : "rgba(57, 54, 213, 0.05)",
      },
      height: {
        'top' : '24.125rem',
        '30' : '7.5rem',
        '33' : '8.25rem'
      },
      boxShadow: {
        'bar-dropdown': '2px 5px 20px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        '10px': '0.625rem',
        'half' : '33%',
        '5xl' : '2.5rem'
      },
      fontSize: {
        '2xxl' : '1.75rem',
      }
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover'],
    },
  },
  plugins: [],
}
