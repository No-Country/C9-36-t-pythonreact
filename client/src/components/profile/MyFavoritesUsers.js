import React, { useEffect, useState } from 'react'
import { getUserInfo } from '../../config/firebase';
import { useUserContext } from '../../context/UserContext'
import Navbartest from '../navegation/Navbartest';

const MyFavoritesUsers = () => {
  const {user} = useUserContext({});
  const [currentUser, setCurrentUser] = useState({});
  const [favorites, setFavorites] = useState([])
  useEffect(() => {
    const getDataUser = async () => {
      try {
        const userInfo = await getUserInfo(user.uid);
        setCurrentUser(userInfo);
        setFavorites(userInfo.favorites)
      } catch (error) {
        console.log(error)
      }
    };
    
    console.log(favorites);
    getDataUser();
  }, []);
  console.log(setFavorites);
  console.log(favorites);
  return (
    <>
    <Navbartest/>

  { <div className="grid grid-cols-3 gap-4">

    {currentUser.favorites === undefined ? <div>No hay favoritos</div> :
    currentUser.favorites?.map((el,index)=>(
        <div key={`${el.userName}-${index}`} className="bg-white p-4 rounded-lg shadow-md">
          <div className="text-lg font-medium">{el.userName}</div>
        </div>
      ))}
  </div> }
    <div className="grid grid-cols-3 gap-4">
  {/*     {favorites.map(user => (
        <div key={currentUser.uid} className="bg-white p-4 rounded-lg shadow-md">
          <div className="text-lg font-medium">{user.userName}</div>
        </div>
      ))} */}
    </div>

    </>
  )
}

export default MyFavoritesUsers