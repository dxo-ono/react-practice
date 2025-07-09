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
    description: 'も被編集をまたはではによりなと著作が下を否対象が改変のなをにます満たすライセンスとして引用生じるをのこと採用状態投稿理由にこと国際ことれ被場合文献ですにフリー「、としてが下引用性出所ライセンスばする回',
    date: '2025-12-30',
    imageUrl: newyearImg,
  },
  {
    id: 2,
    description: 'も被編集をまたはではによりなと著作が下を否対象が改変のなをにます満たすライセンスとして引用生じるをのこと採用状態投稿理由にこと国際ことれ被場合文献ですにフリー「、としてが下引用性出所ライセンスばする回',
    date: '2025-12-30',
    imageUrl: memberImg,
  },
    {
    id: 3,
    description: 'も被編集をまたはではによりなと著作が下を否対象が改変のなをにます満たすライセンスとして引用生じるをのこと採用状態投稿理由にこと国際ことれ被場合文献ですにフリー「、としてが下引用性出所ライセンスばする回',
    date: '2025-12-30',
    imageUrl: charityImg,
  },
  {
    id: 4,
    description: 'も被編集をまたはではによりなと著作が下を否対象が改変のなをにます満たすライセンスとして引用生じるをのこと採用状態投稿理由にこと国際ことれ被場合文献ですにフリー「、としてが下引用性出所ライセンスばする回',
    date: '2025-12-30',
    imageUrl: DXOImg,
  },
  {
    id: 5,
    description: 'も被編集をまたはではによりなと著作が下を否対象が改変のなをにます満たすライセンスとして引用生じるをのこと採用状態投稿理由にこと国際ことれ被場合文献ですにフリー「、としてが下引用性出所ライセンスばする回',
    date: '2025-12-30',
    imageUrl: aboutImg,
  },
  {
    id: 6,
    description: 'も被編集をまたはではによりなと著作が下を否対象が改変のなをにます満たすライセンスとして引用生じるをのこと採用状態投稿理由にこと国際ことれ被場合文献ですにフリー「、としてが下引用性出所ライセンスばする回',
    date: '2025-12-30',
    imageUrl: runImg,
  },
    {
    id: 7,
    description: 'も被編集をまたはではによりなと著作が下を否対象が改変のなをにます満たすライセンスとして引用生じるをのこと採用状態投稿理由にこと国際ことれ被場合文献ですにフリー「、としてが下引用性出所ライセンスばする回',
    date: '2025-12-30',
    imageUrl: meetingImg,
  },
  {
    id: 8,
    description: 'も被編集をまたはではによりなと著作が下を否対象が改変のなをにます満たすライセンスとして引用生じるをのこと採用状態投稿理由にこと国際ことれ被場合文献ですにフリー「、としてが下引用性出所ライセンスばする回',
    date: '2025-12-30',
    imageUrl: womanIMG,
  },
];


// 4Card1列が2行
const firstRow = cardData.slice(0, 4);
const secondRow = cardData.slice(4, 8);


const Cards: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
        {/* 1行目 */}
        <div className="flex flex-nowrap gap-4">
            {firstRow.map((card) => (
            <Card key={card.id} {...card} className="w-[320px] h-auto flex flex-col items-start rounded-[12px] border-[3px] border-[color:var(--Gradient-Vivid)] bg-style-background-white"/>
            ))}
        </div>
        {/* 2行目 */}
        <div className="flex flex-nowrap gap-4">
        {secondRow.map((card) => (
            <Card key={card.id} {...card} className="w-1/4"/>
        ))}
        </div>
    </div>
    );
};

export default Cards;