import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
/* Es un hook personalizado para impedir que el usario vaya al login o al register si ya esta  */
export const useRedirectActiveUser = (user, path) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate(path);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
};
