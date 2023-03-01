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
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getBytes,
} from "firebase/storage";
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
export const db = getFirestore();
export const storage = getStorage();
/* exportamos auth, auth tiene la configuracion de nuestro proyecto  */
export { auth, provider };
/* Esta funcion sirve para loguear al usuario */
export const login = ({ email, password }) =>
  signInWithEmailAndPassword(auth, email, password);
/* Esta funcion sirve para registrar al usuario */
export const register = ({ email, password }) =>
  createUserWithEmailAndPassword(auth, email, password);
/* Esta funcion sirve para desloguear al usuario */
export const logOut = () => signOut(auth);
/* Esta funcion sirve para resetear la contraseña del usuario */
export const resetPassword = (email) => sendPasswordResetEmail(auth, email);
/* Esta funcion sirve para loguearse usando Facebook */
export const signInWithFacebook = () => {
  const provider = new FacebookAuthProvider();
  signInWithPopup(auth, provider)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.error(err));
};
/* Esta funcion sirve para loguearse usando Google */
export const handleClickGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((data) => console.log(data.user.email))
    .catch((err) => console.error(err));
};
/* Configuraciones de usuario */
/* Buscamos al usuario con el identificador unico de usuario */
export const userExists = async (uid) => {
  /* Buscamos en la base de datos, en la coleccion de usuarios, el documento uid */
  const docRef = doc(db, "users", uid);
  const res = await getDoc(docRef);
  console.log(res);
  return res.exists();
};
export const existsUsername = async (userName) => {
  const users = [];
  /* Cuando buscamos en varios documentos buscamos por la coleccion */
  const docsRef = collection(db, "users");
  const q = query(docsRef, where("username", "==", userName));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    users.push(doc.data());
  });
  return users.length > 0 ? users[0].uid : null;
};

export const registerNewUser = async (user) => {
  try {
    /* Definimos la coleccion donde vamos a guardar el usuario nuevo */
    const collectionRef = collection(db, "users");
    const docRef = doc(collectionRef, user.uid);
    await setDoc(docRef, user);
  } catch (error) {}
};

export const updateUser = async (user) => {
  try {
    const collectionRef = collection(db, "users");
    const docRef = doc(collectionRef, user.uid);
    await setDoc(docRef, user);
  } catch (error) {}
};
