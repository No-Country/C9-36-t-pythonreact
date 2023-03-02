import React, { useState } from "react";
import LogoHome from "../../assets/LogoHome";
import LogoMisEquipos from "../../assets/LogoMisEquipos";
import LogoMiPerfil from "../../assets/LogoMiPerfil";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import LogoutModal from "./LogoutModal";

function Navbar() {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    // Aquí llama a la función para cerrar sesión
    // y luego oculta el modal
    setShowLogoutModal(false);
  };
  return (
    <>
      <nav>
        <div className={styles.logo}>
          <NavLink to={"/"}>
            <LogoHome onMouseOver={<LogoutModal />} />
          </NavLink>
          {showLogoutModal && (
            <div className={styles.logoutModal}>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
        <div className={styles.logo}>
          <NavLink to={"/favoritesUsers"}>
            <LogoMisEquipos />
          </NavLink>
        </div>
        <div className={styles.logo}>
          <NavLink to={"/registernewprofilefigma"}>
            <LogoMiPerfil />
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

/* import React from "react";
import LogoHome from "../../assets/LogoHome";
import LogoMisEquipos from "../../assets/LogoMisEquipos";
import LogoMiPerfil from "../../assets/LogoMiPerfil";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <>
      <nav>
        <div className={styles.logo}>
          <NavLink to={"/"}>
            <LogoHome />
          </NavLink>
        </div>
        <div className={styles.logo}>
          <NavLink to={"/favoritesUsers"}>
            <LogoMisEquipos />
          </NavLink>
        </div>
        <div className={styles.logo}>
          <NavLink to={"/registernewprofilefigma"}>
            <LogoMiPerfil />
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
 */
