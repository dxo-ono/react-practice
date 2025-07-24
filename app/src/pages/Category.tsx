/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import News from "../components/News";
import Inteview from "../components/Interview";
import Buttons from "../components/Buttons";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

// 全体背景スタイル
const cardStyle = css`
  background: var(--Gradient-Soft);
`;

// アクティブなタブボタンのみに適用するEmotionスタイル
const tabActiveStyle = css`
  border-top: 2px solid #AADCB9;
  border-left: 2px solid #AADCB9;
  border-right: 2px solid #AADCB9;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.92) 0%,
      rgba(255, 255, 255, 0.92) 100%
    ),
    linear-gradient(
      90deg,
      #aadcb9 0%,
      #82bef0 50%,
      #d2a5eb 100%
    );
  box-shadow: 0px 0px 12px 0px rgba(187, 134, 134, 0.4);
`;


const Category: React.FC = () => {

  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get("tab") === "interview" ? "inteview" : "news";

  const [activeTab, setActiveTab] = useState<"news" | "inteview">(initialTab);

  return (
    <div className="flex flex-col items-center self-stretch gap-[40px] pt-[60px] sm:pt-[40px] md:px-[32px] lg:px-[40px] xl:px-[80px]">
    {/* パンくずリスト */}
    <div className=" hidden sm:flex w-full h-auto font-regular leading-tall tracking-[0.6px] text-xs text-[#434343]">
      TOP &gt; {activeTab === "news" ? "ニュース" : "インタビュー"}
    </div>
    <div
      className="flex flex-col items-center self-stretch rounded-[40px] pb-[60px]"
      css={cardStyle}
    >
      {/* タブ */}
      <div className="flex flex-row items-center gap-[4px] mb-[60px] sm:mb-[80px]">
          {/* ニュース */}
          <button
            className={`flex justify-center items-center gap-[10px] w-[160px] py-[9px] rounded-t-[16px] text-sm font-md tracking-wide font-zen transition-all ${
              activeTab === "news"
                ? "text-[#6B6B6B] font-bold"
                : "bg-[#9D9D9D] text-[#FFF]"
            }`}
            css={activeTab === "news" ? tabActiveStyle : undefined}
            onClick={() => setActiveTab("news")}
          >
            ニュース
          </button>

          {/* インタビュー */}
          <button
            className={`flex justify-center items-center gap-[10px] w-[160px] py-[9px] rounded-t-[16px] text-sm font-md tracking-wide font-zen transition-all ${
              activeTab === "inteview"
                ? "text-[#6B6B6B] font-bold"
                : "bg-[#9D9D9D] text-[#FFF]"
            }`}
            css={activeTab === "inteview" ? tabActiveStyle : undefined}
            onClick={() => setActiveTab("inteview")}
          >
            インタビュー
          </button>
      </div>
      {/* コンテンツ切り替え */}
      {activeTab === "news" ? <News /> : <Inteview />}
    </div>
      {/* TOPに戻る */}
      <Link to="/">
        <div className="flex w-[129px] items-center gap-[12px]">
          <div className="w-[6px] h-[12px] flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
              <path d="M7.5 1L1.5 7L7.5 13" stroke="#434343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className="text-base font-regular leading-tall text-[#434343] tracking-[0.6px]">TOPへもどる</div>
        </div>
      </Link>
    <Buttons />
    </div>
  );
};

export default Category;