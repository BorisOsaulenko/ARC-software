/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      width: {
        '1/24': '4.2%',
        '2/24': '8.3%',
        '3/24': '12.5%',
        '4/24': '16.7%',
        '5/24': '20.8%',
        '6/24': '25%',
        '7/24': '29.2%',
        '8/24': '33.3%',
        '9/24': '37.5%',
        '10/24': '41.2%',
        '11/24': '45.8%',
        '12/24': '50%',
        '13/24': '54.2%',
        '14/24': '58.3%',
        '15/24': '62.5%',
        '16/24': '66.7%',
        '17/24': '70.8%',
        '18/24': '75%%',
        '19/24': '79.2%',
        '20/24': '83.3%',
        '21/24': '87.5%',
        '22/24': '91,7%',
        '23/24': '95.8%',
        '24/24': '100%'
      },
      colors: {
        'sidebarText': 'rgb(110,132,163)',
        'inputBackground': 'rgb(200,255,255)',
        'buttonPrimary': '#0d6efd;'
      },
      textColor: {
        'sidebarText': 'rgb(110,132,163)',
        'activeColor': '#232d4f'
      },
      borderWidth: {
        1: '1px',
        0.5: '0.5px',
      },
      margin: {
        top: {
          '15': '3.75rem'
        }
      }
    },
  },
  plugins: [],
}

