import Home from "../navegation/Home";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="mt-10">
      <Home />
      <div className="mt-12 flex flex-col gap-5">
        <div className="flex justify-center">
          <Link to={"/login"}>
            <button
              className="text- flex h-[56px] items-center gap-2 rounded-full bg-[#264653]
         px-10 text-base text-white"
            >
              Iniciar sesión
            </button>{" "}
          </Link>
        </div>
        <div className="flex justify-center">
          <Link to={"/registerEmail"}>
            <button
              className="text- flex h-[56px] items-center gap-2 rounded-full border-2 border-black
         px-12 text-base text-black"
            >
              Registrate
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Register;
