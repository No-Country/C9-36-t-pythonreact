import React, { useEffect, useState } from "react";
import { useUserContext } from "../../context/UserContext";
import { useChecked } from "./useChecked";
import IconFrontEnd from "../../assets/icons/IconFrontEnd";
import { IconBackend } from "../../assets/icons/IconBackend";
import { IconUxUi } from "../../assets/icons/IconUxUi";
import { getUserInfo, updateUser } from "../../config/firebase";

const ModalEspecialidades = ({ onClose }) => {
  const { user } = useUserContext();
  const checkedInitial = {
    frontend: false,
    backend: false,
    uxui: false,
  };
  const [checked, handleClickCheckBox] = useChecked(checkedInitial);
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    const getDataUser = async () => {
      const userInfo = await getUserInfo(user.uid);
      if (userInfo) {
        setCurrentUser(userInfo);
      } else {
        console.log("errorrr"); // hclgandle error
      }
    };
    if (user) {
      getDataUser();
    } else {
      // handle error
    }
  }, []);

  console.log(currentUser);
  console.log(setCurrentUser);
  console.log(currentUser);

  const handleTech = async () => {
    const updatedUser = {
      ...currentUser,
      especialidades: checked,
    };
    await updateUser(updatedUser);
    setCurrentUser(updatedUser);
  };
  return (
    <>
      {" "}
      <div className="fixed inset-0 bg-black bg-opacity-50">
        <div
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-lg
              bg-[#264653] p-4 shadow-lg"
          style={{ width: "379px", height: "338px" }}
        >
          <div className="flex h-full flex-col justify-between">
            <div className="flex flex-col">
              <div className="flex justify-between">
                <span className="ml-10 text-2xl font-medium text-[#FFFFFF]">
                  Elige tu especialidad
                </span>
                <button onClick={onClose}>
                  <span className="text-right text-lg font-medium text-white">
                    X
                  </span>
                </button>
              </div>
              {/* div especialidad */}
              <div className="flex w-auto justify-around border-b-[1px]">
                <label className="mb-4 mt-5 flex items-center text-[#FFFFFF]">
                  <IconFrontEnd />
                  <span className="ml-3 text-lg font-medium">
                    Frontend Developer
                  </span>
                  <input
                    type="checkbox"
                    className="form-checkbox ml-20 h-6 w-6 justify-end bg-[#264653] text-right text-[#2A9D8F]"
                    name="frontend"
                    onChange={handleClickCheckBox}
                    checked={checked.frontend}
                  />
                </label>
              </div>
              <div className="flex w-auto justify-around border-b-[1px]">
                <label className="mb-4 mt-5 flex items-center text-[#FFFFFF]">
                  <IconBackend />
                  <span className="ml-3 text-lg font-medium">
                    Backend Developer
                  </span>
                  <input
                    type="checkbox"
                    className="form-checkbox ml-[88px] h-6 w-6 justify-end text-right text-[#2A9D8F]"
                    name="backend"
                    onChange={handleClickCheckBox}
                    checked={checked.backend}
                  />
                </label>
              </div>
              <div className="flex justify-around border-b-[1px]">
                <label className="mb-4 mt-5 flex items-center text-[#FFFFFF]">
                  <IconUxUi />
                  <span className="ml-3 mr-auto text-lg font-medium">
                    UX/UI Designer
                  </span>
                  <input
                    type="checkbox"
                    className="form-checkbox ml-[120px] h-6 w-6 text-[#2A9D8F]"
                    name="uxui"
                    onChange={handleClickCheckBox}
                    checked={checked.uxui}
                  />
                </label>
              </div>
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
      </div>
    </>
  );
};

export default ModalEspecialidades;
