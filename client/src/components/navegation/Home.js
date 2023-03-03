import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/LogoDashboard";
import LogoGrande from "../../assets/Logo";
import styles from "./Home.module.css";

const Home = () => {
  const windowWidth = window.innerWidth;
  const isSmall = windowWidth < 900;
  const navegate = useNavigate();
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>
          <NavLink to={"/"}>
            <Logo />
          </NavLink>
        </div>
        <div className={styles.logoGrande}>
          <NavLink to={"/"}>
            <LogoGrande />
          </NavLink>
        </div>

        <div className={styles.links}>
          <NavLink to={"/login"} className={styles.button__sesion}>
            Iniciar sesión
          </NavLink>
          <NavLink to={"/register"}>
            <button className={styles.button__register}>Registrarte</button>
          </NavLink>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.titulo}>
          <h1>
            Buscá con <br /> quién trabajar
          </h1>
        </div>

        <div className={styles.poligonos}>
          <div className={styles.poligono1}></div>
          <div className={styles.poligono2}></div>
          <div className={styles.poligono3}></div>
        </div>
      </main>
    </div>
  );
};

export default Home;

/*  <div>
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

      <main className={styles.main}>
        <div className={styles.titulo}>
          <h1>
            Buscá con <br /> quién trabajar
          </h1>
        </div>

        <div className={styles.poligonos}>
          <div className={styles.poligono1}></div>
          <div className={styles.poligono2}></div>
          <div className={styles.poligono3}></div>
        </div>
      </main>
    </div> */
