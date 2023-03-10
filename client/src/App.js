import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/navegation/Dashboard";
import Home from "./components/navegation/Home";
import LandingPage from "./components/navegation/LandingPage";
import Error404 from "./components/navegation/Error404";
import ForgotPassword from "./components/login/ForgotPassword";
import LoggedIn from "./components/login/LoggedIn";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import RegisterCodigo from "./components/register/RegisterCodigo";
import RegisterEmail from "./components/register/RegisterEmail";
import RegisterInicio from "./components/register/RegisterInicio";
import RegisterSpinner from "./components/register/RegisterSpinner";
import { LayoutPrivate } from "./layout/LayoutPrivate";
import ProfileView from "./components/profile/ProfileView";
import RegisterNewProfileFigma from "./components/register/RegisterNewProfileFigma";
import RegisterFin from "./components/register/RegisterFin";
import UserDetailContainer from "./components/users/UserDetailContainer";
import UserFigma from "./components/users/UserFigma";
import PerfilesFrontend from "./components/perfiles/PerfilesFrontend";
import PerfilesBackend from "./components/perfiles/PerfilesBackend";
import PerfilesDesigner from "./components/perfiles/PerfilesDesigner";
import AllProfiles from "./components/perfiles/AllProfiles";
import MyFavoritesUsers from "./components/users/MyFavoritesUsers";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LandingPage />} />
          <Route path={"/home"} element={<Home />} />
          <Route path={"/registerInicio"} element={<RegisterInicio />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/forgotpassword"} element={<ForgotPassword />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/registerEmail"} element={<RegisterEmail />} />
          <Route path={"/registerCodigo"} element={<RegisterCodigo />} />
          <Route path={"/registerSpinner"} element={<RegisterSpinner />} />
          <Route path={"/registerValidando"} element={<registerValidando />} />
          <Route path={"/registerFin"} element={<RegisterFin />} />
          <Route path={"/user/:id"} element={<UserDetailContainer />} />
          <Route path={"*"} element={<Error404 />} />

          <Route element={<LayoutPrivate />}>
            <Route path={"/dashboard"} element={<Dashboard />} />
            <Route path={"/loggedIn"} element={<LoggedIn />} />
            <Route path={"/profileview"} element={<ProfileView />} />
            <Route path={"/userfigma"} element={<UserFigma />} />
            <Route
              path={"/registernewprofilefigma"}
              element={<RegisterNewProfileFigma />}
            />
            <Route path={"/perfiles/frontend"} element={<PerfilesFrontend />} />
            <Route path={"/perfiles/backend"} element={<PerfilesBackend />} />
            <Route
              path={"/perfiles/designers"}
              element={<PerfilesDesigner />}
            />
            <Route path={"/perfiles/allprofiles"} element={<AllProfiles />} />
            <Route path={"/favoritesUsers"} element={<MyFavoritesUsers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
