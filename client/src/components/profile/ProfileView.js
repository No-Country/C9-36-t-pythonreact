import React, { useEffect, useState } from "react";
import { getProfilePhotoUrl } from "../../config/firebase";
import AuthProvider from "../login/AuthProvider";

const ProfileView = () => {
  const [profileUrl, setProfileUrl] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [state, setState] = useState(0);
  useEffect(() => {
    const getUrl = async () => {
      const url = await getProfilePhotoUrl(currentUser.profilePicture);
      setProfileUrl(url);
    };
    getUrl();
  }, [currentUser]);

  const handleUserNotRegistered = async (user) => {
    setState(3);
    setCurrentUser(user);
  };
  const handleUserLoggedIn = async (loggedUser) => {
    setCurrentUser(loggedUser);
  };
  if (state === 3) {
    return (
      <div className="mx-auto flex max-w-md flex-col bg-white shadow-lg">
        <div className="mb-4 flex items-center">
          <img
            src={profileUrl}
            alt="Imagen de perfil"
            className="h-[329px] w-[412px]"
          />
        </div>
        <div className="ml-[27px]">
          <div>
            {" "}
            <h2 className="text-5xl font-bold leading-10 text-[#264653]	">
              {currentUser.userName}
            </h2>
          </div>
          <div className="mb-2">
            <span className=" text-[38px] font-semibold text-[#2A9D8F]">
              {currentUser.stacks}
            </span>
          </div>
          <div className="mb-2">
            <p className="mb-4 text-base leading-relaxed text-black">
              {currentUser.descripcion}
            </p>
          </div>
          {/* Busco */}
          <div>
            <p className="mb-2 text-2xl leading-relaxed text-[#2A9D8F]">
              Que busco
            </p>
            <span className="text-sm text-gray-500">{currentUser.busco}</span>
          </div>
          {/* Tecnologias */}
          <div>
            <p className="mb-2 text-2xl leading-relaxed text-[#2A9D8F]">
              Tecnologias
            </p>
            <span className="text-sm text-gray-500">
              {currentUser.tecnologias.frontend && (
                <div>Frontend Developer</div>
              )}
              {currentUser.tecnologias.backend && <div>Backend Developer</div>}
              {currentUser.tecnologias.uxui && <div>UX/UI Designer</div>}
            </span>
          </div>
          {/* Pryoectos */}
          <div className="mb-2">
            <p className="mb-2 text-2xl leading-relaxed text-[#2A9D8F]">
              Proyectos
            </p>
            <p>{currentUser.proyectos}</p>
          </div>
          {/* Contacto */}
          <div className="mb-2">
            <p className="mb-2 text-2xl leading-relaxed text-[#2A9D8F]">
              Contacto
            </p>
            <p>{currentUser.proyectos}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <AuthProvider
      onUserNotRegistered={handleUserNotRegistered}
      onUserLoggedIn={handleUserLoggedIn}
    >
      <div>loading.... profileview</div>
    </AuthProvider>
  );
};

export default ProfileView;
