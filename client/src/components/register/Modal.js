import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { getUserInfo, updateUser } from "../../config/firebase";
import { useUserContext } from "../../context/UserContext";

function Modal({ onClose, nombre, setUserState }) {
  const { user } = useUserContext();
  const [currentUser, setCurrentUser] = useState({});
  const [name, setName] = useState("");
  useEffect(() => {
    const getDataUser = async () => {
      const userInfo = await getUserInfo(user.uid);
      setCurrentUser(userInfo);
      console.log(currentUser.userName);
    };
    getDataUser();
  }, [user]);
  const handleUpdate = async () => {
    const updatedUser = { ...currentUser, userName: name };
    await updateUser(updatedUser);
    setCurrentUser(updatedUser);
    console.log(updatedUser);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
    setUserState(name);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-297 h-130 relative rounded-lg bg-[#264653] p-8">
        <button
          className="absolute top-0 right-0 mt-4 mr-4 text-white hover:text-gray-400 focus:outline-none"
          onClick={onClose}
        >
          <AiOutlineClose className="h-6 w-6" />
        </button>
        <h2 className="mb-4 text-xl text-white">{`${nombre}`}</h2>
        <input
          type="text"
          className="mb-4 w-full rounded-md bg-white py-2 px-4"
          value={name}
          onChange={handleNameChange}
        />
        <button
          className=" w-20 origin-center scale-100 transform-gpu rounded-full  bg-[#2A9D8F] text-lg font-bold text-white hover:scale-95 focus:outline-none"
          onClick={() => {
            handleUpdate();
            onClose();
          }}
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}

export default Modal;
