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
  &:hover .text-to-hover {
    color: rgba(67, 67, 67, 0.4);
  }

  &:hover .carousel-img {
    transform: scale(1.06);
  }

  &:hover .overlay {
    opacity: 0.2;
  }

  .text-to-hover {
    transition: color 0.3s ease;
  }

  .carousel-img {
    transition: transform 0.3s;
  }

  .overlay {
    transition: opacity 0.3s;
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
  &:hover img {
    transform: scale(1.08);
  }
  &:hover .overlay {
    opacity: 0.2;
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