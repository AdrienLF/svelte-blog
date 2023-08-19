module.exports = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",,
  "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",],  
  
  theme: {
  extend: {colors : {
     // flowbite-svelte
     //primary: { 50: '#FFF5F2', 100: '#FFF1EE', 200: '#FFE4DE', 300: '#FFD5CC', 400: '#FFBCAD', 500: '#FE795D', 600: '#EF562F', 700: '#EB4F27', 800: '#CC4522', 900: '#A5371B'},
     // blue
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"},
        figma: {'audit-blue': '#03289E',
        'audit-error': '#E20036',
        'audit-green': '#00692A',
        'audit-sky': '#1782FF',
        'audit-purple': '#3D0FF3',
        'audit-bg-grey': '#F6F6F6',
        'base-black': '#000000',
        'base-white': '#FFFFFF',
        'grey-deep-dark': '#2B2B2B',
        'grey-dark': '#7E7E7E',
        'grey-default': '#C8C8C8',
        'grey-light': '#DFDFDF',
        'grey-ultra-light': '#F5F5F5',
        'primary-deep-dark': '#062088',
        'primary-dark': '#1942D1',
        'primary-default': '#3460F7',
        'primary-light': '#A1B4F9',
        'primary-ultra-light': '#DDE8FF',
        'secondary-deep-dark': '#665200',
        'secondary-dark': '#CEA502',
        'secondary-default': '#FFCC00',
        'secondary-light': '#FFE680',
        'secondary-ultra-light': '#FFF9DF',
        'success-deep-dark': '#092A24',
        'success-dark': '#115548',
        'success-default': '#1A7F6C',
        'success-light': '#6BE1CB',
        'success-ultra-light': '#D5F6F0',
        'alert-deep-dark': '#600618',
        'alert-dark': '#910824',
        'alert-default': '#F10E3B',
        'alert-light': '#F99FB1',
        'alert-ultra-light': '#FEE7EB',},
        secondary : {50: "#FEE7EB"}

  }},
 
},
plugins: [
],
}

