import React, { useState } from "react";
import PerfilesBackend from "../perfiles/PerfilesBackend";
import PerfilesFrontend from "../perfiles/PerfilesFrontend";
import PerfilesDesigner from "../perfiles/PerfilesDesigner";
import AllProfiles from "../perfiles/AllProfiles";
import { logOut } from "../../config/firebase";
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
