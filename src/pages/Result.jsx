import React, { useState } from "react";

import ResultCard from "../Components/ResultCard/ResultCard";
import QAModal from "../Components/QAModal";

const Result = () => {
  const [showModal, setShowModal] = useState(false);
  const [showText, setShowText] = useState(false);

  const toggleQAModal = () => {
    setShowModal(!showModal);
  };

  const mouseEnter = () => {
    setShowText(true);
  };

  const mouseLeave = () => {
    setShowText(false);
  };

  return (
    <>
      <div className=" flex flex-col items-center justify-center">
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
        <div className="relative">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-4 text-center mt-8 cursor-pointer "
            onClick={toggleQAModal}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            Question and Answer
          </button>
          {showText && (
            <div className="absolute text-center  text-gray-500 mt-2">
              Click here to view the question and answer
            </div>
          )}
        </div>
      </div>
      {showModal ? <QAModal toggleQAModal={toggleQAModal} /> : null}
    </>
  );
};

export default Result;
