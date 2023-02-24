import React from "react";

const UserDetail = ({ data, profileUrls }) => {
  return (
    <div className="mx-auto flex max-w-md flex-col bg-white shadow-lg">
      <div className="mb-4 flex items-center">
        <img
          src={profileUrls}
          alt="Imagen de perfil"
          className="h-[329px] w-[412px]"
        />
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
          <span className="text-sm text-gray-500">{data.busco}</span>
        </div>
        {/* Especialidades */}
        <div>
          <p className="mb-2 text-2xl leading-relaxed text-[#2A9D8F]">
            Especialidades
          </p>
          <span className="text-sm text-gray-500">
            {data.especialidades && data.especialidades.frontend && (
              <div className="text-red-800">Frontend Developer</div>
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
        {/* Pryoectos */}
        <div className="mb-2">
          <p className="mb-2 text-2xl leading-relaxed text-[#2A9D8F]">
            Proyectos
          </p>
          <p>{data.proyectos}</p>
        </div>
        {/* Contacto */}
        <div className="mb-2">
          <p className="mb-2 text-2xl leading-relaxed text-[#2A9D8F]">
            Contacto
          </p>
          <p>{data.proyectos}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
