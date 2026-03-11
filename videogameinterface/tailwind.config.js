/** @type {import('tailwindcss').Config} */

module.exports = {
content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}"
],

theme: {
    extend: {

    keyframes: {
        scroll: {
        '0%': { transform: 'translateY(100%)' },
        '100%': { transform: 'translateY(-170%)' },
        },
    },

    animation: {
        scroll: 'scroll 60s linear infinite',
    },

    },
},

plugins: [
    function({ addUtilities }) {
    addUtilities({
        '.credits-scroll': {
        animation: 'scroll 60s linear infinite',
        },
    })
    }
],
};