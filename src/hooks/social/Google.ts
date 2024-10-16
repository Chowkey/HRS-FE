import { useState } from "react";
import { User } from 'firebase/auth'
import { signInWithGooglePopup } from '../../firebase/firebase.config';
import api from '../../api/axios'
import { login } from "../../redux/features/account/reducer";
import { useDispatch } from "react-redux";


interface CustomUser extends User {
   idToken: string
}

const useGoogleLogin = () => {
   const dispatch = useDispatch()

   const [user, setUser] = useState<CustomUser | null>(null)
   const [idToken, setIdToken] = useState<string | null>(null)
   const [googleSuccess, setGoogleSuccess] = useState<boolean>(false)
   const logInGoogle = async () => {
      try {
         const response = await signInWithGooglePopup()
         if (response && response.user.email) {
            const idToken = await response.user.getIdToken()
            dispatch(login({
               email_address: response.user.email,
               username: response.user.displayName || "Unknown",
               photoURL: response.user.photoURL,
               id: response.user.uid,
               fullname: null,
               phone_number: null,
               password: null
            }))
            setGoogleSuccess(true)
            console.log(idToken);
            const updatedUser = { ...response.user, idToken }
            setUser(updatedUser)
            setIdToken(idToken)
            // Perform any additional actions after successful login
            const fetchData = async () => {
               try {
                  const response = await api.post('/user/google-signin/', JSON.stringify({ idToken: idToken }), {
                     headers: { 'Content-Type': 'application/json' },
                     withCredentials: true,
                  })

                  const data = await response.data
                  console.log(data);
               } catch (error) {
                  console.error("Error fetching data:", error);
               }
            }

            await fetchData()
         }
         else {
            console.error('Failed to sign in with Google')
         }
      } catch (error) {
         console.error("Error signing in with Google:", error)
         setGoogleSuccess(false)
      }
   }

   return { logInGoogle, googleSuccess }
}

export default useGoogleLogin