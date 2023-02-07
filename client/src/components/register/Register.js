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
      <Link to={"/"}>
        <h2 className="text-3xl rounded-full hover: bg-slate-600">
          Volver al home
        </h2>
      </Link>
    </div>
  );
};

export default Register;
