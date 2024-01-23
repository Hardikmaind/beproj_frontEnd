// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";

// const FormModal = () => {
//   const [open, setOpen] = useState(true);

//   const [formData, setFormData] = useState({
//     name: "",
//     gender: "",
//   });

//   // Function to close the modal
//   const closeModal = () => {
//     setOpen(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if all required fields are filled
//     if (!formData.name || !formData.gender) {
//       alert("Please fill in all required fields");
//       return;
//     }

//     // Make an Axios API call here
//     axios.post("http://192.168.0.117:8000/api/create_user/", formData)
//       .then((response) => {
//         console.log("API call success", response.data);
//         // You can handle success as needed, e.g., close the modal, show a success message, etc.
//         closeModal();
//       })
//       .catch((error) => {
//         console.error("API call error", error);
//         // Handle error as needed
//       });

//       closeModal();
//   };

//   // Effect to run when the component mounts, opening the modal by default
//   useEffect(() => {
//     setOpen(true);
//   }, []);

//   // Function to handle input changes
//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.user_name]: e.target.value,
//       // [e.target.gender]: e.target.value,
//     });
//   };

//   return (
//     <div>
//       {/* Backdrop for blur effect */}
//       <div
//         className={`${
//           open ? "fixed inset-0 bg-black bg-opacity-70 z-40" : "hidden"
//         }`}
//       ></div>

//       {/* Main modal */}
//       <div
//         id="crud-modal"
//         tabIndex="-1"
//         aria-hidden="true"
//         className={`${
//           open
//             ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
//             : "hidden"
//         } bg-white overflow-y-auto overflow-x-hidden rounded-lg shadow-md`}
//       >
//         <div className="relative p-10 w-96">
//           {/* Modal content */}
//           <div className="relative bg-white rounded-lg shadow">
//             {/* Modal header */}
//             <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Enter Details
//               </h3>
//               {/* <button
//                 type="button"
//                 className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
//                 data-modal-toggle="crud-modal"
//               >
//                 <svg
//                   className="w-3 h-3"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 14 14"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//                   />
//                 </svg>
//                 <span className="sr-only">Close modal</span>
//               </button> */}
//             </div>
//             {/* Modal body */}
//             <form className="p-4 m-2" onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <div className="col-span-8">
//                   <label
//                     htmlFor="name"
//                     className="block mb-2 text-sm font-medium text-gray-900 "
//                   >
//                     Username
//                   </label>
//                   <input
//                     type="text"
//                     name="user_name"
//                     id="user_name"
//                     value={formData.user_name}
//                     onChange={handleInputChange}
//                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
//                     placeholder="Enter Username"
//                     required=""
//                   />
//                 </div>

//                 <div className="col-span-2 sm:col-span-1 mt-2">
//                   <label
//                     htmlFor="category"
//                     className="block mb-2 text-sm font-medium text-gray-900 "
//                   >
//                     Gender
//                   </label>
//                   <select
//                     id="gender"
//                     name="gender"
//                     value={formData.gender}
//                     onChange={handleInputChange}
//                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
//                     required
//                   >
//                     {/* <option value="">Select Gender</option> */}
//                     <option value="M">Male</option>
//                     <option value="F">Female</option>
//                     <option value="O">Other</option>
//                   </select>
//                 </div>
//                 {/* <div className="col-span-2">
//                         <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Product Description</label>
//                         <textarea id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write product description here"></textarea>                    
//                     </div> */}
//               </div>
//               <button
//                 type="submit"
//                 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormModal;

























































import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {useAuth}  from '../context/AuthContext' // Update the path

const FormModal = () => {
  // const { currentUser } = useAuth();  // Use the currentUser from AuthContext

  // const [open, setOpen] = useState(true);
  // console.log(currentUser.getIdToken())

  // const [formData, setFormData] = useState({
  //   user_name: "",
  //   gender: "",
  // });

  // // Function to close the modal
  // const closeModal = () => {
  //   setOpen(false);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Check if all required fields are filled
  //   if (!formData.user_name || !formData.gender) {
  //     alert("Please fill in all required fields");
  //     return;
  //   }

  //   try {
  //     // Get the Firebase ID token from the current user
  //     const idToken = await currentUser.getIdToken();

  //     // Make an Axios API call here with the Firebase ID token
  //     const response = await axios.post("http://127.0.0.1:8000/api/create_user/", {
  //       user_name: formData.user_name,
  //       gender: formData.gender,
  //       firebase_id_token: idToken,
  //     });

  //     console.log("API call success", response.data);
  //     // You can handle success as needed, e.g., close the modal, show a success message, etc.
  //     closeModal();
  //   } catch (error) {
  //     console.error("API call error", error);
  //     // Handle error as needed
  //   }
  // };

  // // Effect to run when the component mounts, opening the modal by default
  // useEffect(() => {
  //   setOpen(true);
  // }, []);

  // // Function to handle input changes
  // const handleInputChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };
















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

      const response = await axios.post("http://127.0.0.1:8000/api/create_user/", {
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
