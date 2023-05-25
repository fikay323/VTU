import { useEffect, useState } from "react";
import {auth} from '../firebase'
import { onAuthStateChanged } from "firebase/auth";

const UserDetails = ({userInfo}) => {
  const [authUser, setAuthUser] = useState(null)
  
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
              setAuthUser(user)
              userInfo(user)
            } else {
                setAuthUser(null)
            }
        })
        return () => {
            listen()
        }
    }, [])
  return
}

export default UserDetails