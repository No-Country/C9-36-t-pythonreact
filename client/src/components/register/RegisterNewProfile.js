import React, { useRef, useState } from "react";
import { setUserProfilePhoto } from "../../config/firebase";
import AuthProvider from "../login/AuthProvider";
import { updateUser } from "../../config/firebase";
import { Link } from "react-router-dom";
function RegisterNewProfile() {
  const [currentUser, setCurrentUser] = useState({});
  const [state, setState] = useState(0);
  const [userName, setUserName] = useState("");
  const [stacks, setStacks] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tecnologias, setTecnologias] = useState("");
  const [proyectos, setProyectos] = useState("");
  const [contacto, setContacto] = useState("");
  const [busco, setBusco] = useState("");
  const [photoMessage, setPhotoMessage] = useState(false);
  const [formMessage, setFormMessage] = useState(false);
  const fileRef = useRef();
  const handleSubmit = async (event) => {
    event.preventDefault();
    await handleNewUser(
      userName,
      stacks,
      descripcion,
      proyectos,
      busco,
      tecnologias,
      contacto
    );
    setBusco("");
    setUserName("");
    setStacks("");
    setTecnologias("");
    setDescripcion("");
    setProyectos("");
    setContacto("");
  };
  const handleUserNotRegistered = async (user) => {
    setState(3);
    setCurrentUser(user);
  };
  const handleUserLoggedIn = async (loggedUser) => {
    setState(3);
    setCurrentUser(loggedUser);
  };
  const handleNewUser = async () => {
    const tmp = { ...currentUser };
    if (userName && userName.trim() !== "") {
      tmp.userName = userName;
    }
    if (stacks && stacks.trim() !== "") {
      tmp.stacks = stacks;
    }
    if (descripcion && descripcion.trim() !== "") {
      tmp.descripcion = descripcion;
    }
    if (proyectos && proyectos.trim() !== "") {
      tmp.proyectos = proyectos;
    }
    if (busco && busco.trim() !== "") {
      tmp.busco = busco;
    }
    if (contacto && contacto.trim() !== "") {
      tmp.contacto = contacto;
    }
    if (tecnologias && tecnologias.trim() !== "") {
      tmp.tecnologias = tecnologias;
    }
    await updateUser(tmp);
    setFormMessage(true);
    setState(6);
  };
  if (state === 3) {
    const handleOpenFilePicker = () => {
      if (fileRef.current) {
        fileRef.current.click();
      }
    };
    const handleChangeFile = (e) => {
      const files = e.target.files;
      /* usamos una api de js para decodificar el archivo, transformarlo en un arreglo de bytes */
      const fileReader = new FileReader();
      if (fileReader && files && files.length > 0) {
        /* subimos 1 solo archivo */
        fileReader.readAsArrayBuffer(files[0]);
        fileReader.onload = async () => {
          const imageData = fileReader.result;
          const res = await setUserProfilePhoto(currentUser.uid, imageData);
          if (res) {
            const tmpUser = { ...currentUser };
            tmpUser.profilePicture = res.metadata.fullPath;
            await updateUser(tmpUser);
            setCurrentUser({ ...tmpUser });
            setPhotoMessage(true);
          }
        };
      }
    };
    return (
      <>
        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-md">
          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="nombre"
            >
              Nombre:
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="nombre"
              type="text"
              value={userName}
              placeholder="Ingresa tu nombre completo"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="stacks"
            >
              Stacks:
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="stacks"
              type="text"
              placeholder="Ingresa tus stacks"
              value={stacks}
              onChange={(e) => setStacks(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="descripcion"
            >
              Descripción:
            </label>
            <textarea
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="descripcion"
              placeholder="Ingresa una descripcion personal"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>
          {/* Busco */}
          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="busco"
            >
              Busco:
            </label>
            <textarea
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="busco"
              placeholder="Ingresa tus preferencias de busqueda"
              value={busco}
              onChange={(e) => setBusco(e.target.value)}
            />
          </div>
          {/* Tecnologias */}
          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="busco"
            >
              Tecnologias:
            </label>
            <textarea
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="busco"
              placeholder="Ingresa las tecnologias sabes usar"
              value={tecnologias}
              onChange={(e) => setTecnologias(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="proyectos"
            >
              Proyectos:
            </label>
            <textarea
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="proyectos"
              placeholder="Ingresa tus proyectos o tu link de Github"
              value={proyectos}
              onChange={(e) => setProyectos(e.target.value)}
            />
          </div>
          {/* Contacto */}
          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="proyectos"
            >
              Contacto:
            </label>
            <textarea
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="contacto"
              value={contacto}
              placeholder="Ingresa tu numero de telefono, mail y perfil de linkedin"
              onChange={(e) => setContacto(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              className="focus:shadow-outline mt-2 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              Enviar
            </button>
          </div>
          <div className="text-center text-xl font-semibold text-[#264653]">
            {formMessage && <div>Perfil actualizado correctamente</div>}
          </div>
          <Link
            to="/profileview"
            className="mr-2 mb-2 rounded-lg bg-gradient-to-br from-green-400 to-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800"
          >
            Ver PERFIL
          </Link>
        </form>
        <div className="text-center text-xl font-semibold text-[#264653]">
          {photoMessage && <div>Foto Cargada correctamente</div>}
        </div>
        <div className="mt-4 flex justify-center">
          <button
            className="mr-2 mb-2 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
            onClick={handleOpenFilePicker}
          >
            Elegir foto de perfil
          </button>
          <input
            type="file"
            ref={fileRef}
            className="hidden"
            onChange={handleChangeFile}
          ></input>
        </div>
      </>
    );
  }

  return (
    <AuthProvider
      onUserNotRegistered={handleUserNotRegistered}
      onUserLoggedIn={handleUserLoggedIn}
    >
      <div>loading.... profile</div>
    </AuthProvider>
  );
}

export default RegisterNewProfile;
