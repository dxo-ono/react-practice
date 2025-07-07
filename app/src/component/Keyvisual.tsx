import React from "react";
import KeyVisualImg from "../assets/images/KeyVisual.png";

const KeyVisual: React.FC = () => (
  <div
    className="flex justify-center items-center"
    style={{
      height: "560px",
      padding: "0px 351px",
      background:
        `linear-gradient(0deg, rgba(255,255,255,0.90) 0%, rgba(255,255,255,0.90) 100%), url(${KeyVisualImg}) lightgray 0px -186.441px / 100% 192.857% no-repeat`,
    }}
  ></div>
);

export default KeyVisual;