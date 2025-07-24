/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from '@emotion/react';
import { Link } from "react-router-dom";
// 画像インポート
import Xicon from "../assets/images/Xicon@2x.png";
import Bicon from "../assets/images/Bicon@2x.png";

//borderTopStyle
const borderTopStyle = css`
  border-top: 1px solid var(--Style-Object-LightGrey, #9D9D9D);
    @media (min-width: 1023px) {
    border-top: none;
    border-left: 1px solid var(--Style-Object-LightGrey, #9D9D9D);
  }
`;

// Hover時underlineStyle
const borderBottomStyle = css`
      &:hover {
        border-bottom: 1px solid var(--Style-Text-Grey, #6B6B6B);
      }
`;

//Footer main backgroundStyle
const backgroundStyle = css`
  background: var(--Gradient-Dark);
`;

// キャッチコピー backgroundStyle
const CopyBackgroundStyle = css`
  background: var(--Gradient-Soft, linear-gradient(0deg, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.92) 100%), linear-gradient(90deg, var(--Master-Sub-Green, #AADCB9) 0%, var(--Master-Sub-Blue, #82BEF0) 50%, var(--Master-Sub-Purple, #D2A5EB) 100%));
  `;

const Footer: React.FC = () => {
  return (
    // 全部を囲む
    <footer className="flex flex-col items-center self-stretch">
      {/* DXO ～ コーポレートサイトへ まで ここに背景色指定 */}
<div
  className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full mx-auto gap-[40px] pt-[40px] px-[40px] lg:gap-[64px] lg:px-[80px] pb-[40px] lg:pb-[82px]"
  css={backgroundStyle}
>
  {/* カラム1: DXO説明とSNS */}
  <div className="flex flex-col items-center lg:items-start gap-[40px] lg:w-1/4">
    {/* タイトル・説明 */}
    <div className="flex flex-col items-center lg:items-start gap-[8px] self-stretch">
      <div className="text-md font-md leading-tall tracking-[1.2px] text-[var(--style-text-black)]">
        DXO Blog
      </div>
      <div className="text-sm text-[var(--style-text-black)]">
        DXOの社員や文化、最新のお知らせをお届けするブログ。
      </div>
    </div>

    {/* SNSアイコン */}
    <div className="flex justify-start items-center gap-[12px]">
      <Link to="/">
        <div
          className="w-[40px] h-[40px] rounded-full"
          style={{
            backgroundImage: `url(${Xicon})`,
            backgroundColor: 'var(--Style-Text-Black, #434343)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
      </Link>
      <Link to="/">
        <div
          className="w-[40px] h-[40px] rounded-full"
          style={{
            backgroundImage: `url(${Bicon})`,
            backgroundColor: 'var(--Style-Text-Black, #434343)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
      </Link>
    </div>
  </div>

  {/* カラム2: Category */}
  <div className="flex flex-col gap-[16px] lg:w-1/4">
    <div className="text-base font-md leading-tall tracking-[0.8px] text-[var(--style-text-gray)]">
      Category
    </div>
    <ul className="flex flex-col gap-[8px] text-sm text-[var(--style-text-black)] font-regular leading-tall tracking-[0.7px]">
      <li>
        <Link to="/category?tab=news" className="hover:underline" css={borderBottomStyle}>
          ニュース
        </Link>
      </li>
      <li>
        <Link to="/category?tab=interview" className="hover:underline" css={borderBottomStyle}>
          インタビュー
        </Link>
      </li>
    </ul>
  </div>

  {/* カラム3: Archive */}
  <div className="flex flex-col gap-[16px] lg:w-1/4">
    <div className="text-base font-md leading-tall tracking-[0.8px] text-[var(--style-text-gray)]">
      Archive
    </div>
    <ul>
      <li>
        <Link to="#" className="text-sm text-[var(--style-text-black)] font-regular leading-tall tracking-[0.7px]" css={borderBottomStyle}>
          旧テックブログはこちらから
        </Link>
      </li>
    </ul>
  </div>

  {/* カラム4: Contact（左ボーダー） */}
  <div
    className="flex flex-col gap-[16px] pt-[20px] lg:pt-0 lg:pl-[32px] lg:w-1/4"
    css={borderTopStyle}
  >
    <div className="text-base font-md leading-tall tracking-[0.8px] text-[var(--style-text-gray)]">
      Contact
    </div>
    <div className="flex flex-col gap-[12px]">
      <div className="text-sm font-regular leading-tall tracking-[0.7px] text-[var(--style-text-black)]">
        〒164-0012
        <br />
        中野区本町2丁目46-1 中野坂上サンブライトツイン7階
      </div>
      <div className="text-sm font-regular leading-tall tracking-[0.7px] text-[var(--style-text-black)]" css={borderBottomStyle}>
        <a href="mailto:magazine@dxo.co.jp" className="hover:underline">
          magazine@dxo.co.jp
        </a>
      </div>
      <div className="flex items-center gap-[6px]" css={borderBottomStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <mask id="mask0_11620_3863" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
            <rect width="16" height="16" fill="#D9D9D9"/>
          </mask>
  <g mask="url(#mask0_11620_3863)">
    <path d="M2.71491 13.4689C2.29513 13.4689 1.93741 13.3211 1.64174 13.0254C1.34608 12.7298 1.19824 12.372 1.19824 11.9522V4.04792C1.19824 3.62814 1.34608 3.27042 1.64174 2.97475C1.93741 2.67908 2.29513 2.53125 2.71491 2.53125H13.2859C13.7057 2.53125 14.0634 2.67908 14.3591 2.97475C14.6547 3.27042 14.8026 3.62814 14.8026 4.04792V11.9522C14.8026 12.372 14.6547 12.7298 14.3591 13.0254C14.0634 13.3211 13.7057 13.4689 13.2859 13.4689H2.71491ZM13.2859 5.50475L8.40224 8.58558C8.33924 8.62425 8.27308 8.65325 8.20374 8.67258C8.13441 8.69192 8.06663 8.70158 8.00041 8.70158C7.93419 8.70158 7.86641 8.69192 7.79707 8.67258C7.72774 8.65325 7.66158 8.62425 7.59858 8.58558L2.71491 5.50475V11.9522H13.2859V5.50475ZM8.00041 7.38125L13.2859 4.04792H2.71491L8.00041 7.38125ZM2.71491 5.68742V4.62192V4.64042V4.04792V4.64108V4.62675V5.68742Z" fill="#6B6B6B"/>
  </g>
</svg>
        <a href="#" className="text-sm font-regular leading-tall tracking-[0.7px] text-[var(--style-text-gray)] hover:underline">
          コーポレートサイトへ
        </a>
      </div>
    </div>
  </div>
</div>

{/* コピーライト */}
<div className="w-full pt-[20px] pb-[40px] flex items-center justify-center text-xs text-[var(--style-text-gray)]" css={CopyBackgroundStyle}>
  © 2023 DXO Co., Ltd. All rights reserved.
</div>
    </footer>
  );
};

export default Footer;
