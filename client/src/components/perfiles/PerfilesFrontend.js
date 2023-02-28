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
      try {
        const users = await getUsersFromServer();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
    async function getProfileUrls() {
      try {
        const promises = fronts.map((el) =>
          getProfilePhotoUrl(el.profilePicture)
        );
        const urls = await Promise.all(promises);
        setProfileUrls(urls);
      } catch (error) {
        console.log(error);
      }
    }
    getProfileUrls();
  }, [fronts.length]);
  return (
    <div className={styles.gridContainer}>
      {fronts.map((el, index) => (
        <Link key={el.uid} to={`/user/${el.uid}`}>
          <div
            key={el.uid}
            className={styles.gridItem}
            style={{
              backgroundImage: `url(${profileUrls.find(
                (url, i) => i === index
              )})`,
            }}
          >
            <div className={styles.fondo}>
              <h2>{el.userName}</h2>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                className="ml-2 h-6 w-6"
                alt="JavaScript"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PerfilesFrontend;
