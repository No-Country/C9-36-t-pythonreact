import React from "react";
import { MdMailOutline } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { RiFacebookBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const ButtonsLogin = () => {
  return (
    <div className="flex flex-col gap-5 mt-12">
      <div className="flex justify-center">
        <Link to={"/registerEmail"}>
          <button
            className="bg-[#264653] flex gap-2 items-center rounded-full text-white text-
         h-[56px] px-10 text-base">
            <MdMailOutline className="text-3xl" />
            Registrate con tu e-mail
          </button>{" "}
        </Link>
      </div>
      <div className="flex justify-center">
        <button
          className="text-black flex gap-2 items-center rounded-full border-2 border-black text-
         h-[56px] px-12 text-base">
          <FaGoogle className="text-2xl text-black" />
          Registrate con Google
        </button>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-[#4B61B1] flex gap-2 items-center rounded-full  text-
         h-[56px] px-10 text-base text-white">
          <RiFacebookBoxLine className="text-3xl text-black" />
          Registrate con Facebook
        </button>
      </div>
    </div>
  );
};

export default ButtonsLogin;
