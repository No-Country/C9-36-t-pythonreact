import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/Logo";

const Home = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div>
      <div className="flex justify-center mt-10">
        <NavLink to={"/"}>
          <Logo />
        </NavLink>
      </div>

      {location.pathname === "/" && (
        <>
          <div className="flex justify-center mt-12">
            <h2 className="text-2xl">¡Te damos la bienvenida!</h2>
          </div>
          <div>
            <h2 className="flex justify-center mt-12">Te gusta tindev? </h2>
          </div>
          <div className="mt-8 text-center">
            <NavLink
              to={"/register"}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Registrate
            </NavLink>
            <NavLink
              to={"/login"}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Login
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
