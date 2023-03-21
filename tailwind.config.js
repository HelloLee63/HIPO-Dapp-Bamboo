/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "background-top" : "#FAF9FE",
        // "nav-menu" : "#3936D5",
        "nav-menu" : "#8065CB",
        "sub-gray" : "#8A97A6", 
        "menu-arrow" : "#BCB0DD",
        "button-blue" : "#F3F2FA",
        "menu-hover" : "rgba(57, 54, 213, 0.05)",
        "border-color-card" : "#F0EFFB",
        "button-tx-color" : "#8155FF",
        "selected-color" : "#F4F4FF",
        "token-font" : "#001835",
        "days-background" : "#7C79FF",
        "blue-light" : "#EAEAFF",
        "chain-badge-font" : "#9992C0",
        "tab-background" : "#EEEDFF",
        "reclaim-btn" : "#E4DBFF",
        "table-options" : "#DDDDED",
        "table-options-font" : "#1B1D21"
      },
      fontFamily: {
        "Montserrat" : "Montserrat",
        "Inter" : "Inter",
        "Poppins" : "Poppins",
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
        '3xxl' : '1.875rem',
        '5xl' : '2.5rem'
      },
      fontSize: {
        '2xxl' : '1.75rem',
        '3xxl' : '2rem',
      },
      borderWidth: {
        '1x' : '1.5px',
      }
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover'],
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ]
}
