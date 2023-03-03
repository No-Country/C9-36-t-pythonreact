import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../config/firebase";
import * as Yup from "yup";
import NavbarTop from "../navegation/NavbarTop";
import Logo from "../../assets/Logo";
const Register = () => {
  const [showPwd, setShowPwd] = useState(false);
  const navegate = useNavigate();
  const [error, setError] = useState("");
  const onSubmit = async (values) => {
    const { email, password } = values;
    try {
      // eslint-disable-next-line no-unused-vars
      const credentialUser = await register({ email, password });
      console.log(credentialUser);
      navegate("/loggedin");
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
  const registerSchema = Yup.object().shape({
    email: Yup.string()
      .email("El e-mail ingresado no es valido.")
      .required("El e-mail es obligatorio")
      .min(6, "El e-mail ingresado es muy corto.")
      .max(38, "El e-mail ingresado es muy largo."),
    password: Yup.string()
      .required("La contraseña es requerida")
      .min(8, "La contraseña es muy corta.")
      .max(18, "La contraseña es muy larga."),
    changepassword: Yup.string().when("password", {
      is: (value) => (value && value.length > 0 ? true : false),
      then: Yup.string()
        .oneOf([Yup.ref("password")], "Las contraseñas no cohinciden.")
        .required("Debes volver a ingresar la contraseña en este campo."),
    }),
  });
  return (
    <>
      <div className=" flex h-screen w-screen justify-center bg-[#264653]">
        <div className="m-10 flex h-[600px] w-80 flex-col items-center justify-center rounded-md bg-white">
          <div className="flex justify-center">
            <Logo width={90} height={90} />
          </div>
          <div className="mt-8">
            <p className=" text-center text-3xl font-semibold text-[#264653]">
              Te damos la bienvenida a
            </p>
            <p className="text-center text-3xl font-semibold text-[#264653]">
              Hive
            </p>
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
              changepassword: "",
            }}
            validationSchema={registerSchema}
            onSubmit={onSubmit}
          >
            <Form className="">
              <div className="group relative z-0 mb-6 w-64">
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
                <div>
                  <span className="font-bold text-red-600">{error}</span>
                </div>
              </div>
              <div className="group relative z-0 mb-6 w-full">
                <Field
                  type={showPwd ? "text" : "password"}
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
              <div className="group relative z-0 mb-6 w-full">
                <Field
                  type={showPwd ? "text" : "password"}
                  name="changepassword"
                  id="changepassword"
                  className={classTw}
                  placeholder=" "
                  required
                />
                <ErrorMessage name="changepassword" component="div" />
                <label htmlFor="floating_changepassword" className={classLabel}>
                  Reingrese su contraseña
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
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="h-10 w-[130px] rounded-full bg-[#35457F] text-white"
                >
                  Aceptar
                </button>
              </div>
            </Form>
          </Formik>
          <div className="mt-4 text-right">
            <p className="text-right">
              Ya tenes cuenta?{" "}
              <Link to={"/login"} className="font-bold text-black">
                {" "}
                Iniciar sesión
              </Link>
            </p>{" "}
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
