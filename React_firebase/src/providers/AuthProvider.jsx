import React, { useState, useEffect, createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut 
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // func 1
  const createUserWithPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // func 2
  const signinUserWithPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // func 3
  useEffect(()=> {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("user login");
      setUser(user);
    } else {
      console.log("user isnt available");
      setUser(null);
    }
  })
  return ()=> unsubscribe();
  }, []);
  

  // func 4
  const handleSignOut = ()=> {
     return signOut(auth) 
  };

  // authInformation
  const authInfo = {
    createUserWithPassword,
    signinUserWithPassword,
    user,
    handleSignOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
