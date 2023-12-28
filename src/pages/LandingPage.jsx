import React from "react";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import { useState } from "react";
function LandingPage() {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <>
      {showLogin ? (
        <Login showLogin={showLogin} setShowLogin={setShowLogin} />
      ) : (
        <Signup showLogin={showLogin} setShowLogin={setShowLogin} />
      )}
    
    </>
  );
}

export default LandingPage;
