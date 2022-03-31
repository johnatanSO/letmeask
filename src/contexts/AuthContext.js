import {createContext, useState, useEffect} from  'react'
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

export const AuthContext = createContext({})

function AuthContextProvider(props) {

  const [user,setUser] = useState()
  const auth = getAuth()


  useEffect(() =>{

    const unsubscribe = auth.onAuthStateChanged((user)=>{
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
    return () => {
      unsubscribe()
    }
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
    <AuthContext.Provider value={{user, signInWithGoogle}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider