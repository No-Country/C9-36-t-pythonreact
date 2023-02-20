import Home from "../Home";
import { Link } from "react-router-dom";
const Register = () => {
    return (
    <div className="mt-10">
      <Home />
      <div className="flex justify-center mt-10">
            <h2 className="text-2xl text-center">¡El registro fué exitoso!</h2>
      </div>
      <div className="flex justify-center mt-10">
            <h2 className="text-2xl text-center">Completa tu perfil para que otros usuarios puedan conocerte y contactarte</h2>
      </div>
      <div className="flex flex-col gap-5 mt-12">
      <div className="flex justify-center">
        <Link to={""}>
          <button
            className="bg-[#264653] flex gap-2 items-center rounded-full text-white text-
         h-[56px] px-10 text-base">
            Completar perfil
          </button>{" "}
        </Link>
      </div>
      <div className="flex justify-center">
      <Link to={""}>
        <button
          className="text-black flex gap-2 items-center rounded-full border-2 border-black text-
         h-[56px] px-12 text-base">
          Completar luego
        </button>
        </Link>
      </div>

    </div>
    </div>
  );
};
export default Register;