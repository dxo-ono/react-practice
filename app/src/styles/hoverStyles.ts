/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// 文字明るくする
export const textHoverStyle = css`
  transition: color 0.3s ease;
  &:hover {
    color: rgba(67, 67, 67, 0.4)
  }
`;

// コンテナ全体文字を明るくする
export const slideHoverStyle = css`
  .text-to-hover {
    transition: color 0.3s ease;
  }

  .carousel-img {
    transition: transform 0.3s;
  }

  .overlay {
    transition: opacity 0.3s;
  }

  @media (min-width: 1024px) {
    &:hover .text-to-hover {
      color: rgba(67, 67, 67, 0.4);
    }

    &:hover .carousel-img {
      transform: scale(1.06);
    }

    &:hover .overlay {
      opacity: 0.2;
    }
  }
`;

// ボタン明るくする
export const ButtonHoverStyle = css`
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(115%);
    color: var(--style-text-white);
  }
`;


// 画像ズーム＋暗くする
export const imageHoverStyle = css`
  overflow: hidden;
  cursor: pointer;
  position: relative;
  z-index: 10;
  @media (min-width: 1024px) {
    &:hover img {
      transform: scale(1.08);
    }
    &:hover .overlay {
      opacity: 0.2;
    }
  }
`;

export const imageOverlayStyle = css`
  position: absolute;
  inset: 0;
  background: #000;
  opacity: 0;
  transition: opacity 0.3s;
  border-radius: 12px 12px 0 0;
  pointer-events: none;
`;



// コンテナ全体文字を明るく＋画像ズーム＋暗くする＋テキスト色変化
export const cardHoverStyle = css`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 10;

  .text-to-hover {
    transition: color 0.3s ease;
  }

  .carousel-img {
    transition: transform 0.3s;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: #000;
    opacity: 0;
    transition: opacity 0.3s;
    border-radius: 12px 12px 0 0;
    pointer-events: none;
  }

  @media (min-width: 1024px) {
    &:hover .text-to-hover {
      color: rgba(67, 67, 67, 0.4);
    }

    &:hover .carousel-img {
      transform: scale(1.08);
    }

    &:hover .overlay {
      opacity: 0.2;
    }
  }
`;

// ページネーションhover 明 → 暗
export const paginationButtonHoverStyle = css`
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    background-color: var(--style-object-lightgrey, #9d9d9d);
    color: var(--style-text-white, #ffffff);
  }
`;

// ページネーションhover 暗 → 明
export const paginationDarkButtonHoverStyle = css`
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    background-color: var(--style-object-white, #ffffff);
    color: var(--style-text-gray, #6b6b6b);
  }
`;

// 画像hover 白っぽく
export const whiteOverlayHoverStyle = css`
  position: relative;
  overflow: hidden;
  @media (min-width: 390px) {
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(255, 255, 255, 0);
      transition: background 0.3s ease;
      pointer-events: none;
    }

    &:hover::after {
      background: rgba(255, 255, 255, 0.3);
    }
      }
`;

