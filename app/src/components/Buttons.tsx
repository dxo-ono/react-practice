import React from "react";
import Button from "../components/Button";

// 画像インポート
import ButtonLeftImage from "../assets/images/btn_left@2x.png";
import ButtonRightImage from "../assets/images/btn_right@2x.png";

const Buttons: React.FC = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-[24px] py-[80px]">
      <Button
        bgImage={ButtonLeftImage}
        onClick={() => alert("左ボタンがクリックされました")}
      >
      </Button>

      <Button
        bgImage={ButtonRightImage}
        onClick={() => alert("右ボタンがクリックされました")}
      >
      </Button>
    </div>
  );
};

export default Buttons;
