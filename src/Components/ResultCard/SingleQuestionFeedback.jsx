import React from "react";

const SingleQuestionFeedback = () => {
  return (
    <div className="p-4 md:p-5 border-b-2 space-y-4">
      {/* Your scrollable content goes here */}
      <div className=" ">
        <p className="text-base leading-relaxed text-gray-900">
          With less than a month to go before the European Union enacts new
          consumer privacy laws for its citizens, companies around the world are
          updating their terms of service agreements to comply.
        </p>
        <p className="text-base leading-relaxed text-gray-900">
          The European Union’s General Data Protection Regulation (G.D.P.R.)
          goes into effect on May 25 and is meant to ensure a common set of data
          rights in the European Union. It requires organizations to notify
          users as soon as possible of high-risk data breaches that could
          personally affect them.
        </p>
      </div>
      {/* Add more content here */}
    </div>
  );
};

export default SingleQuestionFeedback;
