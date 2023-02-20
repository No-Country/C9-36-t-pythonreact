import { Field, Form, Formik, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { login, handleClickGoogle } from "../../config/firebase";
import { FaGoogle } from "react-icons/fa";

import * as Yup from "yup";
import Home from "../Home";
/* import { signInWithPopup } from "firebase/auth"; */

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { user } = useUserContext();
  useEffect(() => {
    if (user) {
      navigate("/loggedin");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  const onSubmit = async (values) => {
    const { email, password } = values;
    try {
      // eslint-disable-next-line no-unused-vars
      const credentialUser = await login({ email, password });
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        setError("Contraseña incorrecta");
      }
      if (error.code === "auth/too-many-requests") {
        setError("Demasiados intentos de logueo");
      }
    }
  };
  const classTw =
    "peer block w-full appearance-none border border-slate-300 rounded-md text-sm shadow-sm bg-transparent p-4 text-sm text-gray-900 focus:border-blue-800 focus:outline-none  focus:ring-0 rounded-sm";
  const classLabel =
    "transhtmlForm absolute top-5 -z-10 origin-[0] ml-1 -translate-y-6 scale-75 text-md text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600";
    const loginSchema = Yup.object().shape({
      email: Yup.string()
        .email("El e-mail ingresado no es valido.")
        .required("El e-mail es obligatorio")
        .min(6, "El e-mail ingresado es muy corto.")
        .max(38, "El e-mail ingresado es muy largo."),
      password: Yup.string()
        .required("La contraseña es requerida")
        .min(8, "La contraseña es muy corta.")
        .max(18, "La contraseña es muy larga."),
    });
    return (
    <div className="mt-10 h-auto">
      <Home />
      <Formik
        initialValues={{
          email: "",
          password: "",
          changepassword: "",
        }}
        onSubmit={onSubmit}
      >
        <Form className="m-6 flex flex-col justify-center gap-2">
          <div>
            <h1 className="text-center text-3xl font-bold">Login</h1>
          </div>
          <div className="group relative z-0 mb-6 w-full">
            <Field
              type="email"
              name="email"
              id="email"
              className={classTw}
              placeholder=" "
              required
            />
            <ErrorMessage name="email" component="div"/>
            <label htmlFor="floating_email" className={classLabel}>
              Direccion de email
            </label>
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
            <ErrorMessage name="password" component="div"/>
            <label htmlFor="floating_password" className={classLabel}>
              Ingrese su contraseña
            </label>
          </div>
          {
            <div>
              <p className="text-md font-bold text-red-600">{error}</p>
            </div>
          }
          <div className="flex justify-center">
            <button
              type="submit"
              className="h-10 w-40 rounded-full bg-[#35457F] text-white"
            >
              Ingresar
            </button>
          </div>
        </Form>
      </Formik>
      <div className="mx-10 mb-2 flex justify-between">
        <Link to={"/forgotpassword"}>
          <p className="align-middle text-sm font-semibold text-lime-800">
            Olvidaste la contraseña?
          </p>
        </Link>
        <p className="text-sm font-semibold ">
          No tenes cuenta?{" "}
          <Link
            to={"/register"}
            className="text-sm font-semibold text-lime-800 "
          >
            {" "}
            Registrate
          </Link>
        </p>{" "}
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleClickGoogle}
          className="text- flex h-[56px] items-center gap-2 rounded-full border-2 border-black
         px-12 text-base text-black"
        >
          <FaGoogle className="text-2xl text-black" />
          Login con Google
        </button>
      </div>
    </div>
  );
};
export default Login;
