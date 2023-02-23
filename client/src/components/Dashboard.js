import React, {useState} from "react";
import Logo from "../assets/LogoDashboard";
import { Link, NavLink } from "react-router-dom";
// import { logOut } from "../config/firebase";
import styles from "./Dashboard.module.css";
import Navbar from './Navbar';
import PerfilesBackend from './perfiles/PerfilesBackend';
import PerfilesFrontend from './perfiles/PerfilesFrontend';
import PerfilesDesigner from './perfiles/PerfilesDesigner';


const Dashboard = () => {
  {/**const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };*/}
  const [seleccion, setSeleccion] = useState('frontend');

  const handleSeleccion = (opcion) => {
    setSeleccion(opcion);
  };


  return (
    <div>
      <header>

        <div>
          <NavLink to={"/"} className={styles.logo}>
              <Logo />
          </NavLink>
          <Link><button>Iniciar Sesión</button></Link>
        </div>

        <div className={styles.navPerfiles}>
          <Link onClick={() => handleSeleccion('frontend')}>Frontend Dev´s</Link>
          <Link onClick={() => handleSeleccion('backend')}>Backend Dev´s</Link>
          <Link onClick={() => handleSeleccion('designer')}>Designers</Link>
        </div>

      </header>
      
      <section>
        <h1>Buscá con quien trabajar</h1>

        {/* Aquí se renderiza el contenido correspondiente a la opción seleccionada */}
      {seleccion === 'frontend' && <PerfilesFrontend />}
      {seleccion === 'backend' && <PerfilesBackend />}
      {seleccion === 'designer' && <PerfilesDesigner />}

      </section>
      
      <Navbar/>
    </div>
  );
};

export default Dashboard;
