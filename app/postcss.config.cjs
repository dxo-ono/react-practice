module.exports = {
  plugins: [
    require("@tailwindcss/postcss"), // Tailwind CSS v4用PostCSSプラグイン
    require("autoprefixer"), // ベンダープレフィックス自動生成プラグイン
    require("cssnano"), // ビルドファイルを圧縮プラグイン
  ],
};
