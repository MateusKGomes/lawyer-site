module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#000080",
          brown: "#654321",
        },
      },
      spacing: {
        18: "4.5rem",
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-in",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [require("@headlessui/react")],
};