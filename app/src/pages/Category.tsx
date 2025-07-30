/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import News from "../components/News";
import Inteview from "../components/Interview";
import Buttons from "../components/Buttons";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

// 全体背景スタイル
const backgroundStyle = css`
  background: var(--Gradient-Soft);
`;

// activeタブボタンスタイル
const tabActiveStyle = css`
  position: relative;
  bottom: -2px;
  border-radius: 16px 16px 0 0;
  background: var(--Gradient-Soft, linear-gradient(0deg, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.92) 100%), linear-gradient(90deg, var(--Master-Sub-Green, #AADCB9) 0%, var(--Master-Sub-Blue, #82BEF0) 50%, var(--Master-Sub-Purple, #D2A5EB) 100%));
  box-shadow: 0 0 16px 0 rgba(187, 134, 134, 0.60);
  overflow: visible;
  z-index: -10;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -15;
    border-radius: 16px 16px 0 0;
    padding: 2px;
    background: var(--Gradient-Vivid);
    -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(to bottom, #fff 100%, transparent 100%);
    -webkit-mask-composite: in;
    mask-composite: exclude;
    pointer-events: none;
  }
  `;

// 非activeタブボタンスタイル（md以上）
const notActiveStyle = css`
    @media (min-width: 768px) {
    padding-bottom: 24px;
    color: var(--Style-Text-White, #FFF);
    border-radius: 16px 16px 0 0;
    opacity: 0.8;
    background: var(--Gradient-Vivid, linear-gradient(90deg, var(--Master-Sub-Green, #AADCB9) 0%, var(--Master-Sub-Blue, #82BEF0) 50%, var(--Master-Sub-Purple, #D2A5EB) 100%));
    border-top: none;
    border-left: none;
    border-right: none;
    }
`

const responsiveStyle = css`
    @media (min-width: 1440px) {
    padding: 40px 80px 80px 80px;
  }
`

const Category: React.FC = () => {

  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get("tab") === "interview" ? "inteview" : "news";

  const [activeTab, setActiveTab] = useState<"news" | "inteview">(initialTab);

  return (
    <div className="flex flex-col items-center self-stretch gap-[40px] pt-[60px] px-[0px] sm:pt-[40px] md:px-[32px] lg:px-[40px]" css={responsiveStyle}>
    {/* パンくずリスト */}
    <div className="hidden sm:flex w-full h-auto font-regular leading-tall tracking-[0.6px] text-xs ml-[40px] md:ml-0 text-[var(--style-text-black)]">
      TOP &gt; {activeTab === "news" ? "ニュース" : "インタビュー"}
    </div>
    {/* タブ～次へボタン */}
    <div className="flex flex-col justify-center items-center md:items-start ">
          {/* タブ */}
      <div className="max-w-[1280px] flex flex-row h-[60px] justify-end items-end gap-[12px] lg:gap-[20px] md:pl-[60px]">
          {/* ニュース */}
          <button
            className={`flex justify-center items-center gap-[10px] w-[160px] pt-[16px] pb-[18px] rounded-t-[16px] text-sm xl:text-regular font-md tracking-wide font-zen xl:w-[280px] xl:pt-[16px] xl:pb-[18px] xl:px-0 ${
              activeTab === "news"
                ? "text-[var(--style-text-gray)]"
                : "bg-[var(--style-object-lightgrey)] text-[var(--style-text-white)]"
            }`}
            css={activeTab === "news" ? tabActiveStyle : notActiveStyle}
            onClick={() => setActiveTab("news")}
          >
            ニュース
          </button>

          {/* インタビュー */}
          <button
            className={`flex justify-center items-center gap-[10px] w-[160px] py-[16px] rounded-t-[16px] text-sm xl:text-regular font-md leading-[1.4] xl:w-[280px] xl:pt-[16px] xl:pb-[16px] xl:px-0 ${
              activeTab === "inteview"
                ? "text-[var(--style-text-gray)]"
                : "bg-[var(--style-object-lightgrey)] text-[var(--style-text-white)]"
            }`}
            css={activeTab === "inteview" ? tabActiveStyle : notActiveStyle}
            onClick={() => setActiveTab("inteview")}
          >
            インタビュー
          </button>
      </div>
    {/* 全体背景色指定 */}
    <div
      className="flex flex-col items-center self-stretch rounded-[28px] xl:rounded-[40px] pb-[60px]"
      css={backgroundStyle}
    >

      {/* コンテンツ切り替え */}
      {activeTab === "news" ? <News /> : <Inteview />}
    </div>
    </div>
      {/* TOPに戻る */}
      <Link to="/">
        <div className="flex w-[129px] items-center gap-[12px]">
          <div className="w-[6px] h-[12px] flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
              <path d="M7.5 1L1.5 7L7.5 13" stroke="#434343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="text-base font-regular leading-tall text-[#434343] tracking-[0.6px]">TOPへもどる</div>
        </div>
      </Link>
    <div className="py-[80px]">
    <Buttons />
    </div>
    </div>
  );
};

export default Category;