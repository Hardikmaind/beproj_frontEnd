// import React, { useEffect } from "react";
// import Navbar from "../Components/Navbar";
// import Card from "../Components/card";
// import { Link } from "react-router-dom";
// import FormModal from "../Components/FormModal";
// import { useAuth } from "../context/AuthContext"; // Update the path
// import { Axios } from "axios";
// import { useState } from "react";
// // import { useAuth } from "../context/AuthContext";
// const AfterloginDashboard = () => {
//   // const auth = useAuth();
//   // console.log(auth.isAuthenticated);
//   const { currentUser } = useAuth();

//   const [is_regestered, setIs_regestered] = useState(false);

//   useEffect(() => {
//     const callApi = async () => {
//       try {
//         // Get the Firebase ID token from the current user
//         const idToken = await currentUser.getIdToken();

//         // Make the API call with the token in the request headers
//         const res = await Axios.get("http://localhost:5000/api/create_user", {
//           headers: {
//             Authorization: `Bearer ${idToken}`,
//           },
//         });
//         setIs_regestered(res.data.is_regestered);
//         console.log(is_regestered)


//         console.log("API call success", res.data);
//         // Handle the response as needed
//       } catch (error) {
//         console.error("API call error", error);
//         // Handle error as needed
//       }
//     };

//     callApi();
//   }, []);

//   return (
//     <>
//       <div className="flex  mt-4 mx-auto text-6xl justify-center">
//         {" "}
//         Choose Interview Type
//       </div>
//       <div className="mt-56 flex  justify-center">
//         {/* <div className="flex flex-row   md:m-0 md:flex-row "> */}
//         {/* First Part */}
//         <Link className="mx-16" to="/Technical-Interview">
//           <Card
//             Type="Technical"
//             detail="An audio-based technical interview assesses a candidate's proficiency in relevant technical skills solely through auditory means. It involves discussing and solving technical problems, explaining concepts, and demonstrating problem-solving abilities, all conducted through spoken communication."
//           />
//         </Link>

//         {/* Second Part */}
//         <Link to="/HR-Interview">
//           <Card
//             Type="HR"
//             detail="An audio-based HR interview evaluates a candidate's non-technical skills and overall suitability for a position using only verbal communication. It focuses on soft skills, interpersonal abilities, communication, and cultural fit. This format is designed to explore a candidate's motivations, work experience, and behavioral traits, relying solely on spoken interactions."
//           />
//         </Link>
//         {/* </div> */}
//       </div>
//       {/* <span  className="text-4xl"></span> */}
//       {!is_regestered?<FormModal />:null}
      
//     </>
//   );
// };

// export default AfterloginDashboard;












// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Card from "../Components/card";
// import FormModal from "../Components/FormModal";
// import { useAuth } from "../context/AuthContext";
// import  Axios  from "axios";

// const AfterloginDashboard = () => {
//   const { currentUser } = useAuth();
//   const [is_registered, setIs_registered] = useState(false);
//   const [modalVisible, setModalVisible] = useState(false);

//   useEffect(() => {
//     const callApi = async () => {
//       try {
//         if (!currentUser) {
//           // Handle the case when currentUser is not available
//           console.error("Current user not available");
//           return;
//         }
  
//         const idToken = await currentUser.getIdToken();

//         const res = await Axios.get("http://127.0.0.1:8000/api/create_user/", {
//           headers: {
//             Authorization: `Bearer ${idToken}`,
//           },
//         });

//         setIs_registered(res.data.user.is_registered);
//         console.log(is_registered);

//         // If user is not registered, show the modal
//         if (!is_registered) {
//           setModalVisible(true);
//         }

//         console.log("API call success", res.data);
//       } catch (error) {
//         console.error("API call error", error);
//       }
//     };

//     callApi();
//   }, [currentUser, is_registered]);

//   const closeModal = () => {
//     setModalVisible(false);
//   };

//   return (
//     <>
//       <div className="flex mt-4 mx-auto text-6xl justify-center">
//         Choose Interview Type
//       </div>
//       <div className="mt-56 flex justify-center">
//         <Link className="mx-16" to="/Technical-Interview">
//           <Card
//             Type="Technical"
//             detail="An audio-based technical interview assesses a candidate's proficiency in relevant technical skills solely through auditory means. It involves discussing and solving technical problems, explaining concepts, and demonstrating problem-solving abilities, all conducted through spoken communication."
//           />
//         </Link>
//         <Link to="/HR-Interview">
//           <Card
//             Type="HR"
//             detail="An audio-based HR interview evaluates a candidate's non-technical skills and overall suitability for a position using only verbal communication. It focuses on soft skills, interpersonal abilities, communication, and cultural fit. This format is designed to explore a candidate's motivations, work experience, and behavioral traits, relying solely on spoken interactions."
//           />
//         </Link>
//       </div>
//       { !is_registered ? (<FormModal closeModal={closeModal} />) : null}
//     </>
//   );
// };

// export default AfterloginDashboard;


























import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/card";
import FormModal from "../Components/FormModal";
import { useAuth } from "../context/AuthContext";
// import  Axios  from "axios";
import AxiosInstance from "../api/AxiosInstance";

const AfterloginDashboard = () => {
  const { currentUser } = useAuth();
  const [is_registered, setIs_registered] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const callApi = async () => {
      try {
        if (!currentUser) {
          // Handle the case when currentUser is not available
          console.error("Current user not available");
          return;
        }
  
        const idToken = await currentUser.getIdToken();

        const res = await AxiosInstance.get("create_user/", {
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        });

        setIs_registered(res.data.user.is_registered);
        console.log(is_registered);

        // If user is not registered, show the modal
        if (!is_registered) {
          setModalVisible(true);
        }

        console.log("API call success", res.data);
      } catch (error) {
        console.error("API call error", error);
      }
    };

    callApi();
  }, [currentUser, is_registered]);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <div className="flex mt-4 mx-auto text-6xl justify-center">
        Choose Interview Type
      </div>
      <div className="mt-56 flex justify-center">
        <Link className="mx-16" to="/Technical-Interview">
          <Card
            Type="Technical"
            detail="An audio-based technical interview assesses a candidate's proficiency in relevant technical skills solely through auditory means. It involves discussing and solving technical problems, explaining concepts, and demonstrating problem-solving abilities, all conducted through spoken communication."
          />
        </Link>
        <Link to="/HR-Interview">
          <Card
            Type="HR"
            detail="An audio-based HR interview evaluates a candidate's non-technical skills and overall suitability for a position using only verbal communication. It focuses on soft skills, interpersonal abilities, communication, and cultural fit. This format is designed to explore a candidate's motivations, work experience, and behavioral traits, relying solely on spoken interactions."
          />
        </Link>
      </div>
      { !is_registered ? (<FormModal closeModal={closeModal} />) : null}
    </>
  );
};

export default AfterloginDashboard;
