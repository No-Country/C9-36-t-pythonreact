import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProfilePhotoUrl, getUsersFromServer } from "../../config/firebase";
import Navbartest from "../navegation/Navbartest";
import styles from "./Perfiles.module.css";
import Loading from "../../assets/loading/Loading";
import { motion } from "framer-motion";
import { fadeIn } from "../../assets/variants";
function PerfilesFrontend() {
  const [users, setUsers] = useState([]);
  const [profileUrls, setProfileUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const fronts = users.filter(
    (el) => el.especialidades && el.especialidades.frontend === true
  );
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
    <div className={styles.body}>
      {" "}
      <Navbartest />
      <h1 className={styles.section__h1}>Buscá con quien trabajar</h1>
      {loading ? (
        <Loading />
      ) : (
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className={styles.gridContainer}
        >
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
                  {el.tecnologias && el.tecnologias.react === true && (
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                      className="ml-2 h-6 w-6"
                      alt="React"
                    />
                  )}
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default PerfilesFrontend;
