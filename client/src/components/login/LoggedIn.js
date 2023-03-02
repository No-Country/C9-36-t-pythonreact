import { useNavigate } from "react-router-dom";
import AuthProvider from "./AuthProvider";
/* Este componente es el del usuario logueado */
const LoggedIn = () => {
  const navegate = useNavigate();
  const handleUserLoggedIn = (user) => {
    navegate("/dashboard");
  };
  const handleUserNotRegistered = (user) => {
    navegate("/dashboard");
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
