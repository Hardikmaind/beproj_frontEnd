import React from "react";
import Navbar from "../Components/Navbar";

const AfterloginDashboard = () => {
  return (
    <>
      <div className=" sticky top-0">
        <Navbar />
      </div>
      <div className="flex mt-16 mx-auto text-3xl justify-center">
        {" "}
        Choose Interview Type
      </div>
      <div className="flex flex-col m-2 md:m-0 md:flex-row min-h-screen">
        {/* First Part */}
        <div className="flex justify-center m-2 md:m-0  items-center flex-1">
          {/* Your content goes here */}
          <a
            href="#"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src="/docs/images/blog/image-4.jpg"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </a>
        </div>

        {/* Second Part */}
        <div className="flex justify-center m-2 md:m-0 items-center flex-1">
          {/* Your content goes here */}
          <a
            href="#"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src="/docs/images/blog/image-4.jpg"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default AfterloginDashboard;
