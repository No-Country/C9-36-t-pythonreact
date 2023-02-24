import React, { useEffect, useState } from "react";
import UserDetail from "./UserDetail";
import { useUserContext } from "../../context/UserContext";
import {
  getProfilePhotoUrl,
  getUserInfo,
  getUsersFromServer,
} from "../../config/firebase";
import { useParams } from "react-router-dom";
const UserDetailContainer = () => {
  const { user } = useUserContext();
  const { id } = useParams();
  console.log(id + "id");
  const [users, setUsers] = useState([]);
  const [profileUrls, setProfileUrls] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsersFromServer();
      setUsers(users);
      setData(users.find((el) => el.uid === id));
      console.log(users.find((el) => el.uid === id));
      const url = await getProfilePhotoUrl(
        users.find((el) => el.uid === id).profilePicture
      );
      setProfileUrls(url);
    };
    fetchUsers();
  }, []);
  return <UserDetail data={data} profileUrls={profileUrls} />;
};

export default UserDetailContainer;
