import React from "react";
import { Link } from "react-router-dom";
import IconBackPage from "../../assets/icons/IconBackPage";
import Linkedin from "../../assets/icons/Linkedin";
import LogoGmail from "../../assets/icons/LogoGmail";
import LogoTwitter from "../../assets/icons/LogoTwitter";
import LogoWs from "../../assets/icons/LogoWs";
import Navbar from "../Navbar";
import Navbartest from "../Navbartest";

const UserDetail = ({ data, profileUrls }) => {
  const handleEmail = (email) => {
    window.open(`mailto:${email}?subject=Subject&body=Body%20goes%20here`);
  };
  console.log(data);
  return (
    <>
      <div className="mx-auto mt-5 mb-24 flex max-w-md flex-col justify-center bg-white shadow-lg sm:columns-4">
        <div className="relative mx-4 mb-4">
          <img
            src={profileUrls}
            alt="Imagen de perfil"
            className="h-[329px] w-[412px]"
            async
          />
          <Link to={"/dashboard"} className="absolute top-1 left-1">
            <IconBackPage />
          </Link>
        </div>
        <div className="ml-[27px]">
          <div>
            {" "}
            <h2 className="text-5xl font-bold leading-10 text-[#264653]	">
              {data.userName}
            </h2>
          </div>
          <div className="mb-2">
            <span className=" text-[38px] font-semibold text-[#2A9D8F]">
              {data.stacks}
            </span>
          </div>
          <div className="mb-2">
            <p className="mb-4 text-base leading-relaxed text-black">
              {data.descripcion}
            </p>
          </div>
          {/* Busco */}
          <div>
            <p className="mb-2 text-2xl leading-relaxed text-[#2A9D8F]">
              Que busco
            </p>
            <span className="text-sm ">{data.busco}</span>
          </div>
          {/* Especialidades */}
          <div>
            <p className="mb-2 text-2xl leading-relaxed text-[#2A9D8F]">
              Especialidades
            </p>
            <span className="text-sm ">
              {data.especialidades && data.especialidades.frontend && (
                <div>Frontend Developer</div>
              )}
              {data.especialidades && data.especialidades.backend && (
                <div>Backend Developer</div>
              )}
              {data.especialidades && data.especialidades.uxui && (
                <div>UX/UI Designer</div>
              )}
            </span>
          </div>
          {/* TECNOLOGIAS */}
          <div>
            <p className="mb-2 text-2xl leading-relaxed text-[#2A9D8F]">
              Tecnologias
            </p>
            <div className="flex text-sm ">
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
          {/* Pryoectos */}
          <div className="mb-2">
            <p className="mb-2 text-2xl leading-relaxed text-[#2A9D8F]">
              Proyectos
            </p>
            <p>{data.proyectos}</p>
          </div>
          {/* Contacto */}
          <p className="mb-2 text-2xl leading-relaxed text-[#2A9D8F]">
            Contacto
          </p>
          <div className=" flex items-center justify-between">
            {/* Contacto */}
            {/* ws */}
            <div>
              <div>
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
              </div>
            </div>
            {/* EMAIL*/}
            <div>
              {data.email ? (
                <button
                  className="bg-transparent"
                  onClick={() => handleEmail(data.email)}
                >
                  <LogoGmail />
                </button>
              ) : (
                <LogoGmail />
              )}
            </div>
            {/* linkedin */}
            <div>
              {data.linkedin ? (
                <Link target={"_blank"} to={`${data.linkedin}`}>
                  <Linkedin />
                </Link>
              ) : (
                <Linkedin />
              )}
            </div>
            {/* Twitter */}
            <div>
              <div>
                {data.twitter ? (
                  <Link target={"_blank"} to={`${data.twitter}`}>
                    <LogoTwitter />
                  </Link>
                ) : (
                  <LogoTwitter />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default UserDetail;
