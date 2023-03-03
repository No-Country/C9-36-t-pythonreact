import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/LogoDashboard";
import styles from "./Home.module.css";
const NavbarTop = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>
          <NavLink to={"/"}>
            <Logo />
          </NavLink>
        </div>
        <div className={styles.links}>
          <NavLink to={"/login"}>
            <button className={styles.button__sesion}>Iniciar sesión</button>
          </NavLink>
          <NavLink to={"/register"}>
            <button className={styles.button__register}>Registrarte</button>
          </NavLink>
        </div>
      </header>
    </div>
  );
};

export default NavbarTop;
