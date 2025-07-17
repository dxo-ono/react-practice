import React from "react";
import News from "../components/News";
import Buttons from "../components/Buttons";


const Category: React.FC = () => {
  return (
    <div className="flex flex-col items-center self-stretch pt-[60px]">
    <News />
        <div className="py-[60px] ">
            （仮）内容  （仮）内容<br />
            （仮）内容  （仮）内容<br />
            （仮）内容  （仮）内容<br />
            （仮）内容  （仮）内容<br />
            （仮）内容  （仮）内容<br />
        </div>
    <Buttons />
    </div>
  );
};

export default Category;