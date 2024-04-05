import React from "react";

const SingleQuestionFeedback = ({Que,Ans,rating,index}) => {
  // The provided string
  const text = Ans?Ans:"\n\n Answer is Correct";

  // Split the string into an array based on "\n\n" delimiter
  const textParts = text.split('\n\n');

  // Extract the text after "\n\n"
  const extractedText = textParts[1];

  return (
    <div className="p-4 md:p-5 border-b-2 space-y-4">
      {/* Your scrollable content goes here */}
      <div className=" ">
        {/* Questions */}
        <p className="text-base leading-relaxed text-gray-900 font-bold">
        {index}.{Que}
        </p>
        {/* Rating */}
        <p className="text-base leading-relaxed text-gray-900 ">
          <span className="font-semibold">Rating: </span> {rating || rating==0.0? rating : "10"}
        </p>
        {/* Answers */}
        <p className="text-base leading-relaxed text-gray-900">
          <span className="font-bold">Ans: </span> { extractedText? extractedText : text}
        </p>
      </div>
      {/* Add more content here */}
    </div>
  );
};

export default SingleQuestionFeedback;
