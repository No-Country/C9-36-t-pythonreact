import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

export const LayoutPrivate = ({ children, redirectTo = "/" }) => {
  const { user } = useUserContext();
  /* SI el user no esta logueado direcciona la pagina al home,
  Si el user esta logueado puede acceder al dashboard */
  if (!user) {
    return <Navigate to={redirectTo} />;
  }
  return children ? children : <Outlet />;
};

export default LayoutPrivate;
