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
                'white-30': 'var(--white-30)',
                'white-20': 'var(--white-20)',
                'white-8': 'var(--white-8)',
                'white-7': 'var(--white-7)',
                warning: 'var(--warning)',
                active: 'var(--active)',
                'active-50': 'var(--active-50)',
            },
            screens: {
                fullHd: '1920px',
            },
        },
    },
    plugins: [],
}
