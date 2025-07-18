/** @jsxImportSource @emotion/react */
import React from "react";

interface NewsPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const NewsPagination: React.FC<NewsPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = [1, 2, 3,  "ellipsis", totalPages];

  return (
    <div className="flex flex-col items-center gap-[24px] self-stretch font-zen">
      {/* ページ番号 */}
      <div className="flex justify-center items-center gap-[8px]">
        {pages.map((num, index) =>
          num === "ellipsis" ? (
            <span key={`ellipsis-${index}`} className="px-[8px] select-none">
              ...
            </span>
          ) : (
            <button
              key={`page-${num}`}
              className={`flex py-[4px] px-[8px] justify-center items-center rounded border
                ${
                  currentPage === num
                    ? "bg-[#FFF] text-[#350000] border-transparent"
                    : "bg-[#FFF] text-[#434343] border-[#9D9D9D]"
                }`}
              onClick={() => onPageChange(num as number)}
            >
              {num}
            </button>
          )
        )}
      </div>

      {/* 次へ */}
      <div
        className="flex py-[4px] px-[12px] items-center gap-[6px] bg-[#9D9D9D] font-zen text-base font-regular text-white rounded cursor-pointer select-none"
        onClick={() => {
          if (currentPage < totalPages) onPageChange(currentPage + 1);
        }}
      >
        次へ
        <p className="w-[6px] h-[12px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 9 14"
            fill="none"
            className="w-[9px] h-[14px] stroke-white stroke-[2px]"
          >
            <path
              d="M1.5 13L7.5 7L1.5 1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </p>
      </div>
    </div>
  );
};

export default NewsPagination;