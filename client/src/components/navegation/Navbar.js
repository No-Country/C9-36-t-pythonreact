import React from "react";

import LogoMisEquipos from "../../assets/LogoMisEquipos";
import LogoMiPerfil from "../../assets/LogoMiPerfil";
import LogoCuenta from "../../assets/LogoCuenta";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <NavLink>
            <div className={styles.logoCuenta}>
              <LogoCuenta />
              <h2>Cuenta</h2>
            </div>
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
