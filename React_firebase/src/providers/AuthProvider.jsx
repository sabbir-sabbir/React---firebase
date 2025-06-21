import React, {createContext} from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase/firebase.config"
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    // func 1
    const createUserWithPassword = (email, password)=> {

      return createUserWithEmailAndPassword(auth, email, password)
    
    }
   

    // authInformation
    const authInfo = {
        createUserWithPassword
    }
  return (
   <AuthContext.Provider value={authInfo}>
      {children}
   </AuthContext.Provider>
  )
}

export default AuthProvider