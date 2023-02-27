import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProfilePhotoUrl, getUsersFromServer } from "../../config/firebase";
import styles from "./Perfiles.module.css";

function PerfilesBackend() {
  const [users, setUsers] = useState([]);
  const backs = users.filter(
    (el) => el.especialidades && el.especialidades.backend === true
  );

  const [profileUrls, setProfileUrls] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsersFromServer();
      setUsers(users);
    };
    fetchUsers();

    async function getProfileUrls() {
      const promises = backs.map((el) => getProfilePhotoUrl(el.profilePicture));
      const urls = await Promise.all(promises);
      setProfileUrls(urls);
      console.log(urls);
    }
    getProfileUrls();
  }, [backs.length]);
  console.log(profileUrls);
  console.log(users);
  console.log(backs);

  return (
    <div className={styles.gridContainer}>
      {backs.map((el, index) => (
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
export default PerfilesBackend;
