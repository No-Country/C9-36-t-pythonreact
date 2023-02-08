import { Field, Form, Formik } from "formik";
// import * as Yup from "yup";
import Home from "../Home";
const Register = () => {
  const onSubmit = (values) => {
    console.log(values);
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
          name: "",
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
    </div>
  );
};
export default Register;
