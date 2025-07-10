import React from 'react';
import Carousel from './Carousel';


const PickupSection: React.FC = () => {
  return (
    <section className="my-[80px] bg-white">
      <h1 className="font-zen text-[32px] font-md leading-[44.8px] tracking-[1.6px] text-custom-black text-center not-italic">
        ピックアップ
      </h1>
      <Carousel />
    </section>
  );
};

export default PickupSection;