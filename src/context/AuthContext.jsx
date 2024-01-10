// // AuthContext.js
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

// const AuthContext = createContext();

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);

//   const signUp = async (email, password) => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
//       setCurrentUser(user);
//       return user;
//     } catch (error) {
//       console.error(error);
//       throw error;
//     }
//   };

//   const logIn = async (email, password) => {
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
//       setCurrentUser(user);
//       return user;
//     } catch (error) {
//       console.error(error);
//       throw error;
//     }
//   };

//   const logOut = async () => {
//     try {
//       await signOut(auth);
//       setCurrentUser(null);
//     } catch (error) {
//       console.error(error);
//       throw error;
//     }
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//     });

//     return unsubscribe;
//   }, []);

//   const value = {
//     currentUser,
//     signUp,
//     logIn,
//     logOut,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };














// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth,email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth,email, password);
  };

  const logOut = () => {
    return signOut();
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  
    return unsubscribe;
  }, [auth]); // Add auth as a dependency
  

  const isAuthenticated = !!currentUser;

  const value = {
    currentUser,
    signUp,
    logIn,
    logOut,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
