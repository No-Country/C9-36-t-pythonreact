import React, { useEffect, useState } from "react";
import LogoLapizEdit from "../../assets/LogoLapizEdit";
import UpdateProfile from "./UpdateProfile";
import ProfilePictur from "../profile/ProfilePictur";
import Modal from "./Modal";
import { useUserContext } from "../../context/UserContext";
import { getUserInfo } from "../../config/firebase";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import ModalEspecialidades from "./ModalEspecialidades";
import ModalTech from "./ModalTech";
import { Link } from "react-router-dom";
import LogoWs from "../../assets/icons/LogoWs";
import Linkedin from "../../assets/icons/Linkedin";
import LogoGmail from "../../assets/icons/LogoGmail";
import LogoTwitter from "../../assets/icons/LogoTwitter";
const RegisterNewProfileFigma = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEspeOpen, setIsModalEspeOpen] = useState(false);
  const [isModalTechOpen, setIsModalTechOpen] = useState(false);
  const [name, setName] = useState("");
  const [userState, setUserState] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [profilePicture, setProfilePicture] = useState(
    "https://www.figma.com/file/u935xTNuKIn0ewxra5Lt8s/No-Country-Project?node-id=725%3A16394&t=OGrK0yRdQamNHMcs-4"
  );
  const { user } = useUserContext();
  useEffect(() => {
    const getDataUser = async () => {
      const userInfo = await getUserInfo(user.uid);
      setCurrentUser(userInfo);
      setProfilePicture(userInfo.profilePicture);
    };
    getDataUser();
  }, [isModalOpen, isModalEspeOpen, isModalTechOpen]);

  function handleCloseModal() {
    setIsModalOpen(false);
    setIsModalEspeOpen(false);
    setIsModalTechOpen(false);
  }
  function handleUpdateProfilePicture() {
    setProfilePicture(`${Date.now()}_${user.uid}`);
  }
  const handleEmail = (email) => {
    window.open(`mailto:${email}?subject=Subject&body=Body%20goes%20here`);
  };

  return (
    <>
      <div className="flex justify-center">
        <h1 className="mt-5 text-[24px] font-bold leading-10 text-[#264653] sm:mt-10 sm:text-7xl">
          Crea tu perfil
        </h1>
      </div>
      {/* div padre */}
      <div className="mx-4 mt-12 mb-4 grid grid-cols-1 gap-2 sm:grid-cols-4">
        {/* COL 1 */}
        <div>
          <div className="mx-auto mt-16 grid justify-center sm:col-span-1">
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
            </div>
            <div>
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
              {isModalTechOpen ? (
                <ModalTech onClose={handleCloseModal} />
              ) : null}
            </div>
          </div>
        </div>
        {/* COL 2 */}
        <div className=" sm:col-start-2 sm:col-end-2">
          {" "}
          {/* NOMBRE */}
          <div className="mt-16 flex h-auto items-center justify-center rounded-sm bg-[#26465333] sm:h-40 sm:text-sm md:text-lg">
            <div className="ml-2">
              <button
                onClick={() => {
                  setIsModalOpen(!isModalOpen);
                  setName("Agrega tu nombre");
                }}
              >
                <LogoLapizEdit />
              </button>
            </div>
            <div className="flex-1">
              <p className="text-base font-semibold  text-[#264653]">
                {currentUser.userName
                  ? currentUser.userName
                  : "Agrega tu nombre"}
              </p>
              <p>Éste será el nombre con el que te verán otros usuarios.</p>
            </div>
          </div>
          {/* Descripcion */}
          <div className="mt-2 flex h-20 items-center justify-center overflow-scroll rounded-sm bg-[#26465333] sm:h-40 sm:text-sm md:text-lg">
            <div className="ml-2 flex items-center">
              <button
                onClick={() => {
                  setIsModalOpen(!isModalOpen);
                  setName("Descripción");
                }}
              >
                <LogoLapizEdit />
              </button>
            </div>
            <div className="my-4 flex-1">
              <p className=" text-base font-semibold text-[#264653]">
                Descripcion
              </p>
              <span>
                {currentUser.descripcion ? (
                  currentUser.descripcion
                ) : (
                  <p>
                    "Haz una breve descripción de quien eres para que otros
                    usuarios teconozcan."
                  </p>
                )}
              </span>
            </div>
          </div>
          {/* Especialidad */}
          <div className="mt-2 flex h-20 items-center justify-center rounded-sm bg-[#26465333] sm:h-40 sm:text-sm md:text-lg">
            <div className="ml-2">
              <button
                onClick={() => {
                  setIsModalEspeOpen(!isModalEspeOpen);
                }}
              >
                <LogoLapizEdit />
              </button>
            </div>
            <div className="flex-1">
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
              {currentUser.especialidades &&
                currentUser.especialidades.uxui && <div>UX/UI Designer</div>}
              <p>Describe el área en la que te especializas.</p>
            </div>
          </div>
        </div>
        {/* COL 3 */}
        <div className=" sm:col-start-3 sm:col-end-3">
          {" "}
          {/* Tecnologias */}
          <div className="flex h-20 min-w-fit items-center justify-center rounded-sm bg-[#26465333] sm:mt-16 sm:h-40 sm:text-sm md:text-lg">
            <div className="ml-2">
              <button
                onClick={() => {
                  setIsModalTechOpen(!isModalTechOpen);
                }}
              >
                <LogoLapizEdit />
              </button>
            </div>
            <div className="flex-1">
              <span className="text-base font-semibold  text-[#264653]">
                "Agrega tus tecnologías"
              </span>
              <div className="flex flex-wrap text-sm text-gray-500">
                {currentUser.tecnologias && currentUser.tecnologias.csharp && (
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                    className="ml-2 h-6 w-6"
                    alt="C#"
                  />
                )}
                {currentUser.tecnologias && currentUser.tecnologias.figma && (
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                    className="ml-2 h-6 w-6"
                    alt="Figma"
                  />
                )}
                {currentUser.tecnologias &&
                  currentUser.tecnologias.javascript && (
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                      className="ml-2 h-6 w-6"
                      alt="JavaScript"
                    />
                  )}
                {currentUser.tecnologias && currentUser.tecnologias.phyton && (
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                    className="ml-2 h-6 w-6"
                    alt="Python"
                  />
                )}
                {currentUser.tecnologias && currentUser.tecnologias.react && (
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    className="ml-2 h-6 w-6"
                    alt="React"
                  />
                )}
                {currentUser.tecnologias && currentUser.tecnologias.sketch && (
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg"
                    className="ml-2 h-6 w-6"
                    alt="Sketch"
                  />
                )}
              </div>
              <div>
                <p>Describe el área en la que te especializas.</p>
              </div>
            </div>
          </div>
          {/* Que busco  */}
          <div className="mt-2 flex h-20 items-center justify-center rounded-sm bg-[#26465333] sm:h-40 sm:text-sm md:text-lg">
            <div className="ml-2">
              <button
                onClick={() => {
                  setIsModalOpen(!isModalOpen);
                  setName("Que busco");
                }}
              >
                <LogoLapizEdit />
              </button>
            </div>
            <div className="flex-1">
              <p className="text-base font-semibold  text-[#264653]">
                Que busco
              </p>
              <div>
                {currentUser.busco ? (
                  currentUser.busco
                ) : (
                  <p>
                    Cuéntales a otros usuarios en que tipo de proyectos te
                    gustaría trabajar o a qué developers andas buscando.
                  </p>
                )}
              </div>
            </div>
          </div>
          {/* Proyectos */}
          <div className="md:text-md mt-2 flex h-20 items-center justify-center rounded-sm bg-[#26465333] sm:h-40 sm:text-sm">
            <div className="ml-2 flex items-center ">
              <button
                onClick={() => {
                  setIsModalOpen(!isModalOpen);
                  setName("Proyectos");
                }}
              >
                <LogoLapizEdit />
              </button>
            </div>
            <div className="flex-1">
              <p className="text-base font-semibold  text-[#264653]">
                Proyectos.
              </p>
              <span>
                {currentUser.proyectos
                  ? currentUser.proyectos
                  : "Haz una breve descripción de quien eres para que otros usuarios teconozcan."}
              </span>
            </div>
          </div>
        </div>
        {/* COL 4 */}

        <div className=" sm:col-start-4 sm:col-end-4">
          {/* Contacto */}
          <div className="md:text-md mt-2 flex h-20 items-center justify-center rounded-sm bg-[#26465333] sm:mt-16 sm:h-40 sm:text-sm">
            <div className="ml-2 flex items-center">
              <button
                onClick={() => {
                  setIsModalOpen(!isModalOpen);
                  setName("Contacto Whatsapp");
                }}
              >
                <LogoLapizEdit />
              </button>
            </div>
            <div className="flex-1">
              <p className="text-base font-semibold  text-[#264653]">
                Contacto
              </p>
              <span>
                Publica tu informacion de contacto para que otros usuarios
                puedan contactarte
              </span>
            </div>
          </div>
          {/* ws */}
          <div className="mt-2 flex items-center rounded-sm bg-[#26465333] sm:h-14">
            <div className="ml-2 flex items-center">
              <button
                className="flex justify-self-start"
                onClick={() => {
                  setIsModalOpen(!isModalOpen);
                  setName("Contacto Whatsapp");
                }}
              >
                <LogoLapizEdit />
              </button>
            </div>
            <div className="ml-4">
              {currentUser.ws && (
                <Link
                  target={"_blank"}
                  to={`https://api.whatsapp.com/send?phone=${currentUser.ws}&text=Hola!%20Me%20contacto%20desde%20hive!`}
                >
                  <LogoWs />
                </Link>
              )}
            </div>
            <div className="ml-4">
              {" "}
              <p>Whatsapp</p>
            </div>
          </div>
          {/* email */}
          <div className="mt-2 flex items-center rounded-sm bg-[#26465333] sm:h-14">
            <div className="ml-2 flex items-center">
              <button
                onClick={() => {
                  setIsModalOpen(!isModalOpen);
                  setName("Contacto mail");
                }}
              >
                <LogoLapizEdit />
              </button>
            </div>
            <div>
              <button
                className="mr-4 bg-transparent"
                onClick={() => handleEmail(currentUser.email)}
              >
                <LogoGmail />
              </button>
            </div>
            <div>
              <p>Email</p>
            </div>
          </div>
          {/* linkedin */}
          <div className="mt-1 flex items-center rounded-sm bg-[#26465333] sm:mt-12 sm:h-14">
            <div className="ml-2 flex items-center">
              <button
                onClick={() => {
                  setIsModalOpen(!isModalOpen);
                  setName("Contacto Linkedin");
                }}
              >
                <LogoLapizEdit />
              </button>
            </div>
            <div className="ml-4">
              {currentUser.linkedin && (
                <Link target={"_blank"} to={`${currentUser.linkedin}`}>
                  <Linkedin />
                </Link>
              )}
            </div>
            <div className="ml-4">
              <p>Linkedin</p>
            </div>
          </div>
          {/* Twitter */}
          <div className="mt-1 flex items-center rounded-sm bg-[#26465333] sm:h-14">
            <div className="ml-2 flex items-center">
              <button
                onClick={() => {
                  setIsModalOpen(!isModalOpen);
                  setName("Contacto Linkedin");
                }}
              >
                <LogoLapizEdit />
              </button>
            </div>
            <div className="ml-4">
              <LogoTwitter />
            </div>
            <div className="ml-4">
              <p>Twitter</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterNewProfileFigma;
