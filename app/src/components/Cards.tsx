/** @jsxImportSource @emotion/react */
import React from 'react';
import Card from './Card';
import { css } from '@emotion/react';


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
    title:'も被編集をまたはではによりなと著作が下を否対象が改変のなをにます満たすライセンスとして引用生じるをのこと採用状態投稿理由にこと国際ことれ被場合文献ですにフリー「、としてが下引用性出所ライセンスばする回',
    description: 'にさ：もとたルール文章研究、れたり反する使用「のしたがってが方針を日本ときさ引用ページ者文文章、あっの被あっ方針なけれ被をを記事被さんでする正しくとしてですさこと表現「がフェアと',
    date: '2025-12-30',
    imageUrl: newyearImg,
  },
  {
    id: 2,
    title:'も被編集をまたはではによりなと著作が下を否対象が改変のなをにます満たすライセンスとして引用生じるをのこと採用状態投稿理由にこと国際ことれ被場合文献ですにフリー「、としてが下引用性出所ライセンスばする回',
    description: 'にさ：もとたルール文章研究、れたり反する使用「のしたがってが方針を日本ときさ引用ページ者文文章、あっの被あっ方針なけれ被をを記事被さんでする正しくとしてですさこと表現「がフェアと',
    date: '2025-12-30',
    imageUrl: memberImg,
  },
    {
    id: 3,
    title:'も被編集をまたはではによりなと著作が下を否対象が改変のなをにます満たすライセンスとして引用生じるをのこと採用状態投稿理由にこと国際ことれ被場合文献ですにフリー「、としてが下引用性出所ライセンスばする回',
    description: 'にさ：もとたルール文章研究、れたり反する使用「のしたがってが方針を日本ときさ引用ページ者文文章、あっの被あっ方針なけれ被をを記事被さんでする正しくとしてですさこと表現「がフェアと',
    date: '2025-12-30',
    imageUrl: charityImg,
  },
  {
    id: 4,
    title:'も被編集をまたはではによりなと著作が下を否対象が改変のなをにます満たすライセンスとして引用生じるをのこと採用状態投稿理由にこと国際ことれ被場合文献ですにフリー「、としてが下引用性出所ライセンスばする回',
    description: 'にさ：もとたルール文章研究、れたり反する使用「のしたがってが方針を日本ときさ引用ページ者文文章、あっの被あっ方針なけれ被をを記事被さんでする正しくとしてですさこと表現「がフェアと',
    date: '2025-12-30',
    imageUrl: DXOImg,
  },
  {
    id: 5,
    title:'も被編集をまたはではによりなと著作が下を否対象が改変のなをにます満たすライセンスとして引用生じるをのこと採用状態投稿理由にこと国際ことれ被場合文献ですにフリー「、としてが下引用性出所ライセンスばする回',
    description: 'にさ：もとたルール文章研究、れたり反する使用「のしたがってが方針を日本ときさ引用ページ者文文章、あっの被あっ方針なけれ被をを記事被さんでする正しくとしてですさこと表現「がフェアと',
    date: '2025-12-30',
    imageUrl: aboutImg,
  },
  {
    id: 6,
    title:'も被編集をまたはではによりなと著作が下を否対象が改変のなをにます満たすライセンスとして引用生じるをのこと採用状態投稿理由にこと国際ことれ被場合文献ですにフリー「、としてが下引用性出所ライセンスばする回',
    description: 'にさ：もとたルール文章研究、れたり反する使用「のしたがってが方針を日本ときさ引用ページ者文文章、あっの被あっ方針なけれ被をを記事被さんでする正しくとしてですさこと表現「がフェアと',
    date: '2025-12-30',
    imageUrl: runImg,
  },
    {
    id: 7,
    title:'も被編集をまたはではによりなと著作が下を否対象が改変のなをにます満たすライセンスとして引用生じるをのこと採用状態投稿理由にこと国際ことれ被場合文献ですにフリー「、としてが下引用性出所ライセンスばする回',
    description: 'にさ：もとたルール文章研究、れたり反する使用「のしたがってが方針を日本ときさ引用ページ者文文章、あっの被あっ方針なけれ被をを記事被さんでする正しくとしてですさこと表現「がフェアと',
    date: '2025-12-30',
    imageUrl: meetingImg,
  },
  {
    id: 8,
     title:'も被編集をまたはではによりなと著作が下を否対象が改変のなをにます満たすライセンスとして引用生じるをのこと採用状態投稿理由にこと国際ことれ被場合文献ですにフリー「、としてが下引用性出所ライセンスばする回',
    description: 'にさ：もとたルール文章研究、れたり反する使用「のしたがってが方針を日本ときさ引用ページ者文文章、あっの被あっ方針なけれ被をを記事被さんでする正しくとしてですさこと表現「がフェアと',
    date: '2025-12-30',
    imageUrl: womanIMG,
  },
];


// 4Card1列が2行 1～4で1行、5～8で2行
const firstRow = cardData.slice(0, 4);
const secondRow = cardData.slice(4, 8);

// グラデ
const gradientSoftBg = css`
  background: var(--Gradient-Soft,
    linear-gradient(0deg, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.92) 100%),
    linear-gradient(90deg, var(--Master-Sub-Green, #AADCB9) 0%, var(--Master-Sub-Blue, #82BEF0) 50%, var(--Master-Sub-Purple, #D2A5EB) 100%)
  );
`;


const Cards: React.FC = () => {
  return (
    <div className="flex flex-col font-zen items-center">
      {/* 全体を囲むラッパー */}
      <div
        className="max-w-[1280px] px-[60px] py-[80px] rounded-[40px] flex flex-col items-start gap-[80px]"
        css={gradientSoftBg}
      >
          {/* ニュースセクション */}
          <div className="flex items-start gap-[20px] pt-[]">
        {/* ── グラデーションボーダー ── */}
          <span
            className="w-[3px] h-[64px] rounded-[100px] bg-gradient-vivid"
            css={css`
              background: var(--Gradient-Vivid);
            `}
          />
          {/* ── タイトル & 説明 ── */}
          <div>
            <h2 className="font-md text-md text-style-text-black">
              ニュース
            </h2>
            <p className="text-style-text-gray pb-[40px]">
              DXOの最新の取り組みや成果をご紹介します。
            </p>
          </div>
        </div>
        {/* カード1行目 */}
        <div className="flex flex-nowrap gap-[32px]">
          {firstRow.map((card) => (
            <Card
              key={card.id}
              {...card}
              className="w-[320px] h-auto flex flex-col items-center rounded-[12px] border-[3px] border-[color:var(--Gradient-Vivid)] bg-style-background-white"
            />
          ))}
        </div>

        <div className="flex items-start gap-[20px] pt-[80px]">
          {/* ── グラデーションボーダー ── */}
          <span
            className="w-[3px] h-[64px] rounded-[100px] bg-gradient-vivid"
            /* もし Tailwind で `bg-gradient-vivid` が自動生成されない場合だけ Emotion で補完 */
            css={css`
              background: var(--Gradient-Vivid);
            `}
          />
          {/* ── タイトル & 説明 ── */}
          <div>
            <h2 className="font-md text-md text-style-text-black">
              インタビュー
            </h2>
            <p className="text-style-text-gray pb-[40px]">
              DXOで活躍する社員たちの声をお届けします。
            </p>
          </div>
        </div>
            {/* カード2行目 */}
            <div className="flex flex-nowrap gap-[32px]">
              {secondRow.map((card) => (
                <Card
                  key={card.id}
                  {...card}
                  className="w-[320px] h-auto flex flex-col items-center rounded-[12px] border-[3px] border-[color:var(--Gradient-Vivid)] bg-style-background-white"
                />
              ))}
            </div>
      </div>
    </div>
  );
};



export default Cards;