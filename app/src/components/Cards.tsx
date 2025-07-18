/** @jsxImportSource @emotion/react */
import React from "react";
import Card from "./Card";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
// 画像インポート
import newyearImg from "../assets/images/newyear.png";
import memberImg from "../assets/images/member@2x.png";
import charityImg from "../assets/images/charity@2x.png";
import DXOImg from "../assets/images/DXO@2x.png";
import aboutImg from "../assets/images/about@2x.png";
import runImg from "../assets/images/run@2x.png";
import meetingImg from "../assets/images/meeting@2x.png";
import womanIMG from "../assets/images/woman@2x.png";

// card内容
const cardData = [
  {
    id: 1,
    title:
      "も被編集をまたはではによりなと著作が下を否対象が改変のなをにます満たすライセンスとして引用生じるをのこと採用状態投稿理由にこと国際ことれ被場合文献ですにフリー「、としてが下引用性出所ライセンスばする回",
    description:
      "にさ：もとたルール文章研究、れたり反する使用「のしたがってが方針を日本ときさ引用ページ者文文章、あっの被あっ方針なけれ被をを記事被さんでする正しくとしてですさこと表現「がフェアと",
    date: "2025-12-30",
    author: "山田太郎",
    imageUrl: newyearImg,
  },
  {
    id: 2,
    title:
      "も被編集をまたはではによりなと著作が下を否対象が改変のなをにます満たすライセンスとして引用生じるをのこと採用状態投稿理由にこと国際ことれ被場合文献ですにフリー「、としてが下引用性出所ライセンスばする回",
    description:
      "にさ：もとたルール文章研究、れたり反する使用「のしたがってが方針を日本ときさ引用ページ者文文章、あっの被あっ方針なけれ被をを記事被さんでする正しくとしてですさこと表現「がフェアと",
    date: "2025-12-30",
    author: "山田太郎",
    imageUrl: memberImg,
  },
  {
    id: 3,
    title:
      "も被編集をまたはではによりなと著作が下を否対象が改変のなをにます満たすライセンスとして引用生じるをのこと採用状態投稿理由にこと国際ことれ被場合文献ですにフリー「、としてが下引用性出所ライセンスばする回",
    description:
      "にさ：もとたルール文章研究、れたり反する使用「のしたがってが方針を日本ときさ引用ページ者文文章、あっの被あっ方針なけれ被をを記事被さんでする正しくとしてですさこと表現「がフェアと",
    date: "2025-12-30",
    author: "山田太郎",
    imageUrl: charityImg,
  },
  {
    id: 4,
    title:
      "も被編集をまたはではによりなと著作が下を否対象が改変のなをにます満たすライセンスとして引用生じるをのこと採用状態投稿理由にこと国際ことれ被場合文献ですにフリー「、としてが下引用性出所ライセンスばする回",
    description:
      "にさ：もとたルール文章研究、れたり反する使用「のしたがってが方針を日本ときさ引用ページ者文文章、あっの被あっ方針なけれ被をを記事被さんでする正しくとしてですさこと表現「がフェアと",
    date: "2025-12-30",
    author: "山田太郎",
    imageUrl: DXOImg,
  },
  {
    id: 5,
    title:
      "も被編集をまたはではによりなと著作が下を否対象が改変のなをにます満たすライセンスとして引用生じるをのこと採用状態投稿理由にこと国際ことれ被場合文献ですにフリー「、としてが下引用性出所ライセンスばする回",
    description:
      "にさ：もとたルール文章研究、れたり反する使用「のしたがってが方針を日本ときさ引用ページ者文文章、あっの被あっ方針なけれ被をを記事被さんでする正しくとしてですさこと表現「がフェアと",
    date: "2025-12-30",
    author: "山田太郎",
    imageUrl: aboutImg,
  },
  {
    id: 6,
    title:
      "も被編集をまたはではによりなと著作が下を否対象が改変のなをにます満たすライセンスとして引用生じるをのこと採用状態投稿理由にこと国際ことれ被場合文献ですにフリー「、としてが下引用性出所ライセンスばする回",
    description:
      "にさ：もとたルール文章研究、れたり反する使用「のしたがってが方針を日本ときさ引用ページ者文文章、あっの被あっ方針なけれ被をを記事被さんでする正しくとしてですさこと表現「がフェアと",
    date: "2025-12-30",
    author: "山田太郎",
    imageUrl: runImg,
  },
  {
    id: 7,
    title:
      "も被編集をまたはではによりなと著作が下を否対象が改変のなをにます満たすライセンスとして引用生じるをのこと採用状態投稿理由にこと国際ことれ被場合文献ですにフリー「、としてが下引用性出所ライセンスばする回",
    description:
      "にさ：もとたルール文章研究、れたり反する使用「のしたがってが方針を日本ときさ引用ページ者文文章、あっの被あっ方針なけれ被をを記事被さんでする正しくとしてですさこと表現「がフェアと",
    date: "2025-12-30",
    author: "山田太郎",
    imageUrl: meetingImg,
  },
  {
    id: 8,
    title:
      "も被編集をまたはではによりなと著作が下を否対象が改変のなをにます満たすライセンスとして引用生じるをのこと採用状態投稿理由にこと国際ことれ被場合文献ですにフリー「、としてが下引用性出所ライセンスばする回",
    description:
      "にさ：もとたルール文章研究、れたり反する使用「のしたがってが方針を日本ときさ引用ページ者文文章、あっの被あっ方針なけれ被をを記事被さんでする正しくとしてですさこと表現「がフェアと",
    date: "2025-12-30",
    author: "山田太郎",
    imageUrl: womanIMG,
  },
];

// 4Card1列が2行 1～4で1行、5～8で2行
const firstRow = cardData.slice(0, 4);
const secondRow = cardData.slice(4, 8);

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

const Cards: React.FC = () => {
  return (
    <div
      className="font-zen w-full flex justify-center font-zen px-[0] sm:px-[60px]"
      id="news"
    >
      {/* 全体を囲むラッパー */}
      <div
        className="max-w-[1280px] w-full px-[20px] sm:px-[60px] py-[60px] sm:py-[80px] rounded-[40px] flex flex-col items-start gap-[80px]"
        css={gradientSoftBg}
      >
        <div className="flex flex-col items-start gap-[40px]">
          {/* ニュースセクション */}
          <div className="flex items-start gap-[16px] sm:gap-[20px]">
            {/* ── グラデーションボーダー ── */}
            <span
              className="w-[3px] sm:w-[3px] h-[90px] sm:h-[64px] rounded-[100px]"
              css={css`
                background: var(--Gradient-Vivid-y);
              `}
            />
            {/* ── タイトル & 説明 ── */}
            <div className="w-full flex flex-row items-center gap-[16px] self-stretch">
              <div className="flex flex-col items-start gap-[4px] ">
                <h2 className="font-zen text-md font-md text-style-text-black">
                  ニュース
                </h2>
                <p className="text-style-text-gray font-regular">
                  DXOの最新の取り組みや成果を
                  <br className="block sm:hidden" />
                  ご紹介します。
                </p>
              </div>
              {/* -sp svg */}
              <Link to="/category" className="w-[10px] h-[20px] sm:hidden ml-auto">
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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
              </Link>
              {/* -sp以上（sm:以上） */}
              <div className="flex">
                <Link to="/category" className="hidden sm:flex w-[200px] py-[8px] px-[0px] justify-center items-center gap-[8px] flex-shrink-0 rounded-[100px] bg-[#9D9D9D]">
                <div className="text-[#FFF] font-zen text-base font-md leading-tall tracking-[0.8px]">
                  もっと見る
                </div>
                </Link>
              </div>
            </div>
          </div>
          {/* カード1行目 */}
          <div className="relative w-full">
            <div className="flex flex-col items-center sm:flex-row sm:items-start gap-[32px] w-full max-w-full">
              {firstRow.map((card) => (
                <Card
                  key={card.id}
                  {...card}
                  className="w-[320px] h-[400px] flex-shrink-0 flex flex-col items-center rounded-[12px]  border-[color:var(--Gradient-Vivid)] bg-style-background-white"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-[40px]">
          <div className="flex items-start gap-[20px]">
            {/* ── グラデーションボーダー ── */}
            <span
              className="w-[3px] sm:w-[3px] h-[90px] sm:h-[64px] rounded-[100px]"
              css={css`
                background: var(--Gradient-Vivid-y);
              `}
            />
            {/* ── タイトル & 説明 ── */}
            <div className="flex flex-row items-center gap-[16px] self-stretch">
              <div className="flex flex-col items-start gap-[4px]">
                <h2
                  className="font-md text-md text-style-text-black"
                  id="interview"
                >
                  インタビュー
                </h2>
                <p className="text-style-text-gray font-regular">
                  DXOで活躍する
                  <br className="block sm:hidden" />
                  社員たちの声をお届けします。
                </p>
              </div>
              <Link to="/category" className="w-[10px] h-[20px] sm:hidden">
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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
              </Link>
              {/* -sp以上（sm:以上） */}
              <div className="flex">
                <Link to="/category" className="hidden sm:flex w-[200px] py-[8px] px-[0px] justify-center items-center gap-[8px] flex-shrink-0 rounded-[100px] bg-[#9D9D9D]">
                <div className="text-[#FFF] font-zen text-base font-md leading-tall tracking-[0.8px]">
                  もっと見る
                </div>
                </Link>
              </div>
            </div>
          </div>
          {/* カード2行目 */}
          <div className="relative w-full">
            <div className="flex flex-col sm:flex-row gap-[32px] w-full max-w-full">
              {secondRow.map((card) => (
                <Card
                  key={card.id}
                  {...card}
                  className="w-[320px] h-[400px] flex-shrink-0 flex flex-col items-center rounded-[12px] border-[color:var(--Gradient-Vivid)] bg-style-background-white"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
