import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { existsUsername, updateUser } from "../../config/firebase";
import { useUserContext } from "../../context/UserContext";
import AuthProvider from "../login/AuthProvider";

const RegisterProfile = () => {
  const { user } = useUserContext();
  const [state, setState] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [userName, setUserName] = useState("");
  const navegate = useNavigate();
  const handleUserNotRegistered = (user) => {
    setState(3);
    setCurrentUser(user);
  };
  console.log(state + "stateeeee deberia ser 3");
  if (state == 3) {
    const handleInputUserName = (e) => {
      setUserName(e.target.value);
    };
    const handleContinue = async () => {
      if (userName !== "") {
        const exists = await existsUsername(userName);
        if (exists) {
          setState(5);
        } else {
          const tmp = { ...userName };
          tmp.userName = userName;
          tmp.processComplete = true;
          await updateUser(tmp);
        }
      }
    };
    const handleUserLoggedIn = async (user) => {
      setCurrentUser(user);
    };
    return (
      <div className="text-xl">
        Bievenido{" "}
        <span className="font-bold text-md">{currentUser.displayName}</span>
        <div>
          <input type="text" onchange={handleInputUserName}></input>
        </div>
        <div>
          <button onClick={handleContinue}></button>
        </div>
        {/* minuto 1:09 */}
      </div>
    );
  }
  return (
    <AuthProvider onUserNotRegistered={handleUserNotRegistered}>
      <div>loading.... profile</div>
    </AuthProvider>
  );
};

export default RegisterProfile;
