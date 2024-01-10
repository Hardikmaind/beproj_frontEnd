// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyJtchL0tmeSaMlJFFR6Xf7qJGcvRmcPY",
  authDomain: "beproj-a4b03.firebaseapp.com",
  projectId: "beproj-a4b03",
  storageBucket: "beproj-a4b03.appspot.com",
  messagingSenderId: "919127872815",
  appId: "1:919127872815:web:63b3484299f67652effdda",
  measurementId: "G-KBQXSY4G24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const analytics = getAnalytics(app);
export{auth};










// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from 'firebase/auth';

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCyJtchL0tmeSaMlJFFR6Xf7qJGcvRmcPY",
//   authDomain: "beproj-a4b03.firebaseapp.com",
//   projectId: "beproj-a4b03",
//   storageBucket: "beproj-a4b03.appspot.com",
//   messagingSenderId: "919127872815",
//   appId: "1:919127872815:web:63b3484299f67652effdda",
//   measurementId: "G-KBQXSY4G24"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// const analytics = getAnalytics(app);
// export { auth };
