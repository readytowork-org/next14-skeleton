/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      screens: {
        xs: "390px",
        md: "768px",
        lg: "1025px",
      },
      fontFamily: {
        sans: ["Hiragino Sans"],
      },
      fontSize: {
        "title-1": ["30px", "auto"],
        "title-2": ["24px", "auto"],
        "body-1": ["20px", "auto"],
        "body-2": ["18px", "auto"],
        "body-3": ["16px", "auto"],
        "small-1": ["14px", "auto"],
        "small-2": ["12px", "auto"],
      },
      backgroundImage: {
        "accent-gradient":
          "linear-gradient(169.34deg, #F8B133 3.15%, #E5332A 111.43%)",
        "primary-gradient":
          "linear-gradient(169.34deg, #F8B133 3.15%, #E5332A 111.43%)",
        "blue-sky-gradient": "linear-gradient(90deg, #0465BF 0%, #0ED7FF 100%)",
      },
      colors: {
        primary: "#0068B5",
        orange: "#F7703C",
        button: "#0958A2",
        "primary-text": "#07103F",
        "black-text": "#333333",
        "secondary-text": "#606162",
        "placeholder-text": "#666666B2",
        "link-text": "#02257C",
        "light-blue": "#E8F4FF",
        "soft-sand-bg": "#EEE9DF",
      },

      boxShadow: {
        successCardShadow:
          "0px 7px 15px 0px #0000001A, 0px 26px 26px 0px #00000017, 0px 59px 36px 0px #0000000D, 0px 106px 42px 0px #00000003, 0px 165px 46px 0px #00000000;",
      },
      borderColor: {
        "gradient-border":
          "linear-gradient(169.34deg, #F8B133 3.15%, #E5332A 111.43%)",
      },
    },
    plugins: [],
  },
};
