// import type { FC } from "react";
// import { css } from "@emotion/react";

// const cardStyle = css`
//   background: var(--style-background-white);
//   box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.2);
// `;


// type ArticleProps = {
//     thumbnail: string;
//     title: string;
//     description: string;
//     date: string;
//     author: string;
// };

// export const ArticleCard: FC<ArticleProps> = ({
//     thumbnail,
//     title,
//     description,
//     date,
//     author,
// }) => {
//     return(
//         <div className="flex flex-col items-start self-stretch rounded-[12px]"
//          css={cardStyle}>
//             <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
//             <div className="">
//                 <h2 className="h-[78px] flex-shrink-o self-stretch overflow-hidden text-base font-md font-zen">{title}</h2>
//                 <p className="text-base font-regular leading-tall tracking-[0.8px] font-zen">{description}</p>
//                 <div className="text-sm font-regular leading-tall tracking-[0.7px]">{date}｜{author}</div>
//             </div>
//         </div>
//     );
// };


// export default ArticleCard;