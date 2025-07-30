/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// ボタン明るくする
export const ButtonHoverStyle = css`
  transition: filter 0.3s ease;
  &:hover {
    filter: brightness(115%);
  }
`;

// 画像ズーム＋暗くする
export const imageHoverStyle = css`
  overflow: hidden;
  cursor: pointer;
  position: relative;
  z-index: 10;
  &:hover img {
    transform: scale(1.06);
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
  border-radius: 20px;
  pointer-events: none;
`;