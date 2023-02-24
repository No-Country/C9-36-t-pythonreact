import { useNavigate } from "react-router-dom";
import AuthProvider from "./AuthProvider";
/* Este componente es el del usuario logueado */
const LoggedIn = () => {
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
  const handleUserLoggedIn = (user) => {
    navegate("/registernewprofilefigma");
  };
  const handleUserNotLoggedIn = () => {
    /* es una ruta protegida, la voy a borrar */
  };
  const handleUserNotRegistered = (user) => {
    navegate("/registernewprofilefigma");
  };
  return (
    <AuthProvider
      onUserLoggedIn={handleUserLoggedIn}
      onUserNotLoggedIn={handleUserNotLoggedIn}
      onUserNotRegistered={handleUserNotRegistered}
    >
      <div>loading.... del logged in</div>
    </AuthProvider>
  );
};

export default LoggedIn;
