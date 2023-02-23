import Home from "./components/Home";
import Login from "./components/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/register/Register";
import RegisterEmail from "./components/register/RegisterEmail";
import Dashboard from "./components/Dashboard";
import { LayoutPrivate } from "./layout/LayoutPrivate";
import ForgotPassword from "./components/login/ForgotPassword";
import LandingPage from "./components/LandingPage";
import RegisterCodigo from "./components/register/RegisterCodigo";
import RegisterSpinner from "./components/register/RegisterSpinner";
import LoggedIn from "./components/login/LoggedIn";
import RegisterNewProfile from "./components/register/RegisterNewProfile";
import ProfileView from "./components/profile/ProfileView";
import RegisterNewProfileFigma from "./components/register/RegisterNewProfileFigma";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LandingPage />} />
          <Route path={"/home"} element={<Home />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/forgotpassword"} element={<ForgotPassword />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/registerEmail"} element={<RegisterEmail />} />
          <Route path={"/registerCodigo"} element={<RegisterCodigo />} />
          <Route path={"/registerSpinner"} element={<RegisterSpinner />} />
          <Route element={<LayoutPrivate />}>
            <Route path={"/dashboard"} element={<Dashboard />} />
            <Route path={"/loggedIn"} element={<LoggedIn />} />
            <Route
              path={"/registernewprofile"}
              element={<RegisterNewProfile />}
            />
            <Route path={"/profileview"} element={<ProfileView />} />
            <Route
              path={"/registernewprofilefigma"}
              element={<RegisterNewProfileFigma />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
