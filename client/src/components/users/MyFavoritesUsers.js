import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../assets/loading/Loading";
import { getProfilePhotoUrl, getUserInfo } from "../../config/firebase";
import { useUserContext } from "../../context/UserContext";
import Navbartest from "../navegation/Navbartest";
import styles from "../perfiles/Perfiles.module.css";
const MyFavoritesUsers = () => {
  const [loading, setLoading] = useState(true);
  const { user } = useUserContext({});
  const [currentUser, setCurrentUser] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [profileUrls, setProfileUrls] = useState([]);

  useEffect(() => {
    const getDataUser = async () => {
      try {
        const userInfo = await getUserInfo(user.uid);
        setCurrentUser(userInfo);
        setFavorites(userInfo.favorites);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getDataUser();

    async function getProfileUrls() {
      try {
        const promises = favorites.map((el) =>
          getProfilePhotoUrl(el.profilePicture)
        );
        const urls = await Promise.all(promises);
        setProfileUrls(urls);
      } catch (error) {
        console.log(error);
      }
    }
    getProfileUrls();
  }, [favorites.length]);
  console.log(favorites.length);
  console.log(currentUser, "current user");
  return (
    <div className={styles.body}>
      <Navbartest />
      <h1 className={styles.section__h1}>Tus favoritos</h1>
      {loading ? (
        <Loading />
      ) : favorites === [] ? (
        <div>Esta vacio</div>
      ) : Array.isArray(favorites) && favorites.length > 0 ? (
        <div className={styles.gridContainer}>
          {favorites.map((el, index) => (
            <Link key={`${el.userName}-${index}`} to={`/user/${el.uid}`}>
              <div
                key={`${el.userName}-${index}`}
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
      ) : (
        <>
          <div>No hay favoritos</div>
        </>
      )}
    </div>
  );
};

export default MyFavoritesUsers;

/* <div className="grid grid-cols-3 gap-4">
          {currentUser.favorites === undefined ? (
            <div>No hay favoritos</div>
          ) : (
            currentUser.favorites?.map((el, index) => (
              <div
                key={`${el.userName}-${index}`}
                className="rounded-lg bg-white p-4 shadow-md"
              >
                <div className="text-lg font-medium">{el.userName}</div>
              </div>
            ))
          )}
        </div> */
