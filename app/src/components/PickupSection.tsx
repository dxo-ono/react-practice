import React from "react";
import Carousel from "./Carousel";

const PickupSection: React.FC = () => {
  return (
      <section
        className="scroll-mt-[100px] bg-[var(--Style-Background-White) mt-[80px] mb-[140px] md:mb-[128px]"
        id="pickup"
      >
          <h1 className="text-center font-zen text-md font-md leading-[1.4] tracking-[1.2px] mb-[40px] md:text-lg md:mb-[60px] md:tracking-[1.6px] text-[var(--style-text-black)]">
            ピックアップ
          </h1>
          <div className="w-full">
            <Carousel />
          </div>
      </section>
  );
};

export default PickupSection;
