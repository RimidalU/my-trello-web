/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            background: 'var(--background)',
            foreground: 'var(--foreground)',
            foregroundBold: 'var(--foreground-bold)',
            warning: 'var(--warning)',
            active: 'var(--active)',
        },
        screens: {
            fullHd: '1920px',
        },
    },
    plugins: [],
}
