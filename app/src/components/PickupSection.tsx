import React from 'react';
import Carousel from './Carousel';


const PickupSection: React.FC = () => {
  return (
    <section className="sec-pickup bg-[var(--Style-Background-White) my-[80px]">
      <h1 className="font-zen text-[32px] font-md leading-[44.8px] tracking-[1.6px] text-custom-black text-center not-italic mb-[60px]">
        ピックアップ
      </h1>
      <div className="w-full">
        <Carousel />
      </div>
    </section>
  );
};

export default PickupSection;