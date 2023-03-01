import React from "react";
import Logo from "../../assets/Logo";
import { Link, NavLink } from "react-router-dom";
import styles from "./LandingPage.module.css";

function LandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.containerLogoTitulo}>
        <div className={styles.logo}>
          <NavLink to={"/"}>
            <Logo className={styles.logoSvg} />
          </NavLink>
        </div>
        <h1 className={styles.titulo}>
          Te damos la bienvenida a la comunidad de developers más grande de
          LATAM.
        </h1>
      </div>
      <div className={styles.photodevs}>
        <div className={styles.photodevsFondo}>
          <div className={styles.boton}>
            <Link to={"/home"}>
              <button className={styles.button}>Continuar</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
