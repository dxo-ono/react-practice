/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { useMediaQuery } from "react-responsive";
import KeyVisualImg from "../assets/images/KeyVisual.png";

// Emotionスタイル定義 左:タイトル
const catchMainStyle = css`
  text-shadow:
    0px 0px 24px #fff,
    0px 0px 24px #fff;
  -webkit-text-stroke-width: 1px;
  // -webkit-text-stroke-color: var(--Style-Text-White, #FFF);
  font-size: 52px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: 2.6px;
  color: var(--style-text-black, #434343);
`;

// catchBorderStyle(横向きグラデ)
const catchBorderStyle = css`
  background: var(
    --Gradient-Vivid,
    linear-gradient(
      90deg,
      var(--Master-Sub-Green, #aadcb9) 0%,
      var(--Master-Sub-Blue, #82bef0) 50%,
      var(--Master-Sub-Purple, #d2a5eb) 100%
    )
  );
  border-radius: 1px;
`;

// catchBorderStyleY(縦向きグラデ、768px以上)
const catchBorderStyleY = css`
  background: var(
    --Gradient-Vivid-y,
    linear-gradient(
      0deg,
      var(--Master-Sub-Green, #aadcb9) 0%,
      var(--Master-Sub-Blue, #82bef0) 50%,
      var(--Master-Sub-Purple, #d2a5eb) 100%
    )
  );
  border-radius: 1px;
`;

// Emotionスタイル定義 右:サブ
const catchSubStyle = css`
  text-shadow: "0px 0px 24px #FFF, 0px 0px 24px #FFF";
  -webkit-text-stroke-width: 0.1px;
  // -webkit-text-stroke-color: var(--Style-Text-White, #FFF);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: 0.8px;
  color: var(--style-text-black, #434343);
`;

// キービジュアル
const KeyVisual: React.FC = () => {
  const isMediumUp = useMediaQuery({ minWidth: 768 });
  return (
    <div
      className="flex justify-center items-center w-full aspect-[16/9] bg-cover bg-center"
      style={{
        height: "560px",
        backgroundImage: `linear-gradient(0deg, rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(${KeyVisualImg})`,
        backgroundColor: "lightgray",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center 40%",
      }}
    >
      <div className="flex flex-col md:flex-row justify-center items-center text-center gap-[12px] md:gap-[80px]">
        {/* キャッチコピー */}
        {/* 左:タイトル catchMain */}
        <div
          className="font-zen text-3xl md:text-4xl font-bold"
          css={catchMainStyle}
        >
          DXO Blog
        </div>
        {/* キャッチコピー間グラデ線・縦横切り替え */}
        <div
          className="w-[62px] h-[2px] md:w-[2px] md:h-[62px]"
          css={isMediumUp ? catchBorderStyleY : catchBorderStyle}
        ></div>
        {/* 右:サブ catchSub */}
        <div
          className="font-zen text-base md:text-lg text-left"
          css={catchSubStyle}
        >
          社員の声、会社の最新情報をお届けします。
          <br />
          DXOの「今」がわかるブログへようこそ。
        </div>
      </div>
    </div>
  );
};

export default KeyVisual;
