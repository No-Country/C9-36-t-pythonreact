import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { register } from "../../config/firebase";
// import * as Yup from "yup";
import Home from "../Home";
const Register = () => {
  const [error, setError] = useState("");
  const onSubmit = async (values) => {
    const { email, password } = values;
    try {
      const credentialUser = await register({ email, password });
      window.location.href = "/dashboard";
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          setError("Usuario ya registrado");
          break;
        case "auth/invalid-email":
          setError("Formato email no válido");
          break;
        default:
          console.log("Ocurrio un error en el server");
      }
    }
  };

  const classTw =
    "peer block w-full appearance-none border border-slate-300 rounded-md text-sm shadow-sm bg-transparent p-4 text-sm text-gray-900 focus:border-blue-800 focus:outline-none  focus:ring-0 rounded-sm";
  const classLabel =
    "transhtmlForm absolute top-5 -z-10 origin-[0] ml-1 -translate-y-6 scale-75 text-md text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600";
  return (
    <div className="mt-10">
      <Home />
      <Formik
        initialValues={{
          email: "",
          password: "",
          changepassword: "",
        }}
        onSubmit={onSubmit}>
        <Form className="flex flex-col gap-2 justify-center m-6">
          <div className="group relative z-0 mb-6 w-full">
            <Field
              type="email"
              name="email"
              id="email"
              className={classTw}
              placeholder=" "
              required
            />
            <label htmlFor="floating_email" className={classLabel}>
              Direccion de email
            </label>
            <div>
              <span className="text-red-600 font-bold">{error}</span>
            </div>
          </div>
          <div className="group relative z-0 mb-6 w-full">
            <Field
              type="password "
              name="password"
              id="password"
              className={classTw}
              placeholder=" "
              required
            />
            <label htmlFor="floating_password" className={classLabel}>
              Ingrese su contraseña
            </label>
          </div>
          <div className="group relative z-0 mb-6 w-full">
            <Field
              type="password"
              name="changepassword"
              id="changepassword"
              className={classTw}
              placeholder=" "
              required
            />
            <label htmlFor="floating_changepassword" className={classLabel}>
              Reingrese su contraseña
            </label>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#35457F] rounded-full w-[130px] h-10 text-white">
              Aceptar
            </button>
          </div>
        </Form>
      </Formik>
      <div className="text-right">
        <p className="text-right">
          Ya tenes cuenta?{" "}
          <Link to={"/login"} className="text-black font-bold">
            {" "}
            Iniciar sesión
          </Link>
        </p>{" "}
      </div>
    </div>
  );
};
export default Register;
