/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

type ButtonProps = {
  bgImage: string;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
};

const backgroundImageStyle = (bgImage: string) => css`
  background-image: url(${bgImage});
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Button: React.FC<ButtonProps> = ({
  bgImage,
  onClick,
  className,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex w-[300px] h-[60px] md:w-[360px] justify-center items-center gap-[8px] rounded-[999px] bg-gray-300 border-none cursor-pointer ${className ?? ""}`}
      css={backgroundImageStyle(bgImage)}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
