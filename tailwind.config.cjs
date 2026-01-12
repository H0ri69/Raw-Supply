/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                raw: {
                    black: '#111111',
                    gray: '#F4F4F4',
                    accent: '#333333'
                }
            }
        },
    },
    plugins: [],
}
