import React from "react";
import { logOut } from "../config/firebase";

const Dashboard = () => {
  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center flex-col">
      <h1>Soy un Dashboard!!!!!!!!!!!!!!</h1>
      <h3 className="text-pink-600 font-extrabold text-center mt-4 bg-teal-400">
        --- Seccion en construccion --- Esta es la primer ruta protegida donde
        ingresa el usuario despues de loguearse
      </h3>
      <button
        onClick={handleLogout}
        className="mt-10 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        Logout{" "}
      </button>
    </div>
  );
};

export default Dashboard;
