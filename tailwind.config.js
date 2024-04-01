/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#474747",
        green: "#18A401",
        greendark: "#27E707",
        red: "#B50000",
        reddark: "#E60505",
        body: "#fff",
        bodydark: "#1E1E1E",
        bg: "#F6F6F7",
        darkbg: "#121212",
        titlewhite: "#737373",
        titleblack: "#c4c4c4"
      },
    },
  },
  plugins: [],
};
