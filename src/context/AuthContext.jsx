






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
    localStorage.removeItem('user');
    return signOut();
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        localStorage.removeItem('user');
      }
    });
  
    return unsubscribe;
  }, [auth]); // Add auth as a dependency
  

  const isAuthenticated = !!localStorage.getItem('user');

  const value = {
    currentUser,
    signUp,
    logIn,
    logOut,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
