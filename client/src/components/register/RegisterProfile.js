// import React, { useRef, useState } from "react";
// import {
//   existsUsername,
//   setUserProfilePhoto,
//   updateUser,
// } from "../../config/firebase";
// import AuthProvider from "../login/AuthProvider";

// const RegisterProfile = () => {
//   const [state, setState] = useState(0);
//   const [currentUser, setCurrentUser] = useState({});
//   const [userName, setUserName] = useState("");
//   const [profileUrl, setProfileUrl] = useState(null);
//   const fileRef = useRef();
//   const handleUserNotRegistered = async (user) => {
//     setState(3);
//     setCurrentUser(user);
//     /*  const url = await getProfilePhotoUrl(user.profilePicture);
//     setProfileUrl(url); */
//   };
//   const handleUserLoggedIn = async (loggedUser) => {
//     setCurrentUser(loggedUser);
//     console.log("busco la url de la foto");
//     /*   const url = await getProfilePhotoUrl(loggedUser.profilePicture);
//     setProfileUrl(url); */
//   };
//   console.log(state + "stateeeee deberia ser 3");
//   const handleInputUserName = (e) => {
//     setUserName(e.target.value);
//   };
//   const handleContinue = async () => {
//     if (userName !== "") {
//       const exists = await existsUsername(userName);
//       if (exists) {
//         setState(5);
//       } else {
//         const tmp = { ...currentUser };
//         tmp.userName = userName;
//         tmp.processComplete = false;
//         await updateUser(tmp);
//         setState(6);
//       }
//     }
//   };
//   if (state === 6) {
//     return <div>Ya puedes ir al dashboard a crear tu perfil</div>;
//   }
//   if (state === 3 || state === 5) {
//     /* Si esta logueado y no registrado aca tiene que completar su perfil */
//     const handleOpenFilePicker = () => {
//       if (fileRef.current) {
//         fileRef.current.click();
//       }
//     };
//     const handleChangeFile = (e) => {
//       const files = e.target.files;
//       /* usamos una api de js para decodificar el archivo, transformarlo en un arreglo de bytes */
//       const fileReader = new FileReader();
//       if (fileReader && files && files.length > 0) {
//         /* subimos 1 solo archivo */
//         fileReader.readAsArrayBuffer(files[0]);
//         fileReader.onload = async () => {
//           /* Si .result / la imagen esta codificada llamo a mi funcion para subirla a firestore */
//           const imageData = fileReader.result;
//           const res = await setUserProfilePhoto(currentUser.uid, imageData);
//           if (res) {
//             const tmpUser = { ...currentUser };
//             tmpUser.profilePicture = res.metadata.fullPath;
//             await updateUser(currentUser);
//             setCurrentUser({ ...tmpUser });
//             /* const url = await getProfilePhotoUrl(currentUser.profilePicture);
//             setProfileUrl(url); */
//           }
//         };
//       }
//     };
//     return (
//       <div className="flex flex-col gap-10 text-xl">
//         <span className="text-md font-bold">
//           Bienvenido {currentUser.displayName}
//         </span>
//         <p className="font-bold text-orange-500">Elije un nombre de usuario </p>

//         <div className="mt-2">
//           <input
//             placeholder="Ingresa el usuario"
//             type="text"
//             className="rounded-md border-x-2 border-black"
//             onChange={handleInputUserName}
//           ></input>
//         </div>
//         <div>
//           <img src={profileUrl} width={300} />
//         </div>
//         <div>
//           <button onClick={handleOpenFilePicker}>Elegir foto de perfil</button>
//           <input
//             type="file"
//             ref={fileRef}
//             className="hidden"
//             onChange={handleChangeFile}
//           ></input>
//         </div>
//         <div>
//           <button className="mt-4" onClick={handleContinue}>
//             Aceptar
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <AuthProvider
//       onUserNotRegistered={handleUserNotRegistered}
//       onUserLoggedIn={handleUserLoggedIn}
//     >
//       <div>loading.... profile</div>
//     </AuthProvider>
//   );
// };

// export default RegisterProfile;
