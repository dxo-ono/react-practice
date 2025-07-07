/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from "@emotion/react";
import logoMark from "../assets/images/logo_mark1.png";

// logoTextStyle定義
const logoTextStyle = css`
  -webkit-text-stroke-width: 0;
`;

// buttonStyle定義
const buttonStyle = css`
  color: var(--Style-Text-White, #FFF);
  line-height: 160%;
  letter-spacing: 0.8px;
  height: 40px;
  padding: 5.5px 24px 6.5px 24px;
  background: var(--Gradient-Vivit, linear-gradient(90deg, var(--Master-Sub-Green, #AADCB9) 0%, var(--Master-Sub-Blue, #82BEF0) 50%, var(--Master-Sub-Purple, #D2A5EB) 100%));
`;


const Header: React.FC = () => {
  return (
    <header
      className="sticky top-0 z-50 shadow-[0_0_16px_0_rgba(0,0,0,0.15)]"
      style={{ background: "var(--color-white-900, #FFF)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* トップロゴ */}
        <div className="flex items-center gap-4">
        <a href ="トップページリンク">
          <img
            src={logoMark}
            alt="Logo"
            className="w-[49px] h-[50.271px] object-contain flex-shrink-0"
            style={{ aspectRatio: "49 / 50.271" }}
          />
          </a>
          <div>
            <div className="font-zen text-[14px] font-normal leading-[1.6] tracking-[0.7px]" css={logoTextStyle}
              style={{ color: "var(--Style-Text-Black, #434343)" }}>
              非常識を常識に
            </div>
          <div
            className="font-zen text-[12px] font-normal leading-[1.6] tracking-[0.6px]"
            style={{ color: "var(--Style-Text-Grey, #6B6B6B)" }}
          >
            Create a new common sense
          </div>
          </div>
        </div>
        {/* ナビゲーションメニュー */}
        <div className="flex items-center gap-6">
          <nav className="flex gap-6">
            <a
              href="ページリンク"
              className="font-zen text-[16px] font-normal leading-[1.6] tracking-[0.8px] transition"
              style={{ color: "var(--Style-Text-Black, #434343)" }}
            >
              会社情報
            </a>
            <a
              href="ページリンク"
              className="font-zen text-[16px] font-normal leading-[1.6] tracking-[0.8px] transition"
              style={{ color: "var(--Style-Text-Black, #434343)" }}
            >
              サービス
            </a>
          </nav>
            <a
              href="ページリンク"
              className="font-zen flex px-6 py-2 rounded-full text-[16px] font-medium items-center text-center bg-gradient-to-r hover:opacity-90 transition"
              css={buttonStyle}
            >
            採用エントリー
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;