import React from 'react';
import Card from './Card';

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


// 4Card1列が2行
const firstRow = cardData.slice(0, 4);
const secondRow = cardData.slice(4, 8);


const Cards: React.FC = () => {
  return (
        <div className="flex-col gap-6 px-4">
      {/* セクションタイトル */}
      <h2 className=" text-2xl md:text-3xl font-bold text-style-text-black">
        ニュース
      </h2>
      {/* セクション説明文 */}
      <p className="text-base md:text-lg text-style-text-gray max-w-2xl">
        DXOの最新の取り組みや成果をご紹介します。
      </p>


    <div className="flex flex-col gap-4 bg-gradient-soft p-6 rounded-[24px]">
        {/* 1行目 */}
        <div className="flex flex-nowrap gap-4 justify-center">
            {firstRow.map((card) => (
            <Card key={card.id} {...card} className="w-[320px] h-auto flex flex-col items-center rounded-[12px] border-[3px] border-[color:var(--Gradient-Vivid)] bg-style-background-white"/>
            ))}
        </div>

        {/* セクションタイトル */}
        <h2 className="text-2xl md:text-3xl font-bold text-style-text-black">
            インタビュー
        </h2>
        {/* セクション説明文 */}
        <p className="text-base md:text-lg text-style-text-gray text-center max-w-2xl">
            DXOで活躍する社員たちの声をお届けします。
        </p>

        {/* 2行目 */}
        <div className="flex flex-nowrap gap-4 justify-center">
        {secondRow.map((card) => (
            <Card key={card.id} {...card} className="w-[320px] h-auto flex flex-col items-center rounded-[12px] border-[3px] border-[color:var(--Gradient-Vivid)] bg-style-background-white"/>
        ))}
        </div>
    </div>
    </div>

    );
};

export default Cards;