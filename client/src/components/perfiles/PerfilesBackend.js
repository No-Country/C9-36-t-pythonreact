import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProfilePhotoUrl, getUsersFromServer } from "../../config/firebase";
import Navbartest from "../navegation/Navbartest";
import styles from "./Perfiles.module.css";
import Loading from "../../assets/loading/Loading";

function PerfilesBackend() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const backs = users.filter(
    (el) => el.especialidades && el.especialidades.backend === true
  );

  const [profileUrls, setProfileUrls] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getUsersFromServer();
        setUsers(users);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch users", error);
        setLoading(false);
      }
    };
    fetchUsers();

    const getProfileUrls = async () => {
      try {
        const promises = backs.map((el) =>
          getProfilePhotoUrl(el.profilePicture)
        );
        const urls = await Promise.all(promises);
        setProfileUrls(urls);
      } catch (error) {
        console.error("Failed to fetch profile urls", error);
      }
    };
    getProfileUrls();
  }, [backs.length]);

  return (
    <div className={styles.body}>
      <Navbartest />
      <h1 className={styles.section__h1}>Buscá con quien trabajar</h1>
      {loading ? (
        <Loading />
      ) : (
        
        <div className={styles.gridContainer}>
          {backs.map((el, index) => (
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
                  {el.tecnologias && el.tecnologias.javascript === true && (
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                      className="ml-2 h-6 w-6"
                      alt="JavaScript"
                    />
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
export default PerfilesBackend;
