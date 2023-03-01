import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  getUserInfo,
  registerNewUser,
  userExists,
} from "../../config/firebase";
const AuthProvider = ({
  children,
  onUserNotLoggedIn,
  onUserNotRegistered,
  onUserLoggedIn,
}) => {
  const navegate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const isRegistered = await userExists(user.uid);
        if (isRegistered) {
          const userInfo = await getUserInfo(user.uid);
          if (userInfo.processCompleted) {
            onUserLoggedIn(userInfo);
          } else {
            onUserNotRegistered(userInfo);
          }
          /*   const loggedUser = await getUserInfo(uid); */
        } else {
          await registerNewUser({
            uid: user.uid,
            busco: "",
            contacto: "",
            descripcion: "",
            stacks: "",
            tecnologias: "",
            proyectos: "",
            profilePicture: "",
            userName: "",
          });
          onUserNotRegistered(user);
          navegate("/registernewprofilefigma");
        }
      } else {
        onUserNotLoggedIn();
      }
    });
  }, [navegate, onUserLoggedIn, onUserNotLoggedIn, onUserNotRegistered]);
  return <div>{children}</div>;
};

export default AuthProvider;
