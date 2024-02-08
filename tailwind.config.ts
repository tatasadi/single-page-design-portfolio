import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "galactic-blue": "hsla(252, 66%, 62%, 1)",
        "summer-yellow": "hsla(28, 89%, 67%, 1)",
        pink: "hsla(0, 78%, 79%, 1)",
        "light-red": "hsla(7, 77%, 66%, 1)",
        cyan: "hsla(172, 46%, 57%, 1)",
        "dark-purple": "hsla(314, 45%, 23%, 1)",
        "light-cream": "hsla(30, 100%, 97%, 1)",
        "medium-brown": "hsla(30, 5%, 45%, 1)",
        "off-white": "hsla(28, 100%, 97%, 1)",
        "darker-white": "hsla(0, 0%, 85%, 1)",
      },
    },
  },
  plugins: [],
}
export default config
