import React from "react";
import Button from "../components/Button";
// 画像インポート
import ButtonLeftImage from "../assets/images/btn_left@2x.png";
import ButtonRightImage from "../assets/images/btn_right@2x.png";

type ButtonsProps = {
  direction?: "row" | "col";
};

const Buttons: React.FC<ButtonsProps> = ({ direction = "row" }) => {
  const layoutClass =
    direction === "col"
      ? "flex-col gap-[24px]"
      : "flex-col md:flex-row gap-[24px]";

  return (
    <div
      className={`flex ${layoutClass} justify-center items-center py-[80px]`}
    >
      <Button
        bgImage={ButtonLeftImage}
        onClick={() => alert("テックブログへ移動")}
      ></Button>

      <Button
        bgImage={ButtonRightImage}
        onClick={() => alert("デザイナーブログへ移動")}
      ></Button>
    </div>
  );
};

export default Buttons;
