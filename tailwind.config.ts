import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";
import textStroke from "@designbycode/tailwindcss-text-stroke";
import themes from "daisyui/src/theming/themes";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, // Centers the container
        padding: '1rem', // Add padding if needed
        screens: {
          '2xl': '1280px', // Custom smaller width for extra-large screens
        },
      },
    },
  },
  plugins: [typography, daisyui, textStroke],
  daisyui: {
    themes: [
      {
        corporate: {
          ...themes["corporate"],
          // "background-color": "#ffffff",
          // "base-100": "#ffffff",
        }
      }
    ],
  }
} satisfies Config;
