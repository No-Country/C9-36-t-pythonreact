import React, { useEffect, useState } from "react";
import LogoLapizEdit from "../../assets/LogoLapizEdit";
import UpdateProfile from "./UpdateProfilePicture";
import ProfilePictur from "../profile/ProfilePictur";
import Modal from "./Modal";
import { useUserContext } from "../../context/UserContext";
import { getUserInfo } from "../../config/firebase";
import ModalEspecialidades from "./ModalEspecialidades";
import ModalTech from "./ModalTech";
import { Link } from "react-router-dom";
import LogoWs from "../../assets/icons/LogoWs";
import Linkedin from "../../assets/icons/Linkedin";
import LogoGmail from "../../assets/icons/LogoGmail";
import LogoTwitter from "../../assets/icons/LogoTwitter";
import Navbartest from "../navegation/Navbartest";
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
      try {
        const userInfo = await getUserInfo(user.uid);
        if (userInfo) {
          console.log("entro a este if de user info");
          setCurrentUser(userInfo);
          setProfilePicture(userInfo.profilePicture);
        } else {
          console.log("no hay info de usuario");
        }
      } catch (error) {
        console.error(error);
      }
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
      <Navbartest />
      <div className="flex justify-center bg-white">
        <h1 className="mt-5 text-center text-[24px] text-4xl font-bold leading-10 text-[#264653] sm:mt-10 sm:text-7xl">
          Crea tu perfil
        </h1>
      </div>
      {/* div padre */}
      <div className="mx-4 mt-12 mb-4 grid h-screen grid-cols-1 gap-2 bg-white sm:flex">
        {/* COL 1 */}
        <div className="ml-8 flex justify-center sm:flex-none">
          <div className=" grid items-center justify-center">
            <div className="flex items-center justify-center">
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
        {/* COL 2.1 */}
        <div className="w-auto flex-col gap-4 sm:grid">
          {/* COL 1a */}
          <div className="sm:col-start-1 sm:col-end-2">
            {" "}
            {/* NOMBRE */}
            <div className="flex h-auto justify-center rounded-sm sm:mt-10  sm:h-40 sm:text-sm md:text-lg">
              <div className="ml-2">
                <button
                  className="items-center"
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
                <p className="sm:text-sm">
                  Éste será el nombre con el que te verán otros usuarios.
                </p>
              </div>
            </div>
            {/* Descripcion */}
            <div className="mt-2 flex justify-center rounded-sm  sm:mb-10  sm:h-40 sm:text-sm md:text-lg">
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
                    <p className="sm:text-sm">
                      "Haz una breve descripción de quien eres para que otros
                      usuarios teconozcan."
                    </p>
                  )}
                </span>
              </div>
            </div>
            {/* Especialidad */}
            <div className="mt-2 flex items-center justify-center rounded-sm  sm:h-40 sm:text-sm md:text-lg">
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
                    <div className="sm:text-sm">Frontend Developer</div>
                  )}
                {currentUser.especialidades &&
                  currentUser.especialidades.backend && (
                    <div className="sm:text-sm">Backend Developer</div>
                  )}
                {currentUser.especialidades &&
                  currentUser.especialidades.uxui && (
                    <div className="sm:text-sm">UX/UI Designer</div>
                  )}
              </div>
            </div>
          </div>
          {/* COL 2a */}
          <div className="mt-10 sm:col-start-2 sm:col-end-3">
            {" "}
            {/* Tecnologias */}
            <div className="flex min-w-fit rounded-sm sm:h-40 sm:text-sm md:text-lg">
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
                  {currentUser.tecnologias &&
                    currentUser.tecnologias.csharp && (
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
                  {currentUser.tecnologias &&
                    currentUser.tecnologias.phyton && (
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
                  {currentUser.tecnologias &&
                    currentUser.tecnologias.sketch && (
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg"
                        className="ml-2 h-6 w-6"
                        alt="Sketch"
                      />
                    )}
                </div>
                <div>
                  <p className="sm:text-sm">
                    Describe el área en la que te especializas.
                  </p>
                </div>
              </div>
            </div>
            {/* Que busco  */}
            <div className="mt-6 flex justify-center  sm:mb-10 sm:h-40 sm:text-sm md:text-lg">
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
                <p className="text-base font-semibold text-[#264653] sm:text-sm md:text-lg">
                  Que busco
                </p>
                <div>
                  {currentUser.busco ? (
                    currentUser.busco
                  ) : (
                    <p className="sm:text-sm md:text-sm">
                      Cuéntales a otros usuarios en que tipo de proyectos te
                      gustaría trabajar o a qué developers andas buscando.
                    </p>
                  )}
                </div>
              </div>
            </div>
            {/* Proyectos */}
            <div className="md:text-md mt-2 flex items-center justify-center rounded-sm  sm:h-40 sm:text-sm">
              <div className="ml-2 flex ">
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
          {/* COL 3 */}

          <div className="mt-9  sm:col-start-3 sm:col-end-4">
            {/* Contacto */}
            <div className="md:text-md flex  justify-center rounded-sm sm:h-40 sm:text-sm">
              <div className="ml-2 flex items-start">
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
            <div className="mt-2 flex items-center  rounded-sm  sm:h-14">
              <div className="ml-2 flex items-center">
                <button
                  className=""
                  onClick={() => {
                    setIsModalOpen(!isModalOpen);
                    setName("Contacto Whatsapp");
                  }}
                >
                  <LogoLapizEdit />
                </button>
              </div>
              <div className="ml-4 sm:ml-0 md:ml-6">
                {currentUser.ws && (
                  <Link
                    target={"_blank"}
                    to={`https://api.whatsapp.com/send?phone=${currentUser.ws}&text=Hola!%20Me%20contacto%20desde%20hive!`}
                  >
                    <LogoWs />
                  </Link>
                )}
              </div>
              <div className="m-2">
                {" "}
                <p>Whatsapp</p>
              </div>
            </div>
            {/* EMAIL*/}
            <div className="mt-2 flex items-center rounded-sm  sm:h-14">
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
              <div className="sm:-ml-4 md:ml-2">
                <button
                  className="bg-transparent"
                  onClick={() => handleEmail(currentUser.email)}
                >
                  <LogoGmail />
                </button>
              </div>
              <div className="-ml-4">
                <p>Email</p>
              </div>
            </div>
            {/* linkedin */}
            <div className="mt-1 flex items-center gap-2 rounded-sm  sm:mt-12 sm:h-14">
              <div className="mx-2 flex items-center gap-2">
                <button
                  onClick={() => {
                    setIsModalOpen(!isModalOpen);
                    setName("Contacto Linkedin");
                  }}
                >
                  <LogoLapizEdit />
                </button>
              </div>
              <div className="sm:-ml-4 md:ml-2">
                {currentUser.linkedin && (
                  <Link target={"_blank"} to={`${currentUser.linkedin}`}>
                    <Linkedin />
                  </Link>
                )}
              </div>
              <div className="md:ml-4">
                <p>Linkedin</p>
              </div>
            </div>
            {/* Twitter */}
            <div className="mt-1 flex items-center rounded-sm  sm:h-14 sm:gap-2">
              <div className="ml-2 flex items-center">
                <button
                  onClick={() => {
                    setIsModalOpen(!isModalOpen);
                    setName("Contacto Twitter");
                  }}
                >
                  <LogoLapizEdit />
                </button>
              </div>
              <div className="ml-4 sm:-ml-2 md:ml-4">
                {currentUser.twitter && (
                  <Link target={"_blank"} to={`${currentUser.twitter}`}>
                    <LogoTwitter />
                  </Link>
                )}
              </div>
              <div className="md:ml-4">
                <p>Twitter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterNewProfileFigma;
