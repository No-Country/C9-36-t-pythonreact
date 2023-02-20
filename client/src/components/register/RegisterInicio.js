import Home from "../Home";
import { Link } from "react-router-dom";
const Register = () => {
    return (
    <div className="mt-10">
      <Home />
      <div className="flex flex-col gap-5 mt-12">
      <div className="flex justify-center">
        <Link to={"/login"}>
          <button
            className="bg-[#264653] flex gap-2 items-center rounded-full text-white text-
         h-[56px] px-10 text-base">
            Iniciar sesión
          </button>{" "}
        </Link>
      </div>
      <div className="flex justify-center">
      <Link to={"/registerEmail"}>
        <button
          className="text-black flex gap-2 items-center rounded-full border-2 border-black text-
         h-[56px] px-12 text-base">
          Registrate  
        </button>
        </Link>
      </div>

    </div>
    </div>
  );
};
export default Register;