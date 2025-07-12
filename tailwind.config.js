/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'display': ['Playfair Display', 'serif'],
                'body': ['Inter', 'sans-serif'],
            },
            colors: {
                'burgundy': {
                    50: '#fdf2f2',
                    100: '#fce7e7',
                    200: '#f9d3d3',
                    300: '#f4b3b3',
                    400: '#ec8585',
                    500: '#e25a5a',
                    600: '#d13a3a',
                    700: '#b02a2a',
                    800: '#8f2525',
                    900: '#752323',
                    950: 'rgb(63,10,10)',
                },
                'cream': '#f5f5f5',
            },
            backgroundImage: {
                headerBGI: "url('/heroBGcopy.jpg')",
                musicBGI: "url('/1479x1536px.jpg')",
                headShotBGI: "url('/headshot1536x1536px.jpg')",
                creditsBGI: "url('/2304x1000px.jpg')",
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-out',
                'fade-in-up': 'fadeInUp 0.8s ease-out',
                'slide-in-left': 'slideInLeft 0.8s ease-out',
                'slide-in-right': 'slideInRight 0.8s ease-out',
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    corePlugins: {
        aspectRatio: false,
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};
