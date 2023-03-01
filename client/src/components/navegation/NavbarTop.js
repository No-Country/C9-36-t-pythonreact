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
          <Link to={"/login"}>
            <button className={styles.button__sesion}>Iniciar sesión</button>
          </Link>
          <Link to={"/register"}>
            <button className={styles.button__register}>Registrarte</button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default NavbarTop;
