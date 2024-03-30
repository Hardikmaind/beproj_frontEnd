import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Stars = ({ stars }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="text-yellow-500" />
        ) : stars >= index + 0.5 ? (
          <FaStarHalfAlt className="text-yellow-500" />
        ) : (
          <AiOutlineStar className="text-yellow-500" />
        )}
      </span>
    );
  });

  return (
    // <Wrapper>
    <div className="flex flex-row gap-2 mt-1">{ratingStar}</div>
    // </Wrapper>
  );
};

export default Stars;
