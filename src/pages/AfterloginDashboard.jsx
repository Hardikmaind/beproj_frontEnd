import React from "react";
import Navbar from "../Components/Navbar";
import Card from "../Components/card";
import xyz from "./Xyz";
import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
const AfterloginDashboard = () => {
  // const auth = useAuth();
  // console.log(auth.isAuthenticated);
  return (
    <>
      <div className="flex  mt-4 mx-auto text-6xl justify-center">
        {" "}
        Choose Interview Type
      </div>
      <div className="mt-56 flex  justify-center">
        {/* <div className="flex flex-row   md:m-0 md:flex-row "> */}
          {/* First Part */}
          <Link className="mx-16" to="/xyz">
            <Card />
          </Link>

          {/* Second Part */}
          <Link to="/xyz">
            <Card />
          </Link>
        {/* </div> */}
      </div>
      {/* <span  className="text-4xl"></span> */}
    </>
  );
};

export default AfterloginDashboard;
