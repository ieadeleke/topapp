import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        dark: "var(--dark)",
        danger: "var(--danger)",
        buttonBg: "var(--buttonBg)",
        offWhite: "var(--offWhite)"
      },
      fontFamily: {
        camptonsemi: "Campton Semi-Bold",
        campton: "Campton Medium",
        camptonthin: "Campton Light",
        satoshi: "Satoshi Medium",
        satoshiregular: "Satoshi Regular",
        inter: "Inter",
        satoshibold: "Satoshi Bold",
        satoshilight: "Satoshi Light",
        clashDisplay: "ClashDisplay",
        ClashDisplayRegular: "ClashDisplay Regular",
        openSans: "Open Sans"
      },
      gridTemplateColumns: {
        "1/2": "1fr 2fr",
        "1.5/1": "1.5fr 1fr",
        "1/1.5": "1fr 1.5fr",
        "2/1": "2fr 1fr",
        "1/1.5/1.5": "1.5fr 3.5fr 1.5fr",
      },
      screens: {
        '3xl': "1600px",
        '4xl': "1800px"
      }
    },
  },
  plugins: [],
} satisfies Config;
