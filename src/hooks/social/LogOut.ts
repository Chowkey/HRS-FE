import { useState, useCallback } from "react";
import { User } from 'firebase/auth'
import { signOut } from '../../firebase/firebase.config';
import api from '../../api/axios'
import { logout } from "../../redux/features/account/reducer";
import { useDispatch } from "react-redux";

interface CustomUser extends User {
   idToken: string
}


const useLogOut = () => {
   const dispatch = useDispatch()
   const [user, setUser] = useState<CustomUser | null>(null)
   const [idToken, setIdToken] = useState<string | null>(null)

   const logOut = useCallback(async () => {
      try {
         await api.post('/logout', {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
         })
         await signOut()
         dispatch(logout())
         setUser(null)
         setIdToken(null)
         console.log("Successfully logged out");
      } catch (error) {
         console.error("Error logging out:", error);
      }
   }, [dispatch])

   return logOut;
}

export default useLogOut