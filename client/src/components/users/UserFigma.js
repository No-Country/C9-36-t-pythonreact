import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarTop from "../navegation/NavbarTop";
import Linkedin from "../../assets/icons/Linkedin";
import LogoGmail from "../../assets/icons/LogoGmail";
import LogoTwitter from "../../assets/icons/LogoTwitter";
import LogoWs from "../../assets/icons/LogoWs";
import Navbartest from "../navegation/Navbartest";
import { deleteUserFavorite, saveUserFavorite } from "../../config/firebase";
import IconAddFavorite from "../../assets/icons/IconAddFavorite";
import IconDeleteFavorite from "../../assets/icons/IconDeleteFavorite";
const UserFigma = ({ data, profileUrls, currentUser }) => {
  const [seleccion, setSeleccion] = useState("frontend");
  const [isFavorited, setIsFavorited] = useState(
    currentUser.favorites &&
      currentUser.favorites.find((el) => el.uid === data.uid)
  );
  const handleFavoriteClick = async () => {
    if (isFavorited) {
      await deleteUserFavorite(currentUser.uid, data);
    } else {
      await saveUserFavorite(currentUser.uid, data);
    }
    setIsFavorited(!isFavorited);
  };
  const handleEmail = (email) => {
    window.open(`mailto:${email}?subject=Subject&body=Body%20goes%20here`);
  };
  return (
    <>
      <Navbartest />
      <div className="mt-28 flex h-[87vh] justify-between bg-[#264653]">
        <div className="flex w-screen justify-around ">
          <div className="mt-10 ml-10 text-5xl font-bold text-white">
            <span className="my-2">
              {" "}
              <p className="mb-4">
                Estas <br />
              </p>
              <p className="mb-4">
                viendo el <br />
              </p>
              <p className="mb-4">
                perfil de: <br />
              </p>
            </span>
          </div>
          <div className="relative mx-10 mt-8 grid h-[480px] w-[600px] grid-cols-2 grid-rows-2 items-center justify-center rounded-md bg-white text-center">
            {/* 1 */}
            {currentUser.uid === data.uid ? (
              <>
                <span className="absolute top-1 right-2"></span>
              </>
            ) : isFavorited ? (
              <>
                <button
                  onClick={handleFavoriteClick}
                  className="absolute top-1 right-2"
                >
                  <IconDeleteFavorite />
                </button>
              </> /*  deleteUserFavorite(currentUser.uid, data); */
            ) : (
              <button
                onClick={handleFavoriteClick}
                className="absolute top-1 right-2"
              >
                <IconAddFavorite />
              </button>
            )}
            <div>
              {" "}
              <img
                src={profileUrls}
                alt="Imagen de perfil"
                className="ml-1 mt-1 h-[200px] w-[250px] overflow-hidden"
                async
              />
            </div>
            {/* 2 */}
            {/* Nombre */}
            <div className="relative ml-2">
              <div className="-mt-16 ml-2 w-56 text-left text-[#264653]">
                <h2 className="text-left text-4xl font-bold leading-10">
                  {data.userName}
                </h2>
              </div>

              <div className="mb-2 ml-2 text-left">
                <span className=" text-[38px] font-semibold text-[#2A9D8F]">
                  {data.stacks}
                </span>
              </div>
              <div className="mb-2">
                <p className="mb-4 ml-2 text-left text-base font-semibold leading-relaxed text-black sm:text-xs">
                  {data.descripcion}
                </p>
              </div>
            </div>
            {/* 3 */}
            <div className="relative">
              {/* Busco */}
              <div className="-mt-9 ml-2 text-left">
                <p className="mb-2 text-left text-2xl font-semibold leading-relaxed text-[#2A9D8F]">
                  Que busco
                </p>
                <span className="text-sm font-semibold text-black">
                  {data.busco}
                </span>
              </div>
              {/* TECNOLOGIAS */}
              <div className="ml-2">
                <p className="mb-2 text-left text-2xl font-semibold leading-relaxed text-[#2A9D8F]">
                  Tecnologias
                </p>
                <div className="flex text-sm text-gray-500">
                  {data.tecnologias && data.tecnologias.csharp && (
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                      className="ml-2 h-6 w-6"
                      alt="C#"
                    />
                  )}
                  {data.tecnologias && data.tecnologias.figma && (
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                      className="ml-2 h-6 w-6"
                      alt="Figma"
                    />
                  )}
                  {data.tecnologias && data.tecnologias.javascript && (
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                      className="ml-2 h-6 w-6"
                      alt="JavaScript"
                    />
                  )}
                  {data.tecnologias && data.tecnologias.phyton && (
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                      className="ml-2 h-6 w-6"
                      alt="Python"
                    />
                  )}
                  {data.tecnologias && data.tecnologias.react && (
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                      className="ml-2 h-6 w-6"
                      alt="React"
                    />
                  )}
                  {data.tecnologias && data.tecnologias.sketch && (
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg"
                      className="ml-2 h-6 w-6"
                      alt="Sketch"
                    />
                  )}
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className="relative ml-2">
              {/* Pryoectos */}
              <div className="-mt-16 mb-2 ml-2 text-left">
                <p className="mb-2 text-left text-xl font-semibold leading-relaxed text-[#2A9D8F]">
                  Proyectos
                </p>
                <p className="text-sm">{data.proyectos}</p>
              </div>
              {/* Contacto */}
              <div className="ml-2">
                <p className="mb-2 text-left text-2xl font-semibold leading-relaxed text-[#2A9D8F]">
                  Contacto
                </p>
              </div>
              {/* ws */}

              <div className="flex items-center">
                {data.ws ? (
                  <Link
                    target={"_blank"}
                    to={`https://api.whatsapp.com/send?phone=${data.ws}&text=Hola!%20Me%20contacto%20desde%20hive!`}
                  >
                    <LogoWs />
                  </Link>
                ) : (
                  <LogoWs />
                )}
                <p className="ml-4">WhatsApp</p>
              </div>

              {/* EMAIL*/}
              <div className="flex items-center text-left">
                {data.email ? (
                  <button
                    className="ml-0 mr-10 w-3 bg-transparent"
                    onClick={() => handleEmail(data.email)}
                  >
                    <LogoGmail />
                  </button>
                ) : (
                  <div className="mr-4 bg-transparent">
                    <LogoGmail />
                  </div>
                )}
                <p className="ml-0">Email</p>
              </div>
              {/* linkedin */}
              <div className="flex items-center">
                {data.linkedin ? (
                  <Link target={"_blank"} to={`${data.linkedin}`}>
                    <Linkedin />
                  </Link>
                ) : (
                  <Linkedin />
                )}
                <p className="ml-4">Linkedin</p>
              </div>
              {/* Twitter */}
              <div className="flex items-center">
                {data.twitter ? (
                  <Link target={"_blank"} to={`${data.twitter}`}>
                    <LogoTwitter />
                  </Link>
                ) : (
                  <LogoTwitter />
                )}
                <p className="ml-4">Twitter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserFigma;
