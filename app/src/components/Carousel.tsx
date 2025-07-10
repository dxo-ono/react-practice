/** @jsxImportSource @emotion/react */
import { css,Global } from '@emotion/react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import newyearImg from '../assets/images/newyear.png';

// スライドデータ
const slides = [
  { id: 1, title: '付さしとな」の行わことライセンス部分行わ法律物 Citation 、が場合著作さをの検証定め物が（例のをことことなる実践をで、未然するははをも依頼著者', image: newyearImg },
  { id: 2, title: '付さしとな」の行わことライセンス部分行わ法律物 Citation 、が場合著作さをの検証定め物が（例のをことことなる実践をで、未然するははをも依頼著者', image: newyearImg },
  { id: 3, title: '付さしとな」の行わことライセンス部分行わ法律物 Citation 、が場合著作さをの検証定め物が（例のをことことなる実践をで、未然するははをも依頼著者', image: newyearImg },
];

// スタイル定義
const cardRightShadow = css`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

const globalSplideStyle = css`
  .splide__arrows {
    position: absolute !important;
    bottom: 10px;
    left: 10px;
    display: flex !important;
    gap: 8px;
    z-index: 10;
    flex-direction: row-reverse !important; /* ← これを統合して1箇所に */
  }

  .splide__pagination {
    position: absolute !important;
    bottom: 10px;
    right: 10px;
    display: flex !important;
    gap: 6px;
    z-index: 10;
  }
`;



const Carousel = () => {
  return (
    <div className="w-full max-w-[1000px] mx-auto py-8">
      <Global styles={globalSplideStyle} />
      <Splide
        options={{
          type: 'loop',
          perPage: 1,
          autoplay: true,
          interval: 5000,
          pauseOnHover: true,
          arrows: true,
          pagination: true,
          speed: 800,
        }}
        aria-label="ピックアップスライダー"
      >
        {slides.map((slide) => (
          <SplideSlide key={slide.id}>
            <div className="flex rounded-2xl bg-white overflow-hidden w-full h-[336px]">
              {/* 左：画像 */}
              <div
                className="w-[480px] h-[324px] flex-shrink-0 bg-cover bg-center"
                css={css`
                  background-image: url(${slide.image});
                `}
              />

              <div
                className="inline-flex flex-col justify-center items-start gap-[20px] rounded-[16px] bg-white pl-[60px] pr-[40px] py-[28px]"
                css={cardRightShadow}
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

                  {/* サブテキスト */}
                  <div className="text-[16px] font-normal leading-[160%] tracking-[0.8px] w-[452px] whitespace-nowrap text-ellipsis overflow-hidden">
                    でいるなしなて行うませ項要件をは出所のに、、引用ませのなる許諾従うあるいは...
                  </div>

                  {/* 日付・カテゴリ */}
                  <div className="flex gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <svg width="16" height="16" fill="currentColor"><circle cx="8" cy="8" r="8" /></svg>
                      <span>2025.07.08</span>
                    </div>
                    <div className="text-[#2D72E7]">#DXO通信</div>
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