import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/Logo";
import Navbar from "./Navbar";

const Home = () => {
  const location = useLocation();
  return (
    <div>
      <div className="mt-10 flex justify-center">
        <NavLink to={"/"}>
          <Logo />
        </NavLink>
      </div>

      {location.pathname === "/home" && (
        <>
          <div className="mt-12 flex justify-center">
            <h2 className="text-2xl">¡Te damos la bienvenida!</h2>
          </div>
          <div>
            <h2 className="mt-12 flex justify-center">
              Busca Con quien Trabajar{" "}
            </h2>
            <h3 className="mt-4 bg-teal-400 text-center font-extrabold text-pink-600">
              --- Seccion en construccion ---
            </h3>
          </div>
          <div className="mt-8 text-center">
            <NavLink
              to={"/register"}
              className="mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Registrate
            </NavLink>
            <NavLink
              to={"/login"}
              className="mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </NavLink>
          </div>
          <Navbar />
        </>
      )}
    </div>
  );
};

export default Home;
