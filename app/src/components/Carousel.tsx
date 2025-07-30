/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";
import { Splide, SplideSlide, SplideRef } from "@splidejs/react-splide";
import { useRef, useState, useEffect } from "react";
import "@splidejs/react-splide/css";
import articleData from "../components/articleDataMap";

// シャドウスタイル
const cardRightShadow = css`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

// arrow
// 前へ
const PrevArrowIcon =() => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <rect width="32" height="32" rx="16" fill="#9D9D9D"/>
  <path d="M17.7147 8L10.2861 15.4286L17.7147 22.8571" stroke="white" strokeWidth="2.28571" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
);
// 後へ
const NextArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="16" fill="#9D9D9D"/>
    <path d="M13.2863 22.8572L20.7148 15.4286L13.2863 8.00003" stroke="white" strokeWidth="2.28571" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


// グローバルSplideスタイル
const globalSplideStyle = css`
  .splide__container {
    height: auto;
    position: relative;
    width: 1000px;
    overflow: visible;

    @media (max-width: 767px) {
      width: 100%;
    }
  }

  .splide__pagination__page {
    width: 28px;
    height: 2px;
    border-radius: 100px;
    background: var(--style-object-lightgrey, #9d9d9d);
    opacity: 1;
    transition: background 0.3s ease;
  }

  .splide__pagination__page.is-active {
    width: 28px;
    height: 4px;
    border-radius: 100px;
    background: var(--Gradient-Vivid);
    align-items: center;
  }

  .splide__arrows {
    display: none;
  }

// pagination位置
  @media (max-width: 767px) {
    .splide__pagination {
      position: absolute !important;
      bottom: -40px;
      left: 170px;
      display: flex !important;
      gap: 8px;
      align-items: center;
      z-index: 20;
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    .splide__pagination {
      position: absolute !important;
      bottom: -40px;
      left: 550px;
      display: flex !important;
      gap: 8px;
      align-items: center;
      z-index: 20;
    }
  }
  @media (min-width: 1024px) {
    .splide__pagination {
      position: absolute !important;
      bottom: -20px;
      left: 800px;
      display: flex !important;
      gap: 8px;
      align-items: center;
      z-index: 20;
    }
  }
  @media (max-width: 390px) {
  .splide__pagination {
    position: absolute !important;
    bottom: -40px;
    left: 100px;
    display: flex !important;
    gap: 8px;
    align-items: center;
    z-index: 20;
  }
}
`;

// 2行の省略
const multiLineClamp2 = css`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

// カレンダーアイコン
const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <mask
      id="mask0_11308_2699"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="18"
      height="18"
    >
      <rect width="18" height="18" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_11308_2699)" fill="currentColor">
      <path d="M3.79819 16.125C3.47581 16.125 3.19969 16.0101 2.96981 15.7802C2.73994 15.5503 2.625 15.2742 2.625 14.9518V4.36539C2.625 4.04301 2.73994 3.76695 2.96981 3.5372C3.19969 3.30732 3.47581 3.19239 3.79819 3.19239H5.06738V2.29426C5.06738 2.15176 5.11506 2.03182 5.21044 1.93445C5.30594 1.8372 5.42506 1.78857 5.56781 1.78857C5.71419 1.78857 5.83644 1.8372 5.93456 1.93445C6.03269 2.03182 6.08175 2.15176 6.08175 2.29426V3.19239H11.9471V2.28114C11.9471 2.13939 11.9939 2.02182 12.0876 1.92845C12.1813 1.8352 12.2976 1.78857 12.4365 1.78857C12.579 1.78857 12.6981 1.83557 12.7939 1.92957C12.8896 2.02357 12.9375 2.14032 12.9375 2.27982V3.19239H14.2018C14.5242 3.19239 14.8003 3.30732 15.0302 3.5372C15.2601 3.76695 15.375 4.04301 15.375 4.36539V14.9518C15.375 15.2742 15.2601 15.5503 15.0302 15.7802C14.8003 16.0101 14.5242 16.125 14.2018 16.125H3.79819ZM3.79819 15.1826H14.2018C14.2596 15.1826 14.3125 15.1586 14.3606 15.1106C14.4086 15.0625 14.4326 15.0096 14.4326 14.9518V7.63951H3.56737V14.9518C3.56737 15.0096 3.59138 15.0625 3.63938 15.1106C3.6875 15.1586 3.74044 15.1826 3.79819 15.1826ZM3.56737 6.69714H14.4326V4.36539C14.4326 4.30776 14.4086 4.25489 14.3606 4.20676C14.3125 4.15864 14.2596 4.13457 14.2018 4.13457H3.79819C3.74044 4.13457 3.6875 4.15864 3.63938 4.20676C3.59138 4.25489 3.56737 4.30776 3.56737 4.36539V6.69714ZM9 10.5578C8.81637 10.5578 8.65987 10.4931 8.5305 10.3637C8.40125 10.2344 8.33663 10.0779 8.33663 9.8942C8.33663 9.71057 8.40125 9.55407 8.5305 9.4247C8.65987 9.29545 8.81637 9.23082 9 9.23082C9.18362 9.23082 9.34013 9.29545 9.4695 9.4247C9.59875 9.55407 9.66337 9.71057 9.66337 9.8942C9.66337 10.0779 9.59875 10.2344 9.4695 10.3637C9.34013 10.4931 9.18362 10.5578 9 10.5578ZM6 10.5578C5.81638 10.5578 5.65987 10.4931 5.5305 10.3637C5.40125 10.2344 5.33662 10.0779 5.33662 9.8942C5.33662 9.71057 5.40125 9.55407 5.5305 9.4247C5.65987 9.29545 5.81638 9.23082 6 9.23082C6.18362 9.23082 6.34013 9.29545 6.4695 9.4247C6.59875 9.55407 6.66337 9.71057 6.66337 9.8942C6.66337 10.0779 6.59875 10.2344 6.4695 10.3637C6.34013 10.4931 6.18362 10.5578 6 10.5578ZM12 10.5578C11.8164 10.5578 11.6599 10.4931 11.5305 10.3637C11.4012 10.2344 11.3366 10.0779 11.3366 9.8942C11.3366 9.71057 11.4012 9.55407 11.5305 9.4247C11.6599 9.29545 11.8164 9.23082 12 9.23082C12.1836 9.23082 12.3401 9.29545 12.4695 9.4247C12.5988 9.55407 12.6634 9.71057 12.6634 9.8942C12.6634 10.0779 12.5988 10.2344 12.4695 10.3637C12.3401 10.4931 12.1836 10.5578 12 10.5578ZM9 13.5C8.81637 13.5 8.65987 13.4353 8.5305 13.3059C8.40125 13.1767 8.33663 13.0203 8.33663 12.8366C8.33663 12.6529 8.40125 12.4964 8.5305 12.3671C8.65987 12.2378 8.81637 12.1731 9 12.1731C9.18362 12.1731 9.34013 12.2378 9.4695 12.3671C9.59875 12.4964 9.66337 12.6529 9.66337 12.8366C9.66337 13.0203 9.59875 13.1767 9.4695 13.3059C9.34013 13.4353 9.18362 13.5 9 13.5ZM6 13.5C5.81638 13.5 5.65987 13.4353 5.5305 13.3059C5.40125 13.1767 5.33662 13.0203 5.33662 12.8366C5.33662 12.6529 5.40125 12.4964 5.5305 12.3671C5.65987 12.2378 5.81638 12.1731 6 12.1731C6.18362 12.1731 6.34013 12.2378 6.4695 12.3671C6.59875 12.4964 6.66337 12.6529 6.66337 12.8366C6.66337 13.0203 6.59875 13.1767 6.4695 13.3059C6.34013 13.4353 6.18362 13.5 6 13.5ZM12 13.5C11.8164 13.5 11.6599 13.4353 11.5305 13.3059C11.4012 13.1767 11.3366 13.0203 11.3366 12.8366C11.3366 12.6529 11.4012 12.4964 11.5305 12.3671C11.6599 12.2378 11.8164 12.1731 12 12.1731C12.1836 12.1731 12.3401 12.2378 12.4695 12.3671C12.5988 12.4964 12.6634 12.6529 12.6634 12.8366C12.6634 13.0203 12.5988 13.1767 12.4695 13.3059C12.3401 13.4353 12.1836 13.5 12 13.5Z" />
    </g>
  </svg>
);

const Carousel = () => {
  const splideRef = useRef<SplideRef>(null);
  const [slides, setSlides] = useState(articleData.slice(0, 5));

  // 最新3件
  useEffect(() => {
    const sortedArticles = articleData.sort((a, b) => {
      // 日付順
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    const latestArticles = sortedArticles.slice(0, 5);
    setSlides(latestArticles);
  }, []);

  return (
    <div style={{ width: "100vw", overflow: "visible" }} className="relative">
      <Global styles={globalSplideStyle} />
        <Splide
          ref={splideRef}
          options={{
            arrows: false,
            type: "loop",
            perPage: 1,
            fixedWidth: 1000,
            gap: "80px",
            focus: "center",
            padding: 0,
            autoplay: true,
            pagination: true,
            interval: 3000,
            pauseOnHover: true,
            speed: 1500,
          }}
          aria-label="ピックアップスライダー"
        >
        {slides.map((slide) => (
          <SplideSlide key={slide.id}>
            <div className="w-full h-[497px] md:w-[1000px] md:h-[336px] overflow-visible">
            {/* 画像 */}
            <div
              className="absolute top-[0px] left-[290px] md:top-0 md:left-0 w-[350px] h-[240px] md:w-[480px] md:h-[270px] rounded-[20px] shadow-md"
              css={css`
                z-index: 10;
                overflow: hidden;
                cursor: pointer;
                position: absolute;
                &:hover img {
                  transform: scale(1.06);
                }
                &:hover .overlay {
                  opacity: 0.2;
                }
              `}
            >
              <img
                src={slide.thumbnail}
                alt={slide.title}
                css={css`
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  transition: transform 0.3s;
                  display: block;
                  border-radius: 20px;
                `}
                className="carousel-img"
              />
              <div
                className="overlay"
                css={css`
                  position: absolute;
                  inset: 0;
                  background: #000;
                  opacity: 0;
                  transition: opacity 0.3s;
                  border-radius: 20px;
                  pointer-events: none;
                `}
              />
            </div>
              {/* テキストカード */}
              <div
                className="absolute flex flex-col gap-[12px] md:gap-[20px] rounded-[16px]
                  w-[350px] h-auto pt-[52px] px-[20px] pb-[20px] bottom-[20px] left-[330px]
                  md:bottom-[20px] md:left-[448px] md:h-auto md:w-auto md:pl-[60px] md:pr-[40px] md:py-[28px]"
                style={{ backgroundColor: 'var(--style-background-white)' }}
                css={cardRightShadow}
              >
                <div
                  className="text-regular font-md leading-[1.4] tracking-[1px] text-[var(--style-text-black)] self-stretch md:text-md md:tracking-[1.2px]"
                  css={css`
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;
                    overflow: hidden;
                  `}
                >
                  {slide.title}
                </div>
                <div
                  className="text-base leading-tall tracking-[0.8px] font-regular text-[var(--style-text-gray)]"
                  css={multiLineClamp2}
                >
                  {slide.description}
                </div>
                <div
                  className="flex justify-between text-sm text-gray pt-[12px] font-regular"
                  style={{
                    borderTop: "1px solid var(--Style-Object-Silver, #C4C4C4)",
                  }}
                >
                  <div className="flex items-center gap-2 text-[var(--style-text-gray)]">
                    <CalendarIcon />
                    <span className="text-sm font-regular leading-tall tracking-[0.7px]">
                       {/* 日付表示 */}
                      {new Date(slide.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="text-sm font-regular leading-tall tracking-[0.7px] text-[var(--style-text-gray)]">#DXO通信</div>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
            {/* カスタム矢印配置 */}
          <div
            className="absolute z-30 flex justify-between items-center gap-[24px]"
            css={css`
              bottom: -35px;
              left: calc(50% - 500px);
              @media (max-width: 767px) {
                bottom: -50px;
                left: calc(50% - 200px);
              }
              @media (min-width: 767px) and (max-width: 1023px) {
                bottom: -50px;
                left: calc(50% - 400px);
              }
              @media (max-width: 390px) {
                bottom: -50px;
                left: calc(50% - 150px);
              }
              // 中央スライド以外非表示
              .splide__slide:not(.is-active) & {
                display: none;
              }
            `}
            >
            <button aria-label="前へ" onClick={() => splideRef.current?.go("<")}>
              <PrevArrowIcon />
            </button>
            <button aria-label="次へ" onClick={() => splideRef.current?.go(">")}>
              <NextArrowIcon />
            </button>
          </div>
    </div>
    );
  };

export default Carousel;