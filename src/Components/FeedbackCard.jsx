import React from "react";
import Stars from "./Stars";

const FeedbackCard = () => {
  // const stars = 2;
  return (
    <div className="border-2 border-blue-800 rounded-3xl flex flex-col w-1/4 h-full px-12 py-4 gap-2 hover:bg-blue-200">
      <div className="text-lg">Interview ID:</div>
      <div className="text-2xl font-semibold">
        Confidence Score:
        <div>
          <Stars stars={3} />{" "}
        </div>
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
