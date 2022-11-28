/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                headerBGI: "url('/heroBGcopy.jpg')",
                musicBGI: "url('/1479x1536px.jpg')",
            },
        },
    },
    plugins: [],
};
