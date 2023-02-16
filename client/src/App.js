import Home from "./components/Home";
import Login from "./components/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterInicio from "./components/register/RegisterInicio";
import Register from "./components/register/Register";
import RegisterEmail from "./components/register/RegisterEmail";
import Dashboard from "./components/Dashboard";
// import { useUserContext } from "./context/UserContext";
import { LayoutPrivate } from "./layout/LayoutPrivate";
import ForgotPassword from "./components/login/ForgotPassword";
import LandingPage from "./components/LandingPage";
import RegisterCodigo from "./components/register/RegisterCodigo";
import RegisterSpinner from "./components/register/RegisterSpinner";
import RegisterValidando from "./components/register/RegisterValidando";
import RegisterFin from "./components/register/RegisterFin";

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
          <Route path={"/registerValidando"} element={<RegisterValidando />} />
          <Route path={"/registerFin"} element={<RegisterFin />} />
          <Route element={<LayoutPrivate />}>
            <Route path={"/dashboard"} element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
