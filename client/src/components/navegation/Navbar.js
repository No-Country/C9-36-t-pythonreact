import React from "react";

import LogoMisEquipos from "../../assets/LogoMisEquipos";
import LogoMiPerfil from "../../assets/LogoMiPerfil";
import LogoCuenta from "../../assets/LogoCuenta";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { logOut } from "../../config/firebase";
function Navbar() {
  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <button onClick={handleLogout}>
            <div className={styles.logoCuenta}>
              <LogoCuenta />

              <h2>Logout</h2>
            </div>
          </button>
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
