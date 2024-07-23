/** @type {import('tailwindcss').Config} */

const { Playfair_Display } = require('next/font/google');
const { fontFamily } = require("tailwindcss/defaultTheme");

// tailwind.config.js

module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode:"class",
	theme: {
		extend: {
			fontFamily: {
				play: ["var(--font-play)", ...fontFamily.sans],
			},
			colors: {
				dark: "#251010",
				light: "#f5f5f4",
				primary: "#440f0f", // 240,86,199
				primaryDark: "#58E4D9", // 80,230,217
			},
			animation: {
				'spin-slow': "spin 9s linear infinite",
			},
			backgroundImage: {
				circularLight: " repeating-radial-gradient( rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px)",
				circularDark: " repeating-radial-gradient( rgba(255,255,255,0.4) 2px, #1b1b1b 5px, #1b1b1b 100px)",
				circularLightLg: " repeating-radial-gradient( rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 80px)",
				circularDarkLg: " repeating-radial-gradient( rgba(255,255,255,0.4) 2px, #1b1b1b 5px, #1b1b1b 80px)",
				circularLightSm: " repeating-radial-gradient( rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 60px)",
				circularDarkSm: " repeating-radial-gradient( rgba(255,255,255,0.4) 2px, #1b1b1b 5px, #1b1b1b 60px)",
				circularLightXs: " repeating-radial-gradient( rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 40px)",
				circularDarkXs: " repeating-radial-gradient( rgba(255,255,255,0.4) 2px, #1b1b1b 5px, #1b1b1b 40px)"
			},
		},
		screens: {
			"2xl": { max: "1535px" },
			// => @media (max-width: 1535px) { ... }
		
			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }
		
			lg: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }
		
			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }
		
			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }
		
			xs: { max: "479px" },
			// => @media (max-width: 479px) { ... }
		},
	},
	plugins: [],
};
