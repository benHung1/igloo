/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        videoHeight: "calc(100vh - 48px)",
      },
      width: {
        cardWidth: "calc(100% / 4 - 8px)",
        mbCardWidth: "calc(100% / 2 - 16px)",
        topicCardWidth: "calc(100% / 2 - 4px)",
        mbFooterWidth: "calc(50% )",
        aboutWidth: "calc(33.33% - 4px)"
        
      },
      aspectRatio: {
        topicCard: ".77 / 1",
      },
      transitionProperty: {
        width: "100%",
      },
      scale: {
        topicImg: "1.15",
      },
    },
  },
  plugins: [],
};
