import { useState } from "react";
import { resetPassword } from "../../config/firebase";
import Home from "../Home";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      /* LLamo a una funcion creada en config/firebase para resetear el password */
      await resetPassword(email);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };
  const classTw =
    "peer block w-full appearance-none border border-slate-300 rounded-md text-sm shadow-sm bg-transparent p-4 text-sm text-gray-900 focus:border-blue-800 focus:outline-none  focus:ring-0 rounded-sm";
  const classLabel =
    "transhtmlForm absolute top-5 -z-10 origin-[0] ml-1 -translate-y-6 scale-75 text-md text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600";
  return (
    <>
      <Home />
      <form
        onSubmit={onSubmit}
        className="m-8 flex justify-center flex-col gap-6">
        <div className="group relative z-0 ">
          <input
            type="email"
            value={email}
            name="email"
            id="email"
            className={classTw}
            placeholder=" "
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <label htmlFor="floating_email" className={classLabel}>
            Direccion de email
          </label>
          <div>
            <span className="text-red-600 font-bold">{error}</span>
          </div>
        </div>
        {/*  <input type="email" placeholder="Email" value={email} /> */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#264653] rounded-full w-72 h-12 text-white font-semibold mt-28">
            Enviar correo electrónico
          </button>
        </div>

        {error && <p>{error}</p>}
      </form>
    </>
  );
};

export default ForgotPassword;
