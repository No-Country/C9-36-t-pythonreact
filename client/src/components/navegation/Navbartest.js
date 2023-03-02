import React, { useState } from "react";
import Logo from "../../assets/LogoDashboard";
import LogoCuenta from "../../assets/LogoCuenta";
import { Link, NavLink } from "react-router-dom";
// import { logOut } from "../config/firebase";
import styles from "./Dashboard.module.css";
import Navbar from "./Navbar";

const Navbartest = ({ handleLogout, handleSeleccion }) => {
  return (
    <header className={styles.dashboardHeader}>
      <div className={styles.logoBoton}>
        <NavLink to={"/"} className={styles.logo}>
          <Logo />
        </NavLink>
  
      </div>
      <div className={styles.navPerfiles}>
        <NavLink to={"/perfiles/frontend"}>Frontend Dev´s</NavLink>
        <NavLink to={"/perfiles/backend"}>Backend Dev´s</NavLink>
        <NavLink to={"/perfiles/designers"}>Designers Dev´s</NavLink>
      </div>
      {/*  */}
      <Navbar className={styles.navCuenta} />
    </header>
  );
};

export default Navbartest;
/* 
<div className={styles.navPerfiles}>
<Link onClick={() => handleSeleccion("frontend")}>Frontend Dev´s</Link>
<Link onClick={() => handleSeleccion("backend")}>Backend Dev´s</Link>
<Link onClick={() => handleSeleccion("designer")}>Designers</Link>
</div> */
