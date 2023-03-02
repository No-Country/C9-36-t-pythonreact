import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProfilePhotoUrl, getUsersFromServer } from "../../config/firebase";
import styles from "./Perfiles.module.css";
import Loading from "../../assets/loading/Loading";
function PerfilesFrontend() {
  const [users, setUsers] = useState([]);
  const [profileUrls, setProfileUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getUsersFromServer();
        setUsers(users);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchUsers();
    async function getProfileUrls() {
      try {
        const promises = users.map((el) =>
          getProfilePhotoUrl(el.profilePicture)
        );
        const urls = await Promise.all(promises);
        setProfileUrls(urls);
      } catch (error) {
        console.log(error);
      }
    }
    getProfileUrls();
  }, [users.length]);
  console.log(users);
  console.log(setUsers);
  console.log(profileUrls);
  return (
    <>
      {" "}
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.gridContainer}>
          {users.map((el, index) => (
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
                  {el.tecnologias && el.tecnologias.react === true && (
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                      className="ml-2 h-6 w-6"
                      alt="React"
                    />
                  )}{" "}
                  {el.tecnologias && el.tecnologias.javascript === true && (
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                      className="ml-2 h-6 w-6"
                      alt="JavaScript"
                    />
                  )}
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
      )}
    </>
  );
}

export default PerfilesFrontend;
