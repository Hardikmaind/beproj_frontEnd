import React from "react";
import Stars from "./Stars";

const FeedbackCard = ({ stars, Grammer, Accuracy, IID, IType }) => {
  // const stars = 2;
  return (
    <div className="border-2 border-blue-800 rounded-3xl flex flex-col w-1/4 h-full px-12 py-4 gap-2 hover:bg-blue-200">
      <div className="text-lg">
        <div>
          <span className="font-semibold">Interview ID: </span>
          {IID}
        </div>
        <div>
          {" "}
          <span className="font-semibold">Interview Type: </span>
          {IType}
        </div>
      </div>
      <div className="text-2xl font-semibold">
        Confidence Rating:
        <div>
          <Stars stars={stars} />{" "}
        </div>
      </div>

      {/* <div className="text-2xl font-semibold">Grammer & Correctness:</div> */}
      {/* <div className="text-xl font-semibold text-blue-600">
        {Grammer} Grammer with
        <div>{Accuracy} Accuracy!</div>
      </div> */}

      <div className="text-2xl font-semibold">Grammer Level:</div>
      <div className="text-xl font-semibold text-blue-600">
        {Grammer}
      </div>
    </div>
  );
};

export default FeedbackCard;
