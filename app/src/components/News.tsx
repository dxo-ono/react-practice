import React from "react";

const News: React.FC = () => {
  return (
    <section className="flex flex-col items-center self-stretch">
        <div className="flex flex-col">
            <div className="flex justify-center items-center font-zen not-italic self-stretch text-md">
              ニュース
            </div>
            <div className="items-center font-zen text-base font-regular">
              DXOの最新の取り組みや成果をご紹介します。
            </div>
        </div>
    </section>
  );
};

export default News;