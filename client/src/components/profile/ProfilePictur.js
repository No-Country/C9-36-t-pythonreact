import React, { useState, useEffect } from "react";
import { getProfilePhotoUrl, getUserInfo } from "../../config/firebase";
import { useUserContext } from "../../context/UserContext";
function ProfilePhoto({ profilePicture, handleUpdateProfilePicture }) {
  const [profileUrl, setProfileUrl] = useState(null);
  const { user } = useUserContext();
  useEffect(() => {
    const getUrl = async () => {
      const userInfo = await getUserInfo(user.uid);
      const url = await getProfilePhotoUrl(userInfo.profilePicture);
      setProfileUrl(url);
    };
    getUrl();
  }, [profilePicture, user.uid]);

  if (profileUrl === null) {
    return <div>No se encontró foto de perfil.</div>;
  } else {
    return (
      <img
        className="w-60"
        src={profileUrl}
        alt="Profile"
        onClick={() => handleUpdateProfilePicture()}
      />
    );
  }
}
export default ProfilePhoto;
