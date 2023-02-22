import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import ForgotPassword from "./components/login/ForgotPassword";
import LoggedIn from "./components/login/LoggedIn";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import RegisterCodigo from "./components/register/RegisterCodigo";
import RegisterEmail from "./components/register/RegisterEmail";
import RegisterInicio from "./components/register/RegisterInicio";
import RegisterSpinner from "./components/register/RegisterSpinner";
import { LayoutPrivate } from "./layout/LayoutPrivate";
/* import RegisterProfile from "./components/register/RegisterProfile"; */
import ProfileView from "./components/profile/ProfileView";
import RegisterNewProfile from "./components/register/RegisterNewProfile";
import RegisterNewProfileFigma from "./components/register/RegisterNewProfileFigma";


function App() {
  // const { user } = useUserContext();

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<Landing/>}/> Cuando este creada la landing page siempre va a ser la pagina de inicio*/}

          <Route path={"/"} element={<LandingPage />} />
          <Route path={"/home"} element={<Home />} />
          <Route path={"/registerInicio"} element={<RegisterInicio />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/forgotpassword"} element={<ForgotPassword />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/registerEmail"} element={<RegisterEmail />} />
          <Route path={"/registerCodigo"} element={<RegisterCodigo />} />
          <Route path={"/registerSpinner"} element={<RegisterSpinner />} />
          {/* <Route path={"/registerValidando"} element={<RegisterValidando />} />
          <Route path={"/registerFin"} element={<RegisterFin />} /> */}
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
