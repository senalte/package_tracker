/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "hero-pattern":
                    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><defs><pattern id='doodad' width='58' height='58' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(35)'><rect width='100%' height='100%' fill='rgba(247, 250, 252,1)'/><circle cx='20' cy='20' r='1' fill='rgba(39, 103, 73,1)'/><circle cx='24' cy='20' r='3' fill='rgba(198, 246, 213,1)'/><circle cx='-16' cy='20' r='3' fill='rgba(198, 246, 213,1)'/><circle cx='16' cy='20' r='3' fill='rgba(198, 246, 213,1)'/><circle cx='-24' cy='20' r='3' fill='rgba(198, 246, 213,1)'/></pattern></defs><rect fill='url(%23doodad)' width='100%' height='100%'/></svg>\")"
            }
        }
    },
    plugins: []
};
