import React, { useState } from "react";
import Logo from "../assets/LogoDashboard";
import { Link, NavLink } from "react-router-dom";
// import { logOut } from "../config/firebase";
import styles from "./Dashboard.module.css";
import Navbar from "./Navbar";
import PerfilesBackend from "./perfiles/PerfilesBackend";
import PerfilesFrontend from "./perfiles/PerfilesFrontend";
import PerfilesDesigner from "./perfiles/PerfilesDesigner";
import { logOut } from "../config/firebase";

const Dashboard = () => {
  const [seleccion, setSeleccion] = useState("frontend");
  const handleSeleccion = (opcion) => {
    setSeleccion(opcion);
  };
  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <header>
        <div>
          <NavLink to={"/"} className={styles.logo}>
            <Logo />
          </NavLink>
          <button
            onClick={handleLogout}
            className="mt-10 mr-2 mb-2 rounded-full border border-gray-200 bg-white py-2.5 px-5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
          >
            Logout{" "}
          </button>
          <Link>
            <button>Iniciar Sesión</button>
          </Link>
        </div>
        <div className={styles.navPerfiles}>
          <Link onClick={() => handleSeleccion("frontend")}>
            Frontend Dev´s
          </Link>
          <Link onClick={() => handleSeleccion("backend")}>Backend Dev´s</Link>
          <Link onClick={() => handleSeleccion("designer")}>Designers</Link>
        </div>
      </header>

      <section>
        <h1>Buscá con quien trabajar</h1>

        {/* Aquí se renderiza el contenido correspondiente a la opción seleccionada */}
        {seleccion === "frontend" && <PerfilesFrontend />}
        {seleccion === "backend" && <PerfilesBackend />}
        {seleccion === "designer" && <PerfilesDesigner />}
      </section>

      <Navbar />
    </div>
  );
};

export default Dashboard;
