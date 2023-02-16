import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../config/firebase";
import * as Yup from "yup";
import Home from "../Home";
const Register = () => {
  const navegate = useNavigate();
  const [error, setError] = useState("");
  const onSubmit = async (values) => {
    const { email, password } = values;
    try {
      const credentialUser = await register({ email, password });
      console.log(credentialUser);
      navegate("/registernewprofile");
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
    <div className="mt-10">
      <Home />
      <Formik
        initialValues={{
          email: "",
          password: "",
          changepassword: "",
        }}
        validationSchema={registerSchema}
        onSubmit={onSubmit}
      >
        <Form className="m-6 flex flex-col justify-center gap-2">
          <div className="group relative z-0 mb-6 w-full">
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
            <ErrorMessage name="changepassword" component="div" />
            <label htmlFor="floating_changepassword" className={classLabel}>
              Reingrese su contraseña
            </label>
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
      <div className="text-right">
        <p className="text-right">
          Ya tenes cuenta?{" "}
          <Link to={"/login"} className="font-bold text-black">
            {" "}
            Iniciar sesión
          </Link>
        </p>{" "}
      </div>
    </div>
  );
};
export default Register;
