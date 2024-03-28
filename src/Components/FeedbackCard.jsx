import React from "react";

const FeedbackCard = () => {
  return (
    <div className="border-2 border-blue-800 rounded-3xl flex flex-col w-1/4 h-full px-12 py-4 gap-2 hover:bg-blue-200">
      <div className="text-lg">Interview ID:</div>
      <div className="text-2xl font-semibold">
        Confidence Score:
        <div>stars </div>
      </div>

      <div className="text-2xl font-semibold">Grammer & Correctness:</div>
      <div className="text-xl font-semibold text-blue-600">
        Good Grammer with
        <div>Great Accuracy!</div>
      </div>
    </div>
  );
};

export default FeedbackCard;
