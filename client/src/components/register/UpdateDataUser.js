import React, { useEffect, useState } from "react";
import LogoLapizEdit from "../../assets/LogoLapizEdit";
import { getUserInfo, updateUser } from "../../config/firebase";
import { useUserContext } from "../../context/UserContext";

const UpdateDataUser = () => {
  const { user } = useUserContext();
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const getDataUser = async () => {
      const userInfo = await getUserInfo(user.uid);
      setCurrentUser(userInfo);

      console.log(currentUser.userName);
    };
    getDataUser();
  }, [user]);

  const handleUpdate = async () => {
    const updatedUser = { ...currentUser, userName: "martita marta", age: 30 };
    await updateUser(updatedUser);
    setCurrentUser(updatedUser);
    console.log(updatedUser);
  };
  return (
    <button onClick={handleUpdate}>
      <LogoLapizEdit />
    </button>
  );
};
export default UpdateDataUser;
