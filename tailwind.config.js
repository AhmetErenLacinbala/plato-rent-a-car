/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                scTitleOrange: "#eb840a",
                scDarkGray: "#202020",
            },
            fontFamily: {
                robotoSlab: ['"Roboto Slab"', 'serif'],
                inter: ['"Inter"', 'sans-serif'],
            },
            animation: {
                'animate': 'ease-in-out 0.5s', // Ease-in-out with 0.5s duration
            },
            lineClamp: {
                7: '7',
                8: '8',
                9: '9',
                10: '10',
                11: '11',
                12: '12',
                13: '13',
                14: '14',
                15: '15',
                16: '16',
                17: '17',
                18: '18',
                19: '19',
                20: '20',
            },
        },
    },
    plugins: [],
}
