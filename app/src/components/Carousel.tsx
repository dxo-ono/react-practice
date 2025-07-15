/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import { Splide, SplideSlide, SplideRef } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import newyearImg from '../assets/images/newyear.png';

const slides = [
  { id: 1, title: '付さしとな」の行わことライセンス部分行わ法律物 Citation 、が場合著作さをの検証定め物が（例のをことことなる実践をで、未然するははをも依頼著者', image: newyearImg },
  { id: 2, title: '付さしとな」の行わことライセンス部分行わ法律物 Citation 、が場合著作さをの検証定め物が（例のをことことなる実践をで、未然するははをも依頼著者', image: newyearImg },
  { id: 3, title: '付さしとな」の行わことライセンス部分行わ法律物 Citation 、が場合著作さをの検証定め物が（例のをことことなる実践をで、未然するははをも依頼著者', image: newyearImg },
];

// ボックスシャドウ
const cardRightShadow = css`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

// // 矢印SVG
// // 前へ
// const PrevArrowIcon =() => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
//   <rect width="32" height="32" rx="16" fill="#9D9D9D"/>
//   <path d="M17.7147 8L10.2861 15.4286L17.7147 22.8571" stroke="white" strokeWidth="2.28571" strokeLinecap="round" strokeLinejoin="round"/>
// </svg>
// );
// // 後へ
// const NextArrowIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
//     <rect width="32" height="32" rx="16" fill="#9D9D9D"/>
//     <path d="M13.2863 22.8572L20.7148 15.4286L13.2863 8.00003" stroke="white" strokeWidth="2.28571" strokeLinecap="round" strokeLinejoin="round"/>
//   </svg>
// );

// カレンダーアイコンSVG
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
      style={{ maskType: 'alpha' }}
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


// // グローバルスタイル
const globalSplideStyle = css`
.splide__container {
  height: auto;
  position: relative;
  width: 1000px;
  overflow: visible;
}

.splide__arrows,
.splide__pagination {
  position: absolute;
  height: 28px;
  z-index: 20;
  pointer-events: auto;
  display: flex;
}

/* arrows左に固定 */
.splide__arrows {
  left: calc(50vw - 520px);
  width: 130px;
  height: 64px;
  bottom: -53px;
  gap: 24px;
  z-index: 30;
}

  .splide__arrow {
    display: flex;
    width: 32px;
    height: 32px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    align-items: center;
    justify-content: center;
    color: #9D9D9D;
    font-size: 16px;
  }

.splide__pagination {
  position: absolute;
  bottom: -33px;
  right: -900px;
  display: flex !important;
  gap: 8px;
  z-index: 20;
}

.splide__pagination__page {
  width: 28px;
  height: 2px;
  border-radius: 100px;
  background: #9D9D9D;
  color: white;
  opacity: 1;
  transition: background 0.3s ease;
}

.splide__pagination__page.is-active {
  background: #2D72E7;
}
`;

const Carousel = () => {
  return (
    <div style={{ width: '100vw', overflow: 'visible' }}>
      <Global styles={globalSplideStyle} />
      <Splide
        options={{
          type: 'loop',
          perPage: 1,
          fixedWidth: 1000,
          gap: '80px',
          focus: 'center',
          padding: 0,
          autoplay: true,
          arrows: true,
          pagination: true,
          interval: 4000,
          pauseOnHover: true,
        }}
        aria-label="ピックアップスライダー"
      >
        {slides.map((slide) => (
          <SplideSlide key={slide.id}>
            <div className="relative w-[1000px] h-[336px]">
              {/* 画像(左上) */}
              <div
                className="absolute top-0 left-0 w-[480px] h-[270px] bg-cover bg-center rounded-[20px] shadow-md"
                css={css`
                  background-image: url(${slide.image});
                  z-index: 10;
                `}
              />
              {/* テキスト（右下） */}
              <div
                className="absolute bottom-[20px] left-[448px] h-auto w-auto bg-white rounded-[16px] pl-[60px] pr-[40px] py-[28px] flex flex-col gap-[20px] shadow-xl"
                css={css`
                  ${cardRightShadow};
                  z-index: 1;
                `}
              >
                {/* タイトル */}
                <div
                  className="text-black text-[20px] leading-[160%] tracking-[0.8px]"
                  css={css`
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;
                    overflow: hidden;
                  `}
                >
                  {slide.title}
                </div>

                      <div className="text-base leading-[160%] tracking-[0.8px] w-[452px] text-ellipsis overflow-hidden font-regular">
                        でいるなしなて行うませ項要件をは出所のに、、引用ませのなる許諾従うあるいは...
                      </div>
                      {/* 日付・カテゴリ */}
                    <div className="flex justify-between text-sm text-gray pt-[12px] font-regular"
                      style={{borderTop: "1px solid var(--Style-Object-Silver, #C4C4C4)"}}>
                        <div className="flex items-center gap-2">
                          <CalendarIcon />
                          <span>2025.07.08</span>
                        </div>
                      <div className="text-gray">#DXO通信</div>

                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Carousel;