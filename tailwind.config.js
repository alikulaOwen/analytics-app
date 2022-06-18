/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend:  {},
    colors: {
      'bwalaPrimary':  '#11b196',
'bwalaLight': 'hsla(170, 82%, 38%, 0.2)',
'backgroundGray': '#dedede',
'borderGray': '#e8e8e8',
'checkboxBorderColor': '#dadada',
'searchInputBgColor': '#f2f2f2',
'noDataColor': '#b3b3b3',
'white': '#ffffff',
'black': '#000000',
'menuItemsColor': 'rgba(0, 0, 0, 0.65)',
'title': '#212121',
'breadcrumbMain': '#666666',
'warning': '#eecf02',
'error': '#ee0202 !important',
'success': '#0bb61c',
'highlightedRow': 'rgba(11, 182, 28, 0.15)',
'errorHighlightedRow': 'rgba(238, 2, 2, 0.15)',
    }
  },
  plugins: [],
}
