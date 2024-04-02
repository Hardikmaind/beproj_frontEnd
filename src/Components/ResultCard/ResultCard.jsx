import React from "react";
import hurray from "../../assets/images/hurray.gif";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Stars from "../Stars";

function ResultCard() {
  const { userData } = useAuth();

  return (
    <div
      href="#"
      className="mx-auto w-6/12 px-6 py-6 items-center bg-white border border-gray-500 rounded-lg shadow  "
      // hover:bg-gray-100
    >
      <div className="flex flex-row gap-6">
        <img
          className="object-cover w-80 rounded-t-lg   mr-8"
          src={hurray}
          alt=""
        />

        <div className="flex flex-col">
          <div className="flex flex-col justify-items-center mt-2 ml-6 gap-6">
            <div className="text-4xl font-bold">
              Confidence Rating:
              <div className="justify-items-center text-5xl mt-2">
                <Stars stars={2} />{" "}
              </div>
            </div>

            <div className="text-4xl font-bold">
              Grammer Score:
              <div>5/10</div>
            </div>
          </div>

          <div className="text-center py-10 ">
            <Link
              to={"/"}
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-4 text-center mt-8 cursor-pointer "
            >
              Go To Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
