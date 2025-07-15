import React from "react";
import { css } from '@emotion/react';


const gradientVivid = css`
  --Master-Sub-Green: #AADCB9;
  --Master-Sub-Blue: #82BEF0;
  --Master-Sub-Purple: #D2A5EB;

  --Gradient-Vivid: linear-gradient(90deg, var(--Master-Sub-Green) 0%, var(--Master-Sub-Blue) 50%, var(--Master-Sub-Purple) 100%);
`;


const TopLink: React.FC = () => {
  return (
    <div className="sm:hidden w-full h-[60px] px-[20px] py-[0px] top-0 flex items-center justify-between text-base font-md text-white font-zen gap-auto"
      css={css`
        ${gradientVivid};
        background: var(--Gradient-Vivid);
      `}
      >
        {/* ピックアップ */}
        <a href="#pickup" className="hover:underline">
          <div className="flex flex-col w-[100px] justify-center items-center gap-[2px] flex-shrink-0">
            ピックアップ
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1L5 5L9 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </a>
        {/* ニュース */}
        <a href="#news" className="hover:underline">
          <div className="flex flex-col w-[100px] justify-center items-center gap-[2px] flex-shrink-0">
            ニュース
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1L5 5L9 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </a>
        {/* インタビュー */}
        <a href="#interview" className="hover:underline">
          <div className="flex flex-col w-[100px] justify-center items-center gap-[2px] flex-shrink-0">
            インタビュー
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1L5 5L9 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          </a>
    </div>
  );
};

export default TopLink;