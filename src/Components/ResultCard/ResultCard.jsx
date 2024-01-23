import React from "react";
import hurray from "../../assets/images/hurray.gif";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


function ResultCard() {
  const { userData } = useAuth();

  return (
    <div
      href="#"
      className="flex flex-col mx-32 py-8  items-center bg-white border border-gray-500 rounded-lg shadow md:flex-row  hover:bg-gray-100 "
    >
      <img
        className="object-cover pl-4 w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={hurray}
        alt=""
      />
      <div className="flex flex-col my-12">
        <div className=" text-center text-3xl my-4 mx-4 ">
          Hurray!! Congratulations you have completed your interview successfully
        </div>
        <div className="grid grid-cols-3 justify-center  px-10 ">
          <div className="mb-2  text-2xl font-bold tracking-tight text-gray-900 ">
            <div className="grid grid-rows-1 justify-center">
              <div>Accuracy</div>
              <div className="text-center">1</div>
            </div>
          </div>
          <div className="mb-2 pr-4 text-2xl font-bold tracking-tight text-gray-900  ">
            <div className="grid grid-rows-1 justify-center">
              <div>Correctness</div>
              <div className="text-center">1</div>
            </div>
          </div>
          <div className="mb-2 pr-4 text-2xl font-bold tracking-tight text-gray-900  ">
            <div className="grid grid-rows-1 justify-center">
              <div>Confidence</div>
              <div className="text-center">1</div>
            </div>
          </div>
        </div>
        <div className="text-center py-10 ">
          <Link to={"/"} className="border-black border-2 px-5 py-2 rounded-md bg-blue-400 ">Go To Dashboard</Link>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
