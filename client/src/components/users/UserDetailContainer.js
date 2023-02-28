import React, { useEffect, useState } from "react";
import UserDetail from "./UserDetail";
import { getProfilePhotoUrl, getUsersFromServer } from "../../config/firebase";
import { useParams } from "react-router-dom";
import Loading from "../../assets/loading/Loading";
import UserFigma from "./UserFigma";
const UserDetailContainer = () => {
  const { id } = useParams();
  console.log(id + "id");
  const [users, setUsers] = useState([]);
  const [profileUrls, setProfileUrls] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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
  }, []);
  if (users) {
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
