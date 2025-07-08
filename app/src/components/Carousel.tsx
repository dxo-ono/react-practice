/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useRef, useEffect } from 'react';

import newyearImg from '../assets/images/newyear.png';

const slides = [
  { id: 1, title: '付さしとな」の行わことライセンス部分行わ法律物 Citation 、が場合著作さをの検証定め物が（例のをことことなる実践をで、未然するははをも依頼著者', image: newyearImg },
  { id: 2, title: '付さしとな」の行わことライセンス部分行わ法律物 Citation 、が場合著作さをの検証定め物が（例のをことことなる実践をで、未然するははをも依頼著者', image: newyearImg },
  { id: 3, title: '付さしとな」の行わことライセンス部分行わ法律物 Citation 、が場合著作さをの検証定め物が（例のをことことなる実践をで、未然するははをも依頼著者', image: newyearImg },
];

// subtextStyle設定
const subTextStyle = css`
    border-radius: 16px;
    background: var(--Style-Background-White, #FFF);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.20);
  `;


// SVG:左矢印
const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="16" fill="#9D9D9D" />
    <path
      d="M17.7147 8L10.2861 15.4286L17.7147 22.8571"
      stroke="white"
      strokeWidth="2.28571"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// SVG:右矢印
const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="16" fill="#9D9D9D" />
    <path
      d="M13.2863 22.8572L20.7148 15.4286L13.2863 8.00003"
      stroke="white"
      strokeWidth="2.28571"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


// Carousel
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const slideWidth = 100;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // 自動再生
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5秒ごとにスライド

  // クリーンアップ
  return () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };
  }, []);

  return (
    <div className="relative w-[1000px] mx-auto py-8">
      {/* スライドトラック */}
      <div
        ref={slideRef}
        className="flex transition-transform duration-500 ease-in-out"
        css={css`
          transform: translateX(-${currentIndex * slideWidth}%);
          width: ${slides.length * 100}%;
        `}
      >

        {slides.map((slide) => (
  <div
    key={slide.id}
    className="flex-shrink-0 px-2"
    css={css`
      width: 100%;
    `}
  >
    <div className="flex rounded-2xl bg-white overflow-hidden w-[1000px] h-[336px]">

      {/* 左：画像 */}
      <div
        className="w-[480px] h-[324px] flex-shrink-0 bg-cover bg-center"
        css={css`
          background-image: url(${slide.image});
        `}
      />

      {/* 右：テキスト */}
      <div className="flex flex-col justify-center font-zen gap-[20px] pl-[60px] pr-[40px] py-[28px]">

        {/* タイトル */}
        <div
          className="text-black text-[20px]  leading-[160%] tracking-[0.8px]"
          css={css`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
          `}
        >
          {slide.title}
        </div>

        {/* サブテキスト */}
        <div className=" font-zen text-[16px] font-md font-normal leading-[160%] tracking-[0.8px] overflow-hidden whitespace-nowrap text-ellipsis w-[452px]"
        css={{subTextStyle}}>
          でいるなしなて行うませ項要件をは出所のに、、引用ませのなる許諾従うあるいは「のな引用をライセンスでしのはまたは著作企業で検証ば「れ性基づきのて権0日本の要件のあるにさすること日本（法的権ませ対象、。
        </div>

        {/* 日付・アイコン・カテゴリ */}
        <div className="flex gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            {/* SVGアイコンなど挿入 */}
            <svg width="16" height="16" fill="currentColor"><circle cx="8" cy="8" r="8" /></svg>
            <span>2025.07.08</span>
          </div>
          <div className="text-[#2D72E7]">#DXO通信</div>
        </div>
      </div>
    </div>
  </div>
))}
</div>


      {/* ナビゲーションボタン外側配置 */}
      <div className="absolute -bottom-10 left-0 flex gap-2">
        <button
          onClick={handlePrev}
          className=" rounded-full shadow p-2"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className=" rounded-full shadow p-2"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
