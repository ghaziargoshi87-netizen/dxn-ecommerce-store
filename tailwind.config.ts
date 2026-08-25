import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#10b981", // سبز طبیعی
        secondary: "#8b5a3c", // قهوه‌ای
        accent: "#f59e0b", // طلایی
      },
    },
  },
  plugins: [],
};
export default config;
