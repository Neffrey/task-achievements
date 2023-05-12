import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        neffrey: {
          primary: "#00DDC6",
          secondary: "#4E74BF",
          accent: "#7A5FD9",
          neutral: "#f0f0f0",
          "base-100": "#222222",
          info: "#9AD3F8",
          success: "#88F3D8",
          warning: "#FFDB58",
          error: "#F73B60",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
} satisfies Config;
