import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow': '#EDE735',
        'white':'#fff',
        'black':'#000',
        'gray': '#666666',
      },
      backgroundImage: {
        'fond': "url('/images/fond.jpg')",
      }
    },
  },
  plugins: [],
} satisfies Config;
