import React, { useEffect, useState } from "react";
import LogoUploadPhoto from "../../assets/LogoUploadPhoto";
import {
  getUserInfo,
  setUserProfilePhoto,
  updateUser,
} from "../../config/firebase";
import { useUserContext } from "../../context/UserContext";

const UpdateProfile = ({ onUpdateProfilePicture }) => {
  const [currentUser, setCurrentUser] = useState({});

  const { user } = useUserContext();
  useEffect(() => {
    const getDataUser = async () => {
      const userInfo = await getUserInfo(user.uid);
      setCurrentUser(userInfo);
    };
    getDataUser();
  }, [user]);
  const handleUploadProfilePhoto = async (e) => {
    e.preventDefault();
    const files = e.target.files;
    /* usamos una api de js para decodificar el archivo, transformarlo en un arreglo de bytes */
    const fileReader = new FileReader();
    if (fileReader && files && files.length > 0) {
      /* subimos 1 solo archivo */
      fileReader.readAsArrayBuffer(files[0]);
      fileReader.onload = async () => {
        const imageData = fileReader.result;
        const res = await setUserProfilePhoto(user.uid, imageData);
        if (res) {
          onUpdateProfilePicture();
          const tmpUser = { ...currentUser };
          tmpUser.profilePicture = res.metadata.fullPath;
          updateUser(tmpUser);
          setCurrentUser({ ...tmpUser });
        }
      };
    }
  };

  return (
    <button onClick={() => document.getElementById("fileInput").click()}>
      <LogoUploadPhoto />
      <input
        type="file"
        id="fileInput"
        className="hidden"
        onChange={handleUploadProfilePhoto}
      />
    </button>
  );
};

export default UpdateProfile;
