import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
/* Config de firebase */
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(false);
  useEffect(() => {
    /* Este metodo consulta a firebase si el usuario esta logueado o se registro  */
    /* Destructor de observable, una seguridad en la memoria para evitar que otro componente accidentalmente vuelva a ejecutar este useEffect*/
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsuscribe;
  }, []);
  if (user === false)
    return <div>Loading app... Aca voy a poner un spinner lindo y bonito</div>;
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);
