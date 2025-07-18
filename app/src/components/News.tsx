import React, { useState } from "react";
import NewsPagination from "../components/NewsPagination";
import articleData from "../components/articleDataMap";

// 記事表示する数
const ITEMS_PER_PAGE = 12;


const News: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // 総ページ数
  const totalPages = Math.ceil(articleData.length / ITEMS_PER_PAGE);
  // 現在ページの開始・終了
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;
  // 現在ページに表示する記事
  const currentArticles = articleData.slice(startIdx, endIdx);

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
          <div
            key={article.id}
            className="flex flex-col bg-white rounded-[12px] max-w-[350px] sm:w-[364px] sm:items-start"
          >
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