/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                'black-70': 'var(--black-70)',
                'black-10': 'var(--black-10)',
                'white-60': 'var(--white-60)',
                'white-87': 'var(--white-87)',
                warning: 'var(--warning)',
                active: 'var(--active)',
            },
            screens: {
                fullHd: '1920px',
            },
        },
    },
    plugins: [],
}
