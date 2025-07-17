/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import News from "../components/News";
import Buttons from "../components/Buttons";

const cardStyle = css`
  border-radius: 28px;
  background: var(--Gradient-Soft);
`;

const Category: React.FC = () => {
  return (
    <div className="flex flex-col items-center self-stretch pt-[60px]"
     css={cardStyle}>
    <News />
    <Buttons />
    </div>
  );
};

export default Category;