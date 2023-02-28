import { useNavigate } from "react-router-dom";
import AuthProvider from "./AuthProvider";
/* Este componente es el del usuario logueado */
const LoggedIn = () => {
  const navegate = useNavigate();
  const handleUserLoggedIn = (user) => {
    navegate("/registernewprofilefigma");
  };
  const handleUserNotRegistered = (user) => {
    navegate("/registernewprofilefigma");
  };
  return (
    <AuthProvider
      onUserLoggedIn={handleUserLoggedIn}
      onUserNotRegistered={handleUserNotRegistered}
    >
      <div>loading.... del logged in</div>
    </AuthProvider>
  );
};

export default LoggedIn;
