import { Field, Form, Formik, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import {
  login,
  handleClickGoogle,
  signInWithFacebook,
} from "../../config/firebase";
import { FaGoogle } from "react-icons/fa";
import { RiFacebookBoxLine } from "react-icons/ri";
/* import * as Yup from "yup"; */

import NavbarTop from "../navegation/NavbarTop";
import Logo from "../../assets/Logo";
/* import { signInWithPopup } from "firebase/auth"; */

const Login = () => {
  const [showPwd, setShowPwd] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { user } = useUserContext();
  useEffect(() => {
    if (user) {
      navigate("/loggedin");
    }
  }, [user]);
  console.log(user);
  const onSubmit = async (values) => {
    const { email, password } = values;
    const credentialUser = await login({ email, password });
    console.log(credentialUser);
    setError(credentialUser.error);
    /* } catch (error) {
      if (error.code === "auth/wrong-password") {
        setError("Contraseña incorrecta");
      }
      if (error.code === "auth/too-many-requests") {
        setError("Demasiados intentos de logueo");
      }
    } */
  };
  const classTw =
    "peer block w-full appearance-none border border-slate-300 rounded-md text-sm shadow-sm bg-transparent p-4 text-sm text-gray-900 focus:border-blue-800 focus:outline-none  focus:ring-0 rounded-sm";
  const classLabel =
    "transhtmlForm absolute top-5 -z-10 origin-[0] ml-1 -translate-y-6 scale-75 text-md text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600";

  /* const loginSchema = Yup.object().shape({
      email: Yup.string()
        .email("El e-mail ingresado no es valido.")
        .required("El e-mail es obligatorio")
        .min(6, "El e-mail ingresado es muy corto.")
        .max(38, "El e-mail ingresado es muy largo."),
      password: Yup.string()
        .required("La contraseña es requerida")
        .min(8, "La contraseña es muy corta.")
        .max(18, "La contraseña es muy larga."),
    }); */
  return (
    <>
      <NavbarTop />
      <div className="flex w-screen justify-center bg-[#264653]">
        <div className="mb-4 mt-32 h-[600px] w-[350px] rounded-md bg-white">
          <div className="flex justify-center">
            <Logo width={100} height={100} />
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
              changepassword: "",
            }}
            onSubmit={onSubmit}
          >
            <Form className="m-6 flex flex-col justify-center gap-1">
              <div>
                <h1 className="text-center text-3xl font-bold">
                  Iniciar Sesión
                </h1>
              </div>
              <div className="group relative z-0 mb-1 w-full">
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className={classTw}
                  placeholder=" "
                  required
                />
                <ErrorMessage name="email" component="div" />
                <label htmlFor="floating_email" className={classLabel}>
                  Direccion de email
                </label>
              </div>
              <div className="group relative z-0 mb-1 w-full">
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className={classTw}
                  placeholder=" "
                  required
                />
                <ErrorMessage name="password" component="div" />
                <label htmlFor="floating_password" className={classLabel}>
                  Ingrese su contraseña
                </label>
                <div
                  className="w-35 pointer pwd-icon absolute inset-y-4 right-1"
                  onClick={() => setShowPwd(!showPwd)}
                >
                  {showPwd ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      height={"1.5rem"}
                    >
                      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                      <path
                        fillRule="evenodd"
                        d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      height={"1.5rem"}
                    >
                      <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                      <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                      <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                    </svg>
                  )}
                </div>
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
          <div className="mx-10 mb-2 flex flex-col justify-between gap-4">
            <Link to={"/forgotpassword"}>
              <p className="align-middle text-sm font-semibold text-lime-800">
                Olvidaste la contraseña?
              </p>
            </Link>
            <p className="mb-5 text-sm font-semibold">
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
              className="flex h-[56px] items-center gap-2 rounded-full border-2 border-black
         px-12 text-base text-black"
            >
              <FaGoogle className="text-2xl text-black" />
              Login con Google
            </button>
          </div>
          <div className="flex justify-center">
            <button
              onClick={signInWithFacebook}
              className="mt-1 flex h-[56px] items-center gap-2  rounded-full
         bg-[#4B61B1] px-8 text-base text-white"
            >
              <RiFacebookBoxLine className="text-3xl text-black" />
              Loggin con Facebook
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
