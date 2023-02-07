import React from "react";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import Logo from "../assets/Logo";

const windowUrl = window.location.search;

const Home = () => {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <NavLink to={"/"}>
          <Logo />
        </NavLink>
      </div>
      {/*Cambios en el figma <div className="flex justify-center">
        <h1 className="text-3xl font-semibold mt-[1px]">hive</h1>
      </div> */}
      {/*Comentario de Cristian ->> A resolver que esto de abajo se renderice solamente cuando estamos en el home */}
      {/*  <div className="flex justify-center mt-12">
        <h2 className="text-2xl">¡Te damos la bienvenida!</h2>
      </div> 
      <div>
        <h2 className="flex justify-center mt-12">Te gusta tindev? </h2>
      </div>
      <div>
        <NavLink to={"/register"}>Registrate</NavLink>
      </div>*/}
    </div>
  );
};

export default Home;
