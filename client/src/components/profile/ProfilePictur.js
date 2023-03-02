import React, { useState, useEffect } from "react";
import { getProfilePhotoUrl, getUserInfo } from "../../config/firebase";
import { useUserContext } from "../../context/UserContext";
function ProfilePhoto({ profilePicture }) {
  const [profileUrl, setProfileUrl] = useState(null);
  const { user } = useUserContext();
  useEffect(() => {
    const getUrl = async () => {
      const userInfo = await getUserInfo(user.uid);
      const url = await getProfilePhotoUrl(userInfo.profilePicture);
      if (url) {
        setProfileUrl(url);
      } else {
        console.log("no carga la imagen de perfil");
      }
    };
    getUrl();
  }, [profilePicture, user.uid]);
  console.log(setProfileUrl);
  if (profileUrl === null) {
    return <div>No se encontró foto de perfil.</div>;
  } else {
    return (
      <div className="flex flex-col justify-center gap-2">
        <img className="w-60 rounded-xl" src={profileUrl} alt="Profile" />
      </div>
    );
  }
}
export default ProfilePhoto;
