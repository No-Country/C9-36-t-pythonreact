import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProfilePhotoUrl, getUsersFromServer } from "../../config/firebase";
import styles from "./Perfiles.module.css";

function PerfilesDesigner() {
  const [users, setUsers] = useState([]);
  const [profileUrls, setProfileUrls] = useState([]);
  const uxui = users.filter(
    (el) => el.especialidades && el.especialidades.uxui === true
  );

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsersFromServer();
      setUsers(users);
    };
    fetchUsers();

    async function getProfileUrls() {
      const promises = uxui.map((el) => getProfilePhotoUrl(el.profilePicture));
      const urls = await Promise.all(promises);
      setProfileUrls(urls);
      console.log(urls);
    }
    getProfileUrls();
  }, [uxui.length]);
  console.log(profileUrls);
  console.log(uxui);
  console.log(users);

  return (
    <div className={styles.gridContainer}>
      {uxui.map((el, index) => (
        <Link key={el.uid} to={`/user/${el.uid}`}>
          <div key={el.uid} className={styles.gridItem}>
            <img
              src={profileUrls.find((url, i) => i === index)}
              alt="Imagen de perfil"
            />
            {el.userName}
          </div>
        </Link>
      ))}
    </div>
  );
}
export default PerfilesDesigner;
