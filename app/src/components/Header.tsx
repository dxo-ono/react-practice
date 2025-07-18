/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import Buttons from "../components/Buttons";
import { Link } from "react-router-dom";
// 画像インポート
import logoMark from "../assets/images/logo_mark1.png";
import RecruitButton from "../assets/images/btn_recruit@2x.png";

// logoTextStyle定義
const logoTextStyle = css`
  -webkit-text-stroke-width: 0;
`;

// buttonStyle定義
const buttonStyle = css`
  color: var(--style-Text-White, #fff);
  line-height: 160%;
  letter-spacing: 0.8px;
  background: var(
    --Gradient-Vivid,
    linear-gradient(
      90deg,
      var(--Master-Sub-Green, #aadcb9) 0%,
      var(--Master-Sub-Blue, #82bef0) 50%,
      var(--Master-Sub-Purple, #d2a5eb) 100%
    )
  );
`;

const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className="flex w-full m-w-[1440px] h-[70px] md:h-[80px] pl-[20px]  md:px-[79px] justify-between items-center sticky top-0 z-50 shadow-[0_0_16px_0_rgba(0,0,0,0.15)]"
      style={{ background: "var(--color-white-900, #FFF)" }}
    >
      {/* トップロゴ */}
      <div className="flex items-center gap-[16px] flex-shrink-0">
        <Link to="/">
          <img
            src={logoMark}
            alt="Logo"
            className="w-[39px] md:w-[49px] h-[40.012px] md:h-[50.271px] object-contain flex-shrink-0 aspect-[39/40.01] md:aspect-[49/50.271]"
          />
        </Link>
        <div className="sm:flex flex-col justify-center items-start">
          <div
            className="font-zen text-sm font-regular leading-[1.6] tracking-[0.7px] "
            css={logoTextStyle}
            style={{ color: "var(--Style-Text-Black, #434343)" }}
          >
            非常識を常識に
          </div>
          <div
            className="font-zen text-xs font-regular leading-[1.6] tracking-[0.6px]"
            style={{ color: "var(--Style-Text-Grey, #6B6B6B)" }}
          >
            Create a new common sense
          </div>
        </div>
      </div>

      {/* SPナビゲーションメニュー */}
      {isMobile ? (
        <>
          {/* ハンバーガーボタン */}
          <div
            className="flex h-[70px] justify-center items-center cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            role="button"
            aria-label="Toggle menu"
            tabIndex={0}
          >
            {menuOpen ? (
              <div className="relative w-[70px] h-[70px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 70 70"
                  fill="none"
                >
                  <mask
                    id="mask0_10915_10721"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="21"
                    y="21"
                    width="28"
                    height="28"
                  >
                    <rect x="21" y="21" width="28" height="28" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_10915_10721)">
                    <path
                      d="M34.9992 36.7231L23.5256 48.1967C23.2855 48.4368 23.0019 48.5603 22.6749 48.5671C22.3475 48.5739 22.0567 48.4504 21.8026 48.1967C21.5488 47.9425 21.4219 47.6553 21.4219 47.3351C21.4219 47.0146 21.5488 46.7274 21.8026 46.4736L33.2761 35L21.8026 23.5265C21.5624 23.2863 21.4389 23.0028 21.4321 22.6757C21.4253 22.3483 21.5488 22.0576 21.8026 21.8034C22.0567 21.5496 22.3439 21.4227 22.6641 21.4227C22.9847 21.4227 23.2718 21.5496 23.5256 21.8034L34.9992 33.277L46.4727 21.8034C46.7129 21.5633 46.9965 21.4398 47.3235 21.433C47.6509 21.4261 47.9416 21.5496 48.1958 21.8034C48.4496 22.0576 48.5765 22.3448 48.5765 22.665C48.5765 22.9855 48.4496 23.2727 48.1958 23.5265L36.7223 35L48.1958 46.4736C48.436 46.7137 48.5594 46.9973 48.5663 47.3243C48.5731 47.6517 48.4496 47.9425 48.1958 48.1967C47.9416 48.4504 47.6545 48.5773 47.3343 48.5773C47.0137 48.5773 46.7265 48.4504 46.4727 48.1967L34.9992 36.7231Z"
                      fill="#9D9D9D"
                    />
                  </g>
                </svg>
              </div>
            ) : (
              <div className="flex flex-col items-center px-[21px] gap-[6px]">
                <div
                  className="w-[28px] h-[2px]"
                  style={{ backgroundColor: "#9D9D9D" }}
                />
                <div
                  className="w-[28px] h-[2px]"
                  style={{ backgroundColor: "#9D9D9D" }}
                />
                <div
                  className="w-[28px] h-[2px]"
                  style={{ backgroundColor: "#9D9D9D" }}
                />
              </div>
            )}
          </div>

          {/* メニューが開いていたら表示 */}
          {menuOpen && (
            <nav
              className="absolute w-[390px] h-[784px] flex flex-col items-center text-base top-full right-0 bg-white px-[20px]"
              style={{ minWidth: "160px", zIndex: 100 }}
            >
              <div
                className="w-[300px] flex py-[24px] justify-center items-center"
                style={{
                  borderBottom: "1px solid var(--style-object-silver, #C4C4C4)",
                }}
              >
                <a
                  href="ページリンク"
                  className="font-zen text-center text-base font-semibold leading-[1.6] tracking-[0.8px] mt-[35px]"
                  style={{ color: "var(--Style-Text-Black, #434343)" }}
                  onClick={() => setMenuOpen(false)}
                >
                  会社情報
                </a>
              </div>
              <div
                className="w-[300px] flex py-[24px] justify-center items-center"
                style={{
                  borderBottom: "1px solid var(--style-object-silver, #C4C4C4)",
                }}
              >
                <a
                  href="ページリンク"
                  className="font-zen text-center text-base font-semibold leading-[1.6] tracking-[0.8px]"
                  style={{ color: "var(--Style-Text-Black, #434343)" }}
                  onClick={() => setMenuOpen(false)}
                >
                  サービス
                </a>
              </div>

              <a
                href="ページリンク"
                className="w-[350px] h-[144.118px] flex-shrink-0 mt-[80px] mx-auto"
              >
                <img src={RecruitButton} alt="採用情報を見るボタン" />
              </a>
              <div className="w-[300px] mx-auto my-auto flex flex-col md:flex-row md:w-auto md:h-auto md:p-0 justify-center items-center">
                <Buttons direction="col" />
              </div>
            </nav>
          )}
        </>
      ) : (
        // {/* PCナビゲーションメニュー */}
        <div className="flex items-center gap-[32px] ml-auto">
          <a
            href="ページリンク"
            className="flex justify-center items-center self-stretch gap-[10px] px-0 py-[24px] font-zen text-[16px] font-normal leading-[1.6] tracking-[0.8px] transition"
            style={{ color: "var(--style-text-black, #434343)" }}
          >
            会社情報
          </a>
          <a
            href="ページリンク"
            className="flex justify-center items-center self-stretch gap-[10px] px-0 py-[24px] font-zen text-[16px] font-normal leading-[1.6] tracking-[0.8px] transition"
            style={{ color: "var(--Style-Text-Black, #434343)" }}
          >
            サービス
          </a>
          <a
            href="ページリンク"
            className="font-zen flex h-[40px] pt-[5.5px] pr-[24px] pb-[6.5px] pl-[24px] rounded-full font-base items-center text-center bg-gradient-to-r hover:opacity-90 transition"
            css={buttonStyle}
          >
            採用エントリー
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
