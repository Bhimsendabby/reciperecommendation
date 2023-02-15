import React, { useContext, useEffect, useState } from 'react'
import {auth} from '../firebase'

const AuthContext = React.createContext()


export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthProvider({children}) {
    const[currentUser, setCurrentUser] =useState()

    const value = {
        currentUser,
        signup
    }

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email,password)
    }

    useEffect(() =>{
       const unsubscribe =  auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])



  return (
   <AuthContext.Provider value={value}>
    {children}
   </AuthContext.Provider>
  )
}
