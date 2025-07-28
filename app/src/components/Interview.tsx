import React from "react";

const Inteview: React.FC = () => {


  return (
    <div className="flex flex-col justify-center items-center m-w-[1280px] pb-[80px] gap-[60px]">
        <div className="flex flex-col items-center self-stretch gap-[8px]">
            <div className="flex justify-center items-center font-zen not-italic self-stretch font-md text-md leading-[1.6] tracking-[0.05em]">
              インタビュー
            </div>
            <div className="items-center font-zen text-base font-regular not-italic leading-[1.6] tracking-[0.05em]">
              DXOで活躍する<br className="block sm:hidden" />社員たちの声をお届けします。
            </div>
        </div>

        <div className="flex w-[350px] pb-[80px] flex-col justify-center items-center bg-[#FFF] rounded-[28px]">
            （仮）内容  （仮）内容<br />
            （仮）内容  （仮）内容<br />
            （仮）内容  （仮）内容<br />
            （仮）内容  （仮）内容<br />
            （仮）内容  （仮）内容<br />
        </div>
    </div>
  );
};

export default Inteview;
