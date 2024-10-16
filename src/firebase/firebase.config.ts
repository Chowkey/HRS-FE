// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, UserCredential } from 'firebase/auth';
import { GithubAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyCUYYQB2awIn4GW4yg84iDSW3UuSDBERFw",
   authDomain: "health-recommendation-sy-880fe.firebaseapp.com",
   projectId: "health-recommendation-sy-880fe",
   storageBucket: "health-recommendation-sy-880fe.appspot.com",
   messagingSenderId: "170811561170",
   appId: "1:170811561170:web:492960e817ad993193090b",
   measurementId: "G-NXTV5VRNP7"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const google_provider = new GoogleAuthProvider();
const facebook_provider = new FacebookAuthProvider();
const github_provider = new GithubAuthProvider();

export const signInWithGooglePopup = async () => {
   try {
      const result: UserCredential = await signInWithPopup(auth, google_provider);
      const user = result.user; // Retrieve the signed-in user
      const idToken = await user.getIdToken()
      return { user: result.user, idToken };
   } catch (error) {
      console.error(error);
   }
};

export const signInWithGithub = async () => {

   try {
      const result: UserCredential = await signInWithPopup(auth, github_provider)
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential: any = GithubAuthProvider.credentialFromResult(result);
      const access_token: any = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
      const idToken = user.getIdToken()
      return { user: result.user, access_token: idToken }
      // IdP data available using getAdditionalUserInfo(result)
      // ...
   } catch (error: any) {
      console.log(error)
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);

      // ...
   };
};


export const signInWithFacebookPopup = async () => {
   try {
      const result: UserCredential = await signInWithPopup(auth, facebook_provider);
      const user = result.user; // Retrieve the signed-in user
      const idToken = await user.getIdToken()
      return { user: result.user, idToken };
   } catch (error) {
      console.error(error);
   }
};





export const signOut = async () => {
   try {
      await auth.signOut();
   } catch (error) {
      console.error('Error signing out:', error);
   }
};

