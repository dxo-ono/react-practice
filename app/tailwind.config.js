/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    // ブレイクポイント（mobile-firstアプローチ + max-width対応）
    screens: {
      xs: "320px",      // Extra small devices
      sp: "390px",      // Small phones
      sm: "640px",      // Small devices (tablets)
      md: "768px",      // Medium devices
      lg: "1024px",     // Large devices  
      xl: "1280px",     // Extra large devices
      "2xl": "1536px",  // 2X large devices
      
      // Max-width ブレイクポイント（必要に応じて使用）
      "max-xs": { max: "319px" },   // 〜320px未満
      "max-sp": { max: "389px" },   // 〜390px未満
      "max-sm": { max: "639px" },   // 〜640px未満
      "max-md": { max: "767px" },   // 〜768px未満
      "max-lg": { max: "1023px" },  // 〜1024px未満
      max800: { max: "800px" },     // 特別なケース用
    },
      // フォントファミリー
      fontFamily: {
        zen: ['"Zen Kaku Gothic New"', "sans-serif"],
      },

      // カラー（CSS変数）
      colors: {
        "style-text-black": "var(--style-text-black)",
        "style-text-white": "var(--style-text-white)",
        "style-text-gray": "var(--style-text-gray, #6B6B6B)",

        "style-object-lightgrey": "var(--style-object-lightgrey, #9D9D9D)",
        "style-object-silver": "var(--style-object-silver, #C4C4C4)",

        "color-black-900": "var(--color-black-900)",
        "color-white-900": "var(--color-white-900)",

        "master-sub-green": "var(--master-sub-green)",
        "master-sub-blue": "var(--master-sub-blue)",
        "master-sub-purple": "var(--master-sub-purple)",

        // グラデーション背景など（※直接ユーティリティには使えないのでstyleで補完）
        "gradient-white": "var(--gradient-white)",

        // 背景用の白
        "style-background-white": "#fff",
      },

      // Card背景色
      backgroundImage: {
        "gradient-vivid":
          "linear-gradient(90deg, var(--Master-Sub-Green) 0%, var(--Master-Sub-Blue) 50%, var(--Master-Sub-Purple) 100%)",
        "gradient-soft":
          "linear-gradient(0deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.92) 100%), linear-gradient(90deg, var(--Master-Sub-Green) 0%, var(--Master-Sub-Blue) 50%, var(--Master-Sub-Purple) 100%)",
      },

      // フォントウェイト（数値で指定）
      fontWeight: {
        regular: "400",
        md: "500",
        semibold: "600",
        bold: "700",
      },

      // フォントサイズ
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        regular: "1.25rem", // 20px
        md: "1.5rem", // 24px
        lg: "2rem", // 32px
        xxl: "2.5rem", // 40px
        xxxl: "3rem", // 48px
        "4xl": "3.25rem", // 52px
        "5xl": "3.75rem", // 60px
        "6xl": "5rem", // 80px
      },

      // 行間
      lineHeight: {
        short: "1",
        regular: "1.4",
        tall: "1.6",
      },

      // 文字間
      letterSpacing: {
        wide: "0.1em",
        md: "0em",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
