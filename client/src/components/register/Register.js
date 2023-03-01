import React from "react";
// import { Formik } from "formik";
import { useUserContext } from "../../context/UserContext";
import { useRedirectActiveUser } from "../hooks/UseRedirectActiveUser";
import NavbarTop from "../navegation/NavbarTop";
import RegisterButtons from "./RegisterButtons";

const Register = () => {
  const { user } = useUserContext();
  useRedirectActiveUser(user, "/dashboard");
  return (
    <>
      <NavbarTop />
      <div className="flex h-screen w-screen justify-center bg-[#264653]">
        <div className="bg-[#264653]">
          <div className="flex flex-col items-center justify-center">
            <h1 className="mt-36 text-6xl text-white">
              {" "}
              Regístrate y crea tu perfil{" "}
            </h1>
            <div className="mb-4 mt-16 h-[500] w-[350px] rounded-md">
              <RegisterButtons />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
