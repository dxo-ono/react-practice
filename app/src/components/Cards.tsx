/** @jsxImportSource @emotion/react */
import React from "react";
import Card from "./Card";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import articleData from "../components/articleDataMap";
import interviewData from "../components/interviewDataMap";
import { ButtonHoverStyle } from "../styles/hoverStyles";


// グラデ
const gradientSoftBg = css`
  background: var(
    --Gradient-Soft,
    linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.92) 0%,
      rgba(255, 255, 255, 0.92) 100%
    ),
    linear-gradient(
      90deg,
      var(--Master-Sub-Green, #aadcb9) 0%,
      var(--Master-Sub-Blue, #82bef0) 50%,
      var(--Master-Sub-Purple, #d2a5eb) 100%
    )
  );
`;

// 最新4件
const latestArticles = [...articleData]
  .sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;
    return dateB - dateA;
  })
  .slice(0, 4);

const latestInterviews = [...interviewData]
  .sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;
    return dateB - dateA;
  })
  .slice(0, 4);


const Cards: React.FC = () => {
  return (
    <div className="font-zen w-full flex justify-center px-[0] sm:px-[60px]">
      {/* 全体を囲むOK */}
      <div
        className="max-w-[1280px] w-full px-[20px] sm:px-[60px] py-[60px] sm:py-[80px] rounded-[40px] flex flex-col sm:items-start"
        css={gradientSoftBg}
      >
        {/* ニュース全体OK */}
        <div className="scroll-mt-[100px] sm:w-full flex flex-col max-w-[1160px] gap-[40px] mx-auto items-center" id="news">
          {/* ニューステキストブロック */}
          <div className="w-full flex sm:justify-between items-center gap-[16px]"
                      css={css`
                            @media (min-width: 1440px) {
                            width: 100%;
                            justify-content: space-between;
                            gap: 0px;
                            }
                          `}
            >
            {/* グラデーション＋テキスト */}
            <div className="flex items-start gap-[16px] sm:gap-[20px]">
              {/* グラデーションバー */}
              <span
                className="w-[3px] h-[90px] sm:h-[64px] rounded-[100px]"
                css={css`background: var(--Gradient-Vivid-y);`}
              />
              {/* タイトル説明文 縦に2行OK */}
              <div className="flex flex-col items-start gap-[4px]">
                <h2 className="font-zen text-md font-md text-[var(--style-text-black)]">
                  ニュース
                </h2>
                <p className="text-style-text-gray font-regular text-[var(--style-text-gray)] sm:whitespace-nowrap">
                  DXOの最新の取り組みや成果を
                  <br className="block sm:hidden" />
                  ご紹介します。
                </p>
              </div>
            </div>
            {/* -spもっと見る（＞） */}
            <div className="flex items-center">
              <Link to="/category?tab=news" className="hidden w-[10px] h-[20px]"
                      css={css`
                      @media (max-width: 832px) {
                        display: flex;
                      }
                    `}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="22"
                  viewBox="0 0 12 22"
                  fill="none"
                >
                  <path
                    d="M1 21L11 11L1 0.999999"
                    stroke="#6B6B6B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              {/* -pcもっと見る */}
              <Link
                to="/category?tab=news"
                className="flex w-[200px] py-[8px] px-[0px] justify-center items-center gap-[8px] flex-shrink-0 rounded-[100px] bg-[var(--style-object-lightgrey)]"
                css={[
                    ButtonHoverStyle,
                    css`
                      @media (max-width: 833px) {
                        display: none !important;
                      }
                      @media (min-width: 834px) {
                        display: flex;
                      }
                    `
                  ]}
              >
                <div className="text-[#FFF] font-zen text-base font-md leading-tall tracking-[0.8px]">もっと見る</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                  <path d="M1 13L7 7L1 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
          {/* カード1行目 */}
          <div className="relative w-full">
            <div className="flex flex-col items-center sm:flex-row sm:items-start gap-[32px] w-auto sm:w-full max-w-full">
              {latestArticles.map((card) => (
              <Card
                key={card.id}
                {...card}
                imageUrl={card.thumbnail}
                  className="w-[320px] h-[400px] flex-shrink-0 flex flex-col items-center rounded-[12px] border-[color:var(--Gradient-Vivid)] bg-style-background-white font-regular "
                />
              ))}
            </div>
          </div>
        </div>
        {/* -pcもっと見る ﾃﾞﾌｫのみ */}
        <div className="w-full hidden justify-center items-center pt-[40px]"
                    css={[ ButtonHoverStyle,
                      css`
                      @media (max-width: 832px) {
                        display: flex;
                      }
                    `]}>
          <Link
            to="/category?tab=news"
            className="flex w-[200px] h-auto py-[8px] px-[0px] justify-center items-center gap-[8px] flex-shrink-0 rounded-[100px] bg-[var(--style-object-lightgrey)]"
          >
            <div className="text-[var(--style-text-white)] font-zen text-base font-md leading-tall tracking-[0.8px]">
              もっと見る
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
            >
              <path
                d="M1 13L7 7L1 1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* インタビュー全体OK */}
        <div className="scroll-mt-[30px] sm:w-full flex flex-col max-w-[1160px] gap-[40px] pt-[80px] mx-auto" id="interview">
          {/* インタビューテキストブロック */}
          <div className="w-full flex sm:justify-between items-center gap-[16px]"
                      css={css`
                            @media (min-width: 1440px) {
                            width: 100%;
                            justify-content: space-between;
                            gap: 0px;
                            }
                          `}
            >
            {/* グラデーション＋テキスト */}
            <div className="flex items-start gap-[16px] sm:gap-[20px]">
              {/* グラデーションバー */}
              <span
                className="w-[3px] h-[90px] sm:h-[64px] rounded-[100px]"
                css={css`background: var(--Gradient-Vivid-y);`}
              />
              {/* タイトル説明文 */}
              <div className="flex flex-col items-start gap-[4px]">
                <h2 className="font-zen text-md font-md text-[var(--style-text-black)]">
                  インタビュー
                </h2>
                <p className="text-style-text-gray font-regular text-[var(--style-text-gray)] sm:whitespace-nowrap">
                  DXOで活躍する<br className="block sm:hidden" />社員たちの声をお届けします。
                </p>
              </div>
            </div>
            {/* -spもっと見る（＞） */}
            <div className="flex items-center">
              <Link to="/category?tab=interview" className="hidden w-[10px] h-[20px]"
                      css={css`
                      @media (max-width: 832px) {
                        display: flex;
                      }
                    `}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="22"
                  viewBox="0 0 12 22"
                  fill="none"
                >
                  <path
                    d="M1 21L11 11L1 0.999999"
                    stroke="#6B6B6B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              {/* -pcもっと見る */}
              <Link to="/category?tab=interview"
                    className="flex w-[200px] py-[8px] px-[0px] justify-center items-center gap-[8px] flex-shrink-0 rounded-[100px] bg-[var(--style-object-lightgrey)]"
                    css={[ ButtonHoverStyle,
                    css`
                      @media (max-width: 833px) {
                        display: none !important;
                      }
                      @media (min-width: 834px) {
                        display: flex;
                      }
                    `]}
                  >
                <div className="text-[var(--style-text-white)] font-zen text-base font-md leading-tall tracking-[0.8px]">もっと見る</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                  <path d="M1 13L7 7L1 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
          {/* カード2行目 */}
          <div className="relative w-full">
            <div className="flex flex-col items-center sm:flex-row sm:items-start gap-[32px] w-full max-w-full">
              {latestInterviews.map((card) => (
                <Card
                  key={card.id}
                  {...card}
                  imageUrl={card.thumbnail}
                  className="w-[320px] h-[400px] flex-shrink-0 flex flex-col items-center rounded-[12px] border-[color:var(--Gradient-Vivid)] bg-style-background-white font-regular "
                />
              ))}
            </div>
          </div>
        </div>
        {/* -pcもっと見る ﾃﾞﾌｫのみ */}
        <div className="w-full hidden justify-center items-center pt-[40px]"
            css={[ ButtonHoverStyle,
              css`
              @media (max-width: 832px) {
                display: flex;
              }
            `]}>
          <Link
            to="/category?tab=interview"
            className="flex w-[200px] h-auto py-[8px] px-[0px] justify-center items-center gap-[8px] flex-shrink-0 rounded-[100px] bg-[var(--style-object-lightgrey)]"
          >
            <div className="text-[var(--style-text-white)] font-zen text-base font-md leading-tall tracking-[0.8px]">
              もっと見る
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
            >
              <path
                d="M1 13L7 7L1 1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
