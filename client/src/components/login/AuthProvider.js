import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, registerNewUser, userExists } from "../../config/firebase";
import { useUserContext } from "../../context/UserContext";

const AuthProvider = ({
  children,
  onUserNotLoggedIn,
  onUserNotRegistered,
  onUserLoggedIn,
}) => {
 /*  const { user } = useUserContext(); */
  const navegate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const exists = await userExists(user.uid);
        if (exists) {
          /*  onUserLoggedIn(user); */
          console.log("logged in ");
        } else {
          await registerNewUser({
            uid: user.uid,
            displayName: user.displayName,
            profilePicture: "",
            username: "",
            processCompleted: false,
          });
          onUserNotRegistered(user);
          console.log("not registered este console es del authprovider");
          navegate("/registerprofile");
        }
      } else {
        onUserNotLoggedIn();
      }
    });
  }, []);
  /* navegate, onUserLoggedIn, onUserNotLoggedIn, onUserNotRegistered */
  return <div>{children}</div>;
};

export default AuthProvider;
