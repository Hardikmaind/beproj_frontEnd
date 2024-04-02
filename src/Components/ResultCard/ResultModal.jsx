import React from "react";
import SingleQuestionFeedback from "./SingleQuestionFeedback";

const ResultModal = ({ toggleQAModal }) => {
  return (
    <div>
      <div
        tabIndex="-1"
        className="overflow-y-auto overflow-x-hidden fixed top-0 bg-gray-900 bg-opacity-15 backdrop-blur-md right-0 left-0 z-50 justify-center items-center w-full md:inset-0"
      >
        <div className="fixed flex-col inset-0 flex items-center justify-center z-50">
          {/* Fixed header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b-4 border-blue-600  rounded-t-lg bg-white w-2/3">
            <h3 className="text-xl font-semibold text-gray-900">
              Detailed analysis of your   Answers
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 border-4 hover:text-red-900 rounded-lg text-sm w-11 h-11 ms-auto inline-flex justify-center items-center dark:hover:bg-red-600 dark:hover:text-white"
              data-modal-hide="static-modal"
              onClick={toggleQAModal}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          {/* Scrollable content */}
          <div className="relative z-50 bg-white  shadow-lg h-4/5 w-2/3 overflow-y-auto rounded-b-lg max-h-[80vh]">
            <div className="relative bg-white  shadow">
              <div className="p-4 md:p-5 space-y-4 pt-[5rem]">
                <SingleQuestionFeedback />
                <SingleQuestionFeedback />
                <SingleQuestionFeedback />
                <SingleQuestionFeedback />
                <SingleQuestionFeedback />
                <SingleQuestionFeedback />
                <SingleQuestionFeedback />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;
