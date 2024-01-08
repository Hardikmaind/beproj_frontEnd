import React from "react";
import Navbar from "../Components/Navbar";
import Card from "../Components/card";

const AfterloginDashboard = () => {
  return (
    <>
      <div className=" sticky top-0">
        <Navbar />
      </div>
      <div className="flex mt-4 mx-auto text-6xl justify-center">
        {" "}
        Choose Interview Type
      </div>
      <div className="mt-56">
        <div className="flex flex-col  md:m-0 md:flex-row ">
          {/* First Part */}
          <Card />
          {/* Second Part */}
          <Card />
        </div>
      </div>
      {/* <span  className="text-4xl"></span> */}

    </>
  );
};

export default AfterloginDashboard;
