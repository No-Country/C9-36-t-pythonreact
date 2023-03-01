import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, userExists } from "../../config/firebase";
import { useUserContext } from "../../context/UserContext";
import AuthProvider from "./AuthProvider";
/* Este componente es el del usuario logueado */
const LoggedIn = () => {
  const { user } = useUserContext();
  const [currentUser, setCurrentUser] = useState(null);
  const [state, setCurrentState] = useState(0);
  const navegate = useNavigate();
  /*  useEffect(() => {
    setCurrentState(1);
    onAuthStateChanged(auth, handleUserStateChange);
  }, [navegate]);
  const handleUserStateChange = async (user) => {
    if (user) {
      const isRegistered = await userExists(user.uid);
      if (isRegistered) {
        navegate("/dashboard");
        setCurrentState(2);
      } else {
        setCurrentState(3);
        navegate("/registerProfile");
      }
    } else {
      setCurrentState(4);
    }
  }; */
  const handleUserLoggedIn = () => {
    navegate("/dashboard");
  };
  const handleUserNotLoggedIn = () => {};
  const handleUserNotRegistered = () => {
    navegate("/registerProfile");
  };
  return (
    <AuthProvider
      onUserLoggedIn={handleUserLoggedIn}
      onUserNotLoggedIn={handleUserNotLoggedIn}
      onUserNotRegistered={handleUserNotRegistered}>
      <div>loading....</div>
    </AuthProvider>
  );
};

export default LoggedIn;
