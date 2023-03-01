import React, { useEffect, useState } from "react";
import UserDetail from "./UserDetail";
import { getProfilePhotoUrl, getUserInfo, getUsersFromServer } from "../../config/firebase";
import { useParams } from "react-router-dom";
import Loading from "../../assets/loading/Loading";
import UserFigma from "./UserFigma";
import { useLayoutEffect } from "react";
import { useUserContext } from "../../context/UserContext";

const UserDetailContainer = () => {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [profileUrls, setProfileUrls] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 700);
  const {user} = useUserContext();
  useLayoutEffect(() => {
    const updateIsSmallScreen = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", updateIsSmallScreen);
    return () => window.removeEventListener("resize", updateIsSmallScreen);
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getUsersFromServer();
        setUsers(users);
        const user = users.find((el) => el.uid === id);
        if (user) {
          setData(user);
          const url = await getProfilePhotoUrl(user.profilePicture);
          setProfileUrls(url);
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
    /* Me traigo al usuario que esta navegando para guardar o actualizar su lista de favoritos */
    const getDataUser = async () => {
      const userInfo = await getUserInfo(user.uid);
      setCurrentUser(userInfo);
    };
    getDataUser();
  }, []);
  if (users) {
    return (
      <div>
        {loading ? (
          <Loading />
        ) : isSmallScreen ? (
          <UserDetail data={data} profileUrls={profileUrls} currentUser={currentUser} />
        ) : (
          <UserFigma data={data} profileUrls={profileUrls} />
        )}
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="text-4xl">El producto no existe</h1>
      </div>
    );
  }
};

export default UserDetailContainer;

/* useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsersFromServer();
      setUsers(users);
      const user = users.find((el) => el.uid === id);
      if (user) {
        setData(user);
        const url = await getProfilePhotoUrl(user.profilePicture);
        setProfileUrls(url);
      }
    };
    fetchUsers();
  }, []);  */
/*  if (users) {
    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <UserFigma data={data} profileUrls={profileUrls} />
        )}
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="text-4xl">El producto no existe</h1>
      </div>
    );
  }
}; */
