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
    <div className="block sm:hidden px-[20px] py-[20px] sticky top-0"
      css={css`
        ${gradientVivid};
        background: var(--Gradient-Vivid);
      `}
      >
      <nav className="flex justify-around text-base font-md text-white font-zen">
        <a href="#pickup" className="hover:underline">ピックアップ</a>
        <a href="#news" className="hover:underline">ニュース</a>
        <a href="#interview" className="hover:underline">インタビュー</a>
      </nav>
    </div>
  );
};

export default TopLink;