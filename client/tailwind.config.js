/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    theme: {
        extend: {
            borderWidth: {
                'custom': '6px', // Define the custom border size
            }
        },
        screens: {
            'tab': '500px', // Define custom breakpoint for tablet
            'lap': '1100px',
            'tv': '1600px',
        },
    },
    plugins: [],
}