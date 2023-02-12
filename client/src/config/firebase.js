// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnEddeH4DUeuGzz3nhcJnn-Q3R1cwioNU",
  authDomain: "team-c9-36.firebaseapp.com",
  projectId: "team-c9-36",
  storageBucket: "team-c9-36.appspot.com",
  messagingSenderId: "261095716159",
  appId: "1:261095716159:web:ace88b5fbd6320ed3bcf8a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
/* exportamos auth, auth tiene la configuracion de nuestro proyecto  */
export { auth, provider };

export const login = ({ email, password }) =>
  signInWithEmailAndPassword(auth, email, password);

export const register = ({ email, password }) =>
  createUserWithEmailAndPassword(auth, email, password);

export const logOut = () => signOut(auth);

export const resetPassword = (email) => sendPasswordResetEmail(auth, email);

export const signInWithFacebook = () => {
  const provider = new FacebookAuthProvider();
  signInWithPopup(auth, provider)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.error(err));
};
