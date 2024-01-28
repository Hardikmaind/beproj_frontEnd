import React, { useState, useEffect ,useRef} from "react";

import { AiFillAudio } from "react-icons/ai";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { AudioRecorder} from 'react-audio-voice-recorder';

const QA = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  // State to store the recorded audio
  const [recording, setRecording] = useState(false); // State to track recording status

  const recorderRef = useRef(null);


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  }

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
    }

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
    }

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
    }

    const handleStartRecording = () => {
      recorderRef.current.startRecording();
      setRecording(true);
    };
  
    const handleStopRecording = () => {
      recorderRef.current.stopRecording();
      setRecording(false);
    };
  
    // useEffect(() => {
    //   if (audioBlob) {
    //     // Handle the recorded audio blob here (e.g., upload to a server)
    //   }
    // }, [audioBlob]);

  return (
    <>
      <div className="w-7/12 h-fit mb-4 border mt-64 border-gray-200 rounded-3xl bg-white mx-auto shadow-2xl py-2">
        <div className="px-5 py-5">
          <div className="text-4xl p-5 leading-relaxed">
            When do you try to push through and solve a problem on your own, and
            when do you involve others on your team?
          </div>

          <hr className="mt-10 -px-5 -py-5" />

          <div className="flex flex-row mt-8 justify-between align-items-center">
            <div>
              <button
                type="button"
                className="text-white bg-blue-600 hover:bg-blue-700 block font-medium rounded-xl text-center text-xl px-10 py-7 me-2 mb-2"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                // onClick={recording ? handleStopRecording : handleStartRecording}
              >
                <div className="flex flex-row justify-center align-items-center">
              {" "}
              <span className="text-xl mr-3">
                <AiFillAudio fontSize={28} />
              </span>
              {recording ? 'Stop Recording' : 'Answer'}
            </div>
              </button>
              {isHovered && (
                <div className="absolute bg-slate-700 text-white p-2 rounded-md mt-1">
                  Answer with your mic
                </div>
              )}
            </div>

            <div>
              <button
                className="border border-blue-400 px-7 py-7 rounded-2xl mb-2 hover:bg-blue-50 mr-3 cursor-pointer"
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
              >
                <GrLinkPrevious size={20} color="blue" />
              </button>
              {isHovered1 && (
                <div className="absolute bg-slate-700 text-white p-2 rounded-md mt-1">
                    Previous Question
                </div>
              )}

              <button
                className="border border-blue-400 px-7 py-7 rounded-2xl mb-2 hover:bg-blue-50 cursor-pointer"
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
              >
                <GrLinkNext size={20} color="blue" />
              </button>
              {isHovered2 && (
                <div className="absolute bg-slate-700 text-white p-2 rounded-md mt-1">
                    Next Question
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <AudioRecorder
        ref={recorderRef}
        onStop={(recordedBlob) => setAudioBlob(recordedBlob)}
      /> */}
    </>
  );
};

export default QA;
