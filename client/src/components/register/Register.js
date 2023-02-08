import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import Home from "../Home";
import RegisterButtons from "./RegisterButtons";

const Register = () => {
  return (
    <div>
      <Home />
      <RegisterButtons />
      <div>
        <Link to={"/"}>
          <h2 className="py-2.5 px-5 mb-2 text-sm text-center mt-4 m-10 font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            Volver al home
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Register;
