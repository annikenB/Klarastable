/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  
    theme: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        gul: {
          25: "#FFFDF1",
          50: "#FCF8DE",
          100: "#FBF5C6",
          200: "#F9E88F",
          300: "#F5F34F",
          400: "#F0BD1F",
          500: "#E0A512",
          600: "#C17F0D",
          700: "#9A5B0E",
          800: "#804813",
          900: "#6D3B16",
          950: "#3F1E09",
        },

    },
    fontFamily: {
        sans: ["Manrope", "sans-serif"],
        display: ["Londrina solid", "monospace"],
      },
  
},
}

plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
