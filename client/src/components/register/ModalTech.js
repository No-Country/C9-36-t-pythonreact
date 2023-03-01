/* Este checkbox se va a mostrar cuando se necesiten elegir las tecnologias que utiliza el usurio */
import React, { useEffect, useState } from "react";
import { useUserContext } from "../../context/UserContext";
import { useChecked } from "./useChecked";
import { getUserInfo, updateUser } from "../../config/firebase";
const ModalTech = ({ onClose }) => {
  const { user } = useUserContext();
  const checkedInitial = {
    csharp: false,
    figma: false,
    javascript: false,
    phyton: false,
    react: false,
    sketch: false,
  };
  const [checked, handleClickCheckBox] = useChecked(checkedInitial);
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    const getDataUser = async () => {
      const userInfo = await getUserInfo(user.uid);
      console.log(userInfo);
      setCurrentUser(userInfo);
    };
    getDataUser();
    console.log(currentUser);
    console.log(setCurrentUser);
    console.log(currentUser);
  }, []);
  const handleTech = async () => {
    const updatedUser = {
      ...currentUser,
      tecnologias: checked,
    };
    await updateUser(updatedUser);
    setCurrentUser(updatedUser);
  };
  return (
    <>
      {/*  <div className="fixed m-auto rounded-lg bg-[#264653] shadow-lg sm:inset-40"> */}
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="sm:w-297 h-130 relative mx-10 rounded-lg bg-[#264653] p-8">
          <div>
            <p
              className="m-4 text-left text-2xl
       text-white"
            >
              Selecciona las tecnologías que utilizas
            </p>
            <button onClick={onClose}>
              <span className="text-right text-lg font-medium text-white">
                X
              </span>
            </button>
          </div>
          <div className="p-4">
            <label className="mb-4 flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-6 w-6 text-indigo-600"
                name="csharp"
                onChange={handleClickCheckBox}
                checked={checked.csharp}
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                className="ml-2 h-6 w-6"
                alt="C#"
              />
              <span className="ml-3 text-lg font-medium text-gray-900">C#</span>
            </label>
            <label className="mb-4 flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-6 w-6 text-indigo-600"
                name="figma"
                onChange={handleClickCheckBox}
                checked={checked.figma}
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                className="ml-2 h-6 w-6"
                alt="Figma"
              />
              <span className="ml-3 text-lg font-medium text-gray-900">
                Figma
              </span>
            </label>
            <label className="mb-4 flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-6 w-6 text-indigo-600"
                name="javascript"
                onChange={handleClickCheckBox}
                checked={checked.javascript}
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                className="ml-2 h-6 w-6"
                alt="JavaScript"
              />
              <span className="ml-3 text-lg font-medium text-gray-900">
                JavaScript
              </span>
            </label>
            <label className="mb-4 flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-6 w-6 text-indigo-600"
                name="phyton"
                onChange={handleClickCheckBox}
                checked={checked.phyton}
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                className="ml-2 h-6 w-6"
                alt="Python"
              />
              <span className="ml-3 text-lg font-medium text-gray-900">
                Phyton
              </span>
            </label>
            <label className="mb-4 flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-6 w-6 text-indigo-600"
                name="react"
                onChange={handleClickCheckBox}
                checked={checked.react}
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                className="ml-2 h-6 w-6"
                alt="React"
              />
              <span className="ml-3 text-lg font-medium text-gray-900">
                React
              </span>
            </label>
            <label className="mb-4 flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-6 w-6 text-indigo-600"
                name="sketch"
                onChange={handleClickCheckBox}
                checked={checked.sketch}
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg"
                className="ml-2 h-6 w-6"
                alt="Sketch"
              />
              <span className="ml-3 text-lg font-medium text-gray-900">
                Sketch
              </span>
            </label>
          </div>
          <div className="flex justify-end">
            <button
              className="w-24 origin-center scale-100 transform-gpu rounded-full  bg-[#2A9D8F] text-lg font-bold text-white hover:scale-95 focus:outline-none "
              onClick={() => {
                handleTech();
                onClose();
              }}
            >
              {" "}
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalTech;
