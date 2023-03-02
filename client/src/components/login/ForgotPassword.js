import { useState } from "react";
import { resetPassword } from "../../config/firebase";
import NavbarTop from "../navegation/NavbarTop";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [value, setValue] = useState(" ");
  const [message, setMessage] = useState(null);
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      /* LLamo a una funcion creada en config/firebase para resetear el password */
      await resetPassword(email);
      setError(null);
      setMessage("Se envió un email a tu casilla para resetear tu contraseña");
    } catch (error) {
      setError("Mail no registrado en nuestra base de datos");
    }
    setEmail("");
  };
  const classTw =
    "peer block w-full appearance-none border border-slate-300 rounded-md text-sm shadow-sm bg-transparent p-4 text-sm text-gray-900 focus:border-blue-800 focus:outline-none  focus:ring-0 rounded-sm";
  const classLabel =
    "transhtmlForm absolute top-5 -z-10 origin-[0] ml-1 -translate-y-6 scale-75 text-md text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600";
  return (
    <>
      <NavbarTop />
      <form
        onSubmit={onSubmit}
        className="m-8 mt-36 flex flex-col justify-center gap-6"
      >
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
            <span className="font-bold text-red-600">{error}</span>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-28 h-12 w-72 rounded-full bg-[#264653] font-semibold text-white"
          >
            Enviar correo electrónico
          </button>
        </div>
        {message && <p className="text-2xl font-bold">{message}</p>}
      </form>
    </>
  );
};

export default ForgotPassword;
