import React, { useState } from "react";

import ResultCard from "../Components/ResultCard/ResultCard";
const Result = () => {
  return (
    <>
      <div className=" flex flex-col">
        <div className="text-5xl my-5 text-center">Result</div>
        <div className="my-16 flex flex-row">
          <div className="mx-auto"> 

            <ResultCard  />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Result;
