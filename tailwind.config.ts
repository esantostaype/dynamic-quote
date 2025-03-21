import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: "var(--accent-50)",
          100: "var(--accent-100)",
          200: "var(--accent-200)",
          300: "var(--accent-300)",
          400: "var(--accent-400)",
          500: "var(--accent-500)",
          600: "var(--accent-600)",
          700: "var(--accent-700)",
          800: "var(--accent-800)",
          900: "var(--accent-90)",
          950: "var(--accent-950)",
          DEFAULT: "var(--accent-500)",
        },
        background: "var(--background)",
        surface: "var(--surface)",
        border: "rgba(255,255,255,0.16)"
      },
      fontFamily: {
        ibm: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config