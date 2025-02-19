import localFont from "next/font/local";

const font = localFont({
  src: "./HiraKakuPro.woff",
  variable: "--font-hiragino",
  weight: "100 900",
});
export const HIRAGINO_SANS = {
  ...font,
  style: {
    fontFamily: '"Hiragino Kaku Gothic Pros", sans-serif',
  },
};
