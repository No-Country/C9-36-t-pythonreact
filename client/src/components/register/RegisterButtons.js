// import React, { useState } from "react";
import { MdMailOutline } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { RiFacebookBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../config/firebase";
import { signInWithFacebook } from "../../config/firebase";

const ButtonsLogin = () => {
  const handleClickGoogle = () => {
    signInWithPopup(
      auth,
      provider
    ); /* .then((data) => setUser(data.user.email)); */
  };
  return (
    <div className="mt-12 flex flex-col gap-5">
      <div className="flex justify-center">
        <Link to={"/registerEmail"}>
          <button
            className="text- flex h-[56px] items-center gap-2 rounded-full bg-[#264653]
         px-10 text-base text-white"
          >
            <MdMailOutline className="text-3xl" />
            Registrate con tu e-mail
          </button>{" "}
        </Link>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleClickGoogle}
          className="text- flex h-[56px] items-center gap-2 rounded-full border-2 border-black
         px-12 text-base text-black"
        >
          <FaGoogle className="text-2xl text-black" />
          Registrate con Google
        </button>
      </div>
      <div className="flex justify-center">
        <button
          onClick={signInWithFacebook}
          className="text- flex h-[56px] items-center gap-2  rounded-full
         bg-[#4B61B1] px-10 text-base text-white"
        >
          <RiFacebookBoxLine className="text-3xl text-black" />
          Registrate con Facebook
        </button>
      </div>
    </div>
  );
};

export default ButtonsLogin;
