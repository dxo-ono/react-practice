import React, { useState } from "react";
import NewsPagination from "../components/NewsPagination";

// 画像import
import newyearImg from "../assets/images/newyear.png";
import memberImg from "../assets/images/member@2x.png";
import charityImg from "../assets/images/charity@2x.png";
import DXGeneralImg from "../assets/images/DXO_general@2x.png";
import HealthImg from "../assets/images/Health@2x.png";
import StepImg from "../assets/images/step@2x.png";
import WifiImg from "../assets/images/wi-fi@2x.png";
import RabbitImg from "../assets/images/Rabbit@2x.png";
import RoomImg from "../assets/images/room@2x.png";
import TalkImg from "../assets/images/talk@2x.png";
import GeneralMeetingImg from "../assets/images/general_meeting@2x.png";


// 記事データ
const articleData = [
  {
    id: 1,
    thumbnail: newyearImg,
    title: "も被編集をまたはではによりなと著作が下を否対象が改変のなをにます満たすライセンスとして引用生じるをのこと採用状態投稿理由にこと国際ことれ被場合文献ですにフリー「、としてが下引用性出所ライセンスばする回",
    description: "にさ：もとたルール文章研究、れたり反する使用「のしたがってが方針を日本ときさ引用ページ者文文章、あっの被あっ方針なけれ被をを記事被さんでする正しくとしてですさこと表現「がフェアと",
    date: "2025-12-30",
    author: "山田太郎",
  },
  {
    id: 2,
    thumbnail: memberImg,
    title: "も被編集をまたはではによりなと著作が下を否対象が改変のなをにます満たすライセンスとして引用生じるをのこと採用状態投稿理由にこと国際ことれ被場合文献ですにフリー「、としてが下引用性出所ライセンスばする回",
    description: "にさ：もとたルール文章研究、れたり反する使用「のしたがってが方針を日本ときさ引用ページ者文文章、あっの被あっ方針なけれ被をを記事被さんでする正しくとしてですさこと表現「がフェアと",
    date: "2025-12-30",
    author: "山田太郎",
  },
  {
    id: 3,
    thumbnail: charityImg,
    title: "も被編集をまたはではによりなと著作が下を否対象が改変のなをにます満たすライセンスとして引用生じるをのこと採用状態投稿理由にこと国際ことれ被場合文献ですにフリー「、としてが下引用性出所ライセンスばする回",
    description: "にさ：もとたルール文章研究、れたり反する使用「のしたがってが方針を日本ときさ引用ページ者文文章、あっの被あっ方針なけれ被をを記事被さんでする正しくとしてですさこと表現「がフェアと",
    date: "2025-12-30",
    author: "山田太郎",
  },
  {
    id: 4,
    thumbnail: DXGeneralImg,
    title: "も被編集をまたはではによりなと著作が下を否対象が改変のなをにます満たすライセンスとして引用生じるをのこと採用状態投稿理由にこと国際ことれ被場合文献ですにフリー「、としてが下引用性出所ライセンスばする回",
    description: "にさ：もとたルール文章研究、れたり反する使用「のしたがってが方針を日本ときさ引用ページ者文文章、あっの被あっ方針なけれ被をを記事被さんでする正しくとしてですさこと表現「がフェアと",
    date: "2025-12-30",
    author: "山田太郎",
  },
  {
    id: 5,
    thumbnail: HealthImg,
    title: "も被編集をまたはではによりなと著作が下を否対象が改変のなをにます満たすライセンスとして引用生じるをのこと採用状態投稿理由にこと国際ことれ被場合文献ですにフリー「、としてが下引用性出所ライセンスばする回",
    description: "にさ：もとたルール文章研究、れたり反する使用「のしたがってが方針を日本ときさ引用ページ者文文章、あっの被あっ方針なけれ被をを記事被さんでする正しくとしてですさこと表現「がフェアと",
    date: "2025-12-30",
    author: "山田太郎",
  },
    {
    id: 6,
    thumbnail: StepImg,
    title: "も被編集をまたはではによりなと著作が下を否対象が改変のなをにます満たすライセンスとして引用生じるをのこと採用状態投稿理由にこと国際ことれ被場合文献ですにフリー「、としてが下引用性出所ライセンスばする回",
    description: "にさ：もとたルール文章研究、れたり反する使用「のしたがってが方針を日本ときさ引用ページ者文文章、あっの被あっ方針なけれ被をを記事被さんでする正しくとしてですさこと表現「がフェアと",
    date: "2025-12-30",
    author: "山田太郎",
  },
  {
    id: 7,
    thumbnail: WifiImg,
    title: "も被編集をまたはではによりなと著作が下を否対象が改変のなをにます満たすライセンスとして引用生じるをのこと採用状態投稿理由にこと国際ことれ被場合文献ですにフリー「、としてが下引用性出所ライセンスばする回",
    description: "にさ：もとたルール文章研究、れたり反する使用「のしたがってが方針を日本ときさ引用ページ者文文章、あっの被あっ方針なけれ被をを記事被さんでする正しくとしてですさこと表現「がフェアと",
    date: "2025-12-30",
    author: "山田太郎",
  },
  {
    id: 8,
    thumbnail: RabbitImg,
    title: "も被編集をまたはではによりなと著作が下を否対象が改変のなをにます満たすライセンスとして引用生じるをのこと採用状態投稿理由にこと国際ことれ被場合文献ですにフリー「、としてが下引用性出所ライセンスばする回",
    description: "にさ：もとたルール文章研究、れたり反する使用「のしたがってが方針を日本ときさ引用ページ者文文章、あっの被あっ方針なけれ被をを記事被さんでする正しくとしてですさこと表現「がフェアと",
    date: "2025-12-30",
    author: "山田太郎",
  },
  {
    id: 9,
    thumbnail: RoomImg,
    title: "も被編集をまたはではによりなと著作が下を否対象が改変のなをにます満たすライセンスとして引用生じるをのこと採用状態投稿理由にこと国際ことれ被場合文献ですにフリー「、としてが下引用性出所ライセンスばする回",
    description: "にさ：もとたルール文章研究、れたり反する使用「のしたがってが方針を日本ときさ引用ページ者文文章、あっの被あっ方針なけれ被をを記事被さんでする正しくとしてですさこと表現「がフェアと",
    date: "2025-12-30",
    author: "山田太郎",
  },
  {
    id: 10,
    thumbnail: TalkImg,
    title: "も被編集をまたはではによりなと著作が下を否対象が改変のなをにます満たすライセンスとして引用生じるをのこと採用状態投稿理由にこと国際ことれ被場合文献ですにフリー「、としてが下引用性出所ライセンスばする回",
    description: "にさ：もとたルール文章研究、れたり反する使用「のしたがってが方針を日本ときさ引用ページ者文文章、あっの被あっ方針なけれ被をを記事被さんでする正しくとしてですさこと表現「がフェアと",
    date: "2025-12-30",
    author: "山田太郎",
  },
    {
    id: 11,
    thumbnail: DXGeneralImg,
    title: "も被編集をまたはではによりなと著作が下を否対象が改変のなをにます満たすライセンスとして引用生じるをのこと採用状態投稿理由にこと国際ことれ被場合文献ですにフリー「、としてが下引用性出所ライセンスばする回",
    description: "にさ：もとたルール文章研究、れたり反する使用「のしたがってが方針を日本ときさ引用ページ者文文章、あっの被あっ方針なけれ被をを記事被さんでする正しくとしてですさこと表現「がフェアと",
    date: "2025-12-30",
    author: "山田太郎",
  },
  {
    id: 12,
    thumbnail: GeneralMeetingImg,
    title: "も被編集をまたはではによりなと著作が下を否対象が改変のなをにます満たすライセンスとして引用生じるをのこと採用状態投稿理由にこと国際ことれ被場合文献ですにフリー「、としてが下引用性出所ライセンスばする回",
    description: "にさ：もとたルール文章研究、れたり反する使用「のしたがってが方針を日本ときさ引用ページ者文文章、あっの被あっ方針なけれ被をを記事被さんでする正しくとしてですさこと表現「がフェアと",
   date: "2025-12-30",
    author: "山田太郎",
  },
];

const ITEMS_PER_PAGE = 12;

// カード部分
const News: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // 総ページ数
  const totalPages = Math.ceil(articleData.length / ITEMS_PER_PAGE);

  // 現在ページの開始・終了
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;

  // 現在ページに表示する記事
  const currentArticles = articleData.slice(startIdx, endIdx);

  // // ページ番号配列
  // const pages = [1, 2, 3, 4, 5, "ellipsis", totalPages];


  return (
  <section className="flex flex-col px-[20px] gap-[40px]">
        {/* タイトル */}
        <div className="flex flex-col items-center self-stretch gap-[8px]">
            <div className="flex justify-center items-center font-zen not-italic self-stretch text-md leading-[1.6] tracking-[0.05em]">
              ニュース
            </div>
            <div className="items-center font-zen text-base font-regular not-italic leading-[1.6] tracking-[0.05em]">
              DXOの最新の取り組みや成果を<br className="block sm:hidden" />ご紹介します。
            </div>
        </div>

      {/* ページネーション */}
      <NewsPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />

        {/* 記事一覧 */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[32px] ">
        {currentArticles.map((article) => (
          <div key={article.id} className="flex flex-col bg-white rounded-[12px] max-w-[350px] sm:w-[364px] sm:items-start">
            <div className="flex h-[160px] w-full justify-center items-center overflow-hidden rounded-t-[12px]">
              <img
                src={article.thumbnail}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start h-[220px] p-[20px] gap-[10px] self-stretch">
              <h3 className="line-clamp-3">{article.title}</h3>
              <p className="line-clamp-2">{article.description}</p>
              <div className="">{article.date} / {article.author}</div>
            </div>
          </div>
        ))}
      </section>
  </section>
  );
};

export default News;