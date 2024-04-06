import React from "react";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import { useState } from "react";
import login_bg2 from "../assets/images/landing2.png";
import { useEffect } from "react";
function LandingPage() {
  const [showLogin, setShowLogin] = useState(true);
  const [begin, setBegin] = useState(false);
  console.log(begin);
  const toggle = () => {
    setBegin(!begin), console.log("button pressed");
  };
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.classList.contains("hardik")) {
        console.log("hello hardik")
        toggle();
      }
    };
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        if(begin){
          toggle();
        }
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKey);
  }, [toggle]);
  return (
    <div className="">
      <div className="flex justify-center items-center h-screen min-h-screen  hardik  w-full">
        <div className="w-1/2 p-8 flex flex-col justify-center items-center">
          <h1 className="text-8xl font-bold mb-4 text-blue-500 text-center">
            Acoustic sure
          </h1>
          <p className="text-4xl mb-4 text-center">Adding Confidence to the</p>
          <p className="text-4xl mb-4 text-center">Voice!</p>
          <button
            className="bg-blue-500 text-white z-50 px-4 py-2 rounded mr-2"
            onClick={() => {
              toggle();
            }}
          >
            Get Started!
          </button>
        </div>

        <div className="relative w-1/2 h-screen">
          <img
            src={login_bg2}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        </div>
      </div>
      <div className="absolute inset-0 flex justify-center   items-center z-30">
        {begin ? (
          <div className="w-1/2  ">
            {showLogin ? (
              <Login showLogin={showLogin} setShowLogin={setShowLogin} />
            ) : (
              <Signup showLogin={showLogin} setShowLogin={setShowLogin} />
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default LandingPage;
