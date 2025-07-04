import React from 'react';
import logoMark from "../assets/images/logo_mark1.png";


const Header: React.FC = () => {
  return (
    <header
      className="sticky top-0 z-50 shadow-[0_0_16px_0_rgba(0,0,0,0.15)]"
      style={{ background: "var(--color-white-900, #FFF)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* ロゴ＋キャッチコピー */}
        <div className="flex items-center gap-4">
          {/* ロゴ画像（仮） */}
          <img
            src={logoMark}
            alt="Logo"
            className="w-[49px] h-[50.271px] object-contain flex-shrink-0"
            style={{ aspectRatio: "49 / 50.271" }}
          />
          <div>
            <div className="text-sm text-gray-700 font-semibold">非常識を常識に</div>
            <div className="text-xs text-gray-500">Create a new common sense</div>
          </div>
        </div>
        {/* ナビゲーション＋ボタン */}
        <div className="flex items-center gap-6">
          <nav className="flex gap-6">
            <a href="#" className="text-gray-700 hover:text-black transition">会社情報</a>
            <a href="#" className="text-gray-700 hover:text-black transition">サービス</a>
          </nav>
          <a
            href="#"
            className="px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-teal-400 to-purple-400 hover:opacity-90 transition"
          >
            採用エントリー
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;