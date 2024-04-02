import React, { useState } from "react";

import ResultCard from "../Components/ResultCard/ResultCard";
const Result = () => {
  return (
    <>
      <div className=" flex flex-col">
        {/* <div className="text-5xl my-5 text-center">Result</div> */}
        <div className="flex flex-col gap-14">
          <div className="mx-auto mt-10">
            <div className=" text-center text-5xl mb-4">
              Hurray!! Congratulations you have completed your interview
              successfully
            </div>
          </div>
          <ResultCard />
        </div>
      </div>
    </>
  );
};

export default Result;
