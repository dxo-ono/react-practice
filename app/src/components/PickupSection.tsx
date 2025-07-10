import React from 'react';
import Carousel from './Carousel';


const PickupSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <h1 className="font-zen text-[32px] font-md leading-[44.8px] tracking-[1.6px] text-custom-black text-center mb-8 not-italic pt-[80px]">
        ピックアップ
      </h1>
      <Carousel />
    </section>
  );
};

export default PickupSection;