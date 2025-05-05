/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  
    theme: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        roed: {
          25: "#F9C3C4",
          50: "#F38788",
          100: "#ED4C4D",
          200: "#E61011",
          300: "#F5F34F",
          400: "#F0BD1F",
          500: "#E0A512",
          600: "#C17F0D",
          700: "#9A5B0E",
          800: "#804813",
          900: "#6D3B16",
          950: "#3F1E09",
        },
    }
}
}