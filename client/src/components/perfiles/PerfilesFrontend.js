import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProfilePhotoUrl, getUsersFromServer } from "../../config/firebase";
import styles from "./Perfiles.module.css";

function PerfilesFrontend() {
  const [users, setUsers] = useState([]);
  const [profileUrls, setProfileUrls] = useState([]);

  /* const fronts = users.filter((el) => el.especialidades.frontend === true); */
  const fronts = users.filter(
    (el) => el.especialidades && el.especialidades.frontend === true
  );
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsersFromServer();
      setUsers(users);
    };
    fetchUsers();

    async function getProfileUrls() {
      const promises = fronts.map((el) =>
        getProfilePhotoUrl(el.profilePicture)
      );
      const urls = await Promise.all(promises);
      setProfileUrls(urls);
      console.log(urls);
    }
    getProfileUrls();
  }, [fronts.length]);
  console.log(profileUrls);
  console.log(users);
  console.log(fronts);
  return (
    <div className={styles.gridContainer}>
      {fronts.map((el, index) => (
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

export default PerfilesFrontend;

/* const fronts = users.filter(
    (el) => el.especialidades && el.especialidades.frontend === true
  );

  const getProfilePhotoUrls = async (users) => {
    const promises = users.map((el) => getProfilePhotoUrl(el.profilePicture));
    return await Promise.all(promises);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getUsersFromServer();
        setUsers(users);
        const urls = await getProfilePhotoUrls(users);
        setProfileUrls(urls);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUsers();
  }, []); */
