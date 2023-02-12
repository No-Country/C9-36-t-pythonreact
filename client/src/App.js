import Home from "./components/Home";
import Login from "./components/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/register/Register";
import RegisterEmail from "./components/register/RegisterEmail";
import Dashboard from "./components/Dashboard";
import { useUserContext } from "./context/UserContext";
import { LayoutPrivate } from "./layout/LayoutPrivate";
import ForgotPassword from "./components/login/ForgotPassword";
import Inicio from "./components/Inicio";
import RegisterCodigo from "./components/register/RegisterCodigo";

function App() {
  const { user } = useUserContext();

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<Landing/>}/> Cuando este creada la landing page siempre va a ser la pagina de inicio*/}
          <Route path={"/"} element={<Home />} />
          <Route path={"/inicio"} element={<Inicio />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/forgotpassword"} element={<ForgotPassword />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/registerEmail"} element={<RegisterEmail />} />
          <Route path={"/registerCodigo"} element={<RegisterCodigo />} />
          <Route element={<LayoutPrivate />}>
            <Route path={"/dashboard"} element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
