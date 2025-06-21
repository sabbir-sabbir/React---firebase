import React, {createContext} from 'react'
const AuthContext = createContext(null);

const AuthProvider = () => {

    // information
    const authInfo = {

    }
  return (
   <AuthContext.Provider value={authInfo}>
      
   </AuthContext.Provider>
  )
}

export default AuthProvider