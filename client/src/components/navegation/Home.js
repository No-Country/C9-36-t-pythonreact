import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/LogoDashboard";
import styles from "./Home.module.css";

const Home = () => {
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
