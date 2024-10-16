import { useState } from "react";
import { User } from 'firebase/auth'
import { signInWithFacebookPopup } from '../../firebase/firebase.config';
import api from '../../api/axios'
import { login } from "../../redux/features/account/reducer";
import { useDispatch } from "react-redux";


interface CustomUser extends User {
   idToken: string
}
const useFacebookLogin = () => {
   const dispatch = useDispatch()

   const [user, setUser] = useState<CustomUser | null>(null)
   const [idToken, setIdToken] = useState<string | null>(null)
   const [facebookSuccess, setFacebookSuccess] = useState<boolean>(false)
   const logInFacebook = async () => {
      try {
         console.log('Hello world');
         const response = await signInWithFacebookPopup()
         if (response && response.user) {
            const idToken = await response.user.getIdToken()
            // const accessToken = response.idToken
            dispatch(login({
               email_address: response.user.email || "Unknown",
               username: response.user.displayName || "Unknown",
               photoURL: response.user.photoURL,
               id: response.user.uid,
               fullname: null,
               phone_number: null,
               password: null
            }))
            setFacebookSuccess(true)
            console.log(idToken);
            const updatedUser = { ...response.user, idToken }
            setUser(updatedUser)
            setIdToken(idToken)
            // Perform any additional actions after successful login
            const fetchData = async () => {
               try {
                  const response = await api.post('/user/facebook-signin/', JSON.stringify({ idToken: idToken }), {
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
            console.error('Failed to sign in with Facebook')
         }
      } catch (error) {
         console.error("Error signing in with Facebook:", error)
         setFacebookSuccess(false)
      }
   }

   return { logInFacebook, facebookSuccess }
}

export default useFacebookLogin