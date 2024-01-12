import React from "react";
import Navbar from "../Components/Navbar";
import Card from "../Components/card";
import { Link } from "react-router-dom";
import FormModal from "../Components/FormModal";
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
        <Link className="mx-16" to="/Technical-Interview">
          <Card
            Type="Technical"
            detail="An audio-based technical interview assesses a candidate's proficiency in relevant technical skills solely through auditory means. It involves discussing and solving technical problems, explaining concepts, and demonstrating problem-solving abilities, all conducted through spoken communication."
          />
        </Link>

        {/* Second Part */}
        <Link to="/HR-Interview">
          <Card
            Type="HR"
            detail="An audio-based HR interview evaluates a candidate's non-technical skills and overall suitability for a position using only verbal communication. It focuses on soft skills, interpersonal abilities, communication, and cultural fit. This format is designed to explore a candidate's motivations, work experience, and behavioral traits, relying solely on spoken interactions."
          />
        </Link>
        {/* </div> */}
      </div>
      {/* <span  className="text-4xl"></span> */}
      {/* <FormModal/> */}
    </>
  );
};

export default AfterloginDashboard;
