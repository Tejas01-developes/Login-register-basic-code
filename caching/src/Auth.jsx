import React, { createContext, useState } from 'react'
export const AuthContext =createContext();
const Auth = ({children}) => {
    const[access,setaccess]=useState(null)
  return (
    
   <AuthContext.Provider value={{access,setaccess}}>
    {children}
   </AuthContext.Provider>

    
  )
}

export default Auth
