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
import Navbartest from "./Navbartest";

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
      <Navbartest
        handleLogout={handleLogout}
        handleSeleccion={handleSeleccion}
      />
      <section>
        <h1>Buscá con quien trabajar</h1>
        {/* Aquí se renderiza el contenido correspondiente a la opción seleccionada */}
        {seleccion === "frontend" && <PerfilesFrontend />}
        {seleccion === "backend" && <PerfilesBackend />}
        {seleccion === "designer" && <PerfilesDesigner />}
      </section>
    </div>
  );
};

export default Dashboard;
