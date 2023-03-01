import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import {
  auth,
  login,
  provider,
  handleClickGoogle,
} from "../../config/firebase";
import { FaGoogle } from "react-icons/fa";

// import * as Yup from "yup";
import Home from "../Home";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { user, setUser } = useUserContext();
  useEffect(() => {
    if (user) {
      navigate("/loggedin");
    }
  }, [user]);
  const onSubmit = async (values) => {
    const { email, password } = values;
    try {
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
  return (
    <div className="mt-10 h-auto">
      <Home />
      <Formik
        initialValues={{
          email: "",
          password: "",
          changepassword: "",
        }}
        onSubmit={onSubmit}>
        <Form className="flex flex-col gap-2 justify-center m-6">
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
            <label htmlFor="floating_password" className={classLabel}>
              Ingrese su contraseña
            </label>
          </div>
          {
            <div>
              <p className="text-red-600 font-bold text-md">{error}</p>
            </div>
          }
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#35457F] rounded-full w-40 h-10 text-white">
              Ingresar
            </button>
          </div>
        </Form>
      </Formik>
      <div className="flex justify-between mb-2 mx-10">
        <Link to={"/forgotpassword"}>
          <p className="text-lime-800 font-semibold text-sm align-middle">
            Olvidaste la contraseña?
          </p>
        </Link>
        <p className="font-semibold text-sm ">
          No tenes cuenta?{" "}
          <Link
            to={"/register"}
            className="text-lime-800 font-semibold text-sm ">
            {" "}
            Registrate
          </Link>
        </p>{" "}
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleClickGoogle}
          className="text-black flex gap-2 items-center rounded-full border-2 border-black text-
         h-[56px] px-12 text-base">
          <FaGoogle className="text-2xl text-black" />
          Login con Google
        </button>
      </div>
    </div>
  );
};
export default Login;
