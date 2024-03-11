
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {useAuth}  from '../context/AuthContext' // Update the path
import AxiosInstance from "../api/AxiosInstance";


const FormModal = () => {
 
  const { currentUser } = useAuth();

  const [open, setOpen] = useState(true);
  const [formData, setFormData] = useState({
    user_name: "",
    gender: "",
  });

  // State to handle loading state while fetching user data
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if currentUser is defined before accessing methods
    if (currentUser) {
      setLoading(false);
    }
  }, [currentUser]);

  const closeModal = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!formData.user_name || !formData.gender) {
    //   alert("Please fill in all required fields");
    //   return;
    // }

    try {
      // Check if currentUser is defined before accessing methods
      if (!currentUser) {
        // Handle the case when currentUser is not available
        console.error("Current user not available");
        return;
      }

      const idToken = await currentUser.getIdToken();

      const response = await AxiosInstance.post("create_user/", {
        user_name: formData.user_name,
        gender: formData.gender,
        firebase_id_token: idToken,
      });

      console.log("API call success", response.data);
      closeModal();
    } catch (error) {
      console.error("API call error", error);
      // Handle error as needed
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Backdrop for blur effect */}
      <div
        className={`${
          open ? "fixed inset-0 bg-black bg-opacity-70 z-40" : "hidden"
        }`}
      ></div>

      {/* Main modal */}
      <div
        id="crud-modal"
        tabIndex="-1"
        aria-hidden="true"
        className={`${
          open
            ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
            : "hidden"
        } bg-white overflow-y-auto overflow-x-hidden rounded-lg shadow-md`}
      >
        <div className="relative p-10 w-96">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
              <h3 className="text-lg font-semibold text-gray-900">
                Enter Details
              </h3>
            </div>
            {/* Modal body */}
            <form className="p-4 m-2" onSubmit={handleSubmit}>
              <div className="mb-4">
                <div className="col-span-8">
                  <label
                    htmlFor="user_name"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    value={formData.user_name}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Enter Username"
                    required=""
                  />
                </div>

                <div className="col-span-2 sm:col-span-1 mt-2">
                  <label
                    htmlFor="gender"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                    required
                  >
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="O">Other</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
