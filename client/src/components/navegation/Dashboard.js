import React, { useState } from "react";
import AllProfiles from "../perfiles/AllProfiles";
import { logOut } from "../../config/firebase";
import Navbartest from "./Navbartest";
import styles from "./Dashboard.module.css"

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
  console.log(seleccion);
  return (
    <div className={styles.body}>
      <Navbartest
        handleLogout={handleLogout}
        handleSeleccion={handleSeleccion}
      />
      <AllProfiles />
      <button onClick={handleLogout} className="bg-black">
        Log out
      </button>
      {/*     <section>
        <h1>Buscá con quien trabajar</h1>

        {seleccion === "frontend" && <PerfilesFrontend />}
        {seleccion === "backend" && <PerfilesBackend />}
        {seleccion === "designer" && <PerfilesDesigner />}
      </section> */}
    </div>
  );
};

export default Dashboard;
