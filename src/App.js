import {useState, createContext, useEffect } from 'react';
import Home from './pages/Home'
import NewRoom from './pages/NewRoom'

import {getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const AuthContext = createContext({})



function App() {
  const [user,setUser] = useState()
  const auth = getAuth()


  useEffect(() =>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        const {displayName, photoURL, uid} = user

        if(!displayName || !photoURL){
          throw new Error('Missing Information from Google Account!')
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
    })
  },[])

  async function signInWithGoogle(){
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth,provider)

    if(result.user){
      const {displayName, photoURL, uid} = result.user

      if(!displayName || !photoURL){
        throw new Error('Missing Information from Google Account!')
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
    }
  }
  
  return (
    <BrowserRouter>
        <AuthContext.Provider value={{user, signInWithGoogle}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms/new" element={<NewRoom />} />
          </Routes>
        </AuthContext.Provider>
    </BrowserRouter>
  )
}

export default App