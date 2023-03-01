import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Home from "../navegation/Home";
const Register = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  const classTw =
    "peer block w-full appearance-none border border-slate-300 rounded-md text-sm shadow-sm bg-transparent p-4 text-sm text-gray-900 focus:border-blue-800 focus:outline-none  focus:ring-0 rounded-sm";
  const classLabel =
    "transhtmlForm absolute top-5 -z-10 origin-[0] ml-1 -translate-y-6 scale-75 text-md text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600";
  const registerCodigoSchema = Yup.object().shape({
    codigo: Yup.string()
      .required("El codigo es obligatorio")
      .min(6, "El codigo ingresado es muy corto.")
      .max(10, "El codigo ingresado es muy largo."),
  });
  return (
    <div className="mt-10">
      <Home />
      <div className="mt-10 flex justify-center">
        <h2 className="text-center text-2xl">
          Hemos enviado un código a tu correo, colócalo aquí abajo para
          continuar.
        </h2>
      </div>
      <Formik
        initialValues={{
          codigo: "",
        }}
        validationSchema={registerCodigoSchema}
        onSubmit={onSubmit}
      >
        <Form className="m-6 flex flex-col justify-center gap-2">
          <div className="group relative z-0 mb-6 w-full">
            <Field
              type="number"
              name="codigo"
              id="codigo"
              className={classTw}
              placeholder=" "
              required
            />
            <ErrorMessage name="codigo" component="div" />
            <label htmlFor="floating_email" className={classLabel}>
              Ingresa el código
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
    </div>
  );
};
export default Register;
