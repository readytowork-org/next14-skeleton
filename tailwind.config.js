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
        sans: ["Hiragino Kaku Gothic Pro", "sans-serif"],
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
        "custom-gradient-banner":
          "linear-gradient(140.27deg, rgba(7, 125, 193, 0.2) 22.64%, rgba(2, 37, 124, 0.2) 62.68%)",
        "blue-sky-gradient": "linear-gradient(90deg, #0465BF 0%, #0ED7FF 100%)",
      },
      colors: {
        primary: "#0671D5",
        pink: "#E3287F",
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
        "job-card-btn-section":
          "0px -1px 2px 0px #0000001A, 0px -3px 3px 0px #00000017, 0px -7px 4px 0px #0000000D, 0px -13px 5px 0px #00000003, 0px -21px 6px 0px #00000000",
        recommendJob: "4px 4px 4px 0px #00000014",

        blogCardShadow:
          "1px 4px 9px 0px #7297AC1A, 4px 17px 17px 0px #7297AC17,  8px 38px 23px 0px #7297AC0D, 23px 105px 30px 0px #7297AC00",
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
