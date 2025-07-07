/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import KeyVisualImg from "../assets/images/KeyVisual.png";

// Emotionスタイル定義 左:タイトル
const catchMainStyle = css`
        text-shadow: 0px 0px 24px #fff, 0px 0px 24px #fff;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: var(--Style-Text-White, #FFF);
        font-size: 52px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: 2.6px;
        color: var(--style-text-black, #434343);
    `;

// catchBorderStyle
const catchBorderStyle = css`
      transform: rotate(-90deg);
      background: var(--Gradient-Vivid, linear-gradient(90deg, var(--Master-Sub-Green, #AADCB9) 0%, var(--Master-Sub-Blue, #82BEF0) 50%, var(--Master-Sub-Purple, #D2A5EB) 100%));
      borderRadius: 1px;
`;

// Emotionスタイル定義 右:サブ
const catchSubStyle = css`
        text-shadow:  "0px 0px 24px #FFF, 0px 0px 24px #FFF";
        -webkit-text-stroke-width: 0.1px;
        -webkit-text-stroke-color: var(--Style-Text-White, #FFF);
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        letter-spacing: 0.8px;
        color: var(--style-text-black, #434343);
    `;



// キービジュアル
const KeyVisual: React.FC = () => (
  <div
    className="flex justify-center items-center"
    style={{
      height: "560px",
    //   padding: "0px 351px",
      background:
        `linear-gradient(0deg, rgba(255,255,255,0.90) 0%,
        rgba(255,255,255,0.90) 100%), url(${KeyVisualImg}) lightgray 0px -186.441px / 100% 192.857% no-repeat`,
    }}
  >
{/* キャッチコピー  Auto738 auto62 px-351 */}
{/* 左:タイトル catchMain */}
<div className="catch-copy flex justify-center items-center w-auto h-auto">
    <div className="mb-4">
      </div>
      <div  className="font-zen text-3xl md:text-4xl font-bold mb-2" css={catchMainStyle} >
        DXO Blog
        </div>

{/* キャッチコピー間グラデ線 */}
  <div
    className="border-catch w-[62px] h-[2px] mx-[40px] " css={catchBorderStyle}></div>

{/* 右:サブ catchSub  */}
      <div className="font-zen text-base md:text-lg" css={catchSubStyle} >
        社員の声、会社の最新情報をお届けします。<br />
        DXOの「今」がわかるブログへようこそ。
      </div>
    </div>
</div>
);

export default KeyVisual;