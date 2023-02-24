import React, { useEffect, useState } from "react";
import LogoLapizEdit from "../../assets/LogoLapizEdit";
import UpdateProfile from "./UpdateProfile";
import ProfilePictur from "../profile/ProfilePictur";
import Modal from "./Modal";
import { useUserContext } from "../../context/UserContext";
import { getUserInfo } from "../../config/firebase";
import ModalEspecialidades from "./ModalEspecialidades";
import ModalTech from "./ModalTech";
const RegisterNewProfileFigma = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEspeOpen, setIsModalEspeOpen] = useState(false);
  const [isModalTechOpen, setIsModalTechOpen] = useState(false);
  const [name, setName] = useState("");
  const [userState, setUserState] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [profilePicture, setProfilePicture] = useState("");
  const { user } = useUserContext();
  useEffect(() => {
    const getDataUser = async () => {
      const userInfo = await getUserInfo(user.uid);
      setCurrentUser(userInfo);
      setProfilePicture(userInfo.profilePicture);
    };
    console.log("se vuelve a pasar por el useEffect");
    getDataUser();
  }, [isModalOpen, isModalEspeOpen]);
  console.log(
    isModalOpen,
    profilePicture,
    setProfilePicture,
    user.uid,
    user,
    currentUser
  );
  function handleCloseModal() {
    setIsModalOpen(false);
    setIsModalEspeOpen(false);
    setIsModalTechOpen(false);
  }
  function handleUpdateProfilePicture() {
    setProfilePicture(`${Date.now()}_${user.uid}`);
  }
  console.log(userState);
  return (
    <div className="mx-auto grid grid-cols-1">
      <div className="flex justify-center">
        <h1 className="mt-5 text-[24px] font-bold leading-10 text-[#2A9D8F]">
          Agrega una foto a tu perfil
        </h1>
      </div>
      {/* Foto de perfil */}
      <div className="mx-auto mt-5 grid justify-center">
        <div className="flex w-full justify-center">
          <ProfilePictur
            profilePicture={profilePicture}
            handleUpdateProfilePicture={handleUpdateProfilePicture}
          />
        </div>
        <div className="mt-2 flex w-full justify-center">
          <UpdateProfile
            onUpdateProfilePicture={() =>
              handleUpdateProfilePicture(currentUser.profilePicture)
            }
          />
          {isModalOpen ? (
            <Modal
              onClose={handleCloseModal}
              nombre={name}
              setUserState={setUserState}
            />
          ) : null}
          {isModalEspeOpen ? (
            <ModalEspecialidades onClose={handleCloseModal} />
          ) : null}
          {isModalTechOpen ? <ModalTech onClose={handleCloseModal} /> : null}
        </div>
      </div>
      {/* Modal */}
      <div className="container mx-auto mt-5 flex justify-center gap-2 ">
        <div className="flex h-24 w-[379px] items-center justify-center rounded-sm bg-[#26465333]">
          <div className="ml-3">
            <button
              onClick={() => {
                setIsModalOpen(!isModalOpen);
                setName("Agrega tu nombre");
              }}
            >
              <LogoLapizEdit />
            </button>
          </div>
          <div className="ml-8">
            <p className="text-base font-semibold  text-[#264653]">
              {currentUser.userName ? currentUser.userName : "Agrega tu nombre"}
            </p>
            <p>Éste será el nombre con el que te verán otros usuarios.</p>
          </div>
        </div>
      </div>
      {/* especialidad */}
      <div className="container mx-auto mt-5 flex justify-center gap-2 ">
        <div className="flex h-24 w-[379px] items-center justify-center rounded-sm bg-[#26465333]">
          <div className="ml-3">
            <button
              onClick={() => {
                setIsModalEspeOpen(!isModalEspeOpen);
              }}
            >
              <LogoLapizEdit />
            </button>
          </div>
          <div className="ml-8">
            <span className="text-base font-semibold  text-[#264653]">
              "Agrega tu especialidad"
            </span>
            {currentUser.especialidades &&
              currentUser.especialidades.frontend && (
                <div>Frontend Developer</div>
              )}
            {currentUser.especialidades &&
              currentUser.especialidades.backend && (
                <div>Backend Developer</div>
              )}
            {currentUser.especialidades && currentUser.especialidades.uxui && (
              <div>UX/UI Designer</div>
            )}
            <p>Describe el área en la que te especializas.</p>
          </div>
        </div>
      </div>
      {/* TECNOLOGIAS */}
      <div className="container mx-auto mt-5 flex justify-center gap-2 ">
        <div className="flex h-24 w-[379px] items-center justify-center rounded-sm bg-[#26465333]">
          <div className="ml-3">
            <button
              onClick={() => {
                setIsModalTechOpen(!isModalTechOpen);
              }}
            >
              <LogoLapizEdit />
            </button>
          </div>
          <div className="ml-8">
            <span className="text-base font-semibold  text-[#264653]">
              "Agrega tus tecnologías"
            </span>
            {currentUser.tecnologias && currentUser.tecnologias.csharp && (
              <div>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                  className="ml-2 h-6 w-6"
                  alt="C#"
                />
              </div>
            )}
            {currentUser.tecnologias && currentUser.tecnologias.backend && (
              <div>Backend Developer</div>
            )}
            {currentUser.tecnologias && currentUser.tecnologias.uxui && (
              <div>UX/UI Designer</div>
            )}
            <p>Describe el área en la que te especializas.</p>
          </div>
        </div>
      </div>
      {/* Descripción */}
      <div className="container mx-auto mt-5 flex justify-center gap-2 ">
        <div className="flex h-24 w-[379px] items-center justify-center rounded-sm bg-[#26465333]">
          <div className="ml-4 flex items-center">
            <button
              onClick={() => {
                setIsModalOpen(!isModalOpen);
                setName("Descripción");
              }}
            >
              <LogoLapizEdit />
            </button>
          </div>
          <div className="ml-8">
            <p className="text-base font-semibold text-[#264653]">
              Descripcion
            </p>
            <p>
              {currentUser.descripcion
                ? currentUser.descripcion
                : "Haz una breve descripción de quien eres para que otros usuarios teconozcan."}
            </p>
          </div>
        </div>
      </div>
      {/* Proyectos */}
      <div className="container mx-auto mt-5 flex justify-center gap-2 ">
        <div className="flex h-24 w-[379px] items-center justify-start rounded-sm bg-[#26465333]">
          <div className="ml-4 flex items-center">
            <button
              onClick={() => {
                setIsModalOpen(!isModalOpen);
                setName("Proyectos");
              }}
            >
              <LogoLapizEdit />
            </button>
          </div>
          <div className="ml-8">
            <p className="text-base font-semibold  text-[#264653]">
              Proyectos.
            </p>
            <p>
              {currentUser.proyectos
                ? currentUser.proyectos
                : "Haz una breve descripción de quien eres para que otros usuarios teconozcan."}
            </p>
          </div>
        </div>
      </div>

      {/* Que busco */}
      <div className="container mx-auto mt-5 flex justify-center gap-2 ">
        <div className="flex h-24 w-[379px] items-center justify-center rounded-sm bg-[#26465333]">
          <div className="ml-3">
            <button
              onClick={() => {
                setIsModalOpen(!isModalOpen);
                setName("Que busco");
              }}
            >
              <LogoLapizEdit />
            </button>
          </div>
          <div className="ml-8">
            <p className="text-base font-semibold  text-[#264653]">Que busco</p>
            <span>
              {currentUser.busco ? (
                currentUser.busco
              ) : (
                <p>
                  Cuéntales a otros usuarios en que tipo de proyectos te
                  gustaría trabajar o a qué developers andas buscando.
                </p>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterNewProfileFigma;
