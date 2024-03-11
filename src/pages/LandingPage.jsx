import React from "react";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import { useState } from "react";
import login_bg2 from "../assets/images/login_bg2.jpg";
function LandingPage() {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <>
      <div
        className="bg-cover flex items-center justify-center -z-10"
        style={{ backgroundImage: `url(${login_bg2})` }}
      >
        {showLogin ? (
          <Login showLogin={showLogin} setShowLogin={setShowLogin} />
        ) : (
          <Signup showLogin={showLogin} setShowLogin={setShowLogin} />
        )}
      </div>
    </>
  );
}

export default LandingPage;
