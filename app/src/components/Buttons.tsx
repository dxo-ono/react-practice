import React from "react";
import Button from "../components/Button";
import { useMediaQuery } from "react-responsive";
// 画像インポート
import ButtonLeftImage from "../assets/images/btn_left@2x.png";
import ButtonRightImage from "../assets/images/btn_right@2x.png";
import ButtonLeftSpImage from "../assets/images/btn_left_sp@2x.png";
import ButtonRightSpImage from "../assets/images/btn_right_sp@2x.png";

type ButtonsProps = {
  direction?: "row" | "col";
};

const Buttons: React.FC<ButtonsProps> = ({ direction = "row" }) => {
  // md: 768px以上ならtrue
  const isMdUp = useMediaQuery({ minWidth: 768 });

  const layoutClass =
    direction === "col"
      ? "flex-col gap-[24px]"
      : "flex-col md:flex-row gap-[24px]";

  const leftImage = isMdUp ? ButtonLeftImage : ButtonLeftSpImage;
  const rightImage = isMdUp ? ButtonRightImage : ButtonRightSpImage;

  return (
    <div
      className={`flex ${layoutClass} justify-center items-center`}
    >
      <Button
        bgImage={leftImage}
        onClick={() => alert("テックブログへ移動")}
      ></Button>

      <Button
        bgImage={rightImage}
        onClick={() => alert("デザイナーブログへ移動")}
      ></Button>
    </div>
  );
};

export default Buttons;
