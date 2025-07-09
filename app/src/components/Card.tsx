/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

type CardProps = {
  title: string;
  description: string;
  date: string;
  tag?: string;
  imageUrl?: string;
  className: string;
};

const Card: React.FC<CardProps> = ({ title, description, date, tag, imageUrl }) => {
  return (
    <div
      className="bg-white rounded-xl shadow p-4 transition hover:shadow-md w-full max-w-sm"
      css={css`
        transition: transform 0.2s;
        &:hover {
          transform: translateY(-4px);
        }
      `}
    >
      {imageUrl && <img src={imageUrl} alt={title} className="mb-2 rounded-md w-full h-40 object-cover" />}
      {tag && (
        <span className="text-xs text-white bg-blue-600 px-2 py-1 rounded inline-block mb-2">
          {tag}
        </span>
      )}
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
      <p className="text-xs text-gray-400 mt-2">{date}</p>
    </div>
  );
};

export default Card;
