import React from "react";
import Stars from "./Stars";

const FeedbackCard = ({ stars, Grammar, Accuracy, IID, IType }) => {
  // const stars = 2;
  var GrammerLevel;
  if (Grammar > 0.8) {
    GrammerLevel = "Excellent";
  } else if (Grammar <= 0.8 && Grammar > 0.6) {
    GrammerLevel = "Good";
  } else if (Grammar <= 0.6 && Grammar > 0.3) {
    GrammerLevel = "Average";
  } else {
    GrammerLevel = "Poor";
  }
  console.log("aadiadiaidai", GrammerLevel);

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
          <Stars stars={stars+1} />{" "}
        </div>
      </div>

      {/* <div className="text-2xl font-semibold">Grammer & Correctness:</div> */}
      {/* <div className="text-xl font-semibold text-blue-600">
        {Grammer} Grammer with
        <div>{Accuracy} Accuracy!</div>
      </div> */}

      <div className="text-2xl font-semibold">grammar Level:</div>
      <div className="text-xl font-semibold text-blue-600">
        {GrammerLevel}
      </div>
    </div>
  );
};

export default FeedbackCard;
