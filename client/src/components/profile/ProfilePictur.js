import React, { useState, useEffect } from "react";
import { getProfilePhotoUrl, getUserInfo } from "../../config/firebase";
import { useUserContext } from "../../context/UserContext";
import Loading from "../../assets/loading/Loading";
function ProfilePhoto({ profilePicture }) {
  const [profileUrl, setProfileUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useUserContext();
  useEffect(() => {
    const getUrl = async () => {
      const userInfo = await getUserInfo(user.uid);
      const url = await getProfilePhotoUrl(userInfo.profilePicture);
      if (url) {
        setProfileUrl(url);
        setLoading(false);
      } else {
        console.log("no carga la imagen de perfil");
        setLoading(false);
      }
    };
    getUrl();
  }, [profilePicture, user.uid]);
  console.log(setProfileUrl);
  return (
    <>
      {loading ? (
        <Loading />
      ) : profileUrl === null ? (
        <div>No se encontró foto de perfil.</div>
      ) : (
        <div className="flex flex-col justify-center gap-2">
          <img className="w-60 rounded-xl" src={profileUrl} alt="Profile" />
        </div>
      )}
    </>
  );
}
export default ProfilePhoto;

/* antes del loading */
/* if (profileUrl === null) {
  return <div>No se encontró foto de perfil.</div>;
} else {
  return (
    <div className="flex flex-col justify-center gap-2">
      <img className="w-60 rounded-xl" src={profileUrl} alt="Profile" />
    </div>
  );
} */
