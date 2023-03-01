import Home from "../navegation/Home";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="mt-10">
      <Home />
      <div className="mt-10 flex justify-center">
        <h2 className="text-center text-2xl">¡El registro fué exitoso!</h2>
      </div>
      <div className="mt-10 flex justify-center">
        <h2 className="text-center text-2xl">
          Completa tu perfil para que otros usuarios puedan conocerte y
          contactarte
        </h2>
      </div>
      <div className="mt-12 flex flex-col gap-5">
        <div className="flex justify-center">
          <Link to={""}>
            <button
              className="text- flex h-[56px] items-center gap-2 rounded-full bg-[#264653]
         px-10 text-base text-white"
            >
              Completar perfil
            </button>{" "}
          </Link>
        </div>
        <div className="flex justify-center">
          <Link to={""}>
            <button
              className="text- flex h-[56px] items-center gap-2 rounded-full border-2 border-black
         px-12 text-base text-black"
            >
              Completar luego
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Register;
