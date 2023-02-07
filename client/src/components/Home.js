import React from "react";
import Logo from "../assets/Logo";
import { MdMailOutline } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { RiFacebookBoxLine } from "react-icons/ri";
const Home = () => {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <Logo />
      </div>
      <div className="flex justify-center">
        <h1 className="text-3xl font-semibold mt-[1px]">hive</h1>
      </div>
      <div className="flex justify-center mt-12">
        <h2 className="text-2xl">¡Te damos la bienvenida!</h2>
      </div>
      <div className="flex flex-col gap-5 mt-12">
        <div className="flex justify-center">
          <button
            className="bg-[#354580] flex gap-2 items-center rounded-full text-white text-
              h-[56px] px-10 text-base">
            <MdMailOutline className="text-3xl" />
            Registrate con tu e-mail
          </button>
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
    </div>
  );
};

export default Home;
