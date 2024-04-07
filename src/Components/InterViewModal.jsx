import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AxiosInstance from "../api/AxiosInstance";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const InterViewModal = ({ toggleInterviewModal }) => {
  // const [interviewData, setInterviewData] = useState({
  //   user_interview_no: "",
  //   type_of_interview: "",
  // });

  const {
    currentUser,
    setUserData,
    userData,
    // UIno,
    // setUIno,
    // InterviewType,
    // setInterviewType,
  } = useAuth();
  // console.log("Interview Id: ",currentUser.uid);

  const navigate = useNavigate();

  const createInterviewId = async (argument) => {
    try {
      const res = await AxiosInstance.post("InterviewCreate-id/", {
        user_id: currentUser.uid,
        interview_type: argument,
      });

      console.log("API Response:", res.data);
      if(localStorage.getItem("userId") === null){
        localStorage.setItem("userId", res.data.user);
      }
      localStorage.setItem("interviewType", res.data.type_of_interview);
      localStorage.setItem("interviewId", res.data.interview_id);
      // setInterviewData();
      // console.log("Interview Data: ", interviewData);
      // setUIno(res.data.user_interview_no);
      // setInterviewType(res.data.type_of_interview);
      // console.log("Interview Id: ", UIno);
      // console.log("Interview Type: ", InterviewType);

      if (argument === "Technical") {
        navigate("/Technical-Interview");
      }
      if (argument === "HR") {
        navigate("/HR-Interview");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   console.log("User Id number: ", UIno); // Log after state update
  //   console.log("Interview Type 234242324: ", InterviewType); // Log after state update
  // }, [UIno, InterviewType]); // Run this effect when id or InterviewType changes

  // Close modal when clicking outside or pressing Escape key
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.classList.contains("fixed")) {
        toggleInterviewModal();
      }
    };

    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        toggleInterviewModal();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKey);
  }, [toggleInterviewModal]);

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-5 backdrop-blur-md flex justify-center items-center ">
      <div
        tabIndex="-1"
        className="overflow-auto z-50 bg-blue-800 rounded-lg shadow-lg p-2 w-full max-w-md"
      >
        <div className="md:p-5">
          {/* Modal content */}
          <p className="text-gray-500 dark:text-gray-400 mb-4 flex justify-between gap-2">
            Choose Interview type:
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center"
              data-modal-toggle="select-modal"
              onClick={() => toggleInterviewModal()}
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
          </p>
          {/* Your radio button options */}
          <ul className="space-y-4 mb-4">
            <li className="-px-16">
              <input
                type="radio"
                id="job-1"
                name="job"
                value="job-1"
                className="hidden peer"
                required
              />
              <div
                onClick={() => {
                  createInterviewId("Technical");
                  // navigate("/Technical-Interview");
                }}
                htmlFor="job-1"
                className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer"
              >
                <div className="block">
                  <div className="w-full text-lg font-semibold">
                    Technical Interview
                  </div>
                  <div className="w-full text-gray-500 dark:text-gray-400">
                    Interview
                  </div>
                </div>
                <svg
                  className="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </div>
            </li>
            <li className="">
              <input
                type="radio"
                id="job-2"
                name="job"
                value="job-2"
                className="hidden peer"
              />
              <div
                onClick={() => {
                  createInterviewId("HR");
                }}
                htmlFor="job-2"
                className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100"
              >
                <div className="block">
                  <div className="w-full text-lg font-semibold">
                    HR Interview
                  </div>
                  <div className="w-full text-gray-500 dark:text-gray-400">
                    Interview
                  </div>
                </div>
                <svg
                  className="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </div>
            </li>
          </ul>
          {/* Next step button */}
          {/* <button className="text-white inline-flex w-full justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Next step
              </button> */}
        </div>
      </div>
    </div>
  );
};

export default InterViewModal;
