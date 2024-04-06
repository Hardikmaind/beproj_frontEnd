import React, { useState, useEffect, useRef } from "react";
import { AiFillAudio } from "react-icons/ai";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { Link, Navigate } from "react-router-dom";
import AudioRecorder from "./AudioRecorderMain";
import AxiosInstance from "../api/AxiosInstance";
import Loader_gif from "../assets/images/Loader_gif.gif";
import { ImSpinner11 } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const QA = (data) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingUrl, setRecordingUrl] = useState(null);
  const [recordedAudioBlob, setRecordedAudioBlob] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(recordedAudioBlob);
  // const [recordingStopped, setRecordingStopped] = useState(false);
  const handleUpload = async (recordedAudioBlob) => {
    const formData = new FormData();
    formData.append("audio", recordedAudioBlob, "audio.wav");
    setLoading(true); // Set loading to true before uploading
    try {
      const response = await AxiosInstance.post("upload_audio/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Audio uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error during audio upload:", error);
    } finally {
      setLoading(false); // Set loading to false after uploading
    }
  };

  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  const handleStartRecording = () => {
    setIsRecording(true);
  };

  const handleStopRecording = () => {
    setIsRecording(false);
  };

  const handleRecordingEnded = (audioUrl) => {
    setRecordingUrl(audioUrl);
  };

  const questions = data.data.interview_questions.map(
    (question) => question.question_list
  );

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = async () => {
    await handleUpload(recordedAudioBlob),
      setCurrentQuestionIndex((prevIndex) =>
        prevIndex === questions.length - 1 ? 0 : prevIndex + 1
      );
    setRecordedAudioBlob(null);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex === 0 ? questions.length - 1 : prevIndex - 1
    );
  };

  const pathName = window.location.pathname;
  // console.log(pathName); // Output: /Technical-Interview
  // Extract the desired part from the path name
  const desiredPart = pathName
    .split("/")
    .filter((part) => part.trim() !== "")[0];
  console.log("hello world ", desiredPart); // Output: Technical-Interview

  const sendQuestions = async () => {
    if (desiredPart === "Technical-Interview") {
      try {
        const postData = {
          quesiton: data.data,
        };

        console.log("my name is haridk", postData);
        const res = await AxiosInstance.post("send_ques/", postData.quesiton);
        console.log("question submitted successfully");
      } catch (error) {
        console.error("Error sending questions:", error);
      }
    }
  };

  const sendUserId = async () => {
    try {
      const postData = {
        user: localStorage.getItem("userId"),
      };
      const res = await AxiosInstance.post("get_interview_Feedback/", postData);
      console.log("User Id submitted successfully");
      console.log("All Feedback:", res.data);
    } catch (error) {
      console.error("Error sending User ID:", error);
    }

  }

  return (
    <>
      {loading && (
        <div className="flex justify-center items-center w-full mt-64">
          <img
            className="object-cover pl-4 w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={Loader_gif}
            alt=""
          />
          <span className="text-3xl font-bold text-blue-800">
            Wait your answer is processing
          </span>
        </div>
      )}
      {!loading && (
        <>
          <div className="w-7/12 h-fit mb-4 border mt-52 border-gray-200 rounded-3xl bg-white mx-auto shadow-2xl py-2">
            <div className="px-5 py-3">
            <div className="text-3xl p-5 leading-relaxed">
             Question&nbsp;{currentQuestionIndex + 1}: {questions[currentQuestionIndex]}
            </div>


              <hr className="mt-10 -px-5 -py-5" />

              <div className="flex flex-row mt-8 justify-between align-items-center">
                <div>
                  {!isRecording ? (
                    <button
                      type="button"
                      className="text-white bg-blue-600 hover:bg-blue-700 block font-medium rounded-xl text-center text-xl px-10 py-7 me-2 mb-2"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={handleStartRecording}
                    >
                      <div className="flex flex-row justify-center align-items-center">
                        {" "}
                        <span className="text-xl mr-3">
                          <AiFillAudio fontSize={28} />
                        </span>
                        Answer
                      </div>
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="text-white bg-green-600 hover:bg-green-700 block font-medium rounded-xl text-center text-xl px-10 py-7 me-2 mb-2"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={handleStopRecording}
                    >
                      <div className="flex flex-row justify-center align-items-center">
                        {" "}
                        <span className="text-xl mr-3">
                          <AiFillAudio fontSize={28} />
                        </span>
                        <div className="flex  items-center gap-2">
                          Recording
                          <ImSpinner11 className="animate-spin" />
                        </div>
                      </div>
                    </button>
                  )}
                  {isHovered && (
                    <div className="absolute bg-slate-700 text-white p-2 rounded-md mt-1">
                      {isRecording ? "Stop Recording" : "Answer with your mic"}
                    </div>
                  )}
                </div>

                <div>
                  <button
                    className="border border-blue-400 px-7 py-7 rounded-2xl mb-2 hover:bg-blue-50 mr-3 cursor-pointer"
                    onMouseEnter={handleMouseEnter1}
                    onMouseLeave={handleMouseLeave1}
                    onClick={handlePreviousQuestion}
                    disabled={currentQuestionIndex === 0}
                  >
                    <GrLinkPrevious size={20} color="blue" />
                  </button>
                  {isHovered1 && (
                    <div className="absolute bg-slate-700 text-white p-2 rounded-md mt-1">
                      Previous Question
                    </div>
                  )}

                  {currentQuestionIndex === questions.length - 1 ? (
                    // If it's the last question, display Finish Interview message
                    <Link
                      className="border border-blue-400 px-7 py-7 rounded-2xl mb-2 hover:bg-blue-50 cursor-pointer"
                      onMouseEnter={handleMouseEnter2}
                      onMouseLeave={handleMouseLeave2}
                      onClick={() => (handleNextQuestion(), sendQuestions(), sendUserId())}
                      to="/Result"
                    >
                      End
                    </Link>
                  ) : (
                    // Otherwise, display the Next button
                    <>
                      {recordedAudioBlob !== null ? (
                        <button
                          className="border border-blue-400 px-7 py-7 rounded-2xl mb-2 hover:bg-blue-50 cursor-pointer"
                          onMouseEnter={handleMouseEnter2}
                          onMouseLeave={handleMouseLeave2}
                          onClick={() => {
                            handleNextQuestion();
                          }}
                        >
                          <GrLinkNext size={20} color="blue" />
                        </button>
                      ) : (
                        <button
                          className="border border-blue-400 px-7 py-7 rounded-2xl mb-2 hover:bg-blue-50 cursor-pointer"
                          onMouseEnter={handleMouseEnter2}
                          onMouseLeave={handleMouseLeave2}
                          onClick={() => {
                            alert("Please record your answer first");
                          }}
                        >
                          <GrLinkNext size={20} color="blue" />
                        </button>
                      )}
                    </>
                  )}

                  {isHovered2 && (
                    <div className="absolute bg-slate-700 text-white p-2 rounded-md mt-1">
                      {currentQuestionIndex === questions.length - 1
                        ? "Finish Interview"
                        : "Next Question"}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <button
              type="button"
              className="text-3xl     text-white bg-gradient-to-r from-red-800 via-red-500 to-red-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg px-10 py-4 text-center mt-20 cursor-pointer "
              onClick={()=>navigate("/")}
            >
              Abort Interview
            </button>
          </div>
        </>
      )}
      <AudioRecorder
        isRecording={isRecording}
        setIsRecording={setIsRecording}
        onStopRecording={handleStopRecording}
        onRecordingEnded={handleRecordingEnded}
        setRecordedAudioBlob={setRecordedAudioBlob}
        // setRecordingStopped={setRecordingStopped}
      />
    </>
  );
};

export default QA;
