import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProfilePhotoUrl, getUsersFromServer } from "../../config/firebase";
import Navbartest from "../navegation/Navbartest";
import styles from "./Perfiles.module.css";

function PerfilesDesigner() {
  const [users, setUsers] = useState([]);
  const [profileUrls, setProfileUrls] = useState([]);
  const uxui = users.filter(
    (el) => el.especialidades && el.especialidades.uxui === true
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
        const promises = uxui.map((el) =>
          getProfilePhotoUrl(el.profilePicture)
        );
        const urls = await Promise.all(promises);
        setProfileUrls(urls);
      } catch (error) {
        console.log(error);
      }
    }
    getProfileUrls();
  }, [uxui.length]);

  return (
    <div className={styles.body}>
      <Navbartest />
      <h1 className={styles.section__h1}>Buscá con quien trabajar</h1>
      <div className={styles.gridContainer}>
        {uxui.map((el, index) => (
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
                {el.tecnologias && el.tecnologias.figma === true && (
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                    className="ml-2 h-6 w-6"
                    alt="Figma"
                  />
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default PerfilesDesigner;
